import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  private apiUrl = `${environment.apiUrl}/users/all-users`;

  getAllUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
