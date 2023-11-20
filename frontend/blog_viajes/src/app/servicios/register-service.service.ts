import { Inject, Injectable, OnInit, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService extends CookieService {

  private baseUrl = 'http://127.0.0.1:3700';
  constructor(
    private http: HttpClient,
    @Inject(DOCUMENT) private _document: any,
    @Inject(PLATFORM_ID) private _platformId: any
  ) {
    super(_document, _platformId);
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/login`, user);
  }

  setToken(token: string) {
    this.set('token', token);
  }

  getToken() {
    console.log(this.get('token'));
    return this.get('token');
  }
  getUser() {
    console.log(this.getToken());
    return this.http.get(`${this.baseUrl}/api/email:?SOYJUANES2`);

  }
  getUserLogged() {
    const token = this.getToken();
    // Aquí iría el endpoint para devolver el usuario para un token
  }
}
