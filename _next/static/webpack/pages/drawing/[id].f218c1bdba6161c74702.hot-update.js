webpackHotUpdate_N_E("pages/drawing/[id]",{

/***/ "./components/DrawingPage/ActionsMenu.tsx":
/*!************************************************!*\
  !*** ./components/DrawingPage/ActionsMenu.tsx ***!
  \************************************************/
/*! exports provided: ActionsMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ActionsMenu\", function() { return ActionsMenu; });\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./components/DrawingPage/styles.tsx\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/pfisher/Code/pwfisher/explodingdog/explorer/components/DrawingPage/ActionsMenu.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar ActionsMenu = function ActionsMenu() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState2 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      isActive = _React$useState2[0],\n      setIsActive = _React$useState2[1];\n\n  var _useCookies = Object(react_cookie__WEBPACK_IMPORTED_MODULE_4__[\"useCookies\"])(['feature__myTags']),\n      _useCookies2 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useCookies, 1),\n      cookies = _useCookies2[0];\n\n  var actions = [];\n\n  if (cookies.feature__myTags === 'on') {\n    actions.push({\n      title: 'Add new tag',\n      onClick: function onClick() {\n        return alert('add new tag');\n      }\n    });\n  }\n\n  return __jsx(Container, {\n    title: \"More Actions\",\n    onClick: function onClick() {\n      return setIsActive(!isActive);\n    },\n    isHidden: !actions.length,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, __jsx(\"svg\", {\n    viewBox: \"0 0 24 24\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(\"circle\", {\n    cx: \"5\",\n    cy: \"12\",\n    r: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }), __jsx(\"circle\", {\n    cx: \"12\",\n    cy: \"12\",\n    r: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }), __jsx(\"circle\", {\n    cx: \"19\",\n    cy: \"12\",\n    r: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  })), __jsx(Popup, {\n    isActive: isActive,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, actions.map(function (action) {\n    return __jsx(Item, {\n      key: action.title,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 11\n      }\n    }, __jsx(\"a\", {\n      onClick: action.onClick,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 36\n      }\n    }, action.title));\n  })));\n};\n\n_s(ActionsMenu, \"UETjDjcjzL1/tRYG7rFULu91oiY=\", false, function () {\n  return [react_cookie__WEBPACK_IMPORTED_MODULE_4__[\"useCookies\"]];\n});\n\n_c = ActionsMenu;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button.attrs({\n  className: 'Explorer__ActionsMenu__Container'\n}).withConfig({\n  displayName: \"ActionsMenu__Container\",\n  componentId: \"sc-1a81ly3-0\"\n})([\"\", \" background:none;border:0;display:\", \";svg{display:block;width:24px;}\"], _styles__WEBPACK_IMPORTED_MODULE_3__[\"navBarItemStyles\"], function (o) {\n  return o.isHidden && 'none';\n});\n_c2 = Container;\nvar Popup = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.attrs({\n  className: 'Explorer__ActionsMenu__Popup'\n}).withConfig({\n  displayName: \"ActionsMenu__Popup\",\n  componentId: \"sc-1a81ly3-1\"\n})([\"background:white;border:1px solid rgba(0,0,0,0.2);bottom:100%;display:\", \";padding:8px;position:absolute;right:0;text-align:left;width:200px;\"], function (o) {\n  return !o.isActive && 'none';\n});\n_c3 = Popup;\nvar Item = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.attrs({\n  className: 'Explorer__ActionsMenu__Item'\n}).withConfig({\n  displayName: \"ActionsMenu__Item\",\n  componentId: \"sc-1a81ly3-2\"\n})([\"\"]);\n_c4 = Item;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"ActionsMenu\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"Popup\");\n$RefreshReg$(_c4, \"Item\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS9BY3Rpb25zTWVudS50c3g/ZDFlZiJdLCJuYW1lcyI6WyJBY3Rpb25zTWVudSIsIlJlYWN0IiwidXNlU3RhdGUiLCJpc0FjdGl2ZSIsInNldElzQWN0aXZlIiwidXNlQ29va2llcyIsImNvb2tpZXMiLCJhY3Rpb25zIiwiZmVhdHVyZV9fbXlUYWdzIiwicHVzaCIsInRpdGxlIiwib25DbGljayIsImFsZXJ0IiwibGVuZ3RoIiwibWFwIiwiYWN0aW9uIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiYnV0dG9uIiwiYXR0cnMiLCJjbGFzc05hbWUiLCJuYXZCYXJJdGVtU3R5bGVzIiwibyIsImlzSGlkZGVuIiwiUG9wdXAiLCJkaXYiLCJJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU9PLElBQU1BLFdBQXFCLEdBQUcsU0FBeEJBLFdBQXdCLEdBQU07QUFBQTs7QUFBQSx3QkFDVEMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FEUztBQUFBO0FBQUEsTUFDbENDLFFBRGtDO0FBQUEsTUFDeEJDLFdBRHdCOztBQUFBLG9CQUV2QkMsK0RBQVUsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FGYTtBQUFBO0FBQUEsTUFFbENDLE9BRmtDOztBQUl6QyxNQUFNQyxPQUFpQixHQUFHLEVBQTFCOztBQUVBLE1BQUlELE9BQU8sQ0FBQ0UsZUFBUixLQUE0QixJQUFoQyxFQUFzQztBQUNwQ0QsV0FBTyxDQUFDRSxJQUFSLENBQWE7QUFBRUMsV0FBSyxFQUFFLGFBQVQ7QUFBd0JDLGFBQU8sRUFBRTtBQUFBLGVBQU1DLEtBQUssQ0FBQyxhQUFELENBQVg7QUFBQTtBQUFqQyxLQUFiO0FBQ0Q7O0FBRUQsU0FDRSxNQUFDLFNBQUQ7QUFBVyxTQUFLLEVBQUMsY0FBakI7QUFBZ0MsV0FBTyxFQUFFO0FBQUEsYUFBTVIsV0FBVyxDQUFDLENBQUNELFFBQUYsQ0FBakI7QUFBQSxLQUF6QztBQUF1RSxZQUFRLEVBQUUsQ0FBQ0ksT0FBTyxDQUFDTSxNQUExRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxXQUFPLEVBQUMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxNQUFFLEVBQUMsR0FBWDtBQUFlLE1BQUUsRUFBQyxJQUFsQjtBQUF1QixLQUFDLEVBQUMsR0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBUSxNQUFFLEVBQUMsSUFBWDtBQUFnQixNQUFFLEVBQUMsSUFBbkI7QUFBd0IsS0FBQyxFQUFDLEdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQVEsTUFBRSxFQUFDLElBQVg7QUFBZ0IsTUFBRSxFQUFDLElBQW5CO0FBQXdCLEtBQUMsRUFBQyxHQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FERixFQU1FLE1BQUMsS0FBRDtBQUFPLFlBQVEsRUFBRVYsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSSxPQUFPLENBQUNPLEdBQVIsQ0FBWSxVQUFBQyxNQUFNO0FBQUEsV0FDakIsTUFBQyxJQUFEO0FBQU0sU0FBRyxFQUFFQSxNQUFNLENBQUNMLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBeUI7QUFBRyxhQUFPLEVBQUVLLE1BQU0sQ0FBQ0osT0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUE2QkksTUFBTSxDQUFDTCxLQUFwQyxDQUF6QixDQURpQjtBQUFBLEdBQWxCLENBREgsQ0FORixDQURGO0FBY0QsQ0F4Qk07O0dBQU1WLFc7VUFFT0ssdUQ7OztLQUZQTCxXO0FBMEJiLElBQU1nQixTQUFTLEdBQUdDLHlEQUFNLENBQUNDLE1BQVAsQ0FBY0MsS0FBZCxDQUFvQjtBQUFFQyxXQUFTLEVBQUU7QUFBYixDQUFwQixDQUFIO0FBQUE7QUFBQTtBQUFBLGtGQUNYQyx3REFEVyxFQUlGLFVBQUFDLENBQUM7QUFBQSxTQUFJQSxDQUFDLENBQUNDLFFBQUYsSUFBYyxNQUFsQjtBQUFBLENBSkMsQ0FBZjtNQUFNUCxTO0FBWU4sSUFBTVEsS0FBSyxHQUFHUCx5REFBTSxDQUFDUSxHQUFQLENBQVdOLEtBQVgsQ0FBaUI7QUFBRUMsV0FBUyxFQUFFO0FBQWIsQ0FBakIsQ0FBSDtBQUFBO0FBQUE7QUFBQSxzSkFJRSxVQUFBRSxDQUFDO0FBQUEsU0FBSSxDQUFDQSxDQUFDLENBQUNuQixRQUFILElBQWUsTUFBbkI7QUFBQSxDQUpILENBQVg7TUFBTXFCLEs7QUFZTixJQUFNRSxJQUFJLEdBQUdULHlEQUFNLENBQUNRLEdBQVAsQ0FBV04sS0FBWCxDQUFpQjtBQUFFQyxXQUFTLEVBQUU7QUFBYixDQUFqQixDQUFIO0FBQUE7QUFBQTtBQUFBLFFBQVY7TUFBTU0sSSIsImZpbGUiOiIuL2NvbXBvbmVudHMvRHJhd2luZ1BhZ2UvQWN0aW9uc01lbnUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IG5hdkJhckl0ZW1TdHlsZXMgfSBmcm9tICcuL3N0eWxlcydcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tICdyZWFjdC1jb29raWUnXG5cbnR5cGUgQWN0aW9uID0ge1xuICB0aXRsZTogc3RyaW5nXG4gIG9uQ2xpY2s6ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IGNvbnN0IEFjdGlvbnNNZW51OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2Nvb2tpZXNdID0gdXNlQ29va2llcyhbJ2ZlYXR1cmVfX215VGFncyddKVxuXG4gIGNvbnN0IGFjdGlvbnM6IEFjdGlvbltdID0gW11cblxuICBpZiAoY29va2llcy5mZWF0dXJlX19teVRhZ3MgPT09ICdvbicpIHtcbiAgICBhY3Rpb25zLnB1c2goeyB0aXRsZTogJ0FkZCBuZXcgdGFnJywgb25DbGljazogKCkgPT4gYWxlcnQoJ2FkZCBuZXcgdGFnJykgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciB0aXRsZT0nTW9yZSBBY3Rpb25zJyBvbkNsaWNrPXsoKSA9PiBzZXRJc0FjdGl2ZSghaXNBY3RpdmUpfSBpc0hpZGRlbj17IWFjdGlvbnMubGVuZ3RofT5cbiAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICA8Y2lyY2xlIGN4PVwiNVwiIGN5PVwiMTJcIiByPVwiMlwiIC8+XG4gICAgICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiMlwiIC8+XG4gICAgICAgIDxjaXJjbGUgY3g9XCIxOVwiIGN5PVwiMTJcIiByPVwiMlwiIC8+XG4gICAgICA8L3N2Zz5cbiAgICAgIDxQb3B1cCBpc0FjdGl2ZT17aXNBY3RpdmV9PlxuICAgICAgICB7YWN0aW9ucy5tYXAoYWN0aW9uID0+IChcbiAgICAgICAgICA8SXRlbSBrZXk9e2FjdGlvbi50aXRsZX0+PGEgb25DbGljaz17YWN0aW9uLm9uQ2xpY2t9PnthY3Rpb24udGl0bGV9PC9hPjwvSXRlbT5cbiAgICAgICAgKSl9XG4gICAgICA8L1BvcHVwPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5idXR0b24uYXR0cnMoeyBjbGFzc05hbWU6ICdFeHBsb3Jlcl9fQWN0aW9uc01lbnVfX0NvbnRhaW5lcid9KTx7IGlzSGlkZGVuOiBib29sZWFuIH0+YFxuICAke25hdkJhckl0ZW1TdHlsZXN9XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogMDtcbiAgZGlzcGxheTogJHtvID0+IG8uaXNIaWRkZW4gJiYgJ25vbmUnfTtcblxuICBzdmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAyNHB4O1xuICB9XG5gXG5cbmNvbnN0IFBvcHVwID0gc3R5bGVkLmRpdi5hdHRycyh7IGNsYXNzTmFtZTogJ0V4cGxvcmVyX19BY3Rpb25zTWVudV9fUG9wdXAnfSk8eyBpc0FjdGl2ZTogYm9vbGVhbiB9PmBcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm90dG9tOiAxMDAlO1xuICBkaXNwbGF5OiAke28gPT4gIW8uaXNBY3RpdmUgJiYgJ25vbmUnfTtcbiAgcGFkZGluZzogOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMjAwcHg7XG5gXG5cbmNvbnN0IEl0ZW0gPSBzdHlsZWQuZGl2LmF0dHJzKHsgY2xhc3NOYW1lOiAnRXhwbG9yZXJfX0FjdGlvbnNNZW51X19JdGVtJ30pYGBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DrawingPage/ActionsMenu.tsx\n");

/***/ })

})