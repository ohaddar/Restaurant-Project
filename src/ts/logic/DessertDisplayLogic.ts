import photoPageForm from '../components/photoPageForm';
import { FormData } from '../types/type';
import cake from '../logic/images/desserts/cake.jpg';
import cheesecake from '../logic/images/desserts/cheesecacke.jpg';
import dessertChoco from '../logic/images/desserts/dessert-choco.jpg';
import pancakes from '../logic/images/desserts/pancakes.jpg';
import tiramisu from '../logic/images/desserts/tiramisu.jpg';
import coffe from '../logic/images/desserts/coffe.jpg';
import jusFraise from '../logic/images/desserts/jus-de-fraise.jpg';
import jusOrange from '../logic/images/desserts/orange-juice.jpg';

import dessertPageForm from '../components/dessertPageForm';
import MenuService from '../services/MenuService';
export class DessertDisplayLogic {
  PhDessData: FormData;

  constructor() {
    this.PhDessData = {
      id: 'PhoTo',
      dessertPhotos: [
        {
          id: 'photo1',
          name: 'Cake',
          type: 'landscape',
          src: cake,
          composition:
            'Gâteau moelleux au chocolat avec glaçage miroir au chocolat.',
        },
        {
          id: 'photo2',
          name: 'Cheesecake',
          type: 'portrait',
          src: cheesecake,
          composition: 'Au spéculoos et servi avec un coulis de fraise',
        },
        {
          id: 'photo3',
          name: 'choco-Dessert',
          type: 'landscape',
          src: dessertChoco,
          composition:
            'Crème vanillée, crème noisette, fraises fraîches avec des biscuits Oreo.',
        },

        {
          id: 'photo1',
          name: 'tiramisu',
          type: 'landscape',
          src: tiramisu,
          composition:
            'Crème de mascarpone, biscuits cuillère, café, liqueur, crème et cacao.',
        },
        {
          id: 'photo3',
          name: 'pancake',
          type: 'landscape',
          src: pancakes,
          composition: '',
        },
        {
          id: 'photo2',
          name: 'Coffe',
          type: 'portrait',
          src: coffe,
          composition: '',
        },
        {
          id: 'photo3',
          name: 'Jus de Fraise',
          type: 'landscape',
          src: jusFraise,
          composition: '',
        },
        {
          id: 'photo3',
          name: "Jus d'ornage",
          type: 'landscape',
          src: jusOrange,
          composition: '',
        },
      ],
    };

    MenuService.getDessert().then((res) => {
      res.map((dessert: any) => {
        dessert.composition = 'Got from api :)';
        dessert.src = dessert.urls[0];
        dessert.id = 'id' + dessert.name;
        this.PhDessData.dessertPhotos?.push(dessert);
      });
      this.DisplayDessert(this.PhDessData);
    });
  }
  private DisplayDessert(desserts: any) {
    const photoDessertMain: HTMLElement | null =
      document.getElementById('photo-dessert-main');

    if (photoDessertMain) {
      photoDessertMain.innerHTML = dessertPageForm([this.PhDessData]);
    }
  }
}
