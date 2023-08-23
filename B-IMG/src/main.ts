import { getImages, imagesScroll, imagesUrl } from './getImages/getImages';
import './scss/styles.scss';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  if (form && form instanceof HTMLFormElement) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      getImages();
      imagesScroll();
      imagesUrl();
    });
  }
});
