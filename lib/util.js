"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debounce = debounce;
exports.deepClone = deepClone;
exports.deepMerge = deepMerge;
exports.filterNonNumber = filterNonNumber;
exports.getLinearGradientColor = getLinearGradientColor;
exports.getPointDistance = getPointDistance;
exports.getPointToLineDistance = getPointToLineDistance;
exports.getPolylineLength = getPolylineLength;
exports.getTwoPointDistance = getTwoPointDistance;
exports.initNeedSeries = initNeedSeries;
exports.mergeSameStackData = mergeSameStackData;
exports.mulAdd = mulAdd;
exports.observerDomResize = observerDomResize;
exports.radianToAngle = radianToAngle;
exports.randomExtend = randomExtend;
exports.uuid = uuid;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function randomExtend(minNum, maxNum) {
  if (arguments.length === 1) {
    return parseInt(Math.random() * minNum + 1, 10);
  } else {
    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
  }
}
function debounce(fn) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 600;
  var runFirstFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var timer = null;
  return function () {
    // 清除定时器
    clearTimeout(timer);
    for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
      rest[_key] = arguments[_key];
    }
    if (runFirstFn) {
      fn.apply(this, rest);
      runFirstFn = false;
      return;
    }

    // 设置定时器
    timer = setTimeout(fn.bind.apply(fn, [this].concat(rest)), delay);
  };
}
function observerDomResize(dom, callback) {
  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
  var observer = new MutationObserver(callback);
  observer.observe(dom, {
    attributes: true,
    attributeFilter: ['style'],
    attributeOldValue: true
  });
  return observer;
}
function getPointDistance(pointOne, pointTwo) {
  var minusX = Math.abs(pointOne[0] - pointTwo[0]);
  var minusY = Math.abs(pointOne[1] - pointTwo[1]);
  return Math.sqrt(minusX * minusX + minusY * minusY);
}
function uuid(hasHyphen) {
  return (hasHyphen ? 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx' : 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx').replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0;
    var v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}
function filterNonNumber(array) {
  return array.filter(function (n) {
    return typeof n === 'number';
  });
}
function deepClone(obj) {
  var objClone = Array.isArray(obj) ? [] : {};
  if (obj && _typeof(obj) === "object") {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        //判断obj的子属性是否为对象，如果是，递归复制
        if (obj[key] && _typeof(obj[key]) === "object") {
          objClone[key] = deepClone(obj[key]);
        } else {
          //如果不是，简单复制
          objClone[key] = obj[key];
        }
      }
    }
  }
  return objClone;
}
function deepMerge(target, merged) {
  for (var key in merged) {
    if (target[key] && _typeof(target[key]) === 'object') {
      deepMerge(target[key], merged[key]);
      continue;
    }
    if (_typeof(merged[key]) === 'object') {
      target[key] = deepClone(merged[key], true);
      continue;
    }
    target[key] = merged[key];
  }
  return target;
}
function mulAdd(nums) {
  nums = filterNonNumber(nums);
  return nums.reduce(function (all, num) {
    return all + num;
  }, 0);
}
function mergeSameStackData(item, series) {
  var stack = item.stack;
  if (!stack) return _toConsumableArray(item.data);
  var stacks = series.filter(function (_ref) {
    var s = _ref.stack;
    return s === stack;
  });
  var index = stacks.findIndex(function (_ref2) {
    var d = _ref2.data;
    return d === item.data;
  });
  var datas = stacks.splice(0, index + 1).map(function (_ref3) {
    var data = _ref3.data;
    return data;
  });
  var dataLength = datas[0].length;
  return new Array(dataLength).fill(0).map(function (foo, i) {
    return mulAdd(datas.map(function (d) {
      return d[i];
    }));
  });
}
function getTwoPointDistance(pointOne, pointTwo) {
  var minusX = Math.abs(pointOne[0] - pointTwo[0]);
  var minusY = Math.abs(pointOne[1] - pointTwo[1]);
  return Math.sqrt(minusX * minusX + minusY * minusY);
}
function getLinearGradientColor(ctx, begin, end, color) {
  if (!ctx || !begin || !end || !color.length) return;
  var colors = color;
  typeof colors === 'string' && (colors = [color, color]);
  var linearGradientColor = ctx.createLinearGradient.apply(ctx, _toConsumableArray(begin).concat(_toConsumableArray(end)));
  var colorGap = 1 / (colors.length - 1);
  colors.forEach(function (c, i) {
    return linearGradientColor.addColorStop(colorGap * i, c);
  });
  return linearGradientColor;
}
function getPolylineLength(points) {
  var lineSegments = new Array(points.length - 1).fill(0).map(function (foo, i) {
    return [points[i], points[i + 1]];
  });
  var lengths = lineSegments.map(function (item) {
    return getTwoPointDistance.apply(void 0, _toConsumableArray(item));
  });
  return mulAdd(lengths);
}
function getPointToLineDistance(point, linePointOne, linePointTwo) {
  var a = getTwoPointDistance(point, linePointOne);
  var b = getTwoPointDistance(point, linePointTwo);
  var c = getTwoPointDistance(linePointOne, linePointTwo);
  return 0.5 * Math.sqrt((a + b + c) * (a + b - c) * (a + c - b) * (b + c - a)) / c;
}
function initNeedSeries(series, config, type) {
  series = series.filter(function (_ref4) {
    var st = _ref4.type;
    return st === type;
  });
  series = series.map(function (item) {
    return deepMerge(deepClone(config, true), item);
  });
  return series.filter(function (_ref5) {
    var show = _ref5.show;
    return show;
  });
}
function radianToAngle(radian) {
  return radian / Math.PI * 180;
}