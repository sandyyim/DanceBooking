import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '../token-storage.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Member } from '../common/member';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css'],
})
export class MemberDetailsComponent implements OnInit {
  isLoggedIn = false;
  currentMember: any;
  memberName: string;

  constructor(
    private authenticationService: AuthenticationService,
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    this.loadMemberDetails();
  }

  loadMember() {
    this.memberName = sessionStorage.getItem('username');
    return this.memberName;
  }

  loadMemberDetails() {
    // let params = new HttpParams().set('member_id', '123');
    // let headers = new HttpHeaders().set(
    //   'authorization',
    //   'Bearer ' + sessionStorage.getItem('token')
    // );

    let options = {
      params: new HttpParams().append('member_name', this.loadMember()),
    };

    return this.httpClient
      .post<Member>('http://localhost:8080/member/details', {}, options)
      .subscribe((data) => {
        this.currentMember = data;
      });
  }

  handleLogout() {
    this.authenticationService.logout();
  }
}

// interface Member {
//   memberId: string;
//   memberFullName: String;
//   memberTel: String;
//   memberEmail: String;
//   memberBirthdayMonth: BigInteger;
//   memberBirthdayDate: BigInteger;
//   joinDate: String;
//   memberGender: String;
//   memberAddress: String;
//   availablePoints: BigInteger;
//   packageType: String;
//   packageStartDate: String;
//   packageEndDate: String;
// }
