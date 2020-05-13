"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classification = _interopRequireDefault(require("./classification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = [{
  id: 'name',
  label: 'Name',
  show: true,
  sample: '$2 chuck',
  align: 'left'
}, {
  id: 'year',
  label: 'Year',
  type: 'year',
  show: true,
  sample: 2015
}, {
  id: 'grape',
  label: 'Grape',
  type: 'suggest',
  options: _classification["default"].grapes,
  show: true,
  sample: 'Merlot',
  align: 'left'
}, {
  id: 'rating',
  label: 'Rating',
  type: 'rating',
  show: true,
  sample: 3
}, {
  id: 'comments',
  label: 'Comments',
  type: 'text',
  sample: 'Nice for the price'
}];
exports["default"] = _default;