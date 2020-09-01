import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isLoggedIn = false;
  userDisplayName = '';

  constructor(
    private authenticationService: AuthenticationService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    this.userDisplayName = sessionStorage.getItem('username');
  }

  handleLogout() {
    this.authenticationService.logout();
  }
}
