import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable()
export class HasuraInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const hasuraSecretKey = environment.HASURA_SERCER_KEY;
    const authReq = request.clone({
      headers: request.headers.set('x-hasura-admin-secret', hasuraSecretKey),
    });
    return next.handle(authReq);
  }
}
