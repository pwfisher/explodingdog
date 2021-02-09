webpackHotUpdate_N_E("pages/drawing/[id]",{

/***/ "./components/DrawingPage/EditTagsModal.tsx":
/*!**************************************************!*\
  !*** ./components/DrawingPage/EditTagsModal.tsx ***!
  \**************************************************/
/*! exports provided: EditTagsModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EditTagsModal\", function() { return EditTagsModal; });\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _containers_MyTags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../containers/MyTags */ \"./containers/MyTags.ts\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/pfisher/Code/pwfisher/explodingdog/explorer/components/DrawingPage/EditTagsModal.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nvar EditTagsModal = function EditTagsModal(_ref) {\n  _s();\n\n  var drawing = _ref.drawing,\n      isOpen = _ref.isOpen,\n      closeModal = _ref.closeModal;\n\n  var _MyTagsContainer$useC = _containers_MyTags__WEBPACK_IMPORTED_MODULE_5__[\"MyTagsContainer\"].useContainer(),\n      myTags = _MyTagsContainer$useC.myTags,\n      drawingHasMyTag = _MyTagsContainer$useC.drawingHasMyTag,\n      addMyTagToDrawing = _MyTagsContainer$useC.addMyTagToDrawing,\n      removeMyTagFromDrawing = _MyTagsContainer$useC.removeMyTagFromDrawing;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(''),\n      _React$useState2 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      newTag = _React$useState2[0],\n      setNewTag = _React$useState2[1];\n\n  function onNewTagSubmit(e) {\n    addMyTagToDrawing(newTag, drawing);\n    setNewTag('');\n    e.preventDefault();\n  }\n\n  return __jsx(react_modal__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    isOpen: isOpen,\n    onRequestClose: closeModal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    onKeyDown: function onKeyDown(e) {\n      return e.stopPropagation();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, __jsx(CloseButton, {\n    onClick: closeModal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, \"close\"), __jsx(Title, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, \"Add Tags\"), __jsx(Code, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, JSON.stringify(drawing, null, 2)), __jsx(\"form\", {\n    onSubmit: onNewTagSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, \"New:\", ' ', __jsx(\"input\", {\n    value: newTag,\n    onChange: function onChange(e) {\n      return setNewTag(e.currentTarget.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  })), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }), Object.entries(myTags.reduce(function (accumulator, tag) {\n    var key = tag[0];\n    if (!accumulator[key]) accumulator[key] = [];\n    accumulator[key].push(tag);\n    return accumulator;\n  }, {})).map(function (_ref2) {\n    var _ref3 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref2, 2),\n        key = _ref3[0],\n        tags = _ref3[1];\n\n    return __jsx(TagLetter, Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      key: key\n    }, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 11\n      }\n    }), __jsx(\"h4\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 13\n      }\n    }, key), __jsx(TagList, Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      key: key\n    }, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 13\n      }\n    }), tags.map(function (tag) {\n      return __jsx(Tag, {\n        key: tag,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 17\n        }\n      }, __jsx(\"label\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 19\n        }\n      }, __jsx(\"input\", {\n        type: \"checkbox\",\n        checked: drawingHasMyTag(drawing, tag),\n        onChange: function onChange(e) {\n          e.currentTarget.checked ? addMyTagToDrawing(tag, drawing) : removeMyTagFromDrawing(tag, drawing);\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 21\n        }\n      }), \" \", tag));\n    })));\n  })));\n};\n\n_s(EditTagsModal, \"4k54pF+AqeLmMcIGggQzypcvIPk=\", false, function () {\n  return [_containers_MyTags__WEBPACK_IMPORTED_MODULE_5__[\"MyTagsContainer\"].useContainer];\n});\n\n_c = EditTagsModal;\nvar CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button.attrs({\n  classNames: 'Explorer__EditTagsModal__CloseButton'\n}).withConfig({\n  displayName: \"EditTagsModal__CloseButton\",\n  componentId: \"jxnouc-0\"\n})([\"font-size:24px;position:absolute;right:24px;top:24px;\"]);\n_c2 = CloseButton;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h1.attrs({\n  classNames: 'Explorer__EditTagsModal__Title'\n}).withConfig({\n  displayName: \"EditTagsModal__Title\",\n  componentId: \"jxnouc-1\"\n})([\"text-align:center;\"]);\n_c3 = Title;\nvar Code = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].code.attrs({\n  classNames: 'Explorer__EditTagsModal__Code'\n}).withConfig({\n  displayName: \"EditTagsModal__Code\",\n  componentId: \"jxnouc-2\"\n})([\"color:#999;display:block;font-size:9px;line-height:12px;margin:8px 0 16px;\"]);\n_c4 = Code;\nvar TagLetter = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ul.attrs({\n  classNames: 'Explorer__EditTagsModal__TagLetter'\n}).withConfig({\n  displayName: \"EditTagsModal__TagLetter\",\n  componentId: \"jxnouc-3\"\n})([\"display:flex;margin:8px 0;> h4:first-child{flex-shrink:0;margin:0;padding-top:2px;width:24px;}\"]);\n_c5 = TagLetter;\nvar TagList = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].ul.attrs({\n  classNames: 'Explorer__EditTagsModal__TagList'\n}).withConfig({\n  displayName: \"EditTagsModal__TagList\",\n  componentId: \"jxnouc-4\"\n})([\"\"]);\n_c6 = TagList;\nvar Tag = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].li.attrs({\n  classNames: 'Explorer__EditTagsModal__Tag'\n}).withConfig({\n  displayName: \"EditTagsModal__Tag\",\n  componentId: \"jxnouc-5\"\n})([\"display:inline-block;user-select:none;&::after{content:'\\xB7';display:inline-block;opacity:0.3;}&:last-child::after{display:none;}label{cursor:pointer;display:inline-block;padding:4px 6px 4px 2px;&:hover{box-shadow:inset 0 0 8px rgba(15,100,242,0.15);input[type=\\\"checkbox\\\"]{box-shadow:inset 0 0 4px rgba(15,100,242,0.5);}}}\"]);\n_c7 = Tag;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"EditTagsModal\");\n$RefreshReg$(_c2, \"CloseButton\");\n$RefreshReg$(_c3, \"Title\");\n$RefreshReg$(_c4, \"Code\");\n$RefreshReg$(_c5, \"TagLetter\");\n$RefreshReg$(_c6, \"TagList\");\n$RefreshReg$(_c7, \"Tag\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS9FZGl0VGFnc01vZGFsLnRzeD85OGYxIl0sIm5hbWVzIjpbIkVkaXRUYWdzTW9kYWwiLCJkcmF3aW5nIiwiaXNPcGVuIiwiY2xvc2VNb2RhbCIsIk15VGFnc0NvbnRhaW5lciIsInVzZUNvbnRhaW5lciIsIm15VGFncyIsImRyYXdpbmdIYXNNeVRhZyIsImFkZE15VGFnVG9EcmF3aW5nIiwicmVtb3ZlTXlUYWdGcm9tRHJhd2luZyIsIlJlYWN0IiwidXNlU3RhdGUiLCJuZXdUYWciLCJzZXROZXdUYWciLCJvbk5ld1RhZ1N1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJPYmplY3QiLCJlbnRyaWVzIiwicmVkdWNlIiwiYWNjdW11bGF0b3IiLCJ0YWciLCJrZXkiLCJwdXNoIiwibWFwIiwidGFncyIsImNoZWNrZWQiLCJDbG9zZUJ1dHRvbiIsInN0eWxlZCIsImJ1dHRvbiIsImF0dHJzIiwiY2xhc3NOYW1lcyIsIlRpdGxlIiwiaDEiLCJDb2RlIiwiY29kZSIsIlRhZ0xldHRlciIsInVsIiwiVGFnTGlzdCIsIlRhZyIsImxpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVPLElBQU1BLGFBSVgsR0FBRyxTQUpRQSxhQUlSLE9BQXFDO0FBQUE7O0FBQUEsTUFBbENDLE9BQWtDLFFBQWxDQSxPQUFrQztBQUFBLE1BQXpCQyxNQUF5QixRQUF6QkEsTUFBeUI7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCOztBQUFBLDhCQU1wQ0Msa0VBQWUsQ0FBQ0MsWUFBaEIsRUFOb0M7QUFBQSxNQUV0Q0MsTUFGc0MseUJBRXRDQSxNQUZzQztBQUFBLE1BR3RDQyxlQUhzQyx5QkFHdENBLGVBSHNDO0FBQUEsTUFJdENDLGlCQUpz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TyxHQUFHVix5REFBTSxDQUFDUyxFQUFQLENBQVVQLEtBQVYsQ0FBZ0I7QUFBRUMsWUFBVSxFQUFFO0FBQWQsQ0FBaEIsQ0FBSDtBQUFBO0FBQUE7QUFBQSxRQUFiO01BQU1PLE87QUFFTixJQUFNQyxHQUFHLEdBQUdYLHlEQUFNLENBQUNZLEVBQVAsQ0FBVVYsS0FBVixDQUFnQjtBQUFFQyxZQUFVLEVBQUU7QUFBZCxDQUFoQixDQUFIO0FBQUE7QUFBQTtBQUFBLDZVQUFUO01BQU1RLEciLCJmaWxlIjoiLi9jb21wb25lbnRzL0RyYXdpbmdQYWdlL0VkaXRUYWdzTW9kYWwudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IERyYXdpbmcgfSBmcm9tICcuLi8uLi90eXBlcydcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCdcbmltcG9ydCB7IE15VGFnc0NvbnRhaW5lciB9IGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvTXlUYWdzJ1xuXG5leHBvcnQgY29uc3QgRWRpdFRhZ3NNb2RhbDogUmVhY3QuRkM8e1xuICBkcmF3aW5nOiBEcmF3aW5nXG4gIGlzT3BlbjogYm9vbGVhblxuICBjbG9zZU1vZGFsOiAoKSA9PiB2b2lkXG59PiA9ICh7IGRyYXdpbmcsIGlzT3BlbiwgY2xvc2VNb2RhbCB9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBteVRhZ3MsXG4gICAgZHJhd2luZ0hhc015VGFnLFxuICAgIGFkZE15VGFnVG9EcmF3aW5nLFxuICAgIHJlbW92ZU15VGFnRnJvbURyYXdpbmcsXG4gIH0gPSBNeVRhZ3NDb250YWluZXIudXNlQ29udGFpbmVyKClcblxuICBjb25zdCBbbmV3VGFnLCBzZXROZXdUYWddID0gUmVhY3QudXNlU3RhdGUoJycpXG5cbiAgZnVuY3Rpb24gb25OZXdUYWdTdWJtaXQoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pIHtcbiAgICBhZGRNeVRhZ1RvRHJhd2luZyhuZXdUYWcsIGRyYXdpbmcpXG4gICAgc2V0TmV3VGFnKCcnKVxuICAgIGUucHJldmVudERlZmF1bHQoKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWxcbiAgICAgIGlzT3Blbj17aXNPcGVufVxuICAgICAgb25SZXF1ZXN0Q2xvc2U9e2Nsb3NlTW9kYWx9XG4gICAgPlxuICAgICAgPGRpdiBvbktleURvd249e2UgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0+XG4gICAgICAgIDxDbG9zZUJ1dHRvbiBvbkNsaWNrPXtjbG9zZU1vZGFsfT5jbG9zZTwvQ2xvc2VCdXR0b24+XG4gICAgICAgIDxUaXRsZT5BZGQgVGFnczwvVGl0bGU+XG4gICAgICAgIDxDb2RlPntKU09OLnN0cmluZ2lmeShkcmF3aW5nLCBudWxsLCAyKX08L0NvZGU+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtvbk5ld1RhZ1N1Ym1pdH0+XG4gICAgICAgICAgTmV3OnsnICd9XG4gICAgICAgICAgPGlucHV0IHZhbHVlPXtuZXdUYWd9IG9uQ2hhbmdlPXtlID0+IHNldE5ld1RhZyhlLmN1cnJlbnRUYXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSdzdWJtaXQnIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIHtPYmplY3QuZW50cmllcyhcbiAgICAgICAgICBteVRhZ3MucmVkdWNlPFJlY29yZDxzdHJpbmcsIHN0cmluZ1tdPj4oKGFjY3VtdWxhdG9yLCB0YWcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHRhZ1swXVxuICAgICAgICAgICAgaWYgKCFhY2N1bXVsYXRvcltrZXldKSBhY2N1bXVsYXRvcltrZXldID0gW11cbiAgICAgICAgICAgIGFjY3VtdWxhdG9yW2tleV0ucHVzaCh0YWcpXG4gICAgICAgICAgICByZXR1cm4gYWNjdW11bGF0b3JcbiAgICAgICAgICB9LCB7fSlcbiAgICAgICAgKS5tYXAoKFtrZXksIHRhZ3NdKSA9PiAoXG4gICAgICAgICAgPFRhZ0xldHRlciB7Li4ueyBrZXkgfX0+XG4gICAgICAgICAgICA8aDQ+e2tleX08L2g0PlxuICAgICAgICAgICAgPFRhZ0xpc3Qgey4uLnsga2V5IH19PlxuICAgICAgICAgICAgICB7dGFncy5tYXAodGFnID0+IChcbiAgICAgICAgICAgICAgICA8VGFnIGtleT17dGFnfT5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT0nY2hlY2tib3gnXG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17ZHJhd2luZ0hhc015VGFnKGRyYXdpbmcsIHRhZyl9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhZGRNeVRhZ1RvRHJhd2luZyh0YWcsIGRyYXdpbmcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogcmVtb3ZlTXlUYWdGcm9tRHJhd2luZyh0YWcsIGRyYXdpbmcpXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz4ge3RhZ31cbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9UYWc+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9UYWdMaXN0PlxuICAgICAgICAgIDwvVGFnTGV0dGVyPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvTW9kYWw+XG4gIClcbn1cblxuY29uc3QgQ2xvc2VCdXR0b24gPSBzdHlsZWQuYnV0dG9uLmF0dHJzKHsgY2xhc3NOYW1lczogJ0V4cGxvcmVyX19FZGl0VGFnc01vZGFsX19DbG9zZUJ1dHRvbicgfSlgXG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjRweDtcbiAgdG9wOiAyNHB4O1xuYFxuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oMS5hdHRycyh7IGNsYXNzTmFtZXM6ICdFeHBsb3Jlcl9fRWRpdFRhZ3NNb2RhbF9fVGl0bGUnIH0pYFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gXG5cbmNvbnN0IENvZGUgPSBzdHlsZWQuY29kZS5hdHRycyh7IGNsYXNzTmFtZXM6ICdFeHBsb3Jlcl9fRWRpdFRhZ3NNb2RhbF9fQ29kZScgfSlgXG4gIGNvbG9yOiAjOTk5O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiA5cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICBtYXJnaW46IDhweCAwIDE2cHg7XG5gXG5cbmNvbnN0IFRhZ0xldHRlciA9IHN0eWxlZC51bC5hdHRycyh7IGNsYXNzTmFtZXM6ICdFeHBsb3Jlcl9fRWRpdFRhZ3NNb2RhbF9fVGFnTGV0dGVyJyB9KWBcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiA4cHggMDtcblxuICA+IGg0OmZpcnN0LWNoaWxkIHtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy10b3A6IDJweDtcbiAgICB3aWR0aDogMjRweDtcbiAgfVxuYFxuXG5jb25zdCBUYWdMaXN0ID0gc3R5bGVkLnVsLmF0dHJzKHsgY2xhc3NOYW1lczogJ0V4cGxvcmVyX19FZGl0VGFnc01vZGFsX19UYWdMaXN0JyB9KWBgXG5cbmNvbnN0IFRhZyA9IHN0eWxlZC5saS5hdHRycyh7IGNsYXNzTmFtZXM6ICdFeHBsb3Jlcl9fRWRpdFRhZ3NNb2RhbF9fVGFnJyB9KWBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogJ8K3JztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgb3BhY2l0eTogMC4zO1xuICB9XG5cbiAgJjpsYXN0LWNoaWxkOjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIGxhYmVsIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDRweCA2cHggNHB4IDJweDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDhweCByZ2JhKDE1LCAxMDAsIDI0MiwgMC4xNSk7XG5cbiAgICAgIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXXtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDRweCByZ2JhKDE1LCAxMDAsIDI0MiwgMC41KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DrawingPage/EditTagsModal.tsx\n");

/***/ })

})