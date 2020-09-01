import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  username: string;
  password: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  authenticate(username, password) {
    return this.http
      .post<any>('http://localhost:8080/authenticate', { username, password })
      .pipe(
        map((userData) => {
          sessionStorage.setItem('username', username);
          // let tokenStr= 'Bearer'+userData.token;
          let tokenStr = userData.token;
          // console.log('tokenStr: ' + tokenStr);
          sessionStorage.setItem('token', tokenStr);
          return userData;
        })
      );
  }

  // login(username: String, password: String) {
  //   let url = 'http://localhost:8080/login';
  //   return this.http.post<Observable<boolean>>(url, {
  //     username: this.username,
  //     password: this.password,
  //     sessionStorage.setItem('token', btoa(username + ':' + password)),
  // })
  // .subscribe(isValid => {
  //     if (isValid) {
  //         sessionStorage.setItem(
  //           'token',
  //           btoa(this.model.username + ':' + this.model.password)
  //         );
  //   this.successMessage = "Login Successful!";
  //   this.router.navigate(['/home']);
  //     } else {
  //         alert("Login Failed!")
  //     }
  // });
  // }

  logout() {
    sessionStorage.removeItem('username');
    this.username = null;
    this.password = null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    if (user === null) return false;
    return true;
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem('token');
    if (user === null) return '';
    return user;
  }
}
