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
          $ctrl.scores = _.chain(scores).orderBy('value', 'desc').take(5).value();
        });
    };

    $ctrl.$onInit = function () {
      getTopScores();
    };
  }],
};
