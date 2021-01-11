webpackHotUpdate_N_E("pages/drawing/[slug]",{

/***/ "./__fixtures__/drawings.ts":
/*!**********************************!*\
  !*** ./__fixtures__/drawings.ts ***!
  \**********************************/
/*! exports provided: drawingYears, yearDrawingSets, drawings, dayDrawingSets, drawingDays, dayDrawingSetsByYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawingYears\", function() { return drawingYears; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"yearDrawingSets\", function() { return yearDrawingSets; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawings\", function() { return drawings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dayDrawingSets\", function() { return dayDrawingSets; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawingDays\", function() { return drawingDays; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dayDrawingSetsByYear\", function() { return dayDrawingSetsByYear; });\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nvar drawingYears = ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'];\nvar yearDrawingSets = drawingYears.sort().reverse().reduce(function (accumulator, year) {\n  var rawYearSet = __webpack_require__(\"./__fixtures__/drawings sync recursive ^\\\\.\\\\/.*\\\\.json$\")(\"./\".concat(year, \".json\"));\n\n  var processedYearSet = rawYearSet.map(function (drawing) {\n    var _drawing$id$split = drawing.id.split('.'),\n        _drawing$id$split2 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_drawing$id$split, 2),\n        year = _drawing$id$split2[0],\n        number = _drawing$id$split2[1];\n\n    return _objectSpread(_objectSpread({}, drawing), {}, {\n      year: year,\n      number: number\n    });\n  });\n  accumulator[year] = processedYearSet.sort(function (a, b) {\n    return parseInt(b.number, 10) - parseInt(a.number, 10);\n  });\n  return accumulator;\n}, {});\nvar drawings = drawingYears.reduce(function (accumulator, year) {\n  return [].concat(Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(accumulator), Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(yearDrawingSets[year]));\n}, []);\nvar dayDrawingSets = drawings.reduce(function (accumulator, drawing) {\n  if (!accumulator[drawing.date]) accumulator[drawing.date] = [];\n  accumulator[drawing.date].push(drawing);\n  return accumulator;\n}, {});\nvar drawingDays = Object.keys(dayDrawingSets).sort().reverse();\nvar dayDrawingSetsByYear = drawingDays.reduce(function (accumulator, date) {\n  var year = parseInt(date.slice(0, 4), 10);\n  if (!accumulator[year]) accumulator[year] = {};\n  accumulator[year][date] = dayDrawingSets[date];\n  return accumulator;\n}, {});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vX19maXh0dXJlc19fL2RyYXdpbmdzLnRzPzE5YWIiXSwibmFtZXMiOlsiZHJhd2luZ1llYXJzIiwieWVhckRyYXdpbmdTZXRzIiwic29ydCIsInJldmVyc2UiLCJyZWR1Y2UiLCJhY2N1bXVsYXRvciIsInllYXIiLCJyYXdZZWFyU2V0IiwicmVxdWlyZSIsInByb2Nlc3NlZFllYXJTZXQiLCJtYXAiLCJkcmF3aW5nIiwiaWQiLCJzcGxpdCIsIm51bWJlciIsImEiLCJiIiwicGFyc2VJbnQiLCJkcmF3aW5ncyIsImRheURyYXdpbmdTZXRzIiwiZGF0ZSIsInB1c2giLCJkcmF3aW5nRGF5cyIsIk9iamVjdCIsImtleXMiLCJkYXlEcmF3aW5nU2V0c0J5WWVhciIsInNsaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxZQUFzQixHQUFHLENBQ3BDLE1BRG9DLEVBRXBDLE1BRm9DLEVBR3BDLE1BSG9DLEVBSXBDLE1BSm9DLEVBS3BDLE1BTG9DLEVBTXBDLE1BTm9DLEVBT3BDLE1BUG9DLEVBUXBDLE1BUm9DLEVBU3BDLE1BVG9DLEVBVXBDLE1BVm9DLEVBV3BDLE1BWG9DLEVBWXBDLE1BWm9DLEVBYXBDLE1BYm9DLEVBY3BDLE1BZG9DLEVBZXBDLE1BZm9DLEVBZ0JwQyxNQWhCb0MsQ0FBL0I7QUFtQkEsSUFBTUMsZUFBZ0MsR0FBR0QsWUFBWSxDQUN6REUsSUFENkMsR0FFN0NDLE9BRjZDLEdBRzdDQyxNQUg2QyxDQUd0QyxVQUFDQyxXQUFELEVBQWNDLElBQWQsRUFBdUI7QUFDN0IsTUFBTUMsVUFBVSxHQUFHQyxnRkFBUSxZQUFjRixJQUFmLFdBQTFCOztBQUNBLE1BQU1HLGdCQUEyQixHQUFHRixVQUFVLENBQUNHLEdBQVgsQ0FBZSxVQUFDQyxPQUFELEVBQWtCO0FBQUEsNEJBQzVDQSxPQUFPLENBQUNDLEVBQVIsQ0FBV0MsS0FBWCxDQUFpQixHQUFqQixDQUQ0QztBQUFBO0FBQUEsUUFDNURQLElBRDREO0FBQUEsUUFDdERRLE1BRHNEOztBQUVuRSwyQ0FBWUgsT0FBWjtBQUFxQkwsVUFBSSxFQUFKQSxJQUFyQjtBQUEyQlEsWUFBTSxFQUFOQTtBQUEzQjtBQUNELEdBSG1DLENBQXBDO0FBSUFULGFBQVcsQ0FBQ0MsSUFBRCxDQUFYLEdBQW9CRyxnQkFBZ0IsQ0FBQ1AsSUFBakIsQ0FBc0IsVUFBQ2EsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsV0FBVUMsUUFBUSxDQUFDRCxDQUFDLENBQUNGLE1BQUgsRUFBVyxFQUFYLENBQVIsR0FBeUJHLFFBQVEsQ0FBQ0YsQ0FBQyxDQUFDRCxNQUFILEVBQVcsRUFBWCxDQUEzQztBQUFBLEdBQXRCLENBQXBCO0FBQ0EsU0FBT1QsV0FBUDtBQUNELENBWDZDLEVBVzNDLEVBWDJDLENBQXpDO0FBYUEsSUFBTWEsUUFBbUIsR0FBR2xCLFlBQVksQ0FBQ0ksTUFBYixDQUFvQixVQUFDQyxXQUFELEVBQWNDLElBQWQsRUFBdUI7QUFDNUUsK0tBQVdELFdBQVgsK0pBQTJCSixlQUFlLENBQUNLLElBQUQsQ0FBMUM7QUFDRCxDQUZrQyxFQUVoQyxFQUZnQyxDQUE1QjtBQUlBLElBQU1hLGNBQThCLEdBQUdELFFBQVEsQ0FBQ2QsTUFBVCxDQUFnQixVQUFDQyxXQUFELEVBQWNNLE9BQWQsRUFBMEI7QUFDdEYsTUFBSSxDQUFDTixXQUFXLENBQUNNLE9BQU8sQ0FBQ1MsSUFBVCxDQUFoQixFQUFnQ2YsV0FBVyxDQUFDTSxPQUFPLENBQUNTLElBQVQsQ0FBWCxHQUE0QixFQUE1QjtBQUNoQ2YsYUFBVyxDQUFDTSxPQUFPLENBQUNTLElBQVQsQ0FBWCxDQUEwQkMsSUFBMUIsQ0FBK0JWLE9BQS9CO0FBQ0EsU0FBT04sV0FBUDtBQUNELENBSjZDLEVBSTNDLEVBSjJDLENBQXZDO0FBTUEsSUFBTWlCLFdBQXFCLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTCxjQUFaLEVBQTRCakIsSUFBNUIsR0FBbUNDLE9BQW5DLEVBQTlCO0FBRUEsSUFBTXNCLG9CQUEwQyxHQUFHSCxXQUFXLENBQUNsQixNQUFaLENBQW1CLFVBQUNDLFdBQUQsRUFBY2UsSUFBZCxFQUF1QjtBQUNsRyxNQUFNZCxJQUFJLEdBQUdXLFFBQVEsQ0FBQ0csSUFBSSxDQUFDTSxLQUFMLENBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBRCxFQUFtQixFQUFuQixDQUFyQjtBQUNBLE1BQUksQ0FBQ3JCLFdBQVcsQ0FBQ0MsSUFBRCxDQUFoQixFQUF3QkQsV0FBVyxDQUFDQyxJQUFELENBQVgsR0FBb0IsRUFBcEI7QUFDeEJELGFBQVcsQ0FBQ0MsSUFBRCxDQUFYLENBQWtCYyxJQUFsQixJQUEwQkQsY0FBYyxDQUFDQyxJQUFELENBQXhDO0FBQ0EsU0FBT2YsV0FBUDtBQUNELENBTHlELEVBS3ZELEVBTHVELENBQW5EIiwiZmlsZSI6Ii4vX19maXh0dXJlc19fL2RyYXdpbmdzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHJhd2luZywgWWVhckRyYXdpbmdTZXRzLCBEYXlEcmF3aW5nU2V0cywgRGF5RHJhd2luZ1NldHNCeVllYXIgfSBmcm9tICcuLi90eXBlcydcblxuZXhwb3J0IGNvbnN0IGRyYXdpbmdZZWFyczogc3RyaW5nW10gPSBbXG4gICcyMDAwJyxcbiAgJzIwMDEnLFxuICAnMjAwMicsXG4gICcyMDAzJyxcbiAgJzIwMDQnLFxuICAnMjAwNScsXG4gICcyMDA2JyxcbiAgJzIwMDcnLFxuICAnMjAwOCcsXG4gICcyMDA5JyxcbiAgJzIwMTAnLFxuICAnMjAxMScsXG4gICcyMDEyJyxcbiAgJzIwMTMnLFxuICAnMjAxNCcsXG4gICcyMDE1Jyxcbl1cblxuZXhwb3J0IGNvbnN0IHllYXJEcmF3aW5nU2V0czogWWVhckRyYXdpbmdTZXRzID0gZHJhd2luZ1llYXJzXG4gIC5zb3J0KClcbiAgLnJldmVyc2UoKVxuICAucmVkdWNlKChhY2N1bXVsYXRvciwgeWVhcikgPT4ge1xuICAgIGNvbnN0IHJhd1llYXJTZXQgPSByZXF1aXJlKGAuL2RyYXdpbmdzLyR7eWVhcn0uanNvbmApXG4gICAgY29uc3QgcHJvY2Vzc2VkWWVhclNldDogRHJhd2luZ1tdID0gcmF3WWVhclNldC5tYXAoKGRyYXdpbmc6IGFueSkgPT4ge1xuICAgICAgY29uc3QgW3llYXIsIG51bWJlcl0gPSBkcmF3aW5nLmlkLnNwbGl0KCcuJylcbiAgICAgIHJldHVybiB7IC4uLmRyYXdpbmcsIHllYXIsIG51bWJlciB9XG4gICAgfSlcbiAgICBhY2N1bXVsYXRvclt5ZWFyXSA9IHByb2Nlc3NlZFllYXJTZXQuc29ydCgoYSwgYikgPT4gcGFyc2VJbnQoYi5udW1iZXIsIDEwKSAtIHBhcnNlSW50KGEubnVtYmVyLCAxMCkpXG4gICAgcmV0dXJuIGFjY3VtdWxhdG9yXG4gIH0sIHt9IGFzIGFueSkgYXMgWWVhckRyYXdpbmdTZXRzXG5cbmV4cG9ydCBjb25zdCBkcmF3aW5nczogRHJhd2luZ1tdID0gZHJhd2luZ1llYXJzLnJlZHVjZSgoYWNjdW11bGF0b3IsIHllYXIpID0+IHtcbiAgcmV0dXJuIFsuLi5hY2N1bXVsYXRvciwgLi4ueWVhckRyYXdpbmdTZXRzW3llYXJdXSBhcyBEcmF3aW5nW11cbn0sIFtdIGFzIERyYXdpbmdbXSlcblxuZXhwb3J0IGNvbnN0IGRheURyYXdpbmdTZXRzOiBEYXlEcmF3aW5nU2V0cyA9IGRyYXdpbmdzLnJlZHVjZSgoYWNjdW11bGF0b3IsIGRyYXdpbmcpID0+IHtcbiAgaWYgKCFhY2N1bXVsYXRvcltkcmF3aW5nLmRhdGVdKSBhY2N1bXVsYXRvcltkcmF3aW5nLmRhdGVdID0gW11cbiAgYWNjdW11bGF0b3JbZHJhd2luZy5kYXRlXS5wdXNoKGRyYXdpbmcpXG4gIHJldHVybiBhY2N1bXVsYXRvclxufSwge30gYXMgYW55KSBhcyBEYXlEcmF3aW5nU2V0c1xuXG5leHBvcnQgY29uc3QgZHJhd2luZ0RheXM6IHN0cmluZ1tdID0gT2JqZWN0LmtleXMoZGF5RHJhd2luZ1NldHMpLnNvcnQoKS5yZXZlcnNlKClcblxuZXhwb3J0IGNvbnN0IGRheURyYXdpbmdTZXRzQnlZZWFyOiBEYXlEcmF3aW5nU2V0c0J5WWVhciA9IGRyYXdpbmdEYXlzLnJlZHVjZSgoYWNjdW11bGF0b3IsIGRhdGUpID0+IHtcbiAgY29uc3QgeWVhciA9IHBhcnNlSW50KGRhdGUuc2xpY2UoMCwgNCksIDEwKVxuICBpZiAoIWFjY3VtdWxhdG9yW3llYXJdKSBhY2N1bXVsYXRvclt5ZWFyXSA9IHt9XG4gIGFjY3VtdWxhdG9yW3llYXJdW2RhdGVdID0gZGF5RHJhd2luZ1NldHNbZGF0ZV1cbiAgcmV0dXJuIGFjY3VtdWxhdG9yXG59LCB7fSBhcyBhbnkpIGFzIERheURyYXdpbmdTZXRzQnlZZWFyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./__fixtures__/drawings.ts\n");

/***/ })

})