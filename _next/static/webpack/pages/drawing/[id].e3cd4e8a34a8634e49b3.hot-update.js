webpackHotUpdate_N_E("pages/drawing/[id]",{

/***/ "../scraper/scraped-details/2000.json":
false,

/***/ "../scraper/scraped-details/2001.json":
false,

/***/ "../scraper/scraped-details/2002.json":
false,

/***/ "../scraper/scraped-details/2003.json":
false,

/***/ "../scraper/scraped-details/2004.json":
false,

/***/ "../scraper/scraped-details/2005.json":
false,

/***/ "../scraper/scraped-details/2006.json":
false,

/***/ "../scraper/scraped-details/2007.json":
false,

/***/ "../scraper/scraped-details/2008.json":
false,

/***/ "../scraper/scraped-details/2009.json":
false,

/***/ "../scraper/scraped-details/2010.json":
false,

/***/ "../scraper/scraped-details/2011.json":
false,

/***/ "../scraper/scraped-details/2012.json":
false,

/***/ "../scraper/scraped-details/2013.json":
false,

/***/ "../scraper/scraped-details/2014.json":
false,

/***/ "../scraper/scraped-details/2015.json":
false,

/***/ "./__fixtures__/drawings sync recursive ^\\.\\/.*\\.json$":
false,

/***/ "./__fixtures__/drawings.ts":
false,

/***/ "./components/DrawingPage.tsx":
/*!************************************!*\
  !*** ./components/DrawingPage.tsx ***!
  \************************************/
/*! exports provided: DrawingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DrawingPage\", function() { return DrawingPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/pfisher/Code/pwfisher/explodingdog/explorer/components/DrawingPage.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar DrawingPage = function DrawingPage(_ref) {\n  var drawing = _ref.drawing,\n      year = _ref.year;\n\n  var onLeftClick = function onLeftClick() {\n    return console.log('onLeftClick');\n  };\n\n  var onRightClick = function onRightClick() {\n    return console.log('onRightClick');\n  };\n\n  return __jsx(Container, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, __jsx(Header, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, __jsx(Arrow, {\n    onClick: onLeftClick,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 11\n    }\n  }, \"<\"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/year/[id]\",\n    as: \"/year/\".concat(year),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 11\n    }\n  }, __jsx(YearHeading, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }\n  }, year)), __jsx(Arrow, {\n    onClick: onRightClick,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 11\n    }\n  }, \">\")), __jsx(Title, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, drawing.title)), __jsx(Image, {\n    src: \"\".concat(assetPrefix, \"/images/\").concat(image),\n    alt: title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }), __jsx(\"a\", {\n    href: \"http://explodingdog.com/title/\".concat(slug, \".html\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, __jsx(Date, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, drawing.date)));\n};\n_c = DrawingPage;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].main.attrs({\n  className: 'Explorer__DrawingPage__Container'\n}).withConfig({\n  displayName: \"DrawingPage__Container\",\n  componentId: \"sc-1qbzvd7-0\"\n})([\"display:flex;flex-direction:column;justify-content:space-between;min-height:100vh;\"]);\n_c2 = Container;\nvar Header = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].header.attrs({\n  className: 'Explorer__DrawingPage__Header'\n}).withConfig({\n  displayName: \"DrawingPage__Header\",\n  componentId: \"sc-1qbzvd7-1\"\n})([\"display:flex;justify-content:space-between;font-size:64px;font-weight:bold;height:32px;line-height:32px;\"]);\n_c3 = Header;\nvar Arrow = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button.attrs({\n  className: 'Explorer__DrawingPage__Arrow'\n}).withConfig({\n  displayName: \"DrawingPage__Arrow\",\n  componentId: \"sc-1qbzvd7-2\"\n})([\"padding:0 16px;\"]);\n_c4 = Arrow;\nvar YearHeading = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].a.attrs({\n  className: 'Explorer__DrawingPage__YearHeading'\n}).withConfig({\n  displayName: \"DrawingPage__YearHeading\",\n  componentId: \"sc-1qbzvd7-3\"\n})([\"\"]);\n_c5 = YearHeading;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].h1.attrs({\n  className: 'Explorer__DrawingPage__Title'\n}).withConfig({\n  displayName: \"DrawingPage__Title\",\n  componentId: \"sc-1qbzvd7-4\"\n})([\"font-size:36px;font-weight:bold;\"]);\n_c6 = Title;\nvar Image = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].img.attrs({\n  className: 'Explorer__DrawingPage__Image'\n}).withConfig({\n  displayName: \"DrawingPage__Image\",\n  componentId: \"sc-1qbzvd7-5\"\n})([\"display:block;object-fit:cover;width:100%;\"]);\n_c7 = Image;\nvar Date = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.attrs({\n  classNamne: 'Explorer__DrawingPage__Date'\n}).withConfig({\n  displayName: \"DrawingPage__Date\",\n  componentId: \"sc-1qbzvd7-6\"\n})([\"color:#BBB;font-size:12px;\"]);\n_c8 = Date;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n\n$RefreshReg$(_c, \"DrawingPage\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"Header\");\n$RefreshReg$(_c4, \"Arrow\");\n$RefreshReg$(_c5, \"YearHeading\");\n$RefreshReg$(_c6, \"Title\");\n$RefreshReg$(_c7, \"Image\");\n$RefreshReg$(_c8, \"Date\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS50c3g/MTljYyJdLCJuYW1lcyI6WyJEcmF3aW5nUGFnZSIsImRyYXdpbmciLCJ5ZWFyIiwib25MZWZ0Q2xpY2siLCJjb25zb2xlIiwibG9nIiwib25SaWdodENsaWNrIiwidGl0bGUiLCJhc3NldFByZWZpeCIsImltYWdlIiwic2x1ZyIsImRhdGUiLCJDb250YWluZXIiLCJzdHlsZWQiLCJtYWluIiwiYXR0cnMiLCJjbGFzc05hbWUiLCJIZWFkZXIiLCJoZWFkZXIiLCJBcnJvdyIsImJ1dHRvbiIsIlllYXJIZWFkaW5nIiwiYSIsIlRpdGxlIiwiaDEiLCJJbWFnZSIsImltZyIsIkRhdGUiLCJkaXYiLCJjbGFzc05hbW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVPLElBQU1BLFdBQXlELEdBQUcsU0FBNURBLFdBQTRELE9BQXVCO0FBQUEsTUFBcEJDLE9BQW9CLFFBQXBCQSxPQUFvQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFDOUYsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxXQUFNQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLENBQU47QUFBQSxHQUFwQjs7QUFDQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLFdBQU1GLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosQ0FBTjtBQUFBLEdBQXJCOztBQUNBLFNBQ0UsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLEtBQUQ7QUFBTyxXQUFPLEVBQUVGLFdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERixFQUVFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsWUFBWDtBQUF3QixNQUFFLGtCQUFXRCxJQUFYLENBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFjQSxJQUFkLENBREYsQ0FGRixFQUtFLE1BQUMsS0FBRDtBQUFPLFdBQU8sRUFBRUksWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUxGLENBREYsRUFRRSxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRTCxPQUFPLENBQUNNLEtBQWhCLENBUkYsQ0FERixFQVdFLE1BQUMsS0FBRDtBQUFPLE9BQUcsWUFBS0MsV0FBTCxxQkFBMkJDLEtBQTNCLENBQVY7QUFBOEMsT0FBRyxFQUFFRixLQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsRUFZRTtBQUFHLFFBQUksMENBQW1DRyxJQUFuQyxVQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPVCxPQUFPLENBQUNVLElBQWYsQ0FERixDQVpGLENBREY7QUFrQkQsQ0FyQk07S0FBTVgsVztBQXVCYixJQUFNWSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLElBQVAsQ0FBWUMsS0FBWixDQUFrQjtBQUFFQyxXQUFTLEVBQUU7QUFBYixDQUFsQixDQUFIO0FBQUE7QUFBQTtBQUFBLDBGQUFmO01BQU1KLFM7QUFPTixJQUFNSyxNQUFNLEdBQUdKLHlEQUFNLENBQUNLLE1BQVAsQ0FBY0gsS0FBZCxDQUFvQjtBQUFFQyxXQUFTLEVBQUU7QUFBYixDQUFwQixDQUFIO0FBQUE7QUFBQTtBQUFBLGdIQUFaO01BQU1DLE07QUFTTixJQUFNRSxLQUFLLEdBQUdOLHlEQUFNLENBQUNPLE1BQVAsQ0FBY0wsS0FBZCxDQUFvQjtBQUFFQyxXQUFTLEVBQUU7QUFBYixDQUFwQixDQUFIO0FBQUE7QUFBQTtBQUFBLHVCQUFYO01BQU1HLEs7QUFJTixJQUFNRSxXQUFXLEdBQUdSLHlEQUFNLENBQUNTLENBQVAsQ0FBU1AsS0FBVCxDQUFlO0FBQUVDLFdBQVMsRUFBRTtBQUFiLENBQWYsQ0FBSDtBQUFBO0FBQUE7QUFBQSxRQUFqQjtNQUFNSyxXO0FBRU4sSUFBTUUsS0FBSyxHQUFHVix5REFBTSxDQUFDVyxFQUFQLENBQVVULEtBQVYsQ0FBZ0I7QUFBRUMsV0FBUyxFQUFFO0FBQWIsQ0FBaEIsQ0FBSDtBQUFBO0FBQUE7QUFBQSx3Q0FBWDtNQUFNTyxLO0FBS04sSUFBTUUsS0FBSyxHQUFHWix5REFBTSxDQUFDYSxHQUFQLENBQVdYLEtBQVgsQ0FBaUI7QUFBRUMsV0FBUyxFQUFFO0FBQWIsQ0FBakIsQ0FBSDtBQUFBO0FBQUE7QUFBQSxrREFBWDtNQUFNUyxLO0FBTU4sSUFBTUUsSUFBSSxHQUFHZCx5REFBTSxDQUFDZSxHQUFQLENBQVdiLEtBQVgsQ0FBaUI7QUFBRWMsWUFBVSxFQUFFO0FBQWQsQ0FBakIsQ0FBSDtBQUFBO0FBQUE7QUFBQSxrQ0FBVjtNQUFNRixJIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBEcmF3aW5nIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgRHJhd2luZ1BhZ2U6IFJlYWN0LkZDPHsgZHJhd2luZzogRHJhd2luZywgeWVhcjogbnVtYmVyIH0+ID0gKHsgZHJhd2luZywgeWVhciB9KSA9PiB7XG4gIGNvbnN0IG9uTGVmdENsaWNrID0gKCkgPT4gY29uc29sZS5sb2coJ29uTGVmdENsaWNrJylcbiAgY29uc3Qgb25SaWdodENsaWNrID0gKCkgPT4gY29uc29sZS5sb2coJ29uUmlnaHRDbGljaycpXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkZXI+XG4gICAgICAgICAgPEFycm93IG9uQ2xpY2s9e29uTGVmdENsaWNrfT4mbHQ7PC9BcnJvdz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3llYXIvW2lkXVwiIGFzPXtgL3llYXIvJHt5ZWFyfWB9PlxuICAgICAgICAgICAgPFllYXJIZWFkaW5nPnt5ZWFyfTwvWWVhckhlYWRpbmc+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxBcnJvdyBvbkNsaWNrPXtvblJpZ2h0Q2xpY2t9PiZndDs8L0Fycm93PlxuICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgPFRpdGxlPntkcmF3aW5nLnRpdGxlfTwvVGl0bGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxJbWFnZSBzcmM9e2Ake2Fzc2V0UHJlZml4fS9pbWFnZXMvJHtpbWFnZX1gfSBhbHQ9e3RpdGxlfSAvPlxuICAgICAgPGEgaHJlZj17YGh0dHA6Ly9leHBsb2Rpbmdkb2cuY29tL3RpdGxlLyR7c2x1Z30uaHRtbGB9PlxuICAgICAgICA8RGF0ZT57ZHJhd2luZy5kYXRlfTwvRGF0ZT5cbiAgICAgIDwvYT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQubWFpbi5hdHRycyh7IGNsYXNzTmFtZTogJ0V4cGxvcmVyX19EcmF3aW5nUGFnZV9fQ29udGFpbmVyJ30pYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuYFxuXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyLmF0dHJzKHsgY2xhc3NOYW1lOiAnRXhwbG9yZXJfX0RyYXdpbmdQYWdlX19IZWFkZXInfSlgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbmBcblxuY29uc3QgQXJyb3cgPSBzdHlsZWQuYnV0dG9uLmF0dHJzKHsgY2xhc3NOYW1lOiAnRXhwbG9yZXJfX0RyYXdpbmdQYWdlX19BcnJvdyd9KWBcbiAgcGFkZGluZzogMCAxNnB4O1xuYFxuXG5jb25zdCBZZWFySGVhZGluZyA9IHN0eWxlZC5hLmF0dHJzKHsgY2xhc3NOYW1lOiAnRXhwbG9yZXJfX0RyYXdpbmdQYWdlX19ZZWFySGVhZGluZyd9KWBgXG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxLmF0dHJzKHsgY2xhc3NOYW1lOiAnRXhwbG9yZXJfX0RyYXdpbmdQYWdlX19UaXRsZSd9KWBcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbmBcblxuY29uc3QgSW1hZ2UgPSBzdHlsZWQuaW1nLmF0dHJzKHsgY2xhc3NOYW1lOiAnRXhwbG9yZXJfX0RyYXdpbmdQYWdlX19JbWFnZSd9KWBcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbmBcblxuY29uc3QgRGF0ZSA9IHN0eWxlZC5kaXYuYXR0cnMoeyBjbGFzc05hbW5lOiAnRXhwbG9yZXJfX0RyYXdpbmdQYWdlX19EYXRlJ30pYFxuICBjb2xvcjogI0JCQjtcbiAgZm9udC1zaXplOiAxMnB4O1xuYFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DrawingPage.tsx\n");

/***/ }),

/***/ "./components/DrawingTile.tsx":
false,

/***/ "./components/PageFooter.tsx":
false,

/***/ "./components/PageHeader.tsx":
false,

/***/ "./components/PageLayout.tsx":
false,

/***/ "./components/YearBar.tsx":
false,

/***/ "./components/YearPage.tsx":
false,

/***/ "./lib/assetPrefix.ts":
false,

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
false,

/***/ "./pages/drawing/[id].tsx":
/*!********************************!*\
  !*** ./pages/drawing/[id].tsx ***!
  \********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _components_DrawingPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/DrawingPage */ \"./components/DrawingPage.tsx\");\n\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_components_DrawingPage__WEBPACK_IMPORTED_MODULE_0__[\"DrawingPage\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZHJhd2luZy8udHN4Pzc5OTYiXSwibmFtZXMiOlsiRHJhd2luZ1BhZ2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1lQSxrSUFBZiIsImZpbGUiOiIuL3BhZ2VzL2RyYXdpbmcvW2lkXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEcmF3aW5nUGFnZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRHJhd2luZ1BhZ2UnXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcywgR2V0U3RhdGljUGF0aHMgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgZHJhd2luZ3MgfSBmcm9tICcuLi8uLi9fX2ZpeHR1cmVzX18vZHJhd2luZ3MnXG5pbXBvcnQgeyBnZXREcmF3aW5nQnlTbHVnLCBnZXREcmF3aW5nWWVhciB9IGZyb20gJy4uLy4uL2xpYi9kcmF3aW5ncydcbmltcG9ydCB7IHNpbmdsZVF1ZXJ5UGFyYW1WYWx1ZSB9IGZyb20gJy4uLy4uL2xpYi9uZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBEcmF3aW5nUGFnZVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBwYXRocyA9IGRyYXdpbmdzLm1hcCgoeyBzbHVnIH0pID0+ICh7IHBhcmFtczogeyBpZDogc2x1ZyB9fSkpXG4gIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogZmFsc2UgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3Qgc2x1ZyA9IHNpbmdsZVF1ZXJ5UGFyYW1WYWx1ZShwYXJhbXM/LmlkKVxuICBjb25zdCBkcmF3aW5nID0gZ2V0RHJhd2luZ0J5U2x1ZyhzbHVnKSB8fCBnZXREcmF3aW5nQnlTbHVnKCdzb21ldGhpbmcnKVxuICBjb25zdCB5ZWFyID0gZ2V0RHJhd2luZ1llYXIoZHJhd2luZyEpXG4gIHJldHVybiB7IHByb3BzOiB7IHllYXIsIGRyYXdpbmcgfSB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/drawing/[id].tsx\n");

/***/ })

})