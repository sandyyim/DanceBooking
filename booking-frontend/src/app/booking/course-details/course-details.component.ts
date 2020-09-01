import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
  EventEmitter,
  Output,
} from '@angular/core';
import { AuthenticationService } from '../../authentication.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../common/course';
import {
  CalendarModule,
  DateAdapter,
  CalendarView,
  CalendarEvent,
} from 'angular-calendar';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  isSameMonth,
  isSameDay,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  startOfDay,
  endOfDay,
  format,
} from 'date-fns';
import { BookingService } from '../booking.service';

interface Film {
  id: number;
  title: string;
  release_date: string;
}

function getTimezoneOffsetString(date: Date): string {
  const timezoneOffset = date.getTimezoneOffset();
  const hoursOffset = String(
    Math.floor(Math.abs(timezoneOffset / 60))
  ).padStart(2, '0');
  const minutesOffset = String(Math.abs(timezoneOffset % 60)).padEnd(2, '0');
  const direction = timezoneOffset > 0 ? '-' : '+';
  console.log(`T00:00:00${direction}${hoursOffset}:${minutesOffset}`);
  return `T00:00:00${direction}${hoursOffset}:${minutesOffset}`;
}

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent implements OnInit {
  view: CalendarView = CalendarView.Week;

  viewDate: Date = new Date();

  currentDate: Date = new Date();

  events$: Observable<CalendarEvent<{ course: Course }>[]>;

  // activeDayIsOpen: boolean = false;

  dayStartHour = 9;

  dayEndHour = 22;

  locale: string = 'en';

  viewChange = new EventEmitter<CalendarView>();
  viewDateChange = new EventEmitter<Date>();

  //testing
  // get data(): string {
  //   return this.bookingService.sharedData;
  // }

  // set data(value: string) {
  //   this.bookingService.sharedData = 'value';
  // }

  constructor(
    private httpClient: HttpClient,
    private bookingService: BookingService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fetchEvents();
  }

  fetchEvents(): void {
    const getStart: any = {
      month: startOfMonth,
      week: startOfWeek,
      day: startOfDay,
    }[this.view];

    const getEnd: any = {
      month: endOfMonth,
      week: endOfWeek,
      day: endOfDay,
    }[this.view];

    console.log(this.viewDate);
    let options = {
      params: new HttpParams()
        .append('from', format(getStart(this.viewDate), 'yyyy-MM-dd'))
        .append('to', format(getEnd(this.viewDate), 'yyyy-MM-dd')),
    };

    // .set(
    //   'primary_release_date.gte',
    //   format(getStart(this.viewDate), 'yyyy-MM-dd')
    // )
    // .set(
    //   'primary_release_date.lte',
    //   format(getEnd(this.viewDate), 'yyyy-MM-dd')
    // )
    // .set('api_key', '0ec33936a68018857d727958dca1424f');

    this.events$ = this.httpClient
      .post('http://localhost:8080/course/browse', {}, options)
      .pipe(
        map((results: Course[]) => {
          return results.map((course: Course) => {
            return {
              title: course.courseName,
              start: new Date(
                course.courseDate + 'T' + course.courseStartTime + '+08:00'
              ),
              end: new Date(
                course.courseDate + 'T' + course.courseEndTime + '+08:00'
              ),
              color: {
                primary: '#e3bc08',
                secondary: '#FDF1BA',
              },
              allDay: false,
              meta: {
                course,
              },
            };
          });
        })
      );
  }

  eventClicked(event: CalendarEvent<{ course: Course }>): void {
    let currentDateInString = format(this.currentDate, 'yyyy-MM-dd');
    if (event.meta.course.courseDate <= currentDateInString) {
      alert('Class has elapsed!');
    } else if (event.meta.course.capacity == 0) {
      alert('Class is full!');
    } else {
      this.bookingService._courseName = event.meta.course.courseName;
      this.bookingService._courseDate = event.meta.course.courseDate;
      this.bookingService._tutor = event.meta.course.tutorName;
      this.bookingService._numberOfPoints = event.meta.course.numberOfPoints;
      this.bookingService._courseId = event.meta.course.id;
      this.router.navigate([`../book/preview`], {
        relativeTo: this.route,
      });
      // window.open(`/course/book/preview`, '_self');
    }
  }
}
