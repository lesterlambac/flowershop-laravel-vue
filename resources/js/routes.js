import Home from './components/Home.vue';
import Login from './Auth/Login';

import Products from './Product/Products';
import CreateProduct from './Product/CreateProduct';

import CreateCategory from './Category/CreateCategory';
import Main from './Dashboard/Main';

const routes = [
  {
    path: '/admin',
    component: Main,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/',
    component: Home,
  },
  {
    path: '/category',
    component: CreateCategory,
  },
  {
    path: '/create-product',
    component: CreateProduct,
  },
  {
    path: '/products',
    component: Products,
  },
];

export default routes;
