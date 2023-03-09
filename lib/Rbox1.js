"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _autoResize = _interopRequireDefault(require("./autoResize"));
var _util = require("./util");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var defaultColor = ['#0fffc0', '#00a08b'];
var Rbox1 = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
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
  var classNames = (0, _react.useMemo)(function () {
    return (0, _classnames["default"])('box1', className);
  }, [className]);
  var border = ['left-top', 'right-top', 'left-bottom', 'right-bottom'];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", null, "\n        .box1 {\n            position: relative;\n            width: 100%;\n            height: 100%;\n            border-radius: 6px;\n        }\n        .slot-content {\n            position: relative;\n            padding: 10px;\n            width: calc(100% - 20px);\n            height: calc(100% - 20px);\n        }\n    \n        .dev-border {\n            position: absolute;\n            display: block;\n        }\n    \n        .border-box-content {\n            position: relative;\n            width: 100%;\n            height: 100%;\n        }\n        .border {\n            position: absolute;\n            display: block;\n          }\n        .right-top {\n            right: 0px;\n            transform: rotateY(180deg);\n          }\n        \n          .left-bottom {\n            bottom: 0px;\n            transform: rotateX(180deg);\n          }\n        \n          .right-bottom {\n            right: 0px;\n            bottom: 0px;\n            transform: rotateX(180deg) rotateY(180deg);\n          }\n        \n         \n        "), /*#__PURE__*/_react["default"].createElement("div", {
    className: classNames,
    style: style,
    ref: domRef
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    className: "dev-border",
    width: width,
    height: height
  }, /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("filter", {
    id: "innerShadow",
    height: "100%",
    width: "100%",
    x: "0",
    y: "0"
  }, /*#__PURE__*/_react["default"].createElement("feGaussianBlur", {
    "in": "SourceGraphic",
    stdDeviation: "2",
    result: "blurred"
  }))), width ? /*#__PURE__*/_react["default"].createElement("polygon", {
    fill: backgroundColor,
    stroke: mergedColor[0],
    strokeWidth: "3",
    filter: "url(#innerShadow)",
    points: "0,22 22, 0 ".concat(width - 22, ", 0 ").concat(width, ", 22 ").concat(width, " ,").concat(height - 22, " ").concat(width - 22, ", ").concat(height, " 22,").concat(height, " 0, ").concat(height - 22, " 0, 22")
  }) : /*#__PURE__*/_react["default"].createElement("div", null)), border.map(function (borderName) {
    return /*#__PURE__*/_react["default"].createElement("svg", {
      width: "100px",
      height: "100px",
      key: borderName,
      className: "".concat(borderName, " border")
    }, /*#__PURE__*/_react["default"].createElement("polygon", {
      fill: mergedColor[0],
      points: "6,40 0,50 0,20 20,0 100,0 90,6 26,6 6 ,26 6,40"
    }));
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "slot-content"
  }, children)));
});
Rbox1.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  color: _propTypes["default"].array,
  backgroundColor: _propTypes["default"].string
};
var _default = Rbox1;
exports["default"] = _default;