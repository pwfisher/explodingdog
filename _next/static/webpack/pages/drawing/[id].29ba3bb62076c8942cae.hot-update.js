webpackHotUpdate_N_E("pages/drawing/[id]",{

/***/ "./containers/MyTags.ts":
/*!******************************!*\
  !*** ./containers/MyTags.ts ***!
  \******************************/
/*! exports provided: useMyTags, MyTagsContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useMyTags\", function() { return useMyTags; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MyTagsContainer\", function() { return MyTagsContainer; });\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unstated-next */ \"./node_modules/unstated-next/dist/unstated-next.mjs\");\n/* harmony import */ var _lib_hashtags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/hashtags */ \"./lib/hashtags.ts\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction useMyTags(initialState) {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(initialState !== null && initialState !== void 0 ? initialState : {}),\n      _React$useState2 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      myTagDrawingSets = _React$useState2[0],\n      setMyTagDrawingSets = _React$useState2[1];\n\n  console.log('useMyTags', myTagDrawingSets); // const saveMyTagDrawingSets = React.useCallback((tagDrawingSets: TagDrawingSets): void => {\n  //   console.log('saveMyTagDrawingSets')\n  //   localStorage.setItem('tagDrawingSets', JSON.stringify(tagDrawingSets))\n  //   setMyTagDrawingSets(tagDrawingSets)\n  // }, [setMyTagDrawingSets])\n  // const drawingHasMyTag = React.useCallback((drawing: Drawing, tag: string): boolean => {\n  //   const drawings: Drawing[] = myTagDrawingSets[tag] ?? []\n  //   return drawings.some(o => o.id === drawing.id)\n  // }, [myTagDrawingSets])\n  // const myTags: string[] = React.useMemo(() => Object.keys(myTagDrawingSets), [myTagDrawingSets])\n  // const addMyTagToDrawing = React.useCallback((tag: string, drawing: Drawing): void => {\n  //   const workingCopy: TagDrawingSets = duplicateTagDrawingSets(myTagDrawingSets)\n  //   const drawings: Drawing[] = workingCopy[tag] ?? []\n  //   if (!drawings.some(o => o.id === drawing.id)) {\n  //     drawings.push(drawing)\n  //     workingCopy[tag] = drawings\n  //     saveMyTagDrawingSets(workingCopy)\n  //     setMyTagDrawingSets(workingCopy)\n  //   }\n  // }, [myTagDrawingSets, setMyTagDrawingSets])\n  // const removeMyTagFromDrawing = React.useCallback((tag: string, drawing: Drawing): void => {\n  //   const workingCopy: TagDrawingSets = duplicateTagDrawingSets(myTagDrawingSets)\n  //   const drawings: Drawing[] | undefined = workingCopy[tag]\n  //   if (!drawings) return\n  //   workingCopy[tag] = drawings.filter(o => o.id !== drawing.id)\n  //   if (!workingCopy[tag].length) delete workingCopy[tag]\n  //   saveMyTagDrawingSets(workingCopy)\n  //   setMyTagDrawingSets(workingCopy)\n  // }, [myTagDrawingSets, setMyTagDrawingSets])\n  // const getMyTagsForDrawing = React.useCallback((drawing: Drawing): string[] => {\n  //   return myTags.filter(tag => drawingHasMyTag(drawing, tag))\n  // }, [myTags, drawingHasMyTag])\n\n  function saveMyTagDrawingSets(tagDrawingSets) {\n    localStorage.setItem('tagDrawingSets', JSON.stringify(tagDrawingSets));\n    setMyTagDrawingSets(tagDrawingSets);\n  }\n\n  function drawingHasMyTag(drawing, tag) {\n    var _myTagDrawingSets$tag;\n\n    var drawings = (_myTagDrawingSets$tag = myTagDrawingSets[tag]) !== null && _myTagDrawingSets$tag !== void 0 ? _myTagDrawingSets$tag : [];\n    return drawings.some(function (o) {\n      return o.id === drawing.id;\n    });\n  }\n\n  var myTags = Object.keys(myTagDrawingSets);\n\n  function addMyTagToDrawing(tag, drawing) {\n    var _workingCopy$tag;\n\n    var workingCopy = Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_3__[\"duplicateTagDrawingSets\"])(myTagDrawingSets);\n    var drawings = (_workingCopy$tag = workingCopy[tag]) !== null && _workingCopy$tag !== void 0 ? _workingCopy$tag : [];\n\n    if (!drawings.some(function (o) {\n      return o.id === drawing.id;\n    })) {\n      drawings.push(drawing);\n      workingCopy[tag] = drawings;\n      saveMyTagDrawingSets(workingCopy);\n      setMyTagDrawingSets(workingCopy);\n    }\n  }\n\n  function removeMyTagFromDrawing(tag, drawing) {\n    var workingCopy = Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_3__[\"duplicateTagDrawingSets\"])(myTagDrawingSets);\n    var drawings = workingCopy[tag];\n    if (!drawings) return;\n    workingCopy[tag] = drawings.filter(function (o) {\n      return o.id !== drawing.id;\n    });\n    if (!workingCopy[tag].length) delete workingCopy[tag];\n    saveMyTagDrawingSets(workingCopy);\n    setMyTagDrawingSets(workingCopy);\n  }\n\n  function getMyTagsForDrawing(drawing) {\n    return myTags.filter(function (tag) {\n      return drawingHasMyTag(drawing, tag);\n    });\n  }\n\n  return {\n    myTagDrawingSets: myTagDrawingSets,\n    saveMyTagDrawingSets: saveMyTagDrawingSets,\n    myTags: myTags,\n    drawingHasMyTag: drawingHasMyTag,\n    addMyTagToDrawing: addMyTagToDrawing,\n    removeMyTagFromDrawing: removeMyTagFromDrawing,\n    getMyTagsForDrawing: getMyTagsForDrawing\n  };\n}\n\n_s(useMyTags, \"vO5RsjNHP9yYkosU3Fpcp1IOwXk=\");\n\nvar MyTagsContainer = Object(unstated_next__WEBPACK_IMPORTED_MODULE_2__[\"createContainer\"])(useMyTags);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9NeVRhZ3MudHM/MDNlMSJdLCJuYW1lcyI6WyJ1c2VNeVRhZ3MiLCJpbml0aWFsU3RhdGUiLCJSZWFjdCIsInVzZVN0YXRlIiwibXlUYWdEcmF3aW5nU2V0cyIsInNldE15VGFnRHJhd2luZ1NldHMiLCJjb25zb2xlIiwibG9nIiwic2F2ZU15VGFnRHJhd2luZ1NldHMiLCJ0YWdEcmF3aW5nU2V0cyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZHJhd2luZ0hhc015VGFnIiwiZHJhd2luZyIsInRhZyIsImRyYXdpbmdzIiwic29tZSIsIm8iLCJpZCIsIm15VGFncyIsIk9iamVjdCIsImtleXMiLCJhZGRNeVRhZ1RvRHJhd2luZyIsIndvcmtpbmdDb3B5IiwiZHVwbGljYXRlVGFnRHJhd2luZ1NldHMiLCJwdXNoIiwicmVtb3ZlTXlUYWdGcm9tRHJhd2luZyIsImZpbHRlciIsImxlbmd0aCIsImdldE15VGFnc0ZvckRyYXdpbmciLCJNeVRhZ3NDb250YWluZXIiLCJjcmVhdGVDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdPLFNBQVNBLFNBQVQsQ0FBbUJDLFlBQW5CLEVBQWtEO0FBQUE7O0FBQUEsd0JBQ1BDLDRDQUFLLENBQUNDLFFBQU4sQ0FBK0JGLFlBQS9CLGFBQStCQSxZQUEvQixjQUErQkEsWUFBL0IsR0FBK0MsRUFBL0MsQ0FETztBQUFBO0FBQUEsTUFDaERHLGdCQURnRDtBQUFBLE1BQzlCQyxtQkFEOEI7O0FBRXpEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCSCxnQkFBekIsRUFGeUQsQ0FHdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtB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YWdzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3JlYXRlQ29udGFpbmVyIH0gZnJvbSAndW5zdGF0ZWQtbmV4dCdcbmltcG9ydCB7IGR1cGxpY2F0ZVRhZ0RyYXdpbmdTZXRzIH0gZnJvbSAnLi4vbGliL2hhc2h0YWdzJ1xuaW1wb3J0IHsgRHJhd2luZywgVGFnRHJhd2luZ1NldHMgfSBmcm9tICcuLi90eXBlcydcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZU15VGFncyhpbml0aWFsU3RhdGU/OiBUYWdEcmF3aW5nU2V0cykge1xuICBjb25zdCBbbXlUYWdEcmF3aW5nU2V0cywgc2V0TXlUYWdEcmF3aW5nU2V0c10gPSBSZWFjdC51c2VTdGF0ZTxUYWdEcmF3aW5nU2V0cz4oaW5pdGlhbFN0YXRlID8/IHt9KVxuY29uc29sZS5sb2coJ3VzZU15VGFncycsIG15VGFnRHJhd2luZ1NldHMpXG4gIC8vIGNvbnN0IHNhdmVNeVRhZ0RyYXdpbmdTZXRzID0gUmVhY3QudXNlQ2FsbGJhY2soKHRhZ0RyYXdpbmdTZXRzOiBUYWdEcmF3aW5nU2V0cyk6IHZvaWQgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKCdzYXZlTXlUYWdEcmF3aW5nU2V0cycpXG4gIC8vICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RhZ0RyYXdpbmdTZXRzJywgSlNPTi5zdHJpbmdpZnkodGFnRHJhd2luZ1NldHMpKVxuICAvLyAgIHNldE15VGFnRHJhd2luZ1NldHModGFnRHJhd2luZ1NldHMpXG4gIC8vIH0sIFtzZXRNeVRhZ0RyYXdpbmdTZXRzXSlcblxuICAvLyBjb25zdCBkcmF3aW5nSGFzTXlUYWcgPSBSZWFjdC51c2VDYWxsYmFjaygoZHJhd2luZzogRHJhd2luZywgdGFnOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgLy8gICBjb25zdCBkcmF3aW5nczogRHJhd2luZ1tdID0gbXlUYWdEcmF3aW5nU2V0c1t0YWddID8/IFtdXG4gIC8vICAgcmV0dXJuIGRyYXdpbmdzLnNvbWUobyA9PiBvLmlkID09PSBkcmF3aW5nLmlkKVxuICAvLyB9LCBbbXlUYWdEcmF3aW5nU2V0c10pXG5cbiAgLy8gY29uc3QgbXlUYWdzOiBzdHJpbmdbXSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gT2JqZWN0LmtleXMobXlUYWdEcmF3aW5nU2V0cyksIFtteVRhZ0RyYXdpbmdTZXRzXSlcblxuICAvLyBjb25zdCBhZGRNeVRhZ1RvRHJhd2luZyA9IFJlYWN0LnVzZUNhbGxiYWNrKCh0YWc6IHN0cmluZywgZHJhd2luZzogRHJhd2luZyk6IHZvaWQgPT4ge1xuICAvLyAgIGNvbnN0IHdvcmtpbmdDb3B5OiBUYWdEcmF3aW5nU2V0cyA9IGR1cGxpY2F0ZVRhZ0RyYXdpbmdTZXRzKG15VGFnRHJhd2luZ1NldHMpXG4gIC8vICAgY29uc3QgZHJhd2luZ3M6IERyYXdpbmdbXSA9IHdvcmtpbmdDb3B5W3RhZ10gPz8gW11cbiAgLy8gICBpZiAoIWRyYXdpbmdzLnNvbWUobyA9PiBvLmlkID09PSBkcmF3aW5nLmlkKSkge1xuICAvLyAgICAgZHJhd2luZ3MucHVzaChkcmF3aW5nKVxuICAvLyAgICAgd29ya2luZ0NvcHlbdGFnXSA9IGRyYXdpbmdzXG4gIC8vICAgICBzYXZlTXlUYWdEcmF3aW5nU2V0cyh3b3JraW5nQ29weSlcbiAgLy8gICAgIHNldE15VGFnRHJhd2luZ1NldHMod29ya2luZ0NvcHkpXG4gIC8vICAgfVxuICAvLyB9LCBbbXlUYWdEcmF3aW5nU2V0cywgc2V0TXlUYWdEcmF3aW5nU2V0c10pXG5cbiAgLy8gY29uc3QgcmVtb3ZlTXlUYWdGcm9tRHJhd2luZyA9IFJlYWN0LnVzZUNhbGxiYWNrKCh0YWc6IHN0cmluZywgZHJhd2luZzogRHJhd2luZyk6IHZvaWQgPT4ge1xuICAvLyAgIGNvbnN0IHdvcmtpbmdDb3B5OiBUYWdEcmF3aW5nU2V0cyA9IGR1cGxpY2F0ZVRhZ0RyYXdpbmdTZXRzKG15VGFnRHJhd2luZ1NldHMpXG4gIC8vICAgY29uc3QgZHJhd2luZ3M6IERyYXdpbmdbXSB8IHVuZGVmaW5lZCA9IHdvcmtpbmdDb3B5W3RhZ11cbiAgLy8gICBpZiAoIWRyYXdpbmdzKSByZXR1cm5cbiAgLy8gICB3b3JraW5nQ29weVt0YWddID0gZHJhd2luZ3MuZmlsdGVyKG8gPT4gby5pZCAhPT0gZHJhd2luZy5pZClcbiAgLy8gICBpZiAoIXdvcmtpbmdDb3B5W3RhZ10ubGVuZ3RoKSBkZWxldGUgd29ya2luZ0NvcHlbdGFnXVxuICAvLyAgIHNhdmVNeVRhZ0RyYXdpbmdTZXRzKHdvcmtpbmdDb3B5KVxuICAvLyAgIHNldE15VGFnRHJhd2luZ1NldHMod29ya2luZ0NvcHkpXG4gIC8vIH0sIFtteVRhZ0RyYXdpbmdTZXRzLCBzZXRNeVRhZ0RyYXdpbmdTZXRzXSlcblxuICAvLyBjb25zdCBnZXRNeVRhZ3NGb3JEcmF3aW5nID0gUmVhY3QudXNlQ2FsbGJhY2soKGRyYXdpbmc6IERyYXdpbmcpOiBzdHJpbmdbXSA9PiB7XG4gIC8vICAgcmV0dXJuIG15VGFncy5maWx0ZXIodGFnID0+IGRyYXdpbmdIYXNNeVRhZyhkcmF3aW5nLCB0YWcpKVxuICAvLyB9LCBbbXlUYWdzLCBkcmF3aW5nSGFzTXlUYWddKVxuXG4gIGZ1bmN0aW9uIHNhdmVNeVRhZ0RyYXdpbmdTZXRzKHRhZ0RyYXdpbmdTZXRzOiBUYWdEcmF3aW5nU2V0cyk6IHZvaWQge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YWdEcmF3aW5nU2V0cycsIEpTT04uc3RyaW5naWZ5KHRhZ0RyYXdpbmdTZXRzKSlcbiAgICBzZXRNeVRhZ0RyYXdpbmdTZXRzKHRhZ0RyYXdpbmdTZXRzKVxuICB9XG5cbiAgZnVuY3Rpb24gZHJhd2luZ0hhc015VGFnKGRyYXdpbmc6IERyYXdpbmcsIHRhZzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZHJhd2luZ3M6IERyYXdpbmdbXSA9IG15VGFnRHJhd2luZ1NldHNbdGFnXSA/PyBbXVxuICAgIHJldHVybiBkcmF3aW5ncy5zb21lKG8gPT4gby5pZCA9PT0gZHJhd2luZy5pZClcbiAgfVxuXG4gIGNvbnN0IG15VGFnczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyhteVRhZ0RyYXdpbmdTZXRzKVxuXG4gIGZ1bmN0aW9uIGFkZE15VGFnVG9EcmF3aW5nKHRhZzogc3RyaW5nLCBkcmF3aW5nOiBEcmF3aW5nKTogdm9pZCB7XG4gICAgY29uc3Qgd29ya2luZ0NvcHk6IFRhZ0RyYXdpbmdTZXRzID0gZHVwbGljYXRlVGFnRHJhd2luZ1NldHMobXlUYWdEcmF3aW5nU2V0cylcbiAgICBjb25zdCBkcmF3aW5nczogRHJhd2luZ1tdID0gd29ya2luZ0NvcHlbdGFnXSA/PyBbXVxuICAgIGlmICghZHJhd2luZ3Muc29tZShvID0+IG8uaWQgPT09IGRyYXdpbmcuaWQpKSB7XG4gICAgICBkcmF3aW5ncy5wdXNoKGRyYXdpbmcpXG4gICAgICB3b3JraW5nQ29weVt0YWddID0gZHJhd2luZ3NcbiAgICAgIHNhdmVNeVRhZ0RyYXdpbmdTZXRzKHdvcmtpbmdDb3B5KVxuICAgICAgc2V0TXlUYWdEcmF3aW5nU2V0cyh3b3JraW5nQ29weSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVNeVRhZ0Zyb21EcmF3aW5nKHRhZzogc3RyaW5nLCBkcmF3aW5nOiBEcmF3aW5nKTogdm9pZCB7XG4gICAgY29uc3Qgd29ya2luZ0NvcHk6IFRhZ0RyYXdpbmdTZXRzID0gZHVwbGljYXRlVGFnRHJhd2luZ1NldHMobXlUYWdEcmF3aW5nU2V0cylcbiAgICBjb25zdCBkcmF3aW5nczogRHJhd2luZ1tdIHwgdW5kZWZpbmVkID0gd29ya2luZ0NvcHlbdGFnXVxuICAgIGlmICghZHJhd2luZ3MpIHJldHVyblxuICAgIHdvcmtpbmdDb3B5W3RhZ10gPSBkcmF3aW5ncy5maWx0ZXIobyA9PiBvLmlkICE9PSBkcmF3aW5nLmlkKVxuICAgIGlmICghd29ya2luZ0NvcHlbdGFnXS5sZW5ndGgpIGRlbGV0ZSB3b3JraW5nQ29weVt0YWddXG4gICAgc2F2ZU15VGFnRHJhd2luZ1NldHMod29ya2luZ0NvcHkpXG4gICAgc2V0TXlUYWdEcmF3aW5nU2V0cyh3b3JraW5nQ29weSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE15VGFnc0ZvckRyYXdpbmcoZHJhd2luZzogRHJhd2luZyk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gbXlUYWdzLmZpbHRlcih0YWcgPT4gZHJhd2luZ0hhc015VGFnKGRyYXdpbmcsIHRhZykpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG15VGFnRHJhd2luZ1NldHMsXG4gICAgc2F2ZU15VGFnRHJhd2luZ1NldHMsXG4gICAgbXlUYWdzLFxuICAgIGRyYXdpbmdIYXNNeVRhZyxcbiAgICBhZGRNeVRhZ1RvRHJhd2luZyxcbiAgICByZW1vdmVNeVRhZ0Zyb21EcmF3aW5nLFxuICAgIGdldE15VGFnc0ZvckRyYXdpbmcsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE15VGFnc0NvbnRhaW5lciA9IGNyZWF0ZUNvbnRhaW5lcih1c2VNeVRhZ3MpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./containers/MyTags.ts\n");

/***/ })

})