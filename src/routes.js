export default function routes($stateProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false,
  });

  $stateProvider
    .state({
      name: 'home',
      url: '/',
      authRequired: true,
    })
    .state({
      name: 'game',
      url: '/game',
      template: '<game-page></game-page>',
      authRequired: true,
    })
    .state({
      name: 'login',
      url: '/login',
      template: '<login-page></login-page>',
      authRequired: false,
    });
}

routes.$inject = ['$stateProvider', '$locationProvider'];
