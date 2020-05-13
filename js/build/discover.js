'use strict';

var _Logo = _interopRequireDefault(require("./components/Logo"));

var _Button = _interopRequireDefault(require("./components/Button"));

var _Suggest = _interopRequireDefault(require("./components/Suggest"));

var _Rating = _interopRequireDefault(require("./components/Rating"));

var _FormInput = _interopRequireDefault(require("./components/FormInput"));

var _Form = _interopRequireDefault(require("./components/Form"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Actions = _interopRequireDefault(require("./components/Actions"));

var _Dialog = _interopRequireDefault(require("./components/Dialog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement("div", {
  style: {
    padding: '20px'
  }
}, /*#__PURE__*/_react["default"].createElement("h1", null, "Component discoverer"), /*#__PURE__*/_react["default"].createElement("h2", null, "Logo"), /*#__PURE__*/_react["default"].createElement("div", {
  style: {
    display: 'inline-block',
    background: 'purple'
  }
}, /*#__PURE__*/_react["default"].createElement(_Logo["default"], null)), /*#__PURE__*/_react["default"].createElement("h2", null, "Buttons"), /*#__PURE__*/_react["default"].createElement("div", null, "Button with onClick:", /*#__PURE__*/_react["default"].createElement(_Button["default"], {
  onClick: function onClick() {
    return alert('ouch');
  }
}, "Click me")), /*#__PURE__*/_react["default"].createElement("div", null, "A link:", /*#__PURE__*/_react["default"].createElement(_Button["default"], {
  href: "http://reactjs.com"
}, "Follow me")), /*#__PURE__*/_react["default"].createElement("div", null, "Custom class name:", /*#__PURE__*/_react["default"].createElement(_Button["default"], {
  className: "custom"
}, "I do nothing")), /*#__PURE__*/_react["default"].createElement("h2", null, "Suggest"), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Suggest["default"], {
  options: ['eenie', 'meenie', 'miney', 'mo', 'mike']
})), /*#__PURE__*/_react["default"].createElement("h2", null, "Rating"), /*#__PURE__*/_react["default"].createElement("div", null, "No initial value: ", /*#__PURE__*/_react["default"].createElement(_Rating["default"], null)), /*#__PURE__*/_react["default"].createElement("div", null, "Initial value 4: ", /*#__PURE__*/_react["default"].createElement(_Rating["default"], {
  defaultValue: 4
})), /*#__PURE__*/_react["default"].createElement("div", null, "This one goes to 11: ", /*#__PURE__*/_react["default"].createElement(_Rating["default"], {
  max: 11
})), /*#__PURE__*/_react["default"].createElement("div", null, "Read-only: ", /*#__PURE__*/_react["default"].createElement(_Rating["default"], {
  readonly: true,
  defaultValue: 3
})), /*#__PURE__*/_react["default"].createElement("h2", null, "Form inputs"), /*#__PURE__*/_react["default"].createElement("table", null, /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Vanilla input"), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_FormInput["default"], null))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Prefilled"), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_FormInput["default"], {
  defaultValue: "it's like a default"
}))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Year"), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_FormInput["default"], {
  type: "year"
}))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Rating 1"), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_FormInput["default"], {
  type: "rating",
  defaultValue: 4,
  id: "rate"
}))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Suggest"), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_FormInput["default"], {
  id: "sug",
  type: "suggest",
  options: ['red', 'green', 'blue'],
  defaultValue: "green"
}))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, "Vanilla textarea"), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_FormInput["default"], {
  type: "text"
}))))), /*#__PURE__*/_react["default"].createElement("h2", null, "Form"), /*#__PURE__*/_react["default"].createElement(_Form["default"], {
  fields: [{
    label: 'Rating',
    type: 'rating',
    id: 'rateme'
  }, {
    label: 'Greetings',
    id: 'freetext'
  }],
  initialData: {
    rateme: 4,
    freetext: 'Hello'
  }
}), /*#__PURE__*/_react["default"].createElement("h2", null, "Actions"), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Actions["default"], {
  onAction: function onAction(type) {
    alert(type);
    console.log("type: " + type);
  }
})), /*#__PURE__*/_react["default"].createElement("h2", null, "Dialog"), /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
  header: "Out-of-the-box example",
  modal: false,
  onAction: function onAction(type) {
    return alert(type);
  }
}, "Hello, dialog!"), /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
  header: "No cancel, custom button",
  hasCancel: false,
  confirmLabel: "Whatever",
  onAction: function onAction(type) {
    return alert(type);
  }
}, "Anything goes here, see:", /*#__PURE__*/_react["default"].createElement(_Button["default"], null, "A button"))), document.getElementById('pad'));