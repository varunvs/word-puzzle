export default function GameRepository($q) {
  const saveScore = function (score) {
    return $q.when(score);
  };

  const getScores = function () {
    return $q.when([
      { name: 'blah', value: 100 },
      { name: 'blah2', value: 20 },
      { name: 'blah3', value: 34 },
      { name: 'blah4', value: 20 },
    ]);
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

GameRepository.$inject = ['$q'];
