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
var Rbox3 = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
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
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", null, "\n        .box3 {\n            position: relative;\n            width: 100%;\n            height: 100%;\n            border-radius: 6px;\n        }\n        .slot-content {\n            position: relative;\n            padding: 10px;\n            width: calc(100% - 20px);\n            height: calc(100% - 20px);\n        }\n    \n        .dev-border {\n            position: absolute;\n            display: block;\n        }\n    \n        .border-box-content {\n            position: relative;\n            width: 100%;\n            height: 100%;\n        }\n        .border {\n            position: absolute;\n            display: block;\n          }\n        .right-top {\n            right: 0px;\n            transform: rotateY(180deg);\n          }\n        \n          .left-bottom {\n            bottom: 0px;\n            transform: rotateX(180deg);\n          }\n          .right-bottom {\n            right: 0px;\n            bottom: 0px;\n            transform: rotateX(180deg) rotateY(180deg);\n          }\n        "), /*#__PURE__*/_react["default"].createElement("div", {
    className: "box3",
    style: style,
    ref: domRef
  }, width ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("svg", {
    className: "dev-border",
    width: width,
    height: height
  }, /*#__PURE__*/_react["default"].createElement("polygon", {
    fill: backgroundColor,
    stroke: mergedColor[0],
    strokeWidth: "2",
    points: "0, 0 ".concat(width / 5 - 8, ", 0 ").concat(width / 5, ", 10 ").concat(width / 5 * 4, ", 10 ").concat(width / 5 * 4 + 8, ", 0 ").concat(width, ",0 ").concat(width, ", ").concat(height, " ").concat(width / 8 * 5, ",").concat(height, " ").concat(width / 8 * 5 - 8, ",").concat(height - 10, " ").concat(width / 8 * 3, ",").concat(height - 10, " ").concat(width / 8 * 3 - 8, ",").concat(height, " 0, ").concat(height, " ")
  }), /*#__PURE__*/_react["default"].createElement("polyline", {
    stroke: mergedColor[1],
    strokeWidth: "2",
    fill: "none",
    points: "".concat(width / 5 + 2, ", 0 ").concat(width / 5 + 8, ", 4 ").concat(width / 5 * 4 - 8, ", 4 ").concat(width / 5 * 4 - 2, ", 2")
  }), /*#__PURE__*/_react["default"].createElement("polyline", {
    stroke: mergedColor[1],
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    points: "".concat(width / 8 * 3, ", ").concat(height - 4, " ").concat(width / 8 * 5 - 8, ", ").concat(height - 4, " ")
  }))) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null), border.map(function (borderName) {
    return /*#__PURE__*/_react["default"].createElement("svg", {
      width: "100px",
      height: "100px",
      key: borderName,
      className: "".concat(borderName, " border")
    }, /*#__PURE__*/_react["default"].createElement("circle", {
      id: "myCircle",
      cx: "10",
      cy: "10",
      r: "2",
      fill: mergedColor[1]
    }), /*#__PURE__*/_react["default"].createElement("circle", {
      id: "myCircle",
      cx: "25",
      cy: "10",
      r: "3",
      fill: mergedColor[1]
    }), /*#__PURE__*/_react["default"].createElement("circle", {
      id: "myCircle",
      cx: "45",
      cy: "10",
      r: "3",
      fill: mergedColor[1]
    }));
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "slot-content"
  }, children)));
});
Rbox3.propTypes = {
  children: _propTypes["default"].node,
  style: _propTypes["default"].object,
  color: _propTypes["default"].array,
  backgroundColor: _propTypes["default"].string
};
var _default = Rbox3;
exports["default"] = _default;