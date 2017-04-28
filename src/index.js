import angular from 'angular';
import uiRouter from 'angular-ui-router';

import './styles/index.less';

import routes from './routes';
import auth from './auth';

import game from './game';

angular.module('wordPuzzle', [
  uiRouter,
  auth,
  game,
])
.config(routes)
.run(['AuthFactory', (AuthFactory) => {
  AuthFactory.init();
}]);
