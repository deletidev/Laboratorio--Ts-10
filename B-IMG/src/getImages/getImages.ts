import {
  extractImg,
  mostrarPop,
  paintImages
} from './getImages-helpers/getImages-helper';

export const getImages = () => {
  const formText = document.getElementById('form-area');
  if (formText && formText instanceof HTMLTextAreaElement) {
    const urls = extractImg(formText.value);
    paintImages(urls);
  }
};

export const imagesScroll = () => {
  const main = document.getElementById('main');
  if (main && main instanceof HTMLElement) {
    const mainHeight = main.scrollHeight;
    console.dir(main);
    main.scrollTo({
      top: mainHeight,
      left: 0,
      behavior: 'smooth'
    });
  }
};

export const imagesUrl = () => {
  const result = document.getElementById('result');
  if (result && result instanceof HTMLElement) {
    result.addEventListener('click', e => {
      if (
        e.target &&
        e.target instanceof HTMLElement &&
        e.target.firstChild &&
        e.target.firstChild instanceof HTMLImageElement
      ) {
        navigator.clipboard
          .writeText(e.target.firstChild.src)
          .then(() => {
            mostrarPop();
          })
          .catch(err => {
            console.error('Error al copiar al portapapeles:', err);
          });
      }
    });
  }
};
