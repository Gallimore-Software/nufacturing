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
    // Retrieve the access token from local storage
    const authData = localStorage.getItem('authData');
    let accessToken = null;

    if (authData) {
      const parsedAuthData = JSON.parse(authData);
      accessToken = parsedAuthData?.accessToken;
    }

    // If a token is available, clone the request and add the Authorization header
    if (accessToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    }

    // Pass the request to the next handler
    return next.handle(request);
  }
}
