import photoPageForm from '../ts/components/photoPageForm';
import { FormData } from '../types/type';
import pizzaMargaritta from './images/pizza/pizza-margaritta.jpg';
import pizzaFeuille from './images/pizza/pizza-feuillejpg.jpg';
import pizzaAlTonno from './images/pizza/pizza-Al -Tonno.jpg';
import pizzaPepperoni from './images/pizza/pizza-pepperoni.jpg';
import pizzaPiment from './images/pizza/pizza-piment.jpg';
import pizzaRed from './images/pizza/pizza-red.jpg';

import pizzaPageForm from '../ts/components/pizzaPageForm';
export class PizzaDisplayLogic {
  PhPizData: FormData;

  constructor() {
    this.PhPizData = {
      id: 'PhoTo',
      pizzaPhotos: [
        {
          id: 'photo1',
          name: 'Pizza Margaritta',
          type: 'landscape',
          src: pizzaMargaritta,
          composition: 'Sauce Tomate, Mozzarella, Basilic',
        },
        {
          id: 'photo2',
          name: 'Pizza Feuille',
          type: 'portrait',
          src: pizzaFeuille,
          composition: 'Sauce Tomate, Mozzarella, Basilic',
        },
        {
          id: 'photo3',
          name: 'Pizza Al Tonno',
          type: 'landscape',
          src: pizzaAlTonno,
          composition: 'Sauce Tomate, Mozzarella, Basilic, Thon',
        },
        {
          id: 'photo3',
          name: 'Pizza Pepperoni',
          type: 'landscape',
          src: pizzaPepperoni,
          composition: 'Sauce Tomate, Mozzarella, Basilic, Pepperoni',
        },
        {
          id: 'photo3',
          name: 'Pizza Piment',
          type: 'landscape',
          src: pizzaPiment,
          composition: 'Sauce Tomate, Mozzarella, Basilic, Piment, Ongion',
        },
        {
          id: 'photo3',
          name: 'Pizza Red',
          type: 'landscape',
          src: pizzaRed,
          composition:
            'Sauce Tomate, Mozzarella, Basilic, Tomate Sechée, Ongion',
        },
      ],
    };

    const photoPizzaMain: HTMLElement | null =
      document.getElementById('photo-pizza-main');

    if (photoPizzaMain) {
      photoPizzaMain.innerHTML = pizzaPageForm([this.PhPizData]);
    }
  }
}
