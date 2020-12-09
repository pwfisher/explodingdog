webpackHotUpdate_N_E("pages/drawing/[id]",{

/***/ "./components/DrawingPage.tsx":
/*!************************************!*\
  !*** ./components/DrawingPage.tsx ***!
  \************************************/
/*! exports provided: DrawingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DrawingPage\", function() { return DrawingPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_assetPrefix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/assetPrefix */ \"./lib/assetPrefix.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _lib_drawings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/drawings */ \"./lib/drawings.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/pfisher/Code/pwfisher/explodingdog/explorer/components/DrawingPage.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar DrawingPage = function DrawingPage(_ref) {\n  _s();\n\n  var drawing = _ref.drawing,\n      year = _ref.year;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var goToPrevious = function goToPrevious() {\n    return router.push(\"/drawing/\".concat(Object(_lib_drawings__WEBPACK_IMPORTED_MODULE_4__[\"getPreviousSlug\"])(drawing.slug)));\n  };\n\n  var goToNext = function goToNext() {\n    return router.push(\"/drawing/\".concat(Object(_lib_drawings__WEBPACK_IMPORTED_MODULE_4__[\"getNextSlug\"])(drawing.slug)));\n  };\n\n  var onKeyDown = function onKeyDown(event) {\n    var handler = {\n      ArrowUp: goToPrevious,\n      ArrowDown: goToNext,\n      ArrowLeft: goToPrevious,\n      ArrowRight: goToNext\n    }[event.key];\n    handler === null || handler === void 0 ? void 0 : handler();\n  };\n\n  return __jsx(Container, {\n    onKeyDown: onKeyDown,\n    tabIndex: -1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(Title, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, drawing.title), __jsx(ImageWrap, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, __jsx(Image, {\n    src: \"\".concat(_lib_assetPrefix__WEBPACK_IMPORTED_MODULE_2__[\"assetPrefix\"], \"/images/\").concat(drawing.image),\n    alt: drawing.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  })), __jsx(NavBar, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/drawing/[id]\",\n    as: \"/drawing/\".concat(Object(_lib_drawings__WEBPACK_IMPORTED_MODULE_4__[\"getPreviousSlug\"])(drawing.slug)),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, __jsx(Arrow, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }, \"<\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/year/[id]\",\n    as: \"/year/\".concat(year),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, __jsx(YearLink, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  }, year)), __jsx(\"a\", {\n    href: \"http://explodingdog.com/title/\".concat(drawing.slug, \".html\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, __jsx(DrawingId, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }, \"#\", drawing.id.split('.').slice(-1))), __jsx(Date, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, drawing.date), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/drawing/[id]\",\n    as: \"/drawing/\".concat(Object(_lib_drawings__WEBPACK_IMPORTED_MODULE_4__[\"getNextSlug\"])(drawing.slug)),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, __jsx(Arrow, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }, \">\"))));\n};\n\n_s(DrawingPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = DrawingPage;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].main.attrs({\n  className: 'Explorer__DrawingPage__Container'\n}).withConfig({\n  displayName: \"DrawingPage__Container\",\n  componentId: \"sc-1qbzvd7-0\"\n})([\"display:flex;flex-direction:column;justify-content:space-between;min-height:100vh;max-height:100vh;\"]);\n_c2 = Container;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h1.attrs({\n  className: 'Explorer__DrawingPage__Title'\n}).withConfig({\n  displayName: \"DrawingPage__Title\",\n  componentId: \"sc-1qbzvd7-1\"\n})([\"font-size:32px;font-weight:bold;padding:16px 24px;text-align:center;\"]);\n_c3 = Title;\nvar ImageWrap = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].figure.attrs({\n  className: 'Explorer__DrawingPage__ImageWrap'\n}).withConfig({\n  displayName: \"DrawingPage__ImageWrap\",\n  componentId: \"sc-1qbzvd7-2\"\n})([\"flex-grow:1;position:relative;\"]);\n_c4 = ImageWrap;\nvar Image = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].img.attrs({\n  className: 'Explorer__DrawingPage__Image'\n}).withConfig({\n  displayName: \"DrawingPage__Image\",\n  componentId: \"sc-1qbzvd7-3\"\n})([\"display:block;height:100%;object-fit:contain;position:absolute;width:100%;\"]);\n_c5 = Image;\nvar NavBar = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].nav.attrs({\n  className: 'Explorer__DrawingPage__Header'\n}).withConfig({\n  displayName: \"DrawingPage__NavBar\",\n  componentId: \"sc-1qbzvd7-4\"\n})([\"color:#BBB;display:flex;justify-content:space-between;font-size:14px;font-weight:bold;height:40px;line-height:40px;\"]);\n_c6 = NavBar;\nvar Arrow = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.attrs({\n  className: 'Explorer__DrawingPage__Arrow'\n}).withConfig({\n  displayName: \"DrawingPage__Arrow\",\n  componentId: \"sc-1qbzvd7-5\"\n})([\"color:black;cursor:pointer;font-size:24px;padding:0 32px;user-select:none;&:hover{background:#f8f8f8;}\"]);\n_c7 = Arrow;\nvar YearLink = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].a.attrs({\n  className: 'Explorer__DrawingPage__YearLink'\n}).withConfig({\n  displayName: \"DrawingPage__YearLink\",\n  componentId: \"sc-1qbzvd7-6\"\n})([\"cursor:pointer;color:black;\"]);\n_c8 = YearLink;\nvar DrawingId = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].span.attrs({\n  className: 'Explorer__DrawingPage__DrawingId'\n}).withConfig({\n  displayName: \"DrawingPage__DrawingId\",\n  componentId: \"sc-1qbzvd7-7\"\n})([\"\"]);\n_c9 = DrawingId;\nvar Date = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].span.attrs({\n  classNamne: 'Explorer__DrawingPage__Date'\n}).withConfig({\n  displayName: \"DrawingPage__Date\",\n  componentId: \"sc-1qbzvd7-8\"\n})([\"\"]);\n_c10 = Date;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;\n\n$RefreshReg$(_c, \"DrawingPage\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"Title\");\n$RefreshReg$(_c4, \"ImageWrap\");\n$RefreshReg$(_c5, \"Image\");\n$RefreshReg$(_c6, \"NavBar\");\n$RefreshReg$(_c7, \"Arrow\");\n$RefreshReg$(_c8, \"YearLink\");\n$RefreshReg$(_c9, \"DrawingId\");\n$RefreshReg$(_c10, \"Date\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS50c3g/MTljYyJdLCJuYW1lcyI6WyJEcmF3aW5nUGFnZSIsImRyYXdpbmciLCJ5ZWFyIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ29Ub1ByZXZpb3VzIiwicHVzaCIsImdldFByZXZpb3VzU2x1ZyIsInNsdWciLCJnb1RvTmV4dCIsImdldE5leHRTbHVnIiwib25LZXlEb3duIiwiZXZlbnQiLCJoYW5kbGVyIiwiQXJyb3dVcCIsIkFycm93RG93biIsIkFycm93TGVmdCIsIkFycm93UmlnaHQiLCJrZXkiLCJ0aXRsZSIsImFzc2V0UHJlZml4IiwiaW1hZ2UiLCJpZCIsInNwbGl0Iiwic2xpY2UiLCJkYXRlIiwiQ29udGFpbmVyIiwic3R5bGVkIiwibWFpbiIsImF0dHJzIiwiY2xhc3NOYW1lIiwiVGl0bGUiLCJoMSIsIkltYWdlV3JhcCIsImZpZ3VyZSIsIkltYWdlIiwiaW1nIiwiTmF2QmFyIiwibmF2IiwiQXJyb3ciLCJkaXYiLCJZZWFyTGluayIsImEiLCJEcmF3aW5nSWQiLCJzcGFuIiwiRGF0ZSIsImNsYXNzTmFtbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxXQUF5RCxHQUFHLFNBQTVEQSxXQUE0RCxPQUF1QjtBQUFBOztBQUFBLE1BQXBCQyxPQUFvQixRQUFwQkEsT0FBb0I7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDOUYsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFDQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLFdBQU1GLE1BQU0sQ0FBQ0csSUFBUCxvQkFBd0JDLHFFQUFlLENBQUNOLE9BQU8sQ0FBQ08sSUFBVCxDQUF2QyxFQUFOO0FBQUEsR0FBckI7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxXQUFNTixNQUFNLENBQUNH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ZSI6Ii4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBEcmF3aW5nIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBhc3NldFByZWZpeCB9IGZyb20gJy4uL2xpYi9hc3NldFByZWZpeCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBnZXRQcmV2aW91c1NsdWcsIGdldE5leHRTbHVnIH0gZnJvbSAnLi4vbGliL2RyYXdpbmdzJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmV4cG9ydCBjb25zdCBEcmF3aW5nUGFnZTogUmVhY3QuRkM8eyBkcmF3aW5nOiBEcmF3aW5nLCB5ZWFyOiBudW1iZXIgfT4gPSAoeyBkcmF3aW5nLCB5ZWFyIH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgZ29Ub1ByZXZpb3VzID0gKCkgPT4gcm91dGVyLnB1c2goYC9kcmF3aW5nLyR7Z2V0UHJldmlvdXNTbHVnKGRyYXdpbmcuc2x1Zyl9YClcbiAgY29uc3QgZ29Ub05leHQgPSAoKSA9PiByb3V0ZXIucHVzaChgL2RyYXdpbmcvJHtnZXROZXh0U2x1ZyhkcmF3aW5nLnNsdWcpfWApXG5cbiAgY29uc3Qgb25LZXlEb3duID0gKGV2ZW50OiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IGhhbmRsZXIgPSB7XG4gICAgICBBcnJvd1VwOiBnb1RvUHJldmlvdXMsXG4gICAgICBBcnJvd0Rvd246IGdvVG9OZXh0LFxuICAgICAgQXJyb3dMZWZ0OiBnb1RvUHJldmlvdXMsXG4gICAgICBBcnJvd1JpZ2h0OiBnb1RvTmV4dCxcbiAgICB9W2V2ZW50LmtleV1cbiAgICBoYW5kbGVyPy4oKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIG9uS2V5RG93bj17b25LZXlEb3dufSB0YWJJbmRleD17LTF9PlxuICAgICAgPFRpdGxlPntkcmF3aW5nLnRpdGxlfTwvVGl0bGU+XG4gICAgICA8SW1hZ2VXcmFwPlxuICAgICAgICA8SW1hZ2Ugc3JjPXtgJHthc3NldFByZWZpeH0vaW1hZ2VzLyR7ZHJhd2luZy5pbWFnZX1gfSBhbHQ9e2RyYXdpbmcudGl0bGV9IC8+XG4gICAgICA8L0ltYWdlV3JhcD5cbiAgICAgIDxOYXZCYXI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvZHJhd2luZy9baWRdXCIgYXM9e2AvZHJhd2luZy8ke2dldFByZXZpb3VzU2x1ZyhkcmF3aW5nLnNsdWcpfWB9PlxuICAgICAgICAgIDxBcnJvdz4mbHQ7PC9BcnJvdz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL3llYXIvW2lkXVwiIGFzPXtgL3llYXIvJHt5ZWFyfWB9PlxuICAgICAgICAgIDxZZWFyTGluaz57eWVhcn08L1llYXJMaW5rPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxhIGhyZWY9e2BodHRwOi8vZXhwbG9kaW5nZG9nLmNvbS90aXRsZS8ke2RyYXdpbmcuc2x1Z30uaHRtbGB9PlxuICAgICAgICAgIDxEcmF3aW5nSWQ+I3tkcmF3aW5nLmlkLnNwbGl0KCcuJykuc2xpY2UoLTEpfTwvRHJhd2luZ0lkPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxEYXRlPntkcmF3aW5nLmRhdGV9PC9EYXRlPlxuICAgICAgICA8TGluayBocmVmPVwiL2RyYXdpbmcvW2lkXVwiIGFzPXtgL2RyYXdpbmcvJHtnZXROZXh0U2x1ZyhkcmF3aW5nLnNsdWcpfWB9PlxuICAgICAgICAgIDxBcnJvdz4mZ3Q7PC9BcnJvdz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9OYXZCYXI+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLm1haW4uYXR0cnMoeyBjbGFzc05hbWU6ICdFeHBsb3Jlcl9fRHJhd2luZ1BhZ2VfX0NvbnRhaW5lcid9KWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG5gXG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxLmF0dHJzKHsgY2xhc3NOYW1lOiAnRXhwbG9yZXJfX0RyYXdpbmdQYWdlX19UaXRsZSd9KWBcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTZweCAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gXG5cbmNvbnN0IEltYWdlV3JhcCA9IHN0eWxlZC5maWd1cmUuYXR0cnMoeyBjbGFzc05hbWU6ICdFeHBsb3Jlcl9fRHJhd2luZ1BhZ2VfX0ltYWdlV3JhcCd9KWBcbiAgZmxleC1ncm93OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gXG5cbmNvbnN0IEltYWdlID0gc3R5bGVkLmltZy5hdHRycyh7IGNsYXNzTmFtZTogJ0V4cGxvcmVyX19EcmF3aW5nUGFnZV9fSW1hZ2UnfSlgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG5gXG5cbmNvbnN0IE5hdkJhciA9IHN0eWxlZC5uYXYuYXR0cnMoeyBjbGFzc05hbWU6ICdFeHBsb3Jlcl9fRHJhd2luZ1BhZ2VfX0hlYWRlcid9KWBcbiAgY29sb3I6ICNCQkI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbmBcblxuY29uc3QgQXJyb3cgPSBzdHlsZWQuZGl2LmF0dHJzKHsgY2xhc3NOYW1lOiAnRXhwbG9yZXJfX0RyYXdpbmdQYWdlX19BcnJvdyd9KWBcbiAgY29sb3I6IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcGFkZGluZzogMCAzMnB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICB9XG5gXG5cbmNvbnN0IFllYXJMaW5rID0gc3R5bGVkLmEuYXR0cnMoeyBjbGFzc05hbWU6ICdFeHBsb3Jlcl9fRHJhd2luZ1BhZ2VfX1llYXJMaW5rJ30pYFxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbmBcblxuY29uc3QgRHJhd2luZ0lkID0gc3R5bGVkLnNwYW4uYXR0cnMoeyBjbGFzc05hbWU6ICdFeHBsb3Jlcl9fRHJhd2luZ1BhZ2VfX0RyYXdpbmdJZCd9KWBgXG5cbmNvbnN0IERhdGUgPSBzdHlsZWQuc3Bhbi5hdHRycyh7IGNsYXNzTmFtbmU6ICdFeHBsb3Jlcl9fRHJhd2luZ1BhZ2VfX0RhdGUnfSlgYFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DrawingPage.tsx\n");

/***/ })

})