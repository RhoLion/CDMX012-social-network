import { initializeApp } from './database/firebase-utils.js';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  onSnapshot,
  query, where,
  orderBy,
  updateDoc,
  documentId,
  arrayUnion,
  arrayRemove,
  deleteDoc,

} from './database/firebase-utils.js';
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
  signInWithPopup,
} from './database/firebase-utils.js';
import { onNavigate } from './app.js';
// import { FieldValue } from 'firestore-jest-mock/mocks/fieldValue';

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

export const signInFunct = (email, pass) => {
  createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      // eslint-disable-next-line no-unused-expressions
      userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      // const errorMessage = error.message;
      const errores = (tkn) => {
        if (tkn === 'auth/invalid-email') {
          // alert('Por favor ingresa un correo válido');
        }
        if (tkn === 'auth/weak-password') {
          // alert('Tu contraseña debe contener al menos 6 carácteres.');
        }
        if (tkn === 'auth/email-already-in-use') {
          // alert('Ya existe una cuenta con este correo, intenta con uno nuevo o Inicia Sesión');
        }
      };
      const resultado = errores(errorCode);
      return resultado;
    });
};

export const saveForm = (name, email, password) => {
  addDoc(collection(db, 'users'), { name, email, password });
};

export const savePost = (Description, date) => {
  const users = auth.currentUser;

  if (users) {
    const email = users.email;
    const UID = users.uid;
    const likes = [];
    // const objectId = Date.parse(new Date());
    addDoc(collection(db, 'posts'), {
      email, Description, date, likes, UID,
    });
  }
};

export const deletePost = async (postId) => {
  const users = auth.currentUser;
  if (users) {
    const userId = users.uid;
    const postCollection = doc(db, 'posts', postId);
    await deleteDoc(postCollection);
  }
};

export const likeArray = async (postId) => {
  const users = auth.currentUser;

  if (users) {
    const userId = users.uid;
    const postCollection = doc(db, 'posts', postId);
    await updateDoc(postCollection, {
      likes: arrayUnion(userId),
    });
  }
};

export const dislike = async (postId) => {
  const users = auth.currentUser;
  if (users) {
    const userId = users.uid;
    const postCollection = doc(db, 'posts', postId);
    await updateDoc(postCollection, {
      likes: arrayRemove(userId),
    });
  }
};

export const totalLikes = (post) => {
  const allLikes = post.likes;
  // const allLikes = post.likes;
  return allLikes.length;
};
export const userLikes = (post) => {
  // const Likes = doc.likes;
  const likes = post.likes;
  return likes;
};

// edit post
export const editP = async (postId, postDesc) => {
  const users = auth.currentUser;
  if (users) {
    const postColle = doc(db, 'posts', postId);
    await updateDoc(postColle, {
      Description: postDesc,
    });
  }
};

// Crear cuenta con Google
// export const googleLogin = () => {
//   signInWithRedirect(auth, provider);
//   getRedirectResult(auth)
//     .then((result) => {
//       // This gives you a Google Access Token. You can use it to access Google APIs.
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       // The signed-in user info.
//       const user = result.user;
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // // The email of the user's account used.
//       const email = error.email;
//     });
// };
// export const googleLogin = () => {
//   signInWithRedirect(auth, provider);
//   onNavigate('/timeLine');
//   getRedirectResult(auth)

//     .then((result) => {
//       // This gives you a Google Access Token. You can use it to access Google APIs.
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       // The signed-in user info.
//       const users = result.user;
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.email;
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       // ...
//     });
// };

export const googleLogin = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const users = result.user;
      onNavigate('/timeLine');
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
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
      onNavigate('/timeLine');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const errores = (tkn) => {
        if (tkn === 'auth/invalid-email') {
          alert('Por favor ingresa un correo válido');
        }
        if (tkn === 'auth/wrong-password') {
          alert('Tu contraseña es incorrecta');
        }
        if (tkn === 'auth/user-not-found') {
          alert('Correo no registrado, crea una cuenta');
        }
      };
      errores(errorCode);
    });
};

// Función cerrar sesión
export const logOutFunct = () => {
  signOut(auth)
    .then(() => {
    })
    .catch((error) => { alert(error); });
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
  }
});

export const unsubscribe = (funct) => {
  const data = collection(db, 'posts');
  const orderData = query(data, orderBy('date', 'asc'));
  let postsArray = [];
  onSnapshot(orderData, (snapshot) => {
    postsArray = [];
    snapshot.forEach((postDoc) => {
      // either edit, update or delete
      if (postDoc.metadata.hasPendingWrites) {
        // objeto fue actualizado
        if (postDoc.exists) {
          postsArray.push({
            id: postDoc.id,
            ...postDoc.data(),
          });
        } else{
          // delete logic
        }
      } else {
        postsArray.push({
          id: postDoc.id,
          ...postDoc.data(),
        });
      }
    });
    funct(postsArray);
  });
};

export const currUser = () => {
  const users = auth.currentUser;
  if (users) {
    return users.uid;
  }
};
