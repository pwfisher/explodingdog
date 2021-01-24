webpackHotUpdate_N_E("pages/drawing/[id]",{

/***/ "./components/DrawingPage/ActionsMenu.tsx":
/*!************************************************!*\
  !*** ./components/DrawingPage/ActionsMenu.tsx ***!
  \************************************************/
/*! exports provided: ActionsMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ActionsMenu\", function() { return ActionsMenu; });\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./components/DrawingPage/styles.tsx\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var _EditTagsModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EditTagsModal */ \"./components/DrawingPage/EditTagsModal.tsx\");\n/* harmony import */ var _ExportTagsModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ExportTagsModal */ \"./components/DrawingPage/ExportTagsModal.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/pfisher/Code/pwfisher/explodingdog/explorer/components/DrawingPage/ActionsMenu.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\nvar ActionsMenu = function ActionsMenu(_ref) {\n  _s();\n\n  var drawing = _ref.drawing;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState2 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      isActive = _React$useState2[0],\n      setIsActive = _React$useState2[1];\n\n  var _useCookies = Object(react_cookie__WEBPACK_IMPORTED_MODULE_4__[\"useCookies\"])(['feature__myTags']),\n      _useCookies2 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useCookies, 1),\n      cookies = _useCookies2[0];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]),\n      _React$useState4 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      actions = _React$useState4[0],\n      setActions = _React$useState4[1];\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState6 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState5, 2),\n      isEditTagsModalOpen = _React$useState6[0],\n      setIsEditTagsModalOpen = _React$useState6[1];\n\n  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState8 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState7, 2),\n      isExportTagsModalOpen = _React$useState8[0],\n      setIsExportTagsModalOpen = _React$useState8[1];\n\n  var toggleEditTagsModal = function toggleEditTagsModal() {\n    return setIsEditTagsModalOpen(!isEditTagsModalOpen);\n  };\n\n  var toggleExportTagsModal = function toggleExportTagsModal() {\n    return setIsExportTagsModalOpen(!isExportTagsModalOpen);\n  };\n\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    var newActions = [];\n\n    if (cookies.feature__myTags === 'on') {\n      newActions.push({\n        title: 'Export tags',\n        onClick: toggleExportTagsModal\n      });\n      newActions.push({\n        title: 'Edit tags',\n        onClick: toggleEditTagsModal\n      });\n    }\n\n    setActions(newActions);\n  }, [cookies]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(Container, {\n    title: \"Actions\",\n    onClick: function onClick() {\n      return setIsActive(!isActive);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, __jsx(\"svg\", {\n    viewBox: \"0 0 24 24\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, __jsx(\"circle\", {\n    cx: \"5\",\n    cy: \"12\",\n    r: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }), __jsx(\"circle\", {\n    cx: \"12\",\n    cy: \"12\",\n    r: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  }), __jsx(\"circle\", {\n    cx: \"19\",\n    cy: \"12\",\n    r: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  })), __jsx(Popup, {\n    isActive: isActive,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }, __jsx(Item, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 26\n    }\n  }, \"Home\")), actions.map(function (action) {\n    return __jsx(Item, {\n      key: action.title,\n      onClick: action.onClick,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 13\n      }\n    }, action.title);\n  }), __jsx(Item, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 11\n    }\n  }, \"\\xA92021 Sam Brown\"))), isEditTagsModalOpen && __jsx(_EditTagsModal__WEBPACK_IMPORTED_MODULE_5__[\"EditTagsModal\"], {\n    drawing: drawing,\n    isOpen: isEditTagsModalOpen,\n    closeModal: toggleEditTagsModal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }), isExportTagsModalOpen && __jsx(_ExportTagsModal__WEBPACK_IMPORTED_MODULE_6__[\"ExportTagsModal\"], {\n    isOpen: isExportTagsModalOpen,\n    closeModal: toggleExportTagsModal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }));\n};\n\n_s(ActionsMenu, \"hyzXYqZGjoKc4khbuhnyGEHW6gs=\", false, function () {\n  return [react_cookie__WEBPACK_IMPORTED_MODULE_4__[\"useCookies\"]];\n});\n\n_c = ActionsMenu;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button.attrs({\n  className: 'Explorer__ActionsMenu__Container'\n}).withConfig({\n  displayName: \"ActionsMenu__Container\",\n  componentId: \"sc-1a81ly3-0\"\n})([\"\", \" background:none;border:0;svg{display:block;width:24px;}\"], _styles__WEBPACK_IMPORTED_MODULE_3__[\"navBarItemStyles\"]);\n_c2 = Container;\nvar Popup = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.attrs({\n  className: 'Explorer__ActionsMenu__Popup'\n}).withConfig({\n  displayName: \"ActionsMenu__Popup\",\n  componentId: \"sc-1a81ly3-1\"\n})([\"background:white;border:1px solid rgba(0,0,0,0.2);bottom:100%;display:\", \";padding:8px;position:absolute;right:0;text-align:left;width:200px;\"], function (o) {\n  return !o.isActive && 'none';\n});\n_c3 = Popup;\nvar Item = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].a.attrs({\n  className: 'Explorer__ActionsMenu__Item'\n}).withConfig({\n  displayName: \"ActionsMenu__Item\",\n  componentId: \"sc-1a81ly3-2\"\n})([\"display:block;font-size:24px;padding:8px;&:hover{background:#e5e5e5;}\"]);\n_c4 = Item;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"ActionsMenu\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"Popup\");\n$RefreshReg$(_c4, \"Item\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS9BY3Rpb25zTWVudS50c3g/ZDFlZiJdLCJuYW1lcyI6WyJBY3Rpb25zTWVudSIsImRyYXdpbmciLCJSZWFjdCIsInVzZVN0YXRlIiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsInVzZUNvb2tpZXMiLCJjb29raWVzIiwiYWN0aW9ucyIsInNldEFjdGlvbnMiLCJpc0VkaXRUYWdzTW9kYWxPcGVuIiwic2V0SXNFZGl0VGFnc01vZGFsT3BlbiIsImlzRXhwb3J0VGFnc01vZGFsT3BlbiIsInNldElzRXhwb3J0VGFnc01vZGFsT3BlbiIsInRvZ2dsZUVkaXRUYWdzTW9kYWwiLCJ0b2dnbGVFeHBvcnRUYWdzTW9kYWwiLCJ1c2VFZmZlY3QiLCJuZXdBY3Rpb25zIiwiZmVhdHVyZV9fbXlUYWdzIiwicHVzaCIsInRpdGxlIiwib25DbGljayIsIm1hcCIsImFjdGlvbiIsIkNvbnRhaW5lciIsInN0eWxlZCIsImJ1dHRvbiIsImF0dHJzIiwiY2xhc3NOYW1lIiwibmF2QmFySXRlbVN0eWxlcyIsIlBvcHVwIiwiZGl2IiwibyIsIkl0ZW0iLCJhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFPTyxJQUFNQSxXQUEyQyxHQUFHLFNBQTlDQSxXQUE4QyxPQUFpQjtBQUFBOztBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFBQSx3QkFDMUNDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRDBDO0FBQUE7QUFBQSxNQUNuRUMsUUFEbUU7QUFBQSxNQUN6REMsV0FEeUQ7O0FBQUEsb0JBRXhEQywrREFBVSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUY4QztBQUFBO0FBQUEsTUFFbkVDLE9BRm1FOztBQUFBLHlCQUc1Q0wsNENBQUssQ0FBQ0MsUUFBTixDQUF5QixFQUF6QixDQUg0QztBQUFBO0FBQUEsTUFHbkVL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RVMsbUJBQXpDO0FBQThELGNBQVUsRUFBRUksbUJBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQkosRUFrQkdGLHFCQUFxQixJQUNwQixNQUFDLGdFQUFEO0FBQWlCLFVBQU0sRUFBRUEscUJBQXpCO0FBQWdELGNBQVUsRUFBRUcscUJBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuQkosQ0FERjtBQXdCRCxDQTNDTTs7R0FBTWYsVztVQUVPTSx1RDs7O0tBRlBOLFc7QUE2Q2IsSUFBTXdCLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxLQUFkLENBQW9CO0FBQUVDLFdBQVMsRUFBRTtBQUFiLENBQXBCLENBQUg7QUFBQTtBQUFBO0FBQUEscUVBQ1hDLHdEQURXLENBQWY7TUFBTUwsUztBQVdOLElBQU1NLEtBQUssR0FBR0wseURBQU0sQ0FBQ00sR0FBUCxDQUFXSixLQUFYLENBQWlCO0FBQUVDLFdBQVMsRUFBRTtBQUFiLENBQWpCLENBQUg7QUFBQTtBQUFBO0FBQUEsc0pBSUUsVUFBQUksQ0FBQztBQUFBLFNBQUksQ0FBQ0EsQ0FBQyxDQUFDNUIsUUFBSCxJQUFlLE1BQW5CO0FBQUEsQ0FKSCxDQUFYO01BQU0wQixLO0FBWU4sSUFBTUcsSUFBSSxHQUFHUix5REFBTSxDQUFDUyxDQUFQLENBQVNQLEtBQVQsQ0FBZTtBQUFFQyxXQUFTLEVBQUU7QUFBYixDQUFmLENBQUg7QUFBQTtBQUFBO0FBQUEsNkVBQVY7TUFBTUssSSIsImZpbGUiOiIuL2NvbXBvbmVudHMvRHJhd2luZ1BhZ2UvQWN0aW9uc01lbnUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IG5hdkJhckl0ZW1TdHlsZXMgfSBmcm9tICcuL3N0eWxlcydcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tICdyZWFjdC1jb29raWUnXG5pbXBvcnQgeyBEcmF3aW5nIH0gZnJvbSAnLi4vLi4vdHlwZXMnXG5pbXBvcnQgeyBFZGl0VGFnc01vZGFsIH0gZnJvbSAnLi9FZGl0VGFnc01vZGFsJ1xuaW1wb3J0IHsgRXhwb3J0VGFnc01vZGFsIH0gZnJvbSAnLi9FeHBvcnRUYWdzTW9kYWwnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbnR5cGUgQWN0aW9uID0ge1xuICB0aXRsZTogc3RyaW5nXG4gIG9uQ2xpY2s6ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IGNvbnN0IEFjdGlvbnNNZW51OiBSZWFjdC5GQzx7IGRyYXdpbmc6IERyYXdpbmcgfT4gPSAoeyBkcmF3aW5nIH0pID0+IHtcbiAgY29uc3QgW2lzQWN0aXZlLCBzZXRJc0FjdGl2ZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2Nvb2tpZXNdID0gdXNlQ29va2llcyhbJ2ZlYXR1cmVfX215VGFncyddKVxuICBjb25zdCBbYWN0aW9ucywgc2V0QWN0aW9uc10gPSBSZWFjdC51c2VTdGF0ZTxBY3Rpb25bXT4oW10pXG4gIGNvbnN0IFtpc0VkaXRUYWdzTW9kYWxPcGVuLCBzZXRJc0VkaXRUYWdzTW9kYWxPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbaXNFeHBvcnRUYWdzTW9kYWxPcGVuLCBzZXRJc0V4cG9ydFRhZ3NNb2RhbE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgdG9nZ2xlRWRpdFRhZ3NNb2RhbCA9ICgpID0+IHNldElzRWRpdFRhZ3NNb2RhbE9wZW4oIWlzRWRpdFRhZ3NNb2RhbE9wZW4pXG4gIGNvbnN0IHRvZ2dsZUV4cG9ydFRhZ3NNb2RhbCA9ICgpID0+IHNldElzRXhwb3J0VGFnc01vZGFsT3BlbighaXNFeHBvcnRUYWdzTW9kYWxPcGVuKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbmV3QWN0aW9ucyA9IFtdXG4gICAgaWYgKGNvb2tpZXMuZmVhdHVyZV9fbXlUYWdzID09PSAnb24nKSB7XG4gICAgICBuZXdBY3Rpb25zLnB1c2goeyB0aXRsZTogJ0V4cG9ydCB0YWdzJywgb25DbGljazogdG9nZ2xlRXhwb3J0VGFnc01vZGFsIH0pXG4gICAgICBuZXdBY3Rpb25zLnB1c2goeyB0aXRsZTogJ0VkaXQgdGFncycsIG9uQ2xpY2s6IHRvZ2dsZUVkaXRUYWdzTW9kYWwgfSlcbiAgICB9XG4gICAgc2V0QWN0aW9ucyhuZXdBY3Rpb25zKVxuICB9LCBbY29va2llc10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENvbnRhaW5lciB0aXRsZT0nQWN0aW9ucycgb25DbGljaz17KCkgPT4gc2V0SXNBY3RpdmUoIWlzQWN0aXZlKX0+XG4gICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgIDxjaXJjbGUgY3g9XCI1XCIgY3k9XCIxMlwiIHI9XCIyXCIgLz5cbiAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjJcIiAvPlxuICAgICAgICAgIDxjaXJjbGUgY3g9XCIxOVwiIGN5PVwiMTJcIiByPVwiMlwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICA8UG9wdXAgaXNBY3RpdmU9e2lzQWN0aXZlfT5cbiAgICAgICAgICA8TGluayBocmVmPScvJz48SXRlbT5Ib21lPC9JdGVtPjwvTGluaz5cbiAgICAgICAgICB7YWN0aW9ucy5tYXAoYWN0aW9uID0+IChcbiAgICAgICAgICAgIDxJdGVtIGtleT17YWN0aW9uLnRpdGxlfSBvbkNsaWNrPXthY3Rpb24ub25DbGlja30+e2FjdGlvbi50aXRsZX08L0l0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPEl0ZW0+wqkyMDIxIFNhbSBCcm93bjwvSXRlbT5cbiAgICAgICAgPC9Qb3B1cD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAge2lzRWRpdFRhZ3NNb2RhbE9wZW4gJiYgKFxuICAgICAgICA8RWRpdFRhZ3NNb2RhbCBkcmF3aW5nPXtkcmF3aW5nfSBpc09wZW49e2lzRWRpdFRhZ3NNb2RhbE9wZW59IGNsb3NlTW9kYWw9e3RvZ2dsZUVkaXRUYWdzTW9kYWx9IC8+XG4gICAgICApfVxuICAgICAge2lzRXhwb3J0VGFnc01vZGFsT3BlbiAmJiAoXG4gICAgICAgIDxFeHBvcnRUYWdzTW9kYWwgaXNPcGVuPXtpc0V4cG9ydFRhZ3NNb2RhbE9wZW59IGNsb3NlTW9kYWw9e3RvZ2dsZUV4cG9ydFRhZ3NNb2RhbH0gLz5cbiAgICAgICl9XG4gICAgPC8+XG4gIClcbn1cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmJ1dHRvbi5hdHRycyh7IGNsYXNzTmFtZTogJ0V4cGxvcmVyX19BY3Rpb25zTWVudV9fQ29udGFpbmVyJ30pYFxuICAke25hdkJhckl0ZW1TdHlsZXN9XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogMDtcblxuICBzdmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAyNHB4O1xuICB9XG5gXG5cbmNvbnN0IFBvcHVwID0gc3R5bGVkLmRpdi5hdHRycyh7IGNsYXNzTmFtZTogJ0V4cGxvcmVyX19BY3Rpb25zTWVudV9fUG9wdXAnfSk8eyBpc0FjdGl2ZTogYm9vbGVhbiB9PmBcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm90dG9tOiAxMDAlO1xuICBkaXNwbGF5OiAke28gPT4gIW8uaXNBY3RpdmUgJiYgJ25vbmUnfTtcbiAgcGFkZGluZzogOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMjAwcHg7XG5gXG5cbmNvbnN0IEl0ZW0gPSBzdHlsZWQuYS5hdHRycyh7IGNsYXNzTmFtZTogJ0V4cGxvcmVyX19BY3Rpb25zTWVudV9fSXRlbSd9KWBcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcGFkZGluZzogOHB4O1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNlNWU1ZTU7XG4gIH1cbmBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DrawingPage/ActionsMenu.tsx\n");

/***/ })

})