webpackHotUpdate_N_E("pages/_app",{

/***/ "./containers/MyTags.ts":
/*!******************************!*\
  !*** ./containers/MyTags.ts ***!
  \******************************/
/*! exports provided: useMyTags, MyTagsContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useMyTags\", function() { return useMyTags; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MyTagsContainer\", function() { return MyTagsContainer; });\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unstated-next */ \"./node_modules/unstated-next/dist/unstated-next.mjs\");\n/* harmony import */ var _lib_tags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/tags */ \"./lib/tags.ts\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction useMyTags() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({}),\n      _React$useState2 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      myTagDrawingSets = _React$useState2[0],\n      setMyTagDrawingSets = _React$useState2[1]; // Init client-side from localStorage\n\n\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    return setMyTagDrawingSets(Object(_lib_tags__WEBPACK_IMPORTED_MODULE_3__[\"loadMyTagDrawingSets\"])());\n  }, []);\n\n  function saveMyTagDrawingSets(tagDrawingSets) {\n    localStorage.setItem('tagDrawingSets', JSON.stringify(tagDrawingSets));\n    setMyTagDrawingSets(tagDrawingSets);\n  }\n\n  function drawingHasMyTag(drawing, tag) {\n    var _myTagDrawingSets$tag;\n\n    var drawings = (_myTagDrawingSets$tag = myTagDrawingSets[tag]) !== null && _myTagDrawingSets$tag !== void 0 ? _myTagDrawingSets$tag : [];\n    return drawings.some(function (o) {\n      return o.id === drawing.id;\n    });\n  }\n\n  var myTags = Object.keys(myTagDrawingSets).sort();\n\n  function addMyTagToDrawing(tag, drawing) {\n    var _workingCopy$tag;\n\n    var workingCopy = Object(_lib_tags__WEBPACK_IMPORTED_MODULE_3__[\"duplicateTagDrawingSets\"])(myTagDrawingSets);\n    var drawings = (_workingCopy$tag = workingCopy[tag]) !== null && _workingCopy$tag !== void 0 ? _workingCopy$tag : [];\n\n    if (!drawings.some(function (o) {\n      return o.id === drawing.id;\n    })) {\n      drawings.push(drawing);\n      workingCopy[tag] = drawings;\n      saveMyTagDrawingSets(workingCopy);\n      setMyTagDrawingSets(workingCopy);\n    }\n  }\n\n  function removeMyTagFromDrawing(tag, drawing) {\n    var workingCopy = Object(_lib_tags__WEBPACK_IMPORTED_MODULE_3__[\"duplicateTagDrawingSets\"])(myTagDrawingSets);\n    var drawings = workingCopy[tag];\n    if (!drawings) return;\n    workingCopy[tag] = drawings.filter(function (o) {\n      return o.id !== drawing.id;\n    });\n    if (!workingCopy[tag].length) delete workingCopy[tag];\n    saveMyTagDrawingSets(workingCopy);\n    setMyTagDrawingSets(workingCopy);\n  }\n\n  function getMyTagsForDrawing(drawing) {\n    return myTags.filter(function (tag) {\n      return drawingHasMyTag(drawing, tag);\n    });\n  }\n\n  return {\n    myTagDrawingSets: myTagDrawingSets,\n    saveMyTagDrawingSets: saveMyTagDrawingSets,\n    myTags: myTags,\n    drawingHasMyTag: drawingHasMyTag,\n    addMyTagToDrawing: addMyTagToDrawing,\n    removeMyTagFromDrawing: removeMyTagFromDrawing,\n    getMyTagsForDrawing: getMyTagsForDrawing\n  };\n}\n\n_s(useMyTags, \"3NL2f4QAHPalRJdQ6xtkDTfkz/8=\");\n\nvar MyTagsContainer = Object(unstated_next__WEBPACK_IMPORTED_MODULE_2__[\"createContainer\"])(useMyTags);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVycy9NeVRhZ3MudHM/MDNlMSJdLCJuYW1lcyI6WyJ1c2VNeVRhZ3MiLCJSZWFjdCIsInVzZVN0YXRlIiwibXlUYWdEcmF3aW5nU2V0cyIsInNldE15VGFnRHJhd2luZ1NldHMiLCJ1c2VFZmZlY3QiLCJsb2FkTXlUYWdEcmF3aW5nU2V0cyIsInNhdmVNeVRhZ0RyYXdpbmdTZXRzIiwidGFnRHJhd2luZ1NldHMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImRyYXdpbmdIYXNNeVRhZyIsImRyYXdpbmciLCJ0YWciLCJkcmF3aW5ncyIsInNvbWUiLCJvIiwiaWQiLCJteVRhZ3MiLCJPYmplY3QiLCJrZXlzIiwic29ydCIsImFkZE15VGFnVG9EcmF3aW5nIiwid29ya2luZ0NvcHkiLCJkdXBsaWNhdGVUYWdEcmF3aW5nU2V0cyIsInB1c2giLCJyZW1vdmVNeVRhZ0Zyb21EcmF3aW5nIiwiZmlsdGVyIiwibGVuZ3RoIiwiZ2V0TXlUYWdzRm9yRHJhd2luZyIsIk15VGFnc0NvbnRhaW5lciIsImNyZWF0ZUNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR08sU0FBU0EsU0FBVCxHQUFxQjtBQUFBOztBQUFBLHdCQUNzQkMsNENBQUssQ0FBQ0MsUUFBTixDQUErQixFQUEvQixDQUR0QjtBQUFBO0FBQUEsTUFDbkJDLGdCQURtQjtBQUFBLE1BQ0RDLG1CQURDLHdCQUcxQjs7O0FBQ0FILDhDQUFLLENBQUNJLFNBQU4sQ0FBZ0I7QUFBQSxXQUFNRCxtQkFBbUIsQ0FBQ0Usc0VBQW9CLEVBQXJCLENBQXpCO0FBQUEsR0FBaEIsRUFBbUUsRUFBbkU7O0FBRUEsV0FBU0Msb0JBQVQsQ0FBOEJDLGNBQTlCLEVBQW9FO0FBQ2xFQyxnQkFBWSxDQUFDQyxPQUFiLENBQXFCLGdCQUFyQixFQUF1Q0MsSUFBSSxDQUFDQyxTQUFMLENBQWVKLGNBQWYsQ0FBdkM7QUFDQUosdUJBQW1CLENBQUNJLGNBQUQsQ0FBbkI7QUFDRDs7QUFFRCxXQUFTSyxlQUFULENBQXlCQyxPQUF6QixFQUEyQ0MsR0FBM0MsRUFBaUU7QUFBQTs7QUFDL0QsUUFBTUMsUUFBbUIsNEJBQUdiLGdCQUFnQixDQUFDWSxHQUFELENBQW5CLHlFQUE0QixFQUFyRDtBQUNBLFdBQU9DLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjLFVBQUFDLENBQUM7QUFBQSxhQUFJQSxDQUFDLENBQUNDLEVBQUYsS0FBU0wsT0FBTyxDQUFDSyxFQUFyQjtBQUFBLEtBQWYsQ0FBUDtBQUNEOztBQUVELE1BQU1DLE1BQWdCLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZbkIsZ0JBQVosRUFBOEJvQixJQUE5QixFQUF6Qjs7QUFFQSxXQUFTQyxpQkFBVCxDQUEyQlQsR0FBM0IsRUFBd0NELE9BQXhDLEVBQWdFO0FBQUE7O0FBQzlELFFBQU1XLFdBQTJCLEdBQUdDLHlFQUF1QixDQUFDdkIsZ0JBQUQsQ0FBM0Q7QUFDQSxRQUFNYSxRQUFtQix1QkFBR1MsV0FBVyxDQUFDVixHQUFELENBQWQsK0RBQXVCLEVBQWhEOztBQUNBLFFBQUksQ0FBQ0MsUUFBUSxDQUFDQyxJQUFULENBQWMsVUFBQUMsQ0FBQztBQUFBLGFBQUlBLENBQUMsQ0FBQ0MsRUFBRixLQUFTTCxPQUFPLENBQUNLLEVBQXJCO0FBQUEsS0FBZixDQUFMLEVBQThDO0FBQzVDSCxjQUFRLENBQUNXLElBQVQsQ0FBY2IsT0FBZDtBQUNBVyxpQkFBVyxDQUFDVixHQUFELENBQVgsR0FBbUJDLFFBQW5CO0FBQ0FULDBCQUFvQixDQUFDa0IsV0FBRCxDQUFwQjtBQUNBckIseUJBQW1CLENBQUNxQixXQUFELENBQW5CO0FBQ0Q7QUFDRjs7QUFFRCxXQUFTRyxzQkFBVCxDQUFnQ2IsR0FBaEMsRUFBNkNELE9BQTdDLEVBQXFFO0FBQ25FLFFBQU1XLFdBQTJCLEdBQUdDLHlFQUF1QixDQUFDdkIsZ0JBQUQsQ0FBM0Q7QUFDQSxRQUFNYSxRQUErQixHQUFHUyxXQUFXLENBQUNWLEdBQUQsQ0FBbkQ7QUFDQSxRQUFJLENBQUNDLFFBQUwsRUFBZTtBQUNmUyxlQUFXLENBQUNWLEdBQUQsQ0FBWCxHQUFtQkMsUUFBUSxDQUFDYSxNQUFULENBQWdCLFVBQUFYLENBQUM7QUFBQSxhQUFJQSxDQUFDLENBQUNDLEVBQUYsS0FBU0wsT0FBTyxDQUFDSyxFQUFyQjtBQUFBLEtBQWpCLENBQW5CO0FBQ0EsUUFBSSxDQUFDTSxXQUFXLENBQUNWLEdBQUQsQ0FBWCxDQUFpQmUsTUFBdEIsRUFBOEIsT0FBT0wsV0FBVyxDQUFDVixHQUFELENBQWxCO0FBQzlCUix3QkFBb0IsQ0FBQ2tCLFdBQUQsQ0FBcEI7QUFDQXJCLHVCQUFtQixDQUFDcUIsV0FBRCxDQUFuQjtBQUNEOztBQUVELFdBQVNNLG1CQUFULENBQTZCakIsT0FBN0IsRUFBeUQ7QUFDdkQsV0FBT00sTUFBTSxDQUFDUyxNQUFQLENBQWMsVUFBQWQsR0FBRztBQUFBLGFBQUlGLGVBQWUsQ0FBQ0MsT0FBRCxFQUFVQyxHQUFWLENBQW5CO0FBQUEsS0FBakIsQ0FBUDtBQUNEOztBQUVELFNBQU87QUFDTFosb0JBQWdCLEVBQWhCQSxnQkFESztBQUVMSSx3QkFBb0IsRUFBcEJBLG9CQUZLO0FBR0xhLFVBQU0sRUFBTkEsTUFISztBQUlMUCxtQkFBZSxFQUFmQSxlQUpLO0FBS0xXLHFCQUFpQixFQUFqQkEsaUJBTEs7QUFNTEksMEJBQXNCLEVBQXRCQSxzQkFOSztBQU9MRyx1QkFBbUIsRUFBbkJBO0FBUEssR0FBUDtBQVNEOztHQXBEZS9CLFM7O0FBc0RULElBQU1nQyxlQUFlLEdBQUdDLHFFQUFlLENBQUNqQyxTQUFELENBQXZDIiwiZmlsZSI6Ii4vY29udGFpbmVycy9NeVRhZ3MudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjcmVhdGVDb250YWluZXIgfSBmcm9tICd1bnN0YXRlZC1uZXh0J1xuaW1wb3J0IHsgZHVwbGljYXRlVGFnRHJhd2luZ1NldHMsIGxvYWRNeVRhZ0RyYXdpbmdTZXRzIH0gZnJvbSAnLi4vbGliL3RhZ3MnXG5pbXBvcnQgeyBEcmF3aW5nLCBUYWdEcmF3aW5nU2V0cyB9IGZyb20gJy4uL3R5cGVzJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlTXlUYWdzKCkge1xuICBjb25zdCBbbXlUYWdEcmF3aW5nU2V0cywgc2V0TXlUYWdEcmF3aW5nU2V0c10gPSBSZWFjdC51c2VTdGF0ZTxUYWdEcmF3aW5nU2V0cz4oe30pXG5cbiAgLy8gSW5pdCBjbGllbnQtc2lkZSBmcm9tIGxvY2FsU3RvcmFnZVxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4gc2V0TXlUYWdEcmF3aW5nU2V0cyhsb2FkTXlUYWdEcmF3aW5nU2V0cygpKSwgW10pXG5cbiAgZnVuY3Rpb24gc2F2ZU15VGFnRHJhd2luZ1NldHModGFnRHJhd2luZ1NldHM6IFRhZ0RyYXdpbmdTZXRzKTogdm9pZCB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RhZ0RyYXdpbmdTZXRzJywgSlNPTi5zdHJpbmdpZnkodGFnRHJhd2luZ1NldHMpKVxuICAgIHNldE15VGFnRHJhd2luZ1NldHModGFnRHJhd2luZ1NldHMpXG4gIH1cblxuICBmdW5jdGlvbiBkcmF3aW5nSGFzTXlUYWcoZHJhd2luZzogRHJhd2luZywgdGFnOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBkcmF3aW5nczogRHJhd2luZ1tdID0gbXlUYWdEcmF3aW5nU2V0c1t0YWddID8/IFtdXG4gICAgcmV0dXJuIGRyYXdpbmdzLnNvbWUobyA9PiBvLmlkID09PSBkcmF3aW5nLmlkKVxuICB9XG5cbiAgY29uc3QgbXlUYWdzOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKG15VGFnRHJhd2luZ1NldHMpLnNvcnQoKVxuXG4gIGZ1bmN0aW9uIGFkZE15VGFnVG9EcmF3aW5nKHRhZzogc3RyaW5nLCBkcmF3aW5nOiBEcmF3aW5nKTogdm9pZCB7XG4gICAgY29uc3Qgd29ya2luZ0NvcHk6IFRhZ0RyYXdpbmdTZXRzID0gZHVwbGljYXRlVGFnRHJhd2luZ1NldHMobXlUYWdEcmF3aW5nU2V0cylcbiAgICBjb25zdCBkcmF3aW5nczogRHJhd2luZ1tdID0gd29ya2luZ0NvcHlbdGFnXSA/PyBbXVxuICAgIGlmICghZHJhd2luZ3Muc29tZShvID0+IG8uaWQgPT09IGRyYXdpbmcuaWQpKSB7XG4gICAgICBkcmF3aW5ncy5wdXNoKGRyYXdpbmcpXG4gICAgICB3b3JraW5nQ29weVt0YWddID0gZHJhd2luZ3NcbiAgICAgIHNhdmVNeVRhZ0RyYXdpbmdTZXRzKHdvcmtpbmdDb3B5KVxuICAgICAgc2V0TXlUYWdEcmF3aW5nU2V0cyh3b3JraW5nQ29weSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVNeVRhZ0Zyb21EcmF3aW5nKHRhZzogc3RyaW5nLCBkcmF3aW5nOiBEcmF3aW5nKTogdm9pZCB7XG4gICAgY29uc3Qgd29ya2luZ0NvcHk6IFRhZ0RyYXdpbmdTZXRzID0gZHVwbGljYXRlVGFnRHJhd2luZ1NldHMobXlUYWdEcmF3aW5nU2V0cylcbiAgICBjb25zdCBkcmF3aW5nczogRHJhd2luZ1tdIHwgdW5kZWZpbmVkID0gd29ya2luZ0NvcHlbdGFnXVxuICAgIGlmICghZHJhd2luZ3MpIHJldHVyblxuICAgIHdvcmtpbmdDb3B5W3RhZ10gPSBkcmF3aW5ncy5maWx0ZXIobyA9PiBvLmlkICE9PSBkcmF3aW5nLmlkKVxuICAgIGlmICghd29ya2luZ0NvcHlbdGFnXS5sZW5ndGgpIGRlbGV0ZSB3b3JraW5nQ29weVt0YWddXG4gICAgc2F2ZU15VGFnRHJhd2luZ1NldHMod29ya2luZ0NvcHkpXG4gICAgc2V0TXlUYWdEcmF3aW5nU2V0cyh3b3JraW5nQ29weSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE15VGFnc0ZvckRyYXdpbmcoZHJhd2luZzogRHJhd2luZyk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gbXlUYWdzLmZpbHRlcih0YWcgPT4gZHJhd2luZ0hhc015VGFnKGRyYXdpbmcsIHRhZykpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG15VGFnRHJhd2luZ1NldHMsXG4gICAgc2F2ZU15VGFnRHJhd2luZ1NldHMsXG4gICAgbXlUYWdzLFxuICAgIGRyYXdpbmdIYXNNeVRhZyxcbiAgICBhZGRNeVRhZ1RvRHJhd2luZyxcbiAgICByZW1vdmVNeVRhZ0Zyb21EcmF3aW5nLFxuICAgIGdldE15VGFnc0ZvckRyYXdpbmcsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE15VGFnc0NvbnRhaW5lciA9IGNyZWF0ZUNvbnRhaW5lcih1c2VNeVRhZ3MpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./containers/MyTags.ts\n");

/***/ }),

/***/ "./lib/hashtags.ts":
false,

/***/ "./lib/tags.ts":
/*!*********************!*\
  !*** ./lib/tags.ts ***!
  \*********************/
/*! exports provided: getTagsForDrawing, drawingHasTag, loadMyTagDrawingSets, duplicateTagDrawingSets, getTagSlug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTagsForDrawing\", function() { return getTagsForDrawing; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawingHasTag\", function() { return drawingHasTag; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadMyTagDrawingSets\", function() { return loadMyTagDrawingSets; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"duplicateTagDrawingSets\", function() { return duplicateTagDrawingSets; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTagSlug\", function() { return getTagSlug; });\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _fixtures___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../__fixtures__ */ \"./__fixtures__/index.ts\");\n\n\nfunction getTagsForDrawing(drawing) {\n  return _fixtures___WEBPACK_IMPORTED_MODULE_1__[\"tags\"].filter(function (tag) {\n    return drawingHasTag(drawing, tag);\n  });\n}\nfunction drawingHasTag(drawing, tag) {\n  var _fixtureTagDrawingSet;\n\n  var drawings = (_fixtureTagDrawingSet = _fixtures___WEBPACK_IMPORTED_MODULE_1__[\"tagDrawingSets\"][tag]) !== null && _fixtureTagDrawingSet !== void 0 ? _fixtureTagDrawingSet : [];\n  return drawings.some(function (o) {\n    return o.id === drawing.id;\n  });\n}\nfunction loadMyTagDrawingSets() {\n  if (false) {}\n  return JSON.parse(localStorage.getItem('tagDrawingSets') || '{}');\n}\nfunction duplicateTagDrawingSets(original) {\n  return Object.keys(original).reduce(function (accumulator, tag) {\n    accumulator[tag] = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(original[tag]);\n    return accumulator;\n  }, {});\n}\nfunction getTagSlug(tag) {\n  return tag.toLocaleLowerCase().trim().replace(/\\s+/g, '-');\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3RhZ3MudHM/MGE3ZSJdLCJuYW1lcyI6WyJnZXRUYWdzRm9yRHJhd2luZyIsImRyYXdpbmciLCJmaXh0dXJlVGFncyIsImZpbHRlciIsInRhZyIsImRyYXdpbmdIYXNUYWciLCJkcmF3aW5ncyIsImZpeHR1cmVUYWdEcmF3aW5nU2V0cyIsInNvbWUiLCJvIiwiaWQiLCJsb2FkTXlUYWdEcmF3aW5nU2V0cyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkdXBsaWNhdGVUYWdEcmF3aW5nU2V0cyIsIm9yaWdpbmFsIiwiT2JqZWN0Iiwia2V5cyIsInJlZHVjZSIsImFjY3VtdWxhdG9yIiwiZ2V0VGFnU2x1ZyIsInRvTG9jYWxlTG93ZXJDYXNlIiwidHJpbSIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBO0FBS08sU0FBU0EsaUJBQVQsQ0FBMkJDLE9BQTNCLEVBQXVEO0FBQzVELFNBQU9DLCtDQUFXLENBQUNDLE1BQVosQ0FBbUIsVUFBQUMsR0FBRztBQUFBLFdBQUlDLGFBQWEsQ0FBQ0osT0FBRCxFQUFVRyxHQUFWLENBQWpCO0FBQUEsR0FBdEIsQ0FBUDtBQUNEO0FBRU0sU0FBU0MsYUFBVCxDQUF1QkosT0FBdkIsRUFBeUNHLEdBQXpDLEVBQStEO0FBQUE7O0FBQ3BFLE1BQU1FLFFBQW1CLDRCQUFHQyx5REFBcUIsQ0FBQ0gsR0FBRCxDQUF4Qix5RUFBaUMsRUFBMUQ7QUFDQSxTQUFPRSxRQUFRLENBQUNFLElBQVQsQ0FBYyxVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDQyxFQUFGLEtBQVNULE9BQU8sQ0FBQ1MsRUFBckI7QUFBQSxHQUFmLENBQVA7QUFDRDtBQUVNLFNBQVNDLG9CQUFULEdBQWdEO0FBQ3JELGFBQW1DO0FBQ25DLFNBQU9DLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsZ0JBQXJCLEtBQTBDLElBQXJELENBQVA7QUFDRDtBQUVNLFNBQVNDLHVCQUFULENBQWlDQyxRQUFqQyxFQUEyRTtBQUNoRixTQUFPQyxNQUFNLENBQUNDLElBQVAsQ0FBWUYsUUFBWixFQUFzQkcsTUFBdEIsQ0FBNkMsVUFBQ0MsV0FBRCxFQUFjakIsR0FBZCxFQUFzQjtBQUN4RWlCLGVBQVcsQ0FBQ2pCLEdBQUQsQ0FBWCwrSkFBdUJhLFFBQVEsQ0FBQ2IsR0FBRCxDQUEvQjtBQUNBLFdBQU9pQixXQUFQO0FBQ0QsR0FITSxFQUdKLEVBSEksQ0FBUDtBQUlEO0FBRU0sU0FBU0MsVUFBVCxDQUFvQmxCLEdBQXBCLEVBQXlDO0FBQzlDLFNBQU9BLEdBQUcsQ0FBQ21CLGlCQUFKLEdBQXdCQyxJQUF4QixHQUErQkMsT0FBL0IsQ0FBdUMsTUFBdkMsRUFBK0MsR0FBL0MsQ0FBUDtBQUNEIiwiZmlsZSI6Ii4vbGliL3RhZ3MudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEcmF3aW5nLCBUYWdEcmF3aW5nU2V0cyB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IHtcbiAgdGFnRHJhd2luZ1NldHMgYXMgZml4dHVyZVRhZ0RyYXdpbmdTZXRzLFxuICB0YWdzIGFzIGZpeHR1cmVUYWdzLFxufSBmcm9tICcuLi9fX2ZpeHR1cmVzX18nXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYWdzRm9yRHJhd2luZyhkcmF3aW5nOiBEcmF3aW5nKTogc3RyaW5nW10ge1xuICByZXR1cm4gZml4dHVyZVRhZ3MuZmlsdGVyKHRhZyA9PiBkcmF3aW5nSGFzVGFnKGRyYXdpbmcsIHRhZykpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmF3aW5nSGFzVGFnKGRyYXdpbmc6IERyYXdpbmcsIHRhZzogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IGRyYXdpbmdzOiBEcmF3aW5nW10gPSBmaXh0dXJlVGFnRHJhd2luZ1NldHNbdGFnXSA/PyBbXVxuICByZXR1cm4gZHJhd2luZ3Muc29tZShvID0+IG8uaWQgPT09IGRyYXdpbmcuaWQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTXlUYWdEcmF3aW5nU2V0cygpOiBUYWdEcmF3aW5nU2V0cyB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIHt9IGFzIFRhZ0RyYXdpbmdTZXRzXG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YWdEcmF3aW5nU2V0cycpIHx8ICd7fScpIGFzIFRhZ0RyYXdpbmdTZXRzXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkdXBsaWNhdGVUYWdEcmF3aW5nU2V0cyhvcmlnaW5hbDogVGFnRHJhd2luZ1NldHMpOiBUYWdEcmF3aW5nU2V0cyB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvcmlnaW5hbCkucmVkdWNlPFRhZ0RyYXdpbmdTZXRzPigoYWNjdW11bGF0b3IsIHRhZykgPT4ge1xuICAgIGFjY3VtdWxhdG9yW3RhZ10gPSBbLi4ub3JpZ2luYWxbdGFnXV1cbiAgICByZXR1cm4gYWNjdW11bGF0b3JcbiAgfSwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYWdTbHVnKHRhZzogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHRhZy50b0xvY2FsZUxvd2VyQ2FzZSgpLnRyaW0oKS5yZXBsYWNlKC9cXHMrL2csICctJylcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/tags.ts\n");

/***/ })

})