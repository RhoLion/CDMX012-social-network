// import { exampleObjectMetadata } from 'firebase-functions-test/lib/providers/storage'
// import { singInFunc } from '../src/firebase';
import { signInFunct, getAuth } from '../src/firebase.js';

// jest.mock('../src/components/__mocks__/firestore-utils');
jest.mock('../src/database/firebase-utils.js');

describe('singinfunction', () => {
  console.log('prueba');
  it('debería ser una función', () => {
    expect(typeof signInFunct).toBe('function');
  });
});
describe('Singinfunction', () => {
  it('Should return an object', () => {
    const email = 'bolsa33@gmail.com';
    const pass = 'bolsita';
    
    expect(signInFunct(email, pass)).toBe(true);
  });
});
//     it('Should return true', async () => {
//       const email = 'triadacinco@gmail.com';
//       const password = 'triadacinco';
//       const username = 'triadaCinco';
//       const result = await createUser(email, password, username);
//       expect(result.status).toBe(true);
//     });
//     it('Should return false', async () => {
//       const email = 'hola@gmail.com';
//       const password = 'triadacinco';
//       const username = 'triadaCinco';
//       const result = await createUser(email, password, username);
//       expect(result.status).toBe(false);
//     });
//   });
