"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useAutoResize;
var _react = require("react");
var _util = require("./util");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function useAutoResize(ref) {
  var _useState = (0, _react.useState)(1),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var domRef = (0, _react.useRef)(null);
  var setWH = (0, _react.useCallback)(function () {
    var _ref = domRef.current || {
        clientWidth: 0,
        clientHeight: 0
      },
      clientWidth = _ref.clientWidth,
      clientHeight = _ref.clientHeight;
    setState({
      width: clientWidth,
      height: clientHeight
    });

    // if (!domRef.current) {
    //     console.warn('DataV: Failed to get dom node, component rendering may be abnormal!')
    // } else if (!clientWidth || !clientHeight) {
    //     console.warn('DataV: Component width or height is 0px, rendering abnormality may occur!')
    // }
  }, []);
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      setWH: setWH
    };
  }, []);

  // let timeOutToInterval = (fn) => {
  //     let num = 10
  //     let interv = function () {
  //         num = num - 1
  //         console.log(num)
  //         if (num < 0) {
  //             clearTimeout(interv)
  //             interv = null
  //         }
  //         const { clientWidth, clientHeight } = domRef.current || { clientWidth: 0, clientHeight: 0 }

  //         setState({ width: clientWidth, height: clientHeight })
  //         setTimeout(interv, 800)

  //     }

  //     setTimeout(interv, 600)

  // }

  var timeOutToInterval = function timeOutToInterval() {
    var num = 10;
    var _interv = function interv() {
      console.log('wxb初加载');
      num = num - 1;
      var _ref2 = domRef.current || {
          clientWidth: 0,
          clientHeight: 0
        },
        clientWidth = _ref2.clientWidth,
        clientHeight = _ref2.clientHeight;
      if (clientWidth || clientHeight || num < 0) {
        setState({
          width: clientWidth,
          height: clientHeight
        });
        clearTimeout(_interv);
        _interv = null;
        return;
      }
      setTimeout(_interv, 500);
    };
    setTimeout(_interv, 500);
  };
  (0, _react.useEffect)(function () {
    var debounceSetWHFun = (0, _util.debounce)(setWH, 100);
    debounceSetWHFun();
    timeOutToInterval();
    var domObserver = (0, _util.observerDomResize)(domRef.current, debounceSetWHFun);
    window.addEventListener('resize', debounceSetWHFun);
    return function () {
      window.removeEventListener('resize', debounceSetWHFun);
      if (!domObserver) {
        return;
      }
      domObserver.disconnect();
      domObserver.takeRecords();
    };
  }, []);
  return _objectSpread(_objectSpread({}, state), {}, {
    domRef: domRef,
    setWH: setWH
  });
}