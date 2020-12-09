webpackHotUpdate_N_E("pages/drawing/[id]",{

/***/ "./components/DrawingPage.tsx":
/*!************************************!*\
  !*** ./components/DrawingPage.tsx ***!
  \************************************/
/*! exports provided: DrawingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DrawingPage\", function() { return DrawingPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_assetPrefix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/assetPrefix */ \"./lib/assetPrefix.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _lib_drawings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/drawings */ \"./lib/drawings.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/pfisher/Code/pwfisher/explodingdog/explorer/components/DrawingPage.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar DrawingPage = function DrawingPage(_ref) {\n  _s();\n\n  var drawing = _ref.drawing,\n      year = _ref.year;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var goToPrevious = function goToPrevious() {\n    return router.push(\"/drawing/\".concat(Object(_lib_drawings__WEBPACK_IMPORTED_MODULE_4__[\"getPreviousSlug\"])(drawing.slug)));\n  };\n\n  var goToNext = function goToNext() {\n    return router.push(\"/drawing/\".concat(Object(_lib_drawings__WEBPACK_IMPORTED_MODULE_4__[\"getNextSlug\"])(drawing.slug)));\n  };\n\n  var onKeyDown = function onKeyDown(event) {\n    var handler = {\n      ArrowUp: goToPrevious,\n      ArrowDown: goToNext,\n      ArrowLeft: goToPrevious,\n      ArrowRight: goToNext\n    }[event.key];\n    handler === null || handler === void 0 ? void 0 : handler();\n  };\n\n  return __jsx(Container, {\n    onKeyDown: onKeyDown,\n    tabIndex: -1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(Title, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, drawing.title), __jsx(ImageWrap, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, __jsx(Image, {\n    src: \"\".concat(_lib_assetPrefix__WEBPACK_IMPORTED_MODULE_2__[\"assetPrefix\"], \"/images/\").concat(drawing.image),\n    alt: drawing.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  })), __jsx(NavBar, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/drawing/[id]\",\n    as: \"/drawing/\".concat(Object(_lib_drawings__WEBPACK_IMPORTED_MODULE_4__[\"getPreviousSlug\"])(drawing.slug)),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, __jsx(Arrow, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }, \"<\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/year/[id]\",\n    as: \"/year/\".concat(year),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, __jsx(YearLink, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  }, year)), __jsx(\"a\", {\n    href: \"http://explodingdog.com/title/\".concat(drawing.slug, \".html\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, __jsx(DrawingId, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }, \"#\", drawing.id.split('.').slice(-1))), __jsx(Date, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, drawing.date), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/drawing/[id]\",\n    as: \"/drawing/\".concat(Object(_lib_drawings__WEBPACK_IMPORTED_MODULE_4__[\"getNextSlug\"])(drawing.slug)),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, __jsx(Arrow, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }, \">\"))));\n};\n\n_s(DrawingPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = DrawingPage;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].main.attrs({\n  className: 'Explorer__DrawingPage__Container'\n}).withConfig({\n  displayName: \"DrawingPage__Container\",\n  componentId: \"sc-1qbzvd7-0\"\n})([\"display:flex;flex-direction:column;justify-content:space-between;min-height:100vh;max-height:100vh;\"]);\n_c2 = Container;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h1.attrs({\n  className: 'Explorer__DrawingPage__Title'\n}).withConfig({\n  displayName: \"DrawingPage__Title\",\n  componentId: \"sc-1qbzvd7-1\"\n})([\"font-size:32px;font-weight:bold;padding:16px 24px;text-align:center;\"]);\n_c3 = Title;\nvar ImageWrap = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].figure.attrs({\n  className: 'Explorer__DrawingPage__ImageWrap'\n}).withConfig({\n  displayName: \"DrawingPage__ImageWrap\",\n  componentId: \"sc-1qbzvd7-2\"\n})([\"flex-grow:1;position:relative;\"]);\n_c4 = ImageWrap;\nvar Image = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].img.attrs({\n  className: 'Explorer__DrawingPage__Image'\n}).withConfig({\n  displayName: \"DrawingPage__Image\",\n  componentId: \"sc-1qbzvd7-3\"\n})([\"display:block;height:100%;object-fit:contain;position:absolute;width:100%;\"]);\n_c5 = Image;\nvar NavBar = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].nav.attrs({\n  className: 'Explorer__DrawingPage__Header'\n}).withConfig({\n  displayName: \"DrawingPage__NavBar\",\n  componentId: \"sc-1qbzvd7-4\"\n})([\"color:#BBB;display:flex;justify-content:space-between;font-size:14px;font-weight:bold;height:40px;line-height:40px;\"]);\n_c6 = NavBar;\nvar Arrow = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.attrs({\n  className: 'Explorer__DrawingPage__Arrow'\n}).withConfig({\n  displayName: \"DrawingPage__Arrow\",\n  componentId: \"sc-1qbzvd7-5\"\n})([\"color:black;cursor:pointer;font-size:24px;padding:0 32px;user-select:none;&:hover{background:#f8f8f8;}\"]);\n_c7 = Arrow;\nvar YearLink = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].a.attrs({\n  className: 'Explorer__DrawingPage__YearLink'\n}).withConfig({\n  displayName: \"DrawingPage__YearLink\",\n  componentId: \"sc-1qbzvd7-6\"\n})([\"cursor:pointer;color:black;\"]);\n_c8 = YearLink;\nvar DrawingId = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].span.attrs({\n  className: 'Explorer__DrawingPage__DrawingId'\n}).withConfig({\n  displayName: \"DrawingPage__DrawingId\",\n  componentId: \"sc-1qbzvd7-7\"\n})([\"\"]);\n_c9 = DrawingId;\nvar Date = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].span.attrs({\n  classNamne: 'Explorer__DrawingPage__Date'\n}).withConfig({\n  displayName: \"DrawingPage__Date\",\n  componentId: \"sc-1qbzvd7-8\"\n})([\"\"]);\n_c10 = Date;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;\n\n$RefreshReg$(_c, \"DrawingPage\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"Title\");\n$RefreshReg$(_c4, \"ImageWrap\");\n$RefreshReg$(_c5, \"Image\");\n$RefreshReg$(_c6, \"NavBar\");\n$RefreshReg$(_c7, \"Arrow\");\n$RefreshReg$(_c8, \"YearLink\");\n$RefreshReg$(_c9, \"DrawingId\");\n$RefreshReg$(_c10, \"Date\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS50c3g/MTljYyJdLCJuYW1lcyI6WyJEcmF3aW5nUGFnZSIsImRyYXdpbmciLCJ5ZWFyIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ29Ub1ByZXZpb3VzIiwicHVzaCIsImdldFByZXZpb3VzU2x1ZyIsInNsdWciLCJnb1RvTmV4dCIsImdldE5leHRTbHVnIiwib25LZXlEb3duIiwiZXZlbnQiLCJoYW5kbGVyIiwiQXJyb3dVcCIsIkFycm93RG93biIsIkFycm93TGVmdCIsIkFycm93UmlnaHQiLCJrZXkiLCJ0aXRsZSIsImFzc2V0UHJlZml4IiwiaW1hZ2UiLCJpZCIsInNwbGl0Iiwic2xpY2UiLCJkYXRlIiwiQ29udGFpbmVyIiwic3R5bGVkIiwibWFpbiIsImF0dHJzIiwiY2xhc3NOYW1lIiwiVGl0bGUiLCJoMSIsIkltYWdlV3JhcCIsImZpZ3VyZSIsIkltYWdlIiwiaW1nIiwiTmF2QmFyIiwibmF2IiwiQXJyb3ciLCJkaXYiLCJZZWFyTGluayIsImEiLCJEcmF3aW5nSWQiLCJzcGFuIiwiRGF0ZSIsImNsYXNzTmFtbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxXQUF5RCxHQUFHLFNBQTVEQSxXQUE0RCxPQUF1QjtBQUFBOztBQUFBLE1BQXBCQyxPQUFvQixRQUFwQkEsT0FBb0I7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDOUYsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFDQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLFdBQU1GLE1BQU0sQ0FBQ0csSUFBUCxvQkFBd0JDLHFFQUFlLENBQUNOLE9BQU8sQ0FBQ08sSUFBVCxDQUF2QyxFQUFOO0FBQUEsR0FBckI7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxXQUFNTixNQUFNLENBQUNH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LCJmaWxlIjoiLi9jb21wb25lbnRzL0RyYXdpbmdQYWdlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IERyYXdpbmcgfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IGFzc2V0UHJlZml4IH0gZnJvbSAnLi4vbGliL2Fzc2V0UHJlZml4J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IGdldFByZXZpb3VzU2x1ZywgZ2V0TmV4dFNsdWcgfSBmcm9tICcuLi9saWIvZHJhd2luZ3MnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuZXhwb3J0IGNvbnN0IERyYXdpbmdQYWdlOiBSZWFjdC5GQzx7IGRyYXdpbmc6IERyYXdpbmcsIHllYXI6IG51bWJlciB9PiA9ICh7IGRyYXdpbmcsIHllYXIgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBnb1RvUHJldmlvdXMgPSAoKSA9PiByb3V0ZXIucHVzaChgL2RyYXdpbmcvJHtnZXRQcmV2aW91c1NsdWcoZHJhd2luZy5zbHVnKX1gKVxuICBjb25zdCBnb1RvTmV4dCA9ICgpID0+IHJvdXRlci5wdXNoKGAvZHJhd2luZy8ke2dldE5leHRTbHVnKGRyYXdpbmcuc2x1Zyl9YClcblxuICBjb25zdCBvbktleURvd24gPSAoZXZlbnQ6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgaGFuZGxlcjogYW55ID0ge1xuICAgICAgQXJyb3dVcDogZ29Ub1ByZXZpb3VzLFxuICAgICAgQXJyb3dEb3duOiBnb1RvTmV4dCxcbiAgICAgIEFycm93TGVmdDogZ29Ub1ByZXZpb3VzLFxuICAgICAgQXJyb3dSaWdodDogZ29Ub05leHQsXG4gICAgfVtldmVudC5rZXldXG4gICAgaGFuZGxlcj8uKClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBvbktleURvd249e29uS2V5RG93bn0gdGFiSW5kZXg9ey0xfT5cbiAgICAgIDxUaXRsZT57ZHJhd2luZy50aXRsZX08L1RpdGxlPlxuICAgICAgPEltYWdlV3JhcD5cbiAgICAgICAgPEltYWdlIHNyYz17YCR7YXNzZXRQcmVmaXh9L2ltYWdlcy8ke2RyYXdpbmcuaW1hZ2V9YH0gYWx0PXtkcmF3aW5nLnRpdGxlfSAvPlxuICAgICAgPC9JbWFnZVdyYXA+XG4gICAgICA8TmF2QmFyPlxuICAgICAgICA8TGluayBocmVmPVwiL2RyYXdpbmcvW2lkXVwiIGFzPXtgL2RyYXdpbmcvJHtnZXRQcmV2aW91c1NsdWcoZHJhd2luZy5zbHVnKX1gfT5cbiAgICAgICAgICA8QXJyb3c+Jmx0OzwvQXJyb3c+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi95ZWFyL1tpZF1cIiBhcz17YC95ZWFyLyR7eWVhcn1gfT5cbiAgICAgICAgICA8WWVhckxpbms+e3llYXJ9PC9ZZWFyTGluaz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8YSBocmVmPXtgaHR0cDovL2V4cGxvZGluZ2RvZy5jb20vdGl0bGUvJHtkcmF3aW5nLnNsdWd9Lmh0bWxgfT5cbiAgICAgICAgICA8RHJhd2luZ0lkPiN7ZHJhd2luZy5pZC5zcGxpdCgnLicpLnNsaWNlKC0xKX08L0RyYXdpbmdJZD5cbiAgICAgICAgPC9hPlxuICAgICAgICA8RGF0ZT57ZHJhd2luZy5kYXRlfTwvRGF0ZT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9kcmF3aW5nL1tpZF1cIiBhcz17YC9kcmF3aW5nLyR7Z2V0TmV4dFNsdWcoZHJhd2luZy5zbHVnKX1gfT5cbiAgICAgICAgICA8QXJyb3c+Jmd0OzwvQXJyb3c+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvTmF2QmFyPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5tYWluLmF0dHJzKHsgY2xhc3NOYW1lOiAnRXhwbG9yZXJfX0RyYXdpbmdQYWdlX19Db250YWluZXInfSlgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xuYFxuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oMS5hdHRycyh7IGNsYXNzTmFtZTogJ0V4cGxvcmVyX19EcmF3aW5nUGFnZV9fVGl0bGUnfSlgXG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDE2cHggMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYFxuXG5jb25zdCBJbWFnZVdyYXAgPSBzdHlsZWQuZmlndXJlLmF0dHJzKHsgY2xhc3NOYW1lOiAnRXhwbG9yZXJfX0RyYXdpbmdQYWdlX19JbWFnZVdyYXAnfSlgXG4gIGZsZXgtZ3JvdzogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYFxuXG5jb25zdCBJbWFnZSA9IHN0eWxlZC5pbWcuYXR0cnMoeyBjbGFzc05hbWU6ICdFeHBsb3Jlcl9fRHJhd2luZ1BhZ2VfX0ltYWdlJ30pYFxuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuYFxuXG5jb25zdCBOYXZCYXIgPSBzdHlsZWQubmF2LmF0dHJzKHsgY2xhc3NOYW1lOiAnRXhwbG9yZXJfX0RyYXdpbmdQYWdlX19IZWFkZXInfSlgXG4gIGNvbG9yOiAjQkJCO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG5gXG5cbmNvbnN0IEFycm93ID0gc3R5bGVkLmRpdi5hdHRycyh7IGNsYXNzTmFtZTogJ0V4cGxvcmVyX19EcmF3aW5nUGFnZV9fQXJyb3cnfSlgXG4gIGNvbG9yOiBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDI0cHg7XG4gIHBhZGRpbmc6IDAgMzJweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgfVxuYFxuXG5jb25zdCBZZWFyTGluayA9IHN0eWxlZC5hLmF0dHJzKHsgY2xhc3NOYW1lOiAnRXhwbG9yZXJfX0RyYXdpbmdQYWdlX19ZZWFyTGluayd9KWBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogYmxhY2s7XG5gXG5cbmNvbnN0IERyYXdpbmdJZCA9IHN0eWxlZC5zcGFuLmF0dHJzKHsgY2xhc3NOYW1lOiAnRXhwbG9yZXJfX0RyYXdpbmdQYWdlX19EcmF3aW5nSWQnfSlgYFxuXG5jb25zdCBEYXRlID0gc3R5bGVkLnNwYW4uYXR0cnMoeyBjbGFzc05hbW5lOiAnRXhwbG9yZXJfX0RyYXdpbmdQYWdlX19EYXRlJ30pYGBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DrawingPage.tsx\n");

/***/ })

})