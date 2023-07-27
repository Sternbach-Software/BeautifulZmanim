(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['libres-libres-compose'] = factory(typeof this['libres-libres-compose'] === 'undefined' ? {} : this['libres-libres-compose']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=libres-libres-compose.js.map
