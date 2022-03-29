import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  onSnapshot,
  query, where,
  orderBy,
  
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  getRedirectResult,
  signInWithRedirect,
  FacebookAuthProvider,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
import { impresion } from './components/signIn.js';

const firebaseConfig = {
  apiKey: 'AIzaSyAiKKsrEJpCx8NgpvvcNp1dykxNjEyzqe0',
  authDomain: 'redsocialmascotasars.firebaseapp.com',
  projectId: 'redsocialmascotasars',
  storageBucket: 'redsocialmascotasars.appspot.com',
  messagingSenderId: '193884625743',
  appId: '1:193884625743:web:0089978f1ca3f84fcc433a',
  measurementId: 'G-97XRHHD647',
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
const provider2 = new FacebookAuthProvider();

/*const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();*/

export const signInFunct = (email, pass) => {
  createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const errores = (tkn) => {
        if (tkn === 'auth/invalid-email') {
          alert('Por favor ingresa un correo válido');
        }
        if (tkn === 'auth/weak-password') {
          alert('Tu contraseña debe contener al menos 6 carácteres.');
        }
        if (tkn === 'auth/email-already-in-use') {
          alert(
            'Ya existe una cuenta con este correo, intenta con uno nuevo o Inicia Sesión',
          );
        }
      };
      const resultado = errores(errorCode);
      return resultado;
    });
};

export const saveForm = (name, email, password) => {
  addDoc(collection(db, 'users'), { name, email, password });
};

export const savePost = ( Description, date, like) => {
  onAuthStateChanged(auth,(users) => { 
  const email = users.email;
  const UID = users.uid;
  const likes = [];
  addDoc(collection(db, 'posts'), { email, Description, date, likes, UID});
})
};

// Crear cuenta con Google
export const googleLogin = () => {
  signInWithRedirect(auth, provider);
  getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log('funciona?');
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

// Crear cuenta con Facebook
export const facebookLog = () => {
  signInWithRedirect(auth, provider2);
  getRedirectResult(auth)
    .then((result) => {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = result.user;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
      // ...
    });
};

// Función iniciar sesión
export const loginInFunct = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      const errores = (tkn) => {
        if (tkn === 'auth/invalid-email') {
          console.log('Por favor ingresa un correo válido');
        }
        if (tkn === 'auth/wrong-password') {
          console.log('Tu contraseña es incorrecta');
        }
        if (tkn === 'auth/user-not-found') {
          console.log(
            'Correo no registrado, crea una cuenta',
          );
        }
      };
      errores(errorCode);
      // console.log(typeof mensaje);
      // impresion(mensaje);
    });
};
// crear fun para errores (traducciones)
// Función cerrar sesión
export const logOutFunct = () => {
  signOut(auth)
    .then(() => {
      console.log('deslogueado');
    })
    .catch((error) => { console.log(error); });
};

/*export const dataCall = (callBackFn) => {
  getDocs(collection(db, 'posts')).then((snapshot) =>   
    callBackFn(snapshot.docs);
    
  });
};*/

onAuthStateChanged(auth, (user) => {
  if (user) {
     const uid = user.uid;
  }
});

const data =collection(db, 'posts');

const w = query(data, orderBy('date', 'asc'));
export const unsubscribe = (funct) => {
        onSnapshot(w, (snapshot) => {
          const changes = snapshot.docChanges();
          funct(changes);
      });
};
////Likes//
