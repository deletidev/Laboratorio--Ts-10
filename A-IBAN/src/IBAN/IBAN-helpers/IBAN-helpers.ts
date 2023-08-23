import { comprobarNombreBanco } from '../constantes';

export const createParagraphSpan = (
  text: string,
  spanText: string
): HTMLDivElement => {
  const paragraph = document.createElement('p');
  const span = document.createElement('span');
  span.innerText = spanText;
  span.setAttribute('class', 'result__span');
  paragraph.innerText = text;
  paragraph.appendChild(span);
  return paragraph;
};

export const createParagraph = (text: string): HTMLDivElement => {
  const paragraph = document.createElement('p');
  paragraph.innerText = text;
  return paragraph;
};

export const encuentraBanco = (banco: string): string =>
  comprobarNombreBanco[banco] ||
  `no se ha podido encontrar el banco con el código ${banco}`;

export const ibanBienFormado = (iban: string): boolean => {
  const patron = /^[A-Z]{2}\d{22}$/;
  return patron.test(iban);
};

const pintarInfo = (
  encuentra: string,
  codigoSucursal: string,
  digitoControl: string,
  numeroCuenta: string
) => {
  const cointainerResult = document.getElementById('result');
  if (cointainerResult && cointainerResult instanceof HTMLElement) {
    cointainerResult.classList.add('result');
    const banco = createParagraphSpan('Banco: ', encuentra);
    cointainerResult.appendChild(banco);
    const sucursal = createParagraphSpan('Código sucursal: ', codigoSucursal);
    cointainerResult.appendChild(sucursal);
    const control = createParagraphSpan('Dígito de control: ', digitoControl);
    cointainerResult.appendChild(control);
    const cuenta = createParagraphSpan('Número de cuenta: ', numeroCuenta);
    cointainerResult.appendChild(cuenta);
  } else {
    console.error('No se encuenta el div con Id result');
  }
};

const gruposIban = (iban: string) => {
  const patron =
    /^(?<codigoPais>[A-Z]{2})(?<primerControl>\d{2})(?<codigoBanco>\d{4})(?<codigoSucursal>\d{4})(?<digitoControl>\d{2})(?<numeroCuenta>\d{10})$/;
  return patron.exec(iban);
};

export const extraerInfoIban = (iban: string) => {
  const coincidencia = gruposIban(iban);
  if (coincidencia) {
    const { codigoBanco, codigoSucursal, digitoControl, numeroCuenta } =
      coincidencia.groups as any;
    const encuentra = encuentraBanco(codigoBanco);
    pintarInfo(encuentra, codigoSucursal, digitoControl, numeroCuenta);
  }
};

export const pintarVaildación = (text: string, val: string) => {
  const cointainerResult = document.getElementById('result');
  if (cointainerResult && cointainerResult instanceof HTMLElement) {
    cointainerResult.classList.add('result');
    const validarParrafo = createParagraph(text);
    validarParrafo.dataset.validar = val;
    cointainerResult.appendChild(validarParrafo);
  }
};
