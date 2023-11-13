import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private loginService: LoginServiceService) {}

  @Output() closeModalEvent = new EventEmitter();

  closeModal() {
    this.closeModalEvent.emit();
  }
  login() {
    const user = { email: this.email, pass: this.password };
    this.loginService.login(user).subscribe((data) => {
      console.log(data);
    });
  }
}
