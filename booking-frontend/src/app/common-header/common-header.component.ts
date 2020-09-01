import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.css'],
})
export class CommonHeaderComponent implements OnInit {
  isLoggedIn = false;
  userDisplayName = '';

  show: boolean = false;

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
