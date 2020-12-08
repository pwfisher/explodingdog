webpackHotUpdate_N_E("pages/year/[id]",{

/***/ "./components/YearBar.tsx":
/*!********************************!*\
  !*** ./components/YearBar.tsx ***!
  \********************************/
/*! exports provided: YearBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"YearBar\", function() { return YearBar; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fixtures_drawings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../__fixtures__/drawings */ \"./__fixtures__/drawings.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/pfisher/Code/pwfisher/explodingdog/explorer/components/YearBar.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar YearBar = function YearBar(_ref) {\n  var activeYear = _ref.activeYear;\n  return __jsx(YearList, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, _fixtures_drawings__WEBPACK_IMPORTED_MODULE_1__[\"drawingYears\"].sort().reverse().map(function (year) {\n    return __jsx(YearItem, {\n      key: year,\n      isActive: year === activeYear,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }\n    }, year === activeYear ? __jsx(\"b\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 13\n      }\n    }, year) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: \"/year/[id]\",\n      as: \"/year/\".concat(year),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 13\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 15\n      }\n    }, year)));\n  }));\n};\n_c = YearBar;\nvar YearList = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ol.attrs({\n  className: 'Explorer__YearBar__YearList'\n}).withConfig({\n  displayName: \"YearBar__YearList\",\n  componentId: \"ab59nw-0\"\n})([\"padding:0 16px;position:sticky;top:0;\"]);\n_c2 = YearList;\nvar YearItem = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].li.attrs({\n  className: 'Explorer__YearBar__YearItem'\n}).withConfig({\n  displayName: \"YearBar__YearItem\",\n  componentId: \"ab59nw-1\"\n})([\"display:inline-block;font-size:12px;margin:8px 10px;position:relative;\", \"\"], function (o) {\n  return o.isActive && \"\\n    &::after {\\n      background: currentColor;\\n      bottom: -2px;\\n      display: block;\\n      content: '';\\n      height: 2px;\\n      left: 0;\\n      opacity: 0.8;\\n      position: absolute;\\n      right: 0;\\n    }\\n  \";\n});\n_c3 = YearItem;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"YearBar\");\n$RefreshReg$(_c2, \"YearList\");\n$RefreshReg$(_c3, \"YearItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ZZWFyQmFyLnRzeD9hMjUzIl0sIm5hbWVzIjpbIlllYXJCYXIiLCJhY3RpdmVZZWFyIiwiZHJhd2luZ1llYXJzIiwic29ydCIsInJldmVyc2UiLCJtYXAiLCJ5ZWFyIiwiWWVhckxpc3QiLCJzdHlsZWQiLCJvbCIsImF0dHJzIiwiY2xhc3NOYW1lIiwiWWVhckl0ZW0iLCJsaSIsIm8iLCJpc0FjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxPQUF5QyxHQUFHLFNBQTVDQSxPQUE0QyxPQUFvQjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFDM0UsU0FDRSxNQUFDLFFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQywrREFBWSxDQUFDQyxJQUFiLEdBQW9CQyxPQUFwQixHQUE4QkMsR0FBOUIsQ0FBa0MsVUFBQUMsSUFBSTtBQUFBLFdBQ3JDLE1BQUMsUUFBRDtBQUFVLFNBQUcsRUFBRUEsSUFBZjtBQUFxQixjQUFRLEVBQUVBLElBQUksS0FBS0wsVUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHSyxJQUFJLEtBQUtMLFVBQVQsR0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlLLElBQUosQ0FERCxHQUdDLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsWUFBWDtBQUF3QixRQUFFLGtCQUFXQSxJQUFYLENBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlBLElBQUosQ0FERixDQUpKLENBRHFDO0FBQUEsR0FBdEMsQ0FESCxDQURGO0FBZUQsQ0FoQk07S0FBTU4sTztBQWtCYixJQUFNTyxRQUFRLEdBQUdDLHlEQUFNLENBQUNDLEVBQVAsQ0FBVUMsS0FBVixDQUFnQjtBQUFFQyxXQUFTLEVBQUU7QUFBYixDQUFoQixDQUFIO0FBQUE7QUFBQTtBQUFBLDZDQUFkO01BQU1KLFE7QUFNTixJQUFNSyxRQUFRLEdBQUdKLHlEQUFNLENBQUNLLEVBQVAsQ0FBVUgsS0FBVixDQUFnQjtBQUFFQyxXQUFTLEVBQUU7QUFBYixDQUFoQixDQUFIO0FBQUE7QUFBQTtBQUFBLG1GQU1WLFVBQUFHLENBQUM7QUFBQSxTQUFJQSxDQUFDLENBQUNDLFFBQUYsdU9BQUo7QUFBQSxDQU5TLENBQWQ7TUFBTUgsUSIsImZpbGUiOiIuL2NvbXBvbmVudHMvWWVhckJhci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBkcmF3aW5nWWVhcnMgfSBmcm9tICcuLi9fX2ZpeHR1cmVzX18vZHJhd2luZ3MnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgY29uc3QgWWVhckJhcjogUmVhY3QuRkM8eyBhY3RpdmVZZWFyOiBudW1iZXIgfT4gPSAoeyBhY3RpdmVZZWFyIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8WWVhckxpc3Q+XG4gICAgICB7ZHJhd2luZ1llYXJzLnNvcnQoKS5yZXZlcnNlKCkubWFwKHllYXIgPT4gKFxuICAgICAgICA8WWVhckl0ZW0ga2V5PXt5ZWFyfSBpc0FjdGl2ZT17eWVhciA9PT0gYWN0aXZlWWVhcn0+XG4gICAgICAgICAge3llYXIgPT09IGFjdGl2ZVllYXIgPyAoXG4gICAgICAgICAgICA8Yj57eWVhcn08L2I+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIveWVhci9baWRdXCIgYXM9e2AveWVhci8ke3llYXJ9YH0+XG4gICAgICAgICAgICAgIDxhPnt5ZWFyfTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApfVxuICAgICAgICA8L1llYXJJdGVtPlxuICAgICAgKSl9XG4gICAgPC9ZZWFyTGlzdD5cbiAgKVxufVxuXG5jb25zdCBZZWFyTGlzdCA9IHN0eWxlZC5vbC5hdHRycyh7IGNsYXNzTmFtZTogJ0V4cGxvcmVyX19ZZWFyQmFyX19ZZWFyTGlzdCcgfSlgXG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuYFxuXG5jb25zdCBZZWFySXRlbSA9IHN0eWxlZC5saS5hdHRycyh7IGNsYXNzTmFtZTogJ0V4cGxvcmVyX19ZZWFyQmFyX19ZZWFySXRlbScgfSk8eyBpc0FjdGl2ZTogYm9vbGVhbn0+YFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiA4cHggMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICR7byA9PiBvLmlzQWN0aXZlICYmIGBcbiAgICAmOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XG4gICAgICBib3R0b206IC0ycHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICBgfVxuYFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/YearBar.tsx\n");

/***/ })

})