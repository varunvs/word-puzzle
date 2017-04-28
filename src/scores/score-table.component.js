import './score-table.less';
import scoreTableTemplate from './score-table.html';

export default {
  bindings: {
    scores: '<',
  },
  templateUrl: scoreTableTemplate,
};
