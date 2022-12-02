"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./ReactDropdownMenu.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ReactDropdownMenu(props) {
  const handleChange = event => {
    props.onChange(event.target.value);
  };
  return /*#__PURE__*/_react.default.createElement("select", {
    id: props.id,
    className: "react-dropdown-menu form-select",
    onChange: e => handleChange(e)
  }, props.options.map(option => /*#__PURE__*/_react.default.createElement("option", {
    key: option.name,
    value: option.name
  }, option.name)));
}
var _default = ReactDropdownMenu;
exports.default = _default;