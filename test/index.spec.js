// importamos la funcion que vamos a testear
import { singInFunct } from '..src/firebase';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});
