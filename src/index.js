import angular from 'angular';
import uiRouter from 'angular-ui-router';

import './styles/index.less';

import routes from './routes';

import auth from './auth';
import game from './game';
import scores from './scores';

angular.module('wordPuzzle', [
  uiRouter,
  auth,
  game,
  scores,
])
.config(routes)
.run(['AuthFactory', (AuthFactory) => {
  AuthFactory.init();
}]);
