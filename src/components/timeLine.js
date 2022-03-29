// import { async } from 'regenerator-runtime';
import { onNavigate } from '../app.js';

import {
  logOutFunct,savePost, unsubscribe,saveLikeClicked
} from '../firebase.js';

// window.addEventListener('DOMContentLoaded', async () => {
//   const querySnapshot = await getTaks();

//   querySnapshot.forEach(doc => {
//     console.log(doc);
//   });
// });

export const TimeLine = () => {
  const timeLineDiv = document.createElement('div');
  timeLineDiv.setAttribute('id', 'timeLineDive');

  // const headerImg = document.createElement('img');
  // headerImg.src = 'imagenes/logo_small.png';
  // headerImg.setAttribute('id', 'logo_hex');
  // document.body.appendChild(headerImg);
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
  /* Boton de cerrar sesión */

  /* Div de las publicaciones */

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
  // document.body.appendChild(newPost);

  const postButton = document.createElement('input');
  Object.assign(postButton, {
    type: 'submit',
    value: 'Postear',
    id: 'postButton',
  });
  // document.body.appendChild(postButton);
  postButton.addEventListener('click', () => {
    if (newPost.value != []) {
      savePost( newPost.value, new Date(), []);
    } else {
      alert('No escribiste nada!');
    }
  });
 
  const setUpPost = (posts) => {
    while (setUpPost.firstChild) {
      setUpPost.removeChild(setUpPost.firstChild);
    }
    
    posts.forEach((change) => {
      if (change.type == 'added') {
        // while (postList.firstChild) {
        //   postList.removeChild(postList.lastChild);
        // }
        const articleContent = document.createElement('article');
        articleContent.setAttribute('id', 'articleContent');
        //articleContent.prepend(titleH3, postContent, likeDiv);

        const titleH3 = document.createElement('h3');
        titleH3.append(change.doc.data().email);

        const postContent = document.createElement('p');
        Object.assign(postContent, {
          id: 'postContent',
          textContent: change.doc.data().Description,
        });
        const likeDiv = document.createElement('div');
        likeDiv.setAttribute('id', 'likeDiv');
        const likeB = document.createElement('img');
        Object.assign(likeB, {
          id: 'likeB',
          type: 'button',
          src: 'imagenes/paw.png',
        });
        /*likeB.addEventListener('click', (e) =>{
          saveLikeClicked(e)
        })*/
        likeDiv.appendChild(likeB);
        articleContent.append(titleH3, postContent, likeDiv);
        postContainer.appendChild(articleContent);
      }
    });
  };
  
  // const postList = document.getElementById('postContainer');
  unsubscribe(setUpPost);
  postContainer.append(newPost, postButton);
  
  

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
  timeLineDiv.append(header, postContainer, footer);
  return timeLineDiv;
};

// if (posts.length > 0) {
//   posts.forEach((doc) => {
//     const post = doc.data();
//     const articleContent = document.createElement('article');
//     articleContent.setAttribute('id', 'articleContent');

//     const titleH3 = document.createElement('h3');
//     titleH3.append(post.Title);

//     const postContent = document.createElement('p');
//     Object.assign(postContent, {
//       id: 'postContent',
//       textContent: post.Description,
//     });
//     document.body.appendChild(postContent);
//     articleContent.append(titleH3, postContent);
//     postList.append(newPost, postButton, articleContent);
//   });
// } else {
//  postList.innerHTML = 'Inicia sesión para ver tus posts';

// }
// });

// const loggedOutLinks = document.querySelectorAll(".loggedOut");
// const loggedInLinks = document.querySelectorAll(".loggedIn");
// export const loginCheck = (user) => {
//   if (user) {
//     loggedInLinks.forEach((link) => (link.style.display = 'block'));
//     loggedOutLinks.forEach((link) => (link.style.display = 'none'));
//   } else {
//     loggedInLinks.forEach((link) => (link.style.display = 'none'));
//     loggedOutLinks.forEach((link) => (link.style.display = 'block'));
//   }
// };
