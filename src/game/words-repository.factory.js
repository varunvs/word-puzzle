import _ from 'lodash';

export default function WordsRepository($http, ApiConstants) {
  const getWords = function () {
    return $http.get(`${ApiConstants.baseUrl}/data/words`, { params: { pageSize: 100 } })
      .then(response => _.map(response.data, 'word'));
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

WordsRepository.$inject = ['$http', 'ApiConstants'];
