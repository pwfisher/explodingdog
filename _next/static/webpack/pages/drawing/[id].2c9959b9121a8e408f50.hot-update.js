webpackHotUpdate_N_E("pages/drawing/[id]",{

/***/ "./components/DrawingPage/DrawingPage.tsx":
/*!************************************************!*\
  !*** ./components/DrawingPage/DrawingPage.tsx ***!
  \************************************************/
/*! exports provided: DrawingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DrawingPage\", function() { return DrawingPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_assetPrefix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/assetPrefix */ \"./lib/assetPrefix.ts\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./components/DrawingPage/styles.tsx\");\n/* harmony import */ var _lib_drawings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/drawings */ \"./lib/drawings.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_div_100vh__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-div-100vh */ \"./node_modules/react-div-100vh/dist/esm/index.js\");\n/* harmony import */ var _PageLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../PageLayout */ \"./components/PageLayout.tsx\");\n/* harmony import */ var _ActionsMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ActionsMenu */ \"./components/DrawingPage/ActionsMenu.tsx\");\n/* harmony import */ var _lib_hashtags__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/hashtags */ \"./lib/hashtags.ts\");\n/* harmony import */ var _containers_MyTags__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../containers/MyTags */ \"./containers/MyTags.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/pfisher/Code/pwfisher/explodingdog/explorer/components/DrawingPage/DrawingPage.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\nvar DrawingPage = function DrawingPage(_ref) {\n  _s();\n\n  var drawing = _ref.drawing,\n      year = _ref.year;\n\n  var _MyTagsContainer$useC = _containers_MyTags__WEBPACK_IMPORTED_MODULE_10__[\"MyTagsContainer\"].useContainer(),\n      getMyTagsForDrawing = _MyTagsContainer$useC.getMyTagsForDrawing;\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var goToPrevious = function goToPrevious() {\n    return router.push(\"/drawing/\".concat(Object(_lib_drawings__WEBPACK_IMPORTED_MODULE_4__[\"getPreviousSlug\"])(drawing.slug)));\n  };\n\n  var goToNext = function goToNext() {\n    return router.push(\"/drawing/\".concat(Object(_lib_drawings__WEBPACK_IMPORTED_MODULE_4__[\"getNextSlug\"])(drawing.slug)));\n  };\n\n  var onKeyDown = function onKeyDown(event) {\n    var handler = {\n      ArrowUp: goToPrevious,\n      ArrowDown: goToNext,\n      ArrowLeft: goToPrevious,\n      ArrowRight: goToNext\n    }[event.key];\n    handler === null || handler === void 0 ? void 0 : handler();\n  };\n\n  var tags = Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_9__[\"getTagsForDrawing\"])(drawing);\n  var myTags = getMyTagsForDrawing(drawing);\n  console.log('DrawingPage myTags', myTags);\n  return __jsx(_PageLayout__WEBPACK_IMPORTED_MODULE_7__[\"PageLayout\"], {\n    title: drawing.title,\n    showHeader: false,\n    showFooter: false,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 5\n    }\n  }, __jsx(react_div_100vh__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n    onKeyDown: onKeyDown,\n    tabIndex: -1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 11\n    }\n  }, drawing.title), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"ImageWrap\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Image\"], {\n    src: \"\".concat(_lib_assetPrefix__WEBPACK_IMPORTED_MODULE_2__[\"assetPrefix\"], \"/images/\").concat(drawing.image),\n    alt: drawing.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  })), tags.length > 0 && __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"TagList\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 31\n    }\n  }, tags.map(function (tag) {\n    return __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Tag\"], {\n      key: tag,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 57\n      }\n    }, tag);\n  })), myTags.length > 0 && __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"TagList\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 33\n    }\n  }, myTags.map(function (tag) {\n    return __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Tag\"], {\n      key: tag,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 61\n      }\n    }, tag);\n  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"NavBar\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/drawing/[id]\",\n    as: \"/drawing/\".concat(Object(_lib_drawings__WEBPACK_IMPORTED_MODULE_4__[\"getPreviousSlug\"])(drawing.slug)),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"ArrowButton\"], {\n    title: \"Previous\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 15\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"LeftArrow\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 45\n    }\n  }))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"DrawingLink\"], {\n    title: \"Source\",\n    href: \"http://explodingdog.com/title/\".concat(drawing.slug, \".html\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 13\n    }\n  }, __jsx(\"b\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 15\n    }\n  }, \"#\", drawing.number)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/year/[id]\",\n    as: \"/year/\".concat(year),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"YearLink\"], {\n    title: \"Drawings for \".concat(drawing.year),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 15\n    }\n  }, __jsx(\"b\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 64\n    }\n  }, year))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/day/[id]\",\n    as: \"/day/\".concat(drawing.date),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"DateLink\"], {\n    title: \"Drawings for \".concat(drawing.date),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 15\n    }\n  }, __jsx(\"b\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 64\n    }\n  }, drawing.date.slice(5)))), __jsx(_ActionsMenu__WEBPACK_IMPORTED_MODULE_8__[\"ActionsMenu\"], {\n    drawing: drawing,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }\n  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/drawing/[id]\",\n    as: \"/drawing/\".concat(Object(_lib_drawings__WEBPACK_IMPORTED_MODULE_4__[\"getNextSlug\"])(drawing.slug)),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"ArrowButton\"], {\n    title: \"Next\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 15\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"RightArrow\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 41\n    }\n  })))))));\n};\n\n_s(DrawingPage, \"9D74o67m8cbvhCncpZjpoJ9D2kE=\", false, function () {\n  return [_containers_MyTags__WEBPACK_IMPORTED_MODULE_10__[\"MyTagsContainer\"].useContainer, next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = DrawingPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"DrawingPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS9EcmF3aW5nUGFnZS50c3g/OGQ2MCJdLCJuYW1lcyI6WyJEcmF3aW5nUGFnZSIsImRyYXdpbmciLCJ5ZWFyIiwiTXlUYWdzQ29udGFpbmVyIiwidXNlQ29udGFpbmVyIiwiZ2V0TXlUYWdzRm9yRHJhd2luZyIsInJvdXRlciIsInVzZVJvdXRlciIsImdvVG9QcmV2aW91cyIsInB1c2giLCJnZXRQcmV2aW91c1NsdWciLCJzbHVnIiwiZ29Ub05leHQiLCJnZXROZXh0U2x1ZyIsIm9uS2V5RG93biIsImV2ZW50IiwiaGFuZGxlciIsIkFycm93VXAiLCJBcnJvd0Rvd24iLCJBcnJvd0xlZnQiLCJBcnJvd1JpZ2h0Iiwia2V5IiwidGFncyIsImdldFRhZ3NGb3JEcmF3aW5nIiwibXlUYWdzIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwiYXNzZXRQcmVmaXgiLCJpbWFnZSIsImxlbmd0aCIsIm1hcCIsInRhZyIsIm51bWJlciIsImRhdGUiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFdBQXlELEdBQUcsU0FBNURBLFdBQTRELE9BQXVCO0FBQUE7O0FBQUEsTUFBcEJDLE9BQW9CLFFBQXBCQSxPQUFvQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSw4QkFDOURDLG1FQUFlLENBQUNDLFlBQWhCLEVBRDhEO0FBQUEsTUFDdEZDLG1CQURzRix5QkFDdEZBLG1CQURzRjs7QUFFOUYsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLFdBQU1GLE1BQU0sQ0FBQ0csSUFBUCxvQkFBd0JDLHFFQUFlLENBQUNULE9BQU8sQ0FBQ1UsSUFBVCxDQUF2QyxFQUFOO0FBQUEs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QUE7QUFBQTtBQUFBO0FBQUEsSUFiRixFQWNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsZUFBWDtBQUEyQixNQUFFLHFCQUFjWSxpRUFBVyxDQUFDWixPQUFPLENBQUNVLElBQVQsQ0FBekIsQ0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBYSxTQUFLLEVBQUMsTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEwQixNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBMUIsQ0FERixDQWRGLENBUEYsQ0FERixDQURGLENBREY7QUFnQ0QsQ0FyRE07O0dBQU1YLFc7VUFDcUJHLG1FQUFlLENBQUNDLFksRUFDakNHLHFEOzs7S0FGSlAsVyIsImZpbGUiOiIuL2NvbXBvbmVudHMvRHJhd2luZ1BhZ2UvRHJhd2luZ1BhZ2UudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRHJhd2luZyB9IGZyb20gJy4uLy4uL3R5cGVzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgYXNzZXRQcmVmaXggfSBmcm9tICcuLi8uLi9saWIvYXNzZXRQcmVmaXgnXG5pbXBvcnQge1xuICBDb250YWluZXIsXG4gIFRpdGxlLFxuICBJbWFnZVdyYXAsXG4gIEltYWdlLFxuICBOYXZCYXIsXG4gIEFycm93QnV0dG9uLFxuICBMZWZ0QXJyb3csXG4gIFJpZ2h0QXJyb3csXG4gIERyYXdpbmdMaW5rLFxuICBZZWFyTGluayxcbiAgRGF0ZUxpbmssXG4gIFRhZ0xpc3QsXG4gIFRhZyxcbn0gZnJvbSAnLi9zdHlsZXMnXG5pbXBvcnQgeyBnZXRQcmV2aW91c1NsdWcsIGdldE5leHRTbHVnIH0gZnJvbSAnLi4vLi4vbGliL2RyYXdpbmdzJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgRGl2MTAwdmggZnJvbSAncmVhY3QtZGl2LTEwMHZoJ1xuaW1wb3J0IHsgUGFnZUxheW91dCB9IGZyb20gJy4uL1BhZ2VMYXlvdXQnXG5pbXBvcnQgeyBBY3Rpb25zTWVudSB9IGZyb20gJy4vQWN0aW9uc01lbnUnXG5pbXBvcnQgeyBnZXRUYWdzRm9yRHJhd2luZyB9IGZyb20gJy4uLy4uL2xpYi9oYXNodGFncydcbmltcG9ydCB7IE15VGFnc0NvbnRhaW5lciB9IGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvTXlUYWdzJ1xuXG5leHBvcnQgY29uc3QgRHJhd2luZ1BhZ2U6IFJlYWN0LkZDPHsgZHJhd2luZzogRHJhd2luZywgeWVhcjogbnVtYmVyIH0+ID0gKHsgZHJhd2luZywgeWVhciB9KSA9PiB7XG4gIGNvbnN0IHsgZ2V0TXlUYWdzRm9yRHJhd2luZyB9ID0gTXlUYWdzQ29udGFpbmVyLnVzZUNvbnRhaW5lcigpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3QgZ29Ub1ByZXZpb3VzID0gKCkgPT4gcm91dGVyLnB1c2goYC9kcmF3aW5nLyR7Z2V0UHJldmlvdXNTbHVnKGRyYXdpbmcuc2x1Zyl9YClcbiAgY29uc3QgZ29Ub05leHQgPSAoKSA9PiByb3V0ZXIucHVzaChgL2RyYXdpbmcvJHtnZXROZXh0U2x1ZyhkcmF3aW5nLnNsdWcpfWApXG5cbiAgY29uc3Qgb25LZXlEb3duID0gKGV2ZW50OiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IGhhbmRsZXIgPSAoe1xuICAgICAgQXJyb3dVcDogZ29Ub1ByZXZpb3VzLFxuICAgICAgQXJyb3dEb3duOiBnb1RvTmV4dCxcbiAgICAgIEFycm93TGVmdDogZ29Ub1ByZXZpb3VzLFxuICAgICAgQXJyb3dSaWdodDogZ29Ub05leHQsXG4gICAgfSBhcyBSZWNvcmQ8c3RyaW5nLCBGdW5jdGlvbj4pW2V2ZW50LmtleV1cbiAgICBoYW5kbGVyPy4oKVxuICB9XG5cbiAgY29uc3QgdGFncyA9IGdldFRhZ3NGb3JEcmF3aW5nKGRyYXdpbmcpXG4gIGNvbnN0IG15VGFncyA9IGdldE15VGFnc0ZvckRyYXdpbmcoZHJhd2luZylcbmNvbnNvbGUubG9nKCdEcmF3aW5nUGFnZSBteVRhZ3MnLCBteVRhZ3MpXG5cbiAgcmV0dXJuIChcbiAgICA8UGFnZUxheW91dCB0aXRsZT17ZHJhd2luZy50aXRsZX0gc2hvd0hlYWRlcj17ZmFsc2V9IHNob3dGb290ZXI9e2ZhbHNlfT5cbiAgICAgIDxEaXYxMDB2aD5cbiAgICAgICAgPENvbnRhaW5lciBvbktleURvd249e29uS2V5RG93bn0gdGFiSW5kZXg9ey0xfT5cbiAgICAgICAgICA8VGl0bGU+e2RyYXdpbmcudGl0bGV9PC9UaXRsZT5cbiAgICAgICAgICA8SW1hZ2VXcmFwPlxuICAgICAgICAgICAgPEltYWdlIHNyYz17YCR7YXNzZXRQcmVmaXh9L2ltYWdlcy8ke2RyYXdpbmcuaW1hZ2V9YH0gYWx0PXtkcmF3aW5nLnRpdGxlfSAvPlxuICAgICAgICAgIDwvSW1hZ2VXcmFwPlxuICAgICAgICAgIHt0YWdzLmxlbmd0aCA+IDAgJiYgPFRhZ0xpc3Q+e3RhZ3MubWFwKHRhZyA9PiA8VGFnIGtleT17dGFnfT57dGFnfTwvVGFnPil9PC9UYWdMaXN0Pn1cbiAgICAgICAgICB7bXlUYWdzLmxlbmd0aCA+IDAgJiYgPFRhZ0xpc3Q+e215VGFncy5tYXAodGFnID0+IDxUYWcga2V5PXt0YWd9Pnt0YWd9PC9UYWc+KX08L1RhZ0xpc3Q+fVxuICAgICAgICAgIDxOYXZCYXI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2RyYXdpbmcvW2lkXVwiIGFzPXtgL2RyYXdpbmcvJHtnZXRQcmV2aW91c1NsdWcoZHJhd2luZy5zbHVnKX1gfT5cbiAgICAgICAgICAgICAgPEFycm93QnV0dG9uIHRpdGxlPSdQcmV2aW91cyc+PExlZnRBcnJvdyAvPjwvQXJyb3dCdXR0b24+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8RHJhd2luZ0xpbmsgdGl0bGU9J1NvdXJjZScgaHJlZj17YGh0dHA6Ly9leHBsb2Rpbmdkb2cuY29tL3RpdGxlLyR7ZHJhd2luZy5zbHVnfS5odG1sYH0+XG4gICAgICAgICAgICAgIDxiPiN7ZHJhd2luZy5udW1iZXJ9PC9iPlxuICAgICAgICAgICAgPC9EcmF3aW5nTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIveWVhci9baWRdXCIgYXM9e2AveWVhci8ke3llYXJ9YH0+XG4gICAgICAgICAgICAgIDxZZWFyTGluayB0aXRsZT17YERyYXdpbmdzIGZvciAke2RyYXdpbmcueWVhcn1gfT48Yj57eWVhcn08L2I+PC9ZZWFyTGluaz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGF5L1tpZF1cIiBhcz17YC9kYXkvJHtkcmF3aW5nLmRhdGV9YH0+XG4gICAgICAgICAgICAgIDxEYXRlTGluayB0aXRsZT17YERyYXdpbmdzIGZvciAke2RyYXdpbmcuZGF0ZX1gfT48Yj57ZHJhd2luZy5kYXRlLnNsaWNlKDUpfTwvYj48L0RhdGVMaW5rPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPEFjdGlvbnNNZW51IGRyYXdpbmc9e2RyYXdpbmd9IC8+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2RyYXdpbmcvW2lkXVwiIGFzPXtgL2RyYXdpbmcvJHtnZXROZXh0U2x1ZyhkcmF3aW5nLnNsdWcpfWB9PlxuICAgICAgICAgICAgICA8QXJyb3dCdXR0b24gdGl0bGU9J05leHQnPjxSaWdodEFycm93IC8+PC9BcnJvd0J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L05hdkJhcj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0RpdjEwMHZoPlxuICAgIDwvUGFnZUxheW91dD5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DrawingPage/DrawingPage.tsx\n");

/***/ })

})