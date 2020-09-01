import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { CourseDetailsComponent } from './booking/course-details/course-details.component';
import { BookingComponent } from './booking/booking.component';
import { CourseBookingComponent } from './booking/course-booking/course-booking.component';

export class AppRouting {}

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'member', component: MemberDetailsComponent },
  { path: 'course/browse', component: CourseDetailsComponent },
  { path: 'course/book/preview', component: CourseBookingComponent },
  { path: 'testing', component: BookingComponent },
  { path: '**', redirectTo: '' },
];

export const routing = RouterModule.forRoot(appRoutes);
