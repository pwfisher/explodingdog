webpackHotUpdate_N_E("pages/drawing/[id]",{

/***/ "./components/DrawingPage/DrawingPage.tsx":
/*!************************************************!*\
  !*** ./components/DrawingPage/DrawingPage.tsx ***!
  \************************************************/
/*! exports provided: DrawingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DrawingPage\", function() { return DrawingPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_assetPrefix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/assetPrefix */ \"./lib/assetPrefix.ts\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./components/DrawingPage/styles.tsx\");\n/* harmony import */ var _lib_drawings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/drawings */ \"./lib/drawings.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_div_100vh__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-div-100vh */ \"./node_modules/react-div-100vh/dist/esm/index.js\");\n/* harmony import */ var _PageLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../PageLayout */ \"./components/PageLayout.tsx\");\n/* harmony import */ var _ActionsMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ActionsMenu */ \"./components/DrawingPage/ActionsMenu.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/pfisher/Code/pwfisher/explodingdog/explorer/components/DrawingPage/DrawingPage.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar DrawingPage = function DrawingPage(_ref) {\n  _s();\n\n  var drawing = _ref.drawing,\n      year = _ref.year;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var goToPrevious = function goToPrevious() {\n    return router.push(\"/drawing/\".concat(Object(_lib_drawings__WEBPACK_IMPORTED_MODULE_4__[\"getPreviousSlug\"])(drawing.slug)));\n  };\n\n  var goToNext = function goToNext() {\n    return router.push(\"/drawing/\".concat(Object(_lib_drawings__WEBPACK_IMPORTED_MODULE_4__[\"getNextSlug\"])(drawing.slug)));\n  };\n\n  var onKeyDown = function onKeyDown(event) {\n    var handler = {\n      ArrowUp: goToPrevious,\n      ArrowDown: goToNext,\n      ArrowLeft: goToPrevious,\n      ArrowRight: goToNext\n    }[event.key];\n    handler === null || handler === void 0 ? void 0 : handler();\n  };\n\n  return __jsx(_PageLayout__WEBPACK_IMPORTED_MODULE_7__[\"PageLayout\"], {\n    title: \"\".concat(drawing.title),\n    showHeader: false,\n    showFooter: false,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 5\n    }\n  }, __jsx(react_div_100vh__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n    onKeyDown: onKeyDown,\n    tabIndex: -1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }, drawing.title), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"ImageWrap\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Image\"], {\n    src: \"\".concat(_lib_assetPrefix__WEBPACK_IMPORTED_MODULE_2__[\"assetPrefix\"], \"/images/\").concat(drawing.image),\n    alt: drawing.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"NavBar\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/drawing/[id]\",\n    as: \"/drawing/\".concat(Object(_lib_drawings__WEBPACK_IMPORTED_MODULE_4__[\"getPreviousSlug\"])(drawing.slug)),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"ArrowButton\"], {\n    title: \"Previous\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 15\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"LeftArrow\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 45\n    }\n  }))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"DrawingLink\"], {\n    title: \"Source\",\n    href: \"http://explodingdog.com/title/\".concat(drawing.slug, \".html\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  }, __jsx(\"b\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 15\n    }\n  }, \"#\", drawing.number)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/year/[id]\",\n    as: \"/year/\".concat(year),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"YearLink\"], {\n    title: \"Drawings for \".concat(drawing.year),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 15\n    }\n  }, __jsx(\"b\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 64\n    }\n  }, year))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/day/[id]\",\n    as: \"/day/\".concat(drawing.date),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"DateLink\"], {\n    title: \"Drawings for \".concat(drawing.date),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 15\n    }\n  }, __jsx(\"b\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 64\n    }\n  }, drawing.date.slice(5)))), __jsx(_ActionsMenu__WEBPACK_IMPORTED_MODULE_8__[\"ActionsMenu\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }\n  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/drawing/[id]\",\n    as: \"/drawing/\".concat(Object(_lib_drawings__WEBPACK_IMPORTED_MODULE_4__[\"getNextSlug\"])(drawing.slug)),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"ArrowButton\"], {\n    title: \"Next\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 15\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"RightArrow\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 41\n    }\n  })))))));\n};\n\n_s(DrawingPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = DrawingPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"DrawingPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS9EcmF3aW5nUGFnZS50c3g/OGQ2MCJdLCJuYW1lcyI6WyJEcmF3aW5nUGFnZSIsImRyYXdpbmciLCJ5ZWFyIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ29Ub1ByZXZpb3VzIiwicHVzaCIsImdldFByZXZpb3VzU2x1ZyIsInNsdWciLCJnb1RvTmV4dCIsImdldE5leHRTbHVnIiwib25LZXlEb3duIiwiZXZlbnQiLCJoYW5kbGVyIiwiQXJyb3dVcCIsIkFycm93RG93biIsIkFycm93TGVmdCIsIkFycm93UmlnaHQiLCJrZXkiLCJ0aXRsZSIsImFzc2V0UHJlZml4IiwiaW1hZ2UiLCJudW1iZXIiLCJkYXRlIiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxXQUF5RCxHQUFHLFNBQTVEQSxXQUE0RCxPQUF1QjtBQUFBOztBQUFBLE1BQXBCQyxPQUFvQixRQUFwQkEsT0FBb0I7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDOUYsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFDQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLFdBQU1GLE1BQU0sQ0FBQ0csSUFBUCxvQkFBd0JDLHFFQUFlLENBQUNOLE9BQU8sQ0FBQ08sSUFBVCxDQUF2QyxFQUFOO0FBQUEsR0FBckI7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxXQUFNTixNQUFNLENBQUNHLElBQVAsb0JBQXdCSSxpRUFBVyxDQUFDVCxPQUFPLENBQUNPLElBQVQsQ0FBbkMsRUFBTjtBQUFBLEdBQWpCOztBQUVBLE1BQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBZ0Q7QUFDaEUsUUFBTUMsT0FBTyxHQUFJO0FBQ2ZDLGFBQU8sRUFBRVQs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QWpELENBREYsQ0FWRixFQWFFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJGLEVBY0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxlQUFYO0FBQTJCLE1BQUUscUJBQWNkLGlFQUFXLENBQUNULE9BQU8sQ0FBQ08sSUFBVCxDQUF6QixDQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUFhLFNBQUssRUFBQyxNQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTBCLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUExQixDQURGLENBZEYsQ0FMRixDQURGLENBREYsQ0FERjtBQThCRCxDQTdDTTs7R0FBTVIsVztVQUNJSSxxRDs7O0tBREpKLFciLCJmaWxlIjoiLi9jb21wb25lbnRzL0RyYXdpbmdQYWdlL0RyYXdpbmdQYWdlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IERyYXdpbmcgfSBmcm9tICcuLi8uLi90eXBlcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IGFzc2V0UHJlZml4IH0gZnJvbSAnLi4vLi4vbGliL2Fzc2V0UHJlZml4J1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBUaXRsZSxcbiAgSW1hZ2VXcmFwLFxuICBJbWFnZSxcbiAgTmF2QmFyLFxuICBBcnJvd0J1dHRvbixcbiAgTGVmdEFycm93LFxuICBSaWdodEFycm93LFxuICBEcmF3aW5nTGluayxcbiAgWWVhckxpbmssXG4gIERhdGVMaW5rLFxufSBmcm9tICcuL3N0eWxlcydcbmltcG9ydCB7IGdldFByZXZpb3VzU2x1ZywgZ2V0TmV4dFNsdWcgfSBmcm9tICcuLi8uLi9saWIvZHJhd2luZ3MnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBEaXYxMDB2aCBmcm9tICdyZWFjdC1kaXYtMTAwdmgnXG5pbXBvcnQgeyBQYWdlTGF5b3V0IH0gZnJvbSAnLi4vUGFnZUxheW91dCdcbmltcG9ydCB7IEFjdGlvbnNNZW51IH0gZnJvbSAnLi9BY3Rpb25zTWVudSdcblxuZXhwb3J0IGNvbnN0IERyYXdpbmdQYWdlOiBSZWFjdC5GQzx7IGRyYXdpbmc6IERyYXdpbmcsIHllYXI6IG51bWJlciB9PiA9ICh7IGRyYXdpbmcsIHllYXIgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBnb1RvUHJldmlvdXMgPSAoKSA9PiByb3V0ZXIucHVzaChgL2RyYXdpbmcvJHtnZXRQcmV2aW91c1NsdWcoZHJhd2luZy5zbHVnKX1gKVxuICBjb25zdCBnb1RvTmV4dCA9ICgpID0+IHJvdXRlci5wdXNoKGAvZHJhd2luZy8ke2dldE5leHRTbHVnKGRyYXdpbmcuc2x1Zyl9YClcblxuICBjb25zdCBvbktleURvd24gPSAoZXZlbnQ6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgaGFuZGxlciA9ICh7XG4gICAgICBBcnJvd1VwOiBnb1RvUHJldmlvdXMsXG4gICAgICBBcnJvd0Rvd246IGdvVG9OZXh0LFxuICAgICAgQXJyb3dMZWZ0OiBnb1RvUHJldmlvdXMsXG4gICAgICBBcnJvd1JpZ2h0OiBnb1RvTmV4dCxcbiAgICB9IGFzIFJlY29yZDxzdHJpbmcsIEZ1bmN0aW9uPilbZXZlbnQua2V5XVxuICAgIGhhbmRsZXI/LigpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxQYWdlTGF5b3V0IHRpdGxlPXtgJHtkcmF3aW5nLnRpdGxlfWB9IHNob3dIZWFkZXI9e2ZhbHNlfSBzaG93Rm9vdGVyPXtmYWxzZX0+XG4gICAgICA8RGl2MTAwdmg+XG4gICAgICAgIDxDb250YWluZXIgb25LZXlEb3duPXtvbktleURvd259IHRhYkluZGV4PXstMX0+XG4gICAgICAgICAgPFRpdGxlPntkcmF3aW5nLnRpdGxlfTwvVGl0bGU+XG4gICAgICAgICAgPEltYWdlV3JhcD5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2Ake2Fzc2V0UHJlZml4fS9pbWFnZXMvJHtkcmF3aW5nLmltYWdlfWB9IGFsdD17ZHJhd2luZy50aXRsZX0gLz5cbiAgICAgICAgICA8L0ltYWdlV3JhcD5cbiAgICAgICAgICA8TmF2QmFyPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kcmF3aW5nL1tpZF1cIiBhcz17YC9kcmF3aW5nLyR7Z2V0UHJldmlvdXNTbHVnKGRyYXdpbmcuc2x1Zyl9YH0+XG4gICAgICAgICAgICAgIDxBcnJvd0J1dHRvbiB0aXRsZT0nUHJldmlvdXMnPjxMZWZ0QXJyb3cgLz48L0Fycm93QnV0dG9uPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPERyYXdpbmdMaW5rIHRpdGxlPSdTb3VyY2UnIGhyZWY9e2BodHRwOi8vZXhwbG9kaW5nZG9nLmNvbS90aXRsZS8ke2RyYXdpbmcuc2x1Z30uaHRtbGB9PlxuICAgICAgICAgICAgICA8Yj4je2RyYXdpbmcubnVtYmVyfTwvYj5cbiAgICAgICAgICAgIDwvRHJhd2luZ0xpbms+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3llYXIvW2lkXVwiIGFzPXtgL3llYXIvJHt5ZWFyfWB9PlxuICAgICAgICAgICAgICA8WWVhckxpbmsgdGl0bGU9e2BEcmF3aW5ncyBmb3IgJHtkcmF3aW5nLnllYXJ9YH0+PGI+e3llYXJ9PC9iPjwvWWVhckxpbms+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2RheS9baWRdXCIgYXM9e2AvZGF5LyR7ZHJhd2luZy5kYXRlfWB9PlxuICAgICAgICAgICAgICA8RGF0ZUxpbmsgdGl0bGU9e2BEcmF3aW5ncyBmb3IgJHtkcmF3aW5nLmRhdGV9YH0+PGI+e2RyYXdpbmcuZGF0ZS5zbGljZSg1KX08L2I+PC9EYXRlTGluaz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxBY3Rpb25zTWVudSAvPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kcmF3aW5nL1tpZF1cIiBhcz17YC9kcmF3aW5nLyR7Z2V0TmV4dFNsdWcoZHJhd2luZy5zbHVnKX1gfT5cbiAgICAgICAgICAgICAgPEFycm93QnV0dG9uIHRpdGxlPSdOZXh0Jz48UmlnaHRBcnJvdyAvPjwvQXJyb3dCdXR0b24+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9OYXZCYXI+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9EaXYxMDB2aD5cbiAgICA8L1BhZ2VMYXlvdXQ+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DrawingPage/DrawingPage.tsx\n");

/***/ })

})