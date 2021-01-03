webpackHotUpdate_N_E("pages/drawing/[id]",{

/***/ "./components/DrawingPage/ActionsMenu.tsx":
/*!************************************************!*\
  !*** ./components/DrawingPage/ActionsMenu.tsx ***!
  \************************************************/
/*! exports provided: ActionsMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ActionsMenu\", function() { return ActionsMenu; });\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./components/DrawingPage/styles.tsx\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var _AddTagModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AddTagModal */ \"./components/DrawingPage/AddTagModal.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/pfisher/Code/pwfisher/explodingdog/explorer/components/DrawingPage/ActionsMenu.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar ActionsMenu = function ActionsMenu(_ref) {\n  _s();\n\n  var drawing = _ref.drawing;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState2 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      isActive = _React$useState2[0],\n      setIsActive = _React$useState2[1];\n\n  var _useCookies = Object(react_cookie__WEBPACK_IMPORTED_MODULE_4__[\"useCookies\"])(['feature__myTags']),\n      _useCookies2 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useCookies, 1),\n      cookies = _useCookies2[0];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]),\n      _React$useState4 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      actions = _React$useState4[0],\n      setActions = _React$useState4[1];\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState6 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState5, 2),\n      isAddTagModalOpen = _React$useState6[0],\n      setIsAddTagModalOpen = _React$useState6[1];\n\n  var toggleAddTagModal = function toggleAddTagModal() {\n    return setIsAddTagModalOpen(!isAddTagModalOpen);\n  };\n\n  var addNewTag = {\n    title: 'Add new tag',\n    onClick: toggleAddTagModal\n  };\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    var newActions = [];\n    if (cookies.feature__myTags === 'on') newActions.push(addNewTag);\n    setActions(newActions);\n  }, [cookies]);\n  return __jsx(Container, {\n    title: \"Actions\",\n    onClick: function onClick() {\n      return setIsActive(!isActive);\n    },\n    isHidden: !actions.length,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, __jsx(\"svg\", {\n    viewBox: \"0 0 24 24\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, __jsx(\"circle\", {\n    cx: \"5\",\n    cy: \"12\",\n    r: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }), __jsx(\"circle\", {\n    cx: \"12\",\n    cy: \"12\",\n    r: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }), __jsx(\"circle\", {\n    cx: \"19\",\n    cy: \"12\",\n    r: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  })), __jsx(Popup, {\n    isActive: isActive,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, actions.map(function (action) {\n    return __jsx(Item, {\n      key: action.title,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 11\n      }\n    }, __jsx(\"button\", {\n      onClick: action.onClick,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 36\n      }\n    }, action.title));\n  })), __jsx(_AddTagModal__WEBPACK_IMPORTED_MODULE_5__[\"AddTagModal\"], {\n    drawing: drawing,\n    isOpen: isAddTagModalOpen,\n    closeModal: toggleAddTagModal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(ActionsMenu, \"EFrLjVk+DpagnlZJljoc/W1Op54=\", false, function () {\n  return [react_cookie__WEBPACK_IMPORTED_MODULE_4__[\"useCookies\"]];\n});\n\n_c = ActionsMenu;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button.attrs({\n  className: 'Explorer__ActionsMenu__Container'\n}).withConfig({\n  displayName: \"ActionsMenu__Container\",\n  componentId: \"sc-1a81ly3-0\"\n})([\"\", \" background:none;border:0;display:\", \";svg{display:block;width:24px;}\"], _styles__WEBPACK_IMPORTED_MODULE_3__[\"navBarItemStyles\"], function (o) {\n  return o.isHidden && 'none';\n});\n_c2 = Container;\nvar Popup = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.attrs({\n  className: 'Explorer__ActionsMenu__Popup'\n}).withConfig({\n  displayName: \"ActionsMenu__Popup\",\n  componentId: \"sc-1a81ly3-1\"\n})([\"background:white;border:1px solid rgba(0,0,0,0.2);bottom:100%;display:\", \";padding:8px;position:absolute;right:0;text-align:right;width:200px;\"], function (o) {\n  return !o.isActive && 'none';\n});\n_c3 = Popup;\nvar Item = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.attrs({\n  className: 'Explorer__ActionsMenu__Item'\n}).withConfig({\n  displayName: \"ActionsMenu__Item\",\n  componentId: \"sc-1a81ly3-2\"\n})([\"text-align:left;\"]);\n_c4 = Item;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"ActionsMenu\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"Popup\");\n$RefreshReg$(_c4, \"Item\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS9BY3Rpb25zTWVudS50c3g/ZDFlZiJdLCJuYW1lcyI6WyJBY3Rpb25zTWVudSIsImRyYXdpbmciLCJSZWFjdCIsInVzZVN0YXRlIiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsInVzZUNvb2tpZXMiLCJjb29raWVzIiwiYWN0aW9ucyIsInNldEFjdGlvbnMiLCJpc0FkZFRhZ01vZGFsT3BlbiIsInNldElzQWRkVGFnTW9kYWxPcGVuIiwidG9nZ2xlQWRkVGFnTW9kYWwiLCJhZGROZXdUYWciLCJ0aXRsZSIsIm9uQ2xpY2siLCJ1c2VFZmZlY3QiLCJuZXdBY3Rpb25zIiwiZmVhdHVyZV9fbXlUYWdzIiwicHVzaCIsImxlbmd0aCIsIm1hcCIsImFjdGlvbiIsIkNvbnRhaW5lciIsInN0eWxlZCIsImJ1dHRvbiIsImF0dHJzIiwiY2xhc3NOYW1lIiwibmF2QmFySXRlbVN0eWxlcyIsIm8iLCJpc0hpZGRlbiIsIlBvcHVwIiwiZGl2IiwiSXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFPTyxJQUFNQSxXQUEyQyxHQUFHLFNBQTlDQSxXQUE4QyxPQUFpQjtBQUFBOztBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFBQSx3QkFDMUNDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRDBDO0FBQUE7QUFBQSxNQUNuRUMsUUFEbUU7QUFBQSxNQUN6REMsV0FEeUQ7O0FBQUEsb0JBRXhEQywrREFBVSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUY4QztBQUFBO0FBQUEsTUFFbkVDLE9BRm1FOztBQUFBLHlCQUc1Q0wsNENBQUssQ0FBQ0MsUUFBTixDQUF5QixFQUF6QixDQUg0QztBQUFBO0FBQUEsTUFHbkVLLE9BSG1FO0FBQUEsTUFHMURDLFVBSDBEOztBQUFBLHlCQUl4QlAsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYs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LFNBQUksQ0FBQ0EsQ0FBQyxDQUFDekIsUUFBSCxJQUFlLE1BQW5CO0FBQUEsQ0FKSCxDQUFYO01BQU0yQixLO0FBWU4sSUFBTUUsSUFBSSxHQUFHVCx5REFBTSxDQUFDUSxHQUFQLENBQVdOLEtBQVgsQ0FBaUI7QUFBRUMsV0FBUyxFQUFFO0FBQWIsQ0FBakIsQ0FBSDtBQUFBO0FBQUE7QUFBQSx3QkFBVjtNQUFNTSxJIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS9BY3Rpb25zTWVudS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgbmF2QmFySXRlbVN0eWxlcyB9IGZyb20gJy4vc3R5bGVzJ1xuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gJ3JlYWN0LWNvb2tpZSdcbmltcG9ydCB7IERyYXdpbmcgfSBmcm9tICcuLi8uLi90eXBlcydcbmltcG9ydCB7IEFkZFRhZ01vZGFsIH0gZnJvbSAnLi9BZGRUYWdNb2RhbCdcblxudHlwZSBBY3Rpb24gPSB7XG4gIHRpdGxlOiBzdHJpbmdcbiAgb25DbGljazogKCkgPT4gdm9pZFxufVxuXG5leHBvcnQgY29uc3QgQWN0aW9uc01lbnU6IFJlYWN0LkZDPHsgZHJhd2luZzogRHJhd2luZyB9PiA9ICh7IGRyYXdpbmcgfSkgPT4ge1xuICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbY29va2llc10gPSB1c2VDb29raWVzKFsnZmVhdHVyZV9fbXlUYWdzJ10pXG4gIGNvbnN0IFthY3Rpb25zLCBzZXRBY3Rpb25zXSA9IFJlYWN0LnVzZVN0YXRlPEFjdGlvbltdPihbXSlcbiAgY29uc3QgW2lzQWRkVGFnTW9kYWxPcGVuLCBzZXRJc0FkZFRhZ01vZGFsT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCB0b2dnbGVBZGRUYWdNb2RhbCA9ICgpID0+IHNldElzQWRkVGFnTW9kYWxPcGVuKCFpc0FkZFRhZ01vZGFsT3BlbilcbiAgY29uc3QgYWRkTmV3VGFnID0geyB0aXRsZTogJ0FkZCBuZXcgdGFnJywgb25DbGljazogdG9nZ2xlQWRkVGFnTW9kYWwgfVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbmV3QWN0aW9ucyA9IFtdXG4gICAgaWYgKGNvb2tpZXMuZmVhdHVyZV9fbXlUYWdzID09PSAnb24nKSBuZXdBY3Rpb25zLnB1c2goYWRkTmV3VGFnKVxuICAgIHNldEFjdGlvbnMobmV3QWN0aW9ucylcbiAgfSwgW2Nvb2tpZXNdKVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciB0aXRsZT0nQWN0aW9ucycgb25DbGljaz17KCkgPT4gc2V0SXNBY3RpdmUoIWlzQWN0aXZlKX0gaXNIaWRkZW49eyFhY3Rpb25zLmxlbmd0aH0+XG4gICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgPGNpcmNsZSBjeD1cIjVcIiBjeT1cIjEyXCIgcj1cIjJcIiAvPlxuICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjJcIiAvPlxuICAgICAgICA8Y2lyY2xlIGN4PVwiMTlcIiBjeT1cIjEyXCIgcj1cIjJcIiAvPlxuICAgICAgPC9zdmc+XG4gICAgICA8UG9wdXAgaXNBY3RpdmU9e2lzQWN0aXZlfT5cbiAgICAgICAge2FjdGlvbnMubWFwKGFjdGlvbiA9PiAoXG4gICAgICAgICAgPEl0ZW0ga2V5PXthY3Rpb24udGl0bGV9PjxidXR0b24gb25DbGljaz17YWN0aW9uLm9uQ2xpY2t9PnthY3Rpb24udGl0bGV9PC9idXR0b24+PC9JdGVtPlxuICAgICAgICApKX1cbiAgICAgIDwvUG9wdXA+XG4gICAgICA8QWRkVGFnTW9kYWwgZHJhd2luZz17ZHJhd2luZ30gaXNPcGVuPXtpc0FkZFRhZ01vZGFsT3Blbn0gY2xvc2VNb2RhbD17dG9nZ2xlQWRkVGFnTW9kYWx9IC8+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmJ1dHRvbi5hdHRycyh7IGNsYXNzTmFtZTogJ0V4cGxvcmVyX19BY3Rpb25zTWVudV9fQ29udGFpbmVyJ30pPHsgaXNIaWRkZW46IGJvb2xlYW4gfT5gXG4gICR7bmF2QmFySXRlbVN0eWxlc31cbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAwO1xuICBkaXNwbGF5OiAke28gPT4gby5pc0hpZGRlbiAmJiAnbm9uZSd9O1xuXG4gIHN2ZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDI0cHg7XG4gIH1cbmBcblxuY29uc3QgUG9wdXAgPSBzdHlsZWQuZGl2LmF0dHJzKHsgY2xhc3NOYW1lOiAnRXhwbG9yZXJfX0FjdGlvbnNNZW51X19Qb3B1cCd9KTx7IGlzQWN0aXZlOiBib29sZWFuIH0+YFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3R0b206IDEwMCU7XG4gIGRpc3BsYXk6ICR7byA9PiAhby5pc0FjdGl2ZSAmJiAnbm9uZSd9O1xuICBwYWRkaW5nOiA4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB3aWR0aDogMjAwcHg7XG5gXG5cbmNvbnN0IEl0ZW0gPSBzdHlsZWQuZGl2LmF0dHJzKHsgY2xhc3NOYW1lOiAnRXhwbG9yZXJfX0FjdGlvbnNNZW51X19JdGVtJ30pYFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xuYFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DrawingPage/ActionsMenu.tsx\n");

/***/ })

})