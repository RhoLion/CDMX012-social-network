/* eslint-disable indent */
/* eslint-disable spaced-comment */
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../app.js';
import {
 loginInFunct, googleLogin, facebookLog 
} from '../firebase.js';

export const Home = () => {
  // const homeLogo = document.createElement('header');
  const headerImg = document.createElement('img');
  headerImg.src = 'imagenes/logo_large.png';
  document.body.appendChild(headerImg);
  headerImg.setAttribute('id', 'full_logo');
  const HomeDiv = document.createElement('div');
  HomeDiv.setAttribute('id', 'welcomeText');
  document.body.appendChild(HomeDiv);
  const homeH1 = document.createElement('h1');
  homeH1.textContent = '¡Bienvenidx a la comunidad amante de las mascotas!';

  const loginInputs = document.createElement('div');
  loginInputs.setAttribute('id', 'container1');
  const emailInput = document.createElement('input');
  Object.assign(emailInput, {
    id: 'log_email',
    type: 'text',
    placeholder: 'Correo electrónico',
  });
  emailInput.setAttribute('class', 'mailAndPass');
  document.body.appendChild(emailInput);
  const passInput = document.createElement('input');
  Object.assign(passInput, {
    id: 'log_password',
    type: 'password',
    placeholder: 'Contraseña',
  });
  passInput.setAttribute('class', 'mailAndPass');
  document.body.appendChild(passInput);
  const showPass = document.createElement('img');
  Object.assign(showPass, {
    id: 'showPass',
    type: 'button',
    src: 'imagenes/eye.png',
  });
  document.body.appendChild(showPass);
  showPass.addEventListener('click', () => {
  if (passInput.type === 'password') {
    passInput.type = 'text';
  } else {
    passInput.type = 'password';
  }
  });
  const submitAction = document.createElement('input');
  Object.assign(submitAction, {
    id: 'login',
    type: 'submit',
    value: 'Iniciar Sesión',
    class: 'loggedOut',
  });
  document.body.appendChild(submitAction);

    ////////////// LOGOS GOOGLE, FB & CREATE ACC //////////////
  const logosAndCreate = document.createElement('div');
  logosAndCreate.setAttribute('id', 'subcontainer');
  const logos = document.createElement('div');
  logos.setAttribute('id', 'containerLogos');
  const googleBtnLogin = document.createElement('img');
  Object.assign(googleBtnLogin, {
    id: 'googleLogin',
    type: 'button',
    // textContent: 'Crear cuenta',
    class: 'btn btn-secondary btn-block',
    src: 'imagenes/google_logo.png',
  });
  document.body.appendChild(googleBtnLogin);

  const fbBtnLogin = document.createElement('img');
  Object.assign(fbBtnLogin, {
    id: 'facebookLogin',
    type: 'button',
    // textContent: 'Crear cuenta',
    class: 'btn btn-secondary btn-block',
    src: 'imagenes/fb_logo3.png',
  });
  document.body.appendChild(fbBtnLogin);
  logos.append(googleBtnLogin, fbBtnLogin);
  const createAcc = document.createElement('button');
  Object.assign(createAcc, {
    id: 'acc_creation',
    type: 'button',
    textContent: 'Crear cuenta',
  });
  document.body.appendChild(createAcc);
  logosAndCreate.append(logos, createAcc);
  const footer = document.createElement('footer');
  footer.setAttribute('id', 'footr');
  footer.textContent = 'CopyRight @Ale, Ro y Sui';
  loginInputs.append(emailInput, passInput, showPass, submitAction, footer);
  // fbBtnLogin.textContent = 'Iniciar Sesión con Facebook';

  submitAction.addEventListener('click', (e) => {
    e.preventDefault();

    const email = document.querySelector('#log_email').value;
    const password = document.querySelector('#log_password').value;
    // loginInFunct(email, password);
    // onNavigate('/timeLine');

    // if(email existe en doc.user.email){
      // if(password == doc.user.pass del mismo email){
        // llevar a /timeline
    //}
    // alert ('correo no registrado, contra invalida')
    //} hacer fun impresion  (token) => {}

    if ((email != [] || password != []) && (password.length >= 6)) {
      loginInFunct(email, password);
      onNavigate('/timeLine');
    } else {
      onNavigate('/');
      //  alert('correo o contraseña invalidos');
    }
  });

  // submitAction.addEventListener('click', () => {
  //   onNavigate('/timeLine');
  // });
  createAcc.addEventListener('click', () => {
    onNavigate('/signIn');
  });

  googleBtnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    googleLogin();
  });

  fbBtnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    facebookLog();
  });

  HomeDiv.append(
    headerImg,
    homeH1,
    loginInputs,
    logosAndCreate,
  );
  return HomeDiv;
};

// revisar si está loggeada,mostrar timeline, else manda login
// hacer de home y todas las js una function

// tag for img is 'figure'
