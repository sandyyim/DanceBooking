import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  form: any = {};
  model: any = {};
  successMessage: string;
  isLoggedIn = false;
  isLoginFailed = false;

  constructor(
      private tokenStorage: TokenStorageService,
      private authenticationService: AuthenticationService,
      private route: ActivatedRoute,
      private router: Router,
      private http: HttpClient
  ) { }

  ngOnInit() {
  }

  handleLogin() {
    this.authenticationService.authenticate(this.model.username,this.model.password).subscribe(
      data => {
        this.router.navigate(['/home'])
        this.isLoggedIn = true;
        this.isLoginFailed = false;
        this.tokenStorage.saveUser(data);
      },
      err => {
        this.isLoginFailed = true;
        alert("Login Failed!")
      }
    );
  }

  // reloadPage() {
  //   window.location.reload();
  // }

  // handleLogin() {
  //     let url = 'http://localhost:8080/login';
  //     this.http.post<Observable<boolean>>(url, {
  //       username: this.model.username,
  //       password: this.model.password
  //   }).subscribe(isValid => {
  //       if (isValid) {
  //           sessionStorage.setItem(
  //             'token', 
  //             btoa(this.model.username + ':' + this.model.password)
  //           );
  //     alert ("Login Successful!");
  //     this.router.navigate(['/home']);
  //       } else {
  //           alert("Login Failed!")
  //       }
  //   });
  // }

  
  logout() {
    sessionStorage.removeItem('token');
    this.model.username = null;
    this.model.password = null;
  }

}
