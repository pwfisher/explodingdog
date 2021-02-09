webpackHotUpdate_N_E("pages/my-tag/[id]",{

/***/ "./__fixtures__/tags.ts":
/*!******************************!*\
  !*** ./__fixtures__/tags.ts ***!
  \******************************/
/*! exports provided: tagDrawingSets, allTags, tags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tagDrawingSets\", function() { return tagDrawingSets; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"allTags\", function() { return allTags; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tags\", function() { return tags; });\n/* harmony import */ var _tagDrawingSets_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tagDrawingSets.json */ \"./__fixtures__/tagDrawingSets.json\");\nvar _tagDrawingSets_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./tagDrawingSets.json */ \"./__fixtures__/tagDrawingSets.json\", 1);\n\n/**\n * Tags are mostly lowercase, but not always. Exceptions include \"DoNotList\" and \"HomePage\".\n * Tags may include spaces. These become dashes in slugs.\n */\n\nvar unlistedTags = ['DoNotList', 'HomePage']; // in lists of tags\n\nvar tagDrawingSets = _tagDrawingSets_json__WEBPACK_IMPORTED_MODULE_0__;\nvar allTags = Object.keys(tagDrawingSets).sort();\nvar tags = allTags.filter(function (tag) {\n  return !unlistedTags.includes(tag);\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vX19maXh0dXJlc19fL3RhZ3MudHM/OGJmYiJdLCJuYW1lcyI6WyJ1bmxpc3RlZFRhZ3MiLCJ0YWdEcmF3aW5nU2V0cyIsInRhZ0RyYXdpbmdTZXRzSnNvbiIsImFsbFRhZ3MiLCJPYmplY3QiLCJrZXlzIiwic29ydCIsInRhZ3MiLCJmaWx0ZXIiLCJ0YWciLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsQ0FBQyxXQUFELEVBQWMsVUFBZCxDQUFyQixDLENBQStDOztBQUV4QyxJQUFNQyxjQUE4QixHQUFHQyxpREFBdkM7QUFDQSxJQUFNQyxPQUFpQixHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUosY0FBWixFQUE0QkssSUFBNUIsRUFBMUI7QUFDQSxJQUFNQyxJQUFjLEdBQUdKLE9BQU8sQ0FBQ0ssTUFBUixDQUFlLFVBQUFDLEdBQUc7QUFBQSxTQUFJLENBQUNULFlBQVksQ0FBQ1UsUUFBYixDQUFzQkQsR0FBdEIsQ0FBTDtBQUFBLENBQWxCLENBQXZCIiwiZmlsZSI6Ii4vX19maXh0dXJlc19fL3RhZ3MudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYWdEcmF3aW5nU2V0cyB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IHRhZ0RyYXdpbmdTZXRzSnNvbiBmcm9tICcuL3RhZ0RyYXdpbmdTZXRzLmpzb24nXG5cbi8qKlxuICogVGFncyBhcmUgbW9zdGx5IGxvd2VyY2FzZSwgYnV0IG5vdCBhbHdheXMuIEV4Y2VwdGlvbnMgaW5jbHVkZSBcIkRvTm90TGlzdFwiIGFuZCBcIkhvbWVQYWdlXCIuXG4gKiBUYWdzIG1heSBpbmNsdWRlIHNwYWNlcy4gVGhlc2UgYmVjb21lIGRhc2hlcyBpbiBzbHVncy5cbiAqL1xuXG5jb25zdCB1bmxpc3RlZFRhZ3MgPSBbJ0RvTm90TGlzdCcsICdIb21lUGFnZSddIC8vIGluIGxpc3RzIG9mIHRhZ3NcblxuZXhwb3J0IGNvbnN0IHRhZ0RyYXdpbmdTZXRzOiBUYWdEcmF3aW5nU2V0cyA9IHRhZ0RyYXdpbmdTZXRzSnNvbiBhcyBUYWdEcmF3aW5nU2V0c1xuZXhwb3J0IGNvbnN0IGFsbFRhZ3M6IHN0cmluZ1tdID0gT2JqZWN0LmtleXModGFnRHJhd2luZ1NldHMpLnNvcnQoKVxuZXhwb3J0IGNvbnN0IHRhZ3M6IHN0cmluZ1tdID0gYWxsVGFncy5maWx0ZXIodGFnID0+ICF1bmxpc3RlZFRhZ3MuaW5jbHVkZXModGFnKSlcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./__fixtures__/tags.ts\n");

/***/ })

})