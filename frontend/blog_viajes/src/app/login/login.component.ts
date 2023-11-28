import { Component, EventEmitter, Output } from '@angular/core';
import { LoginServiceService } from '../servicios/register-service.service';
import { MenuNavComponent } from '../header/menu-nav.component';
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


  constructor(public registerService: LoginServiceService, public router: Router, public menuNav: MenuNavComponent) {}

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

        if (response && response.token) {
          // Guarda el token en el Local Storage
          this.registerService.saveToken(response.token);

          // Cierra el modal de inicio de sesión
          this.closeLoginModal();

        } else {
          console.error('Token no encontrado en la respuesta del servidor.');
        }
      },
      error: (error) => {
        console.error('Error en el inicio de sesión', error);
      },
      complete: () => {
          this.userLogged().then((userName) => {
          this.menuNav.welcomeMessage = 'Bienvenid@ ' + userName.name;
          this.menuNav.ocultarBotonLogin();

        });
      }
    });
  }
  userLogged(): Promise<LoginComponent> {
    return new Promise((resolve, reject) => {

      this.registerService.getUser().subscribe({
        next: (response) => {
          console.log('Obtencion de usuario correcto', response);

          if (response && response.user) {
            const userName = response.user;

            resolve(userName);
          } else {
            console.error('Usuario no encontrado en la respuesta del servidor.');
            reject('Usuario no encontrado');
          }
        },
        error: (error) => {
          console.error('Error en el inicio de sesión', error);
          reject(error);
        },
        complete: () => {
          
        }
      });
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
