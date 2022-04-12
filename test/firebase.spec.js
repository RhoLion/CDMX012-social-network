// import { exampleObjectMetadata } from 'firebase-functions-test/lib/providers/storage'
// import { singInFunc } from '../src/firebase';
import { async } from 'regenerator-runtime';
import {
  signInFunct, googleLogin, facebookLog, loginInFunct,
  currUser, 
} from '../src/firebase.js';

// jest.mock('../src/components/__mocks__/firestore-utils');
jest.mock('../src/database/firebase-utils.js');

describe('singinfunction', () => {
  console.log('prueba');
  it('debería ser una función', () => {
    expect(typeof signInFunct).toBe('function');
  });
  it('Should return true', async () => {
    const email = 'triadacinco@gmail.com';
    const password = '123456';
    const result = signInFunct(email, password);
    expect(result).toBe(undefined);
  });
  it('Should return false', async () => {
    const email = 'hola@gmail.com';
    const password = '123456';
    const result = signInFunct(email, password);
    expect(result).toBe(undefined);
  });
});

describe('createUserWithGoogle', () => {
  it('Should be a function', async () => {
    expect(typeof googleLogin).toBe('function');
  });
});

describe('createUserWithFacebbok', () => {
  it('Should be a function', async () => {
    expect(typeof facebookLog).toBe('function');
  });
});

describe('loginInFunct', () => {
  it('Should be a function', async () => {
    expect(typeof loginInFunct).toBe('function');
  });
});

describe('currUser', () => {
  it('Should be a function', async () => {
    expect(typeof currUser).toBe('function');
  });
});
