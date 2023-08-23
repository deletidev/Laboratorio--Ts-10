import { extractImg } from './getImages-helper';

describe('extractImg', () => {
  it('Debería devolver un error si value es undefined', () => {
    //Arrange
    const value: any = undefined;
    // Act
    const result = () => extractImg(value);

    // Assert
    expect(result).toThrow('Valor no valido');
  });

  it('Debería devolver un error si value es null', () => {
    //Arrange
    const value: any = null;
    // Act
    const result = () => extractImg(value);

    // Assert
    expect(result).toThrow('Valor no valido');
  });

  it('Debería devolver un array con las url de las imagenes que haya en el valor dado', () => {
    //Arrange
    const value = `<div class="card">
    <img src="http://localhost:3000/./mortadelo.webp" />
    </div>`;
    // Act
    const result = extractImg(value);

    // Assert
    const expected = ['http://localhost:3000/./mortadelo.webp'];
    expect(result).toEqual(expected);
  });

  it('Debería devolver un array con las url de las imagenes que haya en el valor dado', () => {
    //Arrange
    const value = `<div class="card">
    <img src=" " />
    </div>
    <img src="http://localhost:3000/./mortadelo.webp" />`;
    // Act
    const result = extractImg(value);

    // Assert
    const expected = [' ', 'http://localhost:3000/./mortadelo.webp'];
    expect(result).toEqual(expected);
  });

  it('Debería devolver un array con las url de las imagenes que haya en el valor dado', () => {
    //Arrange
    const value = `<div class="card">
    <img src="" />
    </div>
    <img src="http://localhost:3000/./mortadelo.webp" />`;
    // Act
    const result = extractImg(value);

    // Assert
    const expected = ['http://localhost:3000/./mortadelo.webp'];
    expect(result).toEqual(expected);
  });
  it('Debería devolver un array con las url de las imagenes que haya en el valor dado', () => {
    //Arrange
    const value = `<div class="card">
    <img src="http://localhost:3000/./mortadelo.webp" />
    </div>
    <div class="card">
    <img src="http://localhost:3000/./rompetechos.webp" />
    <div class="container-description">
    <div class="card">
    <img src="http://localhost:3000/./bacterio.webp" />
    <div class="container-description">
      <h2><span>Nombre: </span>Bacterio</h2>
    `;
    // Act
    const result = extractImg(value);

    // Assert
    const expected = [
      'http://localhost:3000/./mortadelo.webp',
      'http://localhost:3000/./rompetechos.webp',
      'http://localhost:3000/./bacterio.webp'
    ];
    expect(result).toEqual(expected);
  });
});
