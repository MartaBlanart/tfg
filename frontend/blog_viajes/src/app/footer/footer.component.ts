import { Component } from '@angular/core';
import { LoginServiceService } from '../servicios/register-service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(public registerService: LoginServiceService, public router: Router){

  }




}
