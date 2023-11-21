import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../servicios/photo-servic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images: any[]=[];

  responsiveOptions: any[] | undefined;
  photoService: any;


  constructor(private service: PhotoService, private router: Router) {
    this.photoService = service;
  }

  ngOnInit() {

      this.photoService.getImages().then((images: any[] ) => (this.images = images));
      this.responsiveOptions = [
          {
              breakpoint: '1024px',
              numVisible: 5
          },
          {
              breakpoint: '768px',
              numVisible: 3
          },
          {
              breakpoint: '560px',
              numVisible: 1
          }
      ];


}

navegarARoma() {
  this.router.navigate(['/roma']);
}
navegarAParis() {
  this.router.navigate(['/paris']);
}
navegarAMadrid() {
  this.router.navigate(['/madrid']);
}

  }


