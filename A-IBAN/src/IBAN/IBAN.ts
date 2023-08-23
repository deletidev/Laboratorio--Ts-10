import { isValidIBAN } from 'ibantools';
import {
  extraerInfoIban,
  ibanBienFormado,
  pintarVaildación
} from './IBAN-helpers/IBAN-helpers';

const appIBAN = (iban: string): void => {
  const ibanUnido = iban.replace(/[\s-]/g, '');

  if (!ibanBienFormado(ibanUnido)) {
    pintarVaildación('El IBAN no esta bien formado', 'error');
  } else {
    if (!isValidIBAN(ibanUnido)) {
      pintarVaildación('El IBAN esta bien formado, pero no es valido', 'error');
    } else {
      pintarVaildación('El IBAN esta bien formado y es valido', 'valido');
      extraerInfoIban(ibanUnido);
    }
  }
};

export const searchIban = () => {
  const inputSearch = document.getElementById('search-input');

  if (inputSearch && inputSearch instanceof HTMLInputElement) {
    const cointainerResult = document.getElementById('result');
    if (cointainerResult && cointainerResult instanceof HTMLElement) {
      cointainerResult.innerHTML = '';
    }
    appIBAN(inputSearch.value);
  }
};
