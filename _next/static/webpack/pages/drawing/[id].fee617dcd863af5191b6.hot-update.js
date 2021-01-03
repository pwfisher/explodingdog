webpackHotUpdate_N_E("pages/drawing/[id]",{

/***/ "./components/DrawingPage/ActionsMenu.tsx":
/*!************************************************!*\
  !*** ./components/DrawingPage/ActionsMenu.tsx ***!
  \************************************************/
/*! exports provided: ActionsMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ActionsMenu\", function() { return ActionsMenu; });\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./components/DrawingPage/styles.tsx\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var _AddTagModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AddTagModal */ \"./components/DrawingPage/AddTagModal.tsx\");\n/* harmony import */ var _ExportTagsModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ExportTagsModal */ \"./components/DrawingPage/ExportTagsModal.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/pfisher/Code/pwfisher/explodingdog/explorer/components/DrawingPage/ActionsMenu.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\nvar ActionsMenu = function ActionsMenu(_ref) {\n  _s();\n\n  var drawing = _ref.drawing;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState2 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      isActive = _React$useState2[0],\n      setIsActive = _React$useState2[1];\n\n  var _useCookies = Object(react_cookie__WEBPACK_IMPORTED_MODULE_4__[\"useCookies\"])(['feature__myTags']),\n      _useCookies2 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useCookies, 1),\n      cookies = _useCookies2[0];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]),\n      _React$useState4 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      actions = _React$useState4[0],\n      setActions = _React$useState4[1];\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState6 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState5, 2),\n      isAddTagModalOpen = _React$useState6[0],\n      setIsAddTagModalOpen = _React$useState6[1];\n\n  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState8 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState7, 2),\n      isExportTagsModalOpen = _React$useState8[0],\n      setIsExportTagsModalOpen = _React$useState8[1];\n\n  var toggleAddTagModal = function toggleAddTagModal() {\n    return setIsAddTagModalOpen(!isAddTagModalOpen);\n  };\n\n  var toggleExportTagsModal = function toggleExportTagsModal() {\n    return setIsExportTagsModalOpen(!isExportTagsModalOpen);\n  };\n\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    var newActions = [];\n\n    if (cookies.feature__myTags === 'on') {\n      newActions.push({\n        title: 'Export hashtags',\n        onClick: toggleExportTagsModal\n      });\n      newActions.push({\n        title: 'Add hashtags',\n        onClick: toggleAddTagModal\n      });\n    }\n\n    setActions(newActions);\n  }, [cookies]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(Container, {\n    title: \"Actions\",\n    onClick: function onClick() {\n      return setIsActive(!isActive);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, __jsx(\"svg\", {\n    viewBox: \"0 0 24 24\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, __jsx(\"circle\", {\n    cx: \"5\",\n    cy: \"12\",\n    r: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }), __jsx(\"circle\", {\n    cx: \"12\",\n    cy: \"12\",\n    r: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  }), __jsx(\"circle\", {\n    cx: \"19\",\n    cy: \"12\",\n    r: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  })), __jsx(Popup, {\n    isActive: isActive,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }, __jsx(Item, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 26\n    }\n  }, \"Home\")), actions.map(function (action) {\n    return __jsx(Item, {\n      key: action.title,\n      onClick: action.onClick,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 13\n      }\n    }, action.title);\n  }))), __jsx(_AddTagModal__WEBPACK_IMPORTED_MODULE_5__[\"AddTagModal\"], {\n    drawing: drawing,\n    isOpen: isAddTagModalOpen,\n    closeModal: toggleAddTagModal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }), __jsx(_ExportTagsModal__WEBPACK_IMPORTED_MODULE_6__[\"ExportTagsModal\"], {\n    isOpen: isExportTagsModalOpen,\n    closeModal: toggleExportTagsModal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(ActionsMenu, \"Kjq4lTc6VTa4GQp+xJK9J7bjKKA=\", false, function () {\n  return [react_cookie__WEBPACK_IMPORTED_MODULE_4__[\"useCookies\"]];\n});\n\n_c = ActionsMenu;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button.attrs({\n  className: 'Explorer__ActionsMenu__Container'\n}).withConfig({\n  displayName: \"ActionsMenu__Container\",\n  componentId: \"sc-1a81ly3-0\"\n})([\"\", \" background:none;border:0;svg{display:block;width:24px;}\"], _styles__WEBPACK_IMPORTED_MODULE_3__[\"navBarItemStyles\"]);\n_c2 = Container;\nvar Popup = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.attrs({\n  className: 'Explorer__ActionsMenu__Popup'\n}).withConfig({\n  displayName: \"ActionsMenu__Popup\",\n  componentId: \"sc-1a81ly3-1\"\n})([\"background:white;border:1px solid rgba(0,0,0,0.2);bottom:100%;display:\", \";padding:8px;position:absolute;right:0;text-align:left;width:200px;\"], function (o) {\n  return !o.isActive && 'none';\n});\n_c3 = Popup;\nvar Item = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].a.attrs({\n  className: 'Explorer__ActionsMenu__Item'\n}).withConfig({\n  displayName: \"ActionsMenu__Item\",\n  componentId: \"sc-1a81ly3-2\"\n})([\"display:block;font-size:24px;padding:8px;&:hover{background:#e5e5e5;}\"]);\n_c4 = Item;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"ActionsMenu\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"Popup\");\n$RefreshReg$(_c4, \"Item\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS9BY3Rpb25zTWVudS50c3g/ZDFlZiJdLCJuYW1lcyI6WyJBY3Rpb25zTWVudSIsImRyYXdpbmciLCJSZWFjdCIsInVzZVN0YXRlIiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsInVzZUNvb2tpZXMiLCJjb29raWVzIiwiYWN0aW9ucyIsInNldEFjdGlvbnMiLCJpc0FkZFRhZ01vZGFsT3BlbiIsInNldElzQWRkVGFnTW9kYWxPcGVuIiwiaXNFeHBvcnRUYWdzTW9kYWxPcGVuIiwic2V0SXNFeHBvcnRUYWdzTW9kYWxPcGVuIiwidG9nZ2xlQWRkVGFnTW9kYWwiLCJ0b2dnbGVFeHBvcnRUYWdzTW9kYWwiLCJ1c2VFZmZlY3QiLCJuZXdBY3Rpb25zIiwiZmVhdHVyZV9fbXlUYWdzIiwicHVzaCIsInRpdGxlIiwib25DbGljayIsIm1hcCIsImFjdGlvbiIsIkNvbnRhaW5lciIsInN0eWxlZCIsImJ1dHRvbiIsImF0dHJzIiwiY2xhc3NOYW1lIiwibmF2QmFySXRlbVN0eWxlcyIsIlBvcHVwIiwiZGl2IiwibyIsIkl0ZW0iLCJhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFPTyxJQUFNQSxXQUEyQyxHQUFHLFNBQTlDQSxXQUE4QyxPQUFpQjtBQUFBOztBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFBQSx3QkFDMUNDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRDBDO0FBQUE7QUFBQSxNQUNuRUMsUUFEbUU7QUFBQSxNQUN6REMsV0FEeUQ7O0FBQUEsb0JBRXhEQywrREFBVSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUY4QztBQUFBO0FBQUEsTUFFbkVDLE9BRm1FOztBQUFBLHlCQUc1Q0wsNENBQUssQ0FBQ0MsUUFBTixDQUF5QixFQUF6QixDQUg0QztBQUFBO0FBQUEsTUFHbkVLLE9BSG1F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RUFlRSxNQUFDLGdFQUFEO0FBQWlCLFVBQU0sRUFBRUYscUJBQXpCO0FBQWdELGNBQVUsRUFBRUcscUJBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmRixDQURGO0FBbUJELENBdENNOztHQUFNZixXO1VBRU9NLHVEOzs7S0FGUE4sVztBQXdDYixJQUFNd0IsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxNQUFQLENBQWNDLEtBQWQsQ0FBb0I7QUFBRUMsV0FBUyxFQUFFO0FBQWIsQ0FBcEIsQ0FBSDtBQUFBO0FBQUE7QUFBQSxxRUFDWEMsd0RBRFcsQ0FBZjtNQUFNTCxTO0FBV04sSUFBTU0sS0FBSyxHQUFHTCx5REFBTSxDQUFDTSxHQUFQLENBQVdKLEtBQVgsQ0FBaUI7QUFBRUMsV0FBUyxFQUFFO0FBQWIsQ0FBakIsQ0FBSDtBQUFBO0FBQUE7QUFBQSxzSkFJRSxVQUFBSSxDQUFDO0FBQUEsU0FBSSxDQUFDQSxDQUFDLENBQUM1QixRQUFILElBQWUsTUFBbkI7QUFBQSxDQUpILENBQVg7TUFBTTBCLEs7QUFZTixJQUFNRyxJQUFJLEdBQUdSLHlEQUFNLENBQUNTLENBQVAsQ0FBU1AsS0FBVCxDQUFlO0FBQUVDLFdBQVMsRUFBRTtBQUFiLENBQWYsQ0FBSDtBQUFBO0FBQUE7QUFBQSw2RUFBVjtNQUFNSyxJIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS9BY3Rpb25zTWVudS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgbmF2QmFySXRlbVN0eWxlcyB9IGZyb20gJy4vc3R5bGVzJ1xuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gJ3JlYWN0LWNvb2tpZSdcbmltcG9ydCB7IERyYXdpbmcgfSBmcm9tICcuLi8uLi90eXBlcydcbmltcG9ydCB7IEFkZFRhZ01vZGFsIH0gZnJvbSAnLi9BZGRUYWdNb2RhbCdcbmltcG9ydCB7IEV4cG9ydFRhZ3NNb2RhbCB9IGZyb20gJy4vRXhwb3J0VGFnc01vZGFsJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG50eXBlIEFjdGlvbiA9IHtcbiAgdGl0bGU6IHN0cmluZ1xuICBvbkNsaWNrOiAoKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBjb25zdCBBY3Rpb25zTWVudTogUmVhY3QuRkM8eyBkcmF3aW5nOiBEcmF3aW5nIH0+ID0gKHsgZHJhd2luZyB9KSA9PiB7XG4gIGNvbnN0IFtpc0FjdGl2ZSwgc2V0SXNBY3RpdmVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtjb29raWVzXSA9IHVzZUNvb2tpZXMoWydmZWF0dXJlX19teVRhZ3MnXSlcbiAgY29uc3QgW2FjdGlvbnMsIHNldEFjdGlvbnNdID0gUmVhY3QudXNlU3RhdGU8QWN0aW9uW10+KFtdKVxuICBjb25zdCBbaXNBZGRUYWdNb2RhbE9wZW4sIHNldElzQWRkVGFnTW9kYWxPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbaXNFeHBvcnRUYWdzTW9kYWxPcGVuLCBzZXRJc0V4cG9ydFRhZ3NNb2RhbE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgdG9nZ2xlQWRkVGFnTW9kYWwgPSAoKSA9PiBzZXRJc0FkZFRhZ01vZGFsT3BlbighaXNBZGRUYWdNb2RhbE9wZW4pXG4gIGNvbnN0IHRvZ2dsZUV4cG9ydFRhZ3NNb2RhbCA9ICgpID0+IHNldElzRXhwb3J0VGFnc01vZGFsT3BlbighaXNFeHBvcnRUYWdzTW9kYWxPcGVuKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbmV3QWN0aW9ucyA9IFtdXG4gICAgaWYgKGNvb2tpZXMuZmVhdHVyZV9fbXlUYWdzID09PSAnb24nKSB7XG4gICAgICBuZXdBY3Rpb25zLnB1c2goeyB0aXRsZTogJ0V4cG9ydCBoYXNodGFncycsIG9uQ2xpY2s6IHRvZ2dsZUV4cG9ydFRhZ3NNb2RhbCB9KVxuICAgICAgbmV3QWN0aW9ucy5wdXNoKHsgdGl0bGU6ICdBZGQgaGFzaHRhZ3MnLCBvbkNsaWNrOiB0b2dnbGVBZGRUYWdNb2RhbCB9KVxuICAgIH1cbiAgICBzZXRBY3Rpb25zKG5ld0FjdGlvbnMpXG4gIH0sIFtjb29raWVzXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q29udGFpbmVyIHRpdGxlPSdBY3Rpb25zJyBvbkNsaWNrPXsoKSA9PiBzZXRJc0FjdGl2ZSghaXNBY3RpdmUpfT5cbiAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgPGNpcmNsZSBjeD1cIjVcIiBjeT1cIjEyXCIgcj1cIjJcIiAvPlxuICAgICAgICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiMlwiIC8+XG4gICAgICAgICAgPGNpcmNsZSBjeD1cIjE5XCIgY3k9XCIxMlwiIHI9XCIyXCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICAgIDxQb3B1cCBpc0FjdGl2ZT17aXNBY3RpdmV9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPjxJdGVtPkhvbWU8L0l0ZW0+PC9MaW5rPlxuICAgICAgICAgIHthY3Rpb25zLm1hcChhY3Rpb24gPT4gKFxuICAgICAgICAgICAgPEl0ZW0ga2V5PXthY3Rpb24udGl0bGV9IG9uQ2xpY2s9e2FjdGlvbi5vbkNsaWNrfT57YWN0aW9uLnRpdGxlfTwvSXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Qb3B1cD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPEFkZFRhZ01vZGFsIGRyYXdpbmc9e2RyYXdpbmd9IGlzT3Blbj17aXNBZGRUYWdNb2RhbE9wZW59IGNsb3NlTW9kYWw9e3RvZ2dsZUFkZFRhZ01vZGFsfSAvPlxuICAgICAgPEV4cG9ydFRhZ3NNb2RhbCBpc09wZW49e2lzRXhwb3J0VGFnc01vZGFsT3Blbn0gY2xvc2VNb2RhbD17dG9nZ2xlRXhwb3J0VGFnc01vZGFsfSAvPlxuICAgIDwvPlxuICApXG59XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5idXR0b24uYXR0cnMoeyBjbGFzc05hbWU6ICdFeHBsb3Jlcl9fQWN0aW9uc01lbnVfX0NvbnRhaW5lcid9KWBcbiAgJHtuYXZCYXJJdGVtU3R5bGVzfVxuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IDA7XG5cbiAgc3ZnIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjRweDtcbiAgfVxuYFxuXG5jb25zdCBQb3B1cCA9IHN0eWxlZC5kaXYuYXR0cnMoeyBjbGFzc05hbWU6ICdFeHBsb3Jlcl9fQWN0aW9uc01lbnVfX1BvcHVwJ30pPHsgaXNBY3RpdmU6IGJvb2xlYW4gfT5gXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvdHRvbTogMTAwJTtcbiAgZGlzcGxheTogJHtvID0+ICFvLmlzQWN0aXZlICYmICdub25lJ307XG4gIHBhZGRpbmc6IDhweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDIwMHB4O1xuYFxuXG5jb25zdCBJdGVtID0gc3R5bGVkLmEuYXR0cnMoeyBjbGFzc05hbWU6ICdFeHBsb3Jlcl9fQWN0aW9uc01lbnVfX0l0ZW0nfSlgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDI0cHg7XG4gIHBhZGRpbmc6IDhweDtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xuICB9XG5gXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DrawingPage/ActionsMenu.tsx\n");

/***/ })

})