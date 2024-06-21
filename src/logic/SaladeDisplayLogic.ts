import photoPageForm from '../ts/components/photoPageForm';
import { FormData } from '../types/type';
import salade1 from './images/salade/salad-2jpg.jpg';
import salade2 from './images/salade/salad-3jpg.jpg';
import salade3 from './images/salade/salade-1.jpg';
import papayaSalade from './images/salade/papaya-salad.jpg';

import saladePageForm from '../ts/components/saladePageForm';
export class SaladeDisplayLogic {
  PhSalData: FormData;

  constructor() {
    this.PhSalData = {
      id: 'PhoTo',
      saladePhotos: [
        {
          id: 'photo1',
          name: 'Salade',
          type: 'landscape',
          src: salade1,
          composition:
            'Laitue romaine, croûtons maison, fromage italien et poulet.	',
        },
        {
          id: 'photo2',
          name: 'Salade',
          type: 'portrait',
          src: salade2,
          composition:
            'Mélange de salades, feta, concombre, tomates cerises, olives noires, câpres et oignons rouges.',
        },
        {
          id: 'photo3',
          name: 'Salade',
          type: 'landscape',
          src: salade3,
          composition:
            'Mélange de salades, thon, olives noires, tomates cerises, oignons verts et rouges, pois gourmands, pommes de terre et œuf dur.',
        },
        {
          id: 'photo3',
          name: 'Papaya Salade',
          type: 'landscape',
          src: papayaSalade,
          composition:
            'Mélange de salades, carottes et tomates cerises avec notre vinaigrette balsamique.',
        },
      ],
    };

    const photoSaladeMain: HTMLElement | null =
      document.getElementById('photo-salade-main');

    if (photoSaladeMain) {
      photoSaladeMain.innerHTML = saladePageForm([this.PhSalData]);
    }
  }
}
