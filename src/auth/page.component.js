import templateUrl from './page.html';

export default {
  templateUrl,
  controller: ['AuthFactory', function (AuthFactory) {
    const $ctrl = this;

    $ctrl.login = function (username) {
      AuthFactory.login(username);
    };
  }],
};
