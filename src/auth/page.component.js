import templateUrl from './page.html';

export default {
  templateUrl,
  controller: ['AuthFactory', '$state', function (AuthFactory, $state) {
    const $ctrl = this;

    $ctrl.login = function (username) {
      AuthFactory.login(username);
      $state.go('game', {
        location: 'replace',
      });
    };
  }],
};
