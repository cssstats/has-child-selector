'use strict';

var assert = require('assert');
var hasChildSelector = require('..');

var childSelectors = [
  'ul>li',
  '.foo > .bar'
]

var noChildSelectors = [
  'foo',
  '#bar',
  'li + li',
  '[]'
]

describe('has-child-selector', function() {

  it('should do something return true when an child selector exists', function() {
    childSelectors.forEach(function(selector) {
      assert.ok(hasChildSelector(selector))
    })
  })

  it('should do something return false when no child selector exists', function() {
    noChildSelectors.forEach(function(selector) {
      assert.ok(!hasChildSelector(selector))
    })
  })
})
