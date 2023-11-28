import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modalLoginOpen = false;

  constructor() { }

  openLoginModal() {
    this.modalLoginOpen = true;
    
  }

  closeLoginModal() {
    this.modalLoginOpen = false;
  }
}
