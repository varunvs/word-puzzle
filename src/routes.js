export default function routes($stateProvider) {
  $stateProvider
    .state({
      name: 'login',
      url: '/',
      template: '<login-page></login-page>',
      authRequired: false,
    })
    .state({
      name: 'game',
      url: '/game',
      template: '<game-page></game-page>',
      authRequired: true,
    })
    .state({
      name: 'scores',
      url: '/scores',
      template: '<scores-page></scores-page>',
      authRequired: false,
    });
}

routes.$inject = ['$stateProvider'];
