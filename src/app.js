import { Home } from './components/Home.js';
// import { about } from './components/about.js';
// eslint-disable-next-line import/no-cycle
import { SignIn } from './components/SignIn.js';
import { TimeLine } from './components/TimeLine.js';
import { Profile } from './components/profile.js';

const rootDiv = document.getElementById('root');
const routes = {
  '/': Home,
  '/signIn': SignIn,
  '/timeLine': TimeLine,
  '/profile': Profile,
};

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

const component = routes[window.location.pathname];

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname]());
};

rootDiv.appendChild(component());
