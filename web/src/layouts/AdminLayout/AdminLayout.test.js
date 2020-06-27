'use strict'
var _interopRequireDefault = require('@babel/runtime-corejs3/helpers/interopRequireDefault')
var _react = _interopRequireDefault(require('react'))
var _testing = require('@redwoodjs/testing')

var _AdminLayout = _interopRequireDefault(require('./AdminLayout'))

describe('AdminLayout', function () {
  it('renders successfully', function () {
    expect(function () {
      ;(0,
      _testing.render)(/*#__PURE__*/ _react['default'].createElement(_AdminLayout['default'], null))
    }).not.toThrow()
  })
})
