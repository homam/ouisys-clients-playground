"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Checkmark;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function Checkmark() {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "errormark__icon",
    viewBox: "0 0 90.27 90.27"
  }, React.createElement("defs", null, React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: "\n      svg {\n        fill: red;\n      }\n        .circle-2 {\n          fill: #bcbec4;\n    }\n              .x {\n          opacity: 0.5;\n    }\n              .x-single {\n          fill: #fff;\n    }\n      "
    }
  })), React.createElement("title", null, "icon-error"), React.createElement("circle", {
    className: "circle-2",
    cx: "45.14",
    cy: "45.14",
    r: "45.14"
  }), React.createElement("g", {
    className: "x"
  }, React.createElement("rect", {
    className: "x-single",
    x: "21.77",
    y: "43.49",
    width: "46.74",
    height: "3.36",
    transform: "translate(-18.72 45.15) rotate(-45)"
  }), React.createElement("rect", {
    className: "x-single",
    x: "43.47",
    y: "21.81",
    width: "3.36",
    height: "46.74",
    transform: "translate(-18.72 45.16) rotate(-45)"
  })));
}