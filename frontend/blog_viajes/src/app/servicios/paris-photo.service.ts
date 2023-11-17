import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParisPhotoService {

  getData() {
    return [
        {
            itemImageSrc: '../../assets/paris/chica.jpeg',
            thumbnailImageSrc: '../../assets/paris/chica.jpeg',
            alt: 'Description for Image 1',
            title: 'Title 1'
        },
        {
            itemImageSrc: '../../assets/paris/arcoTriunfo.jpg',
            thumbnailImageSrc: '../../assets/paris/arcoTriunfo.jpg',
            alt: 'Description for Image 2',
            title: 'Title 2'
        },
        {
            itemImageSrc: '../../assets/paris/eiffelChica.jpg',
            thumbnailImageSrc: '../../assets/paris/fontanaChica.jpg',
            alt: 'Description for Image 3',
            title: 'Title 3'
        },
        {
            itemImageSrc: '../../assets/paris/chicaLouvre.jpg',
            thumbnailImageSrc: '../../assets/paris/chicaLouvre.jpg',
            alt: 'Description for Image 4',
            title: 'Title 4'
        },
        {
            itemImageSrc: '../../assets/paris/moulinRouge.jpg',
            thumbnailImageSrc: '../../assets/paris/moulinRouge.jpg',
            alt: 'Description for Image 5',
            title: 'Title 5'
        },
        {
            itemImageSrc: '../../assets/paris/louvre.jpeg',
            thumbnailImageSrc: '../../assets/paris/louvre.jpeg',
            alt: 'Description for Image 6',
            title: 'Title 6'
        },

    ];
}

getImages() {
    return Promise.resolve(this.getData());
}
}
