webpackHotUpdate_N_E("pages/drawing/[id]",{

/***/ "./components/DrawingPage/AddTagModal.tsx":
/*!************************************************!*\
  !*** ./components/DrawingPage/AddTagModal.tsx ***!
  \************************************************/
/*! exports provided: AddTagModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddTagModal\", function() { return AddTagModal; });\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_hashtags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/hashtags */ \"./lib/hashtags.ts\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/pfisher/Code/pwfisher/explodingdog/explorer/components/DrawingPage/AddTagModal.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction _templateObject5() {\n  var data = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: inline-block;\\n\\n  &::after {\\n    content: '\\xB7';\\n    display: inline-block;\\n    opacity: 0.3;\\n  }\\n\\n  label {\\n    cursor: pointer;\\n    display: inline-block;\\n    padding: 4px 6px 4px 2px;\\n\\n    &:hover {\\n      box-shadow: inset 0 0 8px rgba(15, 100, 242, 0.15);\\n\\n      input[type=\\\"checkbox\\\"]{\\n        box-shadow: inset 0 0 4px rgba(15, 100, 242, 0.5);\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  margin: 0 -12px;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  color: #999;\\n  display: block;\\n  font-size: 9px;\\n  line-height: 12px;\\n  margin: 8px 0 16px;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  text-align: center;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-size: 24px;\\n  position: absolute;\\n  right: 24px;\\n  top: 24px;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar AddTagModal = function AddTagModal(_ref) {\n  _s();\n\n  var drawing = _ref.drawing,\n      isOpen = _ref.isOpen,\n      closeModal = _ref.closeModal;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(''),\n      _React$useState2 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      newTag = _React$useState2[0],\n      setNewTag = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({}),\n      _React$useState4 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState3, 2),\n      tagDrawingSets = _React$useState4[0],\n      setTagDrawingSets = _React$useState4[1];\n\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {\n    return setTagDrawingSets(Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_5__[\"loadMyTagDrawingSets\"])());\n  }, [isOpen]);\n\n  function onNewTagSubmit(e) {\n    Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_5__[\"addMyTagToDrawing\"])(newTag, drawing);\n    setNewTag('');\n    setTagDrawingSets(Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_5__[\"loadMyTagDrawingSets\"])());\n    e.preventDefault();\n  }\n\n  var tags = Object.keys(tagDrawingSets);\n  return __jsx(react_modal__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    isOpen: isOpen,\n    onRequestClose: closeModal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    onKeyDown: function onKeyDown(e) {\n      return e.stopPropagation();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, __jsx(CloseButton, {\n    onClick: closeModal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, \"close\"), __jsx(Title, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, \"Add Hashtags\"), __jsx(Code, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, JSON.stringify(drawing, null, 2)), __jsx(\"form\", {\n    onSubmit: onNewTagSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, \"New: \", __jsx(\"input\", {\n    value: newTag,\n    onChange: function onChange(e) {\n      return setNewTag(e.currentTarget.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 16\n    }\n  }), \" \", __jsx(\"input\", {\n    type: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 90\n    }\n  })), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }), __jsx(TagList, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, tags.sort().map(function (tag) {\n    return __jsx(Tag, {\n      key: tag,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 13\n      }\n    }, __jsx(\"label\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 15\n      }\n    }, __jsx(\"input\", {\n      type: \"checkbox\",\n      checked: Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_5__[\"drawingHasMyTag\"])(drawing, tag),\n      onChange: function onChange(e) {\n        e.currentTarget.checked ? Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_5__[\"addMyTagToDrawing\"])(tag, drawing) : Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_5__[\"removeMyTagFromDrawing\"])(tag, drawing);\n        setTagDrawingSets(Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_5__[\"loadMyTagDrawingSets\"])());\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 17\n      }\n    }), \" \", tag));\n  }))));\n};\n\n_s(AddTagModal, \"TRAuCxUkhDl/RgQhUC5PdizOxj0=\");\n\n_c = AddTagModal;\nvar CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button.attrs({\n  classNames: 'Explorer__AddTagModal__CloseButton'\n})(_templateObject());\n_c2 = CloseButton;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h1.attrs({\n  classNames: 'Explorer__AddTagModal__Title'\n})(_templateObject2());\n_c3 = Title;\nvar Code = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].code.attrs({\n  classNames: 'Explorer__AddTagModal__Code'\n})(_templateObject3());\n_c4 = Code;\nvar TagList = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ul.attrs({\n  classNames: 'Explorer__AddTagModal__TagList'\n})(_templateObject4());\n_c5 = TagList;\nvar Tag = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].li.attrs({\n  classNames: 'Explorer__AddTagModal__Tag'\n})(_templateObject5());\n_c6 = Tag;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"AddTagModal\");\n$RefreshReg$(_c2, \"CloseButton\");\n$RefreshReg$(_c3, \"Title\");\n$RefreshReg$(_c4, \"Code\");\n$RefreshReg$(_c5, \"TagList\");\n$RefreshReg$(_c6, \"Tag\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS9BZGRUYWdNb2RhbC50c3g/M2Y3YiJdLCJuYW1lcyI6WyJBZGRUYWdNb2RhbCIsImRyYXdpbmciLCJpc09wZW4iLCJjbG9zZU1vZGFsIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm5ld1RhZyIsInNldE5ld1RhZyIsInRhZ0RyYXdpbmdTZXRzIiwic2V0VGFnRHJhd2luZ1NldHMiLCJ1c2VFZmZlY3QiLCJsb2FkTXlUYWdEcmF3aW5nU2V0cyIsIm9uTmV3VGFnU3VibWl0IiwiZSIsImFkZE15VGFnVG9EcmF3aW5nIiwicHJldmVudERlZmF1bHQiLCJ0YWdzIiwiT2JqZWN0Iiwia2V5cyIsInN0b3BQcm9wYWdhdGlvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJzb3J0IiwibWFwIiwidGFnIiwiZHJhd2luZ0hhc015VGFnIiwiY2hlY2tlZCIsInJlbW92ZU15VGFnRnJvbURyYXdpbmciLCJDbG9zZUJ1dHRvbiIsInN0eWxlZCIsImJ1dHRvbiIsImF0dHJzIiwiY2xhc3NOYW1lcyIsIlRpdGxlIiwiaDEiLCJDb2RlIiwiY29kZSIsIlRhZ0xpc3QiLCJ1bCIsIlRhZyIsImxpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQU9PLElBQU1BLFdBQW9GLEdBQUcsU0FBdkZBLFdBQXVGLE9BSTlGO0FBQUE7O0FBQUEsTUFISkMsT0FHSSxRQUhKQSxPQUdJO0FBQUEsTUFGSkMsTUFFSSxRQUZKQSxNQUVJO0FBQUEsTUFESkMsVUFDSSxRQURKQSxVQUNJOztBQUFBLHdCQUN3QkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FEeEI7QUFBQTtBQUFBLE1BQ0dDLE1BREg7QUFBQSxNQUNXQyxTQURYOztBQUFBLHlCQUV3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O0FBZ0NELENBbERNOztHQUFNMUIsVzs7S0FBQUEsVztBQW9EYixJQUFNOEIsV0FBVyxHQUFHQyx5REFBTSxDQUFDQyxNQUFQLENBQWNDLEtBQWQsQ0FBb0I7QUFBRUMsWUFBVSxFQUFFO0FBQWQsQ0FBcEIsQ0FBSCxtQkFBakI7TUFBTUosVztBQU9OLElBQU1LLEtBQUssR0FBR0oseURBQU0sQ0FBQ0ssRUFBUCxDQUFVSCxLQUFWLENBQWdCO0FBQUVDLFlBQVUsRUFBRTtBQUFkLENBQWhCLENBQUgsb0JBQVg7TUFBTUMsSztBQUlOLElBQU1FLElBQUksR0FBR04seURBQU0sQ0FBQ08sSUFBUCxDQUFZTCxLQUFaLENBQWtCO0FBQUVDLFlBQVUsRUFBRTtBQUFkLENBQWxCLENBQUgsb0JBQVY7TUFBTUcsSTtBQVFOLElBQU1FLE9BQU8sR0FBR1IseURBQU0sQ0FBQ1MsRUFBUCxDQUFVUCxLQUFWLENBQWdCO0FBQUVDLFlBQVUsRUFBRTtBQUFkLENBQWhCLENBQUgsb0JBQWI7TUFBTUssTztBQUlOLElBQU1FLEdBQUcsR0FBR1YseURBQU0sQ0FBQ1csRUFBUCxDQUFVVCxLQUFWLENBQWdCO0FBQUVDLFlBQVUsRUFBRTtBQUFkLENBQWhCLENBQUgsb0JBQVQ7TUFBTU8sRyIsImZpbGUiOiIuL2NvbXBvbmVudHMvRHJhd2luZ1BhZ2UvQWRkVGFnTW9kYWwudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IERyYXdpbmcsIFRhZ0RyYXdpbmdTZXRzIH0gZnJvbSAnLi4vLi4vdHlwZXMnXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnXG5pbXBvcnQge1xuICBhZGRNeVRhZ1RvRHJhd2luZyxcbiAgZHJhd2luZ0hhc015VGFnLFxuICBsb2FkTXlUYWdEcmF3aW5nU2V0cyxcbiAgcmVtb3ZlTXlUYWdGcm9tRHJhd2luZyxcbn0gZnJvbSAnLi4vLi4vbGliL2hhc2h0YWdzJ1xuXG5leHBvcnQgY29uc3QgQWRkVGFnTW9kYWw6IFJlYWN0LkZDPHsgZHJhd2luZzogRHJhd2luZzsgaXNPcGVuOiBib29sZWFuOyBjbG9zZU1vZGFsOiAoKSA9PiB2b2lkIH0+ID0gKHtcbiAgZHJhd2luZyxcbiAgaXNPcGVuLFxuICBjbG9zZU1vZGFsLFxufSkgPT4ge1xuICBjb25zdCBbbmV3VGFnLCBzZXROZXdUYWddID0gUmVhY3QudXNlU3RhdGUoJycpXG4gIGNvbnN0IFt0YWdEcmF3aW5nU2V0cywgc2V0VGFnRHJhd2luZ1NldHNdID0gUmVhY3QudXNlU3RhdGU8VGFnRHJhd2luZ1NldHM+KHt9KVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiBzZXRUYWdEcmF3aW5nU2V0cyhsb2FkTXlUYWdEcmF3aW5nU2V0cygpKSwgW2lzT3Blbl0pXG5cbiAgZnVuY3Rpb24gb25OZXdUYWdTdWJtaXQoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pIHtcbiAgICBhZGRNeVRhZ1RvRHJhd2luZyhuZXdUYWcsIGRyYXdpbmcpXG4gICAgc2V0TmV3VGFnKCcnKVxuICAgIHNldFRhZ0RyYXdpbmdTZXRzKGxvYWRNeVRhZ0RyYXdpbmdTZXRzKCkpXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cbiAgY29uc3QgdGFncyA9IE9iamVjdC5rZXlzKHRhZ0RyYXdpbmdTZXRzKVxuXG4gIHJldHVybiAoXG4gICAgPE1vZGFsXG4gICAgICBpc09wZW49e2lzT3Blbn1cbiAgICAgIG9uUmVxdWVzdENsb3NlPXtjbG9zZU1vZGFsfVxuICAgID5cbiAgICAgIDxkaXYgb25LZXlEb3duPXtlID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9PlxuICAgICAgICA8Q2xvc2VCdXR0b24gb25DbGljaz17Y2xvc2VNb2RhbH0+Y2xvc2U8L0Nsb3NlQnV0dG9uPlxuICAgICAgICA8VGl0bGU+QWRkIEhhc2h0YWdzPC9UaXRsZT5cbiAgICAgICAgPENvZGU+e0pTT04uc3RyaW5naWZ5KGRyYXdpbmcsIG51bGwsIDIpfTwvQ29kZT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uTmV3VGFnU3VibWl0fT5cbiAgICAgICAgICBOZXc6IDxpbnB1dCB2YWx1ZT17bmV3VGFnfSBvbkNoYW5nZT17ZSA9PiBzZXROZXdUYWcoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKX0gLz4gPGlucHV0IHR5cGU9J3N1Ym1pdCcgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPFRhZ0xpc3Q+XG4gICAgICAgICAge3RhZ3Muc29ydCgpLm1hcCh0YWcgPT4gKFxuICAgICAgICAgICAgPFRhZyBrZXk9e3RhZ30+XG4gICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9J2NoZWNrYm94J1xuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZHJhd2luZ0hhc015VGFnKGRyYXdpbmcsIHRhZyl9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5jaGVja2VkID8gYWRkTXlUYWdUb0RyYXdpbmcodGFnLCBkcmF3aW5nKSA6IHJlbW92ZU15VGFnRnJvbURyYXdpbmcodGFnLCBkcmF3aW5nKVxuICAgICAgICAgICAgICAgICAgICBzZXRUYWdEcmF3aW5nU2V0cyhsb2FkTXlUYWdEcmF3aW5nU2V0cygpKVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPiB7dGFnfVxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9UYWc+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvVGFnTGlzdD5cbiAgICAgIDwvZGl2PlxuICAgIDwvTW9kYWw+XG4gIClcbn1cblxuY29uc3QgQ2xvc2VCdXR0b24gPSBzdHlsZWQuYnV0dG9uLmF0dHJzKHsgY2xhc3NOYW1lczogJ0V4cGxvcmVyX19BZGRUYWdNb2RhbF9fQ2xvc2VCdXR0b24nIH0pYFxuICBmb250LXNpemU6IDI0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDI0cHg7XG4gIHRvcDogMjRweDtcbmBcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDEuYXR0cnMoeyBjbGFzc05hbWVzOiAnRXhwbG9yZXJfX0FkZFRhZ01vZGFsX19UaXRsZScgfSlgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbmBcblxuY29uc3QgQ29kZSA9IHN0eWxlZC5jb2RlLmF0dHJzKHsgY2xhc3NOYW1lczogJ0V4cGxvcmVyX19BZGRUYWdNb2RhbF9fQ29kZScgfSlgXG4gIGNvbG9yOiAjOTk5O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiA5cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICBtYXJnaW46IDhweCAwIDE2cHg7XG5gXG5cbmNvbnN0IFRhZ0xpc3QgPSBzdHlsZWQudWwuYXR0cnMoeyBjbGFzc05hbWVzOiAnRXhwbG9yZXJfX0FkZFRhZ01vZGFsX19UYWdMaXN0JyB9KWBcbiAgbWFyZ2luOiAwIC0xMnB4O1xuYFxuXG5jb25zdCBUYWcgPSBzdHlsZWQubGkuYXR0cnMoeyBjbGFzc05hbWVzOiAnRXhwbG9yZXJfX0FkZFRhZ01vZGFsX19UYWcnIH0pYFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICfCtyc7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG9wYWNpdHk6IDAuMztcbiAgfVxuXG4gIGxhYmVsIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDRweCA2cHggNHB4IDJweDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDhweCByZ2JhKDE1LCAxMDAsIDI0MiwgMC4xNSk7XG5cbiAgICAgIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXXtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDRweCByZ2JhKDE1LCAxMDAsIDI0MiwgMC41KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DrawingPage/AddTagModal.tsx\n");

/***/ })

})