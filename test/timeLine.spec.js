
// import { TimeLine } from '../src/components/timeLine';

// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;
// // const { document } = (new JSDOM(`<!DOCTYPE html><p>Hello world</p>`)).window;

// describe('TimeLine', () => {
//   it('debería ser un objeto', () => {
//     expect(typeof TimeLine).toBe('object');
//   });
// });

// it('debería crear y guardar posts', () => {

//   document.body.innerHTML = `<div id="post-wrapper" >

// <section id="post-form">
// eslint-disable-next-line max-len
//     <textArea name='post' rows='10' cols='50' id='newPost' placeHolder='¿Qué estás pensando?'></textArea>
//     <input type='submit' value='postear' id='postButton'>
// </section>

// <div id="postContainer"> 
//     <article id='articleContent>
//     <h3>thalia@gmail.com</h3>
//     <p id='postContent'> prueba 1</p>
//     </article>

//     <article id='articleContent>
//     <h3>bolsita@gmail.com</h3>
//     <p id='postContent'> prueba 2</p>
//     </article>

//     <article id='articleContent>
//     <h3>georgina21@gmail.com</h3>
//     <p id='postContent'> prueba 3</p>
//     </article>

// </div>

// </div>`;

//   const inputs = document.createElement('section');
//   inputs.setAttribute('id', 'inputSection');

//   const postContainer = document.createElement('div');
//   postContainer.setAttribute('id', 'postContainer');
//   document.body.appendChild(postContainer);
//   const newPost = document.createElement('textarea');
//   Object.assign(newPost, {
//     name: 'post',
//     rows: '10',
//     cols: '50',
//     id: 'newPost',
//     class: 'newPost',
//     placeholder: '¿Qué estás pensando?',
//   });
//   const setUpPost = (posts) => {
//     console.log('setuppost');
//     posts.forEach((doc) => {
//       console.log('foreache');
//       const articleContent = document.createElement('article');
//       articleContent.setAttribute('id', 'articleContent');

//       const titleH3 = document.createElement('h3');
//       titleH3.append(doc.doc.data().email);

//       const postContent = document.createElement('p');
//       Object.assign(postContent, {
//         id: 'postContent',
//         // id: doc.doc.data().id,
//         textContent: doc.doc.data().Description,
//       });
//       const likeDiv = document.createElement('div');
//       likeDiv.setAttribute('id', 'likeDiv');
//       const likeB = document.createElement('img');
//       Object.assign(likeB, {
//         id: 'likeb',
//         type: 'button',
//         src: 'imagenes/paw.png',
//         className: 'likeB',
//       });

//   expect(TimeLine()).toBe('function');
// });
