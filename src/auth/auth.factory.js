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

  function login(username) {
    $window.sessionStorage.setItem('username', username);
  }

  function logout() {
    $window.sessionStorage.removeItem('username');
  }

  return { init, login, logout };
}

AuthService.$inject = ['$rootScope', '$window', '$state'];
