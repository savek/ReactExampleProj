"use strict";

var _Logo = _interopRequireDefault(require("./components/Logo"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Whinepad = _interopRequireDefault(require("./components/Whinepad"));

var _schema = _interopRequireDefault(require("./schema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var data = JSON.parse(localStorage.getItem('data')); // default example data, read from the schema

if (!data) {
  data = {};

  _schema["default"].forEach(function (item) {
    return data[item.id] = item.sample;
  });

  data = [data];
}

_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
  className: "app-header"
}, /*#__PURE__*/_react["default"].createElement(_Logo["default"], null), " Welcome to Whinepad!"), /*#__PURE__*/_react["default"].createElement(_Whinepad["default"], {
  schema: _schema["default"],
  initialData: data
})), document.getElementById('pad'));