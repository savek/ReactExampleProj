"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Button = _interopRequireDefault(require("./Button"));

var _Dialog = _interopRequireDefault(require("./Dialog"));

var _Excel = _interopRequireDefault(require("./Excel"));

var _Form = _interopRequireDefault(require("./Form"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Whinepad = /*#__PURE__*/function (_Component) {
  _inherits(Whinepad, _Component);

  var _super = _createSuper(Whinepad);

  function Whinepad(props) {
    var _this;

    _classCallCheck(this, Whinepad);

    _this = _super.call(this, props);
    _this.state = {
      data: props.initialData,
      addnew: false
    };
    _this._preSearchData = null;
    return _this;
  }

  _createClass(Whinepad, [{
    key: "_addNewDialog",
    value: function _addNewDialog() {
      this.setState({
        addnew: true
      });
    }
  }, {
    key: "_addNew",
    value: function _addNew(action) {
      if (action === 'dismiss') {
        this.setState({
          addnew: false
        });
        return;
      }

      var data = Array.from(this.state.data);
      data.unshift(this.refs.form.getData());
      this.setState({
        addnew: false,
        data: data
      });

      this._commitToStorage(data);
    }
  }, {
    key: "_onExcelDataChange",
    value: function _onExcelDataChange(data) {
      this.setState({
        data: data
      });

      this._commitToStorage(data);
    }
  }, {
    key: "_commitToStorage",
    value: function _commitToStorage(data) {
      localStorage.setItem('data', JSON.stringify(data));
    }
  }, {
    key: "_startSearching",
    value: function _startSearching() {
      this._preSearchData = this.state.data;
    }
  }, {
    key: "_doneSearching",
    value: function _doneSearching() {
      this.setState({
        data: this._preSearchData
      });
    }
  }, {
    key: "_search",
    value: function _search(e) {
      var needle = e.target.value.toLowerCase();

      if (!needle) {
        this.setState({
          data: this._preSearchData
        });
        return;
      }

      var fields = this.props.schema.map(function (item) {
        return item.id;
      });

      var searchdata = this._preSearchData.filter(function (row) {
        for (var f = 0; f < fields.length; f++) {
          if (row[fields[f]].toString().toLowerCase().indexOf(needle) > -1) {
            return true;
          }
        }

        return false;
      });

      this.setState({
        data: searchdata
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "Whinepad"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "WhinepadToolbar"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "WhinepadToolbarAdd"
      }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        onClick: this._addNewDialog.bind(this),
        className: "WhinepadToolbarAddButton"
      }, "+ add")), /*#__PURE__*/_react["default"].createElement("div", {
        className: "WhinepadToolbarSearch"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        placeholder: "Search...",
        onChange: this._search.bind(this),
        onFocus: this._startSearching.bind(this),
        onBlur: this._doneSearching.bind(this)
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "WhinepadDatagrid"
      }, /*#__PURE__*/_react["default"].createElement(_Excel["default"], {
        schema: this.props.schema,
        initialData: this.state.data,
        onDataChange: this._onExcelDataChange.bind(this)
      })), this.state.addnew ? /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
        modal: true,
        header: "Add new item",
        confirmLabel: "Add",
        onAction: this._addNew.bind(this)
      }, /*#__PURE__*/_react["default"].createElement(_Form["default"], {
        ref: "form",
        fields: this.props.schema
      })) : null);
    }
  }]);

  return Whinepad;
}(_react.Component);

Whinepad.propTypes = {
  schema: _propTypes["default"].arrayOf(_propTypes["default"].object),
  initialData: _propTypes["default"].arrayOf(_propTypes["default"].object)
};
var _default = Whinepad;
exports["default"] = _default;