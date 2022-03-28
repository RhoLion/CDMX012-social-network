import { onNavigate } from '../app.js';
import { logOutFunct } from '../firebase.js';

export const Profile = () => {
  const ProfileDiv = document.createElement('div');
  ProfileDiv.setAttribute('id', 'ProfileDiv');

  const profileHolder = document.createElement('h3');
  Object.assign(profileHolder, {
    id: 'profileHolder',
    textContent: 'Este es tu perfil :) ',
  });
  const logOutAction = document.createElement('input');
  Object.assign(logOutAction, {
    id: 'logOutAct',
    type: 'submit',
    class: 'loggedIn',
    value: 'Cerrar sesión',
  });
  document.body.appendChild(logOutAction);

  logOutAction.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#logOutAct');
    onNavigate('/');
    logOutFunct();
    while (Profile.firstChild) {
      Profile.removeChild(Profile.firstChild);
    }
  });
  // ///////// FOOTER ////////////////////
  const footer = document.createElement('footer');
  Object.assign(footer, {
    id: 'mainFooter',
  });
  const homeFooter = document.createElement('img');
  Object.assign(homeFooter, {
    id: 'homeFooter',
    type: 'button',
    src: 'imagenes/home2.png',
  });
  homeFooter.addEventListener('click', () => {
    onNavigate('/timeLine');
  });
  const searchFooter = document.createElement('img');
  Object.assign(searchFooter, {
    id: 'searchFooter',
    type: 'button',
    src: 'imagenes/lupa.png',
  });
  footer.append(homeFooter, searchFooter);
  document.body.appendChild(footer);
  ProfileDiv.append(profileHolder, logOutAction, footer);
  return ProfileDiv;
};
