import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.search-form');
const searchButton = document.querySelector('.search-form__btn');
const container = document.querySelector('.gallery');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const quary = e.target.elements.searchQuery.value;
  searchImages(quary).then(data => renderImages(data));
  e.target.reset();
}

function searchImages(q) {
  const BASE_URL = 'https://pixabay.com/api/';
  const PARAMS = new URLSearchParams({
    key: '42192602-d8808410d4367b6455b886704',
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = BASE_URL + '?' + PARAMS;
  return fetch(url).then(res => res.json());
}

function imageTemplate(images) {
  const {
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = images;
  return `
    <div class="photo-card">
      <a href="${webformatURL}">
        <img
          class="photo-card__img"
          src="${largeImageURL}" 
          alt="${tags}" 
        />
      </a>
      <div class="info">
        <p class="info-item">
          <b class="info-item-title">Likes</b>
          <span class="info-item-value">${likes}</span>
        </p>
        <p class="info-item">
          <b class="info-item-title">Views</b>
          <span class="info-item-value">${views}</span>
        </p>
        <p class="info-item">
          <b class="info-item-title">Comments</b>
          <span class="info-item-value">${comments}</span>
        </p>
        <p class="info-item">
          <b class="info-item-title">Downloads</b>
          <span class="info-item-value">${downloads}</span>
        </p>
      </div>
    </div>
    `;
}

function renderImages({ hits }) {
  const markup = hits.map(imageTemplate).join('');
  container.innerHTML = markup;
}

let gallery = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
