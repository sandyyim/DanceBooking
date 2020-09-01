import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { TokenStorageService } from './token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  isLoggedIn = false;
  username: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    // this.isLoggedIn = !!this.tokenStorageService.getToken();

    // if (this.isLoggedIn) {
    //   const user = this.tokenStorageService.getUser();
    //   this.username = user.username;
    // }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  
  // constructor(private app: AppService, private http: HttpClient, private router: Router){
  //   this.app.authenticate(undefined,undefined);
  // }
  // logout(){
  //   this.http.post('logout',{}).finalize(()=>{
  //     this.app.authenticated = false;
  //     this.router.navigateByUrl('/login');
  //   }).subscribe();
  // }
}
