webpackHotUpdate_N_E("pages/index",{

/***/ "./components/HomePage.tsx":
/*!*********************************!*\
  !*** ./components/HomePage.tsx ***!
  \*********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HomePage\", function() { return HomePage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PageLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageLayout */ \"./components/PageLayout.tsx\");\n/* harmony import */ var _fixtures___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../__fixtures__ */ \"./__fixtures__/index.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _DrawingSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DrawingSection */ \"./components/DrawingSection.tsx\");\n/* harmony import */ var _lib_tags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/tags */ \"./lib/tags.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/pfisher/Code/pwfisher/explodingdog/explorer/components/HomePage.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar HomePage = function HomePage() {\n  return __jsx(_PageLayout__WEBPACK_IMPORTED_MODULE_2__[\"PageLayout\"], {\n    title: \"explodingdog\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 3\n    }\n  }, __jsx(IntroSection, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, \"hi my name is Sam,\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, \"From 2000 to 2015 I drew pictures from titles you sent me. It was fun. Thank you.\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, \"You can find my drawings on \", __jsx(\"a\", {\n    href: \"https://www.instagram.com/explodingdog_sam/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 38\n    }\n  }, \"instagram\"), \" right now.\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    href: \"http://www.buildingaworld.com\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 10\n    }\n  }, \"The gift shop is open\"))), __jsx(YearIndexSection, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, \"drawings by year:\"), __jsx(\"ol\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, _fixtures___WEBPACK_IMPORTED_MODULE_3__[\"drawingYears\"].sort().reverse().map(function (year) {\n    return __jsx(\"li\", {\n      key: year,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 11\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: \"/year/\".concat(year),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 26\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 55\n      }\n    }, year)));\n  }))), __jsx(TagIndexSection, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, \"drawings by tag:\"), __jsx(\"ol\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, _fixtures___WEBPACK_IMPORTED_MODULE_3__[\"tags\"].sort().map(function (tag) {\n    return __jsx(\"li\", {\n      key: tag,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 11\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: \"/tag/\".concat(Object(_lib_tags__WEBPACK_IMPORTED_MODULE_6__[\"getTagSlug\"])(tag)),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 25\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 64\n      }\n    }, tag)));\n  }))), __jsx(_DrawingSection__WEBPACK_IMPORTED_MODULE_5__[\"DrawingSection\"], {\n    drawings: _fixtures___WEBPACK_IMPORTED_MODULE_3__[\"tagDrawingSets\"]['HomePage'],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }\n  }), __jsx(GoodDaySection, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, \"some days:\"), __jsx(\"ol\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }, _fixtures___WEBPACK_IMPORTED_MODULE_3__[\"goodDays\"].map(function (day) {\n    return __jsx(\"li\", {\n      key: day,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 11\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: \"/day/\".concat(day),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 25\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 52\n      }\n    }, day)));\n  }))), __jsx(SearchSection, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 5\n    }\n  }, __jsx(\"form\", {\n    method: \"get\",\n    action: \"http://www.google.com/search\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"hidden\",\n    name: \"sitesearch\",\n    value: \"explodingdog.com\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"hidden\",\n    name: \"domains\",\n    value: \"explodingdog.com\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"hidden\",\n    name: \"ie\",\n    value: \"UTF-8\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"hidden\",\n    name: \"oe\",\n    value: \"UTF-8\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"text\",\n    name: \"q\",\n    size: 25,\n    maxLength: 255,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }), ' ', __jsx(\"input\", {\n    type: \"submit\",\n    name: \"btnG\",\n    value: \"search drawings with Google\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }))));\n};\n_c = HomePage;\nvar Section = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].section.withConfig({\n  displayName: \"HomePage__Section\",\n  componentId: \"sc-8n5rwn-0\"\n})([\"padding:32px;> h2{font-size:24px;}\"]);\nvar IntroSection = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Section).attrs({\n  className: 'Explorer__HomePage__IntroSection'\n}).withConfig({\n  displayName: \"HomePage__IntroSection\",\n  componentId: \"sc-8n5rwn-1\"\n})([\"> h2{margin-bottom:32px;}> p{font-size:19px;margin:16px 0 16px 24px;}\"]);\n_c2 = IntroSection;\nvar YearIndexSection = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Section).attrs({\n  className: 'Explorer__HomePage__YearIndexSection'\n}).withConfig({\n  displayName: \"HomePage__YearIndexSection\",\n  componentId: \"sc-8n5rwn-2\"\n})([\"ol{margin-left:8px;}li{display:inline-block;font-size:48px;font-weight:600;margin:6px 12px;}\"]);\n_c3 = YearIndexSection;\nvar TagIndexSection = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Section).attrs({\n  className: 'Explorer__HomePage__TagIndexSection'\n}).withConfig({\n  displayName: \"HomePage__TagIndexSection\",\n  componentId: \"sc-8n5rwn-3\"\n})([\"ol{margin-left:8px;}li{display:inline-block;font-size:16px;padding:6px 12px;position:relative;&:not(:last-of-type)::after{content:'\\xB7';display:inline;opacity:0.2;position:absolute;right:-2px;top:6px;}}\"]);\n_c4 = TagIndexSection;\nvar GoodDaySection = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Section).attrs({\n  className: 'Explorer__HomePage__GoodDaySection'\n}).withConfig({\n  displayName: \"HomePage__GoodDaySection\",\n  componentId: \"sc-8n5rwn-4\"\n})([\"\"]);\n_c5 = GoodDaySection;\nvar SearchSection = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Section).attrs({\n  className: 'Explorer__HomePage__SearchSection'\n}).withConfig({\n  displayName: \"HomePage__SearchSection\",\n  componentId: \"sc-8n5rwn-5\"\n})([\"text-align:center;form{margin:0 auto;}\"]);\n_c6 = SearchSection;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"HomePage\");\n$RefreshReg$(_c2, \"IntroSection\");\n$RefreshReg$(_c3, \"YearIndexSection\");\n$RefreshReg$(_c4, \"TagIndexSection\");\n$RefreshReg$(_c5, \"GoodDaySection\");\n$RefreshReg$(_c6, \"SearchSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lUGFnZS50c3g/YWFmMCJdLCJuYW1lcyI6WyJIb21lUGFnZSIsImRyYXdpbmdZZWFycyIsInNvcnQiLCJyZXZlcnNlIiwibWFwIiwieWVhciIsInRhZ3MiLCJ0YWciLCJnZXRUYWdTbHVnIiwidGFnRHJhd2luZ1NldHMiLCJnb29kRGF5cyIsImRheSIsIlNlY3Rpb24iLCJzdHlsZWQiLCJzZWN0aW9uIiwiSW50cm9TZWN0aW9uIiwiYXR0cnMiLCJjbGFzc05hbWUiLCJZZWFySW5kZXhTZWN0aW9uIiwiVGFnSW5kZXhTZWN0aW9uIiwiR29vZERheVNlY3Rpb24iLCJTZWFyY2hTZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxTQUN0QixNQUFDLHNEQUFEO0FBQVksU0FBSyxFQUFDLGNBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRSxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlGQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FBK0I7QUFBRyxRQUFJLEVBQUMsNkNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBL0IsZ0JBSEYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUc7QUFBRyxRQUFJLEVBQUMsK0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBSCxDQUpGLENBRkYsRUFTRSxNQUFDLGdCQUFEO0FBQUE7QUFB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LGlFQUFNLENBQUNELE9BQUQsQ0FBTixDQUFnQkksS0FBaEIsQ0FBc0I7QUFBRUMsV0FBUyxFQUFFO0FBQWIsQ0FBdEIsQ0FBSDtBQUFBO0FBQUE7QUFBQSxRQUFwQjtNQUFNRyxjO0FBRU4sSUFBTUMsYUFBYSxHQUFHUixpRUFBTSxDQUFDRCxPQUFELENBQU4sQ0FBZ0JJLEtBQWhCLENBQXNCO0FBQUVDLFdBQVMsRUFBRTtBQUFiLENBQXRCLENBQUg7QUFBQTtBQUFBO0FBQUEsOENBQW5CO01BQU1JLGEiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWVQYWdlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IFBhZ2VMYXlvdXQgfSBmcm9tICcuL1BhZ2VMYXlvdXQnXG5pbXBvcnQgeyBkcmF3aW5nWWVhcnMsIGdvb2REYXlzLCB0YWdzLCB0YWdEcmF3aW5nU2V0cyB9IGZyb20gJy4uL19fZml4dHVyZXNfXydcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBEcmF3aW5nU2VjdGlvbiB9IGZyb20gJy4vRHJhd2luZ1NlY3Rpb24nXG5pbXBvcnQgeyBnZXRUYWdTbHVnIH0gZnJvbSAnLi4vbGliL3RhZ3MnXG5cbmV4cG9ydCBjb25zdCBIb21lUGFnZSA9ICgpID0+IChcbiAgPFBhZ2VMYXlvdXQgdGl0bGU9XCJleHBsb2Rpbmdkb2dcIj5cblxuICAgIDxJbnRyb1NlY3Rpb24+XG4gICAgICA8aDI+aGkgbXkgbmFtZSBpcyBTYW0sPC9oMj5cbiAgICAgIDxwPkZyb20gMjAwMCB0byAyMDE1IEkgZHJldyBwaWN0dXJlcyBmcm9tIHRpdGxlcyB5b3Ugc2VudCBtZS4gSXQgd2FzIGZ1bi4gVGhhbmsgeW91LjwvcD5cbiAgICAgIDxwPllvdSBjYW4gZmluZCBteSBkcmF3aW5ncyBvbiA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9leHBsb2Rpbmdkb2dfc2FtL1wiPmluc3RhZ3JhbTwvYT4gcmlnaHQgbm93LjwvcD5cbiAgICAgIDxwPjxhIGhyZWY9XCJodHRwOi8vd3d3LmJ1aWxkaW5nYXdvcmxkLmNvbVwiPlRoZSBnaWZ0IHNob3AgaXMgb3BlbjwvYT48L3A+XG4gICAgPC9JbnRyb1NlY3Rpb24+XG5cbiAgICA8WWVhckluZGV4U2VjdGlvbj5cbiAgICAgIDxoMj5kcmF3aW5ncyBieSB5ZWFyOjwvaDI+XG4gICAgICA8b2w+XG4gICAgICAgIHtkcmF3aW5nWWVhcnMuc29ydCgpLnJldmVyc2UoKS5tYXAoeWVhciA9PiAoXG4gICAgICAgICAgPGxpIGtleT17eWVhcn0+PExpbmsgaHJlZj17YC95ZWFyLyR7eWVhcn1gfT48YT57eWVhcn08L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC9vbD5cbiAgICA8L1llYXJJbmRleFNlY3Rpb24+XG5cbiAgICA8VGFnSW5kZXhTZWN0aW9uPlxuICAgICAgPGgyPmRyYXdpbmdzIGJ5IHRhZzo8L2gyPlxuICAgICAgPG9sPlxuICAgICAgICB7dGFncy5zb3J0KCkubWFwKHRhZyA9PiAoXG4gICAgICAgICAgPGxpIGtleT17dGFnfT48TGluayBocmVmPXtgL3RhZy8ke2dldFRhZ1NsdWcodGFnKX1gfT48YT57dGFnfTwvYT48L0xpbms+PC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L29sPlxuICAgIDwvVGFnSW5kZXhTZWN0aW9uPlxuXG4gICAgPERyYXdpbmdTZWN0aW9uIGRyYXdpbmdzPXt0YWdEcmF3aW5nU2V0c1snSG9tZVBhZ2UnXX0gLz5cblxuICAgIDxHb29kRGF5U2VjdGlvbj5cbiAgICAgIDxoMj5zb21lIGRheXM6PC9oMj5cbiAgICAgIDxvbD5cbiAgICAgICAge2dvb2REYXlzLm1hcChkYXkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2RheX0+PExpbmsgaHJlZj17YC9kYXkvJHtkYXl9YH0+PGE+e2RheX08L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC9vbD5cbiAgICA8L0dvb2REYXlTZWN0aW9uPlxuXG4gICAgPFNlYXJjaFNlY3Rpb24+XG4gICAgICA8Zm9ybSBtZXRob2Q9XCJnZXRcIiBhY3Rpb249XCJodHRwOi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNoXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInNpdGVzZWFyY2hcIiB2YWx1ZT1cImV4cGxvZGluZ2RvZy5jb21cIiAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJkb21haW5zXCIgdmFsdWU9XCJleHBsb2Rpbmdkb2cuY29tXCIgLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiaWVcIiB2YWx1ZT1cIlVURi04XCIgLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwib2VcIiB2YWx1ZT1cIlVURi04XCIgLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInFcIiBzaXplPXsyNX0gbWF4TGVuZ3RoPXsyNTV9IC8+eycgJ31cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBuYW1lPVwiYnRuR1wiIHZhbHVlPVwic2VhcmNoIGRyYXdpbmdzIHdpdGggR29vZ2xlXCIgLz5cbiAgICAgIDwvZm9ybT5cbiAgICA8L1NlYXJjaFNlY3Rpb24+XG5cbiAgPC9QYWdlTGF5b3V0PlxuKVxuXG5jb25zdCBTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gIHBhZGRpbmc6IDMycHg7XG5cbiAgPiBoMiB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG5gXG5cbmNvbnN0IEludHJvU2VjdGlvbiA9IHN0eWxlZChTZWN0aW9uKS5hdHRycyh7IGNsYXNzTmFtZTogJ0V4cGxvcmVyX19Ib21lUGFnZV9fSW50cm9TZWN0aW9uJ30pYFxuICA+IGgyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICB9XG5cbiAgPiBwIHtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgbWFyZ2luOiAxNnB4IDAgMTZweCAyNHB4O1xuICB9XG5gXG5cbmNvbnN0IFllYXJJbmRleFNlY3Rpb24gPSBzdHlsZWQoU2VjdGlvbikuYXR0cnMoeyBjbGFzc05hbWU6ICdFeHBsb3Jlcl9fSG9tZVBhZ2VfX1llYXJJbmRleFNlY3Rpb24nfSlgXG4gIG9sIHtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICB9XG5cbiAgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW46IDZweCAxMnB4O1xuICB9XG5gXG5cbmNvbnN0IFRhZ0luZGV4U2VjdGlvbiA9IHN0eWxlZChTZWN0aW9uKS5hdHRycyh7IGNsYXNzTmFtZTogJ0V4cGxvcmVyX19Ib21lUGFnZV9fVGFnSW5kZXhTZWN0aW9uJ30pYFxuICBvbCB7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgfVxuXG4gIGxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6bm90KDpsYXN0LW9mLXR5cGUpOjphZnRlciB7XG4gICAgICBjb250ZW50OiAnwrcnO1xuICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgb3BhY2l0eTogMC4yO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IC0ycHg7XG4gICAgICB0b3A6IDZweDtcbiAgICB9XG4gIH1cbmBcblxuY29uc3QgR29vZERheVNlY3Rpb24gPSBzdHlsZWQoU2VjdGlvbikuYXR0cnMoeyBjbGFzc05hbWU6ICdFeHBsb3Jlcl9fSG9tZVBhZ2VfX0dvb2REYXlTZWN0aW9uJ30pYGBcblxuY29uc3QgU2VhcmNoU2VjdGlvbiA9IHN0eWxlZChTZWN0aW9uKS5hdHRycyh7IGNsYXNzTmFtZTogJ0V4cGxvcmVyX19Ib21lUGFnZV9fU2VhcmNoU2VjdGlvbid9KWBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIGZvcm0ge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5gXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/HomePage.tsx\n");

/***/ })

})