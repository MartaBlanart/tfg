import { Component, EventEmitter, Output } from '@angular/core';
import { LoginServiceService } from '../servicios/register-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(public registerService: LoginServiceService, public router: Router) {}

  @Output() closeModalEvent = new EventEmitter();

  closeModal() {
    this.closeModalEvent.emit();
  }
  login() {
    const user = { email: this.email, pass: this.password };
    this.registerService.login(user).subscribe(data => {
       this.registerService.setToken(data.token);
       this.router.navigateByUrl("/");
    },
    error => {
      console.log(error);
    });
  }
}
