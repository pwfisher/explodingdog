webpackHotUpdate_N_E("pages/drawing/[id]",{

/***/ "./components/DrawingPage.tsx":
/*!************************************!*\
  !*** ./components/DrawingPage.tsx ***!
  \************************************/
/*! exports provided: DrawingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DrawingPage\", function() { return DrawingPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_assetPrefix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/assetPrefix */ \"./lib/assetPrefix.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _lib_drawings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/drawings */ \"./lib/drawings.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/pfisher/Code/pwfisher/explodingdog/explorer/components/DrawingPage.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar DrawingPage = function DrawingPage(_ref) {\n  var drawing = _ref.drawing,\n      year = _ref.year;\n\n  var onKeyDown = function onKeyDown(event) {\n    var callback = {\n      \"ArrowLeft\": function ArrowLeft() {\n        return console.log('ArrowLeft');\n      },\n      \"ArrowRight\": function ArrowRight() {\n        return console.log('ArrowRight');\n      }\n    }[event.key];\n    callback === null || callback === void 0 ? void 0 : callback();\n  };\n\n  return __jsx(Container, {\n    onKeyDown: onKeyDown,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(Title, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, drawing.title), __jsx(ImageWrap, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, __jsx(Image, {\n    src: \"\".concat(_lib_assetPrefix__WEBPACK_IMPORTED_MODULE_2__[\"assetPrefix\"], \"/images/\").concat(drawing.image),\n    alt: drawing.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  })), __jsx(NavBar, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/drawing/[id]\",\n    as: \"/drawing/\".concat(Object(_lib_drawings__WEBPACK_IMPORTED_MODULE_4__[\"getPreviousSlug\"])(drawing.slug)),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, __jsx(Arrow, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }\n  }, \"<\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/year/[id]\",\n    as: \"/year/\".concat(year),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, __jsx(YearLink, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }, year)), __jsx(\"a\", {\n    href: \"http://explodingdog.com/title/\".concat(drawing.slug, \".html\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(DrawingId, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }, \"#\", drawing.id.split('.').slice(-1))), __jsx(Date, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, drawing.date), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/drawing/[id]\",\n    as: \"/drawing/\".concat(Object(_lib_drawings__WEBPACK_IMPORTED_MODULE_4__[\"getNextSlug\"])(drawing.slug)),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, __jsx(Arrow, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  }, \">\"))));\n};\n_c = DrawingPage;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].main.attrs({\n  className: 'Explorer__DrawingPage__Container'\n}).withConfig({\n  displayName: \"DrawingPage__Container\",\n  componentId: \"sc-1qbzvd7-0\"\n})([\"display:flex;flex-direction:column;justify-content:space-between;min-height:100vh;max-height:100vh;\"]);\n_c2 = Container;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h1.attrs({\n  className: 'Explorer__DrawingPage__Title'\n}).withConfig({\n  displayName: \"DrawingPage__Title\",\n  componentId: \"sc-1qbzvd7-1\"\n})([\"font-size:32px;font-weight:bold;padding:16px 24px;text-align:center;\"]);\n_c3 = Title;\nvar ImageWrap = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].figure.attrs({\n  className: 'Explorer__DrawingPage__ImageWrap'\n}).withConfig({\n  displayName: \"DrawingPage__ImageWrap\",\n  componentId: \"sc-1qbzvd7-2\"\n})([\"flex-grow:1;position:relative;\"]);\n_c4 = ImageWrap;\nvar Image = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].img.attrs({\n  className: 'Explorer__DrawingPage__Image'\n}).withConfig({\n  displayName: \"DrawingPage__Image\",\n  componentId: \"sc-1qbzvd7-3\"\n})([\"display:block;height:100%;object-fit:contain;position:absolute;width:100%;\"]);\n_c5 = Image;\nvar NavBar = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].nav.attrs({\n  className: 'Explorer__DrawingPage__Header'\n}).withConfig({\n  displayName: \"DrawingPage__NavBar\",\n  componentId: \"sc-1qbzvd7-4\"\n})([\"color:#BBB;display:flex;justify-content:space-between;font-size:14px;font-weight:bold;height:40px;line-height:40px;\"]);\n_c6 = NavBar;\nvar Arrow = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.attrs({\n  className: 'Explorer__DrawingPage__Arrow'\n}).withConfig({\n  displayName: \"DrawingPage__Arrow\",\n  componentId: \"sc-1qbzvd7-5\"\n})([\"color:black;cursor:pointer;font-size:24px;padding:0 32px;user-select:none;&:hover{background:#f8f8f8;}\"]);\n_c7 = Arrow;\nvar YearLink = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].a.attrs({\n  className: 'Explorer__DrawingPage__YearLink'\n}).withConfig({\n  displayName: \"DrawingPage__YearLink\",\n  componentId: \"sc-1qbzvd7-6\"\n})([\"cursor:pointer;color:black;\"]);\n_c8 = YearLink;\nvar DrawingId = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].span.attrs({\n  className: 'Explorer__DrawingPage__DrawingId'\n}).withConfig({\n  displayName: \"DrawingPage__DrawingId\",\n  componentId: \"sc-1qbzvd7-7\"\n})([\"\"]);\n_c9 = DrawingId;\nvar Date = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].span.attrs({\n  classNamne: 'Explorer__DrawingPage__Date'\n}).withConfig({\n  displayName: \"DrawingPage__Date\",\n  componentId: \"sc-1qbzvd7-8\"\n})([\"\"]);\n_c10 = Date;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;\n\n$RefreshReg$(_c, \"DrawingPage\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"Title\");\n$RefreshReg$(_c4, \"ImageWrap\");\n$RefreshReg$(_c5, \"Image\");\n$RefreshReg$(_c6, \"NavBar\");\n$RefreshReg$(_c7, \"Arrow\");\n$RefreshReg$(_c8, \"YearLink\");\n$RefreshReg$(_c9, \"DrawingId\");\n$RefreshReg$(_c10, \"Date\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS50c3g/MTljYyJdLCJuYW1lcyI6WyJEcmF3aW5nUGFnZSIsImRyYXdpbmciLCJ5ZWFyIiwib25LZXlEb3duIiwiZXZlbnQiLCJjYWxsYmFjayIsImNvbnNvbGUiLCJsb2ciLCJrZXkiLCJ0aXRsZSIsImFzc2V0UHJlZml4IiwiaW1hZ2UiLCJnZXRQcmV2aW91c1NsdWciLCJzbHVnIiwiaWQiLCJzcGxpdCIsInNsaWNlIiwiZGF0ZSIsImdldE5leHRTbHVnIiwiQ29udGFpbmVyIiwic3R5bGVkIiwibWFpbiIsImF0dHJzIiwiY2xhc3NOYW1lIiwiVGl0bGUiLCJoMSIsIkltYWdlV3JhcCIsImZpZ3VyZSIsIkltYWdlIiwiaW1nIiwiTmF2QmFyIiwibmF2IiwiQXJyb3ciLCJkaXYiLCJZZWFyTGluayIsImEiLCJEcmF3aW5nSWQiLCJzcGFuIiwiRGF0ZSIsImNsYXNzTmFtbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsV0FBeUQsR0FBRyxTQUE1REEsV0FBNEQsT0FBdUI7QUFBQSxNQUFwQkMsT0FBb0IsUUFBcEJBLE9BQW9CO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUM5RixNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQWdEO0FBQ2hFLFFBQU1DLFFBQVEsR0FBRztBQUNmLG1CQUFhO0FBQUEsZUFBTUMsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixDQUFOO0FBQUEsT0FERTtBQUVmLG9CQUFjO0FBQUEsZUFBTUQsT0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixDQUFOO0FBQUE7QUFGQyxNQUdmSCxLQUFLLENBQUNJLEdBSFMsQ0FBakI7QUFJQUgsWUFBUSxTQUFSLElBQUFBLFFBQVEsV0FBUixZQUFBQSxRQUFRO0FBQ1QsR0FORDs7QUFRQSxTQUNFLE1BQUMsU0FBRDtBQUFX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YixDQUFqQixDQUFIO0FBQUE7QUFBQTtBQUFBLDJIQUFaO01BQU1PLE07QUFVTixJQUFNRSxLQUFLLEdBQUdaLHlEQUFNLENBQUNhLEdBQVAsQ0FBV1gsS0FBWCxDQUFpQjtBQUFFQyxXQUFTLEVBQUU7QUFBYixDQUFqQixDQUFIO0FBQUE7QUFBQTtBQUFBLDhHQUFYO01BQU1TLEs7QUFZTixJQUFNRSxRQUFRLEdBQUdkLHlEQUFNLENBQUNlLENBQVAsQ0FBU2IsS0FBVCxDQUFlO0FBQUVDLFdBQVMsRUFBRTtBQUFiLENBQWYsQ0FBSDtBQUFBO0FBQUE7QUFBQSxtQ0FBZDtNQUFNVyxRO0FBS04sSUFBTUUsU0FBUyxHQUFHaEIseURBQU0sQ0FBQ2lCLElBQVAsQ0FBWWYsS0FBWixDQUFrQjtBQUFFQyxXQUFTLEVBQUU7QUFBYixDQUFsQixDQUFIO0FBQUE7QUFBQTtBQUFBLFFBQWY7TUFBTWEsUztBQUVOLElBQU1FLElBQUksR0FBR2xCLHlEQUFNLENBQUNpQixJQUFQLENBQVlmLEtBQVosQ0FBa0I7QUFBRWlCLFlBQVUsRUFBRTtBQUFkLENBQWxCLENBQUg7QUFBQTtBQUFBO0FBQUEsUUFBVjtPQUFNRCxJIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBEcmF3aW5nIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBhc3NldFByZWZpeCB9IGZyb20gJy4uL2xpYi9hc3NldFByZWZpeCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBnZXRQcmV2aW91c1NsdWcsIGdldE5leHRTbHVnIH0gZnJvbSAnLi4vbGliL2RyYXdpbmdzJ1xuXG5leHBvcnQgY29uc3QgRHJhd2luZ1BhZ2U6IFJlYWN0LkZDPHsgZHJhd2luZzogRHJhd2luZywgeWVhcjogbnVtYmVyIH0+ID0gKHsgZHJhd2luZywgeWVhciB9KSA9PiB7XG4gIGNvbnN0IG9uS2V5RG93biA9IChldmVudDogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCBjYWxsYmFjayA9IHtcbiAgICAgIFwiQXJyb3dMZWZ0XCI6ICgpID0+IGNvbnNvbGUubG9nKCdBcnJvd0xlZnQnKSxcbiAgICAgIFwiQXJyb3dSaWdodFwiOiAoKSA9PiBjb25zb2xlLmxvZygnQXJyb3dSaWdodCcpLFxuICAgIH1bZXZlbnQua2V5XVxuICAgIGNhbGxiYWNrPy4oKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIG9uS2V5RG93bj17b25LZXlEb3dufT5cbiAgICAgIDxUaXRsZT57ZHJhd2luZy50aXRsZX08L1RpdGxlPlxuICAgICAgPEltYWdlV3JhcD5cbiAgICAgICAgPEltYWdlIHNyYz17YCR7YXNzZXRQcmVmaXh9L2ltYWdlcy8ke2RyYXdpbmcuaW1hZ2V9YH0gYWx0PXtkcmF3aW5nLnRpdGxlfSAvPlxuICAgICAgPC9JbWFnZVdyYXA+XG4gICAgICA8TmF2QmFyPlxuICAgICAgICA8TGluayBocmVmPVwiL2RyYXdpbmcvW2lkXVwiIGFzPXtgL2RyYXdpbmcvJHtnZXRQcmV2aW91c1NsdWcoZHJhd2luZy5zbHVnKX1gfT5cbiAgICAgICAgICA8QXJyb3c+Jmx0OzwvQXJyb3c+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi95ZWFyL1tpZF1cIiBhcz17YC95ZWFyLyR7eWVhcn1gfT5cbiAgICAgICAgICA8WWVhckxpbms+e3llYXJ9PC9ZZWFyTGluaz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8YSBocmVmPXtgaHR0cDovL2V4cGxvZGluZ2RvZy5jb20vdGl0bGUvJHtkcmF3aW5nLnNsdWd9Lmh0bWxgfT5cbiAgICAgICAgICA8RHJhd2luZ0lkPiN7ZHJhd2luZy5pZC5zcGxpdCgnLicpLnNsaWNlKC0xKX08L0RyYXdpbmdJZD5cbiAgICAgICAgPC9hPlxuICAgICAgICA8RGF0ZT57ZHJhd2luZy5kYXRlfTwvRGF0ZT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9kcmF3aW5nL1tpZF1cIiBhcz17YC9kcmF3aW5nLyR7Z2V0TmV4dFNsdWcoZHJhd2luZy5zbHVnKX1gfT5cbiAgICAgICAgICA8QXJyb3c+Jmd0OzwvQXJyb3c+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvTmF2QmFyPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5tYWluLmF0dHJzKHsgY2xhc3NOYW1lOiAnRXhwbG9yZXJfX0RyYXdpbmdQYWdlX19Db250YWluZXInfSlgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xuYFxuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oMS5hdHRycyh7IGNsYXNzTmFtZTogJ0V4cGxvcmVyX19EcmF3aW5nUGFnZV9fVGl0bGUnfSlgXG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDE2cHggMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYFxuXG5jb25zdCBJbWFnZVdyYXAgPSBzdHlsZWQuZmlndXJlLmF0dHJzKHsgY2xhc3NOYW1lOiAnRXhwbG9yZXJfX0RyYXdpbmdQYWdlX19JbWFnZVdyYXAnfSlgXG4gIGZsZXgtZ3JvdzogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYFxuXG5jb25zdCBJbWFnZSA9IHN0eWxlZC5pbWcuYXR0cnMoeyBjbGFzc05hbWU6ICdFeHBsb3Jlcl9fRHJhd2luZ1BhZ2VfX0ltYWdlJ30pYFxuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuYFxuXG5jb25zdCBOYXZCYXIgPSBzdHlsZWQubmF2LmF0dHJzKHsgY2xhc3NOYW1lOiAnRXhwbG9yZXJfX0RyYXdpbmdQYWdlX19IZWFkZXInfSlgXG4gIGNvbG9yOiAjQkJCO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG5gXG5cbmNvbnN0IEFycm93ID0gc3R5bGVkLmRpdi5hdHRycyh7IGNsYXNzTmFtZTogJ0V4cGxvcmVyX19EcmF3aW5nUGFnZV9fQXJyb3cnfSlgXG4gIGNvbG9yOiBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDI0cHg7XG4gIHBhZGRpbmc6IDAgMzJweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgfVxuYFxuXG5jb25zdCBZZWFyTGluayA9IHN0eWxlZC5hLmF0dHJzKHsgY2xhc3NOYW1lOiAnRXhwbG9yZXJfX0RyYXdpbmdQYWdlX19ZZWFyTGluayd9KWBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogYmxhY2s7XG5gXG5cbmNvbnN0IERyYXdpbmdJZCA9IHN0eWxlZC5zcGFuLmF0dHJzKHsgY2xhc3NOYW1lOiAnRXhwbG9yZXJfX0RyYXdpbmdQYWdlX19EcmF3aW5nSWQnfSlgYFxuXG5jb25zdCBEYXRlID0gc3R5bGVkLnNwYW4uYXR0cnMoeyBjbGFzc05hbW5lOiAnRXhwbG9yZXJfX0RyYXdpbmdQYWdlX19EYXRlJ30pYGBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DrawingPage.tsx\n");

/***/ })

})