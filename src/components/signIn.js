/* eslint-disable import/no-cycle */
// import { signInFunct } from '../firebase.js';
// eslint-disable-next-line no-unused-vars
import { onNavigate } from '../app.js';
import { saveForm, signInFunct } from '../firebase.js';

/// ///  VISTA CREACION DE CUENTA ////////////
export const SignIn = () => {
  /// / LOGO E INTRODUCCION /////////////
  const headerImg = document.createElement('img');
  headerImg.src = 'imagenes/logo_small.png';
  headerImg.setAttribute('id', 'logo_hexagonal');
  document.body.appendChild(headerImg);
  const SignInDiv = document.createElement('div');
  SignInDiv.setAttribute('id', 'welcomeText2');
  const signH1 = document.createElement('h1');
  signH1.textContent = '¡Estás a punto de comenzar! Introduce tus datos';
  /// //// FORMULARIO PARA CREAR CUENTA/////////////
  const signInInputs = document.createElement('div');
  signInInputs.setAttribute('id', 'container1');

  const nameInput = document.createElement('input');
  Object.assign(nameInput, {
    id: 'log_name',
    type: 'text',
    placeholder: 'Nombre',
  });
  nameInput.setAttribute('class', 'mailAndPass');
  document.body.appendChild(nameInput);

  const emailInput = document.createElement('input');
  Object.assign(emailInput, {
    id: 'log_email',
    type: 'text',
    placeholder: 'Correo Electrónico',
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
  const showPass = document.createElement('img');
  Object.assign(showPass, {
    id: 'showPass',
    type: 'button',
    src: 'imagenes/eye.png',
  });
  showPass.addEventListener('click', () => {
    if (passInput.type === 'password') {
      passInput.type = 'text';
    } else {
      passInput.type = 'password';
    }
  });
  document.body.appendChild(passInput);
  document.body.appendChild(showPass);

  // Boton crear cuenta
  const submitAction = document.createElement('input');
  Object.assign(submitAction, {
    id: 'creat_acc',
    type: 'submit',
    class: 'loggedOut',
    value: 'Crear cuenta',
  });
  document.body.appendChild(submitAction);

  /// ///// PINTAR NODOS EN HTML ////////
  signInInputs.append(nameInput, emailInput, passInput, showPass, submitAction);

  /// ///// INTERACCION FIRESTORE Y AUTH ////////
  submitAction.addEventListener('click', (e) => {
    e.preventDefault();

    const name = document.querySelector('#log_name').value;
    const email = document.querySelector('#log_email').value;
    const password = document.querySelector('#log_password').value;

    signInFunct(email, password);

    saveForm(name, email, password);
    onNavigate('/timeLine');
  });
  const footerImg = document.createElement('img');
  footerImg.src = 'imagenes/perrito1.jpg';
  document.body.appendChild(footerImg);
  footerImg.setAttribute('id', 'footer_img');
  SignInDiv.append(
    headerImg,
    signH1,
    signInInputs,
    footerImg,
  );
  return SignInDiv;
};

export const impresion = (tkn) => {
  tkn.forEach((error) => {
    console.log(error);
    // const errorLine = document.createElement('p');
    // Object.assign(errorLine, {
    //   id: 'errorLine',
    //   textContent: error,
    // });
    // console.log(errorLine);
  });
};
  // FALTA OPCION PARA RESETEAR FORMULARIO !!!! ////
// export const signIn =
