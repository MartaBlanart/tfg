import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class LoginServiceService  {

  private baseUrl = 'http://127.0.0.1:443/api';

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    console.log(user)
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  login(credentials: any): Observable<any> {

    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}/logout`, {});
  }

  getUser(): Observable<any> {
    const options = {
      withCredentials: true,


    };

   return this.http.get(`${this.baseUrl}/user`,options);


  }

    // Método para guardar el token en el Local Storage
    saveToken(token: string): void {
      localStorage.setItem('jwt', token);
    }

    // Método para obtener el token del Local Storage
    getToken(): string | null {
      return localStorage.getItem('jwt');
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
