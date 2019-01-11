"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Checkmark;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function Checkmark() {
  return React.createElement("svg", {
    className: "checkmark__icon",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 52 52"
  }, React.createElement("circle", {
    className: "checkmark__circle",
    cx: "26",
    cy: "26",
    r: "25",
    fill: "none"
  }), React.createElement("path", {
    className: "checkmark__check",
    fill: "none",
    d: "M14.1 27.2l7.1 7.2 16.7-16.8"
  }));
}