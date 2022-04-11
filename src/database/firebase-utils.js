/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
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
  updateDoc,
  documentId,
  arrayUnion,
  arrayRemove,
  deleteDoc,
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

export { initializeApp };

export {
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
};

export {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  getRedirectResult,
  signInWithRedirect,
  FacebookAuthProvider,
};
