import { FormData, PhotoData } from '../../types/type';

export default function photoPageForm(PhData: FormData[]): string {
  const renderPhotos = (photo: PhotoData): string => {
    if (!photo.id) {
      throw new Error('photo.id is undefined');
    }
    const capitalizedPhotoId =
      photo.id.charAt(0).toUpperCase() + photo.id.slice(1);
    return `<article class="product-card">
      <figure id="${photo.id}" name="${photo.name}" type="${photo.type}" class="img-figure">
        <section class="img-details">
          <a  class="img-a1" id="${photo.id}" onclick="event.preventDefault();  window.onNavigate('#${capitalizedPhotoId}')">
            <img src="${photo.src}" alt="${photo.name}" class="card-img">
            <a  class="img-a-photo" onclick="event.preventDefault();  window.onNavigate('#${capitalizedPhotoId}')">${photo.name}</a>
          </a>
        </section>
      </figure>
    </article>`;
  };
  const photoToRender = PhData[0].allPhotos
    ? PhData[0].allPhotos.map(renderPhotos).join('')
    : '';

  return `
  <section id="photo-section">${photoToRender}</section>`;
}
