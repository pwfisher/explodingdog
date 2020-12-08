webpackHotUpdate_N_E("pages/drawing/[id]",{

/***/ "./components/DrawingPage.tsx":
/*!************************************!*\
  !*** ./components/DrawingPage.tsx ***!
  \************************************/
/*! exports provided: DrawingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DrawingPage\", function() { return DrawingPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_assetPrefix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/assetPrefix */ \"./lib/assetPrefix.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/pfisher/Code/pwfisher/explodingdog/explorer/components/DrawingPage.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar DrawingPage = function DrawingPage(_ref) {\n  var drawing = _ref.drawing,\n      year = _ref.year;\n\n  var onLeftClick = function onLeftClick() {\n    return console.log('onLeftClick');\n  };\n\n  var onRightClick = function onRightClick() {\n    return console.log('onRightClick');\n  };\n\n  return __jsx(Container, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(Title, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, drawing.title), __jsx(ImageWrap, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(Image, {\n    src: \"\".concat(_lib_assetPrefix__WEBPACK_IMPORTED_MODULE_2__[\"assetPrefix\"], \"/images/\").concat(drawing.image),\n    alt: drawing.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  })), __jsx(NavBar, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, __jsx(Arrow, {\n    onClick: onLeftClick,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, \"<\"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/year/[id]\",\n    as: \"/year/\".concat(year),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, __jsx(YearLink, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 11\n    }\n  }, year)), __jsx(\"a\", {\n    href: \"http://explodingdog.com/title/\".concat(drawing.slug, \".html\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, __jsx(DrawingId, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 11\n    }\n  }, \"#\", drawing.id.split('.').slice(-1)), ' · ', __jsx(Date, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 11\n    }\n  }, drawing.date)), __jsx(Arrow, {\n    onClick: onRightClick,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, \">\")));\n};\n_c = DrawingPage;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].main.attrs({\n  className: 'Explorer__DrawingPage__Container'\n}).withConfig({\n  displayName: \"DrawingPage__Container\",\n  componentId: \"sc-1qbzvd7-0\"\n})([\"display:flex;flex-direction:column;justify-content:space-between;min-height:100vh;max-height:100vh;\"]);\n_c2 = Container;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h1.attrs({\n  className: 'Explorer__DrawingPage__Title'\n}).withConfig({\n  displayName: \"DrawingPage__Title\",\n  componentId: \"sc-1qbzvd7-1\"\n})([\"font-size:32px;font-weight:bold;padding:16px 24px;\"]);\n_c3 = Title;\nvar ImageWrap = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].figure.attrs({\n  className: 'Explorer__DrawingPage__ImageWrap'\n}).withConfig({\n  displayName: \"DrawingPage__ImageWrap\",\n  componentId: \"sc-1qbzvd7-2\"\n})([\"flex-grow:1;position:relative;\"]);\n_c4 = ImageWrap;\nvar Image = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].img.attrs({\n  className: 'Explorer__DrawingPage__Image'\n}).withConfig({\n  displayName: \"DrawingPage__Image\",\n  componentId: \"sc-1qbzvd7-3\"\n})([\"display:block;height:100%;object-fit:contain;position:absolute;width:100%;\"]);\n_c5 = Image;\nvar NavBar = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].nav.attrs({\n  className: 'Explorer__DrawingPage__Header'\n}).withConfig({\n  displayName: \"DrawingPage__NavBar\",\n  componentId: \"sc-1qbzvd7-4\"\n})([\"color:#BBB;display:flex;justify-content:space-between;font-size:14px;font-weight:bold;height:40px;line-height:40px;\"]);\n_c6 = NavBar;\nvar Arrow = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button.attrs({\n  className: 'Explorer__DrawingPage__Arrow'\n}).withConfig({\n  displayName: \"DrawingPage__Arrow\",\n  componentId: \"sc-1qbzvd7-5\"\n})([\"background:none;border:none;cursor:pointer;display:block;font-size:24px;padding:0 32px;\"]);\n_c7 = Arrow;\nvar YearLink = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].a.attrs({\n  className: 'Explorer__DrawingPage__YearLink'\n}).withConfig({\n  displayName: \"DrawingPage__YearLink\",\n  componentId: \"sc-1qbzvd7-6\"\n})([\"cursor:pointer;color:black;\"]);\n_c8 = YearLink;\nvar DrawingId = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].span.attrs({\n  className: 'Explorer__DrawingPage__DrawingId'\n}).withConfig({\n  displayName: \"DrawingPage__DrawingId\",\n  componentId: \"sc-1qbzvd7-7\"\n})([\"\"]);\n_c9 = DrawingId;\nvar Date = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].span.attrs({\n  classNamne: 'Explorer__DrawingPage__Date'\n}).withConfig({\n  displayName: \"DrawingPage__Date\",\n  componentId: \"sc-1qbzvd7-8\"\n})([\"\"]);\n_c10 = Date;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;\n\n$RefreshReg$(_c, \"DrawingPage\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"Title\");\n$RefreshReg$(_c4, \"ImageWrap\");\n$RefreshReg$(_c5, \"Image\");\n$RefreshReg$(_c6, \"NavBar\");\n$RefreshReg$(_c7, \"Arrow\");\n$RefreshReg$(_c8, \"YearLink\");\n$RefreshReg$(_c9, \"DrawingId\");\n$RefreshReg$(_c10, \"Date\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS50c3g/MTljYyJdLCJuYW1lcyI6WyJEcmF3aW5nUGFnZSIsImRyYXdpbmciLCJ5ZWFyIiwib25MZWZ0Q2xpY2siLCJjb25zb2xlIiwibG9nIiwib25SaWdodENsaWNrIiwidGl0bGUiLCJhc3NldFByZWZpeCIsImltYWdlIiwic2x1ZyIsImlkIiwic3BsaXQiLCJzbGljZSIsImRhdGUiLCJDb250YWluZXIiLCJzdHlsZWQiLCJtYWluIiwiYXR0cnMiLCJjbGFzc05hbWUiLCJUaXRsZSIsImgxIiwiSW1hZ2VXcmFwIiwiZmlndXJlIiwiSW1hZ2UiLCJpbWciLCJOYXZCYXIiLCJuYXYiLCJBcnJvdyIsImJ1dHRvbiIsIlllYXJMaW5rIiwiYSIsIkRyYXdpbmdJZCIsInNwYW4iLCJEYXRlIiwiY2xhc3NOYW1uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxXQUF5RCxHQUFHLFNBQTVEQSxXQUE0RCxPQUF1QjtBQUFBLE1BQXBCQyxPQUFvQixRQUFwQkEsT0FBb0I7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQzlGLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsV0FBTUMsT0FBTyxDQUFDQyxHQUFSLENBQVksYUFBWixDQUFOO0FBQUEsR0FBcEI7O0FBQ0EsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxXQUFNRixPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLENBQU47QUFBQSxHQUFyQjs7QUFDQSxTQUNFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUUosT0FBTyxDQUFDTSxLQUFoQixDQURGLEVBRUUsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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LFM7QUFFTixJQUFNRSxJQUFJLEdBQUdsQix5REFBTSxDQUFDaUIsSUFBUCxDQUFZZixLQUFaLENBQWtCO0FBQUVpQixZQUFVLEVBQUU7QUFBZCxDQUFsQixDQUFIO0FBQUE7QUFBQTtBQUFBLFFBQVY7T0FBTUQsSSIsImZpbGUiOiIuL2NvbXBvbmVudHMvRHJhd2luZ1BhZ2UudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRHJhd2luZyB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgYXNzZXRQcmVmaXggfSBmcm9tICcuLi9saWIvYXNzZXRQcmVmaXgnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgRHJhd2luZ1BhZ2U6IFJlYWN0LkZDPHsgZHJhd2luZzogRHJhd2luZywgeWVhcjogbnVtYmVyIH0+ID0gKHsgZHJhd2luZywgeWVhciB9KSA9PiB7XG4gIGNvbnN0IG9uTGVmdENsaWNrID0gKCkgPT4gY29uc29sZS5sb2coJ29uTGVmdENsaWNrJylcbiAgY29uc3Qgb25SaWdodENsaWNrID0gKCkgPT4gY29uc29sZS5sb2coJ29uUmlnaHRDbGljaycpXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxUaXRsZT57ZHJhd2luZy50aXRsZX08L1RpdGxlPlxuICAgICAgPEltYWdlV3JhcD5cbiAgICAgICAgPEltYWdlIHNyYz17YCR7YXNzZXRQcmVmaXh9L2ltYWdlcy8ke2RyYXdpbmcuaW1hZ2V9YH0gYWx0PXtkcmF3aW5nLnRpdGxlfSAvPlxuICAgICAgPC9JbWFnZVdyYXA+XG4gICAgICA8TmF2QmFyPlxuICAgICAgICA8QXJyb3cgb25DbGljaz17b25MZWZ0Q2xpY2t9PiZsdDs8L0Fycm93PlxuICAgICAgICA8TGluayBocmVmPVwiL3llYXIvW2lkXVwiIGFzPXtgL3llYXIvJHt5ZWFyfWB9PlxuICAgICAgICAgIDxZZWFyTGluaz57eWVhcn08L1llYXJMaW5rPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxhIGhyZWY9e2BodHRwOi8vZXhwbG9kaW5nZG9nLmNvbS90aXRsZS8ke2RyYXdpbmcuc2x1Z30uaHRtbGB9PlxuICAgICAgICAgIDxEcmF3aW5nSWQ+I3tkcmF3aW5nLmlkLnNwbGl0KCcuJykuc2xpY2UoLTEpfTwvRHJhd2luZ0lkPlxuICAgICAgICAgIHsnIMK3ICd9XG4gICAgICAgICAgPERhdGU+e2RyYXdpbmcuZGF0ZX08L0RhdGU+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPEFycm93IG9uQ2xpY2s9e29uUmlnaHRDbGlja30+Jmd0OzwvQXJyb3c+XG4gICAgICA8L05hdkJhcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQubWFpbi5hdHRycyh7IGNsYXNzTmFtZTogJ0V4cGxvcmVyX19EcmF3aW5nUGFnZV9fQ29udGFpbmVyJ30pYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbmBcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDEuYXR0cnMoeyBjbGFzc05hbWU6ICdFeHBsb3Jlcl9fRHJhd2luZ1BhZ2VfX1RpdGxlJ30pYFxuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxNnB4IDI0cHg7XG5gXG5cbmNvbnN0IEltYWdlV3JhcCA9IHN0eWxlZC5maWd1cmUuYXR0cnMoeyBjbGFzc05hbWU6ICdFeHBsb3Jlcl9fRHJhd2luZ1BhZ2VfX0ltYWdlV3JhcCd9KWBcbiAgZmxleC1ncm93OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gXG5cbmNvbnN0IEltYWdlID0gc3R5bGVkLmltZy5hdHRycyh7IGNsYXNzTmFtZTogJ0V4cGxvcmVyX19EcmF3aW5nUGFnZV9fSW1hZ2UnfSlgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG5gXG5cbmNvbnN0IE5hdkJhciA9IHN0eWxlZC5uYXYuYXR0cnMoeyBjbGFzc05hbWU6ICdFeHBsb3Jlcl9fRHJhd2luZ1BhZ2VfX0hlYWRlcid9KWBcbiAgY29sb3I6ICNCQkI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbmBcblxuY29uc3QgQXJyb3cgPSBzdHlsZWQuYnV0dG9uLmF0dHJzKHsgY2xhc3NOYW1lOiAnRXhwbG9yZXJfX0RyYXdpbmdQYWdlX19BcnJvdyd9KWBcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDI0cHg7XG4gIHBhZGRpbmc6IDAgMzJweDtcbmBcblxuY29uc3QgWWVhckxpbmsgPSBzdHlsZWQuYS5hdHRycyh7IGNsYXNzTmFtZTogJ0V4cGxvcmVyX19EcmF3aW5nUGFnZV9fWWVhckxpbmsnfSlgXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xuYFxuXG5jb25zdCBEcmF3aW5nSWQgPSBzdHlsZWQuc3Bhbi5hdHRycyh7IGNsYXNzTmFtZTogJ0V4cGxvcmVyX19EcmF3aW5nUGFnZV9fRHJhd2luZ0lkJ30pYGBcblxuY29uc3QgRGF0ZSA9IHN0eWxlZC5zcGFuLmF0dHJzKHsgY2xhc3NOYW1uZTogJ0V4cGxvcmVyX19EcmF3aW5nUGFnZV9fRGF0ZSd9KWBgXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DrawingPage.tsx\n");

/***/ })

})