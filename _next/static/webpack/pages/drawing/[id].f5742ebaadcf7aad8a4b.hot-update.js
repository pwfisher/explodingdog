webpackHotUpdate_N_E("pages/drawing/[id]",{

/***/ "./components/DrawingPage/AddTagModal.tsx":
/*!************************************************!*\
  !*** ./components/DrawingPage/AddTagModal.tsx ***!
  \************************************************/
/*! exports provided: AddTagModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddTagModal\", function() { return AddTagModal; });\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_hashtags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/hashtags */ \"./lib/hashtags.ts\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/pfisher/Code/pwfisher/explodingdog/explorer/components/DrawingPage/AddTagModal.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction _templateObject4() {\n  var data = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  border-right: 1px solid #DDD;\\n  display: inline-block;\\n  margin: 8px 0;\\n  padding: 0 8px;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: block;\\n  font-size: 9px;\\n  line-height: 16px;\\n  padding: 0 0 8px;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  text-align: center;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-size: 24px;\\n  position: absolute;\\n  right: 24px;\\n  top: 24px;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar AddTagModal = function AddTagModal(_ref) {\n  _s();\n\n  var drawing = _ref.drawing,\n      isOpen = _ref.isOpen,\n      closeModal = _ref.closeModal;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(''),\n      _React$useState2 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      newTag = _React$useState2[0],\n      setNewTag = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_5__[\"loadTagDrawingSets\"])()),\n      _React$useState4 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState3, 2),\n      tagDrawingSets = _React$useState4[0],\n      setTagDrawingSets = _React$useState4[1];\n\n  function onNewTagSubmit(e) {\n    Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_5__[\"addTagToDrawing\"])(newTag, drawing);\n    setNewTag('');\n    setTagDrawingSets(Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_5__[\"loadTagDrawingSets\"])());\n    e.preventDefault();\n  }\n\n  var tags = Object.keys(tagDrawingSets);\n  return __jsx(react_modal__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    isOpen: isOpen,\n    onRequestClose: closeModal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    onKeyDown: function onKeyDown(e) {\n      return e.stopPropagation();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, __jsx(CloseButton, {\n    onClick: closeModal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, \"close\"), __jsx(Title, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, \"Add Hashtags\"), __jsx(Code, {\n    style: {\n      fontSize: '9px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, JSON.stringify(drawing, null, 2)), __jsx(\"form\", {\n    onSubmit: onNewTagSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, \"New: \", __jsx(\"input\", {\n    value: newTag,\n    onChange: function onChange(e) {\n      return setNewTag(e.currentTarget.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 16\n    }\n  }), \" \", __jsx(\"input\", {\n    type: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 90\n    }\n  })), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }), __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, tags.sort().map(function (tag) {\n    return __jsx(Tag, {\n      key: tag,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 13\n      }\n    }, __jsx(\"label\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 15\n      }\n    }, __jsx(\"input\", {\n      type: \"checkbox\",\n      checked: Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_5__[\"drawingHasTag\"])(drawing, tag),\n      onChange: function onChange(e) {\n        e.currentTarget.checked ? Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_5__[\"addTagToDrawing\"])(tag, drawing) : Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_5__[\"removeTagFromDrawing\"])(tag, drawing);\n        setTagDrawingSets(Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_5__[\"loadTagDrawingSets\"])());\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }\n    }), \" \", tag));\n  }))));\n};\n\n_s(AddTagModal, \"cpmfIzzP6IRKlogNFaWQ3fYrj1U=\");\n\n_c = AddTagModal;\nvar CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button.attrs({\n  classNames: 'Explorer__AddTagModal__CloseButton'\n})(_templateObject());\n_c2 = CloseButton;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h1.attrs({\n  classNames: 'Explorer__AddTagModal__Title'\n})(_templateObject2());\n_c3 = Title;\nvar Code = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].code.attrs({\n  classNames: 'Explorer__AddTagModal__Code'\n})(_templateObject3());\n_c4 = Code;\nvar Tag = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].li.attrs({\n  classNames: 'Explorer__AddTagModal__Tag'\n})(_templateObject4());\n_c5 = Tag;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"AddTagModal\");\n$RefreshReg$(_c2, \"CloseButton\");\n$RefreshReg$(_c3, \"Title\");\n$RefreshReg$(_c4, \"Code\");\n$RefreshReg$(_c5, \"Tag\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS9BZGRUYWdNb2RhbC50c3g/M2Y3YiJdLCJuYW1lcyI6WyJBZGRUYWdNb2RhbCIsImRyYXdpbmciLCJpc09wZW4iLCJjbG9zZU1vZGFsIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm5ld1RhZyIsInNldE5ld1RhZyIsImxvYWRUYWdEcmF3aW5nU2V0cyIsInRhZ0RyYXdpbmdTZXRzIiwic2V0VGFnRHJhd2luZ1NldHMiLCJvbk5ld1RhZ1N1Ym1pdCIsImUiLCJhZGRUYWdUb0RyYXdpbmciLCJwcmV2ZW50RGVmYXVsdCIsInRhZ3MiLCJPYmplY3QiLCJrZXlzIiwic3RvcFByb3BhZ2F0aW9uIiwiZm9udFNpemUiLCJKU09OIiwic3RyaW5naWZ5IiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwic29ydCIsIm1hcCIsInRhZyIsImRyYXdpbmdIYXNUYWciLCJjaGVja2VkIiwicmVtb3ZlVGFnRnJvbURyYXdpbmciLCJDbG9zZUJ1dHRvbiIsInN0eWxlZCIsImJ1dHRvbiIsImF0dHJzIiwiY2xhc3NOYW1lcyIsIlRpdGxlIiwiaDEiLCJDb2RlIiwiY29kZSIsIlRhZyIsImxpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRU8sSUFBTUEsV0FBb0YsR0FBRyxTQUF2RkEsV0FBdUYsT0FJOUY7QUFBQTs7QUFBQSxNQUhKQyxPQUdJLFFBSEpBLE9BR0k7QUFBQSxNQUZKQyxNQUVJLFFBRkpBLE1BRUk7QUFBQSxNQURKQyxVQUNJLFFBREpBLFVBQ0k7O0FBQUEsd0JBQ3dCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUR4QjtBQUFBO0FBQUEsTUFDR0MsTUFESDtBQUFBLE1BQ1dDLFNBRFg7O0FBQUEseUJBRXdDSCw0Q0FBSyxDQUFDQyxRQUFOLENBQStCRyx3RUFBa0Is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QUU7QUFBZCxDQUFwQixDQUFILG1CQUFqQjtNQUFNSixXO0FBT04sSUFBTUssS0FBSyxHQUFHSix5REFBTSxDQUFDSyxFQUFQLENBQVVILEtBQVYsQ0FBZ0I7QUFBRUMsWUFBVSxFQUFFO0FBQWQsQ0FBaEIsQ0FBSCxvQkFBWDtNQUFNQyxLO0FBSU4sSUFBTUUsSUFBSSxHQUFHTix5REFBTSxDQUFDTyxJQUFQLENBQVlMLEtBQVosQ0FBa0I7QUFBRUMsWUFBVSxFQUFFO0FBQWQsQ0FBbEIsQ0FBSCxvQkFBVjtNQUFNRyxJO0FBT04sSUFBTUUsR0FBRyxHQUFHUix5REFBTSxDQUFDUyxFQUFQLENBQVVQLEtBQVYsQ0FBZ0I7QUFBRUMsWUFBVSxFQUFFO0FBQWQsQ0FBaEIsQ0FBSCxvQkFBVDtNQUFNSyxHIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS9BZGRUYWdNb2RhbC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgRHJhd2luZywgVGFnRHJhd2luZ1NldHMgfSBmcm9tICcuLi8uLi90eXBlcydcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCdcbmltcG9ydCB7IGFkZFRhZ1RvRHJhd2luZywgbG9hZFRhZ0RyYXdpbmdTZXRzLCBkcmF3aW5nSGFzVGFnLCByZW1vdmVUYWdGcm9tRHJhd2luZyB9IGZyb20gJy4uLy4uL2xpYi9oYXNodGFncydcblxuZXhwb3J0IGNvbnN0IEFkZFRhZ01vZGFsOiBSZWFjdC5GQzx7IGRyYXdpbmc6IERyYXdpbmc7IGlzT3BlbjogYm9vbGVhbjsgY2xvc2VNb2RhbDogKCkgPT4gdm9pZCB9PiA9ICh7XG4gIGRyYXdpbmcsXG4gIGlzT3BlbixcbiAgY2xvc2VNb2RhbCxcbn0pID0+IHtcbiAgY29uc3QgW25ld1RhZywgc2V0TmV3VGFnXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxuICBjb25zdCBbdGFnRHJhd2luZ1NldHMsIHNldFRhZ0RyYXdpbmdTZXRzXSA9IFJlYWN0LnVzZVN0YXRlPFRhZ0RyYXdpbmdTZXRzPihsb2FkVGFnRHJhd2luZ1NldHMoKSlcblxuICBmdW5jdGlvbiBvbk5ld1RhZ1N1Ym1pdChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pikge1xuICAgIGFkZFRhZ1RvRHJhd2luZyhuZXdUYWcsIGRyYXdpbmcpXG4gICAgc2V0TmV3VGFnKCcnKVxuICAgIHNldFRhZ0RyYXdpbmdTZXRzKGxvYWRUYWdEcmF3aW5nU2V0cygpKVxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICB9XG4gIGNvbnN0IHRhZ3MgPSBPYmplY3Qua2V5cyh0YWdEcmF3aW5nU2V0cylcblxuICByZXR1cm4gKFxuICAgIDxNb2RhbFxuICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICBvblJlcXVlc3RDbG9zZT17Y2xvc2VNb2RhbH1cbiAgICA+XG4gICAgICA8ZGl2IG9uS2V5RG93bj17ZSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfT5cbiAgICAgICAgPENsb3NlQnV0dG9uIG9uQ2xpY2s9e2Nsb3NlTW9kYWx9PmNsb3NlPC9DbG9zZUJ1dHRvbj5cbiAgICAgICAgPFRpdGxlPkFkZCBIYXNodGFnczwvVGl0bGU+XG4gICAgICAgIDxDb2RlIHN0eWxlPXt7IGZvbnRTaXplOiAnOXB4JyB9fT57SlNPTi5zdHJpbmdpZnkoZHJhd2luZywgbnVsbCwgMil9PC9Db2RlPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25OZXdUYWdTdWJtaXR9PlxuICAgICAgICAgIE5ldzogPGlucHV0IHZhbHVlPXtuZXdUYWd9IG9uQ2hhbmdlPXtlID0+IHNldE5ld1RhZyhlLmN1cnJlbnRUYXJnZXQudmFsdWUpfSAvPiA8aW5wdXQgdHlwZT0nc3VibWl0JyAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3RhZ3Muc29ydCgpLm1hcCh0YWcgPT4gKFxuICAgICAgICAgICAgPFRhZyBrZXk9e3RhZ30+XG4gICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9J2NoZWNrYm94J1xuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZHJhd2luZ0hhc1RhZyhkcmF3aW5nLCB0YWcpfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2hlY2tlZCA/IGFkZFRhZ1RvRHJhd2luZyh0YWcsIGRyYXdpbmcpIDogcmVtb3ZlVGFnRnJvbURyYXdpbmcodGFnLCBkcmF3aW5nKVxuICAgICAgICAgICAgICAgICAgICBzZXRUYWdEcmF3aW5nU2V0cyhsb2FkVGFnRHJhd2luZ1NldHMoKSlcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz4ge3RhZ31cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvVGFnPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9Nb2RhbD5cbiAgKVxufVxuXG5jb25zdCBDbG9zZUJ1dHRvbiA9IHN0eWxlZC5idXR0b24uYXR0cnMoeyBjbGFzc05hbWVzOiAnRXhwbG9yZXJfX0FkZFRhZ01vZGFsX19DbG9zZUJ1dHRvbicgfSlgXG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjRweDtcbiAgdG9wOiAyNHB4O1xuYFxuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oMS5hdHRycyh7IGNsYXNzTmFtZXM6ICdFeHBsb3Jlcl9fQWRkVGFnTW9kYWxfX1RpdGxlJyB9KWBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYFxuXG5jb25zdCBDb2RlID0gc3R5bGVkLmNvZGUuYXR0cnMoeyBjbGFzc05hbWVzOiAnRXhwbG9yZXJfX0FkZFRhZ01vZGFsX19Db2RlJyB9KWBcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgcGFkZGluZzogMCAwIDhweDtcbmBcblxuY29uc3QgVGFnID0gc3R5bGVkLmxpLmF0dHJzKHsgY2xhc3NOYW1lczogJ0V4cGxvcmVyX19BZGRUYWdNb2RhbF9fVGFnJyB9KWBcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0RERDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDhweCAwO1xuICBwYWRkaW5nOiAwIDhweDtcbmBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DrawingPage/AddTagModal.tsx\n");

/***/ })

})