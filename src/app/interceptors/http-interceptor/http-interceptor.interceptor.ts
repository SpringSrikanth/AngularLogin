import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../auth/authentication.service';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor(private authService:AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken = this.authService.getToken();
    request =request.clone({
      setHeaders:{
        Authorization: "Bearer " +authToken
      }
    })
    return next.handle(request);
  }
}
