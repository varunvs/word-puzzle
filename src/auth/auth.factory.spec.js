describe('auth factory', function() {
  var AuthFactory, mockWindow, mockState, $rootScope;

  beforeEach(module('wordpuzzle.auth', function($provide) {
    mockWindow = {
      sessionStorage: jasmine.createSpyObj('sessionStorage', ['getItem']),
    };
    mockState = jasmine.createSpyObj('$state', ['transitionTo']);

    $provide.value('$window', mockWindow);
    $provide.value('$state', mockState);
  }));

  beforeEach(function () {
    inject(function(_AuthFactory_, _$rootScope_) {
      AuthFactory = _AuthFactory_;
      $rootScope = _$rootScope_;
    });
  });

  describe('init', function() {
    describe('when user is not logged in', function() {
      beforeEach(function() {
        AuthFactory.init();

        $rootScope.$broadcast('$stateChangeStart');
      });

      it('reads username from session storage', function() {
        expect(mockWindow.sessionStorage.getItem).toHaveBeenCalledWith('username');
      });

      it('redirects to login page', function() {
        expect(mockState.transitionTo).toHaveBeenCalledWith('login');
      });
    });

    describe('when user is logged in', function() {
      beforeEach(function() {
        AuthFactory.init();
        mockWindow.sessionStorage.getItem.and.returnValue('blah');
        $rootScope.$broadcast('$stateChangeStart');
      });

      it('does not redirect to login page', function() {
        expect(mockState.transitionTo).not.toHaveBeenCalled();
      });
    });
  });
});
