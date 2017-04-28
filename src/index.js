import angular from 'angular';
import uiRouter from 'angular-ui-router';

import './main.less';

import routes from './routes';
import auth from './auth';

angular.module('wordPuzzle', [
  uiRouter,
  auth,
])
.config(routes)
.run(['AuthFactory', (AuthFactory) => {
  AuthFactory.init();
}]);
