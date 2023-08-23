export const extractImg = (value: string): string[] => {
  if (!value) {
    throw Error('Valor no valido');
  }
  const pattern = /<img[^>]*src="(?<url>[^"]+)"[^>]*>/gm;

  let array = [...value.matchAll(pattern)];

  return array.map(arr => arr[1]);
};

const createImg = (url: string): HTMLImageElement => {
  const img = document.createElement('img');
  img.src = url;
  return img;
};

const paintImg = (url: string): HTMLDivElement => {
  const containerImg = document.createElement('div');
  containerImg.style.background = 'white';
  console.log(createImg(url));
  containerImg.appendChild(createImg(url));
  return containerImg;
};

export const mostrarPop = () => {
  const pop = document.getElementById('pop-copy');
  if (pop && pop instanceof HTMLElement) {
    pop.dataset.state = 'active';
    setTimeout(() => {
      pop.dataset.state = 'off';
    }, 1500);
  }
};

export const paintImages = (urls: string[]) => {
  if (!urls || !urls.length) {
    throw Error('no hay urls');
  }
  const result = document.getElementById('result');
  if (result && result instanceof HTMLElement) {
    result.innerHTML = '';
    urls.forEach(url => result.appendChild(paintImg(url)));
  }
};
