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
    const authdata = JSON.parse(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6eyJfdmFsdWUiOiI3ZmM2ZDRhYS1hMTVlLTRhZTEtYTA0NS1lZDNlYzRiNzNkNTAifSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzI5NjkxNDMwLCJleHAiOjE3Mjk2OTUwMzB9.jA86fPfrwWqPNFiW8WJdNR4XvZs8qzPOzJJtX77LgIo'
    );
    const token = authdata?.token;

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
