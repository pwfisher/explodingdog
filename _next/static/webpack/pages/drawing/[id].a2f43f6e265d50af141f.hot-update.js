webpackHotUpdate_N_E("pages/drawing/[id]",{

/***/ "./components/DrawingPage/AddTagModal.tsx":
/*!************************************************!*\
  !*** ./components/DrawingPage/AddTagModal.tsx ***!
  \************************************************/
/*! exports provided: AddTagModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddTagModal\", function() { return AddTagModal; });\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/pfisher/Code/pwfisher/explodingdog/explorer/components/DrawingPage/AddTagModal.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject2() {\n  var data = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  text-align: center;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: absolute;\\n  right: 24px;\\n  top: 24px;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar AddTagModal = function AddTagModal(_ref) {\n  var drawing = _ref.drawing,\n      isOpen = _ref.isOpen,\n      closeModal = _ref.closeModal;\n\n  var onNewTagSubmit = function onNewTagSubmit() {};\n\n  return __jsx(react_modal__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    isOpen: isOpen,\n    onRequestClose: closeModal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, __jsx(CloseButton, {\n    onClick: closeModal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, \"close\"), __jsx(Title, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, \"Add Hashtags\"), __jsx(\"pre\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, JSON.stringify(drawing, null, 2)), __jsx(\"form\", {\n    onSubmit: onNewTagSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, \"New: \", __jsx(\"input\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 14\n    }\n  }), \" \", __jsx(\"input\", {\n    type: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 24\n    }\n  })));\n};\n_c = AddTagModal;\nvar CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button.attrs({\n  classNames: 'Explorer__AddTagModal__CloseButton'\n})(_templateObject());\n_c2 = CloseButton;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].h1.attrs({\n  classNames: 'Explorer__AddTagModal__CloseButton'\n})(_templateObject2());\n_c3 = Title;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"AddTagModal\");\n$RefreshReg$(_c2, \"CloseButton\");\n$RefreshReg$(_c3, \"Title\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS9BZGRUYWdNb2RhbC50c3g/M2Y3YiJdLCJuYW1lcyI6WyJBZGRUYWdNb2RhbCIsImRyYXdpbmciLCJpc09wZW4iLCJjbG9zZU1vZGFsIiwib25OZXdUYWdTdWJtaXQiLCJKU09OIiwic3RyaW5naWZ5IiwiQ2xvc2VCdXR0b24iLCJzdHlsZWQiLCJidXR0b24iLCJhdHRycyIsImNsYXNzTmFtZXMiLCJUaXRsZSIsImgxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVPLElBQU1BLFdBQW9GLEdBQUcsU0FBdkZBLFdBQXVGLE9BSTlGO0FBQUEsTUFISkMsT0FHSSxRQUhKQSxPQUdJO0FBQUEsTUFGSkMsTUFFSSxRQUZKQSxNQUVJO0FBQUEsTUFESkMsVUFDSSxRQURKQSxVQUNJOztBQUNKLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTSxDQUFFLENBQS9COztBQUVBLFNBQ0UsTUFBQyxrREFBRDtBQUNFLFVBQU0sRUFBRUYsTUFEVjtBQUVFLGtCQUFjLEVBQUVDLFVBRmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRSxNQUFDLFdBQUQ7QUFBYSxXQUFPLEVBQUVBLFVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixFQUtFLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNRSxJQUFJLENBQUNDLFNBQUwsQ0FBZUwsT0FBZixFQUF3QixJQUF4QixFQUE4QixDQUE5QixDQUFOLENBTkYsRUFPRTtBQUFNLFlBQVEsRUFBRUcsY0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUNPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEUCxPQUNpQjtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEakIsQ0FQRixDQURGO0FBYUQsQ0FwQk07S0FBTUosVztBQXNCYixJQUFNTyxXQUFXLEdBQUdDLHlEQUFNLENBQUNDLE1BQVAsQ0FBY0MsS0FBZCxDQUFvQjtBQUFFQyxZQUFVLEVBQUU7QUFBZCxDQUFwQixDQUFILG1CQUFqQjtNQUFNSixXO0FBTU4sSUFBTUssS0FBSyxHQUFHSix5REFBTSxDQUFDSyxFQUFQLENBQVVILEtBQVYsQ0FBZ0I7QUFBRUMsWUFBVSxFQUFFO0FBQWQsQ0FBaEIsQ0FBSCxvQkFBWDtNQUFNQyxLIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS9BZGRUYWdNb2RhbC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgRHJhd2luZyB9IGZyb20gJy4uLy4uL3R5cGVzJ1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJ1xuXG5leHBvcnQgY29uc3QgQWRkVGFnTW9kYWw6IFJlYWN0LkZDPHsgZHJhd2luZzogRHJhd2luZzsgaXNPcGVuOiBib29sZWFuOyBjbG9zZU1vZGFsOiAoKSA9PiB2b2lkIH0+ID0gKHtcbiAgZHJhd2luZyxcbiAgaXNPcGVuLFxuICBjbG9zZU1vZGFsLFxufSkgPT4ge1xuICBjb25zdCBvbk5ld1RhZ1N1Ym1pdCA9ICgpID0+IHt9XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWxcbiAgICAgIGlzT3Blbj17aXNPcGVufVxuICAgICAgb25SZXF1ZXN0Q2xvc2U9e2Nsb3NlTW9kYWx9XG4gICAgPlxuICAgICAgPENsb3NlQnV0dG9uIG9uQ2xpY2s9e2Nsb3NlTW9kYWx9PmNsb3NlPC9DbG9zZUJ1dHRvbj5cbiAgICAgIDxUaXRsZT5BZGQgSGFzaHRhZ3M8L1RpdGxlPlxuICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoZHJhd2luZywgbnVsbCwgMil9PC9wcmU+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17b25OZXdUYWdTdWJtaXR9PlxuICAgICAgICBOZXc6IDxpbnB1dCAvPiA8aW5wdXQgdHlwZT0nc3VibWl0JyAvPlxuICAgICAgPC9mb3JtPlxuICAgIDwvTW9kYWw+XG4gIClcbn1cblxuY29uc3QgQ2xvc2VCdXR0b24gPSBzdHlsZWQuYnV0dG9uLmF0dHJzKHsgY2xhc3NOYW1lczogJ0V4cGxvcmVyX19BZGRUYWdNb2RhbF9fQ2xvc2VCdXR0b24nIH0pYFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyNHB4O1xuICB0b3A6IDI0cHg7XG5gXG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxLmF0dHJzKHsgY2xhc3NOYW1lczogJ0V4cGxvcmVyX19BZGRUYWdNb2RhbF9fQ2xvc2VCdXR0b24nIH0pYFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DrawingPage/AddTagModal.tsx\n");

/***/ })

})