/**
//  * @jest-environment jsdom
//  */

import { onNavigate } from '../src/app.js';
import { Home } from '../src/components/home.js';

jest.mock('../src/database/firebase-utils.js');

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { document } = (new JSDOM(`<html>
<body>
<div id="root"></div>
</body>
</html>`)).window;

describe('onNavigate', () => {
  beforeEach(() => {
    const elementHtml = document.getElementById('root');
    console.log("Beforeeach", elementHtml);
    jest.doMock('../src/constant.js', () => {
     rootDiv: elementHtml;
    //  Object.assign(location, { host: "www.newhost.com", pathname: '/signIn' });
    });
  });

  it('debería ser una función', () => {
    expect(typeof onNavigate).toBe('function');
  });
});
it('debería redireccionar a otra página', () => {
  // window.location.pathname = ;
    console.log('funcionas?');
  // const pathname = '/signIn';

  // const history =
  // expect(global.window.location.href).toContain('/new-url');
});

// expect(global.window.location.pathname).toHaveBeenCalledWith(expect.objectContaining({ pathname: '/SingIn' }));
// });
