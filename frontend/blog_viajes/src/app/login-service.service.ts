import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private baseUrl = 'http://127.0.0.1:3700';
  constructor(private http: HttpClient) {}

  login(user: any): Observable<any> {
    const url = `${this.baseUrl}/api/save-user`;
    return this.http.post(url, user);
  }
}
