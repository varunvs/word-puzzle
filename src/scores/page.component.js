import _ from 'lodash';

import './page.less';
import templateUrl from './page.html';

export default {
  templateUrl,
  controller: ['GameRepository', function (GameRepository) {
    const $ctrl = this;

    const getTopScores = function () {
      GameRepository
        .getScores()
        .then((scores) => {
          $ctrl.scores = _.chain(scores).take(5).orderBy('value', 'desc').value();
        });
    };

    $ctrl.$onInit = function () {
      getTopScores();
    };
  }],
};
