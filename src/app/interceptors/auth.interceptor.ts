import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  // Your token
  private token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6eyJfdmFsdWUiOiI0OGQzMTgxMC00MjU3LTQ4YzctODk5OC1lYTE1YmQ1NTZkN2IifSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzI5NjkxODY5LCJleHAiOjE3Mjk2OTU0Njl9.d_5aq1arw8hyrtQDtpJTG0BMOQsFFQG3wraaZv4kJo0';

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Clone the request and add the authorization header with the token
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.token}`,
      },
    });

    // Pass the cloned request instead of the original request to the next handler
    return next.handle(clonedRequest);
  }
}
