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
  name: string = '';

  constructor(public registerService: LoginServiceService, public router: Router) {}

  @Output() closeModalEvent = new EventEmitter();

  closeModal() {
    this.closeModalEvent.emit();
  }
  register() {

    const user = { email: this.email, name: this.name ,password: this.password };
    this.registerService.register(user).subscribe(response => console.log(response));
    this.closeModal();
    this.router.navigate(['/home']);

  }
}
