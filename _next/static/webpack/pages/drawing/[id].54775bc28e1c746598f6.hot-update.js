webpackHotUpdate_N_E("pages/drawing/[id]",{

/***/ "./components/DrawingPage/ActionsMenu.tsx":
/*!************************************************!*\
  !*** ./components/DrawingPage/ActionsMenu.tsx ***!
  \************************************************/
/*! exports provided: ActionsMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ActionsMenu\", function() { return ActionsMenu; });\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./components/DrawingPage/styles.tsx\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/pfisher/Code/pwfisher/explodingdog/explorer/components/DrawingPage/ActionsMenu.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar ActionsMenu = function ActionsMenu() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState2 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      isActive = _React$useState2[0],\n      setIsActive = _React$useState2[1];\n\n  var _useCookies = Object(react_cookie__WEBPACK_IMPORTED_MODULE_4__[\"useCookies\"])(['feature__myTags']),\n      _useCookies2 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useCookies, 1),\n      cookies = _useCookies2[0];\n\n  var actions = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]);\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    if (cookies.feature__myTags === 'on') {\n      actions.push({\n        title: 'Add new tag',\n        onClick: function onClick() {\n          return alert('add new tag');\n        }\n      });\n    }\n  }, []);\n  return __jsx(Container, {\n    title: \"Actions\",\n    onClick: function onClick() {\n      return setIsActive(!isActive);\n    },\n    isHidden: !actions.length,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, __jsx(\"svg\", {\n    viewBox: \"0 0 24 24\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, __jsx(\"circle\", {\n    cx: \"5\",\n    cy: \"12\",\n    r: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }), __jsx(\"circle\", {\n    cx: \"12\",\n    cy: \"12\",\n    r: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }), __jsx(\"circle\", {\n    cx: \"19\",\n    cy: \"12\",\n    r: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  })), __jsx(Popup, {\n    isActive: isActive,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, actions.map(function (action) {\n    return __jsx(Item, {\n      key: action.title,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 11\n      }\n    }, __jsx(\"a\", {\n      onClick: action.onClick,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 36\n      }\n    }, action.title));\n  })));\n};\n\n_s(ActionsMenu, \"98+jmVvvvNsBBX/knaE42VRjleQ=\", false, function () {\n  return [react_cookie__WEBPACK_IMPORTED_MODULE_4__[\"useCookies\"]];\n});\n\n_c = ActionsMenu;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button.attrs({\n  className: 'Explorer__ActionsMenu__Container'\n}).withConfig({\n  displayName: \"ActionsMenu__Container\",\n  componentId: \"sc-1a81ly3-0\"\n})([\"\", \" background:none;border:0;display:\", \";svg{display:block;width:24px;}\"], _styles__WEBPACK_IMPORTED_MODULE_3__[\"navBarItemStyles\"], function (o) {\n  return o.isHidden && 'none';\n});\n_c2 = Container;\nvar Popup = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.attrs({\n  className: 'Explorer__ActionsMenu__Popup'\n}).withConfig({\n  displayName: \"ActionsMenu__Popup\",\n  componentId: \"sc-1a81ly3-1\"\n})([\"background:white;border:1px solid rgba(0,0,0,0.2);bottom:100%;display:\", \";padding:8px;position:absolute;right:0;text-align:left;width:200px;\"], function (o) {\n  return !o.isActive && 'none';\n});\n_c3 = Popup;\nvar Item = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.attrs({\n  className: 'Explorer__ActionsMenu__Item'\n}).withConfig({\n  displayName: \"ActionsMenu__Item\",\n  componentId: \"sc-1a81ly3-2\"\n})([\"\"]);\n_c4 = Item;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"ActionsMenu\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"Popup\");\n$RefreshReg$(_c4, \"Item\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS9BY3Rpb25zTWVudS50c3g/ZDFlZiJdLCJuYW1lcyI6WyJBY3Rpb25zTWVudSIsIlJlYWN0IiwidXNlU3RhdGUiLCJpc0FjdGl2ZSIsInNldElzQWN0aXZlIiwidXNlQ29va2llcyIsImNvb2tpZXMiLCJhY3Rpb25zIiwidXNlRWZmZWN0IiwiZmVhdHVyZV9fbXlUYWdzIiwicHVzaCIsInRpdGxlIiwib25DbGljayIsImFsZXJ0IiwibGVuZ3RoIiwibWFwIiwiYWN0aW9uIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiYnV0dG9uIiwiYXR0cnMiLCJjbGFzc05hbWUiLCJuYXZCYXJJdGVtU3R5bGVzIiwibyIsImlzSGlkZGVuIiwiUG9wdXAiLCJkaXYiLCJJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU9PLElBQU1BLFdBQXFCLEdBQUcsU0FBeEJBLFdBQXdCLEdBQU07QUFBQTs7QUFBQSx3QkFDVEMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FEUztBQUFBO0FBQUEsTUFDbENDLFFBRGtDO0FBQUEsTUFDeEJDLFdBRHdCOztBQUFBLG9CQUV2QkMsK0RBQVUsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FGYTtBQUFBO0FBQUEsTUFFbENDLE9BRmtDOztBQUl6QyxNQUFNQyxPQUFPLEdBQUdOLDRDQUFLLENBQUNDLFFBQU4sQ0FBeUIsRUFBekIsQ0FBaEI7QUFFQUQsOENBQUssQ0FBQ08sU0FBTixDQUFnQixZQUFNO0FBQ3BCLFFBQUlGLE9BQU8sQ0FBQ0csZUFBUixLQUE0QixJQUFoQyxFQUFzQztBQUNwQ0YsYUFBTyxDQUFDRyxJQUFSLENBQWE7QUFBRUMsYUFBSyxFQUFFLGFBQVQ7QUFBd0JDLGVBQU8sRUFBRTtBQUFBLGlCQUFNQyxLQUFLLENBQUMsYUFBRCxDQUFYO0FBQUE7QUFBakMsT0FBYjtBQUNEO0FBQ0YsR0FKRCxFQUlHLEVBSkg7QUFNQSxTQUNFLE1BQUMsU0FBRDtBQUFXLFNBQUssRUFBQyxTQUFqQjtBQUEyQixXQUFPLEVBQUU7QUFBQSxhQUFNVCxXQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUFqQjtBQUFBLEtBQXBDO0FBQWtFLFlBQVEsRUFBRSxDQUFDSSxPQUFPLENBQUNPLE1BQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLFdBQU8sRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLE1BQUUsRUFBQyxHQUFYO0FBQWUsTUFBRSxFQUFDLElBQWxCO0FBQXVCLEtBQUMsRUFBQyxHQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFRLE1BQUUsRUFBQyxJQUFYO0FBQWdCLE1BQUUsRUFBQyxJQUFuQjtBQUF3QixLQUFDLEVBQUMsR0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBUSxNQUFFLEVBQUMsSUFBWDtBQUFnQixNQUFFLEVBQUMsSUFBbkI7QUFBd0IsS0FBQyxFQUFDLEdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQURGLEVBTUUsTUFBQyxLQUFEO0FBQU8sWUFBUSxFQUFFWCxRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dJLE9BQU8sQ0FBQ1EsR0FBUixDQUFZLFVBQUFDLE1BQU07QUFBQSxXQUNqQixNQUFDLElBQUQ7QUFBTSxTQUFHLEVBQUVBLE1BQU0sQ0FBQ0wsS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUF5QjtBQUFHLGFBQU8sRUFBRUssTUFBTSxDQUFDSixPQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTZCSSxNQUFNLENBQUNMLEtBQXBDLENBQXpCLENBRGlCO0FBQUEsR0FBbEIsQ0FESCxDQU5GLENBREY7QUFjRCxDQTFCTTs7R0FBTVgsVztVQUVPSyx1RDs7O0tBRlBMLFc7QUE0QmIsSUFBTWlCLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxLQUFkLENBQW9CO0FBQUVDLFdBQVMsRUFBRTtBQUFiLENBQXBCLENBQUg7QUFBQTtBQUFBO0FBQUEsa0ZBQ1hDLHdEQURXLEVBSUYsVUFBQUMsQ0FBQztBQUFBLFNBQUlBLENBQUMsQ0FBQ0MsUUFBRixJQUFjLE1BQWxCO0FBQUEsQ0FKQyxDQUFmO01BQU1QLFM7QUFZTixJQUFNUSxLQUFLLEdBQUdQLHlEQUFNLENBQUNRLEdBQVAsQ0FBV04sS0FBWCxDQUFpQjtBQUFFQyxXQUFTLEVBQUU7QUFBYixDQUFqQixDQUFIO0FBQUE7QUFBQTtBQUFBLHNKQUlFLFVBQUFFLENBQUM7QUFBQSxTQUFJLENBQUNBLENBQUMsQ0FBQ3BCLFFBQUgsSUFBZSxNQUFuQjtBQUFBLENBSkgsQ0FBWDtNQUFNc0IsSztBQVlOLElBQU1FLElBQUksR0FBR1QseURBQU0sQ0FBQ1EsR0FBUCxDQUFXTixLQUFYLENBQWlCO0FBQUVDLFdBQVMsRUFBRTtBQUFiLENBQWpCLENBQUg7QUFBQTtBQUFBO0FBQUEsUUFBVjtNQUFNTSxJIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS9BY3Rpb25zTWVudS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgbmF2QmFySXRlbVN0eWxlcyB9IGZyb20gJy4vc3R5bGVzJ1xuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gJ3JlYWN0LWNvb2tpZSdcblxudHlwZSBBY3Rpb24gPSB7XG4gIHRpdGxlOiBzdHJpbmdcbiAgb25DbGljazogKCkgPT4gdm9pZFxufVxuXG5leHBvcnQgY29uc3QgQWN0aW9uc01lbnU6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbY29va2llc10gPSB1c2VDb29raWVzKFsnZmVhdHVyZV9fbXlUYWdzJ10pXG5cbiAgY29uc3QgYWN0aW9ucyA9IFJlYWN0LnVzZVN0YXRlPEFjdGlvbltdPihbXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb29raWVzLmZlYXR1cmVfX215VGFncyA9PT0gJ29uJykge1xuICAgICAgYWN0aW9ucy5wdXNoKHsgdGl0bGU6ICdBZGQgbmV3IHRhZycsIG9uQ2xpY2s6ICgpID0+IGFsZXJ0KCdhZGQgbmV3IHRhZycpIH0pXG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgdGl0bGU9J0FjdGlvbnMnIG9uQ2xpY2s9eygpID0+IHNldElzQWN0aXZlKCFpc0FjdGl2ZSl9IGlzSGlkZGVuPXshYWN0aW9ucy5sZW5ndGh9PlxuICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgIDxjaXJjbGUgY3g9XCI1XCIgY3k9XCIxMlwiIHI9XCIyXCIgLz5cbiAgICAgICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCIyXCIgLz5cbiAgICAgICAgPGNpcmNsZSBjeD1cIjE5XCIgY3k9XCIxMlwiIHI9XCIyXCIgLz5cbiAgICAgIDwvc3ZnPlxuICAgICAgPFBvcHVwIGlzQWN0aXZlPXtpc0FjdGl2ZX0+XG4gICAgICAgIHthY3Rpb25zLm1hcChhY3Rpb24gPT4gKFxuICAgICAgICAgIDxJdGVtIGtleT17YWN0aW9uLnRpdGxlfT48YSBvbkNsaWNrPXthY3Rpb24ub25DbGlja30+e2FjdGlvbi50aXRsZX08L2E+PC9JdGVtPlxuICAgICAgICApKX1cbiAgICAgIDwvUG9wdXA+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmJ1dHRvbi5hdHRycyh7IGNsYXNzTmFtZTogJ0V4cGxvcmVyX19BY3Rpb25zTWVudV9fQ29udGFpbmVyJ30pPHsgaXNIaWRkZW46IGJvb2xlYW4gfT5gXG4gICR7bmF2QmFySXRlbVN0eWxlc31cbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAwO1xuICBkaXNwbGF5OiAke28gPT4gby5pc0hpZGRlbiAmJiAnbm9uZSd9O1xuXG4gIHN2ZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDI0cHg7XG4gIH1cbmBcblxuY29uc3QgUG9wdXAgPSBzdHlsZWQuZGl2LmF0dHJzKHsgY2xhc3NOYW1lOiAnRXhwbG9yZXJfX0FjdGlvbnNNZW51X19Qb3B1cCd9KTx7IGlzQWN0aXZlOiBib29sZWFuIH0+YFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3R0b206IDEwMCU7XG4gIGRpc3BsYXk6ICR7byA9PiAhby5pc0FjdGl2ZSAmJiAnbm9uZSd9O1xuICBwYWRkaW5nOiA4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAyMDBweDtcbmBcblxuY29uc3QgSXRlbSA9IHN0eWxlZC5kaXYuYXR0cnMoeyBjbGFzc05hbWU6ICdFeHBsb3Jlcl9fQWN0aW9uc01lbnVfX0l0ZW0nfSlgYFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DrawingPage/ActionsMenu.tsx\n");

/***/ })

})