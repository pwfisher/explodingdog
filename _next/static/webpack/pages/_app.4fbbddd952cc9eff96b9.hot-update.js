webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/AppFlags.tsx":
/*!*********************************!*\
  !*** ./components/AppFlags.tsx ***!
  \*********************************/
/*! exports provided: AppFlags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppFlags\", function() { return AppFlags; });\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _lib_useQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/useQuery */ \"./lib/useQuery.ts\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\nvar flags = ['myTags'];\nvar AppFlags = function AppFlags() {\n  _s();\n\n  var query = Object(_lib_useQuery__WEBPACK_IMPORTED_MODULE_1__[\"useQuery\"])();\n\n  var _useCookies = Object(react_cookie__WEBPACK_IMPORTED_MODULE_2__[\"useCookies\"])(),\n      _useCookies2 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useCookies, 2),\n      setCookie = _useCookies2[1];\n\n  flags.forEach(function (flag) {\n    var key = \"features__\".concat(flag);\n    if ((query === null || query === void 0 ? void 0 : query[key]) === 'on') setCookie(key, 'on', {\n      path: '/'\n    });\n    if ((query === null || query === void 0 ? void 0 : query[key]) === 'off') setCookie(key, 'off');\n  });\n  return null;\n};\n\n_s(AppFlags, \"qPqzPHsQuuvc2X+kc5KDZ7L1/X8=\", false, function () {\n  return [_lib_useQuery__WEBPACK_IMPORTED_MODULE_1__[\"useQuery\"], react_cookie__WEBPACK_IMPORTED_MODULE_2__[\"useCookies\"]];\n});\n\n_c = AppFlags;\n\nvar _c;\n\n$RefreshReg$(_c, \"AppFlags\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBGbGFncy50c3g/ODZlNyJdLCJuYW1lcyI6WyJmbGFncyIsIkFwcEZsYWdzIiwicXVlcnkiLCJ1c2VRdWVyeSIsInVzZUNvb2tpZXMiLCJzZXRDb29raWUiLCJmb3JFYWNoIiwiZmxhZyIsImtleSIsInBhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUcsQ0FBQyxRQUFELENBQWQ7QUFFTyxJQUFNQyxRQUFrQixHQUFHLFNBQXJCQSxRQUFxQixHQUFNO0FBQUE7O0FBQ3RDLE1BQU1DLEtBQUssR0FBR0MsOERBQVEsRUFBdEI7O0FBRHNDLG9CQUVoQkMsK0RBQVUsRUFGTTtBQUFBO0FBQUEsTUFFN0JDLFNBRjZCOztBQUl0Q0wsT0FBSyxDQUFDTSxPQUFOLENBQWMsVUFBQUMsSUFBSSxFQUFJO0FBQ3BCLFFBQU1DLEdBQUcsdUJBQWdCRCxJQUFoQixDQUFUO0FBQ0EsUUFBSSxDQUFBTCxLQUFLLFNBQUwsSUFBQUEsS0FBSyxXQUFMLFlBQUFBLEtBQUssQ0FBR00sR0FBSCxDQUFMLE1BQWlCLElBQXJCLEVBQTJCSCxTQUFTLENBQUNHLEdBQUQsRUFBTSxJQUFOLEVBQVk7QUFBRUMsVUFBSSxFQUFFO0FBQVIsS0FBWixDQUFUO0FBQzNCLFFBQUksQ0FBQVAsS0FBSyxTQUFMLElBQUFBLEtBQUssV0FBTCxZQUFBQSxLQUFLLENBQUdNLEdBQUgsQ0FBTCxNQUFpQixLQUFyQixFQUE0QkgsU0FBUyxDQUFDRyxHQUFELEVBQU0sS0FBTixDQUFUO0FBQzdCLEdBSkQ7QUFNQSxTQUFPLElBQVA7QUFDRCxDQVhNOztHQUFNUCxRO1VBQ0dFLHNELEVBQ1FDLHVEOzs7S0FGWEgsUSIsImZpbGUiOiIuL2NvbXBvbmVudHMvQXBwRmxhZ3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICcuLi9saWIvdXNlUXVlcnknXG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJ1xuXG5jb25zdCBmbGFncyA9IFsnbXlUYWdzJ11cblxuZXhwb3J0IGNvbnN0IEFwcEZsYWdzOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgcXVlcnkgPSB1c2VRdWVyeSgpXG4gIGNvbnN0IFssIHNldENvb2tpZV0gPSB1c2VDb29raWVzKClcblxuICBmbGFncy5mb3JFYWNoKGZsYWcgPT4ge1xuICAgIGNvbnN0IGtleSA9IGBmZWF0dXJlc19fJHtmbGFnfWBcbiAgICBpZiAocXVlcnk/LltrZXldID09PSAnb24nKSBzZXRDb29raWUoa2V5LCAnb24nLCB7IHBhdGg6ICcvJyB9KVxuICAgIGlmIChxdWVyeT8uW2tleV0gPT09ICdvZmYnKSBzZXRDb29raWUoa2V5LCAnb2ZmJylcbiAgfSlcblxuICByZXR1cm4gbnVsbFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AppFlags.tsx\n");

/***/ })

})