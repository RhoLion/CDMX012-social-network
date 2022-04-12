/**
//  * @jest-environment jsdom
//  */

import { onNavigate } from '../src/app.js';

jest.mock('../src/database/firebase-utils.js');

const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { document } = (new JSDOM(`<html>
<body>
<div id="root"></div>
</body>
</html>`)).window;

describe('onNavigate', () => {
  beforeEach(() => {
    const elementHtml = document.getElementById('root');
    jest.doMock('../src/constant.js', () => {
      // eslint-disable-next-line no-unused-expressions
      elementHtml;
    });
  });

  it('debería ser una función', () => {
    expect(typeof onNavigate).toBe('function');
  });
});
