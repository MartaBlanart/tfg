import { Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class LoginServiceService  {

  private baseUrl = 'http://127.0.0.1:443/api';

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}/logout`, {});
  }

  getUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}/user`);
  }

  // Ejemplo de cómo enviar datos en una solicitud POST
  enviarDatosAlBackend(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }
}
