import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth: boolean;
  auth$: Observable<boolean>;
  private authSubject: Subject<boolean>;
  constructor(
    private http: HttpClient
  ) {
    this.authSubject = new Subject<boolean>();
    this.auth$ = this.authSubject.asObservable();
  }


  isAuth(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.auth = true;
      this.authSubject.next(this.auth);
    }
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post('api/auth', {email, password}).pipe(
      map((response: any) => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          this.auth = true;
          this.authSubject.next(this.auth);
          return 'success';
        }
        return 'fail';
      })
    );
  }

  disconnect(): void {
    this.auth = false;
    this.authSubject.next(this.auth);
    localStorage.removeItem('token');
  }

  getProfile(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.post('api/profile', {token}).pipe(
      map((response: any) => {
        if (response) {
          return response;
        }
      })
    );
  }

}
