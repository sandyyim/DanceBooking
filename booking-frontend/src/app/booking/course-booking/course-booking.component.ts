import { Component, OnInit, Input } from '@angular/core';
import { CourseDetailsComponent } from '../course-details/course-details.component';
import { BookingService } from '../booking.service';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-booking',
  templateUrl: './course-booking.component.html',
  styleUrls: ['./course-booking.component.css'],
})
export class CourseBookingComponent implements OnInit {
  courseName: string;
  courseDate: string;
  tutor: string;
  numberOfPoints: string;

  memberName: string;
  courseId: string;

  bookingResult: any;

  constructor(
    private bookingService: BookingService,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.loadData();
    // this.bookCourse();
  }

  loadData() {
    // console.log(this.bookingService.item);
    this.courseName = this.bookingService._courseName;
    this.courseDate = this.bookingService._courseDate;
    this.tutor = this.bookingService._tutor;
    this.numberOfPoints = this.bookingService._numberOfPoints;
    // console.log('this.title: ' + this.title);
  }

  bookCourse() {
    this.memberName = sessionStorage.getItem('username');
    this.courseId = this.bookingService._courseId;
    let options = {
      params: new HttpParams()
        .append('member_name', this.memberName)
        .append('course_id', this.courseId),
    };
    return this.httpClient
      .post<any>('http://localhost:8080/course/book', {}, options)
      .subscribe((response) => {
        this.bookingResult = response;
        if (this.bookingResult.status == 'Failed') {
          alert('Booking Failed! ' + this.bookingResult.returnMessage);
        } else {
          alert('Booking Success! ');
        }
      });
  }
}
