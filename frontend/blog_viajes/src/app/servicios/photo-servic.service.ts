import { Injectable } from '@angular/core';

@Injectable()
export class PhotoService {
    getData() {
        return [
            {
                itemImageSrc: '../../assets/roma/basilicaRoma.jpg',
                thumbnailImageSrc: '../../assets/roma/basilicaRoma.jpg',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: '../../assets/roma/coliseoChica.jpg',
                thumbnailImageSrc: '../../assets/roma/coliseoChica.jpg',
                alt: 'Description for Image 2',
                title: 'Title 2'
            },
            {
                itemImageSrc: '../../assets/roma/fontanaChica.jpg',
                thumbnailImageSrc: '../../assets/roma/fontanaChica.jpg',
                alt: 'Description for Image 3',
                title: 'Title 3'
            },
            {
                itemImageSrc: '../../assets/roma/plazaEspaña.jpg',
                thumbnailImageSrc: '../../assets/roma/plazaEspaña.jpg',
                alt: 'Description for Image 4',
                title: 'Title 4'
            },
            {
                itemImageSrc: '../../assets/roma/treviChica.jpg',
                thumbnailImageSrc: '../../assets/roma/treviChica.jpg',
                alt: 'Description for Image 5',
                title: 'Title 5'
            },
            {
                itemImageSrc: '../../assets/roma/plazaNavona.jpg',
                thumbnailImageSrc: '../../assets/roma/plazaNavona.jpg',
                alt: 'Description for Image 6',
                title: 'Title 6'
            },

        ];
    }

    getImages() {
        return Promise.resolve(this.getData());
    }
};
