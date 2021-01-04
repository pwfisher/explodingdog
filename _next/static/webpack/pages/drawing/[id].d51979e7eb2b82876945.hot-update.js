webpackHotUpdate_N_E("pages/drawing/[id]",{

/***/ "./containers/MyTags.ts":
/*!******************************!*\
  !*** ./containers/MyTags.ts ***!
  \******************************/
/*! exports provided: useMyTags, MyTagsContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useMyTags\", function() { return useMyTags; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MyTagsContainer\", function() { return MyTagsContainer; });\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unstated-next */ \"./node_modules/unstated-next/dist/unstated-next.mjs\");\n/* harmony import */ var _lib_hashtags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/hashtags */ \"./lib/hashtags.ts\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction useMyTags() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(loadMyTagDrawingSets()),\n      _React$useState2 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      myTagDrawingSets = _React$useState2[0],\n      setMyTagDrawingSets = _React$useState2[1];\n\n  function loadMyTagDrawingSets() {\n    if (false) {}\n    return JSON.parse(localStorage.getItem('tagDrawingSets') || '{}');\n  }\n\n  var saveMyTagDrawingSets = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function (tagDrawingSets) {\n    setMyTagDrawingSets(tagDrawingSets);\n    localStorage.setItem('tagDrawingSets', JSON.stringify(tagDrawingSets));\n  }, [setMyTagDrawingSets]);\n  var drawingHasMyTag = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function (drawing, tag) {\n    var _myTagDrawingSets$tag;\n\n    var drawings = (_myTagDrawingSets$tag = myTagDrawingSets[tag]) !== null && _myTagDrawingSets$tag !== void 0 ? _myTagDrawingSets$tag : [];\n    return drawings.some(function (o) {\n      return o.id === drawing.id;\n    });\n  }, [myTagDrawingSets]);\n  var myTags = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(function () {\n    return Object.keys(myTagDrawingSets);\n  }, [myTagDrawingSets]);\n  var addMyTagToDrawing = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function (tag, drawing) {\n    var _workingCopy$tag;\n\n    var workingCopy = Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_3__[\"duplicateTagDrawingSets\"])(myTagDrawingSets);\n    var drawings = (_workingCopy$tag = workingCopy[tag]) !== null && _workingCopy$tag !== void 0 ? _workingCopy$tag : [];\n\n    if (!drawings.some(function (o) {\n      return o.id === drawing.id;\n    })) {\n      drawings.push(drawing);\n      workingCopy[tag] = drawings;\n      saveMyTagDrawingSets(workingCopy);\n      setMyTagDrawingSets(workingCopy);\n    }\n  }, [myTagDrawingSets, setMyTagDrawingSets]);\n  var removeMyTagFromDrawing = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function (tag, drawing) {\n    var workingCopy = Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_3__[\"duplicateTagDrawingSets\"])(myTagDrawingSets);\n    var drawings = workingCopy[tag];\n    if (!drawings) return;\n    workingCopy[tag] = drawings.filter(function (o) {\n      return o.id !== drawing.id;\n    });\n    if (!workingCopy[tag].length) delete workingCopy[tag];\n    saveMyTagDrawingSets(workingCopy);\n    setMyTagDrawingSets(workingCopy);\n  }, [myTagDrawingSets, setMyTagDrawingSets]);\n  var getMyTagsForDrawing = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function (drawing) {\n    return myTags.filter(function (tag) {\n      return drawingHasMyTag(drawing, tag);\n    });\n  }, [myTags, drawingHasMyTag]);\n  return {\n    myTagDrawingSets: myTagDrawingSets,\n    saveMyTagDrawingSets: saveMyTagDrawingSets,\n    myTags: myTags,\n    drawingHasMyTag: drawingHasMyTag,\n    addMyTagToDrawing: addMyTagToDrawing,\n    removeMyTagFromDrawing: removeMyTagFromDrawing,\n    getMyTagsForDrawing: getMyTagsForDrawing\n  };\n}\n\n_s(useMyTags, \"Jz7wyPzLQGGDQvV3FySPACvaMCA=\");\n\nvar MyTagsContainer = Object(unstated_next__WEBPACK_IMPORTED_MODULE_2__[\"createContainer\"])(useMyTags);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9NeVRhZ3MudHM/MDNlMSJdLCJuYW1lcyI6WyJ1c2VNeVRhZ3MiLCJSZWFjdCIsInVzZVN0YXRlIiwibG9hZE15VGFnRHJhd2luZ1NldHMiLCJteVRhZ0RyYXdpbmdTZXRzIiwic2V0TXlUYWdEcmF3aW5nU2V0cyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzYXZlTXlUYWdEcmF3aW5nU2V0cyIsInVzZUNhbGxiYWNrIiwidGFnRHJhd2luZ1NldHMiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZHJhd2luZ0hhc015VGFnIiwiZHJhd2luZyIsInRhZyIsImRyYXdpbmdzIiwic29tZSIsIm8iLCJpZCIsIm15VGFncyIsInVzZU1lbW8iLCJPYmplY3QiLCJrZXlzIiwiYWRkTXlUYWdUb0RyYXdpbmciLCJ3b3JraW5nQ29weSIsImR1cGxpY2F0ZVRhZ0RyYXdpbmdTZXRzIiwicHVzaCIsInJlbW92ZU15VGFnRnJvbURyYXdpbmciLCJmaWx0ZXIiLCJsZW5ndGgiLCJnZXRNeVRhZ3NGb3JEcmF3aW5nIiwiTXlUYWdzQ29udGFpbmVyIiwiY3JlYXRlQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHTyxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBQUEsd0JBQ3NCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQzlDQyxvQkFBb0IsRUFEMEIsQ0FEdEI7QUFBQTtBQUFBLE1BQ25CQyxnQkFEbUI7QUFBQSxNQUNEQyxtQkFEQzs7QUFLMUIsV0FBU0Ysb0JBQVQsR0FBZ0Q7QUFDOUMsZUFBbUM7QUFDbkMsV0FBT0csSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixnQkFBckIsS0FBMEMsSUFBckQsQ0FBUDtBQUNEOztBQUVELE1BQU1DLG9CQUFvQixHQUFHVCw0Q0FBSyxDQUFDVSxXQUFOLENBQWtCLFVBQUNDLGNBQUQs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LEdBRjJCLEVBRXpCLENBQUNLLE1BQUQsRUFBU1AsZUFBVCxDQUZ5QixDQUE1QjtBQUlBLFNBQU87QUFDTFgsb0JBQWdCLEVBQWhCQSxnQkFESztBQUVMTSx3QkFBb0IsRUFBcEJBLG9CQUZLO0FBR0xZLFVBQU0sRUFBTkEsTUFISztBQUlMUCxtQkFBZSxFQUFmQSxlQUpLO0FBS0xXLHFCQUFpQixFQUFqQkEsaUJBTEs7QUFNTEksMEJBQXNCLEVBQXRCQSxzQkFOSztBQU9MRyx1QkFBbUIsRUFBbkJBO0FBUEssR0FBUDtBQVNEOztHQXhEZWpDLFM7O0FBMERULElBQU1rQyxlQUFlLEdBQUdDLHFFQUFlLENBQUNuQyxTQUFELENBQXZDIiwiZmlsZSI6Ii4vY29udGFpbmVycy9NeVRhZ3MudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjcmVhdGVDb250YWluZXIgfSBmcm9tICd1bnN0YXRlZC1uZXh0J1xuaW1wb3J0IHsgZHVwbGljYXRlVGFnRHJhd2luZ1NldHMgfSBmcm9tICcuLi9saWIvaGFzaHRhZ3MnXG5pbXBvcnQgeyBEcmF3aW5nLCBUYWdEcmF3aW5nU2V0cyB9IGZyb20gJy4uL3R5cGVzJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlTXlUYWdzKCkge1xuICBjb25zdCBbbXlUYWdEcmF3aW5nU2V0cywgc2V0TXlUYWdEcmF3aW5nU2V0c10gPSBSZWFjdC51c2VTdGF0ZTxUYWdEcmF3aW5nU2V0cz4oXG4gICAgbG9hZE15VGFnRHJhd2luZ1NldHMoKVxuICApXG5cbiAgZnVuY3Rpb24gbG9hZE15VGFnRHJhd2luZ1NldHMoKTogVGFnRHJhd2luZ1NldHMge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIHt9IGFzIFRhZ0RyYXdpbmdTZXRzXG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RhZ0RyYXdpbmdTZXRzJykgfHwgJ3t9JykgYXMgVGFnRHJhd2luZ1NldHNcbiAgfVxuXG4gIGNvbnN0IHNhdmVNeVRhZ0RyYXdpbmdTZXRzID0gUmVhY3QudXNlQ2FsbGJhY2soKHRhZ0RyYXdpbmdTZXRzOiBUYWdEcmF3aW5nU2V0cyk6IHZvaWQgPT4ge1xuICAgIHNldE15VGFnRHJhd2luZ1NldHModGFnRHJhd2luZ1NldHMpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RhZ0RyYXdpbmdTZXRzJywgSlNPTi5zdHJpbmdpZnkodGFnRHJhd2luZ1NldHMpKVxuICB9LCBbc2V0TXlUYWdEcmF3aW5nU2V0c10pXG5cbiAgY29uc3QgZHJhd2luZ0hhc015VGFnID0gUmVhY3QudXNlQ2FsbGJhY2soKGRyYXdpbmc6IERyYXdpbmcsIHRhZzogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgZHJhd2luZ3M6IERyYXdpbmdbXSA9IG15VGFnRHJhd2luZ1NldHNbdGFnXSA/PyBbXVxuICAgIHJldHVybiBkcmF3aW5ncy5zb21lKG8gPT4gby5pZCA9PT0gZHJhd2luZy5pZClcbiAgfSwgW215VGFnRHJhd2luZ1NldHNdKVxuXG4gIGNvbnN0IG15VGFnczogc3RyaW5nW10gPSBSZWFjdC51c2VNZW1vKCgpID0+IE9iamVjdC5rZXlzKG15VGFnRHJhd2luZ1NldHMpLCBbbXlUYWdEcmF3aW5nU2V0c10pXG5cbiAgY29uc3QgYWRkTXlUYWdUb0RyYXdpbmcgPSBSZWFjdC51c2VDYWxsYmFjaygodGFnOiBzdHJpbmcsIGRyYXdpbmc6IERyYXdpbmcpOiB2b2lkID0+IHtcbiAgICBjb25zdCB3b3JraW5nQ29weTogVGFnRHJhd2luZ1NldHMgPSBkdXBsaWNhdGVUYWdEcmF3aW5nU2V0cyhteVRhZ0RyYXdpbmdTZXRzKVxuICAgIGNvbnN0IGRyYXdpbmdzOiBEcmF3aW5nW10gPSB3b3JraW5nQ29weVt0YWddID8/IFtdXG4gICAgaWYgKCFkcmF3aW5ncy5zb21lKG8gPT4gby5pZCA9PT0gZHJhd2luZy5pZCkpIHtcbiAgICAgIGRyYXdpbmdzLnB1c2goZHJhd2luZylcbiAgICAgIHdvcmtpbmdDb3B5W3RhZ10gPSBkcmF3aW5nc1xuICAgICAgc2F2ZU15VGFnRHJhd2luZ1NldHMod29ya2luZ0NvcHkpXG4gICAgICBzZXRNeVRhZ0RyYXdpbmdTZXRzKHdvcmtpbmdDb3B5KVxuICAgIH1cbiAgfSwgW215VGFnRHJhd2luZ1NldHMsIHNldE15VGFnRHJhd2luZ1NldHNdKVxuXG4gIGNvbnN0IHJlbW92ZU15VGFnRnJvbURyYXdpbmcgPSBSZWFjdC51c2VDYWxsYmFjaygodGFnOiBzdHJpbmcsIGRyYXdpbmc6IERyYXdpbmcpOiB2b2lkID0+IHtcbiAgICBjb25zdCB3b3JraW5nQ29weTogVGFnRHJhd2luZ1NldHMgPSBkdXBsaWNhdGVUYWdEcmF3aW5nU2V0cyhteVRhZ0RyYXdpbmdTZXRzKVxuICAgIGNvbnN0IGRyYXdpbmdzOiBEcmF3aW5nW10gfCB1bmRlZmluZWQgPSB3b3JraW5nQ29weVt0YWddXG4gICAgaWYgKCFkcmF3aW5ncykgcmV0dXJuXG4gICAgd29ya2luZ0NvcHlbdGFnXSA9IGRyYXdpbmdzLmZpbHRlcihvID0+IG8uaWQgIT09IGRyYXdpbmcuaWQpXG4gICAgaWYgKCF3b3JraW5nQ29weVt0YWddLmxlbmd0aCkgZGVsZXRlIHdvcmtpbmdDb3B5W3RhZ11cbiAgICBzYXZlTXlUYWdEcmF3aW5nU2V0cyh3b3JraW5nQ29weSlcbiAgICBzZXRNeVRhZ0RyYXdpbmdTZXRzKHdvcmtpbmdDb3B5KVxuICB9LCBbbXlUYWdEcmF3aW5nU2V0cywgc2V0TXlUYWdEcmF3aW5nU2V0c10pXG5cbiAgY29uc3QgZ2V0TXlUYWdzRm9yRHJhd2luZyA9IFJlYWN0LnVzZUNhbGxiYWNrKChkcmF3aW5nOiBEcmF3aW5nKTogc3RyaW5nW10gPT4ge1xuICAgIHJldHVybiBteVRhZ3MuZmlsdGVyKHRhZyA9PiBkcmF3aW5nSGFzTXlUYWcoZHJhd2luZywgdGFnKSlcbiAgfSwgW215VGFncywgZHJhd2luZ0hhc015VGFnXSlcblxuICByZXR1cm4ge1xuICAgIG15VGFnRHJhd2luZ1NldHMsXG4gICAgc2F2ZU15VGFnRHJhd2luZ1NldHMsXG4gICAgbXlUYWdzLFxuICAgIGRyYXdpbmdIYXNNeVRhZyxcbiAgICBhZGRNeVRhZ1RvRHJhd2luZyxcbiAgICByZW1vdmVNeVRhZ0Zyb21EcmF3aW5nLFxuICAgIGdldE15VGFnc0ZvckRyYXdpbmcsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE15VGFnc0NvbnRhaW5lciA9IGNyZWF0ZUNvbnRhaW5lcih1c2VNeVRhZ3MpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./containers/MyTags.ts\n");

/***/ })

})