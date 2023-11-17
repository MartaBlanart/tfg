import { Component, OnInit } from '@angular/core';
import { ParisPhotoService } from '../servicios/paris-photo.service';
import { Router } from '@angular/router';
import { MadridPhotoService } from '../servicios/madrid-photo.service';

@Component({
  selector: 'app-madrid',
  templateUrl: './madrid.component.html',
  styleUrls: ['./madrid.component.scss']
})
export class MadridComponent implements OnInit{

  images: any[]=[];

  responsiveOptions: any[] | undefined;
  photoService: any;


  constructor(private madridPhotoService: MadridPhotoService, private router: Router) {
    this.madridPhotoService = madridPhotoService;
  }

  ngOnInit() {
    this.madridPhotoService.getImages().then((images: any[] ) => (this.images = images));
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
