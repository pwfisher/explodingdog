webpackHotUpdate_N_E("pages/year/[id]",{

/***/ "./components/YearPage.tsx":
/*!*********************************!*\
  !*** ./components/YearPage.tsx ***!
  \*********************************/
/*! exports provided: YearPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"YearPage\", function() { return YearPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PageLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageLayout */ \"./components/PageLayout.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _YearBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./YearBar */ \"./components/YearBar.tsx\");\n/* harmony import */ var _fixtures___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../__fixtures__ */ \"./__fixtures__/index.ts\");\n/* harmony import */ var _DrawingSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DrawingSection */ \"./components/DrawingSection.tsx\");\n/* harmony import */ var _lib_tags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/tags */ \"./lib/tags.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/pfisher/Code/pwfisher/explodingdog/explorer/components/YearPage.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar YearPage = function YearPage(_ref) {\n  var year = _ref.year;\n  var drawings = _fixtures___WEBPACK_IMPORTED_MODULE_4__[\"yearDrawingSets\"][year].filter(function (drawing) {\n    return !Object(_lib_tags__WEBPACK_IMPORTED_MODULE_6__[\"drawingHasTag\"])(drawing, 'DoNotList');\n  });\n  return __jsx(_PageLayout__WEBPACK_IMPORTED_MODULE_1__[\"PageLayout\"], {\n    title: \"explodingdog \".concat(year),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(_YearBar__WEBPACK_IMPORTED_MODULE_3__[\"YearBar\"], {\n    activeYear: year,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }), __jsx(YearHeading, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, year), __jsx(_DrawingSection__WEBPACK_IMPORTED_MODULE_5__[\"DrawingSection\"], {\n    drawings: drawings,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }));\n};\n_c = YearPage;\nvar YearHeading = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].h1.attrs({\n  className: 'Explorer__YearPage__YearHeading'\n}).withConfig({\n  displayName: \"YearPage__YearHeading\",\n  componentId: \"sc-9d1mdc-0\"\n})([\"font-size:64px;text-indent:48px;\"]);\n_c2 = YearHeading;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"YearPage\");\n$RefreshReg$(_c2, \"YearHeading\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ZZWFyUGFnZS50c3g/ODhhMiJdLCJuYW1lcyI6WyJZZWFyUGFnZSIsInllYXIiLCJkcmF3aW5ncyIsInllYXJEcmF3aW5nU2V0cyIsImZpbHRlciIsImRyYXdpbmciLCJkcmF3aW5nSGFzVGFnIiwiWWVhckhlYWRpbmciLCJzdHlsZWQiLCJoMSIsImF0dHJzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxRQUFvQyxHQUFHLFNBQXZDQSxRQUF1QyxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ2hFLE1BQU1DLFFBQVEsR0FBR0MsMERBQWUsQ0FBQ0YsSUFBRCxDQUFmLENBQXNCRyxNQUF0QixDQUE2QixVQUFBQyxPQUFPO0FBQUEsV0FBSSxDQUFDQywrREFBYSxDQUFDRCxPQUFELEVBQVUsV0FBVixDQUFsQjtBQUFBLEdBQXBDLENBQWpCO0FBQ0EsU0FDRSxNQUFDLHNEQUFEO0FBQVksU0FBSyx5QkFBa0JKLElBQWxCLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQVMsY0FBVSxFQUFFQSxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFjQSxJQUFkLENBRkYsRUFHRSxNQUFDLDhEQUFEO0FBQWdCLFlBQVEsRUFBRUMsUUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBREY7QUFPRCxDQVRNO0tBQU1GLFE7QUFXYixJQUFNTyxXQUFXLEdBQUdDLHlEQUFNLENBQUNDLEVBQVAsQ0FBVUMsS0FBVixDQUFnQjtBQUFFQyxXQUFTLEVBQUU7QUFBYixDQUFoQixDQUFIO0FBQUE7QUFBQTtBQUFBLHdDQUFqQjtNQUFNSixXIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ZZWFyUGFnZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlTGF5b3V0IH0gZnJvbSAnLi9QYWdlTGF5b3V0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IFllYXJCYXIgfSBmcm9tICcuL1llYXJCYXInXG5pbXBvcnQgeyB5ZWFyRHJhd2luZ1NldHMgfSBmcm9tICcuLi9fX2ZpeHR1cmVzX18nXG5pbXBvcnQgeyBEcmF3aW5nU2VjdGlvbiB9IGZyb20gJy4vRHJhd2luZ1NlY3Rpb24nXG5pbXBvcnQgeyBkcmF3aW5nSGFzVGFnIH0gZnJvbSAnLi4vbGliL3RhZ3MnXG5cbmV4cG9ydCBjb25zdCBZZWFyUGFnZTogUmVhY3QuRkM8eyB5ZWFyOiBzdHJpbmcgfT4gPSAoeyB5ZWFyIH0pID0+IHtcbiAgY29uc3QgZHJhd2luZ3MgPSB5ZWFyRHJhd2luZ1NldHNbeWVhcl0uZmlsdGVyKGRyYXdpbmcgPT4gIWRyYXdpbmdIYXNUYWcoZHJhd2luZywgJ0RvTm90TGlzdCcpKVxuICByZXR1cm4gKFxuICAgIDxQYWdlTGF5b3V0IHRpdGxlPXtgZXhwbG9kaW5nZG9nICR7eWVhcn1gfT5cbiAgICAgIDxZZWFyQmFyIGFjdGl2ZVllYXI9e3llYXJ9IC8+XG4gICAgICA8WWVhckhlYWRpbmc+e3llYXJ9PC9ZZWFySGVhZGluZz5cbiAgICAgIDxEcmF3aW5nU2VjdGlvbiBkcmF3aW5ncz17ZHJhd2luZ3N9IC8+XG4gICAgPC9QYWdlTGF5b3V0PlxuICApXG59XG5cbmNvbnN0IFllYXJIZWFkaW5nID0gc3R5bGVkLmgxLmF0dHJzKHsgY2xhc3NOYW1lOiAnRXhwbG9yZXJfX1llYXJQYWdlX19ZZWFySGVhZGluZyd9KWBcbiAgZm9udC1zaXplOiA2NHB4O1xuICB0ZXh0LWluZGVudDogNDhweDtcbmBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/YearPage.tsx\n");

/***/ })

})