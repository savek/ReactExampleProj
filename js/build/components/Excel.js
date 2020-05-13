"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Actions = _interopRequireDefault(require("./Actions"));

var _Dialog = _interopRequireDefault(require("./Dialog"));

var _Form = _interopRequireDefault(require("./Form"));

var _FormInput = _interopRequireDefault(require("./FormInput"));

var _Rating = _interopRequireDefault(require("./Rating"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var Excel = /*#__PURE__*/function (_Component) {
  _inherits(Excel, _Component);

  var _super = _createSuper(Excel);

  function Excel(props) {
    var _this;

    _classCallCheck(this, Excel);

    _this = _super.call(this, props);
    _this.state = {
      data: _this.props.initialData,
      sortby: null,
      // schema.id
      descending: false,
      edit: null,
      // [row index, schema.id],
      dialog: null // {type, idx}

    };
    return _this;
  }

  _createClass(Excel, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        data: nextProps.initialData
      });
    }
  }, {
    key: "_fireDataChange",
    value: function _fireDataChange(data) {
      this.props.onDataChange(data);
    }
  }, {
    key: "_sort",
    value: function _sort(key) {
      var data = Array.from(this.state.data);
      var descending = this.state.sortby === key && !this.state.descending;
      data.sort(function (a, b) {
        return descending ? a[key] < b[key] ? 1 : -1 : a[key] > b[key] ? 1 : -1;
      });
      this.setState({
        data: data,
        sortby: key,
        descending: descending
      });

      this._fireDataChange(data);
    }
  }, {
    key: "_showEditor",
    value: function _showEditor(e) {
      this.setState({
        edit: {
          row: parseInt(e.target.dataset.row, 10),
          key: e.target.dataset.key
        }
      });
    }
  }, {
    key: "_save",
    value: function _save(e) {
      e.preventDefault();
      var value = this.refs.input.getValue();
      var data = Array.from(this.state.data);
      data[this.state.edit.row][this.state.edit.key] = value;
      this.setState({
        edit: null,
        data: data
      });

      this._fireDataChange(data);
    }
  }, {
    key: "_actionClick",
    value: function _actionClick(rowidx, action) {
      this.setState({
        dialog: {
          type: action,
          idx: rowidx
        }
      });
    }
  }, {
    key: "_deleteConfirmationClick",
    value: function _deleteConfirmationClick(action) {
      if (action === 'dismiss') {
        this._closeDialog();

        return;
      }

      var data = Array.from(this.state.data);
      data.splice(this.state.dialog.idx, 1);
      this.setState({
        dialog: null,
        data: data
      });

      this._fireDataChange(data);
    }
  }, {
    key: "_closeDialog",
    value: function _closeDialog() {
      this.setState({
        dialog: null
      });
    }
  }, {
    key: "_saveDataDialog",
    value: function _saveDataDialog(action) {
      if (action === 'dismiss') {
        this._closeDialog();

        return;
      }

      var data = Array.from(this.state.data);
      data[this.state.dialog.idx] = this.refs.form.getData();
      this.setState({
        dialog: null,
        data: data
      });

      this._fireDataChange(data);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "Excel"
      }, this._renderTable(), this._renderDialog());
    }
  }, {
    key: "_renderDialog",
    value: function _renderDialog() {
      if (!this.state.dialog) {
        return null;
      }

      switch (this.state.dialog.type) {
        case 'delete':
          return this._renderDeleteDialog();

        case 'info':
          return this._renderFormDialog(true);

        case 'edit':
          return this._renderFormDialog();

        default:
          throw Error("Unexpected dialog type ".concat(this.state.dialog.type));
      }
    }
  }, {
    key: "_renderDeleteDialog",
    value: function _renderDeleteDialog() {
      var first = this.state.data[this.state.dialog.idx];
      var nameguess = first[Object.keys(first)[0]];
      return /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
        modal: true,
        header: "Confirm deletion",
        confirmLabel: "Delete",
        onAction: this._deleteConfirmationClick.bind(this)
      }, "Are you sure you want to delete \"".concat(nameguess, "\"?"));
    }
  }, {
    key: "_renderFormDialog",
    value: function _renderFormDialog(readonly) {
      return /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
        modal: true,
        header: readonly ? 'Item info' : 'Edit item',
        confirmLabel: readonly ? 'ok' : 'Save',
        hasCancel: !readonly,
        onAction: this._saveDataDialog.bind(this)
      }, /*#__PURE__*/_react["default"].createElement(_Form["default"], {
        ref: "form",
        fields: this.props.schema,
        initialData: this.state.data[this.state.dialog.idx],
        readonly: readonly
      }));
    }
  }, {
    key: "_renderTable",
    value: function _renderTable() {
      var _this2 = this;

      return /*#__PURE__*/_react["default"].createElement("table", null, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, this.props.schema.map(function (item) {
        if (!item.show) {
          return null;
        }

        var title = item.label;

        if (_this2.state.sortby === item.id) {
          title += _this2.state.descending ? " \u2191" : " \u2193";
        }

        return /*#__PURE__*/_react["default"].createElement("th", {
          className: "schema-".concat(item.id),
          key: item.id,
          onClick: _this2._sort.bind(_this2, item.id)
        }, title);
      }, this), /*#__PURE__*/_react["default"].createElement("th", {
        className: "ExcelNotSortable"
      }, "Actions"))), /*#__PURE__*/_react["default"].createElement("tbody", {
        onDoubleClick: this._showEditor.bind(this)
      }, this.state.data.map(function (row, rowidx) {
        return /*#__PURE__*/_react["default"].createElement("tr", {
          key: rowidx
        }, Object.keys(row).map(function (cell, idx) {
          var _classNames;

          var schema = _this2.props.schema[idx];

          if (!schema || !schema.show) {
            return null;
          }

          var isRating = schema.type === 'rating';
          var edit = _this2.state.edit;
          var content = row[cell];

          if (!isRating && edit && edit.row === rowidx && edit.key === schema.id) {
            content = /*#__PURE__*/_react["default"].createElement("form", {
              onSubmit: _this2._save.bind(_this2)
            }, /*#__PURE__*/_react["default"].createElement(_FormInput["default"], _extends({
              ref: "input"
            }, schema, {
              defaultValue: content
            })));
          } else if (isRating) {
            content = /*#__PURE__*/_react["default"].createElement(_Rating["default"], {
              readonly: true,
              defaultValue: Number(content)
            });
          }

          return /*#__PURE__*/_react["default"].createElement("td", {
            className: (0, _classnames["default"])((_classNames = {}, _defineProperty(_classNames, "schema-".concat(schema.id), true), _defineProperty(_classNames, 'ExcelEditable', !isRating), _defineProperty(_classNames, 'ExcelDataLeft', schema.align === 'left'), _defineProperty(_classNames, 'ExcelDataRight', schema.align === 'right'), _defineProperty(_classNames, 'ExcelDataCenter', schema.align !== 'left' && schema.align !== 'right'), _classNames)),
            key: idx,
            "data-row": rowidx,
            "data-key": schema.id
          }, content);
        }, _this2), /*#__PURE__*/_react["default"].createElement("td", {
          className: "ExcelDataCenter"
        }, /*#__PURE__*/_react["default"].createElement(_Actions["default"], {
          onAction: _this2._actionClick.bind(_this2, rowidx)
        })));
      }, this)));
    }
  }]);

  return Excel;
}(_react.Component);

Excel.propTypes = {
  schema: _propTypes["default"].arrayOf(_propTypes["default"].object),
  initialData: _propTypes["default"].arrayOf(_propTypes["default"].object),
  onDataChange: _propTypes["default"].func
};
var _default = Excel;
exports["default"] = _default;