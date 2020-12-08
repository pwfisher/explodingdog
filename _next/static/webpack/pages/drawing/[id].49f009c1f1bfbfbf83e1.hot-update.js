webpackHotUpdate_N_E("pages/drawing/[id]",{

/***/ "./components/DrawingPage.tsx":
/*!************************************!*\
  !*** ./components/DrawingPage.tsx ***!
  \************************************/
/*! exports provided: DrawingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DrawingPage\", function() { return DrawingPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_assetPrefix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/assetPrefix */ \"./lib/assetPrefix.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _lib_drawings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/drawings */ \"./lib/drawings.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/pfisher/Code/pwfisher/explodingdog/explorer/components/DrawingPage.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar DrawingPage = function DrawingPage(_ref) {\n  var drawing = _ref.drawing,\n      year = _ref.year;\n  return __jsx(Container, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, __jsx(Title, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, drawing.title), __jsx(ImageWrap, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, __jsx(Image, {\n    src: \"\".concat(_lib_assetPrefix__WEBPACK_IMPORTED_MODULE_2__[\"assetPrefix\"], \"/images/\").concat(drawing.image),\n    alt: drawing.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  })), __jsx(NavBar, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/drawing/[id]\",\n    as: \"/drawing/\".concat(Object(_lib_drawings__WEBPACK_IMPORTED_MODULE_4__[\"getPreviousSlug\"])(drawing.slug)),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, __jsx(Arrow, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 11\n    }\n  }, \"<\")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/year/[id]\",\n    as: \"/year/\".concat(year),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, __jsx(YearLink, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 11\n    }\n  }, year)), __jsx(\"a\", {\n    href: \"http://explodingdog.com/title/\".concat(drawing.slug, \".html\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, __jsx(DrawingId, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 11\n    }\n  }, \"#\", drawing.id.split('.').slice(-1))), __jsx(Date, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, drawing.date), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/drawing/[id]\",\n    as: \"/drawing/\".concat(Object(_lib_drawings__WEBPACK_IMPORTED_MODULE_4__[\"getNextSlug\"])(drawing.slug)),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, __jsx(Arrow, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }, \">\"))));\n};\n_c = DrawingPage;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].main.attrs({\n  className: 'Explorer__DrawingPage__Container'\n}).withConfig({\n  displayName: \"DrawingPage__Container\",\n  componentId: \"sc-1qbzvd7-0\"\n})([\"display:flex;flex-direction:column;justify-content:space-between;min-height:100vh;max-height:100vh;\"]);\n_c2 = Container;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h1.attrs({\n  className: 'Explorer__DrawingPage__Title'\n}).withConfig({\n  displayName: \"DrawingPage__Title\",\n  componentId: \"sc-1qbzvd7-1\"\n})([\"font-size:32px;font-weight:bold;padding:16px 24px;\"]);\n_c3 = Title;\nvar ImageWrap = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].figure.attrs({\n  className: 'Explorer__DrawingPage__ImageWrap'\n}).withConfig({\n  displayName: \"DrawingPage__ImageWrap\",\n  componentId: \"sc-1qbzvd7-2\"\n})([\"flex-grow:1;position:relative;\"]);\n_c4 = ImageWrap;\nvar Image = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].img.attrs({\n  className: 'Explorer__DrawingPage__Image'\n}).withConfig({\n  displayName: \"DrawingPage__Image\",\n  componentId: \"sc-1qbzvd7-3\"\n})([\"display:block;height:100%;object-fit:contain;position:absolute;width:100%;\"]);\n_c5 = Image;\nvar NavBar = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].nav.attrs({\n  className: 'Explorer__DrawingPage__Header'\n}).withConfig({\n  displayName: \"DrawingPage__NavBar\",\n  componentId: \"sc-1qbzvd7-4\"\n})([\"color:#BBB;display:flex;justify-content:space-between;font-size:14px;font-weight:bold;height:40px;line-height:40px;\"]);\n_c6 = NavBar;\nvar Arrow = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.attrs({\n  className: 'Explorer__DrawingPage__Arrow'\n}).withConfig({\n  displayName: \"DrawingPage__Arrow\",\n  componentId: \"sc-1qbzvd7-5\"\n})([\"font-size:24px;padding:0 32px;\"]);\n_c7 = Arrow;\nvar YearLink = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].a.attrs({\n  className: 'Explorer__DrawingPage__YearLink'\n}).withConfig({\n  displayName: \"DrawingPage__YearLink\",\n  componentId: \"sc-1qbzvd7-6\"\n})([\"cursor:pointer;color:black;\"]);\n_c8 = YearLink;\nvar DrawingId = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].span.attrs({\n  className: 'Explorer__DrawingPage__DrawingId'\n}).withConfig({\n  displayName: \"DrawingPage__DrawingId\",\n  componentId: \"sc-1qbzvd7-7\"\n})([\"\"]);\n_c9 = DrawingId;\nvar Date = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].span.attrs({\n  classNamne: 'Explorer__DrawingPage__Date'\n}).withConfig({\n  displayName: \"DrawingPage__Date\",\n  componentId: \"sc-1qbzvd7-8\"\n})([\"\"]);\n_c10 = Date;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;\n\n$RefreshReg$(_c, \"DrawingPage\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"Title\");\n$RefreshReg$(_c4, \"ImageWrap\");\n$RefreshReg$(_c5, \"Image\");\n$RefreshReg$(_c6, \"NavBar\");\n$RefreshReg$(_c7, \"Arrow\");\n$RefreshReg$(_c8, \"YearLink\");\n$RefreshReg$(_c9, \"DrawingId\");\n$RefreshReg$(_c10, \"Date\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS50c3g/MTljYyJdLCJuYW1lcyI6WyJEcmF3aW5nUGFnZSIsImRyYXdpbmciLCJ5ZWFyIiwidGl0bGUiLCJhc3NldFByZWZpeCIsImltYWdlIiwiZ2V0UHJldmlvdXNTbHVnIiwic2x1ZyIsImlkIiwic3BsaXQiLCJzbGljZSIsImRhdGUiLCJnZXROZXh0U2x1ZyIsIkNvbnRhaW5lciIsInN0eWxlZCIsIm1haW4iLCJhdHRycyIsImNsYXNzTmFtZSIsIlRpdGxlIiwiaDEiLCJJbWFnZVdyYXAiLCJmaWd1cmUiLCJJbWFnZSIsImltZyIsIk5hdkJhciIsIm5hdiIsIkFycm93IiwiZGl2IiwiWWVhckxpbmsiLCJhIiwiRHJhd2luZ0lkIiwic3BhbiIsIkRhdGUiLCJjbGFzc05hbW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFdBQXlELEdBQUcsU0FBNURBLFdBQTRELE9BQXVCO0FBQUEsTUFBcEJDLE9BQW9CLFFBQXBCQSxPQUFvQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUM5RixTQUNFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUUQsT0FBTyxDQUFDRSxLQUFoQixDQURGLEVBRUUsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLEtBQUQ7QUFBTyxPQUFHLFlBQUtDLDREQUFMLHFCQUEyQkgsT0FBTyxDQUFDSSxLQUFuQyxDQUFWO0FBQXNELE9BQUcsRUFBRUosT0FBTyxDQUFDRSxLQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGRixFQUtFLE1BQUMsTUFBRDtBQUFBO0FBQUE7QUFB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LENBQUg7QUFBQTtBQUFBO0FBQUEsUUFBZjtNQUFNYSxTO0FBRU4sSUFBTUUsSUFBSSxHQUFHbEIseURBQU0sQ0FBQ2lCLElBQVAsQ0FBWWYsS0FBWixDQUFrQjtBQUFFaUIsWUFBVSxFQUFFO0FBQWQsQ0FBbEIsQ0FBSDtBQUFBO0FBQUE7QUFBQSxRQUFWO09BQU1ELEkiLCJmaWxlIjoiLi9jb21wb25lbnRzL0RyYXdpbmdQYWdlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IERyYXdpbmcgfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IGFzc2V0UHJlZml4IH0gZnJvbSAnLi4vbGliL2Fzc2V0UHJlZml4J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IGdldFByZXZpb3VzU2x1ZywgZ2V0TmV4dFNsdWcgfSBmcm9tICcuLi9saWIvZHJhd2luZ3MnXG5cbmV4cG9ydCBjb25zdCBEcmF3aW5nUGFnZTogUmVhY3QuRkM8eyBkcmF3aW5nOiBEcmF3aW5nLCB5ZWFyOiBudW1iZXIgfT4gPSAoeyBkcmF3aW5nLCB5ZWFyIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFRpdGxlPntkcmF3aW5nLnRpdGxlfTwvVGl0bGU+XG4gICAgICA8SW1hZ2VXcmFwPlxuICAgICAgICA8SW1hZ2Ugc3JjPXtgJHthc3NldFByZWZpeH0vaW1hZ2VzLyR7ZHJhd2luZy5pbWFnZX1gfSBhbHQ9e2RyYXdpbmcudGl0bGV9IC8+XG4gICAgICA8L0ltYWdlV3JhcD5cbiAgICAgIDxOYXZCYXI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvZHJhd2luZy9baWRdXCIgYXM9e2AvZHJhd2luZy8ke2dldFByZXZpb3VzU2x1ZyhkcmF3aW5nLnNsdWcpfWB9PlxuICAgICAgICAgIDxBcnJvdz4mbHQ7PC9BcnJvdz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL3llYXIvW2lkXVwiIGFzPXtgL3llYXIvJHt5ZWFyfWB9PlxuICAgICAgICAgIDxZZWFyTGluaz57eWVhcn08L1llYXJMaW5rPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxhIGhyZWY9e2BodHRwOi8vZXhwbG9kaW5nZG9nLmNvbS90aXRsZS8ke2RyYXdpbmcuc2x1Z30uaHRtbGB9PlxuICAgICAgICAgIDxEcmF3aW5nSWQ+I3tkcmF3aW5nLmlkLnNwbGl0KCcuJykuc2xpY2UoLTEpfTwvRHJhd2luZ0lkPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxEYXRlPntkcmF3aW5nLmRhdGV9PC9EYXRlPlxuICAgICAgICA8TGluayBocmVmPVwiL2RyYXdpbmcvW2lkXVwiIGFzPXtgL2RyYXdpbmcvJHtnZXROZXh0U2x1ZyhkcmF3aW5nLnNsdWcpfWB9PlxuICAgICAgICAgIDxBcnJvdz4mZ3Q7PC9BcnJvdz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9OYXZCYXI+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLm1haW4uYXR0cnMoeyBjbGFzc05hbWU6ICdFeHBsb3Jlcl9fRHJhd2luZ1BhZ2VfX0NvbnRhaW5lcid9KWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG5gXG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxLmF0dHJzKHsgY2xhc3NOYW1lOiAnRXhwbG9yZXJfX0RyYXdpbmdQYWdlX19UaXRsZSd9KWBcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTZweCAyNHB4O1xuYFxuXG5jb25zdCBJbWFnZVdyYXAgPSBzdHlsZWQuZmlndXJlLmF0dHJzKHsgY2xhc3NOYW1lOiAnRXhwbG9yZXJfX0RyYXdpbmdQYWdlX19JbWFnZVdyYXAnfSlgXG4gIGZsZXgtZ3JvdzogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYFxuXG5jb25zdCBJbWFnZSA9IHN0eWxlZC5pbWcuYXR0cnMoeyBjbGFzc05hbWU6ICdFeHBsb3Jlcl9fRHJhd2luZ1BhZ2VfX0ltYWdlJ30pYFxuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuYFxuXG5jb25zdCBOYXZCYXIgPSBzdHlsZWQubmF2LmF0dHJzKHsgY2xhc3NOYW1lOiAnRXhwbG9yZXJfX0RyYXdpbmdQYWdlX19IZWFkZXInfSlgXG4gIGNvbG9yOiAjQkJCO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG5gXG5cbmNvbnN0IEFycm93ID0gc3R5bGVkLmRpdi5hdHRycyh7IGNsYXNzTmFtZTogJ0V4cGxvcmVyX19EcmF3aW5nUGFnZV9fQXJyb3cnfSlgXG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcGFkZGluZzogMCAzMnB4O1xuYFxuXG5jb25zdCBZZWFyTGluayA9IHN0eWxlZC5hLmF0dHJzKHsgY2xhc3NOYW1lOiAnRXhwbG9yZXJfX0RyYXdpbmdQYWdlX19ZZWFyTGluayd9KWBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogYmxhY2s7XG5gXG5cbmNvbnN0IERyYXdpbmdJZCA9IHN0eWxlZC5zcGFuLmF0dHJzKHsgY2xhc3NOYW1lOiAnRXhwbG9yZXJfX0RyYXdpbmdQYWdlX19EcmF3aW5nSWQnfSlgYFxuXG5jb25zdCBEYXRlID0gc3R5bGVkLnNwYW4uYXR0cnMoeyBjbGFzc05hbW5lOiAnRXhwbG9yZXJfX0RyYXdpbmdQYWdlX19EYXRlJ30pYGBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DrawingPage.tsx\n");

/***/ })

})