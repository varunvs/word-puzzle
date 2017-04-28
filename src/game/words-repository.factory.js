export default function WordsRepository($q) {
  const getWords = function () {
    return $q.when([
      'carpet',
      'car',
      'promise',
      'prom',
      'object',
      'olympics',
    ]);
  };

  const shuffleWord = function (word) {
    const wordArr = word.split('');
    const len = wordArr.length;

    for (let i = len - 1; i > 0; i -= 1) {
      const rnd = Math.floor(Math.random() * (i + 1));
      const tmp = wordArr[i];

      wordArr[i] = wordArr[rnd];
      wordArr[rnd] = tmp;
    }
    return wordArr.join('');
  };

  return {
    getWords,
    shuffleWord,
  };
}

WordsRepository.$inject = ['$q'];
