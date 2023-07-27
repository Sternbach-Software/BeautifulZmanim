(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['Napier-napier-js-ir'] = factory(typeof this['Napier-napier-js-ir'] === 'undefined' ? {} : this['Napier-napier-js-ir']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));
