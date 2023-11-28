import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { PhotoService } from '../servicios/photo-servic.service';
import { Router } from '@angular/router';
import { LoginServiceService } from '../servicios/register-service.service';
import { catchError } from 'rxjs';




@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.scss']
})
export class MenuNavComponent implements OnInit  {

  welcomeMessage: string = '';

  modalLoginOpen = false;

  mostrarBotonLogin: boolean = true;
  constructor(public router: Router,  public registerService: LoginServiceService){

  }
  ngOnInit() {
    this.registerService.getObtenerUsuario().then(
      (userName) => {
        console.log('Nombre de usuario obtenido:', userName);

        if (userName) {
          // Usuario encontrado
          this.ocultarBotonLogin();
          this.welcomeMessage = 'Bienvenid@ ' + userName.name;
        } else {
          // Usuario no encontrado
          this.mostrarBotonLogin;
        }
      },
      (error) => {
        console.error('Error en el inicio de sesión', error);
        // Manejar el error según tus necesidades
      }
    );
  }





  logOut(){
    this.registerService.clearToken();
    this.mostrarBotonLogin = !this.mostrarBotonLogin;
  }
  ocultarBotonLogin() {
    this.mostrarBotonLogin = !this.mostrarBotonLogin;
  }
  openLoginModal() {
    this.modalLoginOpen = true;

  }

  closeLoginModal() {
    this.modalLoginOpen = false;
  }


}


