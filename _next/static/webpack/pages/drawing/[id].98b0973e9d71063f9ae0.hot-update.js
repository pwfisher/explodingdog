webpackHotUpdate_N_E("pages/drawing/[id]",{

/***/ "./components/DrawingPage.tsx":
/*!************************************!*\
  !*** ./components/DrawingPage.tsx ***!
  \************************************/
/*! exports provided: DrawingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DrawingPage\", function() { return DrawingPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_assetPrefix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/assetPrefix */ \"./lib/assetPrefix.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/pfisher/Code/pwfisher/explodingdog/explorer/components/DrawingPage.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar DrawingPage = function DrawingPage(_ref) {\n  var drawing = _ref.drawing,\n      year = _ref.year;\n\n  var onLeftClick = function onLeftClick() {\n    return console.log('onLeftClick');\n  };\n\n  var onRightClick = function onRightClick() {\n    return console.log('onRightClick');\n  };\n\n  return __jsx(Container, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, __jsx(Header, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, __jsx(Arrow, {\n    onClick: onLeftClick,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 11\n    }\n  }, \"<\"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/year/[id]\",\n    as: \"/year/\".concat(year),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 11\n    }\n  }, __jsx(YearHeading, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }\n  }, year)), __jsx(Arrow, {\n    onClick: onRightClick,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 11\n    }\n  }, \">\")), __jsx(Title, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, drawing.title)), __jsx(Image, {\n    src: \"\".concat(_lib_assetPrefix__WEBPACK_IMPORTED_MODULE_2__[\"assetPrefix\"], \"/images/\").concat(drawing.image),\n    alt: drawing.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }), __jsx(\"a\", {\n    href: \"http://explodingdog.com/title/\".concat(drawing.slug, \".html\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(Date, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, drawing.date)));\n};\n_c = DrawingPage;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].main.attrs({\n  className: 'Explorer__DrawingPage__Container'\n}).withConfig({\n  displayName: \"DrawingPage__Container\",\n  componentId: \"sc-1qbzvd7-0\"\n})([\"display:flex;flex-direction:column;justify-content:space-between;min-height:100vh;max-height:100vh;\"]);\n_c2 = Container;\nvar Header = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].header.attrs({\n  className: 'Explorer__DrawingPage__Header'\n}).withConfig({\n  displayName: \"DrawingPage__Header\",\n  componentId: \"sc-1qbzvd7-1\"\n})([\"display:flex;justify-content:space-between;font-size:32px;font-weight:bold;height:64px;line-height:64px;\"]);\n_c3 = Header;\nvar Arrow = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button.attrs({\n  className: 'Explorer__DrawingPage__Arrow'\n}).withConfig({\n  displayName: \"DrawingPage__Arrow\",\n  componentId: \"sc-1qbzvd7-2\"\n})([\"padding:0 32px;\"]);\n_c4 = Arrow;\nvar YearHeading = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].a.attrs({\n  className: 'Explorer__DrawingPage__YearHeading'\n}).withConfig({\n  displayName: \"DrawingPage__YearHeading\",\n  componentId: \"sc-1qbzvd7-3\"\n})([\"cursor:pointer;\"]);\n_c5 = YearHeading;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h1.attrs({\n  className: 'Explorer__DrawingPage__Title'\n}).withConfig({\n  displayName: \"DrawingPage__Title\",\n  componentId: \"sc-1qbzvd7-4\"\n})([\"font-size:36px;font-weight:bold;\"]);\n_c6 = Title;\nvar Image = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].img.attrs({\n  className: 'Explorer__DrawingPage__Image'\n}).withConfig({\n  displayName: \"DrawingPage__Image\",\n  componentId: \"sc-1qbzvd7-5\"\n})([\"display:block;object-fit:cover;width:100%;\"]);\n_c7 = Image;\nvar Date = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.attrs({\n  classNamne: 'Explorer__DrawingPage__Date'\n}).withConfig({\n  displayName: \"DrawingPage__Date\",\n  componentId: \"sc-1qbzvd7-6\"\n})([\"color:#BBB;font-size:12px;\"]);\n_c8 = Date;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n\n$RefreshReg$(_c, \"DrawingPage\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"Header\");\n$RefreshReg$(_c4, \"Arrow\");\n$RefreshReg$(_c5, \"YearHeading\");\n$RefreshReg$(_c6, \"Title\");\n$RefreshReg$(_c7, \"Image\");\n$RefreshReg$(_c8, \"Date\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS50c3g/MTljYyJdLCJuYW1lcyI6WyJEcmF3aW5nUGFnZSIsImRyYXdpbmciLCJ5ZWFyIiwib25MZWZ0Q2xpY2siLCJjb25zb2xlIiwibG9nIiwib25SaWdodENsaWNrIiwidGl0bGUiLCJhc3NldFByZWZpeCIsImltYWdlIiwic2x1ZyIsImRhdGUiLCJDb250YWluZXIiLCJzdHlsZWQiLCJtYWluIiwiYXR0cnMiLCJjbGFzc05hbWUiLCJIZWFkZXIiLCJoZWFkZXIiLCJBcnJvdyIsImJ1dHRvbiIsIlllYXJIZWFkaW5nIiwiYSIsIlRpdGxlIiwiaDEiLCJJbWFnZSIsImltZyIsIkRhdGUiLCJkaXYiLCJjbGFzc05hbW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFdBQXlELEdBQUcsU0FBNURBLFdBQTRELE9BQXVCO0FBQUEsTUFBcEJDLE9BQW9CLFFBQXBCQSxPQUFvQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFDOUYsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxXQUFNQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLENBQU47QUFBQSxHQUFwQjs7QUFDQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLFdBQU1GLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosQ0FBTjtBQUFBLEdBQXJCOztBQUNBLFNBQ0UsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLEtBQUQ7QUFBTyxXQUFPLEVBQUVGLFdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERixFQUVFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsWUFBWDtBQUF3QixNQUFFLGtCQUFXRCxJQUFYLENBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFjQSxJQUFkLENBREYsQ0FGRixFQUtFLE1BQUMsS0FBRDtBQUFPLFdBQU8sRUFBRUksWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUxGLENBREYsRUFRRSxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRTCxPQUFPLENBQUNNLEtBQWhCLENBUkYsQ0FERixFQVdFLE1BQUMsS0FBRDtBQUFPLE9BQUcsWUFBS0MsNERBQUwscUJBQTJCUCxPQUFPLENBQUNRLEtBQW5DLENBQVY7QUFBc0QsT0FBRyxFQUFFUixPQUFPLENBQUNNLEtBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixFQVlFO0FBQUcsUUFBSSwwQ0FBbUNOLE9BQU8sQ0FBQ1MsSUFBM0MsVUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT1QsT0FBTyxDQUFDVSxJQUFmLENBREYsQ0FaRixDQURGO0FBa0JELENBckJNO0tBQU1YLFc7QUF1QmIsSUFBTVksU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxJQUFQLENBQVlDLEtBQVosQ0FBa0I7QUFBRUMsV0FBUyxFQUFFO0FBQWIsQ0FBbEIsQ0FBSDtBQUFBO0FBQUE7QUFBQSwyR0FBZjtNQUFNSixTO0FBUU4sSUFBTUssTUFBTSxHQUFHSix5REFBTSxDQUFDSyxNQUFQLENBQWNILEtBQWQsQ0FBb0I7QUFBRUMsV0FBUyxFQUFFO0FBQWIsQ0FBcEIsQ0FBSDtBQUFBO0FBQUE7QUFBQSxnSEFBWjtNQUFNQyxNO0FBU04sSUFBTUUsS0FBSyxHQUFHTix5REFBTSxDQUFDTyxNQUFQLENBQWNMLEtBQWQsQ0FBb0I7QUFBRUMsV0FBUyxFQUFFO0FBQWIsQ0FBcEIsQ0FBSDtBQUFBO0FBQUE7QUFBQSx1QkFBWDtNQUFNRyxLO0FBSU4sSUFBTUUsV0FBVyxHQUFHUix5REFBTSxDQUFDUyxDQUFQLENBQVNQLEtBQVQsQ0FBZTtBQUFFQyxXQUFTLEVBQUU7QUFBYixDQUFmLENBQUg7QUFBQTtBQUFBO0FBQUEsdUJBQWpCO01BQU1LLFc7QUFJTixJQUFNRSxLQUFLLEdBQUdWLHlEQUFNLENBQUNXLEVBQVAsQ0FBVVQsS0FBVixDQUFnQjtBQUFFQyxXQUFTLEVBQUU7QUFBYixDQUFoQixDQUFIO0FBQUE7QUFBQTtBQUFBLHdDQUFYO01BQU1PLEs7QUFLTixJQUFNRSxLQUFLLEdBQUdaLHlEQUFNLENBQUNhLEdBQVAsQ0FBV1gsS0FBWCxDQUFpQjtBQUFFQyxXQUFTLEVBQUU7QUFBYixDQUFqQixDQUFIO0FBQUE7QUFBQTtBQUFBLGtEQUFYO01BQU1TLEs7QUFNTixJQUFNRSxJQUFJLEdBQUdkLHlEQUFNLENBQUNlLEdBQVAsQ0FBV2IsS0FBWCxDQUFpQjtBQUFFYyxZQUFVLEVBQUU7QUFBZCxDQUFqQixDQUFIO0FBQUE7QUFBQTtBQUFBLGtDQUFWO01BQU1GLEkiLCJmaWxlIjoiLi9jb21wb25lbnRzL0RyYXdpbmdQYWdlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IERyYXdpbmcgfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IGFzc2V0UHJlZml4IH0gZnJvbSAnLi4vbGliL2Fzc2V0UHJlZml4J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IERyYXdpbmdQYWdlOiBSZWFjdC5GQzx7IGRyYXdpbmc6IERyYXdpbmcsIHllYXI6IG51bWJlciB9PiA9ICh7IGRyYXdpbmcsIHllYXIgfSkgPT4ge1xuICBjb25zdCBvbkxlZnRDbGljayA9ICgpID0+IGNvbnNvbGUubG9nKCdvbkxlZnRDbGljaycpXG4gIGNvbnN0IG9uUmlnaHRDbGljayA9ICgpID0+IGNvbnNvbGUubG9nKCdvblJpZ2h0Q2xpY2snKVxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyPlxuICAgICAgICAgIDxBcnJvdyBvbkNsaWNrPXtvbkxlZnRDbGlja30+Jmx0OzwvQXJyb3c+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi95ZWFyL1tpZF1cIiBhcz17YC95ZWFyLyR7eWVhcn1gfT5cbiAgICAgICAgICAgIDxZZWFySGVhZGluZz57eWVhcn08L1llYXJIZWFkaW5nPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8QXJyb3cgb25DbGljaz17b25SaWdodENsaWNrfT4mZ3Q7PC9BcnJvdz5cbiAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgIDxUaXRsZT57ZHJhd2luZy50aXRsZX08L1RpdGxlPlxuICAgICAgPC9kaXY+XG4gICAgICA8SW1hZ2Ugc3JjPXtgJHthc3NldFByZWZpeH0vaW1hZ2VzLyR7ZHJhd2luZy5pbWFnZX1gfSBhbHQ9e2RyYXdpbmcudGl0bGV9IC8+XG4gICAgICA8YSBocmVmPXtgaHR0cDovL2V4cGxvZGluZ2RvZy5jb20vdGl0bGUvJHtkcmF3aW5nLnNsdWd9Lmh0bWxgfT5cbiAgICAgICAgPERhdGU+e2RyYXdpbmcuZGF0ZX08L0RhdGU+XG4gICAgICA8L2E+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLm1haW4uYXR0cnMoeyBjbGFzc05hbWU6ICdFeHBsb3Jlcl9fRHJhd2luZ1BhZ2VfX0NvbnRhaW5lcid9KWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG5gXG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXIuYXR0cnMoeyBjbGFzc05hbWU6ICdFeHBsb3Jlcl9fRHJhd2luZ1BhZ2VfX0hlYWRlcid9KWBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBoZWlnaHQ6IDY0cHg7XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xuYFxuXG5jb25zdCBBcnJvdyA9IHN0eWxlZC5idXR0b24uYXR0cnMoeyBjbGFzc05hbWU6ICdFeHBsb3Jlcl9fRHJhd2luZ1BhZ2VfX0Fycm93J30pYFxuICBwYWRkaW5nOiAwIDMycHg7XG5gXG5cbmNvbnN0IFllYXJIZWFkaW5nID0gc3R5bGVkLmEuYXR0cnMoeyBjbGFzc05hbWU6ICdFeHBsb3Jlcl9fRHJhd2luZ1BhZ2VfX1llYXJIZWFkaW5nJ30pYFxuICBjdXJzb3I6IHBvaW50ZXI7XG5gXG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxLmF0dHJzKHsgY2xhc3NOYW1lOiAnRXhwbG9yZXJfX0RyYXdpbmdQYWdlX19UaXRsZSd9KWBcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbmBcblxuY29uc3QgSW1hZ2UgPSBzdHlsZWQuaW1nLmF0dHJzKHsgY2xhc3NOYW1lOiAnRXhwbG9yZXJfX0RyYXdpbmdQYWdlX19JbWFnZSd9KWBcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbmBcblxuY29uc3QgRGF0ZSA9IHN0eWxlZC5kaXYuYXR0cnMoeyBjbGFzc05hbW5lOiAnRXhwbG9yZXJfX0RyYXdpbmdQYWdlX19EYXRlJ30pYFxuICBjb2xvcjogI0JCQjtcbiAgZm9udC1zaXplOiAxMnB4O1xuYFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DrawingPage.tsx\n");

/***/ })

})