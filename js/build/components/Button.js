"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Button(props) {
  var cssclasses = (0, _classnames["default"])('Button', props.className);
  return props.href ? /*#__PURE__*/_react["default"].createElement("a", _extends({}, props, {
    className: cssclasses
  })) : /*#__PURE__*/_react["default"].createElement("button", _extends({}, props, {
    className: cssclasses
  }));
}

Button.propTypes = {
  href: _propTypes["default"].string
};
var _default = Button;
exports["default"] = _default;