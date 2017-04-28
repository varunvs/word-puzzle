describe('WordsRepository', function() {
  var WordsRepository, $rootScope;

  beforeEach(module('wordpuzzle.game', function($provide) {
  }));

  beforeEach(function () {
    inject(function(_WordsRepository_, _$rootScope_) {
      WordsRepository = _WordsRepository_;
      $rootScope = _$rootScope_;
    });
  });
});
