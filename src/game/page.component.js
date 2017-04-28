import templateUrl from './page.html';

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
      getWords().then(() => nextWord());
    };

    $ctrl.onEnterWord = function (word) {
      if ($ctrl.currentWord === word.trim()) {
        nextWord();
      }

      if ($ctrl.words.indexOf(word.trim()) > -1) {
        nextWord();
      }
    };
  }],
};
