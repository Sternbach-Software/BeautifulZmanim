(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['MultiplatformSettings-multiplatform-settings'] = factory(typeof this['MultiplatformSettings-multiplatform-settings'] === 'undefined' ? {} : this['MultiplatformSettings-multiplatform-settings']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=MultiplatformSettings-multiplatform-settings.js.map
