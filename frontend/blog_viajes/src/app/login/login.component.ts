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
  errorMessage: string = '';


  constructor(public registerService: LoginServiceService, public router: Router) {}

  @Output() closeModalEvent = new EventEmitter();

  closeLoginModal() {
    this.closeModalEvent.emit();
  }
  modalRegisterOpen = false;

  login() {
    const credentials = {
      email: this.email,
      password: this.password
    };


    this.registerService.login(credentials).subscribe({
      next: (response) => {

        console.log('Inicio de sesión exitoso', response);
        this.closeRegisterModal();
        this.router.navigate(['/home']);
      },
      error: (error) => {
        this.errorMessage = 'Contraseña o usuario incorrectos!!!';
        console.error('Error en el inicio de sesión', error);
      },
      complete: () => {

      }
    });

  }

  openRegisterModal() {
    this.modalRegisterOpen = true;
  }

  closeRegisterModal() {
    this.modalRegisterOpen = false;
    this.closeLoginModal();
  }

}
