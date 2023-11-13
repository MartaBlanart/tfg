import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {


  constructor(private http: HttpClient) {}

  login(user: any): Observable<any> {
    return this.http.post("//127.0.0.1:27017/?directConnection=true", user);
  }
}
