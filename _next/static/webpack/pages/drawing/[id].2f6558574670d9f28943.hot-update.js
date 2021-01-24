webpackHotUpdate_N_E("pages/drawing/[id]",{

/***/ "./components/DrawingPage/ActionsMenu.tsx":
/*!************************************************!*\
  !*** ./components/DrawingPage/ActionsMenu.tsx ***!
  \************************************************/
/*! exports provided: ActionsMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ActionsMenu\", function() { return ActionsMenu; });\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ \"./components/DrawingPage/styles.tsx\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var _EditTagsModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EditTagsModal */ \"./components/DrawingPage/EditTagsModal.tsx\");\n/* harmony import */ var _ExportTagsModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ExportTagsModal */ \"./components/DrawingPage/ExportTagsModal.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/pfisher/Code/pwfisher/explodingdog/explorer/components/DrawingPage/ActionsMenu.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\nvar ActionsMenu = function ActionsMenu(_ref) {\n  _s();\n\n  var drawing = _ref.drawing;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),\n      _React$useState2 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      isActive = _React$useState2[0],\n      setIsActive = _React$useState2[1];\n\n  var _useCookies = Object(react_cookie__WEBPACK_IMPORTED_MODULE_5__[\"useCookies\"])(['feature__myTags']),\n      _useCookies2 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useCookies, 1),\n      cookies = _useCookies2[0];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]),\n      _React$useState4 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState3, 2),\n      actions = _React$useState4[0],\n      setActions = _React$useState4[1];\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),\n      _React$useState6 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState5, 2),\n      isEditTagsModalOpen = _React$useState6[0],\n      setIsEditTagsModalOpen = _React$useState6[1];\n\n  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),\n      _React$useState8 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState7, 2),\n      isExportTagsModalOpen = _React$useState8[0],\n      setIsExportTagsModalOpen = _React$useState8[1];\n\n  var toggleEditTagsModal = function toggleEditTagsModal() {\n    return setIsEditTagsModalOpen(!isEditTagsModalOpen);\n  };\n\n  var toggleExportTagsModal = function toggleExportTagsModal() {\n    return setIsExportTagsModalOpen(!isExportTagsModalOpen);\n  };\n\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {\n    var newActions = [];\n\n    if (cookies.feature__myTags === 'on') {\n      newActions.push({\n        title: 'Export tags',\n        onClick: toggleExportTagsModal\n      });\n      newActions.push({\n        title: 'Edit tags',\n        onClick: toggleEditTagsModal\n      });\n    }\n\n    setActions(newActions);\n  }, [cookies]);\n  var ref = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);\n\n  var onClick = function onClick(e) {\n    var _ref$current;\n\n    if (e.target instanceof HTMLElement && !((_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.contains(e.target))) setIsActive(false);\n  };\n\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {\n    if (isActive) document.addEventListener('mousedown', onClick);else document.removeEventListener('mousedown', onClick);\n    return function () {\n      return document.removeEventListener('mousedown', onClick);\n    };\n  }, [isActive]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(Container, {\n    title: \"Actions\",\n    onClick: function onClick() {\n      return setIsActive(!isActive);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, __jsx(\"svg\", {\n    viewBox: \"0 0 24 24\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, __jsx(\"circle\", {\n    cx: \"5\",\n    cy: \"12\",\n    r: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 11\n    }\n  }), __jsx(\"circle\", {\n    cx: \"12\",\n    cy: \"12\",\n    r: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  }), __jsx(\"circle\", {\n    cx: \"19\",\n    cy: \"12\",\n    r: \"2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 11\n    }\n  })), __jsx(Popup, Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    isActive: isActive,\n    onClick: onClick,\n    ref: ref\n  }, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 11\n    }\n  }, __jsx(Item, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 26\n    }\n  }, \"Home\")), actions.map(function (action) {\n    return __jsx(Item, {\n      key: action.title,\n      onClick: action.onClick,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 13\n      }\n    }, action.title);\n  }), __jsx(Copyright, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 11\n    }\n  }, \"\\xA92021 Sam Brown\"))), isEditTagsModalOpen && __jsx(_EditTagsModal__WEBPACK_IMPORTED_MODULE_6__[\"EditTagsModal\"], Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    drawing: drawing\n  }, {\n    isOpen: isEditTagsModalOpen,\n    closeModal: toggleEditTagsModal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  })), isExportTagsModalOpen && __jsx(_ExportTagsModal__WEBPACK_IMPORTED_MODULE_7__[\"ExportTagsModal\"], {\n    isOpen: isExportTagsModalOpen,\n    closeModal: toggleExportTagsModal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }));\n};\n\n_s(ActionsMenu, \"7+NG4u3zeFObgEYuJAA+Z7Og1s4=\", false, function () {\n  return [react_cookie__WEBPACK_IMPORTED_MODULE_5__[\"useCookies\"]];\n});\n\n_c = ActionsMenu;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button.attrs({\n  className: 'Explorer__ActionsMenu__Container'\n}).withConfig({\n  displayName: \"ActionsMenu__Container\",\n  componentId: \"sc-1a81ly3-0\"\n})([\"\", \" background:none;border:0;svg{display:block;width:24px;}\"], _styles__WEBPACK_IMPORTED_MODULE_4__[\"navBarItemStyles\"]);\n_c2 = Container;\nvar Popup = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.attrs({\n  className: 'Explorer__ActionsMenu__Popup'\n}).withConfig({\n  displayName: \"ActionsMenu__Popup\",\n  componentId: \"sc-1a81ly3-1\"\n})([\"background:white;border:1px solid rgba(0,0,0,0.2);bottom:100%;display:\", \";padding:8px;position:absolute;right:0;text-align:left;width:200px;\"], function (o) {\n  return !o.isActive && 'none';\n});\n_c3 = Popup;\nvar Item = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].a.attrs({\n  className: 'Explorer__ActionsMenu__Item'\n}).withConfig({\n  displayName: \"ActionsMenu__Item\",\n  componentId: \"sc-1a81ly3-2\"\n})([\"display:block;font-size:24px;padding:8px;&:hover{background:#e5e5e5;}\"]);\n_c4 = Item;\nvar Copyright = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.attrs({\n  className: 'Explorer__ActionsMenu__Copyright'\n}).withConfig({\n  displayName: \"ActionsMenu__Copyright\",\n  componentId: \"sc-1a81ly3-3\"\n})([\"color:#999;font-size:14px;padding:12px 8px 4px;text-align:center;\"]);\n_c5 = Copyright;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"ActionsMenu\");\n$RefreshReg$(_c2, \"Container\");\n$RefreshReg$(_c3, \"Popup\");\n$RefreshReg$(_c4, \"Item\");\n$RefreshReg$(_c5, \"Copyright\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS9BY3Rpb25zTWVudS50c3g/ZDFlZiJdLCJuYW1lcyI6WyJBY3Rpb25zTWVudSIsImRyYXdpbmciLCJSZWFjdCIsInVzZVN0YXRlIiwiaXNBY3RpdmUiLCJzZXRJc0FjdGl2ZSIsInVzZUNvb2tpZXMiLCJjb29raWVzIiwiYWN0aW9ucyIsInNldEFjdGlvbnMiLCJpc0VkaXRUYWdzTW9kYWxPcGVuIiwic2V0SXNFZGl0VGFnc01vZGFsT3BlbiIsImlzRXhwb3J0VGFnc01vZGFsT3BlbiIsInNldElzRXhwb3J0VGFnc01vZGFsT3BlbiIsInRvZ2dsZUVkaXRUYWdzTW9kYWwiLCJ0b2dnbGVFeHBvcnRUYWdzTW9kYWwiLCJ1c2VFZmZlY3QiLCJuZXdBY3Rpb25zIiwiZmVhdHVyZV9fbXlUYWdzIiwicHVzaCIsInRpdGxlIiwib25DbGljayIsInJlZiIsInVzZVJlZiIsImUiLCJ0YXJnZXQiLCJIVE1MRWxlbWVudCIsImN1cnJlbnQiLCJjb250YWlucyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtYXAiLCJhY3Rpb24iLCJDb250YWluZXIiLCJzdHlsZWQiLCJidXR0b24iLCJhdHRycyIsImNsYXNzTmFtZSIsIm5hdkJhckl0ZW1TdHlsZXMiLCJQb3B1cCIsImRpdiIsIm8iLCJJdGVtIiwiYSIsIkNvcHlyaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFPTyxJQUFNQSxXQUEyQyxHQUFHLFNBQTlDQSxXQUE4QyxPQUFpQjtBQUFBOztBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFBQSx3QkFDMUNDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRDBDO0FBQUE7QUFBQSxNQUNuRUMsUUFEbUU7QUFBQSxNQUN6REMsV0FEeUQ7O0FBQUEs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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5CSixDQURGO0FBd0JELENBckRNOztHQUFNZixXO1VBRU9NLHVEOzs7S0FGUE4sVztBQXVEYixJQUFNa0MsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxNQUFQLENBQWNDLEtBQWQsQ0FBb0I7QUFBRUMsV0FBUyxFQUFFO0FBQWIsQ0FBcEIsQ0FBSDtBQUFBO0FBQUE7QUFBQSxxRUFDWEMsd0RBRFcsQ0FBZjtNQUFNTCxTO0FBV04sSUFBTU0sS0FBSyxHQUFHTCx5REFBTSxDQUFDTSxHQUFQLENBQVdKLEtBQVgsQ0FBaUI7QUFBRUMsV0FBUyxFQUFFO0FBQWIsQ0FBakIsQ0FBSDtBQUFBO0FBQUE7QUFBQSxzSkFJRSxVQUFBSSxDQUFDO0FBQUEsU0FBSSxDQUFDQSxDQUFDLENBQUN0QyxRQUFILElBQWUsTUFBbkI7QUFBQSxDQUpILENBQVg7TUFBTW9DLEs7QUFZTixJQUFNRyxJQUFJLEdBQUdSLHlEQUFNLENBQUNTLENBQVAsQ0FBU1AsS0FBVCxDQUFlO0FBQUVDLFdBQVMsRUFBRTtBQUFiLENBQWYsQ0FBSDtBQUFBO0FBQUE7QUFBQSw2RUFBVjtNQUFNSyxJO0FBVU4sSUFBTUUsU0FBUyxHQUFHVix5REFBTSxDQUFDTSxHQUFQLENBQVdKLEtBQVgsQ0FBaUI7QUFBRUMsV0FBUyxFQUFFO0FBQWIsQ0FBakIsQ0FBSDtBQUFBO0FBQUE7QUFBQSx5RUFBZjtNQUFNTyxTIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS9BY3Rpb25zTWVudS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgbmF2QmFySXRlbVN0eWxlcyB9IGZyb20gJy4vc3R5bGVzJ1xuaW1wb3J0IHsgdXNlQ29va2llcyB9IGZyb20gJ3JlYWN0LWNvb2tpZSdcbmltcG9ydCB7IERyYXdpbmcgfSBmcm9tICcuLi8uLi90eXBlcydcbmltcG9ydCB7IEVkaXRUYWdzTW9kYWwgfSBmcm9tICcuL0VkaXRUYWdzTW9kYWwnXG5pbXBvcnQgeyBFeHBvcnRUYWdzTW9kYWwgfSBmcm9tICcuL0V4cG9ydFRhZ3NNb2RhbCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxudHlwZSBBY3Rpb24gPSB7XG4gIHRpdGxlOiBzdHJpbmdcbiAgb25DbGljazogKCkgPT4gdm9pZFxufVxuXG5leHBvcnQgY29uc3QgQWN0aW9uc01lbnU6IFJlYWN0LkZDPHsgZHJhd2luZzogRHJhd2luZyB9PiA9ICh7IGRyYXdpbmcgfSkgPT4ge1xuICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbY29va2llc10gPSB1c2VDb29raWVzKFsnZmVhdHVyZV9fbXlUYWdzJ10pXG4gIGNvbnN0IFthY3Rpb25zLCBzZXRBY3Rpb25zXSA9IFJlYWN0LnVzZVN0YXRlPEFjdGlvbltdPihbXSlcbiAgY29uc3QgW2lzRWRpdFRhZ3NNb2RhbE9wZW4sIHNldElzRWRpdFRhZ3NNb2RhbE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtpc0V4cG9ydFRhZ3NNb2RhbE9wZW4sIHNldElzRXhwb3J0VGFnc01vZGFsT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCB0b2dnbGVFZGl0VGFnc01vZGFsID0gKCkgPT4gc2V0SXNFZGl0VGFnc01vZGFsT3BlbighaXNFZGl0VGFnc01vZGFsT3BlbilcbiAgY29uc3QgdG9nZ2xlRXhwb3J0VGFnc01vZGFsID0gKCkgPT4gc2V0SXNFeHBvcnRUYWdzTW9kYWxPcGVuKCFpc0V4cG9ydFRhZ3NNb2RhbE9wZW4pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBuZXdBY3Rpb25zID0gW11cbiAgICBpZiAoY29va2llcy5mZWF0dXJlX19teVRhZ3MgPT09ICdvbicpIHtcbiAgICAgIG5ld0FjdGlvbnMucHVzaCh7IHRpdGxlOiAnRXhwb3J0IHRhZ3MnLCBvbkNsaWNrOiB0b2dnbGVFeHBvcnRUYWdzTW9kYWwgfSlcbiAgICAgIG5ld0FjdGlvbnMucHVzaCh7IHRpdGxlOiAnRWRpdCB0YWdzJywgb25DbGljazogdG9nZ2xlRWRpdFRhZ3NNb2RhbCB9KVxuICAgIH1cbiAgICBzZXRBY3Rpb25zKG5ld0FjdGlvbnMpXG4gIH0sIFtjb29raWVzXSlcblxuICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpXG4gIGNvbnN0IG9uQ2xpY2sgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgIGlmIChlLnRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmICFyZWYuY3VycmVudD8uY29udGFpbnMoZS50YXJnZXQpKSBzZXRJc0FjdGl2ZShmYWxzZSlcbiAgfVxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc0FjdGl2ZSkgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25DbGljaylcbiAgICBlbHNlIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uQ2xpY2spXG4gICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uQ2xpY2spXG4gIH0sIFtpc0FjdGl2ZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENvbnRhaW5lciB0aXRsZT0nQWN0aW9ucycgb25DbGljaz17KCkgPT4gc2V0SXNBY3RpdmUoIWlzQWN0aXZlKX0+XG4gICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgIDxjaXJjbGUgY3g9XCI1XCIgY3k9XCIxMlwiIHI9XCIyXCIgLz5cbiAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjJcIiAvPlxuICAgICAgICAgIDxjaXJjbGUgY3g9XCIxOVwiIGN5PVwiMTJcIiByPVwiMlwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgICA8UG9wdXAgey4uLnsgaXNBY3RpdmUsIG9uQ2xpY2ssIHJlZiB9fT5cbiAgICAgICAgICA8TGluayBocmVmPScvJz48SXRlbT5Ib21lPC9JdGVtPjwvTGluaz5cbiAgICAgICAgICB7YWN0aW9ucy5tYXAoYWN0aW9uID0+IChcbiAgICAgICAgICAgIDxJdGVtIGtleT17YWN0aW9uLnRpdGxlfSBvbkNsaWNrPXthY3Rpb24ub25DbGlja30+e2FjdGlvbi50aXRsZX08L0l0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPENvcHlyaWdodD7CqTIwMjEgU2FtIEJyb3duPC9Db3B5cmlnaHQ+XG4gICAgICAgIDwvUG9wdXA+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIHtpc0VkaXRUYWdzTW9kYWxPcGVuICYmIChcbiAgICAgICAgPEVkaXRUYWdzTW9kYWwgey4uLnsgZHJhd2luZyB9fSBpc09wZW49e2lzRWRpdFRhZ3NNb2RhbE9wZW59IGNsb3NlTW9kYWw9e3RvZ2dsZUVkaXRUYWdzTW9kYWx9IC8+XG4gICAgICApfVxuICAgICAge2lzRXhwb3J0VGFnc01vZGFsT3BlbiAmJiAoXG4gICAgICAgIDxFeHBvcnRUYWdzTW9kYWwgaXNPcGVuPXtpc0V4cG9ydFRhZ3NNb2RhbE9wZW59IGNsb3NlTW9kYWw9e3RvZ2dsZUV4cG9ydFRhZ3NNb2RhbH0gLz5cbiAgICAgICl9XG4gICAgPC8+XG4gIClcbn1cblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmJ1dHRvbi5hdHRycyh7IGNsYXNzTmFtZTogJ0V4cGxvcmVyX19BY3Rpb25zTWVudV9fQ29udGFpbmVyJ30pYFxuICAke25hdkJhckl0ZW1TdHlsZXN9XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogMDtcblxuICBzdmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAyNHB4O1xuICB9XG5gXG5cbmNvbnN0IFBvcHVwID0gc3R5bGVkLmRpdi5hdHRycyh7IGNsYXNzTmFtZTogJ0V4cGxvcmVyX19BY3Rpb25zTWVudV9fUG9wdXAnfSk8eyBpc0FjdGl2ZTogYm9vbGVhbiB9PmBcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm90dG9tOiAxMDAlO1xuICBkaXNwbGF5OiAke28gPT4gIW8uaXNBY3RpdmUgJiYgJ25vbmUnfTtcbiAgcGFkZGluZzogOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMjAwcHg7XG5gXG5cbmNvbnN0IEl0ZW0gPSBzdHlsZWQuYS5hdHRycyh7IGNsYXNzTmFtZTogJ0V4cGxvcmVyX19BY3Rpb25zTWVudV9fSXRlbSd9KWBcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcGFkZGluZzogOHB4O1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNlNWU1ZTU7XG4gIH1cbmBcblxuY29uc3QgQ29weXJpZ2h0ID0gc3R5bGVkLmRpdi5hdHRycyh7IGNsYXNzTmFtZTogJ0V4cGxvcmVyX19BY3Rpb25zTWVudV9fQ29weXJpZ2h0JyB9KWBcbiAgY29sb3I6ICM5OTk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMTJweCA4cHggNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DrawingPage/ActionsMenu.tsx\n");

/***/ })

})