import { FormData, PhotoData } from '../types/type';

export default function pizzaPageForm(PhPizData: FormData[]): string {
  const renderPhotos = (photo: PhotoData): string =>
    `<article class="product-card">
      <figure id="${photo.id}" name="${photo.name}" type="${photo.type}" class="img-figure">
        <section class="img-details">
          <a href="/" class="img-a1" onclick="event.preventDefault();  window.onNavigate('#Login')">
            <img src="${photo.src}" alt="${photo.name}" class="card-img">
            <a href="/" class="img-a">${photo.name}</a>
            <section  class="compo-section">${photo.composition}<section/>
          </a>
        </section>
      </figure>
    </article>`;

  const photoToRender = PhPizData[0].pizzaPhotos
    ? PhPizData[0].pizzaPhotos.map(renderPhotos).join('')
    : '';

  return `
  <section id="photo-section">${photoToRender}</section>`;
}
