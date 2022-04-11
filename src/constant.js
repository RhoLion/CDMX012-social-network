import { Profile } from './components/profile.js';
import { Home } from './components/home.js';
import { SignIn } from './components/signIn.js';
import { TimeLine } from './components/timeLine.js';

export const rootDiv = document.getElementById('root');
export const routes = {
  '/': Home,
  '/signIn': SignIn,
  '/timeLine': TimeLine,
  '/profile': Profile,
};
export const component = routes[window.location.pathname];
