webpackHotUpdate_N_E("pages/_app",{

/***/ "./containers/MyTags.ts":
/*!******************************!*\
  !*** ./containers/MyTags.ts ***!
  \******************************/
/*! exports provided: useMyTags, MyTagsContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useMyTags\", function() { return useMyTags; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MyTagsContainer\", function() { return MyTagsContainer; });\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unstated-next */ \"./node_modules/unstated-next/dist/unstated-next.mjs\");\n/* harmony import */ var _lib_hashtags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/hashtags */ \"./lib/hashtags.ts\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction useMyTags() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(loadMyTagDrawingSets()),\n      _React$useState2 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      myTagDrawingSets = _React$useState2[0],\n      setMyTagDrawingSets = _React$useState2[1];\n\n  console.log('useMyTags', myTagDrawingSets);\n\n  function loadMyTagDrawingSets() {\n    if (false) {}\n    return JSON.parse(localStorage.getItem('tagDrawingSets') || '{}');\n  } // const saveMyTagDrawingSets = React.useCallback((tagDrawingSets: TagDrawingSets): void => {\n  //   console.log('saveMyTagDrawingSets')\n  //   localStorage.setItem('tagDrawingSets', JSON.stringify(tagDrawingSets))\n  //   setMyTagDrawingSets(tagDrawingSets)\n  // }, [setMyTagDrawingSets])\n  // const drawingHasMyTag = React.useCallback((drawing: Drawing, tag: string): boolean => {\n  //   const drawings: Drawing[] = myTagDrawingSets[tag] ?? []\n  //   return drawings.some(o => o.id === drawing.id)\n  // }, [myTagDrawingSets])\n  // const myTags: string[] = React.useMemo(() => Object.keys(myTagDrawingSets), [myTagDrawingSets])\n  // const addMyTagToDrawing = React.useCallback((tag: string, drawing: Drawing): void => {\n  //   const workingCopy: TagDrawingSets = duplicateTagDrawingSets(myTagDrawingSets)\n  //   const drawings: Drawing[] = workingCopy[tag] ?? []\n  //   if (!drawings.some(o => o.id === drawing.id)) {\n  //     drawings.push(drawing)\n  //     workingCopy[tag] = drawings\n  //     saveMyTagDrawingSets(workingCopy)\n  //     setMyTagDrawingSets(workingCopy)\n  //   }\n  // }, [myTagDrawingSets, setMyTagDrawingSets])\n  // const removeMyTagFromDrawing = React.useCallback((tag: string, drawing: Drawing): void => {\n  //   const workingCopy: TagDrawingSets = duplicateTagDrawingSets(myTagDrawingSets)\n  //   const drawings: Drawing[] | undefined = workingCopy[tag]\n  //   if (!drawings) return\n  //   workingCopy[tag] = drawings.filter(o => o.id !== drawing.id)\n  //   if (!workingCopy[tag].length) delete workingCopy[tag]\n  //   saveMyTagDrawingSets(workingCopy)\n  //   setMyTagDrawingSets(workingCopy)\n  // }, [myTagDrawingSets, setMyTagDrawingSets])\n  // const getMyTagsForDrawing = React.useCallback((drawing: Drawing): string[] => {\n  //   return myTags.filter(tag => drawingHasMyTag(drawing, tag))\n  // }, [myTags, drawingHasMyTag])\n\n\n  function saveMyTagDrawingSets(tagDrawingSets) {\n    console.log('saveMyTagDrawingSets');\n    localStorage.setItem('tagDrawingSets', JSON.stringify(tagDrawingSets));\n    setMyTagDrawingSets(tagDrawingSets);\n  }\n\n  function drawingHasMyTag(drawing, tag) {\n    var _myTagDrawingSets$tag;\n\n    var drawings = (_myTagDrawingSets$tag = myTagDrawingSets[tag]) !== null && _myTagDrawingSets$tag !== void 0 ? _myTagDrawingSets$tag : [];\n    return drawings.some(function (o) {\n      return o.id === drawing.id;\n    });\n  }\n\n  var myTags = Object.keys(myTagDrawingSets);\n\n  function addMyTagToDrawing(tag, drawing) {\n    var _workingCopy$tag;\n\n    var workingCopy = Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_3__[\"duplicateTagDrawingSets\"])(myTagDrawingSets);\n    var drawings = (_workingCopy$tag = workingCopy[tag]) !== null && _workingCopy$tag !== void 0 ? _workingCopy$tag : [];\n\n    if (!drawings.some(function (o) {\n      return o.id === drawing.id;\n    })) {\n      drawings.push(drawing);\n      workingCopy[tag] = drawings;\n      saveMyTagDrawingSets(workingCopy);\n      setMyTagDrawingSets(workingCopy);\n    }\n  }\n\n  function removeMyTagFromDrawing(tag, drawing) {\n    var workingCopy = Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_3__[\"duplicateTagDrawingSets\"])(myTagDrawingSets);\n    var drawings = workingCopy[tag];\n    if (!drawings) return;\n    workingCopy[tag] = drawings.filter(function (o) {\n      return o.id !== drawing.id;\n    });\n    if (!workingCopy[tag].length) delete workingCopy[tag];\n    saveMyTagDrawingSets(workingCopy);\n    setMyTagDrawingSets(workingCopy);\n  }\n\n  function getMyTagsForDrawing(drawing) {\n    return myTags.filter(function (tag) {\n      return drawingHasMyTag(drawing, tag);\n    });\n  }\n\n  return {\n    myTagDrawingSets: myTagDrawingSets,\n    saveMyTagDrawingSets: saveMyTagDrawingSets,\n    myTags: myTags,\n    drawingHasMyTag: drawingHasMyTag,\n    addMyTagToDrawing: addMyTagToDrawing,\n    removeMyTagFromDrawing: removeMyTagFromDrawing,\n    getMyTagsForDrawing: getMyTagsForDrawing\n  };\n}\n\n_s(useMyTags, \"yZxbWl4AIUVp7WdCNM5FneO804g=\");\n\nvar MyTagsContainer = Object(unstated_next__WEBPACK_IMPORTED_MODULE_2__[\"createContainer\"])(useMyTags);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9NeVRhZ3MudHM/MDNlMSJdLCJuYW1lcyI6WyJ1c2VNeVRhZ3MiLCJSZWFjdCIsInVzZVN0YXRlIiwibG9hZE15VGFnRHJhd2luZ1NldHMiLCJteVRhZ0RyYXdpbmdTZXRzIiwic2V0TXlUYWdEcmF3aW5nU2V0cyIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2F2ZU15VGFnRHJhd2luZ1NldHMiLCJ0YWdEcmF3aW5nU2V0cyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJkcmF3aW5nSGFzTXlUYWciLCJkcmF3aW5nIiwidGFnIiwiZHJhd2luZ3MiLCJzb21lIiwibyIsImlkIiwibXlUYWdzIiwiT2JqZWN0Iiwia2V5cyIsImFkZE15VGFnVG9EcmF3aW5nIiwid29ya2luZ0NvcHkiLCJkdXBsaWNhdGVUYWdEcmF3aW5nU2V0cyIsInB1c2giLCJyZW1vdmVNeVRhZ0Zyb21EcmF3aW5nIiwiZmlsdGVyIiwibGVuZ3RoIiwiZ2V0TXlUYWdzRm9yRHJhd2luZyIsIk15VGFnc0NvbnRhaW5lciIsImNyZWF0ZUNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR08sU0FBU0EsU0FBVCxHQUFxQjtBQUFBOztBQUFBLHdCQUNzQkMsNENBQUssQ0FBQ0MsUUFBTixDQUM5Q0Msb0JBQW9CLEVBRDBCLENBRHRCO0FBQUE7QUFBQSxNQUNuQkMsZ0JBRG1CO0FBQUEsTUFDREMsbUJBREM7O0FBSTFCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCSCxnQkFBekI7O0FBRUEsV0FBU0Qsb0JBQVQsR0FBZ0Q7QUFDOUMsZUFBbUM7QUFDbkMsV0FBT0ssSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixnQkFBckIsS0FBMEMsSUFBckQsQ0FBUDtBQUNELEdBVHlCLENBVzFCO0FBQ0E7QUFD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QixFQUF0QkEsc0JBTks7QUFPTEcsdUJBQW1CLEVBQW5CQTtBQVBLLEdBQVA7QUFTRDs7R0FoR2VqQyxTOztBQWtHVCxJQUFNa0MsZUFBZSxHQUFHQyxxRUFBZSxDQUFDbkMsU0FBRCxDQUF2QyIsImZpbGUiOiIuL2NvbnRhaW5lcnMvTXlUYWdzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3JlYXRlQ29udGFpbmVyIH0gZnJvbSAndW5zdGF0ZWQtbmV4dCdcbmltcG9ydCB7IGR1cGxpY2F0ZVRhZ0RyYXdpbmdTZXRzIH0gZnJvbSAnLi4vbGliL2hhc2h0YWdzJ1xuaW1wb3J0IHsgRHJhd2luZywgVGFnRHJhd2luZ1NldHMgfSBmcm9tICcuLi90eXBlcydcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZU15VGFncygpIHtcbiAgY29uc3QgW215VGFnRHJhd2luZ1NldHMsIHNldE15VGFnRHJhd2luZ1NldHNdID0gUmVhY3QudXNlU3RhdGU8VGFnRHJhd2luZ1NldHM+KFxuICAgIGxvYWRNeVRhZ0RyYXdpbmdTZXRzKClcbiAgKVxuICBjb25zb2xlLmxvZygndXNlTXlUYWdzJywgbXlUYWdEcmF3aW5nU2V0cylcblxuICBmdW5jdGlvbiBsb2FkTXlUYWdEcmF3aW5nU2V0cygpOiBUYWdEcmF3aW5nU2V0cyB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4ge30gYXMgVGFnRHJhd2luZ1NldHNcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFnRHJhd2luZ1NldHMnKSB8fCAne30nKSBhcyBUYWdEcmF3aW5nU2V0c1xuICB9XG5cbiAgLy8gY29uc3Qgc2F2ZU15VGFnRHJhd2luZ1NldHMgPSBSZWFjdC51c2VDYWxsYmFjaygodGFnRHJhd2luZ1NldHM6IFRhZ0RyYXdpbmdTZXRzKTogdm9pZCA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coJ3NhdmVNeVRhZ0RyYXdpbmdTZXRzJylcbiAgLy8gICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFnRHJhd2luZ1NldHMnLCBKU09OLnN0cmluZ2lmeSh0YWdEcmF3aW5nU2V0cykpXG4gIC8vICAgc2V0TXlUYWdEcmF3aW5nU2V0cyh0YWdEcmF3aW5nU2V0cylcbiAgLy8gfSwgW3NldE15VGFnRHJhd2luZ1NldHNdKVxuXG4gIC8vIGNvbnN0IGRyYXdpbmdIYXNNeVRhZyA9IFJlYWN0LnVzZUNhbGxiYWNrKChkcmF3aW5nOiBEcmF3aW5nLCB0YWc6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICAvLyAgIGNvbnN0IGRyYXdpbmdzOiBEcmF3aW5nW10gPSBteVRhZ0RyYXdpbmdTZXRzW3RhZ10gPz8gW11cbiAgLy8gICByZXR1cm4gZHJhd2luZ3Muc29tZShvID0+IG8uaWQgPT09IGRyYXdpbmcuaWQpXG4gIC8vIH0sIFtteVRhZ0RyYXdpbmdTZXRzXSlcblxuICAvLyBjb25zdCBteVRhZ3M6IHN0cmluZ1tdID0gUmVhY3QudXNlTWVtbygoKSA9PiBPYmplY3Qua2V5cyhteVRhZ0RyYXdpbmdTZXRzKSwgW215VGFnRHJhd2luZ1NldHNdKVxuXG4gIC8vIGNvbnN0IGFkZE15VGFnVG9EcmF3aW5nID0gUmVhY3QudXNlQ2FsbGJhY2soKHRhZzogc3RyaW5nLCBkcmF3aW5nOiBEcmF3aW5nKTogdm9pZCA9PiB7XG4gIC8vICAgY29uc3Qgd29ya2luZ0NvcHk6IFRhZ0RyYXdpbmdTZXRzID0gZHVwbGljYXRlVGFnRHJhd2luZ1NldHMobXlUYWdEcmF3aW5nU2V0cylcbiAgLy8gICBjb25zdCBkcmF3aW5nczogRHJhd2luZ1tdID0gd29ya2luZ0NvcHlbdGFnXSA/PyBbXVxuICAvLyAgIGlmICghZHJhd2luZ3Muc29tZShvID0+IG8uaWQgPT09IGRyYXdpbmcuaWQpKSB7XG4gIC8vICAgICBkcmF3aW5ncy5wdXNoKGRyYXdpbmcpXG4gIC8vICAgICB3b3JraW5nQ29weVt0YWddID0gZHJhd2luZ3NcbiAgLy8gICAgIHNhdmVNeVRhZ0RyYXdpbmdTZXRzKHdvcmtpbmdDb3B5KVxuICAvLyAgICAgc2V0TXlUYWdEcmF3aW5nU2V0cyh3b3JraW5nQ29weSlcbiAgLy8gICB9XG4gIC8vIH0sIFtteVRhZ0RyYXdpbmdTZXRzLCBzZXRNeVRhZ0RyYXdpbmdTZXRzXSlcblxuICAvLyBjb25zdCByZW1vdmVNeVRhZ0Zyb21EcmF3aW5nID0gUmVhY3QudXNlQ2FsbGJhY2soKHRhZzogc3RyaW5nLCBkcmF3aW5nOiBEcmF3aW5nKTogdm9pZCA9PiB7XG4gIC8vICAgY29uc3Qgd29ya2luZ0NvcHk6IFRhZ0RyYXdpbmdTZXRzID0gZHVwbGljYXRlVGFnRHJhd2luZ1NldHMobXlUYWdEcmF3aW5nU2V0cylcbiAgLy8gICBjb25zdCBkcmF3aW5nczogRHJhd2luZ1tdIHwgdW5kZWZpbmVkID0gd29ya2luZ0NvcHlbdGFnXVxuICAvLyAgIGlmICghZHJhd2luZ3MpIHJldHVyblxuICAvLyAgIHdvcmtpbmdDb3B5W3RhZ10gPSBkcmF3aW5ncy5maWx0ZXIobyA9PiBvLmlkICE9PSBkcmF3aW5nLmlkKVxuICAvLyAgIGlmICghd29ya2luZ0NvcHlbdGFnXS5sZW5ndGgpIGRlbGV0ZSB3b3JraW5nQ29weVt0YWddXG4gIC8vICAgc2F2ZU15VGFnRHJhd2luZ1NldHMod29ya2luZ0NvcHkpXG4gIC8vICAgc2V0TXlUYWdEcmF3aW5nU2V0cyh3b3JraW5nQ29weSlcbiAgLy8gfSwgW215VGFnRHJhd2luZ1NldHMsIHNldE15VGFnRHJhd2luZ1NldHNdKVxuXG4gIC8vIGNvbnN0IGdldE15VGFnc0ZvckRyYXdpbmcgPSBSZWFjdC51c2VDYWxsYmFjaygoZHJhd2luZzogRHJhd2luZyk6IHN0cmluZ1tdID0+IHtcbiAgLy8gICByZXR1cm4gbXlUYWdzLmZpbHRlcih0YWcgPT4gZHJhd2luZ0hhc015VGFnKGRyYXdpbmcsIHRhZykpXG4gIC8vIH0sIFtteVRhZ3MsIGRyYXdpbmdIYXNNeVRhZ10pXG5cbiAgZnVuY3Rpb24gc2F2ZU15VGFnRHJhd2luZ1NldHModGFnRHJhd2luZ1NldHM6IFRhZ0RyYXdpbmdTZXRzKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coJ3NhdmVNeVRhZ0RyYXdpbmdTZXRzJylcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFnRHJhd2luZ1NldHMnLCBKU09OLnN0cmluZ2lmeSh0YWdEcmF3aW5nU2V0cykpXG4gICAgc2V0TXlUYWdEcmF3aW5nU2V0cyh0YWdEcmF3aW5nU2V0cylcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYXdpbmdIYXNNeVRhZyhkcmF3aW5nOiBEcmF3aW5nLCB0YWc6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGRyYXdpbmdzOiBEcmF3aW5nW10gPSBteVRhZ0RyYXdpbmdTZXRzW3RhZ10gPz8gW11cbiAgICByZXR1cm4gZHJhd2luZ3Muc29tZShvID0+IG8uaWQgPT09IGRyYXdpbmcuaWQpXG4gIH1cblxuICBjb25zdCBteVRhZ3M6IHN0cmluZ1tdID0gT2JqZWN0LmtleXMobXlUYWdEcmF3aW5nU2V0cylcblxuICBmdW5jdGlvbiBhZGRNeVRhZ1RvRHJhd2luZyh0YWc6IHN0cmluZywgZHJhd2luZzogRHJhd2luZyk6IHZvaWQge1xuICAgIGNvbnN0IHdvcmtpbmdDb3B5OiBUYWdEcmF3aW5nU2V0cyA9IGR1cGxpY2F0ZVRhZ0RyYXdpbmdTZXRzKG15VGFnRHJhd2luZ1NldHMpXG4gICAgY29uc3QgZHJhd2luZ3M6IERyYXdpbmdbXSA9IHdvcmtpbmdDb3B5W3RhZ10gPz8gW11cbiAgICBpZiAoIWRyYXdpbmdzLnNvbWUobyA9PiBvLmlkID09PSBkcmF3aW5nLmlkKSkge1xuICAgICAgZHJhd2luZ3MucHVzaChkcmF3aW5nKVxuICAgICAgd29ya2luZ0NvcHlbdGFnXSA9IGRyYXdpbmdzXG4gICAgICBzYXZlTXlUYWdEcmF3aW5nU2V0cyh3b3JraW5nQ29weSlcbiAgICAgIHNldE15VGFnRHJhd2luZ1NldHMod29ya2luZ0NvcHkpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlTXlUYWdGcm9tRHJhd2luZyh0YWc6IHN0cmluZywgZHJhd2luZzogRHJhd2luZyk6IHZvaWQge1xuICAgIGNvbnN0IHdvcmtpbmdDb3B5OiBUYWdEcmF3aW5nU2V0cyA9IGR1cGxpY2F0ZVRhZ0RyYXdpbmdTZXRzKG15VGFnRHJhd2luZ1NldHMpXG4gICAgY29uc3QgZHJhd2luZ3M6IERyYXdpbmdbXSB8IHVuZGVmaW5lZCA9IHdvcmtpbmdDb3B5W3RhZ11cbiAgICBpZiAoIWRyYXdpbmdzKSByZXR1cm5cbiAgICB3b3JraW5nQ29weVt0YWddID0gZHJhd2luZ3MuZmlsdGVyKG8gPT4gby5pZCAhPT0gZHJhd2luZy5pZClcbiAgICBpZiAoIXdvcmtpbmdDb3B5W3RhZ10ubGVuZ3RoKSBkZWxldGUgd29ya2luZ0NvcHlbdGFnXVxuICAgIHNhdmVNeVRhZ0RyYXdpbmdTZXRzKHdvcmtpbmdDb3B5KVxuICAgIHNldE15VGFnRHJhd2luZ1NldHMod29ya2luZ0NvcHkpXG4gIH1cblxuICBmdW5jdGlvbiBnZXRNeVRhZ3NGb3JEcmF3aW5nKGRyYXdpbmc6IERyYXdpbmcpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIG15VGFncy5maWx0ZXIodGFnID0+IGRyYXdpbmdIYXNNeVRhZyhkcmF3aW5nLCB0YWcpKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBteVRhZ0RyYXdpbmdTZXRzLFxuICAgIHNhdmVNeVRhZ0RyYXdpbmdTZXRzLFxuICAgIG15VGFncyxcbiAgICBkcmF3aW5nSGFzTXlUYWcsXG4gICAgYWRkTXlUYWdUb0RyYXdpbmcsXG4gICAgcmVtb3ZlTXlUYWdGcm9tRHJhd2luZyxcbiAgICBnZXRNeVRhZ3NGb3JEcmF3aW5nLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBNeVRhZ3NDb250YWluZXIgPSBjcmVhdGVDb250YWluZXIodXNlTXlUYWdzKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./containers/MyTags.ts\n");

/***/ })

})