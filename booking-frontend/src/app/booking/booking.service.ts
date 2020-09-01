import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  courseName: string;
  courseDate: string;
  tutor: string;
  numberOfPoints: string;
  courseId: string;

  constructor() {}

  get _courseName(): string {
    return this.courseName;
  }

  set _courseName(value: string) {
    this.courseName = value;
  }

  public get _courseDate(): string {
    return this.courseDate;
  }
  public set _courseDate(v: string) {
    this.courseDate = v;
  }

  public get _tutor(): string {
    return this.tutor;
  }
  public set _tutor(v: string) {
    this.tutor = v;
  }

  public get _numberOfPoints(): string {
    return this.numberOfPoints;
  }
  public set _numberOfPoints(v: string) {
    this.numberOfPoints = v;
  }

  public get _courseId(): string {
    return this.courseId;
  }
  public set _courseId(v: string) {
    this.courseId = v;
  }
}
