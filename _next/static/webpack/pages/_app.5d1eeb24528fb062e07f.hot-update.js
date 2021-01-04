webpackHotUpdate_N_E("pages/_app",{

/***/ "./containers/MyTags.ts":
/*!******************************!*\
  !*** ./containers/MyTags.ts ***!
  \******************************/
/*! exports provided: useMyTags, MyTagsContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useMyTags\", function() { return useMyTags; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MyTagsContainer\", function() { return MyTagsContainer; });\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unstated-next */ \"./node_modules/unstated-next/dist/unstated-next.mjs\");\n/* harmony import */ var _lib_hashtags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/hashtags */ \"./lib/hashtags.ts\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction useMyTags() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({}),\n      _React$useState2 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      myTagDrawingSets = _React$useState2[0],\n      setMyTagDrawingSets = _React$useState2[1]; // Init client-side from localStorage\n\n\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    return setMyTagDrawingSets(Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_3__[\"loadMyTagDrawingSets\"])());\n  }, []); //   const saveMyTagDrawingSets = React.useCallback((tagDrawingSets: TagDrawingSets): void => {\n  //     console.log('saveMyTagDrawingSets')\n  //     localStorage.setItem('tagDrawingSets', JSON.stringify(tagDrawingSets))\n  //     setMyTagDrawingSets(tagDrawingSets)\n  //   }, [setMyTagDrawingSets])\n  //   const drawingHasMyTag = React.useCallback((drawing: Drawing, tag: string): boolean => {\n  //     const drawings: Drawing[] = myTagDrawingSets[tag] ?? []\n  //     return drawings.some(o => o.id === drawing.id)\n  //   }, [myTagDrawingSets])\n  //   const myTags: string[] = React.useMemo(() => Object.keys(myTagDrawingSets), [myTagDrawingSets])\n  // console.log('useMyTags useMemo myTags', myTags)\n  //   const addMyTagToDrawing = React.useCallback((tag: string, drawing: Drawing): void => {\n  //     const workingCopy: TagDrawingSets = duplicateTagDrawingSets(myTagDrawingSets)\n  //     const drawings: Drawing[] = workingCopy[tag] ?? []\n  //     if (!drawings.some(o => o.id === drawing.id)) {\n  //       drawings.push(drawing)\n  //       workingCopy[tag] = drawings\n  //       saveMyTagDrawingSets(workingCopy)\n  //       setMyTagDrawingSets(workingCopy)\n  //     }\n  //   }, [myTagDrawingSets, setMyTagDrawingSets])\n  //   const removeMyTagFromDrawing = React.useCallback((tag: string, drawing: Drawing): void => {\n  //     const workingCopy: TagDrawingSets = duplicateTagDrawingSets(myTagDrawingSets)\n  //     const drawings: Drawing[] | undefined = workingCopy[tag]\n  //     if (!drawings) return\n  //     workingCopy[tag] = drawings.filter(o => o.id !== drawing.id)\n  //     if (!workingCopy[tag].length) delete workingCopy[tag]\n  //     saveMyTagDrawingSets(workingCopy)\n  //     setMyTagDrawingSets(workingCopy)\n  //   }, [myTagDrawingSets, setMyTagDrawingSets])\n  //   const getMyTagsForDrawing = React.useCallback((drawing: Drawing): string[] => {\n  //     return myTags.filter(tag => drawingHasMyTag(drawing, tag))\n  //   }, [myTags, drawingHasMyTag])\n\n  function saveMyTagDrawingSets(tagDrawingSets) {\n    localStorage.setItem('tagDrawingSets', JSON.stringify(tagDrawingSets));\n    setMyTagDrawingSets(tagDrawingSets);\n  }\n\n  function drawingHasMyTag(drawing, tag) {\n    var _myTagDrawingSets$tag;\n\n    var drawings = (_myTagDrawingSets$tag = myTagDrawingSets[tag]) !== null && _myTagDrawingSets$tag !== void 0 ? _myTagDrawingSets$tag : [];\n    return drawings.some(function (o) {\n      return o.id === drawing.id;\n    });\n  }\n\n  var myTags = Object.keys(myTagDrawingSets).sort();\n  console.log('useMyTags myTags', myTags);\n\n  function addMyTagToDrawing(tag, drawing) {\n    var _workingCopy$tag;\n\n    var workingCopy = Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_3__[\"duplicateTagDrawingSets\"])(myTagDrawingSets);\n    var drawings = (_workingCopy$tag = workingCopy[tag]) !== null && _workingCopy$tag !== void 0 ? _workingCopy$tag : [];\n\n    if (!drawings.some(function (o) {\n      return o.id === drawing.id;\n    })) {\n      drawings.push(drawing);\n      workingCopy[tag] = drawings;\n      saveMyTagDrawingSets(workingCopy);\n      setMyTagDrawingSets(workingCopy);\n    }\n  }\n\n  function removeMyTagFromDrawing(tag, drawing) {\n    var workingCopy = Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_3__[\"duplicateTagDrawingSets\"])(myTagDrawingSets);\n    var drawings = workingCopy[tag];\n    if (!drawings) return;\n    workingCopy[tag] = drawings.filter(function (o) {\n      return o.id !== drawing.id;\n    });\n    if (!workingCopy[tag].length) delete workingCopy[tag];\n    saveMyTagDrawingSets(workingCopy);\n    setMyTagDrawingSets(workingCopy);\n  }\n\n  function getMyTagsForDrawing(drawing) {\n    return myTags.filter(function (tag) {\n      return drawingHasMyTag(drawing, tag);\n    });\n  }\n\n  return {\n    myTagDrawingSets: myTagDrawingSets,\n    saveMyTagDrawingSets: saveMyTagDrawingSets,\n    myTags: myTags,\n    drawingHasMyTag: drawingHasMyTag,\n    addMyTagToDrawing: addMyTagToDrawing,\n    removeMyTagFromDrawing: removeMyTagFromDrawing,\n    getMyTagsForDrawing: getMyTagsForDrawing\n  };\n}\n\n_s(useMyTags, \"3NL2f4QAHPalRJdQ6xtkDTfkz/8=\");\n\nvar MyTagsContainer = Object(unstated_next__WEBPACK_IMPORTED_MODULE_2__[\"createContainer\"])(useMyTags);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9NeVRhZ3MudHM/MDNlMSJdLCJuYW1lcyI6WyJ1c2VNeVRhZ3MiLCJSZWFjdCIsInVzZVN0YXRlIiwibXlUYWdEcmF3aW5nU2V0cyIsInNldE15VGFnRHJhd2luZ1NldHMiLCJ1c2VFZmZlY3QiLCJsb2FkTXlUYWdEcmF3aW5nU2V0cyIsInNhdmVNeVRhZ0RyYXdpbmdTZXRzIiwidGFnRHJhd2luZ1NldHMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImRyYXdpbmdIYXNNeVRhZyIsImRyYXdpbmciLCJ0YWciLCJkcmF3aW5ncyIsInNvbWUiLCJvIiwiaWQiLCJteVRhZ3MiLCJPYmplY3QiLCJrZXlzIiwic29ydCIsImNvbnNvbGUiLCJsb2ciLCJhZGRNeVRhZ1RvRHJhd2luZyIsIndvcmtpbmdDb3B5IiwiZHVwbGljYXRlVGFnRHJhd2luZ1NldHMiLCJwdXNoIiwicmVtb3ZlTXlUYWdGcm9tRHJhd2luZyIsImZpbHRlciIsImxlbmd0aCIsImdldE15VGFnc0ZvckRyYXdpbmciLCJNeVRhZ3NDb250YWluZXIiLCJjcmVhdGVDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdPLFNBQVNBLFNBQVQsR0FBcUI7QUFBQTs7QUFBQSx3QkFDc0JDLDRDQUFLLENBQUNDLFFBQU4sQ0FBK0IsRUFBL0IsQ0FEdEI7QUFBQTtBQUFBLE1BQ25CQyxnQkFEbUI7QUFBQSxNQUNEQyxtQkFEQyx3QkFHMUI7OztBQUNBSCw4Q0FBSyxDQUFDSSxTQUFOLENBQWdCO0FBQUEsV0FBTUQsbUJBQW1CLENBQUNFLDBFQUFvQixFQUFyQixDQUF6QjtBQUFBLEdBQWhCLEVBQW1FLEVBQW5FLEVBSjBCLENBTTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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SyxHQUFQO0FBU0Q7O0dBNUZlakMsUzs7QUE4RlQsSUFBTWtDLGVBQWUsR0FBR0MscUVBQWUsQ0FBQ25DLFNBQUQsQ0FBdkMiLCJmaWxlIjoiLi9jb250YWluZXJzL015VGFncy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNyZWF0ZUNvbnRhaW5lciB9IGZyb20gJ3Vuc3RhdGVkLW5leHQnXG5pbXBvcnQgeyBkdXBsaWNhdGVUYWdEcmF3aW5nU2V0cywgbG9hZE15VGFnRHJhd2luZ1NldHMgfSBmcm9tICcuLi9saWIvaGFzaHRhZ3MnXG5pbXBvcnQgeyBEcmF3aW5nLCBUYWdEcmF3aW5nU2V0cyB9IGZyb20gJy4uL3R5cGVzJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlTXlUYWdzKCkge1xuICBjb25zdCBbbXlUYWdEcmF3aW5nU2V0cywgc2V0TXlUYWdEcmF3aW5nU2V0c10gPSBSZWFjdC51c2VTdGF0ZTxUYWdEcmF3aW5nU2V0cz4oe30pXG5cbiAgLy8gSW5pdCBjbGllbnQtc2lkZSBmcm9tIGxvY2FsU3RvcmFnZVxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gc2V0TXlUYWdEcmF3aW5nU2V0cyhsb2FkTXlUYWdEcmF3aW5nU2V0cygpKSwgW10pXG5cbi8vICAgY29uc3Qgc2F2ZU15VGFnRHJhd2luZ1NldHMgPSBSZWFjdC51c2VDYWxsYmFjaygodGFnRHJhd2luZ1NldHM6IFRhZ0RyYXdpbmdTZXRzKTogdm9pZCA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coJ3NhdmVNeVRhZ0RyYXdpbmdTZXRzJylcbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFnRHJhd2luZ1NldHMnLCBKU09OLnN0cmluZ2lmeSh0YWdEcmF3aW5nU2V0cykpXG4vLyAgICAgc2V0TXlUYWdEcmF3aW5nU2V0cyh0YWdEcmF3aW5nU2V0cylcbi8vICAgfSwgW3NldE15VGFnRHJhd2luZ1NldHNdKVxuXG4vLyAgIGNvbnN0IGRyYXdpbmdIYXNNeVRhZyA9IFJlYWN0LnVzZUNhbGxiYWNrKChkcmF3aW5nOiBEcmF3aW5nLCB0YWc6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuLy8gICAgIGNvbnN0IGRyYXdpbmdzOiBEcmF3aW5nW10gPSBteVRhZ0RyYXdpbmdTZXRzW3RhZ10gPz8gW11cbi8vICAgICByZXR1cm4gZHJhd2luZ3Muc29tZShvID0+IG8uaWQgPT09IGRyYXdpbmcuaWQpXG4vLyAgIH0sIFtteVRhZ0RyYXdpbmdTZXRzXSlcblxuLy8gICBjb25zdCBteVRhZ3M6IHN0cmluZ1tdID0gUmVhY3QudXNlTWVtbygoKSA9PiBPYmplY3Qua2V5cyhteVRhZ0RyYXdpbmdTZXRzKSwgW215VGFnRHJhd2luZ1NldHNdKVxuLy8gY29uc29sZS5sb2coJ3VzZU15VGFncyB1c2VNZW1vIG15VGFncycsIG15VGFncylcblxuLy8gICBjb25zdCBhZGRNeVRhZ1RvRHJhd2luZyA9IFJlYWN0LnVzZUNhbGxiYWNrKCh0YWc6IHN0cmluZywgZHJhd2luZzogRHJhd2luZyk6IHZvaWQgPT4ge1xuLy8gICAgIGNvbnN0IHdvcmtpbmdDb3B5OiBUYWdEcmF3aW5nU2V0cyA9IGR1cGxpY2F0ZVRhZ0RyYXdpbmdTZXRzKG15VGFnRHJhd2luZ1NldHMpXG4vLyAgICAgY29uc3QgZHJhd2luZ3M6IERyYXdpbmdbXSA9IHdvcmtpbmdDb3B5W3RhZ10gPz8gW11cbi8vICAgICBpZiAoIWRyYXdpbmdzLnNvbWUobyA9PiBvLmlkID09PSBkcmF3aW5nLmlkKSkge1xuLy8gICAgICAgZHJhd2luZ3MucHVzaChkcmF3aW5nKVxuLy8gICAgICAgd29ya2luZ0NvcHlbdGFnXSA9IGRyYXdpbmdzXG4vLyAgICAgICBzYXZlTXlUYWdEcmF3aW5nU2V0cyh3b3JraW5nQ29weSlcbi8vICAgICAgIHNldE15VGFnRHJhd2luZ1NldHMod29ya2luZ0NvcHkpXG4vLyAgICAgfVxuLy8gICB9LCBbbXlUYWdEcmF3aW5nU2V0cywgc2V0TXlUYWdEcmF3aW5nU2V0c10pXG5cbi8vICAgY29uc3QgcmVtb3ZlTXlUYWdGcm9tRHJhd2luZyA9IFJlYWN0LnVzZUNhbGxiYWNrKCh0YWc6IHN0cmluZywgZHJhd2luZzogRHJhd2luZyk6IHZvaWQgPT4ge1xuLy8gICAgIGNvbnN0IHdvcmtpbmdDb3B5OiBUYWdEcmF3aW5nU2V0cyA9IGR1cGxpY2F0ZVRhZ0RyYXdpbmdTZXRzKG15VGFnRHJhd2luZ1NldHMpXG4vLyAgICAgY29uc3QgZHJhd2luZ3M6IERyYXdpbmdbXSB8IHVuZGVmaW5lZCA9IHdvcmtpbmdDb3B5W3RhZ11cbi8vICAgICBpZiAoIWRyYXdpbmdzKSByZXR1cm5cbi8vICAgICB3b3JraW5nQ29weVt0YWddID0gZHJhd2luZ3MuZmlsdGVyKG8gPT4gby5pZCAhPT0gZHJhd2luZy5pZClcbi8vICAgICBpZiAoIXdvcmtpbmdDb3B5W3RhZ10ubGVuZ3RoKSBkZWxldGUgd29ya2luZ0NvcHlbdGFnXVxuLy8gICAgIHNhdmVNeVRhZ0RyYXdpbmdTZXRzKHdvcmtpbmdDb3B5KVxuLy8gICAgIHNldE15VGFnRHJhd2luZ1NldHMod29ya2luZ0NvcHkpXG4vLyAgIH0sIFtteVRhZ0RyYXdpbmdTZXRzLCBzZXRNeVRhZ0RyYXdpbmdTZXRzXSlcblxuLy8gICBjb25zdCBnZXRNeVRhZ3NGb3JEcmF3aW5nID0gUmVhY3QudXNlQ2FsbGJhY2soKGRyYXdpbmc6IERyYXdpbmcpOiBzdHJpbmdbXSA9PiB7XG4vLyAgICAgcmV0dXJuIG15VGFncy5maWx0ZXIodGFnID0+IGRyYXdpbmdIYXNNeVRhZyhkcmF3aW5nLCB0YWcpKVxuLy8gICB9LCBbbXlUYWdzLCBkcmF3aW5nSGFzTXlUYWddKVxuXG4gIGZ1bmN0aW9uIHNhdmVNeVRhZ0RyYXdpbmdTZXRzKHRhZ0RyYXdpbmdTZXRzOiBUYWdEcmF3aW5nU2V0cyk6IHZvaWQge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YWdEcmF3aW5nU2V0cycsIEpTT04uc3RyaW5naWZ5KHRhZ0RyYXdpbmdTZXRzKSlcbiAgICBzZXRNeVRhZ0RyYXdpbmdTZXRzKHRhZ0RyYXdpbmdTZXRzKVxuICB9XG5cbiAgZnVuY3Rpb24gZHJhd2luZ0hhc015VGFnKGRyYXdpbmc6IERyYXdpbmcsIHRhZzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZHJhd2luZ3M6IERyYXdpbmdbXSA9IG15VGFnRHJhd2luZ1NldHNbdGFnXSA/PyBbXVxuICAgIHJldHVybiBkcmF3aW5ncy5zb21lKG8gPT4gby5pZCA9PT0gZHJhd2luZy5pZClcbiAgfVxuXG4gIGNvbnN0IG15VGFnczogc3RyaW5nW10gPSBPYmplY3Qua2V5cyhteVRhZ0RyYXdpbmdTZXRzKS5zb3J0KClcbmNvbnNvbGUubG9nKCd1c2VNeVRhZ3MgbXlUYWdzJywgbXlUYWdzKVxuXG4gIGZ1bmN0aW9uIGFkZE15VGFnVG9EcmF3aW5nKHRhZzogc3RyaW5nLCBkcmF3aW5nOiBEcmF3aW5nKTogdm9pZCB7XG4gICAgY29uc3Qgd29ya2luZ0NvcHk6IFRhZ0RyYXdpbmdTZXRzID0gZHVwbGljYXRlVGFnRHJhd2luZ1NldHMobXlUYWdEcmF3aW5nU2V0cylcbiAgICBjb25zdCBkcmF3aW5nczogRHJhd2luZ1tdID0gd29ya2luZ0NvcHlbdGFnXSA/PyBbXVxuICAgIGlmICghZHJhd2luZ3Muc29tZShvID0+IG8uaWQgPT09IGRyYXdpbmcuaWQpKSB7XG4gICAgICBkcmF3aW5ncy5wdXNoKGRyYXdpbmcpXG4gICAgICB3b3JraW5nQ29weVt0YWddID0gZHJhd2luZ3NcbiAgICAgIHNhdmVNeVRhZ0RyYXdpbmdTZXRzKHdvcmtpbmdDb3B5KVxuICAgICAgc2V0TXlUYWdEcmF3aW5nU2V0cyh3b3JraW5nQ29weSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVNeVRhZ0Zyb21EcmF3aW5nKHRhZzogc3RyaW5nLCBkcmF3aW5nOiBEcmF3aW5nKTogdm9pZCB7XG4gICAgY29uc3Qgd29ya2luZ0NvcHk6IFRhZ0RyYXdpbmdTZXRzID0gZHVwbGljYXRlVGFnRHJhd2luZ1NldHMobXlUYWdEcmF3aW5nU2V0cylcbiAgICBjb25zdCBkcmF3aW5nczogRHJhd2luZ1tdIHwgdW5kZWZpbmVkID0gd29ya2luZ0NvcHlbdGFnXVxuICAgIGlmICghZHJhd2luZ3MpIHJldHVyblxuICAgIHdvcmtpbmdDb3B5W3RhZ10gPSBkcmF3aW5ncy5maWx0ZXIobyA9PiBvLmlkICE9PSBkcmF3aW5nLmlkKVxuICAgIGlmICghd29ya2luZ0NvcHlbdGFnXS5sZW5ndGgpIGRlbGV0ZSB3b3JraW5nQ29weVt0YWddXG4gICAgc2F2ZU15VGFnRHJhd2luZ1NldHMod29ya2luZ0NvcHkpXG4gICAgc2V0TXlUYWdEcmF3aW5nU2V0cyh3b3JraW5nQ29weSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE15VGFnc0ZvckRyYXdpbmcoZHJhd2luZzogRHJhd2luZyk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gbXlUYWdzLmZpbHRlcih0YWcgPT4gZHJhd2luZ0hhc015VGFnKGRyYXdpbmcsIHRhZykpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG15VGFnRHJhd2luZ1NldHMsXG4gICAgc2F2ZU15VGFnRHJhd2luZ1NldHMsXG4gICAgbXlUYWdzLFxuICAgIGRyYXdpbmdIYXNNeVRhZyxcbiAgICBhZGRNeVRhZ1RvRHJhd2luZyxcbiAgICByZW1vdmVNeVRhZ0Zyb21EcmF3aW5nLFxuICAgIGdldE15VGFnc0ZvckRyYXdpbmcsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE15VGFnc0NvbnRhaW5lciA9IGNyZWF0ZUNvbnRhaW5lcih1c2VNeVRhZ3MpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./containers/MyTags.ts\n");

/***/ })

})