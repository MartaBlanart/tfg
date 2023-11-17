import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MadridPhotoService {
  getData() {
    return [
        {
            itemImageSrc: '../../assets/madrid/chica.jpeg',
            thumbnailImageSrc: '../../assets/madrid/chica.jpeg',
            alt: 'Description for Image 1',
            title: 'Title 1'
        },
        {
            itemImageSrc: '../../assets/madrid/madrid.jpg',
            thumbnailImageSrc: '../../assets/madrid/madrid.jpg',
            alt: 'Description for Image 2',
            title: 'Title 2'
        },
        {
            itemImageSrc: '../../assets/madrid/banderaMadrid.jpg',
            thumbnailImageSrc: '../../assets/madrid/banderaMadrid.jpg',
            alt: 'Description for Image 3',
            title: 'Title 3'
        },
        {
            itemImageSrc: '../../assets/madrid/plazaEspaña.jpg',
            thumbnailImageSrc: '../../assets/madrid/plazaEspaña.jpg',
            alt: 'Description for Image 4',
            title: 'Title 4'
        },
        {
            itemImageSrc: '../../assets/madrid/centroMadrid.jpg',
            thumbnailImageSrc: '../../assets/madrid/centroMadrid.jpg',
            alt: 'Description for Image 5',
            title: 'Title 5'
        },
        {
            itemImageSrc: '../../assets/madrid/palacioReal.jpg',
            thumbnailImageSrc: '../../assets/madrid/palacioReal.jpg',
            alt: 'Description for Image 6',
            title: 'Title 6'
        },

    ];
}

getImages() {
    return Promise.resolve(this.getData());
}
}
