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

  closeLoginModal() {
    this.closeModalEvent.emit();
  }
  modalRegisterOpen = false;
  register() {

    const user = { email: this.email, name: this.name ,password: this.password };
    this.registerService.register(user).subscribe(response => console.log(response));
    this.closeLoginModal();
    this.router.navigate(['/home']);

  }

  openRegisterModal() { 
    this.modalRegisterOpen = true;
  }

  closeRegisterModal() {
    this.modalRegisterOpen = false;
    this.closeLoginModal();
  }

}
