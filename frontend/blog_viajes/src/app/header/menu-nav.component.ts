import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { PhotoService } from '../servicios/photo-servic.service';
import { Router } from '@angular/router';
import { LoginServiceService } from '../servicios/register-service.service';


@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.scss']
})
export class MenuNavComponent implements OnInit  {



  modalOpen = false;

  constructor(private router: Router,  public registerService: LoginServiceService){

  }
  ngOnInit(): void {

    this.getUserLogged();
  }


  openModal() {
    this.modalOpen = true;
    console.log("se abre modal");
  }

  closeModal() {
    this.modalOpen = false;
  }

  getUserLogged() {
    this.registerService.getUser().subscribe((user) => {
      console.log(user);
    });
  }

}


