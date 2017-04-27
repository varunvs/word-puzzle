import angular from 'angular';

import loginPage from './page.component';
import loginFormComponent from './login-form.component';

import AuthFactory from './auth.factory';

export default angular.module('wordpuzzle.auth', [])
  .component('loginPage', loginPage)
  .component('loginForm', loginFormComponent)
  .factory('AuthFactory', AuthFactory)
  .name;
