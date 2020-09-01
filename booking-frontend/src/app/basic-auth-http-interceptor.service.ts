import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BasicAuthHttpInterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
      let currentUserToken = sessionStorage.getItem('token');
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUserToken}`,
        },
      });
    }
    return next.handle(req);
  }
}

export const authInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: BasicAuthHttpInterceptorService,
    multi: true,
  },
];
