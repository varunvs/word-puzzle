import './guess-the-word.less';
import guessTheWordTemplate from './guess-the-word.html';

export default {
  bindings: {
    word: '<',
    onSubmit: '&',
  },
  templateUrl: guessTheWordTemplate,
  controller() {
    const $ctrl = this;

    const resetUserValue = function () {
      $ctrl.userValue = '';
    };

    $ctrl.$onInit = function () {
      resetUserValue();
    };

    $ctrl.onEnter = function () {
      $ctrl.onSubmit({ word: $ctrl.userValue });
    };

    $ctrl.$onChanges = function (changes) {
      if (changes.word.nextValue !== changes.word.previousValue) {
        resetUserValue();
      }
    };
  },
};
