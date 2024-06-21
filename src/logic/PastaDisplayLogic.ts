import photoPageForm from '../ts/components/photoPageForm';
import { FormData } from '../types/type';
import pasta3 from '../logic/images/pasta/pasta 3.jpg';
import pastaFruit from '../logic/images/pasta/pasta-fruit-de-mer.jpg';
import pastaJem from '../logic/images/pasta/pasta-jemjembre.jpg';
import pastaRed from '../logic/images/pasta/pasta-red-sauce.jpg';
import pastaSaumon from '../logic/images/pasta/pasta-saumon.jpg';
import pastaPageForm from '../ts/components/pastaPageForm';
export class PastaDisplayLogic {
  PhPasData: FormData;

  constructor() {
    this.PhPasData = {
      id: 'PhoTo',
      pastaPhotos: [
        {
          id: 'photo1',
          name: 'Pasta Sauce Blanche',
          type: 'landscape',
          src: pasta3,
          composition:
            'Lardons, oignons, sauce crémeuse, œuf, fromage italien, persil.',
        },
        {
          id: 'photo2',
          name: 'Pasta Fruit De Mer',
          type: 'portrait',
          src: pastaFruit,
          composition:
            'Crevettes, oignons, courgettes, piments, citron, tomates cerises, sauce crémeuse au pesto.',
        },
        {
          id: 'photo3',
          name: 'Pasta jemjembre',
          type: 'landscape',
          src: pastaJem,
          composition: 'Bœuf, oignons, céleri, sauce italienne.',
        },
        {
          id: 'photo3',
          name: 'Pasta Red Sauce',
          type: 'landscape',
          src: pastaRed,
          composition: 'Sauce tomate, oignons balsamique et tomates cerises.',
        },
        {
          id: 'photo3',
          name: 'Pasta Saumon',
          type: 'landscape',
          src: pastaSaumon,
          composition:
            'Crevettes, saumon, pesto, crème, oignons, tomates cerises, muscade, fromage italien, pousses d’épinards, citron.',
        },
      ],
    };

    const photoPastaMain: HTMLElement | null =
      document.getElementById('photo-pasta-main');

    if (photoPastaMain) {
      photoPastaMain.innerHTML = pastaPageForm([this.PhPasData]);
    }
  }
}
