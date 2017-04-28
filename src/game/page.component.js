import templateUrl from './page.html';

export default {
  templateUrl,
  controller: ['AuthFactory', function (AuthFactory) {
    const $ctrl = this;

    $ctrl.$onInit = function () {
      $ctrl.username = AuthFactory.getUsername();
    };
  }],
};
