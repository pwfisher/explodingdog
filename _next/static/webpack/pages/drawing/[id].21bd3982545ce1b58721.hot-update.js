webpackHotUpdate_N_E("pages/drawing/[id]",{

/***/ "./components/DrawingPage/AddTagModal.tsx":
/*!************************************************!*\
  !*** ./components/DrawingPage/AddTagModal.tsx ***!
  \************************************************/
/*! exports provided: AddTagModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddTagModal\", function() { return AddTagModal; });\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_hashtags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/hashtags */ \"./lib/hashtags.ts\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/pfisher/Code/pwfisher/explodingdog/explorer/components/DrawingPage/AddTagModal.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction _templateObject5() {\n  var data = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: inline-block;\\n\\n  &::after {\\n    content: '\\xB7';\\n    display: inline-block;\\n    opacity: 0.3;\\n  }\\n\\n  label {\\n    border-bottom: 1px solid transparent;\\n    display: inline-block;\\n    padding: 4px 6px 4px 2px;\\n\\n    &:hover {\\n      box-shadow: inset 0 0 2px rgba(15, 100, 242, 0.2);\\n\\n      input[type=\\\"checkbox\\\"]{\\n        box-shadow: inset 0 0 4px rgba(15, 100, 242, 0.6);\\n      }\\n    }\\n  }\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  margin: 0 -12px;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  color: #999;\\n  display: block;\\n  font-size: 9px;\\n  line-height: 12px;\\n  margin: 8px 0 16px;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  text-align: center;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-size: 24px;\\n  position: absolute;\\n  right: 24px;\\n  top: 24px;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar AddTagModal = function AddTagModal(_ref) {\n  _s();\n\n  var drawing = _ref.drawing,\n      isOpen = _ref.isOpen,\n      closeModal = _ref.closeModal;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(''),\n      _React$useState2 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      newTag = _React$useState2[0],\n      setNewTag = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_5__[\"loadTagDrawingSets\"])()),\n      _React$useState4 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState3, 2),\n      tagDrawingSets = _React$useState4[0],\n      setTagDrawingSets = _React$useState4[1];\n\n  function onNewTagSubmit(e) {\n    Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_5__[\"addTagToDrawing\"])(newTag, drawing);\n    setNewTag('');\n    setTagDrawingSets(Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_5__[\"loadTagDrawingSets\"])());\n    e.preventDefault();\n  }\n\n  var tags = Object.keys(tagDrawingSets);\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {\n    return setTagDrawingSets(Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_5__[\"loadTagDrawingSets\"])());\n  }, [isOpen]);\n  return __jsx(react_modal__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    isOpen: isOpen,\n    onRequestClose: closeModal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    onKeyDown: function onKeyDown(e) {\n      return e.stopPropagation();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, __jsx(CloseButton, {\n    onClick: closeModal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, \"close\"), __jsx(Title, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, \"Add Hashtags\"), __jsx(Code, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, JSON.stringify(drawing, null, 2)), __jsx(\"form\", {\n    onSubmit: onNewTagSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, \"New: \", __jsx(\"input\", {\n    value: newTag,\n    onChange: function onChange(e) {\n      return setNewTag(e.currentTarget.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 16\n    }\n  }), \" \", __jsx(\"input\", {\n    type: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 90\n    }\n  })), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }), __jsx(TagList, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, tags.sort().map(function (tag) {\n    return __jsx(Tag, {\n      key: tag,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 13\n      }\n    }, __jsx(\"label\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 15\n      }\n    }, __jsx(\"input\", {\n      type: \"checkbox\",\n      checked: Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_5__[\"drawingHasTag\"])(drawing, tag),\n      onChange: function onChange(e) {\n        e.currentTarget.checked ? Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_5__[\"addTagToDrawing\"])(tag, drawing) : Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_5__[\"removeTagFromDrawing\"])(tag, drawing);\n        setTagDrawingSets(Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_5__[\"loadTagDrawingSets\"])());\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 17\n      }\n    }), \" \", tag));\n  }))));\n};\n\n_s(AddTagModal, \"80Ya1zRcufYlhoptMxScr6G/nvM=\");\n\n_c = AddTagModal;\nvar CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button.attrs({\n  classNames: 'Explorer__AddTagModal__CloseButton'\n})(_templateObject());\n_c2 = CloseButton;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h1.attrs({\n  classNames: 'Explorer__AddTagModal__Title'\n})(_templateObject2());\n_c3 = Title;\nvar Code = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].code.attrs({\n  classNames: 'Explorer__AddTagModal__Code'\n})(_templateObject3());\n_c4 = Code;\nvar TagList = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ul.attrs({\n  classNames: 'Explorer__AddTagModal__TagList'\n})(_templateObject4());\n_c5 = TagList;\nvar Tag = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].li.attrs({\n  classNames: 'Explorer__AddTagModal__Tag'\n})(_templateObject5());\n_c6 = Tag;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"AddTagModal\");\n$RefreshReg$(_c2, \"CloseButton\");\n$RefreshReg$(_c3, \"Title\");\n$RefreshReg$(_c4, \"Code\");\n$RefreshReg$(_c5, \"TagList\");\n$RefreshReg$(_c6, \"Tag\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS9BZGRUYWdNb2RhbC50c3g/M2Y3YiJdLCJuYW1lcyI6WyJBZGRUYWdNb2RhbCIsImRyYXdpbmciLCJpc09wZW4iLCJjbG9zZU1vZGFsIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm5ld1RhZyIsInNldE5ld1RhZyIsImxvYWRUYWdEcmF3aW5nU2V0cyIsInRhZ0RyYXdpbmdTZXRzIiwic2V0VGFnRHJhd2luZ1NldHMiLCJvbk5ld1RhZ1N1Ym1pdCIsImUiLCJhZGRUYWdUb0RyYXdpbmciLCJwcmV2ZW50RGVmYXVsdCIsInRhZ3MiLCJPYmplY3QiLCJrZXlzIiwidXNlRWZmZWN0Iiwic3RvcFByb3BhZ2F0aW9uIiwiSlNPTiIsInN0cmluZ2lmeSIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsInNvcnQiLCJtYXAiLCJ0YWciLCJkcmF3aW5nSGFzVGFnIiwiY2hlY2tlZCIsInJlbW92ZVRhZ0Zyb21EcmF3aW5nIiwiQ2xvc2VCdXR0b24iLCJzdHlsZWQiLCJidXR0b24iLCJhdHRycyIsImNsYXNzTmFtZXMiLCJUaXRsZSIsImgxIiwiQ29kZSIsImNvZGUiLCJUYWdMaXN0IiwidWwiLCJUYWciLCJsaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFTyxJQUFNQSxXQUFvRixHQUFHLFNBQXZGQSxXQUF1RixPQUk5RjtBQUFBOztBQUFBLE1BSEpDLE9BR0ksUUFISkEsT0FHSTtBQUFBLE1BRkpDLE1BRUksUUFGSkEsTUFFSTtBQUFBLE1BREpDLFVBQ0ksUUFESkEsVUFDSTs7QUFBQSx3QkFDd0JDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBRHhCO0FBQUE7QUFBQSxNQUNHQyxNQURIO0FBQUEsTUFDV0MsU0FEWDs7QUFBQSx5QkFFd0NILDRDQUFLLENBQUNDLFFBQU4sQ0FBK0JHLHdFQUFrQixFQUFqRCxDQUZ4QztBQUFBO0FBQUEsTUFFR0MsY0FGSDtBQUFBLE1BRW1CQyxpQkFGbkI7O0FBSUosV0FBU0MsY0FBVCxDQUF3QkMsQ0FBeEIsRUFBNkQ7QUFDM0RDLHlFQUFlLENBQUNQLE1BQUQsRUFBU0wsT0FBVCxDQUFmO0FBQ0FNLGFBQVMsQ0FBQyxFQUFELENBQVQ7QUFDQUcscUJBQWlCLENBQUNGLHdFQUFrQixFQUFuQixDQUFqQjtBQUNBSSxLQUFDLENBQUNFLGNBQUY7QUFDRDs7QUFDRCxNQUFNQyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZUixjQUFaLENBQWI7QUFFQUwsOENBQUssQ0FBQ2MsU0FBTixDQUFnQjtBQUFBLFdBQU1SLGlCQUFpQixDQUFDRix3RUFBa0IsRUFBbkIsQ0FBdkI7QUFBQSxHQUFoQixFQUErRCxDQUFDTixNQUFELENBQS9EO0FBRUEsU0FDRSxNQUFDLGtEQUFEO0FBQ0UsVUFBTSxFQUFFQSxNQURWO0FBRUUsa0JBQWMsRUFBRUMsVUFGbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBQUssYUFBUyxFQUFFLG1CQUFBUyxDQUFDO0FBQUEsYUFBSUEsQ0FBQyxDQUFDTyxlQUFGLEVBQUo7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxXQUFEO0FBQWEsV0FBTyxFQUFFaEIsVUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUUsTUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkYsRUFHRSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPaUIsSUFBSSxDQUFDQyxTQUFMLENBQWVwQixPQUFmLEVBQXdCLElBQXhCLEVBQThCLENBQTlCLENBQVAsQ0FIRixFQUlFO0FBQU0sWUFBUSxFQUFFVSxjQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQ087QUFBTyxTQUFLLEVBQUVMLE1BQWQ7QUFBc0IsWUFBUSxFQUFFLGtCQUFBTSxDQUFDO0FBQUEsYUFBSUwsU0FBUyxDQUFDSyxDQUFDLENBQUNVLGFBQUYsQ0FBZ0JDLEtBQWpCLENBQWI7QUFBQSxLQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRFAsT0FDaUY7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRGpGLENBSkYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsRUFRRSxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUixJQUFJLENBQUNTLElBQUwsR0FBWUMsR0FBWixDQUFnQixVQUFBQyxHQUFHO0FBQUEsV0FDbEIsTUFBQyxHQUFEO0FBQUssU0FBRyxFQUFFQSxHQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFDRSxVQUFJLEVBQUMsVUFEUDtBQUVFLGFBQU8sRUFBRUMsbUVBQWEsQ0FBQzFCLE9BQUQsRUFBVXlCLEdBQVYsQ0FGeEI7QUFHRSxjQUFRLEVBQUUsa0JBQUFkLENBQUMsRUFBSTtBQUNiQSxTQUFDLENBQUNVLGFBQUYsQ0FBZ0JNLE9BQWhCLEdBQTBCZixxRUFBZSxDQUFDYSxHQUFELEVBQU16QixPQUFOLENBQXpDLEdBQTBENEIsMEVBQW9CLENBQUNILEdBQUQsRUFBTXpCLE9BQU4sQ0FBOUU7QUFDQVMseUJBQWlCLENBQUNGLHdFQUFrQixFQUFuQixDQUFqQjtBQUNELE9BTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLE9BUU1rQixHQVJOLENBREYsQ0FEa0I7QUFBQSxHQUFuQixDQURILENBUkYsQ0FKRixDQURGO0FBZ0NELENBbERNOztHQUFNMUIsVzs7S0FBQUEsVztBQW9EYixJQUFNOEIsV0FBVyxHQUFHQyx5REFBTSxDQUFDQyxNQUFQLENBQWNDLEtBQWQsQ0FBb0I7QUFBRUMsWUFBVSxFQUFFO0FBQWQsQ0FBcEIsQ0FBSCxtQkFBakI7TUFBTUosVztBQU9OLElBQU1LLEtBQUssR0FBR0oseURBQU0sQ0FBQ0ssRUFBUCxDQUFVSCxLQUFWLENBQWdCO0FBQUVDLFlBQVUsRUFBRTtBQUFkLENBQWhCLENBQUgsb0JBQVg7TUFBTUMsSztBQUlOLElBQU1FLElBQUksR0FBR04seURBQU0sQ0FBQ08sSUFBUCxDQUFZTCxLQUFaLENBQWtCO0FBQUVDLFlBQVUsRUFBRTtBQUFkLENBQWxCLENBQUgsb0JBQVY7TUFBTUcsSTtBQVFOLElBQU1FLE9BQU8sR0FBR1IseURBQU0sQ0FBQ1MsRUFBUCxDQUFVUCxLQUFWLENBQWdCO0FBQUVDLFlBQVUsRUFBRTtBQUFkLENBQWhCLENBQUgsb0JBQWI7TUFBTUssTztBQUlOLElBQU1FLEdBQUcsR0FBR1YseURBQU0sQ0FBQ1csRUFBUCxDQUFVVCxLQUFWLENBQWdCO0FBQUVDLFlBQVUsRUFBRTtBQUFkLENBQWhCLENBQUgsb0JBQVQ7TUFBTU8sRyIsImZpbGUiOiIuL2NvbXBvbmVudHMvRHJhd2luZ1BhZ2UvQWRkVGFnTW9kYWwudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IERyYXdpbmcsIFRhZ0RyYXdpbmdTZXRzIH0gZnJvbSAnLi4vLi4vdHlwZXMnXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnXG5pbXBvcnQgeyBhZGRUYWdUb0RyYXdpbmcsIGxvYWRUYWdEcmF3aW5nU2V0cywgZHJhd2luZ0hhc1RhZywgcmVtb3ZlVGFnRnJvbURyYXdpbmcgfSBmcm9tICcuLi8uLi9saWIvaGFzaHRhZ3MnXG5cbmV4cG9ydCBjb25zdCBBZGRUYWdNb2RhbDogUmVhY3QuRkM8eyBkcmF3aW5nOiBEcmF3aW5nOyBpc09wZW46IGJvb2xlYW47IGNsb3NlTW9kYWw6ICgpID0+IHZvaWQgfT4gPSAoe1xuICBkcmF3aW5nLFxuICBpc09wZW4sXG4gIGNsb3NlTW9kYWwsXG59KSA9PiB7XG4gIGNvbnN0IFtuZXdUYWcsIHNldE5ld1RhZ10gPSBSZWFjdC51c2VTdGF0ZSgnJylcbiAgY29uc3QgW3RhZ0RyYXdpbmdTZXRzLCBzZXRUYWdEcmF3aW5nU2V0c10gPSBSZWFjdC51c2VTdGF0ZTxUYWdEcmF3aW5nU2V0cz4obG9hZFRhZ0RyYXdpbmdTZXRzKCkpXG5cbiAgZnVuY3Rpb24gb25OZXdUYWdTdWJtaXQoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pIHtcbiAgICBhZGRUYWdUb0RyYXdpbmcobmV3VGFnLCBkcmF3aW5nKVxuICAgIHNldE5ld1RhZygnJylcbiAgICBzZXRUYWdEcmF3aW5nU2V0cyhsb2FkVGFnRHJhd2luZ1NldHMoKSlcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgfVxuICBjb25zdCB0YWdzID0gT2JqZWN0LmtleXModGFnRHJhd2luZ1NldHMpXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHNldFRhZ0RyYXdpbmdTZXRzKGxvYWRUYWdEcmF3aW5nU2V0cygpKSwgW2lzT3Blbl0pXG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWxcbiAgICAgIGlzT3Blbj17aXNPcGVufVxuICAgICAgb25SZXF1ZXN0Q2xvc2U9e2Nsb3NlTW9kYWx9XG4gICAgPlxuICAgICAgPGRpdiBvbktleURvd249e2UgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0+XG4gICAgICAgIDxDbG9zZUJ1dHRvbiBvbkNsaWNrPXtjbG9zZU1vZGFsfT5jbG9zZTwvQ2xvc2VCdXR0b24+XG4gICAgICAgIDxUaXRsZT5BZGQgSGFzaHRhZ3M8L1RpdGxlPlxuICAgICAgICA8Q29kZT57SlNPTi5zdHJpbmdpZnkoZHJhd2luZywgbnVsbCwgMil9PC9Db2RlPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25OZXdUYWdTdWJtaXR9PlxuICAgICAgICAgIE5ldzogPGlucHV0IHZhbHVlPXtuZXdUYWd9IG9uQ2hhbmdlPXtlID0+IHNldE5ld1RhZyhlLmN1cnJlbnRUYXJnZXQudmFsdWUpfSAvPiA8aW5wdXQgdHlwZT0nc3VibWl0JyAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8VGFnTGlzdD5cbiAgICAgICAgICB7dGFncy5zb3J0KCkubWFwKHRhZyA9PiAoXG4gICAgICAgICAgICA8VGFnIGtleT17dGFnfT5cbiAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT0nY2hlY2tib3gnXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtkcmF3aW5nSGFzVGFnKGRyYXdpbmcsIHRhZyl9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5jaGVja2VkID8gYWRkVGFnVG9EcmF3aW5nKHRhZywgZHJhd2luZykgOiByZW1vdmVUYWdGcm9tRHJhd2luZyh0YWcsIGRyYXdpbmcpXG4gICAgICAgICAgICAgICAgICAgIHNldFRhZ0RyYXdpbmdTZXRzKGxvYWRUYWdEcmF3aW5nU2V0cygpKVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPiB7dGFnfVxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9UYWc+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvVGFnTGlzdD5cbiAgICAgIDwvZGl2PlxuICAgIDwvTW9kYWw+XG4gIClcbn1cblxuY29uc3QgQ2xvc2VCdXR0b24gPSBzdHlsZWQuYnV0dG9uLmF0dHJzKHsgY2xhc3NOYW1lczogJ0V4cGxvcmVyX19BZGRUYWdNb2RhbF9fQ2xvc2VCdXR0b24nIH0pYFxuICBmb250LXNpemU6IDI0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDI0cHg7XG4gIHRvcDogMjRweDtcbmBcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDEuYXR0cnMoeyBjbGFzc05hbWVzOiAnRXhwbG9yZXJfX0FkZFRhZ01vZGFsX19UaXRsZScgfSlgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbmBcblxuY29uc3QgQ29kZSA9IHN0eWxlZC5jb2RlLmF0dHJzKHsgY2xhc3NOYW1lczogJ0V4cGxvcmVyX19BZGRUYWdNb2RhbF9fQ29kZScgfSlgXG4gIGNvbG9yOiAjOTk5O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiA5cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICBtYXJnaW46IDhweCAwIDE2cHg7XG5gXG5cbmNvbnN0IFRhZ0xpc3QgPSBzdHlsZWQudWwuYXR0cnMoeyBjbGFzc05hbWVzOiAnRXhwbG9yZXJfX0FkZFRhZ01vZGFsX19UYWdMaXN0JyB9KWBcbiAgbWFyZ2luOiAwIC0xMnB4O1xuYFxuXG5jb25zdCBUYWcgPSBzdHlsZWQubGkuYXR0cnMoeyBjbGFzc05hbWVzOiAnRXhwbG9yZXJfX0FkZFRhZ01vZGFsX19UYWcnIH0pYFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICfCtyc7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG9wYWNpdHk6IDAuMztcbiAgfVxuXG4gIGxhYmVsIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDRweCA2cHggNHB4IDJweDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDJweCByZ2JhKDE1LCAxMDAsIDI0MiwgMC4yKTtcblxuICAgICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJde1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNHB4IHJnYmEoMTUsIDEwMCwgMjQyLCAwLjYpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DrawingPage/AddTagModal.tsx\n");

/***/ })

})