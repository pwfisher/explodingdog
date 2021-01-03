webpackHotUpdate_N_E("pages/drawing/[id]",{

/***/ "./components/DrawingPage/AddTagModal.tsx":
/*!************************************************!*\
  !*** ./components/DrawingPage/AddTagModal.tsx ***!
  \************************************************/
/*! exports provided: AddTagModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddTagModal\", function() { return AddTagModal; });\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_hashtags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/hashtags */ \"./lib/hashtags.ts\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/pfisher/Code/pwfisher/explodingdog/explorer/components/DrawingPage/AddTagModal.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction _templateObject2() {\n  var data = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  text-align: center;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-size: 24px;\\n  position: absolute;\\n  right: 24px;\\n  top: 24px;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar AddTagModal = function AddTagModal(_ref) {\n  _s();\n\n  var drawing = _ref.drawing,\n      isOpen = _ref.isOpen,\n      closeModal = _ref.closeModal;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(''),\n      _React$useState2 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      newTag = _React$useState2[0],\n      setNewTag = _React$useState2[1];\n\n  var onNewTagChange = function onNewTagChange(e) {\n    setNewTag(e.currentTarget.value);\n  };\n\n  var onNewTagSubmit = function onNewTagSubmit(e) {\n    Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_5__[\"addTagToDrawing\"])(newTag, drawing);\n    e.preventDefault();\n  };\n\n  var tagDrawingSets = Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_5__[\"loadTagDrawingSets\"])();\n  var tags = Object.keys(tagDrawingSets);\n  return __jsx(react_modal__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    isOpen: isOpen,\n    onRequestClose: closeModal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(CloseButton, {\n    onClick: closeModal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, \"close\"), __jsx(Title, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, \"Add Hashtags\"), __jsx(\"pre\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, JSON.stringify(drawing, null, 2)), __jsx(\"form\", {\n    onSubmit: onNewTagSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, \"New: \", __jsx(\"input\", {\n    onChange: onNewTagChange,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 14\n    }\n  }), \" \", __jsx(\"input\", {\n    type: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 50\n    }\n  })), __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, tags.sort().map(function (tag) {\n    return __jsx(\"li\", {\n      key: tag,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 11\n      }\n    }, tag);\n  })));\n};\n\n_s(AddTagModal, \"MlMelIx58t6AxSFhqIERktOlPOs=\");\n\n_c = AddTagModal;\nvar CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button.attrs({\n  classNames: 'Explorer__AddTagModal__CloseButton'\n})(_templateObject());\n_c2 = CloseButton;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h1.attrs({\n  classNames: 'Explorer__AddTagModal__CloseButton'\n})(_templateObject2());\n_c3 = Title;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"AddTagModal\");\n$RefreshReg$(_c2, \"CloseButton\");\n$RefreshReg$(_c3, \"Title\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS9BZGRUYWdNb2RhbC50c3g/M2Y3YiJdLCJuYW1lcyI6WyJBZGRUYWdNb2RhbCIsImRyYXdpbmciLCJpc09wZW4iLCJjbG9zZU1vZGFsIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm5ld1RhZyIsInNldE5ld1RhZyIsIm9uTmV3VGFnQ2hhbmdlIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsIm9uTmV3VGFnU3VibWl0IiwiYWRkVGFnVG9EcmF3aW5nIiwicHJldmVudERlZmF1bHQiLCJ0YWdEcmF3aW5nU2V0cyIsImxvYWRUYWdEcmF3aW5nU2V0cyIsInRhZ3MiLCJPYmplY3QiLCJrZXlzIiwiSlNPTiIsInN0cmluZ2lmeSIsInNvcnQiLCJtYXAiLCJ0YWciLCJDbG9zZUJ1dHRvbiIsInN0eWxlZCIsImJ1dHRvbiIsImF0dHJzIiwiY2xhc3NOYW1lcyIsIlRpdGxlIiwiaDEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRU8sSUFBTUEsV0FBb0YsR0FBRyxTQUF2RkEsV0FBdUYsT0FJOUY7QUFBQTs7QUFBQSxNQUhKQyxPQUdJLFFBSEpBLE9BR0k7QUFBQSxNQUZKQyxNQUVJLFFBRkpBLE1BRUk7QUFBQSxNQURKQyxVQUNJLFFBREpBLFVBQ0k7O0FBQUEsd0JBQ3dCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUR4QjtBQUFBO0FBQUEsTUFDR0MsTUFESDtBQUFBLE1BQ1dDLFNBRFg7O0FBR0osTUFBTUMsY0FBOEQsR0FBRyxTQUFqRUEsY0FBaUUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzVFRixhQUFTLENBQUNFLENBQUMsQ0FBQ0MsYUFBRixDQUFnQkMsS0FBakIsQ0FBVDtBQUNELEdBRkQ7O0FBR0EsTUFBTUMsY0FBNEMsR0FBRyxTQUEvQ0EsY0FBK0MsQ0FBQ0gsQ0FBRCxFQUFPO0FBQzFESSx5RUFBZSxDQUFDUCxNQUFELEVBQVNMLE9BQVQsQ0FBZjtBQUNBUSxLQUFDLENBQUNLLGNBQUY7QUFDRCxHQUhEOztBQUlBLE1BQU1DLGNBQWMsR0FBR0Msd0VBQWtCLEVBQXpDO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUosY0FBWixDQUFiO0FBRUEsU0FDRSxNQUFDLGtEQUFEO0FBQ0UsVUFBTSxFQUFFYixNQURWO0FBRUUsa0JBQWMsRUFBRUMsVUFGbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFLE1BQUMsV0FBRDtBQUFhLFdBQU8sRUFBRUEsVUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLEVBS0UsTUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTEYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU1pQixJQUFJLENBQUNDLFNBQUwsQ0FBZXBCLE9BQWYsRUFBd0IsSUFBeEIsRUFBOEIsQ0FBOUIsQ0FBTixDQU5GLEVBT0U7QUFBTSxZQUFRLEVBQUVXLGNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FDTztBQUFPLFlBQVEsRUFBRUosY0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURQLE9BQzJDO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUQzQyxDQVBGLEVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUyxJQUFJLENBQUNLLElBQUwsR0FBWUMsR0FBWixDQUFnQixVQUFBQyxHQUFHO0FBQUEsV0FDbEI7QUFBSSxTQUFHLEVBQUVBLEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFlQSxHQUFmLENBRGtCO0FBQUEsR0FBbkIsQ0FESCxDQVZGLENBREY7QUFrQkQsQ0FuQ007O0dBQU14QixXOztLQUFBQSxXO0FBcUNiLElBQU15QixXQUFXLEdBQUdDLHlEQUFNLENBQUNDLE1BQVAsQ0FBY0MsS0FBZCxDQUFvQjtBQUFFQyxZQUFVLEVBQUU7QUFBZCxDQUFwQixDQUFILG1CQUFqQjtNQUFNSixXO0FBT04sSUFBTUssS0FBSyxHQUFHSix5REFBTSxDQUFDSyxFQUFQLENBQVVILEtBQVYsQ0FBZ0I7QUFBRUMsWUFBVSxFQUFFO0FBQWQsQ0FBaEIsQ0FBSCxvQkFBWDtNQUFNQyxLIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS9BZGRUYWdNb2RhbC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgRHJhd2luZyB9IGZyb20gJy4uLy4uL3R5cGVzJ1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJ1xuaW1wb3J0IHsgYWRkVGFnVG9EcmF3aW5nLCBsb2FkVGFnRHJhd2luZ1NldHMgfSBmcm9tICcuLi8uLi9saWIvaGFzaHRhZ3MnXG5cbmV4cG9ydCBjb25zdCBBZGRUYWdNb2RhbDogUmVhY3QuRkM8eyBkcmF3aW5nOiBEcmF3aW5nOyBpc09wZW46IGJvb2xlYW47IGNsb3NlTW9kYWw6ICgpID0+IHZvaWQgfT4gPSAoe1xuICBkcmF3aW5nLFxuICBpc09wZW4sXG4gIGNsb3NlTW9kYWwsXG59KSA9PiB7XG4gIGNvbnN0IFtuZXdUYWcsIHNldE5ld1RhZ10gPSBSZWFjdC51c2VTdGF0ZSgnJylcblxuICBjb25zdCBvbk5ld1RhZ0NoYW5nZTogKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdm9pZCA9IChlKSA9PiB7XG4gICAgc2V0TmV3VGFnKGUuY3VycmVudFRhcmdldC52YWx1ZSlcbiAgfVxuICBjb25zdCBvbk5ld1RhZ1N1Ym1pdDogKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4gdm9pZCA9IChlKSA9PiB7XG4gICAgYWRkVGFnVG9EcmF3aW5nKG5ld1RhZywgZHJhd2luZylcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgfVxuICBjb25zdCB0YWdEcmF3aW5nU2V0cyA9IGxvYWRUYWdEcmF3aW5nU2V0cygpXG4gIGNvbnN0IHRhZ3MgPSBPYmplY3Qua2V5cyh0YWdEcmF3aW5nU2V0cylcblxuICByZXR1cm4gKFxuICAgIDxNb2RhbFxuICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICBvblJlcXVlc3RDbG9zZT17Y2xvc2VNb2RhbH1cbiAgICA+XG4gICAgICA8Q2xvc2VCdXR0b24gb25DbGljaz17Y2xvc2VNb2RhbH0+Y2xvc2U8L0Nsb3NlQnV0dG9uPlxuICAgICAgPFRpdGxlPkFkZCBIYXNodGFnczwvVGl0bGU+XG4gICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShkcmF3aW5nLCBudWxsLCAyKX08L3ByZT5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtvbk5ld1RhZ1N1Ym1pdH0+XG4gICAgICAgIE5ldzogPGlucHV0IG9uQ2hhbmdlPXtvbk5ld1RhZ0NoYW5nZX0gLz4gPGlucHV0IHR5cGU9J3N1Ym1pdCcgLz5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDx1bD5cbiAgICAgICAge3RhZ3Muc29ydCgpLm1hcCh0YWcgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e3RhZ30+e3RhZ308L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9Nb2RhbD5cbiAgKVxufVxuXG5jb25zdCBDbG9zZUJ1dHRvbiA9IHN0eWxlZC5idXR0b24uYXR0cnMoeyBjbGFzc05hbWVzOiAnRXhwbG9yZXJfX0FkZFRhZ01vZGFsX19DbG9zZUJ1dHRvbicgfSlgXG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjRweDtcbiAgdG9wOiAyNHB4O1xuYFxuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oMS5hdHRycyh7IGNsYXNzTmFtZXM6ICdFeHBsb3Jlcl9fQWRkVGFnTW9kYWxfX0Nsb3NlQnV0dG9uJyB9KWBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DrawingPage/AddTagModal.tsx\n");

/***/ })

})