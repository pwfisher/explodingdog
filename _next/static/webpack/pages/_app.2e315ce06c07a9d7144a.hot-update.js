webpackHotUpdate_N_E("pages/_app",{

/***/ "./containers/MyTags.ts":
/*!******************************!*\
  !*** ./containers/MyTags.ts ***!
  \******************************/
/*! exports provided: useMyTags, MyTagsContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useMyTags\", function() { return useMyTags; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MyTagsContainer\", function() { return MyTagsContainer; });\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unstated-next */ \"./node_modules/unstated-next/dist/unstated-next.mjs\");\n/* harmony import */ var _lib_hashtags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/hashtags */ \"./lib/hashtags.ts\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction useMyTags() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({}),\n      _React$useState2 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      myTagDrawingSets = _React$useState2[0],\n      setMyTagDrawingSets = _React$useState2[1]; // Init client-side from localStorage\n\n\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    return setMyTagDrawingSets(Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_3__[\"loadMyTagDrawingSets\"])());\n  }, []); // const saveMyTagDrawingSets = React.useCallback((tagDrawingSets: TagDrawingSets): void => {\n  //   console.log('saveMyTagDrawingSets')\n  //   localStorage.setItem('tagDrawingSets', JSON.stringify(tagDrawingSets))\n  //   setMyTagDrawingSets(tagDrawingSets)\n  // }, [setMyTagDrawingSets])\n  // const drawingHasMyTag = React.useCallback((drawing: Drawing, tag: string): boolean => {\n  //   const drawings: Drawing[] = myTagDrawingSets[tag] ?? []\n  //   return drawings.some(o => o.id === drawing.id)\n  // }, [myTagDrawingSets])\n  // const myTags: string[] = React.useMemo(() => Object.keys(myTagDrawingSets), [myTagDrawingSets])\n  // const addMyTagToDrawing = React.useCallback((tag: string, drawing: Drawing): void => {\n  //   const workingCopy: TagDrawingSets = duplicateTagDrawingSets(myTagDrawingSets)\n  //   const drawings: Drawing[] = workingCopy[tag] ?? []\n  //   if (!drawings.some(o => o.id === drawing.id)) {\n  //     drawings.push(drawing)\n  //     workingCopy[tag] = drawings\n  //     saveMyTagDrawingSets(workingCopy)\n  //     setMyTagDrawingSets(workingCopy)\n  //   }\n  // }, [myTagDrawingSets, setMyTagDrawingSets])\n  // const removeMyTagFromDrawing = React.useCallback((tag: string, drawing: Drawing): void => {\n  //   const workingCopy: TagDrawingSets = duplicateTagDrawingSets(myTagDrawingSets)\n  //   const drawings: Drawing[] | undefined = workingCopy[tag]\n  //   if (!drawings) return\n  //   workingCopy[tag] = drawings.filter(o => o.id !== drawing.id)\n  //   if (!workingCopy[tag].length) delete workingCopy[tag]\n  //   saveMyTagDrawingSets(workingCopy)\n  //   setMyTagDrawingSets(workingCopy)\n  // }, [myTagDrawingSets, setMyTagDrawingSets])\n  // const getMyTagsForDrawing = React.useCallback((drawing: Drawing): string[] => {\n  //   return myTags.filter(tag => drawingHasMyTag(drawing, tag))\n  // }, [myTags, drawingHasMyTag])\n\n  function saveMyTagDrawingSets(tagDrawingSets) {\n    localStorage.setItem('tagDrawingSets', JSON.stringify(tagDrawingSets));\n    setMyTagDrawingSets(tagDrawingSets);\n  }\n\n  function drawingHasMyTag(drawing, tag) {\n    var _myTagDrawingSets$tag;\n\n    var drawings = (_myTagDrawingSets$tag = myTagDrawingSets[tag]) !== null && _myTagDrawingSets$tag !== void 0 ? _myTagDrawingSets$tag : [];\n    return drawings.some(function (o) {\n      return o.id === drawing.id;\n    });\n  }\n\n  var myTags = Object.keys(myTagDrawingSets).sort();\n  console.log('useMyTags myTags', myTags);\n\n  function addMyTagToDrawing(tag, drawing) {\n    var _workingCopy$tag;\n\n    return;\n    var workingCopy = Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_3__[\"duplicateTagDrawingSets\"])(myTagDrawingSets);\n    var drawings = (_workingCopy$tag = workingCopy[tag]) !== null && _workingCopy$tag !== void 0 ? _workingCopy$tag : [];\n\n    if (!drawings.some(function (o) {\n      return o.id === drawing.id;\n    })) {\n      drawings.push(drawing);\n      workingCopy[tag] = drawings;\n      saveMyTagDrawingSets(workingCopy);\n      setMyTagDrawingSets(workingCopy);\n    }\n  }\n\n  function removeMyTagFromDrawing(tag, drawing) {\n    return;\n    var workingCopy = Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_3__[\"duplicateTagDrawingSets\"])(myTagDrawingSets);\n    var drawings = workingCopy[tag];\n    if (!drawings) return;\n    workingCopy[tag] = drawings.filter(function (o) {\n      return o.id !== drawing.id;\n    });\n    if (!workingCopy[tag].length) delete workingCopy[tag];\n    saveMyTagDrawingSets(workingCopy);\n    setMyTagDrawingSets(workingCopy);\n  }\n\n  function getMyTagsForDrawing(drawing) {\n    console.log('getMyTagsForDrawing myTags', myTags);\n    return ['foo'];\n    return myTags.filter(function (tag) {\n      return drawingHasMyTag(drawing, tag);\n    });\n  }\n\n  return {\n    myTagDrawingSets: myTagDrawingSets,\n    saveMyTagDrawingSets: saveMyTagDrawingSets,\n    myTags: myTags,\n    drawingHasMyTag: drawingHasMyTag,\n    addMyTagToDrawing: addMyTagToDrawing,\n    removeMyTagFromDrawing: removeMyTagFromDrawing,\n    getMyTagsForDrawing: getMyTagsForDrawing\n  };\n}\n\n_s(useMyTags, \"3NL2f4QAHPalRJdQ6xtkDTfkz/8=\");\n\nvar MyTagsContainer = Object(unstated_next__WEBPACK_IMPORTED_MODULE_2__[\"createContainer\"])(useMyTags);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9NeVRhZ3MudHM/MDNlMSJdLCJuYW1lcyI6WyJ1c2VNeVRhZ3MiLCJSZWFjdCIsInVzZVN0YXRlIiwibXlUYWdEcmF3aW5nU2V0cyIsInNldE15VGFnRHJhd2luZ1NldHMiLCJ1c2VFZmZlY3QiLCJsb2FkTXlUYWdEcmF3aW5nU2V0cyIsInNhdmVNeVRhZ0RyYXdpbmdTZXRzIiwidGFnRHJhd2luZ1NldHMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImRyYXdpbmdIYXNNeVRhZyIsImRyYXdpbmciLCJ0YWciLCJkcmF3aW5ncyIsInNvbWUiLCJvIiwiaWQiLCJteVRhZ3MiLCJPYmplY3QiLCJrZXlzIiwic29ydCIsImNvbnNvbGUiLCJsb2ciLCJhZGRNeVRhZ1RvRHJhd2luZyIsIndvcmtpbmdDb3B5IiwiZHVwbGljYXRlVGFnRHJhd2luZ1NldHMiLCJwdXNoIiwicmVtb3ZlTXlUYWdGcm9tRHJhd2luZyIsImZpbHRlciIsImxlbmd0aCIsImdldE15VGFnc0ZvckRyYXdpbmciLCJNeVRhZ3NDb250YWluZXIiLCJjcmVhdGVDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdPLFNBQVNBLFNBQVQsR0FBcUI7QUFBQTs7QUFBQSx3QkFDc0JDLDRDQUFLLENBQUNDLFFBQU4sQ0FBK0IsRUFBL0IsQ0FEdEI7QUFBQTtBQUFBLE1BQ25CQyxnQkFEbUI7QUFBQSxNQUNEQyxtQkFEQyx3QkFHMUI7OztBQUNBSCw4Q0FBSyxDQUFDSSxTQUFOLENBQWdCO0FBQUEsV0FBTUQsbUJBQW1CLENBQUNFLDBFQUFvQixFQUFyQixDQUF6QjtBQUFBLEdBQWhCLEVBQW1FLEVBQW5FLEVBSjBCLENBTTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBS0xhLHFCQUFpQixFQUFqQkEsaUJBTEs7QUFNTEksMEJBQXNCLEVBQXRCQSxzQkFOSztBQU9MRyx1QkFBbUIsRUFBbkJBO0FBUEssR0FBUDtBQVNEOztHQS9GZWpDLFM7O0FBaUdULElBQU1rQyxlQUFlLEdBQUdDLHFFQUFlLENBQUNuQyxTQUFELENBQXZDIiwiZmlsZSI6Ii4vY29udGFpbmVycy9NeVRhZ3MudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjcmVhdGVDb250YWluZXIgfSBmcm9tICd1bnN0YXRlZC1uZXh0J1xuaW1wb3J0IHsgZHVwbGljYXRlVGFnRHJhd2luZ1NldHMsIGxvYWRNeVRhZ0RyYXdpbmdTZXRzIH0gZnJvbSAnLi4vbGliL2hhc2h0YWdzJ1xuaW1wb3J0IHsgRHJhd2luZywgVGFnRHJhd2luZ1NldHMgfSBmcm9tICcuLi90eXBlcydcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZU15VGFncygpIHtcbiAgY29uc3QgW215VGFnRHJhd2luZ1NldHMsIHNldE15VGFnRHJhd2luZ1NldHNdID0gUmVhY3QudXNlU3RhdGU8VGFnRHJhd2luZ1NldHM+KHt9KVxuXG4gIC8vIEluaXQgY2xpZW50LXNpZGUgZnJvbSBsb2NhbFN0b3JhZ2VcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHNldE15VGFnRHJhd2luZ1NldHMobG9hZE15VGFnRHJhd2luZ1NldHMoKSksIFtdKVxuXG4gIC8vIGNvbnN0IHNhdmVNeVRhZ0RyYXdpbmdTZXRzID0gUmVhY3QudXNlQ2FsbGJhY2soKHRhZ0RyYXdpbmdTZXRzOiBUYWdEcmF3aW5nU2V0cyk6IHZvaWQgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKCdzYXZlTXlUYWdEcmF3aW5nU2V0cycpXG4gIC8vICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RhZ0RyYXdpbmdTZXRzJywgSlNPTi5zdHJpbmdpZnkodGFnRHJhd2luZ1NldHMpKVxuICAvLyAgIHNldE15VGFnRHJhd2luZ1NldHModGFnRHJhd2luZ1NldHMpXG4gIC8vIH0sIFtzZXRNeVRhZ0RyYXdpbmdTZXRzXSlcblxuICAvLyBjb25zdCBkcmF3aW5nSGFzTXlUYWcgPSBSZWFjdC51c2VDYWxsYmFjaygoZHJhd2luZzogRHJhd2luZywgdGFnOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgLy8gICBjb25zdCBkcmF3aW5nczogRHJhd2luZ1tdID0gbXlUYWdEcmF3aW5nU2V0c1t0YWddID8/IFtdXG4gIC8vICAgcmV0dXJuIGRyYXdpbmdzLnNvbWUobyA9PiBvLmlkID09PSBkcmF3aW5nLmlkKVxuICAvLyB9LCBbbXlUYWdEcmF3aW5nU2V0c10pXG5cbiAgLy8gY29uc3QgbXlUYWdzOiBzdHJpbmdbXSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gT2JqZWN0LmtleXMobXlUYWdEcmF3aW5nU2V0cyksIFtteVRhZ0RyYXdpbmdTZXRzXSlcblxuICAvLyBjb25zdCBhZGRNeVRhZ1RvRHJhd2luZyA9IFJlYWN0LnVzZUNhbGxiYWNrKCh0YWc6IHN0cmluZywgZHJhd2luZzogRHJhd2luZyk6IHZvaWQgPT4ge1xuICAvLyAgIGNvbnN0IHdvcmtpbmdDb3B5OiBUYWdEcmF3aW5nU2V0cyA9IGR1cGxpY2F0ZVRhZ0RyYXdpbmdTZXRzKG15VGFnRHJhd2luZ1NldHMpXG4gIC8vICAgY29uc3QgZHJhd2luZ3M6IERyYXdpbmdbXSA9IHdvcmtpbmdDb3B5W3RhZ10gPz8gW11cbiAgLy8gICBpZiAoIWRyYXdpbmdzLnNvbWUobyA9PiBvLmlkID09PSBkcmF3aW5nLmlkKSkge1xuICAvLyAgICAgZHJhd2luZ3MucHVzaChkcmF3aW5nKVxuICAvLyAgICAgd29ya2luZ0NvcHlbdGFnXSA9IGRyYXdpbmdzXG4gIC8vICAgICBzYXZlTXlUYWdEcmF3aW5nU2V0cyh3b3JraW5nQ29weSlcbiAgLy8gICAgIHNldE15VGFnRHJhd2luZ1NldHMod29ya2luZ0NvcHkpXG4gIC8vICAgfVxuICAvLyB9LCBbbXlUYWdEcmF3aW5nU2V0cywgc2V0TXlUYWdEcmF3aW5nU2V0c10pXG5cbiAgLy8gY29uc3QgcmVtb3ZlTXlUYWdGcm9tRHJhd2luZyA9IFJlYWN0LnVzZUNhbGxiYWNrKCh0YWc6IHN0cmluZywgZHJhd2luZzogRHJhd2luZyk6IHZvaWQgPT4ge1xuICAvLyAgIGNvbnN0IHdvcmtpbmdDb3B5OiBUYWdEcmF3aW5nU2V0cyA9IGR1cGxpY2F0ZVRhZ0RyYXdpbmdTZXRzKG15VGFnRHJhd2luZ1NldHMpXG4gIC8vICAgY29uc3QgZHJhd2luZ3M6IERyYXdpbmdbXSB8IHVuZGVmaW5lZCA9IHdvcmtpbmdDb3B5W3RhZ11cbiAgLy8gICBpZiAoIWRyYXdpbmdzKSByZXR1cm5cbiAgLy8gICB3b3JraW5nQ29weVt0YWddID0gZHJhd2luZ3MuZmlsdGVyKG8gPT4gby5pZCAhPT0gZHJhd2luZy5pZClcbiAgLy8gICBpZiAoIXdvcmtpbmdDb3B5W3RhZ10ubGVuZ3RoKSBkZWxldGUgd29ya2luZ0NvcHlbdGFnXVxuICAvLyAgIHNhdmVNeVRhZ0RyYXdpbmdTZXRzKHdvcmtpbmdDb3B5KVxuICAvLyAgIHNldE15VGFnRHJhd2luZ1NldHMod29ya2luZ0NvcHkpXG4gIC8vIH0sIFtteVRhZ0RyYXdpbmdTZXRzLCBzZXRNeVRhZ0RyYXdpbmdTZXRzXSlcblxuICAvLyBjb25zdCBnZXRNeVRhZ3NGb3JEcmF3aW5nID0gUmVhY3QudXNlQ2FsbGJhY2soKGRyYXdpbmc6IERyYXdpbmcpOiBzdHJpbmdbXSA9PiB7XG4gIC8vICAgcmV0dXJuIG15VGFncy5maWx0ZXIodGFnID0+IGRyYXdpbmdIYXNNeVRhZyhkcmF3aW5nLCB0YWcpKVxuICAvLyB9LCBbbXlUYWdzLCBkcmF3aW5nSGFzTXlUYWddKVxuXG4gIGZ1bmN0aW9uIHNhdmVNeVRhZ0RyYXdpbmdTZXRzKHRhZ0RyYXdpbmdTZXRzOiBUYWdEcmF3aW5nU2V0cyk6IHZvaWQge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YWdEcmF3aW5nU2V0cycsIEpTT04uc3RyaW5naWZ5KHRhZ0RyYXdpbmdTZXRzKSlcbiAgICBzZXRNeVRhZ0RyYXdpbmdTZXRzKHRhZ0RyYXdpbmdTZXRzKVxuICB9XG5cbiAgZnVuY3Rpb24gZHJhd2luZ0hhc015VGFnKGRyYXdpbmc6IERyYXdpbmcsIHRhZzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZHJhd2luZ3M6IERyYXdpbmdbXSA9IG15VGFnRHJhd2luZ1NldHNbdGFnXSA/PyBbXVxuICAgIHJldHVybiBkcmF3aW5ncy5zb21lKG8gPT4gby5pZCA9PT0gZHJhd2luZy5pZClcbiAgfVxuXG4gIGNvbnN0IG15VGFnczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyhteVRhZ0RyYXdpbmdTZXRzKS5zb3J0KClcbmNvbnNvbGUubG9nKCd1c2VNeVRhZ3MgbXlUYWdzJywgbXlUYWdzKVxuXG4gIGZ1bmN0aW9uIGFkZE15VGFnVG9EcmF3aW5nKHRhZzogc3RyaW5nLCBkcmF3aW5nOiBEcmF3aW5nKTogdm9pZCB7XG4gICAgcmV0dXJuXG4gICAgY29uc3Qgd29ya2luZ0NvcHk6IFRhZ0RyYXdpbmdTZXRzID0gZHVwbGljYXRlVGFnRHJhd2luZ1NldHMobXlUYWdEcmF3aW5nU2V0cylcbiAgICBjb25zdCBkcmF3aW5nczogRHJhd2luZ1tdID0gd29ya2luZ0NvcHlbdGFnXSA/PyBbXVxuICAgIGlmICghZHJhd2luZ3Muc29tZShvID0+IG8uaWQgPT09IGRyYXdpbmcuaWQpKSB7XG4gICAgICBkcmF3aW5ncy5wdXNoKGRyYXdpbmcpXG4gICAgICB3b3JraW5nQ29weVt0YWddID0gZHJhd2luZ3NcbiAgICAgIHNhdmVNeVRhZ0RyYXdpbmdTZXRzKHdvcmtpbmdDb3B5KVxuICAgICAgc2V0TXlUYWdEcmF3aW5nU2V0cyh3b3JraW5nQ29weSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVNeVRhZ0Zyb21EcmF3aW5nKHRhZzogc3RyaW5nLCBkcmF3aW5nOiBEcmF3aW5nKTogdm9pZCB7XG4gICAgcmV0dXJuXG4gICAgY29uc3Qgd29ya2luZ0NvcHk6IFRhZ0RyYXdpbmdTZXRzID0gZHVwbGljYXRlVGFnRHJhd2luZ1NldHMobXlUYWdEcmF3aW5nU2V0cylcbiAgICBjb25zdCBkcmF3aW5nczogRHJhd2luZ1tdIHwgdW5kZWZpbmVkID0gd29ya2luZ0NvcHlbdGFnXVxuICAgIGlmICghZHJhd2luZ3MpIHJldHVyblxuICAgIHdvcmtpbmdDb3B5W3RhZ10gPSBkcmF3aW5ncy5maWx0ZXIobyA9PiBvLmlkICE9PSBkcmF3aW5nLmlkKVxuICAgIGlmICghd29ya2luZ0NvcHlbdGFnXS5sZW5ndGgpIGRlbGV0ZSB3b3JraW5nQ29weVt0YWddXG4gICAgc2F2ZU15VGFnRHJhd2luZ1NldHMod29ya2luZ0NvcHkpXG4gICAgc2V0TXlUYWdEcmF3aW5nU2V0cyh3b3JraW5nQ29weSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE15VGFnc0ZvckRyYXdpbmcoZHJhd2luZzogRHJhd2luZyk6IHN0cmluZ1tdIHtcbiAgICBjb25zb2xlLmxvZygnZ2V0TXlUYWdzRm9yRHJhd2luZyBteVRhZ3MnLCBteVRhZ3MpXG4gICAgcmV0dXJuIFsnZm9vJ11cbiAgICByZXR1cm4gbXlUYWdzLmZpbHRlcih0YWcgPT4gZHJhd2luZ0hhc015VGFnKGRyYXdpbmcsIHRhZykpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG15VGFnRHJhd2luZ1NldHMsXG4gICAgc2F2ZU15VGFnRHJhd2luZ1NldHMsXG4gICAgbXlUYWdzLFxuICAgIGRyYXdpbmdIYXNNeVRhZyxcbiAgICBhZGRNeVRhZ1RvRHJhd2luZyxcbiAgICByZW1vdmVNeVRhZ0Zyb21EcmF3aW5nLFxuICAgIGdldE15VGFnc0ZvckRyYXdpbmcsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE15VGFnc0NvbnRhaW5lciA9IGNyZWF0ZUNvbnRhaW5lcih1c2VNeVRhZ3MpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./containers/MyTags.ts\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AppFlags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppFlags */ \"./components/AppFlags.tsx\");\n/* harmony import */ var _components_AppStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppStyle */ \"./components/AppStyle.ts\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _containers_MyTags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../containers/MyTags */ \"./containers/MyTags.ts\");\n\nvar _jsxFileName = \"/Users/pfisher/Code/pwfisher/explodingdog/explorer/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nreact_modal__WEBPACK_IMPORTED_MODULE_5___default.a.setAppElement('#__next');\nfunction App(_ref) {\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  return __jsx(react_cookie__WEBPACK_IMPORTED_MODULE_4__[\"CookiesProvider\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(_containers_MyTags__WEBPACK_IMPORTED_MODULE_6__[\"MyTagsContainer\"].Provider, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, __jsx(_components_AppFlags__WEBPACK_IMPORTED_MODULE_2__[\"AppFlags\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }), __jsx(_components_AppStyle__WEBPACK_IMPORTED_MODULE_3__[\"AppStyle\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }), __jsx(Component, Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }))));\n}\n_c = App;\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIk1vZGFsIiwic2V0QXBwRWxlbWVudCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxrREFBSyxDQUFDQyxhQUFOLENBQW9CLFNBQXBCO0FBRWUsU0FBU0MsR0FBVCxPQUF1QztBQUFBLE1BQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFDcEQsU0FDRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtFQUFELENBQWlCLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQyxTQUFELHdKQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FIRixDQURGLENBREY7QUFTRDtLQVZ1QkYsRyIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBGbGFncyB9IGZyb20gJy4uL2NvbXBvbmVudHMvQXBwRmxhZ3MnXG5pbXBvcnQgeyBBcHBTdHlsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvQXBwU3R5bGUnXG5pbXBvcnQgeyBDb29raWVzUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1jb29raWUnXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnXG5pbXBvcnQgeyBNeVRhZ3NDb250YWluZXIgfSBmcm9tICcuLi9jb250YWluZXJzL015VGFncydcblxuTW9kYWwuc2V0QXBwRWxlbWVudCgnI19fbmV4dCcpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Q29va2llc1Byb3ZpZGVyPlxuICAgICAgPE15VGFnc0NvbnRhaW5lci5Qcm92aWRlcj5cbiAgICAgICAgPEFwcEZsYWdzIC8+XG4gICAgICAgIDxBcHBTdHlsZSAvPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L015VGFnc0NvbnRhaW5lci5Qcm92aWRlcj5cbiAgICA8L0Nvb2tpZXNQcm92aWRlcj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})