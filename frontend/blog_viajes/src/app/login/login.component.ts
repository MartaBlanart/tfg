import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginServiceService } from '../servicios/register-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private registerService: LoginServiceService) {}

  @Output() closeModalEvent = new EventEmitter();

  closeModal() {
    this.closeModalEvent.emit();
  }
  register() {
    const user = { email: this.email, pass: this.password };
    this.registerService.login(user).subscribe((data) => {
      console.log(data);
    });
  }
}
