import photoPageForm from '../ts/components/photoPageForm';
import { FormData } from '../types/type';
import pizza from './images/pizza/pizza-au-feu-de-bois.jpg';
import pasta from './images/pasta/pasta 3.jpg';
import salade from './images/salade/salad-1.jpg';
import dessert from './images/desserts/strawberry-dessert.jpg';
export class PhotoDisplayLogic {
  PhData: FormData;

  constructor() {
    this.PhData = {
      id: 'PhoTo',
      allPhotos: [
        {
          id: 'pizza',
          name: 'Pizza',
          type: 'landscape',
          src: pizza,
        },
        {
          id: 'pasta',
          name: 'Pasta',
          type: 'portrait',
          src: pasta,
        },
        {
          id: 'salade',
          name: 'Salade',
          type: 'landscape',
          src: salade,
        },
        {
          id: 'dessert',
          name: 'Dessert',
          type: 'landscape',
          src: dessert,
        },
      ],
    };

    const photoMain: HTMLElement | null = document.getElementById('photo-main');

    if (photoMain) {
      photoMain.innerHTML = photoPageForm([this.PhData]);
    }
  }
}
