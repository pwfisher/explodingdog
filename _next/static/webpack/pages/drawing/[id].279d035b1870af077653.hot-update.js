webpackHotUpdate_N_E("pages/drawing/[id]",{

/***/ "./components/DrawingPage/AddTagModal.tsx":
/*!************************************************!*\
  !*** ./components/DrawingPage/AddTagModal.tsx ***!
  \************************************************/
/*! exports provided: AddTagModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddTagModal\", function() { return AddTagModal; });\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_hashtags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/hashtags */ \"./lib/hashtags.ts\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/pfisher/Code/pwfisher/explodingdog/explorer/components/DrawingPage/AddTagModal.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction _templateObject3() {\n  var data = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  border-right: 1px solid #DDD;\\n  display: inline-block;\\n  margin: 8px 0;\\n  padding: 0 8px;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  text-align: center;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-size: 24px;\\n  position: absolute;\\n  right: 24px;\\n  top: 24px;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar AddTagModal = function AddTagModal(_ref) {\n  _s();\n\n  var drawing = _ref.drawing,\n      isOpen = _ref.isOpen,\n      closeModal = _ref.closeModal;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(''),\n      _React$useState2 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      newTag = _React$useState2[0],\n      setNewTag = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_5__[\"loadTagDrawingSets\"])()),\n      _React$useState4 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState3, 2),\n      tagDrawingSets = _React$useState4[0],\n      setTagDrawingSets = _React$useState4[1];\n\n  function onNewTagSubmit(e) {\n    Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_5__[\"addTagToDrawing\"])(newTag, drawing);\n    setNewTag('');\n    setTagDrawingSets(Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_5__[\"loadTagDrawingSets\"])());\n    e.preventDefault();\n  }\n\n  var tags = Object.keys(tagDrawingSets);\n  return __jsx(react_modal__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    isOpen: isOpen,\n    onRequestClose: closeModal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    onKeyDown: function onKeyDown(e) {\n      return e.stopPropagation();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, __jsx(CloseButton, {\n    onClick: closeModal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, \"close\"), __jsx(Title, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, \"Add Hashtags\"), __jsx(\"pre\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, JSON.stringify(drawing, null, 2)), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }), __jsx(\"form\", {\n    onSubmit: onNewTagSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, \"New: \", __jsx(\"input\", {\n    value: newTag,\n    onChange: function onChange(e) {\n      return setNewTag(e.currentTarget.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 16\n    }\n  }), \" \", __jsx(\"input\", {\n    type: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 90\n    }\n  })), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }), __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, tags.sort().map(function (tag) {\n    return __jsx(Tag, {\n      key: tag,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 13\n      }\n    }, __jsx(\"label\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 15\n      }\n    }, __jsx(\"input\", {\n      type: \"checkbox\",\n      checked: Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_5__[\"drawingHasTag\"])(drawing, tag),\n      onChange: function onChange(e) {\n        e.currentTarget.checked ? Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_5__[\"addTagToDrawing\"])(tag, drawing) : Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_5__[\"removeTagFromDrawing\"])(tag, drawing);\n        setTagDrawingSets(Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_5__[\"loadTagDrawingSets\"])());\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 17\n      }\n    }), \" \", tag));\n  }))));\n};\n\n_s(AddTagModal, \"cpmfIzzP6IRKlogNFaWQ3fYrj1U=\");\n\n_c = AddTagModal;\nvar CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button.attrs({\n  classNames: 'Explorer__AddTagModal__CloseButton'\n})(_templateObject());\n_c2 = CloseButton;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h1.attrs({\n  classNames: 'Explorer__AddTagModal__CloseButton'\n})(_templateObject2());\n_c3 = Title;\nvar Tag = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].li.attrs({\n  classNames: 'Explorer__AddTagModal__CloseButton'\n})(_templateObject3());\n_c4 = Tag;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"AddTagModal\");\n$RefreshReg$(_c2, \"CloseButton\");\n$RefreshReg$(_c3, \"Title\");\n$RefreshReg$(_c4, \"Tag\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS9BZGRUYWdNb2RhbC50c3g/M2Y3YiJdLCJuYW1lcyI6WyJBZGRUYWdNb2RhbCIsImRyYXdpbmciLCJpc09wZW4iLCJjbG9zZU1vZGFsIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm5ld1RhZyIsInNldE5ld1RhZyIsImxvYWRUYWdEcmF3aW5nU2V0cyIsInRhZ0RyYXdpbmdTZXRzIiwic2V0VGFnRHJhd2luZ1NldHMiLCJvbk5ld1RhZ1N1Ym1pdCIsImUiLCJhZGRUYWdUb0RyYXdpbmciLCJwcmV2ZW50RGVmYXVsdCIsInRhZ3MiLCJPYmplY3QiLCJrZXlzIiwic3RvcFByb3BhZ2F0aW9uIiwiSlNPTiIsInN0cmluZ2lmeSIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsInNvcnQiLCJtYXAiLCJ0YWciLCJkcmF3aW5nSGFzVGFnIiwiY2hlY2tlZCIsInJlbW92ZVRhZ0Zyb21EcmF3aW5nIiwiQ2xvc2VCdXR0b24iLCJzdHlsZWQiLCJidXR0b24iLCJhdHRycyIsImNsYXNzTmFtZXMiLCJUaXRsZSIsImgxIiwiVGFnIiwibGkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVPLElBQU1BLFdBQW9GLEdBQUcsU0FBdkZBLFdBQXVGLE9BSTlGO0FBQUE7O0FBQUEsTUFISkMsT0FHSSxRQUhKQSxPQUdJO0FBQUEsTUFGSkMsTUFFSSxRQUZKQSxNQUVJO0FBQUEsTUFESkMsVUFDSSxRQURKQSxVQUNJOztBQUFBLHdCQUN3QkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FEeEI7QUFBQTtBQUFBLE1BQ0dDLE1BREg7QUFBQSxNQUNXQyxTQURYOztBQUFBLHlCQUV3Q0gsNENBQUssQ0FBQ0MsUUFBTixDQUErQkcsd0VBQWtCLEVBQWpELENBRnhDO0FBQUE7QUFBQSxNQUVHQyxjQUZIO0FB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SyxLQUFLLEdBQUdKLHlEQUFNLENBQUNLLEVBQVAsQ0FBVUgsS0FBVixDQUFnQjtBQUFFQyxZQUFVLEVBQUU7QUFBZCxDQUFoQixDQUFILG9CQUFYO01BQU1DLEs7QUFJTixJQUFNRSxHQUFHLEdBQUdOLHlEQUFNLENBQUNPLEVBQVAsQ0FBVUwsS0FBVixDQUFnQjtBQUFFQyxZQUFVLEVBQUU7QUFBZCxDQUFoQixDQUFILG9CQUFUO01BQU1HLEciLCJmaWxlIjoiLi9jb21wb25lbnRzL0RyYXdpbmdQYWdlL0FkZFRhZ01vZGFsLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBEcmF3aW5nLCBUYWdEcmF3aW5nU2V0cyB9IGZyb20gJy4uLy4uL3R5cGVzJ1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJ1xuaW1wb3J0IHsgYWRkVGFnVG9EcmF3aW5nLCBsb2FkVGFnRHJhd2luZ1NldHMsIGRyYXdpbmdIYXNUYWcsIHJlbW92ZVRhZ0Zyb21EcmF3aW5nIH0gZnJvbSAnLi4vLi4vbGliL2hhc2h0YWdzJ1xuXG5leHBvcnQgY29uc3QgQWRkVGFnTW9kYWw6IFJlYWN0LkZDPHsgZHJhd2luZzogRHJhd2luZzsgaXNPcGVuOiBib29sZWFuOyBjbG9zZU1vZGFsOiAoKSA9PiB2b2lkIH0+ID0gKHtcbiAgZHJhd2luZyxcbiAgaXNPcGVuLFxuICBjbG9zZU1vZGFsLFxufSkgPT4ge1xuICBjb25zdCBbbmV3VGFnLCBzZXROZXdUYWddID0gUmVhY3QudXNlU3RhdGUoJycpXG4gIGNvbnN0IFt0YWdEcmF3aW5nU2V0cywgc2V0VGFnRHJhd2luZ1NldHNdID0gUmVhY3QudXNlU3RhdGU8VGFnRHJhd2luZ1NldHM+KGxvYWRUYWdEcmF3aW5nU2V0cygpKVxuXG4gIGZ1bmN0aW9uIG9uTmV3VGFnU3VibWl0KGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSB7XG4gICAgYWRkVGFnVG9EcmF3aW5nKG5ld1RhZywgZHJhd2luZylcbiAgICBzZXROZXdUYWcoJycpXG4gICAgc2V0VGFnRHJhd2luZ1NldHMobG9hZFRhZ0RyYXdpbmdTZXRzKCkpXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cbiAgY29uc3QgdGFncyA9IE9iamVjdC5rZXlzKHRhZ0RyYXdpbmdTZXRzKVxuXG4gIHJldHVybiAoXG4gICAgPE1vZGFsXG4gICAgICBpc09wZW49e2lzT3Blbn1cbiAgICAgIG9uUmVxdWVzdENsb3NlPXtjbG9zZU1vZGFsfVxuICAgID5cbiAgICAgIDxkaXYgb25LZXlEb3duPXtlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9PlxuICAgICAgICA8Q2xvc2VCdXR0b24gb25DbGljaz17Y2xvc2VNb2RhbH0+Y2xvc2U8L0Nsb3NlQnV0dG9uPlxuICAgICAgICA8VGl0bGU+QWRkIEhhc2h0YWdzPC9UaXRsZT5cbiAgICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoZHJhd2luZywgbnVsbCwgMil9PC9wcmU+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25OZXdUYWdTdWJtaXR9PlxuICAgICAgICAgIE5ldzogPGlucHV0IHZhbHVlPXtuZXdUYWd9IG9uQ2hhbmdlPXtlID0+IHNldE5ld1RhZyhlLmN1cnJlbnRUYXJnZXQudmFsdWUpfSAvPiA8aW5wdXQgdHlwZT0nc3VibWl0JyAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3RhZ3Muc29ydCgpLm1hcCh0YWcgPT4gKFxuICAgICAgICAgICAgPFRhZyBrZXk9e3RhZ30+XG4gICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9J2NoZWNrYm94J1xuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZHJhd2luZ0hhc1RhZyhkcmF3aW5nLCB0YWcpfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA/IGFkZFRhZ1RvRHJhd2luZyh0YWcsIGRyYXdpbmcpIDogcmVtb3ZlVGFnRnJvbURyYXdpbmcodGFnLCBkcmF3aW5nKVxuICAgICAgICAgICAgICAgICAgICBzZXRUYWdEcmF3aW5nU2V0cyhsb2FkVGFnRHJhd2luZ1NldHMoKSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz4ge3RhZ31cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvVGFnPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9Nb2RhbD5cbiAgKVxufVxuXG5jb25zdCBDbG9zZUJ1dHRvbiA9IHN0eWxlZC5idXR0b24uYXR0cnMoeyBjbGFzc05hbWVzOiAnRXhwbG9yZXJfX0FkZFRhZ01vZGFsX19DbG9zZUJ1dHRvbicgfSlgXG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjRweDtcbiAgdG9wOiAyNHB4O1xuYFxuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oMS5hdHRycyh7IGNsYXNzTmFtZXM6ICdFeHBsb3Jlcl9fQWRkVGFnTW9kYWxfX0Nsb3NlQnV0dG9uJyB9KWBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYFxuXG5jb25zdCBUYWcgPSBzdHlsZWQubGkuYXR0cnMoeyBjbGFzc05hbWVzOiAnRXhwbG9yZXJfX0FkZFRhZ01vZGFsX19DbG9zZUJ1dHRvbicgfSlgXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNEREQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiA4cHggMDtcbiAgcGFkZGluZzogMCA4cHg7XG5gXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DrawingPage/AddTagModal.tsx\n");

/***/ })

})