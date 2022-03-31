import { onNavigate } from '../app.js';
import {
  savePost, unsubscribe, likeArray,
} from '../firebase.js';

export const TimeLine = () => {
  const timeLineDiv = document.createElement('div');
  timeLineDiv.setAttribute('id', 'timeLineDive');

  // /////////////////////// HEADER /////////////////////////
  const header = document.createElement('header');
  header.setAttribute('id', 'tlHeader');
  const headerLogo = document.createElement('img');
  headerLogo.src = 'imagenes/logo_small.png';
  headerLogo.setAttribute('id', 'logo_hexagonal2');
  document.body.appendChild(headerLogo);
  const headerInbox = document.createElement('img');
  headerInbox.src = 'imagenes/inbox.png';
  headerInbox.setAttribute('id', 'inbox');
  document.body.appendChild(headerInbox);
  const headerProfile = document.createElement('img');
  headerProfile.setAttribute('class', 'modal');
  Object.assign(headerProfile, {
    id: 'profile',
    type: 'button',
    src: 'imagenes/proto_profile.png',
  });
  document.body.appendChild(headerProfile);
  headerProfile.addEventListener('click', () => {
    onNavigate('/profile');
  });

  header.append(headerProfile, headerLogo, headerInbox);
  const wraper = document.createElement('div');
  wraper.setAttribute('id', 'wraper');

  /* Div de las publicaciones */
  const inputs = document.createElement('section');
  inputs.setAttribute('id', 'inputSection');

  const postContainer = document.createElement('div');
  postContainer.setAttribute('id', 'postContainer');
  document.body.appendChild(postContainer);
  const newPost = document.createElement('textarea');
  Object.assign(newPost, {
    name: 'post',
    rows: '10',
    cols: '50',
    id: 'newPost',
    class: 'newPost',
    placeholder: '¿Qué estás pensando?',
  });

  const postButton = document.createElement('input');
  Object.assign(postButton, {
    type: 'submit',
    value: 'Postear',
    id: 'postButton',
  });

  inputs.append(newPost, postButton);

  const setUpPost = (posts) => {
    posts.forEach((change) => {
      const articleContent = document.createElement('article');
      articleContent.setAttribute('id', 'articleContent');

      const titleH3 = document.createElement('h3');
      titleH3.append(change.doc.data().email);

      const postContent = document.createElement('p');
      Object.assign(postContent, {
        id: change.doc.data().objectId,
        textContent: change.doc.data().Description,
      });
      const likeDiv = document.createElement('div');
      likeDiv.setAttribute('id', 'likeDiv');
      const likeB = document.createElement('img');
      Object.assign(likeB, {
        id: 'likeb',
        type: 'button',
        src: 'imagenes/paw.png',
        className: 'likeB',
      });

      let liked = false;
      const likes = change.doc.data().likes;
      // console.log(likes);
      const uids = change.doc.data().UID;
      if (likes.includes(uids)) {
        liked = true;
      }

      likeB.addEventListener('click', (event) => {
        if (likeB) {
          event = change.doc.id;
          // console.log(change.doc.id);
          likeArray(event);
          // console.log(likeArray);
        } else {
        }
        // console.log(event);
      });

      likeDiv.appendChild(likeB);
      articleContent.append(titleH3, postContent, likeDiv);
      postContainer.insertBefore(articleContent, postContainer.firstChild);
    });
  };

  unsubscribe(setUpPost);
  wraper.append(inputs, postContainer);

  postButton.addEventListener('click', () => {
    if (newPost.value != []) {
      savePost(newPost.value, new Date(), []);
      newPost.value = '';
    } else {
      alert('No escribiste nada!');
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
  timeLineDiv.append(header, wraper, footer);
  return timeLineDiv;
};
