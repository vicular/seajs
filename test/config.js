
if (typeof define !== 'function') {
  this.define = function(fn) {
    fn(null, this);
  }
}

define(function(require, exports) {

  exports.testCases = [
    'modules/simplest'
    ,'modules/math'
    ,'modules/cyclic'
    ,'modules/relative'
    ,'modules/determinism'
    ,'modules/exactExports'
    ,'modules/hasOwnProperty'
    ,'modules/method'
    ,'modules/missing'
    ,'modules/monkeys'
    ,'modules/nested'
    ,'modules/transitive'
    ,'modules/alias'
    ,'modules/version'
    ,'modules/load'
    ,'modules/metadata'
    ,'modules/exports'
    ,'modules/checkPotentialErrors'
    ,'modules/extend'
    ,'modules/configMap'
    ,'modules/define'
    ,'modules/preload'

    ,'packages/math'

    ,'unit/util-core'

    ,'issues/config-base'
    ,'issues/ie-cache'
    ,'issues/load-css'
    ,'issues/local-files'
    ,'issues/no-conflict'
    ,'issues/remove-comments'
    ,'issues/multi-use'
    ,'issues/jsonp'
    ,'issues/seajs-map'
    ,'issues/debug'
    ,'issues/timestamp'
    ,'issues/module-extend'
    ,'issues/config-conflict'
    ,'issues/preload'
    ,'issues/inline-module'
    ,'issues/anywhere'
    ,'issues/multi-versions'
    ,'issues/data-main'
    ,'issues/require-extend'
    ,'issues/plugin-coffee'
    ,'issues/plugin-less'
    ,'issues/plugin-text'
    ,'issues/load-deps'
    ,'issues/multi-map'

    ,'bootstrap/index'
  ];

  //exports.testCases = ['modules/inline'];

});
