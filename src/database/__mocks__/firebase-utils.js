// import { signInFunct } from '../../firebase';

// eslint-disable-next-line max-classes-per-file
export const initializeApp = (secret) => Promise.resolve({});
export const getFirestore = (app) => Promise.resolve({});
export const getDatabase = (initializeAppObject) => ({});
export const getAuth = (initializeAppObject) => Promise.resolve({});
export class GoogleAuthProvider {
  constructor() { this.name = 'google'; }
}
export class FacebookAuthProvider {
  constructor() { this.name = 'fb'; }
}
export const onAuthStateChanged = () => Promise.resolve({});


export const createUserWithEmailAndPassword = (auth, email, pass) => {
  const userCredential = {
    user: { uid: '123' },
  };
  if (email === 'hola@gmail.com') {
    return Promise.resolve(userCredential);
  }
  const error = { code: 'auth/email-already-in-use' };
  return Promise.reject(error);
};

export const signInWithEmailAndPassword = (auth, email, password) => {
  const userCredential = {
    user: { uid: '123' },
  };
  if (email === 'hola@gmail.com') {
    const error = {
      code: 'auth/user-not-found',
    };
    return Promise.reject(error);
  }
  return Promise.resolve(userCredential);
};
