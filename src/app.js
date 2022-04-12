// eslint-disable-next-line import/no-cycle
import { rootDiv, routes, component } from './constant.js';

export const onNavigate = (pathname) => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  rootDiv.appendChild(routes[pathname]());
};

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname]());
};

export const init = () => {
  rootDiv.appendChild(component());
};

window.onload = () => {
  init();
};
