import { ibanBienFormado } from './IBAN-helpers';
import { isValidIBAN } from 'ibantools';

describe('ibanBienFormado', () => {
  test.each([
    ['ES2114650100722030876293', true],
    ['E82114650100722030876293', false],
    ['ES2114650100722030876293', true],
    ['ES211465010072203087629', false],
    ['ES2114650100722030876293', true],
    ['232114650100722030876293', false]
  ])(
    'Debería devolver para el numero de cuenta %s es el valor %s',
    (valor: string, expected: boolean) => {
      expect(ibanBienFormado(valor)).toBe(expected);
    }
  );
});

describe('isValidIBAN', () => {
  test.each([
    ['ES66 21 0004 1840 1234567891', false],
    ['ES66-21-0004-1840-1234567891', false],
    ['ES6621000418401234567891', true],
    ['ES211465010072203087629', false],
    ['ES6000491500051234567892', true],
    ['ES6000497000051234567892', false],
    ['ES1720852066623456789011', true]
  ])(
    'Debería devolver para el numero de cuenta %s es el valor %s',
    (valor: string, expected: boolean) => {
      expect(isValidIBAN(valor)).toBe(expected);
    }
  );
});
