webpackHotUpdate_N_E("pages/drawing/[id]",{

/***/ "./components/DrawingPage/ActionsMenu.tsx":
/*!************************************************!*\
  !*** ./components/DrawingPage/ActionsMenu.tsx ***!
  \************************************************/
/*! exports provided: ActionsMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ActionsMenu\", function() { return ActionsMenu; });\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ \"./components/DrawingPage/styles.tsx\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/pfisher/Code/pwfisher/explodingdog/explorer/components/DrawingPage/ActionsMenu.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nvar ActionsMenu = function ActionsMenu() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),\n      _React$useState2 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      isActive = _React$useState2[0],\n      setIsActive = _React$useState2[1];\n\n  var _useCookies = Object(react_cookie__WEBPACK_IMPORTED_MODULE_5__[\"useCookies\"])(['feature__myTags']),\n      _useCookies2 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useCookies, 1),\n      cookies = _useCookies2[0];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]),\n      _React$useState4 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState3, 2),\n      actions = _React$useState4[0],\n      setActions = _React$useState4[1];\n\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {\n    if (cookies.feature__myTags === 'on') {\n      setActions([].concat(Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(actions), [{\n        title: 'Add new tag',\n        onClick: function onClick() {\n          return alert('add new tag');\n        }\n      }]));\n    }\n\n    if (cookies.feature__myTags === 'off') {\n      setActions(actions.filter(function (o) {\n        return o.title !== 'Add new tag';\n      }));\n    }\n  }, [cookies]);\n  return __jsx(Container, {\n    title: \"Actions\",\n    onClick: function onClick() {\n      return setIsActive(!isActive);\n    },\n    isHidden: !actions.length,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, __jsx(\"svg\", {\n    viewBox: \"0 0 24 24\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, __jsx(\"circle\", {\n    cx: \"5\",\n    cy: \"12\",\n    r: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }), __jsx(\"circle\", {\n    cx: \"12\",\n    cy: \"12\",\n    r: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }), __jsx(\"circle\", {\n    cx: \"19\",\n    cy: \"12\",\n    r: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  })), __jsx(Popup, {\n    isActive: isActive,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, actions.map(function (action) {\n    return __jsx(Item, {\n      key: action.title,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 11\n      }\n    }, __jsx(\"a\", {\n      onClick: action.onClick,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 36\n      }\n    }, action.title));\n  })));\n};\n\n_s(ActionsMenu, \"dMx/NimDBuSK2kBa3t1EUh3bjV8=\", false, function () {\n  return [react_cookie__WEBPACK_IMPORTED_MODULE_5__[\"useCookies\"]];\n});\n\n_c = ActionsMenu;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button.attrs({\n  className: 'Explorer__ActionsMenu__Container'\n}).withConfig({\n  displayName: \"ActionsMenu__Container\",\n  componentId: \"sc-1a81ly3-0\"\n})([\"\", \" background:none;border:0;display:\", \";svg{display:block;width:24px;}\"], _styles__WEBPACK_IMPORTED_MODULE_4__[\"navBarItemStyles\"], function (o) {\n  return o.isHidden && 'none';\n});\n_c2 = Container;\nvar Popup = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.attrs({\n  className: 'Explorer__ActionsMenu__Popup'\n}).withConfig({\n  displayName: \"ActionsMenu__Popup\",\n  componentId: \"sc-1a81ly3-1\"\n})([\"background:white;border:1px solid rgba(0,0,0,0.2);bottom:100%;display:\", \";padding:8px;position:absolute;right:0;text-align:left;width:200px;\"], function (o) {\n  return !o.isActive && 'none';\n});\n_c3 = Popup;\nvar Item = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.attrs({\n  className: 'Explorer__ActionsMenu__Item'\n}).withConfig({\n  displayName: \"ActionsMenu__Item\",\n  componentId: \"sc-1a81ly3-2\"\n})([\"\"]);\n_c4 = Item;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"ActionsMenu\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"Popup\");\n$RefreshReg$(_c4, \"Item\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS9BY3Rpb25zTWVudS50c3g/ZDFlZiJdLCJuYW1lcyI6WyJBY3Rpb25zTWVudSIsIlJlYWN0IiwidXNlU3RhdGUiLCJpc0FjdGl2ZSIsInNldElzQWN0aXZlIiwidXNlQ29va2llcyIsImNvb2tpZXMiLCJhY3Rpb25zIiwic2V0QWN0aW9ucyIsInVzZUVmZmVjdCIsImZlYXR1cmVfX215VGFncyIsInRpdGxlIiwib25DbGljayIsImFsZXJ0IiwiZmlsdGVyIiwibyIsImxlbmd0aCIsIm1hcCIsImFjdGlvbiIsIkNvbnRhaW5lciIsInN0eWxlZCIsImJ1dHRvbiIsImF0dHJzIiwiY2xhc3NOYW1lIiwibmF2QmFySXRlbVN0eWxlcyIsImlzSGlkZGVuIiwiUG9wdXAiLCJkaXYiLCJJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBT08sSUFBTUEsV0FBcUIsR0FBRyxTQUF4QkEsV0FBd0IsR0FBTTtBQUFBOztBQUFBLHdCQUNUQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQURTO0FBQUE7QUFBQSxNQUNsQ0MsUUFEa0M7QUFBQSxNQUN4QkMsV0FEd0I7O0FBQUEsb0JBRXZCQywrREFBVSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUZhO0FBQUE7QUFBQSxNQUVsQ0MsT0FGa0M7O0FBQUEseUJBSVhMLDRDQUFLLENBQUNDLFFBQU4sQ0FBeUIsRUFBekIsQ0FKVztBQUFBO0FBQUEsTUFJbENLLE9BSmtDO0FBQUEsTUFJekJDLFVBSnlCOztBQU16Q1AsOENBQUssQ0FBQ1EsU0FBTixDQUFnQixZQUFNO0FBQ3BCLFFBQUlILE9BQU8sQ0FBQ0ksZUFBUixLQUE0QixJQUFoQyxFQUFzQztBQUNwQ0YsZ0JBQVUsdUtBQUtELE9BQUwsSUFBYztBQUFFSSxhQUFLLEVBQUUsYUFBVDtBQUF3QkMsZUFBTyxFQUFFO0FBQUEsaUJBQU1DLEtBQUssQ0FBQyxhQUFELENBQVg7QUFBQTtBQUFqQyxPQUFkLEdBQVY7QUFDRDs7QUFDRCxRQUFJUCxPQUFPLENBQUNJLGVBQVIsS0FBNEIsS0FBaEMsRUFBdUM7QUFDckNGLGdCQUFVLENBQUNELE9BQU8sQ0FBQ08sTUFBUixDQUFlLFVBQUFDLENBQUM7QUFBQSxlQUFJQSxDQUFDLENBQUNKLEtBQUYsS0FBWSxhQUFoQjtBQUFBLE9BQWhCLENBQUQsQ0FBVjtBQUNEO0FBQ0YsR0FQRCxFQU9HLENBQUNMLE9BQUQsQ0FQSDtBQVNBLFNBQ0UsTUFBQyxTQUFEO0FBQVcsU0FBSyxFQUFDLFNBQWpCO0FBQTJCLFdBQU8sRUFBRTtBQUFBLGFBQU1GLFdBQVcsQ0FBQyxDQUFDRCxRQUFGLENBQWpCO0FBQUEsS0FBcEM7QUFBa0UsWUFBUSxFQUFFLENBQUNJLE9BQU8sQ0FBQ1MsTUFBckY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssV0FBTyxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsTUFBRSxFQUFDLEdBQVg7QUFBZSxNQUFFLEVBQUMsSUFBbEI7QUFBdUIsS0FBQyxFQUFDLEdBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQVEsTUFBRSxFQUFDLElBQVg7QUFBZ0IsTUFBRSxFQUFDLElBQW5CO0FBQXdCLEtBQUMsRUFBQyxHQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFRLE1BQUUsRUFBQyxJQUFYO0FBQWdCLE1BQUUsRUFBQyxJQUFuQjtBQUF3QixLQUFDLEVBQUMsR0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBREYsRUFNRSxNQUFDLEtBQUQ7QUFBTyxZQUFRLEVBQUViLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0ksT0FBTyxDQUFDVSxHQUFSLENBQVksVUFBQUMsTUFBTTtBQUFBLFdBQ2pCLE1BQUMsSUFBRDtBQUFNLFNBQUcsRUFBRUEsTUFBTSxDQUFDUCxLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXlCO0FBQUcsYUFBTyxFQUFFTyxNQUFNLENBQUNOLE9BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBNkJNLE1BQU0sQ0FBQ1AsS0FBcEMsQ0FBekIsQ0FEaUI7QUFBQSxHQUFsQixDQURILENBTkYsQ0FERjtBQWNELENBN0JNOztHQUFNWCxXO1VBRU9LLHVEOzs7S0FGUEwsVztBQStCYixJQUFNbUIsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxNQUFQLENBQWNDLEtBQWQsQ0FBb0I7QUFBRUMsV0FBUyxFQUFFO0FBQWIsQ0FBcEIsQ0FBSDtBQUFBO0FBQUE7QUFBQSxrRkFDWEMsd0RBRFcsRUFJRixVQUFBVCxDQUFDO0FBQUEsU0FBSUEsQ0FBQyxDQUFDVSxRQUFGLElBQWMsTUFBbEI7QUFBQSxDQUpDLENBQWY7TUFBTU4sUztBQVlOLElBQU1PLEtBQUssR0FBR04seURBQU0sQ0FBQ08sR0FBUCxDQUFXTCxLQUFYLENBQWlCO0FBQUVDLFdBQVMsRUFBRTtBQUFiLENBQWpCLENBQUg7QUFBQTtBQUFBO0FBQUEsc0pBSUUsVUFBQVIsQ0FBQztBQUFBLFNBQUksQ0FBQ0EsQ0FBQyxDQUFDWixRQUFILElBQWUsTUFBbkI7QUFBQSxDQUpILENBQVg7TUFBTXVCLEs7QUFZTixJQUFNRSxJQUFJLEdBQUdSLHlEQUFNLENBQUNPLEdBQVAsQ0FBV0wsS0FBWCxDQUFpQjtBQUFFQyxXQUFTLEVBQUU7QUFBYixDQUFqQixDQUFIO0FBQUE7QUFBQTtBQUFBLFFBQVY7TUFBTUssSSIsImZpbGUiOiIuL2NvbXBvbmVudHMvRHJhd2luZ1BhZ2UvQWN0aW9uc01lbnUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IG5hdkJhckl0ZW1TdHlsZXMgfSBmcm9tICcuL3N0eWxlcydcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tICdyZWFjdC1jb29raWUnXG5cbnR5cGUgQWN0aW9uID0ge1xuICB0aXRsZTogc3RyaW5nXG4gIG9uQ2xpY2s6ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IGNvbnN0IEFjdGlvbnNNZW51OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2Nvb2tpZXNdID0gdXNlQ29va2llcyhbJ2ZlYXR1cmVfX215VGFncyddKVxuXG4gIGNvbnN0IFthY3Rpb25zLCBzZXRBY3Rpb25zXSA9IFJlYWN0LnVzZVN0YXRlPEFjdGlvbltdPihbXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjb29raWVzLmZlYXR1cmVfX215VGFncyA9PT0gJ29uJykge1xuICAgICAgc2V0QWN0aW9ucyhbLi4uYWN0aW9ucywgeyB0aXRsZTogJ0FkZCBuZXcgdGFnJywgb25DbGljazogKCkgPT4gYWxlcnQoJ2FkZCBuZXcgdGFnJykgfV0pXG4gICAgfVxuICAgIGlmIChjb29raWVzLmZlYXR1cmVfX215VGFncyA9PT0gJ29mZicpIHtcbiAgICAgIHNldEFjdGlvbnMoYWN0aW9ucy5maWx0ZXIobyA9PiBvLnRpdGxlICE9PSAnQWRkIG5ldyB0YWcnKSlcbiAgICB9XG4gIH0sIFtjb29raWVzXSlcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgdGl0bGU9J0FjdGlvbnMnIG9uQ2xpY2s9eygpID0+IHNldElzQWN0aXZlKCFpc0FjdGl2ZSl9IGlzSGlkZGVuPXshYWN0aW9ucy5sZW5ndGh9PlxuICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgIDxjaXJjbGUgY3g9XCI1XCIgY3k9XCIxMlwiIHI9XCIyXCIgLz5cbiAgICAgICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCIyXCIgLz5cbiAgICAgICAgPGNpcmNsZSBjeD1cIjE5XCIgY3k9XCIxMlwiIHI9XCIyXCIgLz5cbiAgICAgIDwvc3ZnPlxuICAgICAgPFBvcHVwIGlzQWN0aXZlPXtpc0FjdGl2ZX0+XG4gICAgICAgIHthY3Rpb25zLm1hcChhY3Rpb24gPT4gKFxuICAgICAgICAgIDxJdGVtIGtleT17YWN0aW9uLnRpdGxlfT48YSBvbkNsaWNrPXthY3Rpb24ub25DbGlja30+e2FjdGlvbi50aXRsZX08L2E+PC9JdGVtPlxuICAgICAgICApKX1cbiAgICAgIDwvUG9wdXA+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmJ1dHRvbi5hdHRycyh7IGNsYXNzTmFtZTogJ0V4cGxvcmVyX19BY3Rpb25zTWVudV9fQ29udGFpbmVyJ30pPHsgaXNIaWRkZW46IGJvb2xlYW4gfT5gXG4gICR7bmF2QmFySXRlbVN0eWxlc31cbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAwO1xuICBkaXNwbGF5OiAke28gPT4gby5pc0hpZGRlbiAmJiAnbm9uZSd9O1xuXG4gIHN2ZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDI0cHg7XG4gIH1cbmBcblxuY29uc3QgUG9wdXAgPSBzdHlsZWQuZGl2LmF0dHJzKHsgY2xhc3NOYW1lOiAnRXhwbG9yZXJfX0FjdGlvbnNNZW51X19Qb3B1cCd9KTx7IGlzQWN0aXZlOiBib29sZWFuIH0+YFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3R0b206IDEwMCU7XG4gIGRpc3BsYXk6ICR7byA9PiAhby5pc0FjdGl2ZSAmJiAnbm9uZSd9O1xuICBwYWRkaW5nOiA4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAyMDBweDtcbmBcblxuY29uc3QgSXRlbSA9IHN0eWxlZC5kaXYuYXR0cnMoeyBjbGFzc05hbWU6ICdFeHBsb3Jlcl9fQWN0aW9uc01lbnVfX0l0ZW0nfSlgYFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DrawingPage/ActionsMenu.tsx\n");

/***/ })

})