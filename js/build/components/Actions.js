"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Actions = function Actions(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "Actions"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    tabIndex: "0",
    className: "ActionsInfo",
    title: "More info",
    onClick: props.onAction.bind(null, 'info')
  }, "\u2139"), /*#__PURE__*/_react["default"].createElement("span", {
    tabIndex: "0",
    className: "ActionsEdit",
    title: "Edit",
    onClick: props.onAction.bind(null, 'edit')
  }, "\u2710"), /*#__PURE__*/_react["default"].createElement("span", {
    tabIndex: "0",
    className: "ActionsDelete",
    title: "Delete",
    onClick: props.onAction.bind(null, 'delete')
  }, "x"));
};

Actions.propTypes = {
  onAction: _propTypes["default"].func
};
Actions.defaultProps = {
  onAction: function onAction() {}
};
var _default = Actions;
exports["default"] = _default;