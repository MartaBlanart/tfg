import { Component, EventEmitter, Output } from '@angular/core';
import { LoginServiceService } from '../servicios/register-service.service';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  name: string = '';

  modalRegisterOpen=false;
  errorMessage: string='';
  formErrorMessage:string='';

  constructor(public registerService: LoginServiceService, public router: Router) {}

  @Output() closeModalEvent = new EventEmitter();

  closeRegisterModal() {
    this.closeModalEvent.emit();
  }

register() {
  const user = { email: this.email, name: this.name, password: this.password };
  if (this.isFieldEmpty(user.name) || this.isFieldEmpty(user.email) || this.isFieldEmpty(user.password)) {
    this.formErrorMessage = 'Rellene todos los campos.';
    return;  
    this.formErrorMessage='';
  }

  this.registerService.register(user).pipe(
    catchError((error) => {

      console.error('Error in registration', error);
      let errorMessage = 'Unknown error during user registration';


      if (error.status === 409) {
        errorMessage = 'User already exists';
      } else if (error.status === 500) {
        errorMessage = 'Internal server error';
      }
      this.errorMessage = 'El email ya existe y no se puede duplicar!!!';

      return throwError(() => new Error(errorMessage));
    })
  ).subscribe({
    next: (response) => {
      console.log('Registration successful', response);
      this.closeRegisterModal();
      this.router.navigate(['/home']);
    },
    complete: () => {

    }
  });
}
private isFieldEmpty(value: string | undefined): boolean {
  return value === undefined || value.trim() === '';
}
  openLoginModal() {
    this.modalRegisterOpen = true;

  }

  closeRegisterModal2() {
    this.modalRegisterOpen = false;
  }

}
