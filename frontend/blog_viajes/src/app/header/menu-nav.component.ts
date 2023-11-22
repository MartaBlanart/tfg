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


  constructor(public router: Router,  public registerService: LoginServiceService){

  }
  ngOnInit(): void {

  }
  userLogged() {
    this.registerService.getUser(getToken())
      .pipe(
        catchError((error: any) => {
          if (error.status === 401) {
            console.error('Error de autenticación. Por favor, inicia sesión nuevamente.');
          } else {
            console.error('Error al obtener información del usuario', error);
          }
          throw error; // Rechaza el error para que pueda ser manejado por el suscriptor
        })
      )
      .subscribe(
        (user) => {
          this.welcomeMessage = `Bienvenido, ${user.name}!`;
        }
      );
  }


  openLoginModal() {
    this.modalLoginOpen = true;

  }

  closeLoginModal() {
    this.modalLoginOpen = false;
  }



}


