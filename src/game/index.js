import angular from 'angular';

import guessTheWordComponent from './guess-the-word.component';
import timeRemainingComponent from './time-remaining.component';
import userDetailsComponent from './user-details.component';
import gamePage from './page.component';

import WordsRepository from './words-repository.factory';
import GameRepository from './game-repository.factory';

export default angular.module('wordpuzzle.game', [])
  .component('gamePage', gamePage)
  .component('guessTheWord', guessTheWordComponent)
  .component('timeRemaining', timeRemainingComponent)
  .component('userDetails', userDetailsComponent)
  .factory('WordsRepository', WordsRepository)
  .factory('GameRepository', GameRepository)
  .name;
