import angular from 'angular';

import scoresPage from './page.component';
import scoreTableComponent from './score-table.component';

export default angular.module('wordpuzzle.scores', [])
  .component('scoresPage', scoresPage)
  .component('scoreTable', scoreTableComponent)
  .name;
