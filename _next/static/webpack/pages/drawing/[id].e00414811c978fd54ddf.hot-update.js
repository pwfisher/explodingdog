webpackHotUpdate_N_E("pages/drawing/[id]",{

/***/ "./lib/hashtags.ts":
/*!*************************!*\
  !*** ./lib/hashtags.ts ***!
  \*************************/
/*! exports provided: addTagToDrawing, loadTagDrawingSets, saveTagDrawingSets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTagToDrawing\", function() { return addTagToDrawing; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadTagDrawingSets\", function() { return loadTagDrawingSets; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveTagDrawingSets\", function() { return saveTagDrawingSets; });\nvar addTagToDrawing = function addTagToDrawing(tag, drawing) {\n  var _tagDrawingSets$tag;\n\n  var tagDrawingSets = loadTagDrawingSets();\n  var drawings = (_tagDrawingSets$tag = tagDrawingSets[tag]) !== null && _tagDrawingSets$tag !== void 0 ? _tagDrawingSets$tag : [];\n\n  if (!drawings.includes(drawing)) {\n    drawings.push(drawing);\n    tagDrawingSets[tag] = drawings;\n    saveTagDrawingSets(tagDrawingSets);\n  }\n};\nvar loadTagDrawingSets = function loadTagDrawingSets() {\n  if (true) {\n    return JSON.parse(localStorage.getItem('tagDrawingSets') || '');\n  }\n\n  return {};\n};\nvar saveTagDrawingSets = function saveTagDrawingSets(tagDrawingSets) {\n  window && localStorage.setItem('tagDrawingSets', JSON.stringify(tagDrawingSets));\n  console.log('setItem tagDrawingSets', JSON.stringify(tagDrawingSets));\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2hhc2h0YWdzLnRzPzNjNDAiXSwibmFtZXMiOlsiYWRkVGFnVG9EcmF3aW5nIiwidGFnIiwiZHJhd2luZyIsInRhZ0RyYXdpbmdTZXRzIiwibG9hZFRhZ0RyYXdpbmdTZXRzIiwiZHJhd2luZ3MiLCJpbmNsdWRlcyIsInB1c2giLCJzYXZlVGFnRHJhd2luZ1NldHMiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwid2luZG93Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxHQUFELEVBQWNDLE9BQWQsRUFBbUM7QUFBQTs7QUFDaEUsTUFBTUMsY0FBOEIsR0FBR0Msa0JBQWtCLEVBQXpEO0FBQ0EsTUFBTUMsUUFBbUIsMEJBQUdGLGNBQWMsQ0FBQ0YsR0FBRCxDQUFqQixxRUFBMEIsRUFBbkQ7O0FBQ0EsTUFBSSxDQUFDSSxRQUFRLENBQUNDLFFBQVQsQ0FBa0JKLE9BQWxCLENBQUwsRUFBaUM7QUFDL0JHLFlBQVEsQ0FBQ0UsSUFBVCxDQUFjTCxPQUFkO0FBQ0FDLGtCQUFjLENBQUNGLEdBQUQsQ0FBZCxHQUFzQkksUUFBdEI7QUFDQUcsc0JBQWtCLENBQUNMLGNBQUQsQ0FBbEI7QUFDRDtBQUNGLENBUk07QUFVQSxJQUFNQyxrQkFBd0MsR0FBRyxTQUEzQ0Esa0JBQTJDLEdBQU07QUFDNUQsWUFBbUM7QUFDakMsV0FBT0ssSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixnQkFBckIsS0FBMEMsRUFBckQsQ0FBUDtBQUNEOztBQUNELFNBQU8sRUFBUDtBQUNELENBTE07QUFPQSxJQUFNSixrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNMLGNBQUQsRUFBb0M7QUFDcEVVLFFBQU0sSUFBSUYsWUFBWSxDQUFDRyxPQUFiLENBQXFCLGdCQUFyQixFQUF1Q0wsSUFBSSxDQUFDTSxTQUFMLENBQWVaLGNBQWYsQ0FBdkMsQ0FBVjtBQUNBYSxTQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWixFQUFzQ1IsSUFBSSxDQUFDTSxTQUFMLENBQWVaLGNBQWYsQ0FBdEM7QUFDRCxDQUhNIiwiZmlsZSI6Ii4vbGliL2hhc2h0YWdzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHJhd2luZywgVGFnRHJhd2luZ1NldHMgfSBmcm9tICcuLi90eXBlcydcblxuZXhwb3J0IGNvbnN0IGFkZFRhZ1RvRHJhd2luZyA9ICh0YWc6IHN0cmluZywgZHJhd2luZzogRHJhd2luZykgPT4ge1xuICBjb25zdCB0YWdEcmF3aW5nU2V0czogVGFnRHJhd2luZ1NldHMgPSBsb2FkVGFnRHJhd2luZ1NldHMoKVxuICBjb25zdCBkcmF3aW5nczogRHJhd2luZ1tdID0gdGFnRHJhd2luZ1NldHNbdGFnXSA/PyBbXVxuICBpZiAoIWRyYXdpbmdzLmluY2x1ZGVzKGRyYXdpbmcpKSB7XG4gICAgZHJhd2luZ3MucHVzaChkcmF3aW5nKVxuICAgIHRhZ0RyYXdpbmdTZXRzW3RhZ10gPSBkcmF3aW5nc1xuICAgIHNhdmVUYWdEcmF3aW5nU2V0cyh0YWdEcmF3aW5nU2V0cylcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9hZFRhZ0RyYXdpbmdTZXRzOiAoKSA9PiBUYWdEcmF3aW5nU2V0cyA9ICgpID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFnRHJhd2luZ1NldHMnKSB8fCAnJykgYXMgVGFnRHJhd2luZ1NldHNcbiAgfVxuICByZXR1cm4ge30gYXMgVGFnRHJhd2luZ1NldHNcbn1cblxuZXhwb3J0IGNvbnN0IHNhdmVUYWdEcmF3aW5nU2V0cyA9ICh0YWdEcmF3aW5nU2V0czogVGFnRHJhd2luZ1NldHMpID0+IHtcbiAgd2luZG93ICYmIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YWdEcmF3aW5nU2V0cycsIEpTT04uc3RyaW5naWZ5KHRhZ0RyYXdpbmdTZXRzKSlcbiAgY29uc29sZS5sb2coJ3NldEl0ZW0gdGFnRHJhd2luZ1NldHMnLCBKU09OLnN0cmluZ2lmeSh0YWdEcmF3aW5nU2V0cykpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/hashtags.ts\n");

/***/ })

})