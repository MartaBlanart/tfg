import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { PhotoService } from '../servicios/photo-servic.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.scss']
})
export class MenuNavComponent implements OnInit  {
 


  modalOpen = false;

  constructor(private router: Router){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  openModal() {
    this.modalOpen = true;
    console.log("se abre modal");
  }

  closeModal() {
    this.modalOpen = false;
  }



}


