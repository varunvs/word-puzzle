import './guess-the-word.less';
import guessTheWordTemplate from './guess-the-word.html';

export default {
  bindings: {
    word: '<',
    onSubmit: '&',
  },
  templateUrl: guessTheWordTemplate,
};
