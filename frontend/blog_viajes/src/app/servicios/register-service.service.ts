import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  private baseUrl = 'http://127.0.0.1:443/api';

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    console.log(user);
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}/logout`, {});
  }

  getUser(): Observable<any> {
    const token = this.getToken(); 
    console.log('Este es el token:' + token);
    if (!token) {
      console.error('No se ha podido obtener el token');
      return of(null);
    } else {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      });
      const options = {
        headers: headers,
        withCredentials: true,
      };

      return this.http.get(`${this.baseUrl}/user`, options);
    }
  }
  getObtenerUsuario(): Promise<User> {
    return new Promise((resolve, reject) => {
      this.getUser().subscribe(
        (userData: any) => {
          const user: User = {
            email: userData.user.email,
            name: userData.user.name,
            password: userData.user.password,
          };
          console.log(user.email);
          resolve(user);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  // Método para guardar el token en el Local Storage
  saveToken(token: string): void {
    localStorage.setItem('jwt', token);
  }

  // Método para obtener el token del Local Storage
  getToken(): string | null {
    var token = localStorage.getItem('jwt');
    console.log(token);
    return token;
  }

  // Método para borrar el token del Local Storage
  clearToken(): void {
    localStorage.removeItem('jwt');
  }

  // Ejemplo de cómo enviar datos en una solicitud POST
  enviarDatosAlBackend(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }
}
