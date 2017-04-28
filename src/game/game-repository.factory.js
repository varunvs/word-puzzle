import _ from 'lodash';

export default function GameRepository(ApiConstants, $http) {
  const saveScore = function (name, value) {
    $http({
      method: 'PUT',
      url: `${ApiConstants.baseUrl}/data/scores`,
      data: {
        full_name: name,
        score: value,
      },
    });
  };

  const getScores = function () {
    return $http.get(`${ApiConstants.baseUrl}/data/scores`)
      .then(response => _.map(response.data, score => ({ name: score.full_name, value: score.score })));
  };

  const calcScore = function (actualWord, userInput) {
    const maxScore = Math.floor(Math.pow(1.95, (actualWord.length / 3))); // eslint-disable-line
    let actualScore = maxScore;

    if (actualWord !== userInput) {
      actualScore -= actualWord.length - userInput.length;
    }

    return actualScore >= 0 ? actualScore : 0;
  };

  return {
    saveScore,
    getScores,
    calcScore,
  };
}

GameRepository.$inject = ['ApiConstants', '$http'];
