import _ from 'lodash';

import templateUrl from './login-form.html';
import './login-form.less';

export default {
  templateUrl,
  bindings: {
    onLogin: '&',
  },
  controller() {
    const $ctrl = this;

    $ctrl.username = '';
    $ctrl.isUsernameValid = () => _.isEmpty($ctrl.username);

    $ctrl.login = function () {
      $ctrl.onLogin({
        username: $ctrl.username,
      });
    };
  },
};
