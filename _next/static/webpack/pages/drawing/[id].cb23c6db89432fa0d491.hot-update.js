webpackHotUpdate_N_E("pages/drawing/[id]",{

/***/ "./components/DrawingPage.tsx":
/*!************************************!*\
  !*** ./components/DrawingPage.tsx ***!
  \************************************/
/*! exports provided: DrawingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DrawingPage\", function() { return DrawingPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_assetPrefix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/assetPrefix */ \"./lib/assetPrefix.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/pfisher/Code/pwfisher/explodingdog/explorer/components/DrawingPage.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar DrawingPage = function DrawingPage(_ref) {\n  var drawing = _ref.drawing,\n      year = _ref.year;\n\n  var onLeftClick = function onLeftClick() {\n    return console.log('onLeftClick');\n  };\n\n  var onRightClick = function onRightClick() {\n    return console.log('onRightClick');\n  };\n\n  return __jsx(Container, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, __jsx(Header, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, __jsx(Arrow, {\n    onClick: onLeftClick,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 11\n    }\n  }, \"<\"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/year/[id]\",\n    as: \"/year/\".concat(year),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 11\n    }\n  }, __jsx(YearHeading, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }\n  }, year)), __jsx(Arrow, {\n    onClick: onRightClick,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 11\n    }\n  }, \">\")), __jsx(Title, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, drawing.title)), __jsx(ImageWrap, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, __jsx(Image, {\n    src: \"\".concat(_lib_assetPrefix__WEBPACK_IMPORTED_MODULE_2__[\"assetPrefix\"], \"/images/\").concat(drawing.image),\n    alt: drawing.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  })), __jsx(\"a\", {\n    href: \"http://explodingdog.com/title/\".concat(drawing.slug, \".html\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, __jsx(Date, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, drawing.date)));\n};\n_c = DrawingPage;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].main.attrs({\n  className: 'Explorer__DrawingPage__Container'\n}).withConfig({\n  displayName: \"DrawingPage__Container\",\n  componentId: \"sc-1qbzvd7-0\"\n})([\"display:flex;flex-direction:column;justify-content:space-between;min-height:100vh;max-height:100vh;\"]);\n_c2 = Container;\nvar Header = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].header.attrs({\n  className: 'Explorer__DrawingPage__Header'\n}).withConfig({\n  displayName: \"DrawingPage__Header\",\n  componentId: \"sc-1qbzvd7-1\"\n})([\"display:flex;justify-content:space-between;font-size:16px;font-weight:bold;height:24px;line-height:24px;\"]);\n_c3 = Header;\nvar Arrow = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button.attrs({\n  className: 'Explorer__DrawingPage__Arrow'\n}).withConfig({\n  displayName: \"DrawingPage__Arrow\",\n  componentId: \"sc-1qbzvd7-2\"\n})([\"padding:0 32px;\"]);\n_c4 = Arrow;\nvar YearHeading = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].a.attrs({\n  className: 'Explorer__DrawingPage__YearHeading'\n}).withConfig({\n  displayName: \"DrawingPage__YearHeading\",\n  componentId: \"sc-1qbzvd7-3\"\n})([\"cursor:pointer;\"]);\n_c5 = YearHeading;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h1.attrs({\n  className: 'Explorer__DrawingPage__Title'\n}).withConfig({\n  displayName: \"DrawingPage__Title\",\n  componentId: \"sc-1qbzvd7-4\"\n})([\"font-size:36px;font-weight:bold;padding:8px 24px;\"]);\n_c6 = Title;\nvar ImageWrap = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].figure.attrs({\n  className: 'Explorer__DrawingPage__ImageWrap'\n}).withConfig({\n  displayName: \"DrawingPage__ImageWrap\",\n  componentId: \"sc-1qbzvd7-5\"\n})([\"flex-grow:1;position:relative;\"]);\n_c7 = ImageWrap;\nvar Image = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].img.attrs({\n  className: 'Explorer__DrawingPage__Image'\n}).withConfig({\n  displayName: \"DrawingPage__Image\",\n  componentId: \"sc-1qbzvd7-6\"\n})([\"display:block;height:100%;object-fit:contain;position:absolute;width:100%;\"]);\n_c8 = Image;\nvar Date = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.attrs({\n  classNamne: 'Explorer__DrawingPage__Date'\n}).withConfig({\n  displayName: \"DrawingPage__Date\",\n  componentId: \"sc-1qbzvd7-7\"\n})([\"color:#BBB;font-size:12px;\"]);\n_c9 = Date;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;\n\n$RefreshReg$(_c, \"DrawingPage\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"Header\");\n$RefreshReg$(_c4, \"Arrow\");\n$RefreshReg$(_c5, \"YearHeading\");\n$RefreshReg$(_c6, \"Title\");\n$RefreshReg$(_c7, \"ImageWrap\");\n$RefreshReg$(_c8, \"Image\");\n$RefreshReg$(_c9, \"Date\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS50c3g/MTljYyJdLCJuYW1lcyI6WyJEcmF3aW5nUGFnZSIsImRyYXdpbmciLCJ5ZWFyIiwib25MZWZ0Q2xpY2siLCJjb25zb2xlIiwibG9nIiwib25SaWdodENsaWNrIiwidGl0bGUiLCJhc3NldFByZWZpeCIsImltYWdlIiwic2x1ZyIsImRhdGUiLCJDb250YWluZXIiLCJzdHlsZWQiLCJtYWluIiwiYXR0cnMiLCJjbGFzc05hbWUiLCJIZWFkZXIiLCJoZWFkZXIiLCJBcnJvdyIsImJ1dHRvbiIsIlllYXJIZWFkaW5nIiwiYSIsIlRpdGxlIiwiaDEiLCJJbWFnZVdyYXAiLCJmaWd1cmUiLCJJbWFnZSIsImltZyIsIkRhdGUiLCJkaXYiLCJjbGFzc05hbW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFdBQXlELEdBQUcsU0FBNURBLFdBQTRELE9BQXVCO0FBQUEsTUFBcEJDLE9BQW9CLFFBQXBCQSxPQUFvQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFDOUYsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxXQUFNQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLENBQU47QUFBQSxHQUFwQjs7QUFDQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLFdBQU1GLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosQ0FBTjtBQUFBLEdBQXJCOztBQUNBLFNBQ0UsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLEtBQUQ7QUFBTyxXQUFPLEVBQUVGLFdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERixFQUVFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsWUFBWDtBQUF3QixNQUFFLGtCQUFXRCxJQUFYLENBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFjQSxJQUFkLENBREYsQ0FGRixFQUtFLE1BQUMsS0FBRDtBQUFPLFdBQU8sRUFBRUksWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUxGLENBREYsRUFRRSxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRTCxPQUFPLENBQUNNLEtBQWhCLENBUkYsQ0FERixFQVdFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxLQUFEO0FBQU8sT0FBRyxZQUFLQyw0REFBTCxxQkFBMkJQLE9BQU8sQ0FBQ1EsS0FBbkMsQ0FBVjtBQUFzRCxPQUFHLEVBQUVSLE9BQU8sQ0FBQ00sS0FBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBWEYsRUFjRTtBQUFHLFFBQUksMENBQW1DTixPQUFPLENBQUNTLElBQTNDLFVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9ULE9BQU8sQ0FBQ1UsSUFBZixDQURGLENBZEYsQ0FERjtBQW9CRCxDQXZCTTtLQUFNWCxXO0FBeUJiLElBQU1ZLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsSUFBUCxDQUFZQyxLQUFaLENBQWtCO0FBQUVDLFdBQVMsRUFBRTtBQUFiLENBQWxCLENBQUg7QUFBQTtBQUFBO0FBQUEsMkdBQWY7TUFBTUosUztBQVFOLElBQU1LLE1BQU0sR0FBR0oseURBQU0sQ0FBQ0ssTUFBUCxDQUFjSCxLQUFkLENBQW9CO0FBQUVDLFdBQVMsRUFBRTtBQUFiLENBQXBCLENBQUg7QUFBQTtBQUFBO0FBQUEsZ0hBQVo7TUFBTUMsTTtBQVNOLElBQU1FLEtBQUssR0FBR04seURBQU0sQ0FBQ08sTUFBUCxDQUFjTCxLQUFkLENBQW9CO0FBQUVDLFdBQVMsRUFBRTtBQUFiLENBQXBCLENBQUg7QUFBQTtBQUFBO0FBQUEsdUJBQVg7TUFBTUcsSztBQUlOLElBQU1FLFdBQVcsR0FBR1IseURBQU0sQ0FBQ1MsQ0FBUCxDQUFTUCxLQUFULENBQWU7QUFBRUMsV0FBUyxFQUFFO0FBQWIsQ0FBZixDQUFIO0FBQUE7QUFBQTtBQUFBLHVCQUFqQjtNQUFNSyxXO0FBSU4sSUFBTUUsS0FBSyxHQUFHVix5REFBTSxDQUFDVyxFQUFQLENBQVVULEtBQVYsQ0FBZ0I7QUFBRUMsV0FBUyxFQUFFO0FBQWIsQ0FBaEIsQ0FBSDtBQUFBO0FBQUE7QUFBQSx5REFBWDtNQUFNTyxLO0FBTU4sSUFBTUUsU0FBUyxHQUFHWix5REFBTSxDQUFDYSxNQUFQLENBQWNYLEtBQWQsQ0FBb0I7QUFBRUMsV0FBUyxFQUFFO0FBQWIsQ0FBcEIsQ0FBSDtBQUFBO0FBQUE7QUFBQSxzQ0FBZjtNQUFNUyxTO0FBS04sSUFBTUUsS0FBSyxHQUFHZCx5REFBTSxDQUFDZSxHQUFQLENBQVdiLEtBQVgsQ0FBaUI7QUFBRUMsV0FBUyxFQUFFO0FBQWIsQ0FBakIsQ0FBSDtBQUFBO0FBQUE7QUFBQSxrRkFBWDtNQUFNVyxLO0FBUU4sSUFBTUUsSUFBSSxHQUFHaEIseURBQU0sQ0FBQ2lCLEdBQVAsQ0FBV2YsS0FBWCxDQUFpQjtBQUFFZ0IsWUFBVSxFQUFFO0FBQWQsQ0FBakIsQ0FBSDtBQUFBO0FBQUE7QUFBQSxrQ0FBVjtNQUFNRixJIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBEcmF3aW5nIH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBhc3NldFByZWZpeCB9IGZyb20gJy4uL2xpYi9hc3NldFByZWZpeCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBEcmF3aW5nUGFnZTogUmVhY3QuRkM8eyBkcmF3aW5nOiBEcmF3aW5nLCB5ZWFyOiBudW1iZXIgfT4gPSAoeyBkcmF3aW5nLCB5ZWFyIH0pID0+IHtcbiAgY29uc3Qgb25MZWZ0Q2xpY2sgPSAoKSA9PiBjb25zb2xlLmxvZygnb25MZWZ0Q2xpY2snKVxuICBjb25zdCBvblJpZ2h0Q2xpY2sgPSAoKSA9PiBjb25zb2xlLmxvZygnb25SaWdodENsaWNrJylcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWRlcj5cbiAgICAgICAgICA8QXJyb3cgb25DbGljaz17b25MZWZ0Q2xpY2t9PiZsdDs8L0Fycm93PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIveWVhci9baWRdXCIgYXM9e2AveWVhci8ke3llYXJ9YH0+XG4gICAgICAgICAgICA8WWVhckhlYWRpbmc+e3llYXJ9PC9ZZWFySGVhZGluZz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPEFycm93IG9uQ2xpY2s9e29uUmlnaHRDbGlja30+Jmd0OzwvQXJyb3c+XG4gICAgICAgIDwvSGVhZGVyPlxuICAgICAgICA8VGl0bGU+e2RyYXdpbmcudGl0bGV9PC9UaXRsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPEltYWdlV3JhcD5cbiAgICAgICAgPEltYWdlIHNyYz17YCR7YXNzZXRQcmVmaXh9L2ltYWdlcy8ke2RyYXdpbmcuaW1hZ2V9YH0gYWx0PXtkcmF3aW5nLnRpdGxlfSAvPlxuICAgICAgPC9JbWFnZVdyYXA+XG4gICAgICA8YSBocmVmPXtgaHR0cDovL2V4cGxvZGluZ2RvZy5jb20vdGl0bGUvJHtkcmF3aW5nLnNsdWd9Lmh0bWxgfT5cbiAgICAgICAgPERhdGU+e2RyYXdpbmcuZGF0ZX08L0RhdGU+XG4gICAgICA8L2E+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLm1haW4uYXR0cnMoeyBjbGFzc05hbWU6ICdFeHBsb3Jlcl9fRHJhd2luZ1BhZ2VfX0NvbnRhaW5lcid9KWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG5gXG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXIuYXR0cnMoeyBjbGFzc05hbWU6ICdFeHBsb3Jlcl9fRHJhd2luZ1BhZ2VfX0hlYWRlcid9KWBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBoZWlnaHQ6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuYFxuXG5jb25zdCBBcnJvdyA9IHN0eWxlZC5idXR0b24uYXR0cnMoeyBjbGFzc05hbWU6ICdFeHBsb3Jlcl9fRHJhd2luZ1BhZ2VfX0Fycm93J30pYFxuICBwYWRkaW5nOiAwIDMycHg7XG5gXG5cbmNvbnN0IFllYXJIZWFkaW5nID0gc3R5bGVkLmEuYXR0cnMoeyBjbGFzc05hbWU6ICdFeHBsb3Jlcl9fRHJhd2luZ1BhZ2VfX1llYXJIZWFkaW5nJ30pYFxuICBjdXJzb3I6IHBvaW50ZXI7XG5gXG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxLmF0dHJzKHsgY2xhc3NOYW1lOiAnRXhwbG9yZXJfX0RyYXdpbmdQYWdlX19UaXRsZSd9KWBcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogOHB4IDI0cHg7XG5gXG5cbmNvbnN0IEltYWdlV3JhcCA9IHN0eWxlZC5maWd1cmUuYXR0cnMoeyBjbGFzc05hbWU6ICdFeHBsb3Jlcl9fRHJhd2luZ1BhZ2VfX0ltYWdlV3JhcCd9KWBcbiAgZmxleC1ncm93OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gXG5cbmNvbnN0IEltYWdlID0gc3R5bGVkLmltZy5hdHRycyh7IGNsYXNzTmFtZTogJ0V4cGxvcmVyX19EcmF3aW5nUGFnZV9fSW1hZ2UnfSlgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG5gXG5cbmNvbnN0IERhdGUgPSBzdHlsZWQuZGl2LmF0dHJzKHsgY2xhc3NOYW1uZTogJ0V4cGxvcmVyX19EcmF3aW5nUGFnZV9fRGF0ZSd9KWBcbiAgY29sb3I6ICNCQkI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbmBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DrawingPage.tsx\n");

/***/ })

})