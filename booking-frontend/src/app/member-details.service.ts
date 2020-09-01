// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { AuthenticationService } from './authentication.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import { TokenStorageService } from './token-storage.service';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { Member } from './common/member';

// @Injectable({
//   providedIn: 'root',
// })
// export class MemberDetailsService {
//   constructor(
//     private authenticationService: AuthenticationService,
//     private httpClient: HttpClient,
//     private route: ActivatedRoute,
//     private router: Router,
//     private tokenStorage: TokenStorageService
//   ) {}

//   getProductList(): Observable<Member[]> {
//     return this.httpClient.post<GetResponse>('http://localhost:8080/member/details?member_id=123',).pipe(
//       map(response => response._embedded.member)
//     );
//   }
// }

// interface GetResponse {
//   _embedded: {
//     member: Member[];
//   }
// }
