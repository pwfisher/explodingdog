webpackHotUpdate_N_E("pages/drawing/[id]",{

/***/ "./components/DrawingPage/DrawingPage.tsx":
/*!************************************************!*\
  !*** ./components/DrawingPage/DrawingPage.tsx ***!
  \************************************************/
/*! exports provided: DrawingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DrawingPage\", function() { return DrawingPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_assetPrefix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/assetPrefix */ \"./lib/assetPrefix.ts\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./components/DrawingPage/styles.tsx\");\n/* harmony import */ var _lib_drawings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/drawings */ \"./lib/drawings.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_div_100vh__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-div-100vh */ \"./node_modules/react-div-100vh/dist/esm/index.js\");\n/* harmony import */ var _PageLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../PageLayout */ \"./components/PageLayout.tsx\");\n/* harmony import */ var _ActionsMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ActionsMenu */ \"./components/DrawingPage/ActionsMenu.tsx\");\n/* harmony import */ var _lib_hashtags__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/hashtags */ \"./lib/hashtags.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/pfisher/Code/pwfisher/explodingdog/explorer/components/DrawingPage/DrawingPage.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nvar DrawingPage = function DrawingPage(_ref) {\n  _s();\n\n  var drawing = _ref.drawing,\n      year = _ref.year;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var goToPrevious = function goToPrevious() {\n    return router.push(\"/drawing/\".concat(Object(_lib_drawings__WEBPACK_IMPORTED_MODULE_4__[\"getPreviousSlug\"])(drawing.slug)));\n  };\n\n  var goToNext = function goToNext() {\n    return router.push(\"/drawing/\".concat(Object(_lib_drawings__WEBPACK_IMPORTED_MODULE_4__[\"getNextSlug\"])(drawing.slug)));\n  };\n\n  var onKeyDown = function onKeyDown(event) {\n    var handler = {\n      ArrowUp: goToPrevious,\n      ArrowDown: goToNext,\n      ArrowLeft: goToPrevious,\n      ArrowRight: goToNext\n    }[event.key];\n    handler === null || handler === void 0 ? void 0 : handler();\n  };\n\n  var tags = Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_9__[\"getMyTagsForDrawing\"])(drawing);\n  return __jsx(_PageLayout__WEBPACK_IMPORTED_MODULE_7__[\"PageLayout\"], {\n    title: drawing.title,\n    showHeader: false,\n    showFooter: false,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }\n  }, __jsx(react_div_100vh__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n    onKeyDown: onKeyDown,\n    tabIndex: -1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 11\n    }\n  }, drawing.title), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"ImageWrap\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Image\"], {\n    src: \"\".concat(_lib_assetPrefix__WEBPACK_IMPORTED_MODULE_2__[\"assetPrefix\"], \"/images/\").concat(drawing.image),\n    alt: drawing.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  })), !!tags.length && __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"TagList\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 29\n    }\n  }, tags.sort().map(function (tag) {\n    return __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Tag\"], {\n      key: tag,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 62\n      }\n    }, tag);\n  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"NavBar\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/drawing/[id]\",\n    as: \"/drawing/\".concat(Object(_lib_drawings__WEBPACK_IMPORTED_MODULE_4__[\"getPreviousSlug\"])(drawing.slug)),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"ArrowButton\"], {\n    title: \"Previous\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 15\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"LeftArrow\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 45\n    }\n  }))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"DrawingLink\"], {\n    title: \"Source\",\n    href: \"http://explodingdog.com/title/\".concat(drawing.slug, \".html\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }\n  }, __jsx(\"b\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 15\n    }\n  }, \"#\", drawing.number)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/year/[id]\",\n    as: \"/year/\".concat(year),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"YearLink\"], {\n    title: \"Drawings for \".concat(drawing.year),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 15\n    }\n  }, __jsx(\"b\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 64\n    }\n  }, year))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/day/[id]\",\n    as: \"/day/\".concat(drawing.date),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 13\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"DateLink\"], {\n    title: \"Drawings for \".concat(drawing.date),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 15\n    }\n  }, __jsx(\"b\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 64\n    }\n  }, drawing.date.slice(5)))), __jsx(_ActionsMenu__WEBPACK_IMPORTED_MODULE_8__[\"ActionsMenu\"], {\n    drawing: drawing,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }\n  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/drawing/[id]\",\n    as: \"/drawing/\".concat(Object(_lib_drawings__WEBPACK_IMPORTED_MODULE_4__[\"getNextSlug\"])(drawing.slug)),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 13\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"ArrowButton\"], {\n    title: \"Next\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 15\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"RightArrow\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 41\n    }\n  })))))));\n};\n\n_s(DrawingPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = DrawingPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"DrawingPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS9EcmF3aW5nUGFnZS50c3g/OGQ2MCJdLCJuYW1lcyI6WyJEcmF3aW5nUGFnZSIsImRyYXdpbmciLCJ5ZWFyIiwicm91dGVyIiwidXNlUm91dGVyIiwiZ29Ub1ByZXZpb3VzIiwicHVzaCIsImdldFByZXZpb3VzU2x1ZyIsInNsdWciLCJnb1RvTmV4dCIsImdldE5leHRTbHVnIiwib25LZXlEb3duIiwiZXZlbnQiLCJoYW5kbGVyIiwiQXJyb3dVcCIsIkFycm93RG93biIsIkFycm93TGVmdCIsIkFycm93UmlnaHQiLCJrZXkiLCJ0YWdzIiwiZ2V0TXlUYWdzRm9yRHJhd2luZyIsInRpdGxlIiwiYXNzZXRQcmVmaXgiLCJpbWFnZSIsImxlbmd0aCIsInNvcnQiLCJtYXAiLCJ0YWciLCJudW1iZXIiLCJkYXRlIiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxXQUF5RCxHQUFHLFNBQTVEQSxXQUE0RCxPQUF1QjtBQUFBOztBQUFBLE1BQXBCQyxPQUFvQixRQUFwQkEsT0FBb0I7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDOUYsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFDQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLFdBQU1GLE1BQU0sQ0FBQ0csSUFBUCxvQkFBd0JDLHFFQUFlLENBQUNOLE9BQU8sQ0FBQ08sSUFBVCxDQUF2QyxFQUFOO0FBQUEsR0FBckI7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxXQUFNTixNQUFNLENBQUNHLElBQVAsb0JBQXdCSSxpRUFBVyxDQUFDVCxPQUFPLENBQUNPLElBQVQsQ0FBbkMsRUFBTjtBQUFBLEdBQWpCOztBQUVBLE1BQU1HLFNBQVMsR0FBRyxTQUFa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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJQSxJQUFKLENBQWpELENBREYsQ0FQRixFQVVFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsV0FBWDtBQUF1QixNQUFFLGlCQUFVRCxPQUFPLENBQUM0QixJQUFsQixDQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFVLFNBQUsseUJBQWtCNUIsT0FBTyxDQUFDNEIsSUFBMUIsQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSTVCLE9BQU8sQ0FBQzRCLElBQVIsQ0FBYUMsS0FBYixDQUFtQixDQUFuQixDQUFKLENBQWpELENBREYsQ0FWRixFQWFFLE1BQUMsd0RBQUQ7QUFBYSxXQUFPLEVBQUU3QixPQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkYsRUFjRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLGVBQVg7QUFBMkIsTUFBRSxxQkFBY1MsaUVBQVcsQ0FBQ1QsT0FBTyxDQUFDTyxJQUFULENBQXpCLENBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQWEsU0FBSyxFQUFDLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMEIsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQTFCLENBREYsQ0FkRixDQU5GLENBREYsQ0FERixDQURGO0FBK0JELENBaERNOztHQUFNUixXO1VBQ0lJLHFEOzs7S0FESkosVyIsImZpbGUiOiIuL2NvbXBvbmVudHMvRHJhd2luZ1BhZ2UvRHJhd2luZ1BhZ2UudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRHJhd2luZyB9IGZyb20gJy4uLy4uL3R5cGVzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgYXNzZXRQcmVmaXggfSBmcm9tICcuLi8uLi9saWIvYXNzZXRQcmVmaXgnXG5pbXBvcnQge1xuICBDb250YWluZXIsXG4gIFRpdGxlLFxuICBJbWFnZVdyYXAsXG4gIEltYWdlLFxuICBOYXZCYXIsXG4gIEFycm93QnV0dG9uLFxuICBMZWZ0QXJyb3csXG4gIFJpZ2h0QXJyb3csXG4gIERyYXdpbmdMaW5rLFxuICBZZWFyTGluayxcbiAgRGF0ZUxpbmssXG4gIFRhZ0xpc3QsXG4gIFRhZyxcbn0gZnJvbSAnLi9zdHlsZXMnXG5pbXBvcnQgeyBnZXRQcmV2aW91c1NsdWcsIGdldE5leHRTbHVnIH0gZnJvbSAnLi4vLi4vbGliL2RyYXdpbmdzJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgRGl2MTAwdmggZnJvbSAncmVhY3QtZGl2LTEwMHZoJ1xuaW1wb3J0IHsgUGFnZUxheW91dCB9IGZyb20gJy4uL1BhZ2VMYXlvdXQnXG5pbXBvcnQgeyBBY3Rpb25zTWVudSB9IGZyb20gJy4vQWN0aW9uc01lbnUnXG5pbXBvcnQgeyBnZXRNeVRhZ3NGb3JEcmF3aW5nIH0gZnJvbSAnLi4vLi4vbGliL2hhc2h0YWdzJ1xuXG5leHBvcnQgY29uc3QgRHJhd2luZ1BhZ2U6IFJlYWN0LkZDPHsgZHJhd2luZzogRHJhd2luZywgeWVhcjogbnVtYmVyIH0+ID0gKHsgZHJhd2luZywgeWVhciB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IGdvVG9QcmV2aW91cyA9ICgpID0+IHJvdXRlci5wdXNoKGAvZHJhd2luZy8ke2dldFByZXZpb3VzU2x1ZyhkcmF3aW5nLnNsdWcpfWApXG4gIGNvbnN0IGdvVG9OZXh0ID0gKCkgPT4gcm91dGVyLnB1c2goYC9kcmF3aW5nLyR7Z2V0TmV4dFNsdWcoZHJhd2luZy5zbHVnKX1gKVxuXG4gIGNvbnN0IG9uS2V5RG93biA9IChldmVudDogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCBoYW5kbGVyID0gKHtcbiAgICAgIEFycm93VXA6IGdvVG9QcmV2aW91cyxcbiAgICAgIEFycm93RG93bjogZ29Ub05leHQsXG4gICAgICBBcnJvd0xlZnQ6IGdvVG9QcmV2aW91cyxcbiAgICAgIEFycm93UmlnaHQ6IGdvVG9OZXh0LFxuICAgIH0gYXMgUmVjb3JkPHN0cmluZywgRnVuY3Rpb24+KVtldmVudC5rZXldXG4gICAgaGFuZGxlcj8uKClcbiAgfVxuICBcbiAgY29uc3QgdGFncyA9IGdldE15VGFnc0ZvckRyYXdpbmcoZHJhd2luZylcblxuICByZXR1cm4gKFxuICAgIDxQYWdlTGF5b3V0IHRpdGxlPXtkcmF3aW5nLnRpdGxlfSBzaG93SGVhZGVyPXtmYWxzZX0gc2hvd0Zvb3Rlcj17ZmFsc2V9PlxuICAgICAgPERpdjEwMHZoPlxuICAgICAgICA8Q29udGFpbmVyIG9uS2V5RG93bj17b25LZXlEb3dufSB0YWJJbmRleD17LTF9PlxuICAgICAgICAgIDxUaXRsZT57ZHJhd2luZy50aXRsZX08L1RpdGxlPlxuICAgICAgICAgIDxJbWFnZVdyYXA+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtgJHthc3NldFByZWZpeH0vaW1hZ2VzLyR7ZHJhd2luZy5pbWFnZX1gfSBhbHQ9e2RyYXdpbmcudGl0bGV9IC8+XG4gICAgICAgICAgPC9JbWFnZVdyYXA+XG4gICAgICAgICAgeyEhdGFncy5sZW5ndGggJiYgPFRhZ0xpc3Q+e3RhZ3Muc29ydCgpLm1hcCh0YWcgPT4gPFRhZyBrZXk9e3RhZ30+e3RhZ308L1RhZz4pfTwvVGFnTGlzdD59XG4gICAgICAgICAgPE5hdkJhcj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZHJhd2luZy9baWRdXCIgYXM9e2AvZHJhd2luZy8ke2dldFByZXZpb3VzU2x1ZyhkcmF3aW5nLnNsdWcpfWB9PlxuICAgICAgICAgICAgICA8QXJyb3dCdXR0b24gdGl0bGU9J1ByZXZpb3VzJz48TGVmdEFycm93IC8+PC9BcnJvd0J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxEcmF3aW5nTGluayB0aXRsZT0nU291cmNlJyBocmVmPXtgaHR0cDovL2V4cGxvZGluZ2RvZy5jb20vdGl0bGUvJHtkcmF3aW5nLnNsdWd9Lmh0bWxgfT5cbiAgICAgICAgICAgICAgPGI+I3tkcmF3aW5nLm51bWJlcn08L2I+XG4gICAgICAgICAgICA8L0RyYXdpbmdMaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi95ZWFyL1tpZF1cIiBhcz17YC95ZWFyLyR7eWVhcn1gfT5cbiAgICAgICAgICAgICAgPFllYXJMaW5rIHRpdGxlPXtgRHJhd2luZ3MgZm9yICR7ZHJhd2luZy55ZWFyfWB9PjxiPnt5ZWFyfTwvYj48L1llYXJMaW5rPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXkvW2lkXVwiIGFzPXtgL2RheS8ke2RyYXdpbmcuZGF0ZX1gfT5cbiAgICAgICAgICAgICAgPERhdGVMaW5rIHRpdGxlPXtgRHJhd2luZ3MgZm9yICR7ZHJhd2luZy5kYXRlfWB9PjxiPntkcmF3aW5nLmRhdGUuc2xpY2UoNSl9PC9iPjwvRGF0ZUxpbms+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8QWN0aW9uc01lbnUgZHJhd2luZz17ZHJhd2luZ30gLz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZHJhd2luZy9baWRdXCIgYXM9e2AvZHJhd2luZy8ke2dldE5leHRTbHVnKGRyYXdpbmcuc2x1Zyl9YH0+XG4gICAgICAgICAgICAgIDxBcnJvd0J1dHRvbiB0aXRsZT0nTmV4dCc+PFJpZ2h0QXJyb3cgLz48L0Fycm93QnV0dG9uPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvTmF2QmFyPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvRGl2MTAwdmg+XG4gICAgPC9QYWdlTGF5b3V0PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DrawingPage/DrawingPage.tsx\n");

/***/ })

})