export default function AuthService($rootScope, $window, $state) {
  function init() {
    $rootScope.$on('$stateChangeStart', (event) => {
      const user = $window.sessionStorage.getItem('username');

      if (!user) {
        $state.transitionTo('login');
        event.preventDefault();
      }
    });
  }

  return { init };
}

AuthService.$inject = ['$rootScope', '$window', '$state'];
