import Home from './components/Home.vue';
import Example from './components/Example';
import Login from './Auth/Login';
const routes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/',
    component: Home,
  },
  {
    path: '/example',
    component: Example,
  },
];

export default routes;
