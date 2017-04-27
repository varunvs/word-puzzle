export default function AuthService($rootScope, $window, $state) {
  function init() {
    $rootScope.$on('$stateChangeStart', (event, nextState) => {
      const user = $window.sessionStorage.getItem('username');

      if (!user && nextState.authRequired) {
        $state.transitionTo('login');
        event.preventDefault();
      }
    });
  }

  return { init };
}

AuthService.$inject = ['$rootScope', '$window', '$state'];
