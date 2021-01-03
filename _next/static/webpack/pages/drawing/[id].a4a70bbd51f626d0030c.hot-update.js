webpackHotUpdate_N_E("pages/drawing/[id]",{

/***/ "./components/DrawingPage/ActionsMenu.tsx":
/*!************************************************!*\
  !*** ./components/DrawingPage/ActionsMenu.tsx ***!
  \************************************************/
/*! exports provided: ActionsMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ActionsMenu\", function() { return ActionsMenu; });\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ \"./components/DrawingPage/styles.tsx\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/pfisher/Code/pwfisher/explodingdog/explorer/components/DrawingPage/ActionsMenu.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nvar addNewTag = {\n  title: 'Add new tag',\n  onClick: function onClick() {\n    return alert('add new tag');\n  }\n};\nvar ActionsMenu = function ActionsMenu() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),\n      _React$useState2 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      isActive = _React$useState2[0],\n      setIsActive = _React$useState2[1];\n\n  var _useCookies = Object(react_cookie__WEBPACK_IMPORTED_MODULE_5__[\"useCookies\"])(['feature__myTags']),\n      _useCookies2 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useCookies, 1),\n      cookies = _useCookies2[0];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]),\n      _React$useState4 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState3, 2),\n      actions = _React$useState4[0],\n      setActions = _React$useState4[1];\n\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {\n    console.log(cookies);\n    if (cookies.feature__myTags === 'on') setActions([].concat(Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(actions), [addNewTag]));else setActions(actions.filter(function (o) {\n      return o !== addNewTag;\n    }));\n  }, [cookies]);\n  return __jsx(Container, {\n    title: \"Actions\",\n    onClick: function onClick() {\n      return setIsActive(!isActive);\n    },\n    isHidden: !actions.length,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, __jsx(\"svg\", {\n    viewBox: \"0 0 24 24\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, __jsx(\"circle\", {\n    cx: \"5\",\n    cy: \"12\",\n    r: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }), __jsx(\"circle\", {\n    cx: \"12\",\n    cy: \"12\",\n    r: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }), __jsx(\"circle\", {\n    cx: \"19\",\n    cy: \"12\",\n    r: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  })), __jsx(Popup, {\n    isActive: isActive,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, actions.map(function (action) {\n    return __jsx(Item, {\n      key: action.title,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 11\n      }\n    }, __jsx(\"a\", {\n      onClick: action.onClick,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 36\n      }\n    }, action.title));\n  })));\n};\n\n_s(ActionsMenu, \"dMx/NimDBuSK2kBa3t1EUh3bjV8=\", false, function () {\n  return [react_cookie__WEBPACK_IMPORTED_MODULE_5__[\"useCookies\"]];\n});\n\n_c = ActionsMenu;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button.attrs({\n  className: 'Explorer__ActionsMenu__Container'\n}).withConfig({\n  displayName: \"ActionsMenu__Container\",\n  componentId: \"sc-1a81ly3-0\"\n})([\"\", \" background:none;border:0;display:\", \";svg{display:block;width:24px;}\"], _styles__WEBPACK_IMPORTED_MODULE_4__[\"navBarItemStyles\"], function (o) {\n  return o.isHidden && 'none';\n});\n_c2 = Container;\nvar Popup = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.attrs({\n  className: 'Explorer__ActionsMenu__Popup'\n}).withConfig({\n  displayName: \"ActionsMenu__Popup\",\n  componentId: \"sc-1a81ly3-1\"\n})([\"background:white;border:1px solid rgba(0,0,0,0.2);bottom:100%;display:\", \";padding:8px;position:absolute;right:0;text-align:left;width:200px;\"], function (o) {\n  return !o.isActive && 'none';\n});\n_c3 = Popup;\nvar Item = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.attrs({\n  className: 'Explorer__ActionsMenu__Item'\n}).withConfig({\n  displayName: \"ActionsMenu__Item\",\n  componentId: \"sc-1a81ly3-2\"\n})([\"\"]);\n_c4 = Item;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"ActionsMenu\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"Popup\");\n$RefreshReg$(_c4, \"Item\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS9BY3Rpb25zTWVudS50c3g/ZDFlZiJdLCJuYW1lcyI6WyJhZGROZXdUYWciLCJ0aXRsZSIsIm9uQ2xpY2siLCJhbGVydCIsIkFjdGlvbnNNZW51IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImlzQWN0aXZlIiwic2V0SXNBY3RpdmUiLCJ1c2VDb29raWVzIiwiY29va2llcyIsImFjdGlvbnMiLCJzZXRBY3Rpb25zIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImZlYXR1cmVfX215VGFncyIsImZpbHRlciIsIm8iLCJsZW5ndGgiLCJtYXAiLCJhY3Rpb24iLCJDb250YWluZXIiLCJzdHlsZWQiLCJidXR0b24iLCJhdHRycyIsImNsYXNzTmFtZSIsIm5hdkJhckl0ZW1TdHlsZXMiLCJpc0hpZGRlbiIsIlBvcHVwIiwiZGl2IiwiSXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU9BLElBQU1BLFNBQWlCLEdBQUc7QUFBRUMsT0FBSyxFQUFFLGFBQVQ7QUFBd0JDLFNBQU8sRUFBRTtBQUFBLFdBQU1DLEtBQUssQ0FBQyxhQUFELENBQVg7QUFBQTtBQUFqQyxDQUExQjtBQUVPLElBQU1DLFdBQXFCLEdBQUcsU0FBeEJBLFdBQXdCLEdBQU07QUFBQTs7QUFBQSx3QkFDVEMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FEUztBQUFBO0FBQUEsTUFDbENDLFFBRGtDO0FBQUEsTUFDeEJDLFdBRHdCOztBQUFBLG9CQUV2QkMsK0RBQVUsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FGYTtBQUFBO0FBQUEsTUFFbENDLE9BRmtDOztBQUFBLHlCQUlYTCw0Q0FBSyxDQUFDQyxRQUFOLENBQXlCLEVBQXpCLENBSlc7QUFBQTtBQUFBLE1BSWxDSyxPQUprQztBQUFBLE1BSXpCQyxVQUp5Qjs7QUFNekNQLDhDQUFLLENBQUNRLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQkMsV0FBTyxDQUFDQyxHQUFSLENBQVlMLE9BQVo7QUFDQSxRQUFJQSxPQUFPLENBQUNNLGVBQVIsS0FBNEIsSUFBaEMsRUFBc0NKLFVBQVUsdUtBQUtELE9BQUwsSUFBY1gsU0FBZCxHQUFWLENBQXRDLEtBQ0tZLFVBQVUsQ0FBQ0QsT0FBTyxDQUFDTSxNQUFSLENBQWUsVUFBQUMsQ0FBQztBQUFBLGFBQUlBLENBQUMsS0FBS2xCLFNBQVY7QUFBQSxLQUFoQixDQUFELENBQVY7QUFDTixHQUpELEVBSUcsQ0FBQ1UsT0FBRCxDQUpIO0FBTUEsU0FDRSxNQUFDLFNBQUQ7QUFBVyxTQUFLLEVBQUMsU0FBakI7QUFBMkIsV0FBTyxFQUFFO0FBQUEsYUFBTUYsV0FBVyxDQUFDLENBQUNELFFBQUYsQ0FBakI7QUFBQSxLQUFwQztBQUFrRSxZQUFRLEVBQUUsQ0FBQ0ksT0FBTyxDQUFDUSxNQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxXQUFPLEVBQUMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxNQUFFLEVBQUMsR0FBWDtBQUFlLE1BQUUsRUFBQyxJQUFsQjtBQUF1QixLQUFDLEVBQUMsR0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBUSxNQUFFLEVBQUMsSUFBWDtBQUFnQixNQUFFLEVBQUMsSUFBbkI7QUFBd0IsS0FBQyxFQUFDLEdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQVEsTUFBRSxFQUFDLElBQVg7QUFBZ0IsTUFBRSxFQUFDLElBQW5CO0FBQXdCLEtBQUMsRUFBQyxHQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FERixFQU1FLE1BQUMsS0FBRDtBQUFPLFlBQVEsRUFBRVosUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSSxPQUFPLENBQUNTLEdBQVIsQ0FBWSxVQUFBQyxNQUFNO0FBQUEsV0FDakIsTUFBQyxJQUFEO0FBQU0sU0FBRyxFQUFFQSxNQUFNLENBQUNwQixLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXlCO0FBQUcsYUFBTyxFQUFFb0IsTUFBTSxDQUFDbkIsT0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUE2Qm1CLE1BQU0sQ0FBQ3BCLEtBQXBDLENBQXpCLENBRGlCO0FBQUEsR0FBbEIsQ0FESCxDQU5GLENBREY7QUFjRCxDQTFCTTs7R0FBTUcsVztVQUVPSyx1RDs7O0tBRlBMLFc7QUE0QmIsSUFBTWtCLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxLQUFkLENBQW9CO0FBQUVDLFdBQVMsRUFBRTtBQUFiLENBQXBCLENBQUg7QUFBQTtBQUFBO0FBQUEsa0ZBQ1hDLHdEQURXLEVBSUYsVUFBQVQsQ0FBQztBQUFBLFNBQUlBLENBQUMsQ0FBQ1UsUUFBRixJQUFjLE1BQWxCO0FBQUEsQ0FKQyxDQUFmO01BQU1OLFM7QUFZTixJQUFNTyxLQUFLLEdBQUdOLHlEQUFNLENBQUNPLEdBQVAsQ0FBV0wsS0FBWCxDQUFpQjtBQUFFQyxXQUFTLEVBQUU7QUFBYixDQUFqQixDQUFIO0FBQUE7QUFBQTtBQUFBLHNKQUlFLFVBQUFSLENBQUM7QUFBQSxTQUFJLENBQUNBLENBQUMsQ0FBQ1gsUUFBSCxJQUFlLE1BQW5CO0FBQUEsQ0FKSCxDQUFYO01BQU1zQixLO0FBWU4sSUFBTUUsSUFBSSxHQUFHUix5REFBTSxDQUFDTyxHQUFQLENBQVdMLEtBQVgsQ0FBaUI7QUFBRUMsV0FBUyxFQUFFO0FBQWIsQ0FBakIsQ0FBSDtBQUFBO0FBQUE7QUFBQSxRQUFWO01BQU1LLEkiLCJmaWxlIjoiLi9jb21wb25lbnRzL0RyYXdpbmdQYWdlL0FjdGlvbnNNZW51LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBuYXZCYXJJdGVtU3R5bGVzIH0gZnJvbSAnLi9zdHlsZXMnXG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJ1xuXG50eXBlIEFjdGlvbiA9IHtcbiAgdGl0bGU6IHN0cmluZ1xuICBvbkNsaWNrOiAoKSA9PiB2b2lkXG59XG5cbmNvbnN0IGFkZE5ld1RhZzogQWN0aW9uID0geyB0aXRsZTogJ0FkZCBuZXcgdGFnJywgb25DbGljazogKCkgPT4gYWxlcnQoJ2FkZCBuZXcgdGFnJykgfVxuXG5leHBvcnQgY29uc3QgQWN0aW9uc01lbnU6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbY29va2llc10gPSB1c2VDb29raWVzKFsnZmVhdHVyZV9fbXlUYWdzJ10pXG5cbiAgY29uc3QgW2FjdGlvbnMsIHNldEFjdGlvbnNdID0gUmVhY3QudXNlU3RhdGU8QWN0aW9uW10+KFtdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coY29va2llcylcbiAgICBpZiAoY29va2llcy5mZWF0dXJlX19teVRhZ3MgPT09ICdvbicpIHNldEFjdGlvbnMoWy4uLmFjdGlvbnMsIGFkZE5ld1RhZ10pXG4gICAgZWxzZSBzZXRBY3Rpb25zKGFjdGlvbnMuZmlsdGVyKG8gPT4gbyAhPT0gYWRkTmV3VGFnKSlcbiAgfSwgW2Nvb2tpZXNdKVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciB0aXRsZT0nQWN0aW9ucycgb25DbGljaz17KCkgPT4gc2V0SXNBY3RpdmUoIWlzQWN0aXZlKX0gaXNIaWRkZW49eyFhY3Rpb25zLmxlbmd0aH0+XG4gICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgPGNpcmNsZSBjeD1cIjVcIiBjeT1cIjEyXCIgcj1cIjJcIiAvPlxuICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjJcIiAvPlxuICAgICAgICA8Y2lyY2xlIGN4PVwiMTlcIiBjeT1cIjEyXCIgcj1cIjJcIiAvPlxuICAgICAgPC9zdmc+XG4gICAgICA8UG9wdXAgaXNBY3RpdmU9e2lzQWN0aXZlfT5cbiAgICAgICAge2FjdGlvbnMubWFwKGFjdGlvbiA9PiAoXG4gICAgICAgICAgPEl0ZW0ga2V5PXthY3Rpb24udGl0bGV9PjxhIG9uQ2xpY2s9e2FjdGlvbi5vbkNsaWNrfT57YWN0aW9uLnRpdGxlfTwvYT48L0l0ZW0+XG4gICAgICAgICkpfVxuICAgICAgPC9Qb3B1cD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuYnV0dG9uLmF0dHJzKHsgY2xhc3NOYW1lOiAnRXhwbG9yZXJfX0FjdGlvbnNNZW51X19Db250YWluZXInfSk8eyBpc0hpZGRlbjogYm9vbGVhbiB9PmBcbiAgJHtuYXZCYXJJdGVtU3R5bGVzfVxuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IDA7XG4gIGRpc3BsYXk6ICR7byA9PiBvLmlzSGlkZGVuICYmICdub25lJ307XG5cbiAgc3ZnIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjRweDtcbiAgfVxuYFxuXG5jb25zdCBQb3B1cCA9IHN0eWxlZC5kaXYuYXR0cnMoeyBjbGFzc05hbWU6ICdFeHBsb3Jlcl9fQWN0aW9uc01lbnVfX1BvcHVwJ30pPHsgaXNBY3RpdmU6IGJvb2xlYW4gfT5gXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvdHRvbTogMTAwJTtcbiAgZGlzcGxheTogJHtvID0+ICFvLmlzQWN0aXZlICYmICdub25lJ307XG4gIHBhZGRpbmc6IDhweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDIwMHB4O1xuYFxuXG5jb25zdCBJdGVtID0gc3R5bGVkLmRpdi5hdHRycyh7IGNsYXNzTmFtZTogJ0V4cGxvcmVyX19BY3Rpb25zTWVudV9fSXRlbSd9KWBgXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DrawingPage/ActionsMenu.tsx\n");

/***/ })

})