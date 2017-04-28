import angular from 'angular';
import uiRouter from 'angular-ui-router';

import './styles/index.less';

import routes from './routes';

import auth from './auth';
import game from './game';
import scores from './scores';

import ApiConstants from './api-constants';

angular.module('wordPuzzle', [
  uiRouter,
  auth,
  game,
  scores,
])
.config(routes)
.constant('ApiConstants', ApiConstants)
.run(['AuthFactory', (AuthFactory) => {
  AuthFactory.init();
}]);
