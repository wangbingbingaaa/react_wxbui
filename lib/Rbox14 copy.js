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
var Rbox14 = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
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
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", null, "\n        .box14 {\n            position: relative;\n            width: 100%;\n            height: 100%;\n            border-radius: 6px;\n        }\n        .slot-content {\n            position: relative;\n            padding: 10px;\n            width: calc(100% - 20px);\n            height: calc(100% - 20px);\n        }\n    \n        .dev-border {\n            position: absolute;\n            display: block;\n        }\n    \n        .border-box-content {\n            position: relative;\n            width: 100%;\n            height: 100%;\n        }\n        .border {\n            position: absolute;\n            display: block;\n          }\n        .right-top {\n            right: 0px;\n            transform: rotateY(180deg);\n          }\n        \n          .left-bottom {\n            bottom: 0px;\n            transform: rotateX(180deg);\n          }\n          .right-bottom {\n            right: 0px;\n            bottom: 0px;\n            transform: rotateX(180deg) rotateY(180deg);\n          }\n        "), /*#__PURE__*/_react["default"].createElement("div", {
    className: "box14",
    style: style,
    ref: domRef
  }, width ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, border.map(function (borderName) {
    return /*#__PURE__*/_react["default"].createElement("svg", {
      width: width / 2,
      height: height / 2,
      key: borderName,
      className: "".concat(borderName, " border")
    }, /*#__PURE__*/_react["default"].createElement("circle", {
      id: "myCircle",
      cx: "3",
      cy: "3",
      r: "2",
      fill: mergedColor[1]
    }), /*#__PURE__*/_react["default"].createElement("polyline", {
      stroke: mergedColor[0],
      strokeWidth: "1",
      fill: "none",
      points: "10 ,1 ".concat(width / 2, " 0")
    }), /*#__PURE__*/_react["default"].createElement("polyline", {
      stroke: mergedColor[0],
      strokeWidth: "1",
      fill: "none",
      points: "1 ,10 1 ".concat(height / 3, " ")
    }), /*#__PURE__*/_react["default"].createElement("polyline", {
      stroke: mergedColor[1],
      strokeWidth: "1",
      fill: "none",
      points: "5 ,".concat(height / 3 - 15, "  5 ").concat(height / 2, " ")
    }));
  })) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "slot-content"
  }, children)));
});
Rbox14.propTypes = {
  children: _propTypes["default"].node,
  style: _propTypes["default"].object,
  color: _propTypes["default"].array,
  backgroundColor: _propTypes["default"].string
};
var _default = Rbox14;
exports["default"] = _default;