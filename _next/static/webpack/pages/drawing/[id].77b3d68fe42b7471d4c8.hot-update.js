webpackHotUpdate_N_E("pages/drawing/[id]",{

/***/ "./components/DrawingPage/ExportTagsModal.tsx":
/*!****************************************************!*\
  !*** ./components/DrawingPage/ExportTagsModal.tsx ***!
  \****************************************************/
/*! exports provided: ExportTagsModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ExportTagsModal\", function() { return ExportTagsModal; });\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_hashtags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/hashtags */ \"./lib/hashtags.ts\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/pfisher/Code/pwfisher/explodingdog/explorer/components/DrawingPage/ExportTagsModal.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nvar ExportTagsModal = function ExportTagsModal(_ref) {\n  _s();\n\n  var isOpen = _ref.isOpen,\n      closeModal = _ref.closeModal;\n  var tagDrawingSets = Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_4__[\"loadTagDrawingSets\"])();\n  var initialExportString = JSON.stringify(tagDrawingSets, null, 2); // exportString state powers selectAll\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(initialExportString),\n      _React$useState2 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      exportString = _React$useState2[0],\n      setExportString = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState4 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      showCopySuccess = _React$useState4[0],\n      setShowCopySuccess = _React$useState4[1];\n\n  function selectAll() {\n    navigator.clipboard.writeText(exportString);\n    setShowCopySuccess(true);\n    setTimeout(function () {\n      return setShowCopySuccess(false);\n    }, 2000);\n  } // Edits in textarea are written to localStorage\n\n\n  function onChange(e) {\n    setExportString(e.currentTarget.value);\n    Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_4__[\"saveTagDrawingSetsString\"])(e.currentTarget.value);\n  }\n\n  return __jsx(react_modal__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    isOpen: isOpen,\n    onRequestClose: closeModal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, __jsx(Wrap, {\n    onKeyDown: function onKeyDown(e) {\n      return e.stopPropagation();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, __jsx(Title, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, \"Export Hashtags\"), __jsx(ButtonBar, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, __jsx(SelectAllButton, {\n    onClick: selectAll,\n    showSuccess: showCopySuccess,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }\n  }, \"select all\"), __jsx(CloseButton, {\n    onClick: closeModal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  }, \"close\")), __jsx(ExportTextarea, {\n    value: exportString,\n    onChange: onChange,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, exportString)));\n};\n\n_s(ExportTagsModal, \"Uv7YuQPaWhdAlLh2JGbUupplCQ4=\");\n\n_c = ExportTagsModal;\nvar Wrap = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.attrs({\n  classNames: 'Explorer__ExportTagsModal__Wrap'\n}).withConfig({\n  displayName: \"ExportTagsModal__Wrap\",\n  componentId: \"sc-1fygjp5-0\"\n})([\"display:flex;flex-direction:column;height:100%;\"]);\n_c2 = Wrap;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].h1.attrs({\n  classNames: 'Explorer__ExportTagsModal__Title'\n}).withConfig({\n  displayName: \"ExportTagsModal__Title\",\n  componentId: \"sc-1fygjp5-1\"\n})([\"text-align:center;\"]);\n_c3 = Title;\nvar ButtonBar = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.attrs({\n  classNames: 'Explorer__ExportTagsModal__ButtonBar'\n}).withConfig({\n  displayName: \"ExportTagsModal__ButtonBar\",\n  componentId: \"sc-1fygjp5-2\"\n})([\"display:flex;justify-content:space-between;\"]);\n_c4 = ButtonBar;\nvar SelectAllButton = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button.attrs({\n  classNames: 'Explorer__ExportTagsModal__SelectAllButton'\n}).withConfig({\n  displayName: \"ExportTagsModal__SelectAllButton\",\n  componentId: \"sc-1fygjp5-3\"\n})([\"align-self:flex-start;font-size:24px;\", \"\"], function (o) {\n  return o.showSuccess && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"css\"])([\"position:relative;&::after{background:rgb(200,255,230);border:1px solid rgba(8,128,44,1);border-radius:5px;box-shadow:inset 0 0 5px rgba(15,225,80,1);color:rgba(0,64,0,1);content:\\\"copied to clipboard \\u2713\\\";display:block;left:calc(100% + 16px);padding:1px 0 2px;position:absolute;top:-2px;width:250px;z-index:1;}\"]);\n});\n_c5 = SelectAllButton;\nvar CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button.attrs({\n  classNames: 'Explorer__ExportTagsModal__CloseButton'\n}).withConfig({\n  displayName: \"ExportTagsModal__CloseButton\",\n  componentId: \"sc-1fygjp5-4\"\n})([\"font-size:24px;\"]);\n_c6 = CloseButton;\nvar ExportTextarea = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].textarea.attrs({\n  classNames: 'Explorer__ExportTagsModal__ExportTextarea'\n}).withConfig({\n  displayName: \"ExportTagsModal__ExportTextarea\",\n  componentId: \"sc-1fygjp5-5\"\n})([\"height:100%;margin:16px -20px -20px;padding:16px;\"]);\n_c7 = ExportTextarea;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"ExportTagsModal\");\n$RefreshReg$(_c2, \"Wrap\");\n$RefreshReg$(_c3, \"Title\");\n$RefreshReg$(_c4, \"ButtonBar\");\n$RefreshReg$(_c5, \"SelectAllButton\");\n$RefreshReg$(_c6, \"CloseButton\");\n$RefreshReg$(_c7, \"ExportTextarea\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EcmF3aW5nUGFnZS9FeHBvcnRUYWdzTW9kYWwudHN4PzBhZmYiXSwibmFtZXMiOlsiRXhwb3J0VGFnc01vZGFsIiwiaXNPcGVuIiwiY2xvc2VNb2RhbCIsInRhZ0RyYXdpbmdTZXRzIiwibG9hZFRhZ0RyYXdpbmdTZXRzIiwiaW5pdGlhbEV4cG9ydFN0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJSZWFjdCIsInVzZVN0YXRlIiwiZXhwb3J0U3RyaW5nIiwic2V0RXhwb3J0U3RyaW5nIiwic2hvd0NvcHlTdWNjZXNzIiwic2V0U2hvd0NvcHlTdWNjZXNzIiwic2VsZWN0QWxsIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwic2V0VGltZW91dCIsIm9uQ2hhbmdlIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsInNhdmVUYWdEcmF3aW5nU2V0c1N0cmluZyIsInN0b3BQcm9wYWdhdGlvbiIsIldyYXAiLCJzdHlsZWQiLCJkaXYiLCJhdHRycyIsImNsYXNzTmFtZXMiLCJUaXRsZSIsImgxIiwiQnV0dG9uQmFyIiwiU2VsZWN0QWxsQnV0dG9uIiwiYnV0dG9uIiwibyIsInNob3dTdWNjZXNzIiwiY3NzIiwiQ2xvc2VCdXR0b24iLCJFeHBvcnRUZXh0YXJlYSIsInRleHRhcmVhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxlQUFzRSxHQUFHLFNBQXpFQSxlQUF5RSxPQUdoRjtBQUFBOztBQUFBLE1BRkpDLE1BRUksUUFGSkEsTUFFSTtBQUFBLE1BREpDLFVBQ0ksUUFESkEsVUFDSTtBQUNKLE1BQU1DLGNBQWMsR0FBR0Msd0VBQWtCLEVBQXpDO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUdDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixjQUFmLEVBQStCLElBQS9CLEVBQXFDLENBQXJDLENBQTVCLENBRkksQ0FJSjs7QUFKSSx3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LENBQXBCLENBQUg7QUFBQTtBQUFBO0FBQUEsdUJBQWpCO01BQU1TLFc7QUFJTixJQUFNQyxjQUFjLEdBQUdiLHlEQUFNLENBQUNjLFFBQVAsQ0FBZ0JaLEtBQWhCLENBQXNCO0FBQUVDLFlBQVUsRUFBRTtBQUFkLENBQXRCLENBQUg7QUFBQTtBQUFBO0FBQUEseURBQXBCO01BQU1VLGMiLCJmaWxlIjoiLi9jb21wb25lbnRzL0RyYXdpbmdQYWdlL0V4cG9ydFRhZ3NNb2RhbC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJ1xuaW1wb3J0IHsgbG9hZFRhZ0RyYXdpbmdTZXRzLCBzYXZlVGFnRHJhd2luZ1NldHNTdHJpbmcgfSBmcm9tICcuLi8uLi9saWIvaGFzaHRhZ3MnXG5cbmV4cG9ydCBjb25zdCBFeHBvcnRUYWdzTW9kYWw6IFJlYWN0LkZDPHsgaXNPcGVuOiBib29sZWFuOyBjbG9zZU1vZGFsOiAoKSA9PiB2b2lkIH0+ID0gKHtcbiAgaXNPcGVuLFxuICBjbG9zZU1vZGFsLFxufSkgPT4ge1xuICBjb25zdCB0YWdEcmF3aW5nU2V0cyA9IGxvYWRUYWdEcmF3aW5nU2V0cygpXG4gIGNvbnN0IGluaXRpYWxFeHBvcnRTdHJpbmcgPSBKU09OLnN0cmluZ2lmeSh0YWdEcmF3aW5nU2V0cywgbnVsbCwgMilcblxuICAvLyBleHBvcnRTdHJpbmcgc3RhdGUgcG93ZXJzIHNlbGVjdEFsbFxuICBjb25zdCBbZXhwb3J0U3RyaW5nLCBzZXRFeHBvcnRTdHJpbmddID0gUmVhY3QudXNlU3RhdGUoaW5pdGlhbEV4cG9ydFN0cmluZylcbiAgY29uc3QgW3Nob3dDb3B5U3VjY2Vzcywgc2V0U2hvd0NvcHlTdWNjZXNzXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuXG4gIGZ1bmN0aW9uIHNlbGVjdEFsbCgpIHtcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChleHBvcnRTdHJpbmcpXG4gICAgc2V0U2hvd0NvcHlTdWNjZXNzKHRydWUpXG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRTaG93Q29weVN1Y2Nlc3MoZmFsc2UpLCAyMDAwKVxuICB9XG5cbiAgLy8gRWRpdHMgaW4gdGV4dGFyZWEgYXJlIHdyaXR0ZW4gdG8gbG9jYWxTdG9yYWdlXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSB7XG4gICAgc2V0RXhwb3J0U3RyaW5nKGUuY3VycmVudFRhcmdldC52YWx1ZSlcbiAgICBzYXZlVGFnRHJhd2luZ1NldHNTdHJpbmcoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWwgaXNPcGVuPXtpc09wZW59IG9uUmVxdWVzdENsb3NlPXtjbG9zZU1vZGFsfT5cbiAgICAgIDxXcmFwIG9uS2V5RG93bj17ZSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfT5cbiAgICAgICAgPFRpdGxlPkV4cG9ydCBIYXNodGFnczwvVGl0bGU+XG4gICAgICAgIDxCdXR0b25CYXI+XG4gICAgICAgICAgPFNlbGVjdEFsbEJ1dHRvbiBvbkNsaWNrPXtzZWxlY3RBbGx9IHNob3dTdWNjZXNzPXtzaG93Q29weVN1Y2Nlc3N9PnNlbGVjdCBhbGw8L1NlbGVjdEFsbEJ1dHRvbj5cbiAgICAgICAgICA8Q2xvc2VCdXR0b24gb25DbGljaz17Y2xvc2VNb2RhbH0+Y2xvc2U8L0Nsb3NlQnV0dG9uPlxuICAgICAgICA8L0J1dHRvbkJhcj5cbiAgICAgICAgPEV4cG9ydFRleHRhcmVhIHZhbHVlPXtleHBvcnRTdHJpbmd9IG9uQ2hhbmdlPXtvbkNoYW5nZX0+e2V4cG9ydFN0cmluZ308L0V4cG9ydFRleHRhcmVhPlxuICAgICAgPC9XcmFwPlxuICAgIDwvTW9kYWw+XG4gIClcbn1cblxuY29uc3QgV3JhcCA9IHN0eWxlZC5kaXYuYXR0cnMoeyBjbGFzc05hbWVzOiAnRXhwbG9yZXJfX0V4cG9ydFRhZ3NNb2RhbF9fV3JhcCcgfSlgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbmBcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDEuYXR0cnMoeyBjbGFzc05hbWVzOiAnRXhwbG9yZXJfX0V4cG9ydFRhZ3NNb2RhbF9fVGl0bGUnIH0pYFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gXG5cbmNvbnN0IEJ1dHRvbkJhciA9IHN0eWxlZC5kaXYuYXR0cnMoeyBjbGFzc05hbWVzOiAnRXhwbG9yZXJfX0V4cG9ydFRhZ3NNb2RhbF9fQnV0dG9uQmFyJyB9KWBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYFxuXG5jb25zdCBTZWxlY3RBbGxCdXR0b24gPSBzdHlsZWQuYnV0dG9uLmF0dHJzKHsgY2xhc3NOYW1lczogJ0V4cGxvcmVyX19FeHBvcnRUYWdzTW9kYWxfX1NlbGVjdEFsbEJ1dHRvbicgfSk8e1xuICBzaG93U3VjY2VzczogYm9vbGVhblxufT5gXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcblxuICAke28gPT4gby5zaG93U3VjY2VzcyAmJiBjc3NgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZDogcmdiKDIwMCwgMjU1LCAyMzApO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg4LCAxMjgsIDQ0LCAxKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggcmdiYSgxNSwgMjI1LCA4MCwgMSk7XG4gICAgICBjb2xvcjogcmdiYSgwLCA2NCwgMCwgMSk7XG4gICAgICBjb250ZW50OiBcImNvcGllZCB0byBjbGlwYm9hcmQg4pyTXCI7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGxlZnQ6IGNhbGMoMTAwJSArIDE2cHgpO1xuICAgICAgcGFkZGluZzogMXB4IDAgMnB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtMnB4O1xuICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgei1pbmRleDogMTtcbiAgICB9XG4gIGB9XG5gXG5cbmNvbnN0IENsb3NlQnV0dG9uID0gc3R5bGVkLmJ1dHRvbi5hdHRycyh7IGNsYXNzTmFtZXM6ICdFeHBsb3Jlcl9fRXhwb3J0VGFnc01vZGFsX19DbG9zZUJ1dHRvbicgfSlgXG4gIGZvbnQtc2l6ZTogMjRweDtcbmBcblxuY29uc3QgRXhwb3J0VGV4dGFyZWEgPSBzdHlsZWQudGV4dGFyZWEuYXR0cnMoeyBjbGFzc05hbWVzOiAnRXhwbG9yZXJfX0V4cG9ydFRhZ3NNb2RhbF9fRXhwb3J0VGV4dGFyZWEnIH0pYFxuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMTZweCAtMjBweCAtMjBweDtcbiAgcGFkZGluZzogMTZweDtcbmBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DrawingPage/ExportTagsModal.tsx\n");

/***/ })

})