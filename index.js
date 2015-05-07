'use strict';

module.exports = function hasChildSelector(selector) {
  if (typeof selector != 'string') {
    throw new TypeError('has-attribute-selector expects a string');
  }

  return />/.test(selector);
};
