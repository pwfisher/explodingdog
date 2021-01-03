webpackHotUpdate_N_E("pages/drawing/[id]",{

/***/ "./components/DrawingPage/ActionsMenu.tsx":
/*!************************************************!*\
  !*** ./components/DrawingPage/ActionsMenu.tsx ***!
  \************************************************/
/*! exports provided: ActionsMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ActionsMenu\", function() { return ActionsMenu; });\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./components/DrawingPage/styles.tsx\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var _AddTagModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AddTagModal */ \"./components/DrawingPage/AddTagModal.tsx\");\n/* harmony import */ var _ExportTagsModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ExportTagsModal */ \"./components/DrawingPage/ExportTagsModal.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/pfisher/Code/pwfisher/explodingdog/explorer/components/DrawingPage/ActionsMenu.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nvar ActionsMenu = function ActionsMenu(_ref) {\n  _s();\n\n  var drawing = _ref.drawing;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState2 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      isActive = _React$useState2[0],\n      setIsActive = _React$useState2[1];\n\n  var _useCookies = Object(react_cookie__WEBPACK_IMPORTED_MODULE_4__[\"useCookies\"])(['feature__myTags']),\n      _useCookies2 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useCookies, 1),\n      cookies = _useCookies2[0];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]),\n      _React$useState4 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      actions = _React$useState4[0],\n      setActions = _React$useState4[1];\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState6 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState5, 2),\n      isAddTagModalOpen = _React$useState6[0],\n      setIsAddTagModalOpen = _React$useState6[1];\n\n  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState8 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState7, 2),\n      isExportTagsModalOpen = _React$useState8[0],\n      setIsExportTagsModalOpen = _React$useState8[1];\n\n  var toggleAddTagModal = function toggleAddTagModal() {\n    return setIsAddTagModalOpen(!isAddTagModalOpen);\n  };\n\n  var toggleExportTagsModal = function toggleExportTagsModal() {\n    return setIsExportTagsModalOpen(!isExportTagsModalOpen);\n  };\n\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    var newActions = [];\n\n    if (cookies.feature__myTags === 'on') {\n      newActions.push({\n        title: 'Export hashtags',\n        onClick: toggleExportTagsModal\n      });\n      newActions.push({\n        title: 'Add hashtags',\n        onClick: toggleAddTagModal\n      });\n    }\n\n    setActions(newActions);\n  }, [cookies]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(Container, {\n    title: \"Actions\",\n    onClick: function onClick() {\n      return setIsActive(!isActive);\n    },\n    isHidden: !actions.length,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, __jsx(\"svg\", {\n    viewBox: \"0 0 24 24\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, __jsx(\"circle\", {\n    cx: \"5\",\n    cy: \"12\",\n    r: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 11\n    }\n  }), __jsx(\"circle\", {\n    cx: \"12\",\n    cy: \"12\",\n    r: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }), __jsx(\"circle\", {\n    cx: \"19\",\n    cy: \"12\",\n    r: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  })), __jsx(Popup, {\n    isActive: isActive,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, actions.map(function (action) {\n    return __jsx(Item, {\n      key: action.title,\n      onClick: action.onClick,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 13\n      }\n    }, action.title);\n  }))), __jsx(_AddTagModal__WEBPACK_IMPORTED_MODULE_5__[\"AddTagModal\"], {\n    drawing: drawing,\n    isOpen: isAddTagModalOpen,\n    closeModal: toggleAddTagModal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }), __jsx(_ExportTagsModal__WEBPACK_IMPORTED_MODULE_6__[\"ExportTagsModal\"], {\n    isOpen: isExportTagsModalOpen,\n    closeModal: toggleExportTagsModal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(ActionsMenu, \"Kjq4lTc6VTa4GQp+xJK9J7bjKKA=\", false, function () {\n  return [react_cookie__WEBPACK_IMPORTED_MODULE_4__[\"useCookies\"]];\n});\n\n_c = ActionsMenu;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button.attrs({\n  className: 'Explorer__ActionsMenu__Container'\n}).withConfig({\n  displayName: \"ActionsMenu__Container\",\n  componentId: \"sc-1a81ly3-0\"\n})([\"\", \" background:none;border:0;display:\", \";svg{display:block;width:24px;}\"], _styles__WEBPACK_IMPORTED_MODULE_3__[\"navBarItemStyles\"], function (o) {\n  return o.isHidden && 'none';\n});\n_c2 = Container;\nvar Popup = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.attrs({\n  className: 'Explorer__ActionsMenu__Popup'\n}).withConfig({\n  displayName: \"ActionsMenu__Popup\",\n  componentId: \"sc-1a81ly3-1\"\n})([\"background:white;border:1px solid rgba(0,0,0,0.2);bottom:100%;display:\", \";padding:8px;position:absolute;right:0;text-align:left;width:200px;\"], function (o) {\n  return !o.isActive && 'none';\n});\n_c3 = Popup;\nvar Item = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].a.attrs({\n  className: 'Explorer__ActionsMenu__Item'\n}).withConfig({\n  displayName: \"ActionsMenu__Item\",\n  componentId: \"sc-1a81ly3-2\"\n})([\"display:block;font-size:24px;padding:8px;&:hover{background:#f5f5f5;}\"]);\n_c4 = Item;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"ActionsMenu\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"Popup\");\n$RefreshReg$(_c4, \"Item\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS9BY3Rpb25zTWVudS50c3g/ZDFlZiJdLCJuYW1lcyI6WyJBY3Rpb25zTWVudSIsImRyYXdpbmciLCJSZWFjdCIsInVzZVN0YXRlIiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsInVzZUNvb2tpZXMiLCJjb29raWVzIiwiYWN0aW9ucyIsInNldEFjdGlvbnMiLCJpc0FkZFRhZ01vZGFsT3BlbiIsInNldElzQWRkVGFnTW9kYWxPcGVuIiwiaXNFeHBvcnRUYWdzTW9kYWxPcGVuIiwic2V0SXNFeHBvcnRUYWdzTW9kYWxPcGVuIiwidG9nZ2xlQWRkVGFnTW9kYWwiLCJ0b2dnbGVFeHBvcnRUYWdzTW9kYWwiLCJ1c2VFZmZlY3QiLCJuZXdBY3Rpb25zIiwiZmVhdHVyZV9fbXlUYWdzIiwicHVzaCIsInRpdGxlIiwib25DbGljayIsImxlbmd0aCIsIm1hcCIsImFjdGlvbiIsIkNvbnRhaW5lciIsInN0eWxlZCIsImJ1dHRvbiIsImF0dHJzIiwiY2xhc3NOYW1lIiwibmF2QmFySXRlbVN0eWxlcyIsIm8iLCJpc0hpZGRlbiIsIlBvcHVwIiwiZGl2IiwiSXRlbSIsImEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBT08sSUFBTUEsV0FBMkMsR0FBRyxTQUE5Q0EsV0FBOEMsT0FBaUI7QUFBQTs7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7O0FBQUEsd0JBQzFDQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUQwQztBQUFBO0FBQUEsTUFDbkVDLFFBRG1FO0FBQUEsTUFDekRDLFdBRHlEOztBQUFBLG9CQUV4REMsK0RBQVUsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FGOEM7QUFBQTtBQUFBLE1BRW5FQyxPQUZtRTs7QUFBQSx5QkFHNUNMLDRDQUFLLENBQUNDLFFBQU4sQ0FBeUIsRUFBekIsQ0FINEM7QUFBQTtBQUFB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O0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkRixDQURGO0FBa0JELENBckNNOztHQUFNZixXO1VBRU9NLHVEOzs7S0FGUE4sVztBQXVDYixJQUFNeUIsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxNQUFQLENBQWNDLEtBQWQsQ0FBb0I7QUFBRUMsV0FBUyxFQUFFO0FBQWIsQ0FBcEIsQ0FBSDtBQUFBO0FBQUE7QUFBQSxrRkFDWEMsd0RBRFcsRUFJRixVQUFBQyxDQUFDO0FBQUEsU0FBSUEsQ0FBQyxDQUFDQyxRQUFGLElBQWMsTUFBbEI7QUFBQSxDQUpDLENBQWY7TUFBTVAsUztBQVlOLElBQU1RLEtBQUssR0FBR1AseURBQU0sQ0FBQ1EsR0FBUCxDQUFXTixLQUFYLENBQWlCO0FBQUVDLFdBQVMsRUFBRTtBQUFiLENBQWpCLENBQUg7QUFBQTtBQUFBO0FBQUEsc0pBSUUsVUFBQUUsQ0FBQztBQUFBLFNBQUksQ0FBQ0EsQ0FBQyxDQUFDM0IsUUFBSCxJQUFlLE1BQW5CO0FBQUEsQ0FKSCxDQUFYO01BQU02QixLO0FBWU4sSUFBTUUsSUFBSSxHQUFHVCx5REFBTSxDQUFDVSxDQUFQLENBQVNSLEtBQVQsQ0FBZTtBQUFFQyxXQUFTLEVBQUU7QUFBYixDQUFmLENBQUg7QUFBQTtBQUFBO0FBQUEsNkVBQVY7TUFBTU0sSSIsImZpbGUiOiIuL2NvbXBvbmVudHMvRHJhd2luZ1BhZ2UvQWN0aW9uc01lbnUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IG5hdkJhckl0ZW1TdHlsZXMgfSBmcm9tICcuL3N0eWxlcydcbmltcG9ydCB7IHVzZUNvb2tpZXMgfSBmcm9tICdyZWFjdC1jb29raWUnXG5pbXBvcnQgeyBEcmF3aW5nIH0gZnJvbSAnLi4vLi4vdHlwZXMnXG5pbXBvcnQgeyBBZGRUYWdNb2RhbCB9IGZyb20gJy4vQWRkVGFnTW9kYWwnXG5pbXBvcnQgeyBFeHBvcnRUYWdzTW9kYWwgfSBmcm9tICcuL0V4cG9ydFRhZ3NNb2RhbCdcblxudHlwZSBBY3Rpb24gPSB7XG4gIHRpdGxlOiBzdHJpbmdcbiAgb25DbGljazogKCkgPT4gdm9pZFxufVxuXG5leHBvcnQgY29uc3QgQWN0aW9uc01lbnU6IFJlYWN0LkZDPHsgZHJhd2luZzogRHJhd2luZyB9PiA9ICh7IGRyYXdpbmcgfSkgPT4ge1xuICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbY29va2llc10gPSB1c2VDb29raWVzKFsnZmVhdHVyZV9fbXlUYWdzJ10pXG4gIGNvbnN0IFthY3Rpb25zLCBzZXRBY3Rpb25zXSA9IFJlYWN0LnVzZVN0YXRlPEFjdGlvbltdPihbXSlcbiAgY29uc3QgW2lzQWRkVGFnTW9kYWxPcGVuLCBzZXRJc0FkZFRhZ01vZGFsT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2lzRXhwb3J0VGFnc01vZGFsT3Blbiwgc2V0SXNFeHBvcnRUYWdzTW9kYWxPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHRvZ2dsZUFkZFRhZ01vZGFsID0gKCkgPT4gc2V0SXNBZGRUYWdNb2RhbE9wZW4oIWlzQWRkVGFnTW9kYWxPcGVuKVxuICBjb25zdCB0b2dnbGVFeHBvcnRUYWdzTW9kYWwgPSAoKSA9PiBzZXRJc0V4cG9ydFRhZ3NNb2RhbE9wZW4oIWlzRXhwb3J0VGFnc01vZGFsT3BlbilcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG5ld0FjdGlvbnMgPSBbXVxuICAgIGlmIChjb29raWVzLmZlYXR1cmVfX215VGFncyA9PT0gJ29uJykge1xuICAgICAgbmV3QWN0aW9ucy5wdXNoKHsgdGl0bGU6ICdFeHBvcnQgaGFzaHRhZ3MnLCBvbkNsaWNrOiB0b2dnbGVFeHBvcnRUYWdzTW9kYWwgfSlcbiAgICAgIG5ld0FjdGlvbnMucHVzaCh7IHRpdGxlOiAnQWRkIGhhc2h0YWdzJywgb25DbGljazogdG9nZ2xlQWRkVGFnTW9kYWwgfSlcbiAgICB9XG4gICAgc2V0QWN0aW9ucyhuZXdBY3Rpb25zKVxuICB9LCBbY29va2llc10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENvbnRhaW5lciB0aXRsZT0nQWN0aW9ucycgb25DbGljaz17KCkgPT4gc2V0SXNBY3RpdmUoIWlzQWN0aXZlKX0gaXNIaWRkZW49eyFhY3Rpb25zLmxlbmd0aH0+XG4gICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgIDxjaXJjbGUgY3g9XCI1XCIgY3k9XCIxMlwiIHI9XCIyXCIgLz5cbiAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjJcIiAvPlxuICAgICAgICAgIDxjaXJjbGUgY3g9XCIxOVwiIGN5PVwiMTJcIiByPVwiMlwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICA8UG9wdXAgaXNBY3RpdmU9e2lzQWN0aXZlfT5cbiAgICAgICAgICB7YWN0aW9ucy5tYXAoYWN0aW9uID0+IChcbiAgICAgICAgICAgIDxJdGVtIGtleT17YWN0aW9uLnRpdGxlfSBvbkNsaWNrPXthY3Rpb24ub25DbGlja30+e2FjdGlvbi50aXRsZX08L0l0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvUG9wdXA+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxBZGRUYWdNb2RhbCBkcmF3aW5nPXtkcmF3aW5nfSBpc09wZW49e2lzQWRkVGFnTW9kYWxPcGVufSBjbG9zZU1vZGFsPXt0b2dnbGVBZGRUYWdNb2RhbH0gLz5cbiAgICAgIDxFeHBvcnRUYWdzTW9kYWwgaXNPcGVuPXtpc0V4cG9ydFRhZ3NNb2RhbE9wZW59IGNsb3NlTW9kYWw9e3RvZ2dsZUV4cG9ydFRhZ3NNb2RhbH0gLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuYnV0dG9uLmF0dHJzKHsgY2xhc3NOYW1lOiAnRXhwbG9yZXJfX0FjdGlvbnNNZW51X19Db250YWluZXInfSk8eyBpc0hpZGRlbjogYm9vbGVhbiB9PmBcbiAgJHtuYXZCYXJJdGVtU3R5bGVzfVxuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IDA7XG4gIGRpc3BsYXk6ICR7byA9PiBvLmlzSGlkZGVuICYmICdub25lJ307XG5cbiAgc3ZnIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjRweDtcbiAgfVxuYFxuXG5jb25zdCBQb3B1cCA9IHN0eWxlZC5kaXYuYXR0cnMoeyBjbGFzc05hbWU6ICdFeHBsb3Jlcl9fQWN0aW9uc01lbnVfX1BvcHVwJ30pPHsgaXNBY3RpdmU6IGJvb2xlYW4gfT5gXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvdHRvbTogMTAwJTtcbiAgZGlzcGxheTogJHtvID0+ICFvLmlzQWN0aXZlICYmICdub25lJ307XG4gIHBhZGRpbmc6IDhweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDIwMHB4O1xuYFxuXG5jb25zdCBJdGVtID0gc3R5bGVkLmEuYXR0cnMoeyBjbGFzc05hbWU6ICdFeHBsb3Jlcl9fQWN0aW9uc01lbnVfX0l0ZW0nfSlgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDI0cHg7XG4gIHBhZGRpbmc6IDhweDtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICB9XG5gXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DrawingPage/ActionsMenu.tsx\n");

/***/ })

})