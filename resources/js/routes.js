import Home from './components/Home.vue';
import Login from './Auth/Login';

import Products from './Product/Products';
import CreateProduct from './Product/CreateProduct';

import CreateCategory from './Category/CreateCategory';

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
