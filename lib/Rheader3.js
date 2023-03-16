"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _autoResize = _interopRequireDefault(require("./autoResize"));
var _util = require("./util");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var defaultColor = ['#0fffc0', '#00a08b'];
var Rheader3 = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    style = _ref.style,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? [] : _ref$color,
    _ref$backgroundColor = _ref.backgroundColor,
    backgroundColor = _ref$backgroundColor === void 0 ? 'transparent' : _ref$backgroundColor;
  var _useAutoResize = (0, _autoResize["default"])(ref),
    width = _useAutoResize.width,
    height = _useAutoResize.height,
    domRef = _useAutoResize.domRef;
  var mergedColor = (0, _react.useMemo)(function () {
    return (0, _util.deepMerge)((0, _util.deepClone)(defaultColor, true), color || []);
  }, [color]);
  var border = ['left-top', 'right-top', 'left-bottom', 'right-bottom'];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", null, "\n        .xbh3progressDash {\n\n            animation: movexbh3 3s linear infinite;\n            stroke-dasharray: 50vw;\n            stroke-dashoffset: 0;\n        }\n    \n        @keyframes movexbh3 {\n    \n            from {\n                stroke-dashoffset: 50vw;\n            }\n    \n            to {\n                stroke-dashoffset: 0;\n            }\n    \n        }\n        .xbheader3 {\n            position: relative;\n            width: 100%;\n            height: 100%;\n            border-radius: 6px;\n        }\n        .slot-content {\n            position: relative;\n            padding: 10px;\n            width: calc(100% - 20px);\n            height: calc(100% - 20px);\n        }\n    \n        .dev-border {\n            position: absolute;\n            display: block;\n        }\n    \n        .border-box-content {\n            position: relative;\n            width: 100%;\n            height: 100%;\n        }\n        .border {\n            position: absolute;\n            display: block;\n          }\n       \n        "), /*#__PURE__*/_react["default"].createElement("div", {
    className: "xbheader3",
    style: style,
    ref: domRef
  }, width ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("svg", {
    className: "dev-border",
    width: width,
    height: height
  }, /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("filter", {
    id: "filteRheader3",
    height: "150%",
    width: "150%",
    x: "-25%",
    y: "-25%"
  }, /*#__PURE__*/_react["default"].createElement("feGaussianBlur", {
    stdDeviation: "12",
    result: "blurred"
  })), /*#__PURE__*/_react["default"].createElement("linearGradient", {
    id: "linearGradient_x1_2",
    x1: "0%",
    y1: "10%",
    x2: "0%",
    y2: "100%"
  }, /*#__PURE__*/_react["default"].createElement("stop", {
    offset: "0%",
    stopColor: mergedColor[0],
    stopOpacity: "0"
  }), /*#__PURE__*/_react["default"].createElement("stop", {
    offset: "100%",
    stopColor: mergedColor[0],
    stopOpacity: "1"
  })), /*#__PURE__*/_react["default"].createElement("radialGradient", {
    id: "radialGradient_f3",
    cx: "50%",
    cy: "50%",
    r: "50%",
    fx: "100%",
    fy: "50%"
  }, /*#__PURE__*/_react["default"].createElement("stop", {
    offset: "0%",
    stopColor: mergedColor[0]
  }), /*#__PURE__*/_react["default"].createElement("stop", {
    offset: "100%",
    stopColor: mergedColor[1]
  }))), /*#__PURE__*/_react["default"].createElement("path", {
    stroke: mergedColor[1],
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M 0 ".concat(height / 2, " L ").concat(width / 3 - 70, " ").concat(height / 2, " L ").concat(width / 3 - 60, " ").concat(height / 3, " L ").concat(width / 3 - 50, " ").concat(height / 3, " L ").concat(width / 3 - 20, " ").concat(height / 3, " L ").concat(width / 3, " 2 L ").concat(width / 3 * 2, " 2 L ").concat(width / 3 * 2 + 20, " ").concat(height / 3, " L ").concat(width / 3 * 2 + 50, " ").concat(height / 3, " L ").concat(width / 3 * 2 + 60, " ").concat(height / 3, " L ").concat(width / 3 * 2 + 70, " ").concat(height / 2, " L ").concat(width, " ").concat(height / 2)
  }), /*#__PURE__*/_react["default"].createElement("path", {
    stroke: mergedColor[1],
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M ".concat(width / 3 - 70, " ").concat(height / 2, " L  ").concat(width / 3 - 60, " ").concat(height / 3 * 2, " L ").concat(width / 3 - 20, " ").concat(height / 3 * 2, "  L ").concat(width / 3, " ").concat(height - 2, " L ").concat(width / 3 * 2, " ").concat(height - 2, " L ").concat(width / 3 * 2 + 20, " ").concat(height / 3 * 2, " L ").concat(width / 3 * 2 + 50, " ").concat(height / 3 * 2, " L ").concat(width / 3 * 2 + 60, " ").concat(height / 3 * 2, " L ").concat(width / 3 * 2 + 70, " ").concat(height / 2)
  }), /*#__PURE__*/_react["default"].createElement("path", {
    stroke: mergedColor[1],
    strokeWidth: "4",
    fill: "none",
    strokeLinejoin: "round",
    d: "M ".concat(width / 3 - 70, " ").concat(height / 3, " L ").concat(width / 3 - 80, " ").concat(height / 2)
  }), /*#__PURE__*/_react["default"].createElement("path", {
    stroke: mergedColor[1],
    strokeWidth: "4",
    fill: "none",
    strokeLinejoin: "round",
    d: "M ".concat(width / 3 - 80, " ").concat(height / 3, " L ").concat(width / 3 - 90, " ").concat(height / 2)
  }), /*#__PURE__*/_react["default"].createElement("path", {
    stroke: mergedColor[1],
    strokeWidth: "4",
    fill: "none",
    strokeLinejoin: "round",
    d: "M ".concat(width / 3 - 90, " ").concat(height / 3, " L ").concat(width / 3 - 100, " ").concat(height / 2)
  }), /*#__PURE__*/_react["default"].createElement("path", {
    stroke: mergedColor[1],
    strokeWidth: "4",
    fill: "none",
    strokeLinejoin: "round",
    d: "M ".concat(width / 3 * 2 + 70, " ").concat(height / 3, " L ").concat(width / 3 * 2 + 80, " ").concat(height / 2)
  }), /*#__PURE__*/_react["default"].createElement("path", {
    stroke: mergedColor[1],
    strokeWidth: "4",
    fill: "none",
    strokeLinejoin: "round",
    d: "M ".concat(width / 3 * 2 + 80, " ").concat(height / 3, " L ").concat(width / 3 * 2 + 90, " ").concat(height / 2)
  }), /*#__PURE__*/_react["default"].createElement("path", {
    stroke: mergedColor[1],
    strokeWidth: "4",
    fill: "none",
    strokeLinejoin: "round",
    d: "M ".concat(width / 3 * 2 + 90, " ").concat(height / 3, " L ").concat(width / 3 * 2 + 100, " ").concat(height / 2)
  }), /*#__PURE__*/_react["default"].createElement("path", {
    stroke: mergedColor[0],
    strokeWidth: "2",
    fill: "none",
    strokeLinejoin: "round",
    className: "xbh3progressDash",
    d: "M ".concat(width / 2, " ").concat(height - 2, " L ").concat(width / 3, " ").concat(height - 2, " L ").concat(width / 3 - 20, " ").concat(height / 3 * 2, " L  ").concat(width / 3 - 60, " ").concat(height / 3 * 2, " ").concat(width / 3 - 70, " ").concat(height / 2, " L 0 ").concat(height / 2, " ")
  }), /*#__PURE__*/_react["default"].createElement("path", {
    stroke: mergedColor[0],
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "xbh3progressDash",
    d: "M ".concat(width / 2, " ").concat(height - 2, " L ").concat(width / 3 * 2, " ").concat(height - 2, " L ").concat(width / 3 * 2 + 20, " ").concat(height / 3 * 2, " L  ").concat(width / 3 * 2 + 60, " ").concat(height / 3 * 2, " ").concat(width / 3 * 2 + 70, " ").concat(height / 2, " L ").concat(width, " ").concat(height / 2)
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    id: "myCircle1",
    cx: "".concat(width / 5, " "),
    cy: "".concat(height / 2, " "),
    r: "3",
    fill: mergedColor[0]
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    id: "myCircle2",
    cx: "".concat(width / 5 * 4),
    cy: "".concat(height / 2, " "),
    r: "3",
    fill: mergedColor[0]
  }), /*#__PURE__*/_react["default"].createElement("polygon", {
    fill: "url(#linearGradient_x1_2)",
    stroke: "mergedColor[0]",
    strokeWidth: "1",
    filter: "url(#filterHeader1)",
    points: "".concat(width / 3 - 100, " ").concat(height / 3, " ").concat(width / 3 - 110, " ").concat(height / 2, " 0   ").concat(height / 2)
  }), /*#__PURE__*/_react["default"].createElement("polygon", {
    fill: "url(#linearGradient_x1_2)",
    stroke: "mergedColor[0]",
    strokeWidth: "1",
    filter: "url(#filterHeader1)",
    points: "".concat(width / 3 * 2 + 100, " ").concat(height / 3, " ").concat(width / 3 * 2 + 110, " ").concat(height / 2, " ").concat(width, "  ").concat(height / 2)
  }))) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "slot-content"
  }, children)));
});
Rheader3.propTypes = {
  children: _propTypes["default"].node,
  style: _propTypes["default"].object,
  color: _propTypes["default"].array,
  backgroundColor: _propTypes["default"].string
};
var _default = Rheader3;
exports["default"] = _default;