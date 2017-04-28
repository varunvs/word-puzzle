import templateUrl from './page.html';

const GAME_TIME_SPAN = 40;

export default {
  templateUrl,
  controller: ['AuthFactory', 'WordsRepository', function (AuthFactory, WordsRepository) {
    const $ctrl = this;
    let index = 0;

    const getWords = function () {
      return WordsRepository.getWords().then((words) => {
        $ctrl.words = words;
      });
    };

    const nextWord = function () {
      if (index < $ctrl.words.length) {
        $ctrl.currentWord = $ctrl.words[index];
        $ctrl.shuffledWord = WordsRepository.shuffleWord($ctrl.currentWord);
        index += 1;
      } else {
        $ctrl.currentWord = null;
      }
    };

    $ctrl.$onInit = function () {
      $ctrl.username = AuthFactory.getUsername();
      $ctrl.maxTime = GAME_TIME_SPAN;

      getWords()
        .then(() => nextWord())
        .then(() => {
          $ctrl.timeRemaining = GAME_TIME_SPAN;
        });
    };

    $ctrl.onEnterWord = function (word) {
      if ($ctrl.currentWord === word.trim()) {
        nextWord();
      }

      if ($ctrl.words.indexOf(word.trim()) > -1) {
        nextWord();
      }
    };

    $ctrl.onTick = function (time) {
      $ctrl.timeRemaining = time;
    };

    $ctrl.onEndTime = function () {
      console.info('Time is zero');
    };
  }],
};
