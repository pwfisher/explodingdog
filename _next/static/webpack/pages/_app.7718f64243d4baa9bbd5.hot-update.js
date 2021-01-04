webpackHotUpdate_N_E("pages/_app",{

/***/ "./containers/MyTags.ts":
/*!******************************!*\
  !*** ./containers/MyTags.ts ***!
  \******************************/
/*! exports provided: useMyTags, MyTagsContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useMyTags\", function() { return useMyTags; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MyTagsContainer\", function() { return MyTagsContainer; });\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unstated-next */ \"./node_modules/unstated-next/dist/unstated-next.mjs\");\n/* harmony import */ var _lib_hashtags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/hashtags */ \"./lib/hashtags.ts\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction useMyTags() {\n  _s();\n\n  console.log('useMyTags');\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(loadMyTagDrawingSets()),\n      _React$useState2 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      myTagDrawingSets = _React$useState2[0],\n      setMyTagDrawingSets = _React$useState2[1];\n\n  function loadMyTagDrawingSets() {\n    if (false) {}\n    return JSON.parse(localStorage.getItem('tagDrawingSets') || '{}');\n  }\n\n  var saveMyTagDrawingSets = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function (tagDrawingSets) {\n    console.log('saveMyTagDrawingSets');\n    setMyTagDrawingSets(tagDrawingSets);\n    localStorage.setItem('tagDrawingSets', JSON.stringify(tagDrawingSets));\n  }, [setMyTagDrawingSets]);\n  var drawingHasMyTag = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function (drawing, tag) {\n    var _myTagDrawingSets$tag;\n\n    var drawings = (_myTagDrawingSets$tag = myTagDrawingSets[tag]) !== null && _myTagDrawingSets$tag !== void 0 ? _myTagDrawingSets$tag : [];\n    return drawings.some(function (o) {\n      return o.id === drawing.id;\n    });\n  }, [myTagDrawingSets]);\n  var myTags = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(function () {\n    return Object.keys(myTagDrawingSets);\n  }, [myTagDrawingSets]);\n  var addMyTagToDrawing = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function (tag, drawing) {\n    var _workingCopy$tag;\n\n    var workingCopy = Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_3__[\"duplicateTagDrawingSets\"])(myTagDrawingSets);\n    var drawings = (_workingCopy$tag = workingCopy[tag]) !== null && _workingCopy$tag !== void 0 ? _workingCopy$tag : [];\n\n    if (!drawings.some(function (o) {\n      return o.id === drawing.id;\n    })) {\n      drawings.push(drawing);\n      workingCopy[tag] = drawings;\n      saveMyTagDrawingSets(workingCopy);\n      setMyTagDrawingSets(workingCopy);\n    }\n  }, [myTagDrawingSets, setMyTagDrawingSets]);\n  var removeMyTagFromDrawing = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function (tag, drawing) {\n    var workingCopy = Object(_lib_hashtags__WEBPACK_IMPORTED_MODULE_3__[\"duplicateTagDrawingSets\"])(myTagDrawingSets);\n    var drawings = workingCopy[tag];\n    if (!drawings) return;\n    workingCopy[tag] = drawings.filter(function (o) {\n      return o.id !== drawing.id;\n    });\n    if (!workingCopy[tag].length) delete workingCopy[tag];\n    saveMyTagDrawingSets(workingCopy);\n    setMyTagDrawingSets(workingCopy);\n  }, [myTagDrawingSets, setMyTagDrawingSets]);\n\n  function getMyTagsForDrawing(drawing) {\n    return myTags.filter(function (tag) {\n      return drawingHasMyTag(drawing, tag);\n    });\n  } // const getMyTagsForDrawing = React.useCallback((drawing: Drawing): string[] => {\n  //   return myTags.filter(tag => drawingHasMyTag(drawing, tag))\n  // }, [myTags, drawingHasMyTag])\n\n\n  return {\n    myTagDrawingSets: myTagDrawingSets,\n    saveMyTagDrawingSets: saveMyTagDrawingSets,\n    myTags: myTags,\n    drawingHasMyTag: drawingHasMyTag,\n    addMyTagToDrawing: addMyTagToDrawing,\n    removeMyTagFromDrawing: removeMyTagFromDrawing,\n    getMyTagsForDrawing: getMyTagsForDrawing\n  };\n}\n\n_s(useMyTags, \"nfEaoo033NJMvEHCZOv78vZ4xBs=\");\n\nvar MyTagsContainer = Object(unstated_next__WEBPACK_IMPORTED_MODULE_2__[\"createContainer\"])(useMyTags);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9NeVRhZ3MudHM/MDNlMSJdLCJuYW1lcyI6WyJ1c2VNeVRhZ3MiLCJjb25zb2xlIiwibG9nIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImxvYWRNeVRhZ0RyYXdpbmdTZXRzIiwibXlUYWdEcmF3aW5nU2V0cyIsInNldE15VGFnRHJhd2luZ1NldHMiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2F2ZU15VGFnRHJhd2luZ1NldHMiLCJ1c2VDYWxsYmFjayIsInRhZ0RyYXdpbmdTZXRzIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImRyYXdpbmdIYXNNeVRhZyIsImRyYXdpbmciLCJ0YWciLCJkcmF3aW5ncyIsInNvbWUiLCJvIiwiaWQiLCJteVRhZ3MiLCJ1c2VNZW1vIiwiT2JqZWN0Iiwia2V5cyIsImFkZE15VGFnVG9EcmF3aW5nIiwid29ya2luZ0NvcHkiLCJkdXBsaWNhdGVUYWdEcmF3aW5nU2V0cyIsInB1c2giLCJyZW1vdmVNeVRhZ0Zyb21EcmF3aW5nIiwiZmlsdGVyIiwibGVuZ3RoIiwiZ2V0TXlUYWdzRm9yRHJhd2luZyIsIk15VGFnc0NvbnRhaW5lciIsImNyZWF0ZUNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR08sU0FBU0EsU0FBVCxHQUFxQjtBQUFBOztBQUMxQkMsU0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWjs7QUFEMEIsd0JBRXNCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQzlDQyxvQkFBb0IsRUFEMEIsQ0FGdEI7QUFBQTtBQUFBLE1BRW5CQyxnQkFGbUI7QUFBQSxNQUVEQyxtQkFGQzs7QUFNMUIsV0FBU0Ysb0JBQVQsR0FBZ0Q7QUFDOUMsZUFBbUM7QUFDbkMsV0FBT0csSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixnQkFBckIsS0FBMEMsSUFBckQsQ0FBUDtBQUNEOztBQUVELE1B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QUlGLGVBQWUsQ0FBQ0MsT0FBRCxFQUFVQyxHQUFWLENBQW5CO0FBQUEsS0FBakIsQ0FBUDtBQUNELEdBL0N5QixDQWlEMUI7QUFDQTtBQUNBOzs7QUFFQSxTQUFPO0FBQ0xiLG9CQUFnQixFQUFoQkEsZ0JBREs7QUFFTE0sd0JBQW9CLEVBQXBCQSxvQkFGSztBQUdMWSxVQUFNLEVBQU5BLE1BSEs7QUFJTFAsbUJBQWUsRUFBZkEsZUFKSztBQUtMVyxxQkFBaUIsRUFBakJBLGlCQUxLO0FBTUxJLDBCQUFzQixFQUF0QkEsc0JBTks7QUFPTEcsdUJBQW1CLEVBQW5CQTtBQVBLLEdBQVA7QUFTRDs7R0E5RGVuQyxTOztBQWdFVCxJQUFNb0MsZUFBZSxHQUFHQyxxRUFBZSxDQUFDckMsU0FBRCxDQUF2QyIsImZpbGUiOiIuL2NvbnRhaW5lcnMvTXlUYWdzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3JlYXRlQ29udGFpbmVyIH0gZnJvbSAndW5zdGF0ZWQtbmV4dCdcbmltcG9ydCB7IGR1cGxpY2F0ZVRhZ0RyYXdpbmdTZXRzIH0gZnJvbSAnLi4vbGliL2hhc2h0YWdzJ1xuaW1wb3J0IHsgRHJhd2luZywgVGFnRHJhd2luZ1NldHMgfSBmcm9tICcuLi90eXBlcydcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZU15VGFncygpIHtcbiAgY29uc29sZS5sb2coJ3VzZU15VGFncycpXG4gIGNvbnN0IFtteVRhZ0RyYXdpbmdTZXRzLCBzZXRNeVRhZ0RyYXdpbmdTZXRzXSA9IFJlYWN0LnVzZVN0YXRlPFRhZ0RyYXdpbmdTZXRzPihcbiAgICBsb2FkTXlUYWdEcmF3aW5nU2V0cygpXG4gIClcblxuICBmdW5jdGlvbiBsb2FkTXlUYWdEcmF3aW5nU2V0cygpOiBUYWdEcmF3aW5nU2V0cyB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4ge30gYXMgVGFnRHJhd2luZ1NldHNcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFnRHJhd2luZ1NldHMnKSB8fCAne30nKSBhcyBUYWdEcmF3aW5nU2V0c1xuICB9XG5cbiAgY29uc3Qgc2F2ZU15VGFnRHJhd2luZ1NldHMgPSBSZWFjdC51c2VDYWxsYmFjaygodGFnRHJhd2luZ1NldHM6IFRhZ0RyYXdpbmdTZXRzKTogdm9pZCA9PiB7XG4gICAgY29uc29sZS5sb2coJ3NhdmVNeVRhZ0RyYXdpbmdTZXRzJylcbiAgICBzZXRNeVRhZ0RyYXdpbmdTZXRzKHRhZ0RyYXdpbmdTZXRzKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YWdEcmF3aW5nU2V0cycsIEpTT04uc3RyaW5naWZ5KHRhZ0RyYXdpbmdTZXRzKSlcbiAgfSwgW3NldE15VGFnRHJhd2luZ1NldHNdKVxuXG4gIGNvbnN0IGRyYXdpbmdIYXNNeVRhZyA9IFJlYWN0LnVzZUNhbGxiYWNrKChkcmF3aW5nOiBEcmF3aW5nLCB0YWc6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IGRyYXdpbmdzOiBEcmF3aW5nW10gPSBteVRhZ0RyYXdpbmdTZXRzW3RhZ10gPz8gW11cbiAgICByZXR1cm4gZHJhd2luZ3Muc29tZShvID0+IG8uaWQgPT09IGRyYXdpbmcuaWQpXG4gIH0sIFtteVRhZ0RyYXdpbmdTZXRzXSlcblxuICBjb25zdCBteVRhZ3M6IHN0cmluZ1tdID0gUmVhY3QudXNlTWVtbygoKSA9PiBPYmplY3Qua2V5cyhteVRhZ0RyYXdpbmdTZXRzKSwgW215VGFnRHJhd2luZ1NldHNdKVxuXG4gIGNvbnN0IGFkZE15VGFnVG9EcmF3aW5nID0gUmVhY3QudXNlQ2FsbGJhY2soKHRhZzogc3RyaW5nLCBkcmF3aW5nOiBEcmF3aW5nKTogdm9pZCA9PiB7XG4gICAgY29uc3Qgd29ya2luZ0NvcHk6IFRhZ0RyYXdpbmdTZXRzID0gZHVwbGljYXRlVGFnRHJhd2luZ1NldHMobXlUYWdEcmF3aW5nU2V0cylcbiAgICBjb25zdCBkcmF3aW5nczogRHJhd2luZ1tdID0gd29ya2luZ0NvcHlbdGFnXSA/PyBbXVxuICAgIGlmICghZHJhd2luZ3Muc29tZShvID0+IG8uaWQgPT09IGRyYXdpbmcuaWQpKSB7XG4gICAgICBkcmF3aW5ncy5wdXNoKGRyYXdpbmcpXG4gICAgICB3b3JraW5nQ29weVt0YWddID0gZHJhd2luZ3NcbiAgICAgIHNhdmVNeVRhZ0RyYXdpbmdTZXRzKHdvcmtpbmdDb3B5KVxuICAgICAgc2V0TXlUYWdEcmF3aW5nU2V0cyh3b3JraW5nQ29weSlcbiAgICB9XG4gIH0sIFtteVRhZ0RyYXdpbmdTZXRzLCBzZXRNeVRhZ0RyYXdpbmdTZXRzXSlcblxuICBjb25zdCByZW1vdmVNeVRhZ0Zyb21EcmF3aW5nID0gUmVhY3QudXNlQ2FsbGJhY2soKHRhZzogc3RyaW5nLCBkcmF3aW5nOiBEcmF3aW5nKTogdm9pZCA9PiB7XG4gICAgY29uc3Qgd29ya2luZ0NvcHk6IFRhZ0RyYXdpbmdTZXRzID0gZHVwbGljYXRlVGFnRHJhd2luZ1NldHMobXlUYWdEcmF3aW5nU2V0cylcbiAgICBjb25zdCBkcmF3aW5nczogRHJhd2luZ1tdIHwgdW5kZWZpbmVkID0gd29ya2luZ0NvcHlbdGFnXVxuICAgIGlmICghZHJhd2luZ3MpIHJldHVyblxuICAgIHdvcmtpbmdDb3B5W3RhZ10gPSBkcmF3aW5ncy5maWx0ZXIobyA9PiBvLmlkICE9PSBkcmF3aW5nLmlkKVxuICAgIGlmICghd29ya2luZ0NvcHlbdGFnXS5sZW5ndGgpIGRlbGV0ZSB3b3JraW5nQ29weVt0YWddXG4gICAgc2F2ZU15VGFnRHJhd2luZ1NldHMod29ya2luZ0NvcHkpXG4gICAgc2V0TXlUYWdEcmF3aW5nU2V0cyh3b3JraW5nQ29weSlcbiAgfSwgW215VGFnRHJhd2luZ1NldHMsIHNldE15VGFnRHJhd2luZ1NldHNdKVxuXG4gIGZ1bmN0aW9uIGdldE15VGFnc0ZvckRyYXdpbmcoZHJhd2luZzogRHJhd2luZyk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gbXlUYWdzLmZpbHRlcih0YWcgPT4gZHJhd2luZ0hhc015VGFnKGRyYXdpbmcsIHRhZykpXG4gIH1cblxuICAvLyBjb25zdCBnZXRNeVRhZ3NGb3JEcmF3aW5nID0gUmVhY3QudXNlQ2FsbGJhY2soKGRyYXdpbmc6IERyYXdpbmcpOiBzdHJpbmdbXSA9PiB7XG4gIC8vICAgcmV0dXJuIG15VGFncy5maWx0ZXIodGFnID0+IGRyYXdpbmdIYXNNeVRhZyhkcmF3aW5nLCB0YWcpKVxuICAvLyB9LCBbbXlUYWdzLCBkcmF3aW5nSGFzTXlUYWddKVxuXG4gIHJldHVybiB7XG4gICAgbXlUYWdEcmF3aW5nU2V0cyxcbiAgICBzYXZlTXlUYWdEcmF3aW5nU2V0cyxcbiAgICBteVRhZ3MsXG4gICAgZHJhd2luZ0hhc015VGFnLFxuICAgIGFkZE15VGFnVG9EcmF3aW5nLFxuICAgIHJlbW92ZU15VGFnRnJvbURyYXdpbmcsXG4gICAgZ2V0TXlUYWdzRm9yRHJhd2luZyxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTXlUYWdzQ29udGFpbmVyID0gY3JlYXRlQ29udGFpbmVyKHVzZU15VGFncylcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./containers/MyTags.ts\n");

/***/ })

})