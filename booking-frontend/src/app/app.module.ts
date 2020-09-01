import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import { LogoutComponent } from './logout/logout.component';
import { authInterceptorProviders } from './basic-auth-http-interceptor.service';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { CourseDetailsComponent } from './booking/course-details/course-details.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';
import { CommonHeaderComponent } from './common-header/common-header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookingComponent } from './booking/booking.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CourseBookingComponent } from './booking/course-booking/course-booking.component';
import { BookingService } from './booking/booking.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'member', component: MemberDetailsComponent },
  { path: 'course/browse', component: CourseDetailsComponent },
  { path: 'testing', component: BookingComponent },
  { path: 'course/book', component: CourseBookingComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    MemberDetailsComponent,
    CourseDetailsComponent,
    CalendarHeaderComponent,
    CommonHeaderComponent,
    CourseBookingComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    MaterialModule,
    BrowserAnimationsModule,
    NgbModule,
  ],

  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
