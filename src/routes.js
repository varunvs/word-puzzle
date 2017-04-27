export default function routes($stateProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false,
  });

  $stateProvider
    .state({
      name: 'home',
      url: '/',
    })
    .state({
      name: 'login',
      url: '/login',
      template: '<login-page></login-page>',
    });
}

routes.$inject = ['$stateProvider', '$locationProvider'];
