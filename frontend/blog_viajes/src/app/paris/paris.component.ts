import { Component, OnInit } from '@angular/core';
import { ParisPhotoService } from '../servicios/paris-photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paris',
  templateUrl: './paris.component.html',
  styleUrls: ['./paris.component.scss']
})
export class ParisComponent implements OnInit{

  images: any[]=[];

  responsiveOptions: any[] | undefined;
  photoService: any;


  constructor(private parisFotoservice: ParisPhotoService, private router: Router) {
    this.parisFotoservice = parisFotoservice;
  }

  ngOnInit() {
    this.parisFotoservice.getImages().then((images: any[] ) => (this.images = images));
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

}
