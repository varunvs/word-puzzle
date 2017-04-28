export default function GameRepository() {
  const calcScore = function (actualWord, userInput) {
    const maxScore = Math.floor(1.95 ** (actualWord.length / 3));
    let actualScore = maxScore;

    if (actualWord !== userInput) {
      actualScore -= actualWord.length - userInput.length;
    }

    return actualScore >= 0 ? actualScore : 0;
  };

  return {
    calcScore,
  };
}
