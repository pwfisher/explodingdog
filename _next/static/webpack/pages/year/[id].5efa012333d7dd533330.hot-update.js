webpackHotUpdate_N_E("pages/year/[id]",{

/***/ "./components/YearBar.tsx":
/*!********************************!*\
  !*** ./components/YearBar.tsx ***!
  \********************************/
/*! exports provided: YearBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"YearBar\", function() { return YearBar; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fixtures_drawings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../__fixtures__/drawings */ \"./__fixtures__/drawings.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/pfisher/Code/pwfisher/explodingdog/explorer/components/YearBar.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar YearBar = function YearBar(_ref) {\n  var activeYear = _ref.activeYear;\n  return __jsx(YearList, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, _fixtures_drawings__WEBPACK_IMPORTED_MODULE_1__[\"drawingYears\"].sort().reverse().map(function (year) {\n    return __jsx(YearItem, {\n      key: year,\n      isActive: year === activeYear,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }\n    }, __jsx(Link, {\n      href: \"/year/[id]\",\n      as: \"/year/\".concat(year),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 11\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 13\n      }\n    }, year)));\n  }));\n};\n_c = YearBar;\nvar YearList = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ol.attrs({\n  className: 'Explorer__YearBar__YearList'\n}).withConfig({\n  displayName: \"YearBar__YearList\",\n  componentId: \"ab59nw-0\"\n})([\"background:#f8f8f8;border-bottom:1px solid #e5e5e5;font-size:48px;font-weight:bold;padding:24px;\"]);\n_c2 = YearList;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"YearBar\");\n$RefreshReg$(_c2, \"YearList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ZZWFyQmFyLnRzeD9hMjUzIl0sIm5hbWVzIjpbIlllYXJCYXIiLCJhY3RpdmVZZWFyIiwiZHJhd2luZ1llYXJzIiwic29ydCIsInJldmVyc2UiLCJtYXAiLCJ5ZWFyIiwiWWVhckxpc3QiLCJzdHlsZWQiLCJvbCIsImF0dHJzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRU8sSUFBTUEsT0FBeUMsR0FBRyxTQUE1Q0EsT0FBNEMsT0FBb0I7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCO0FBQzNFLFNBQ0UsTUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0MsK0RBQVksQ0FBQ0MsSUFBYixHQUFvQkMsT0FBcEIsR0FBOEJDLEdBQTlCLENBQWtDLFVBQUFDLElBQUk7QUFBQSxXQUNyQyxNQUFDLFFBQUQ7QUFBVSxTQUFHLEVBQUVBLElBQWY7QUFBcUIsY0FBUSxFQUFFQSxJQUFJLEtBQUtMLFVBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLElBQUQ7QUFBTSxVQUFJLEVBQUMsWUFBWDtBQUF3QixRQUFFLGtCQUFXSyxJQUFYLENBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlBLElBQUosQ0FERixDQURGLENBRHFDO0FBQUEsR0FBdEMsQ0FESCxDQURGO0FBV0QsQ0FaTTtLQUFNTixPO0FBY2IsSUFBTU8sUUFBUSxHQUFHQyx5REFBTSxDQUFDQyxFQUFQLENBQVVDLEtBQVYsQ0FBZ0I7QUFBRUMsV0FBUyxFQUFFO0FBQWIsQ0FBaEIsQ0FBSDtBQUFBO0FBQUE7QUFBQSx3R0FBZDtNQUFNSixRIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ZZWFyQmFyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGRyYXdpbmdZZWFycyB9IGZyb20gJy4uL19fZml4dHVyZXNfXy9kcmF3aW5ncydcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBZZWFyQmFyOiBSZWFjdC5GQzx7IGFjdGl2ZVllYXI6IG51bWJlciB9PiA9ICh7IGFjdGl2ZVllYXIgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxZZWFyTGlzdD5cbiAgICAgIHtkcmF3aW5nWWVhcnMuc29ydCgpLnJldmVyc2UoKS5tYXAoeWVhciA9PiAoXG4gICAgICAgIDxZZWFySXRlbSBrZXk9e3llYXJ9IGlzQWN0aXZlPXt5ZWFyID09PSBhY3RpdmVZZWFyfT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3llYXIvW2lkXVwiIGFzPXtgL3llYXIvJHt5ZWFyfWB9PlxuICAgICAgICAgICAgPGE+e3llYXJ9PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9ZZWFySXRlbT5cbiAgICAgICkpfVxuICAgIDwvWWVhckxpc3Q+XG4gIClcbn1cblxuY29uc3QgWWVhckxpc3QgPSBzdHlsZWQub2wuYXR0cnMoeyBjbGFzc05hbWU6ICdFeHBsb3Jlcl9fWWVhckJhcl9fWWVhckxpc3QnIH0pYFxuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMjRweDtcbmBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/YearBar.tsx\n");

/***/ }),

/***/ "./components/YearPage.tsx":
/*!*********************************!*\
  !*** ./components/YearPage.tsx ***!
  \*********************************/
/*! exports provided: YearPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"YearPage\", function() { return YearPage; });\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PageLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageLayout */ \"./components/PageLayout.tsx\");\n/* harmony import */ var _DrawingTile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DrawingTile */ \"./components/DrawingTile.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _YearBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./YearBar */ \"./components/YearBar.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/pfisher/Code/pwfisher/explodingdog/explorer/components/YearPage.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar YearPage = function YearPage(_ref) {\n  var year = _ref.year,\n      drawings = _ref.drawings;\n  return __jsx(_PageLayout__WEBPACK_IMPORTED_MODULE_2__[\"PageLayout\"], {\n    title: \"explodingdog \".concat(year),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, __jsx(_YearBar__WEBPACK_IMPORTED_MODULE_6__[\"YearBar\"], {\n    activeYear: year,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }), __jsx(YearHeading, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, year), __jsx(DrawingSection, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, drawings && drawings.map(function (drawing) {\n    return __jsx(_DrawingTile__WEBPACK_IMPORTED_MODULE_3__[\"DrawingTile\"], Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      key: drawing.slug\n    }, drawing, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 11\n      }\n    }));\n  })));\n};\n_c = YearPage;\nvar YearHeading = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].h1.attrs({\n  className: 'Explorer__YearPage__YearHeading'\n}).withConfig({\n  displayName: \"YearPage__YearHeading\",\n  componentId: \"sc-9d1mdc-0\"\n})([\"font-size:64px;text-indent:48px;\"]);\n_c2 = YearHeading;\nvar DrawingSection = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].section.attrs({\n  className: 'Explorer__YearPage__DrawingSection'\n}).withConfig({\n  displayName: \"YearPage__DrawingSection\",\n  componentId: \"sc-9d1mdc-1\"\n})([\"text-align:center;\"]);\n_c3 = DrawingSection;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"YearPage\");\n$RefreshReg$(_c2, \"YearHeading\");\n$RefreshReg$(_c3, \"DrawingSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ZZWFyUGFnZS50c3g/ODhhMiJdLCJuYW1lcyI6WyJZZWFyUGFnZSIsInllYXIiLCJkcmF3aW5ncyIsIm1hcCIsImRyYXdpbmciLCJzbHVnIiwiWWVhckhlYWRpbmciLCJzdHlsZWQiLCJoMSIsImF0dHJzIiwiY2xhc3NOYW1lIiwiRHJhd2luZ1NlY3Rpb24iLCJzZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUdsQjtBQUFBLE1BSHFCQyxJQUdyQixRQUhxQkEsSUFHckI7QUFBQSxNQUgyQkMsUUFHM0IsUUFIMkJBLFFBRzNCO0FBQ0osU0FDRSxNQUFDLHNEQUFEO0FBQVksU0FBSyx5QkFBa0JELElBQWxCLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQVMsY0FBVSxFQUFFQSxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFjQSxJQUFkLENBRkYsRUFHRSxNQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyxRQUFRLElBQUlBLFFBQVEsQ0FBQ0MsR0FBVCxDQUFhLFVBQUFDLE9BQU87QUFBQSxXQUMvQixNQUFDLHdEQUFEO0FBQWEsU0FBRyxFQUFFQSxPQUFPLENBQUNDO0FBQTFCLE9BQW9DRCxPQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRCtCO0FBQUEsR0FBcEIsQ0FEZixDQUhGLENBREY7QUFXRCxDQWZNO0tBQU1KLFE7QUFpQmIsSUFBTU0sV0FBVyxHQUFHQyx5REFBTSxDQUFDQyxFQUFQLENBQVVDLEtBQVYsQ0FBZ0I7QUFBRUMsV0FBUyxFQUFFO0FBQWIsQ0FBaEIsQ0FBSDtBQUFBO0FBQUE7QUFBQSx3Q0FBakI7TUFBTUosVztBQUtOLElBQU1LLGNBQWMsR0FBR0oseURBQU0sQ0FBQ0ssT0FBUCxDQUFlSCxLQUFmLENBQXFCO0FBQUVDLFdBQVMsRUFBRTtBQUFiLENBQXJCLENBQUg7QUFBQTtBQUFBO0FBQUEsMEJBQXBCO01BQU1DLGMiLCJmaWxlIjoiLi9jb21wb25lbnRzL1llYXJQYWdlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERyYXdpbmcgfSBmcm9tICcuLi90eXBlcy9kcmF3aW5nLW1vZGVscydcbmltcG9ydCB7IFBhZ2VMYXlvdXQgfSBmcm9tICcuL1BhZ2VMYXlvdXQnXG5pbXBvcnQgeyBEcmF3aW5nVGlsZSB9IGZyb20gJy4vRHJhd2luZ1RpbGUnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgWWVhckJhciB9IGZyb20gJy4vWWVhckJhcidcblxuZXhwb3J0IGNvbnN0IFllYXJQYWdlID0gKHsgeWVhciwgZHJhd2luZ3MgfToge1xuICB5ZWFyOiBudW1iZXJcbiAgZHJhd2luZ3M/OiBEcmF3aW5nW11cbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UGFnZUxheW91dCB0aXRsZT17YGV4cGxvZGluZ2RvZyAke3llYXJ9YH0+XG4gICAgICA8WWVhckJhciBhY3RpdmVZZWFyPXt5ZWFyfSAvPlxuICAgICAgPFllYXJIZWFkaW5nPnt5ZWFyfTwvWWVhckhlYWRpbmc+XG4gICAgICA8RHJhd2luZ1NlY3Rpb24+XG4gICAgICAgIHtkcmF3aW5ncyAmJiBkcmF3aW5ncy5tYXAoZHJhd2luZyA9PiAoXG4gICAgICAgICAgPERyYXdpbmdUaWxlIGtleT17ZHJhd2luZy5zbHVnfSB7Li4uZHJhd2luZ30gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L0RyYXdpbmdTZWN0aW9uPlxuICAgIDwvUGFnZUxheW91dD5cbiAgKVxufVxuXG5jb25zdCBZZWFySGVhZGluZyA9IHN0eWxlZC5oMS5hdHRycyh7IGNsYXNzTmFtZTogJ0V4cGxvcmVyX19ZZWFyUGFnZV9fWWVhckhlYWRpbmcnfSlgXG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgdGV4dC1pbmRlbnQ6IDQ4cHg7XG5gXG5cbmNvbnN0IERyYXdpbmdTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb24uYXR0cnMoeyBjbGFzc05hbWU6ICdFeHBsb3Jlcl9fWWVhclBhZ2VfX0RyYXdpbmdTZWN0aW9uJ30pYFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/YearPage.tsx\n");

/***/ })

})