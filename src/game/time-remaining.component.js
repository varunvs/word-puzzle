import _ from 'lodash';

import timeRemainingTemplate from './time-remaining.html';
import './time-remaining.less';

export default {
  templateUrl: timeRemainingTemplate,
  bindings: {
    seconds: '<',
    onTick: '&',
    onEndTime: '&',
    maxTime: '<',
  },
  controller: ['$timeout', function ($timeout) {
    const $ctrl = this;

    const scheduleTimerIfRequired = function (secondsNextVal) {
      if (secondsNextVal !== 0) {
        $timeout(() => $ctrl.onTick({ time: secondsNextVal - 1 }), 1000);
      }

      if (secondsNextVal === 0) {
        $ctrl.onEndTime();
      }
    };

    const getBackgroundStyle = function () {
      if ($ctrl.seconds > 30) return 'green';
      if ($ctrl.seconds > 10) return '#eab25b';

      return 'red';
    };

    $ctrl.$onChanges = function (changes) {
      const secondsNextVal = changes.seconds.currentValue;

      if (!_.isNumber(secondsNextVal)) return;

      if (secondsNextVal !== changes.seconds.previousValue) {
        scheduleTimerIfRequired(secondsNextVal);
      }
    };

    $ctrl.getRemainingTimeBarStyle = function () {
      return { flex: $ctrl.seconds, backgroundColor: getBackgroundStyle() };
    };

    $ctrl.getPlaceholderStyle = function () {
      return { flex: $ctrl.maxTime - $ctrl.seconds };
    };
  }],
};
