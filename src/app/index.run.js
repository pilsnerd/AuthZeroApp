(function() {
  'use strict';

  angular
    .module('authZeroApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
