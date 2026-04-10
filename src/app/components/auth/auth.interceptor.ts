import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // Retrieve the token from local storage
    const authDataStr = localStorage.getItem('authData');
    const authdata = authDataStr ? JSON.parse(authDataStr) : {};
    const token = authdata?.accessToken;

    if (token) {
      // Clone the request to add the new header
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    // Pass the request to the next handler
    return next.handle(request);
  }
}
