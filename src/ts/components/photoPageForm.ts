import { FormData, PhotoData } from '../../types/type';

export default function photoPageForm(PhData: FormData[]): string {
  const renderPhotos = (photo: PhotoData): string =>
    `<article class="product-card">
      <figure id="${photo.id}" name="${photo.name}" type="${photo.type}" class="img-figure">
        <section class="img-details">
          <a href="/" class="img-a1">
            <img src="${photo.src}" alt="${photo.name}" class="card-img">
            <a href="/" class="img-a">${photo.name}</a>
          </a>
        </section>
      </figure>
    </article>`;

  const photoToRender = PhData[0].allPhotos
    ? PhData[0].allPhotos.map(renderPhotos).join('')
    : '';

  return `
  <section id="photo-section">${photoToRender}</section>`;
}
