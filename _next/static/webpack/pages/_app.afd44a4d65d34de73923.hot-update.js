webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/AppFlags.tsx":
/*!*********************************!*\
  !*** ./components/AppFlags.tsx ***!
  \*********************************/
/*! exports provided: AppFlags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppFlags\", function() { return AppFlags; });\n/* harmony import */ var _Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar flags = ['myTags'];\nvar AppFlags = function AppFlags() {\n  _s();\n\n  //@ts-ignore (isReady is new canary feature, not in type declaration)\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])(),\n      query = _useRouter.query,\n      isReady = _useRouter.isReady;\n\n  var _useCookies = Object(react_cookie__WEBPACK_IMPORTED_MODULE_3__[\"useCookies\"])(),\n      _useCookies2 = Object(_Users_pfisher_Code_pwfisher_explodingdog_explorer_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useCookies, 2),\n      cookies = _useCookies2[0],\n      setCookie = _useCookies2[1];\n\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    console.log(query);\n    flags.forEach(function (flag) {\n      var key = \"feature__\".concat(flag);\n      if ((query === null || query === void 0 ? void 0 : query[key]) === 'on' && cookies[key] !== 'on') setCookie(key, 'on', {\n        path: '/'\n      });\n      if ((query === null || query === void 0 ? void 0 : query[key]) === 'off' && cookies[key] !== 'off') setCookie(key, 'off', {\n        path: '/'\n      });\n    });\n  }, [query]);\n  return null;\n};\n\n_s(AppFlags, \"1SF4iVnW4F5fscQxn44aTM88mr8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"], react_cookie__WEBPACK_IMPORTED_MODULE_3__[\"useCookies\"]];\n});\n\n_c = AppFlags;\n\nvar _c;\n\n$RefreshReg$(_c, \"AppFlags\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBGbGFncy50c3g/ODZlNyJdLCJuYW1lcyI6WyJmbGFncyIsIkFwcEZsYWdzIiwidXNlUm91dGVyIiwicXVlcnkiLCJpc1JlYWR5IiwidXNlQ29va2llcyIsImNvb2tpZXMiLCJzZXRDb29raWUiLCJSZWFjdCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwiZmxhZyIsImtleSIsInBhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRyxDQUFDLFFBQUQsQ0FBZDtBQUVPLElBQU1DLFFBQWtCLEdBQUcsU0FBckJBLFFBQXFCLEdBQU07QUFBQTs7QUFDdEM7QUFEc0MsbUJBRVhDLDZEQUFTLEVBRkU7QUFBQSxNQUU5QkMsS0FGOEIsY0FFOUJBLEtBRjhCO0FBQUEsTUFFdkJDLE9BRnVCLGNBRXZCQSxPQUZ1Qjs7QUFBQSxvQkFHVEMsK0RBQVUsRUFIRDtBQUFBO0FBQUEsTUFHL0JDLE9BSCtCO0FBQUEsTUFHdEJDLFNBSHNCOztBQUt0Q0MsOENBQUssQ0FBQ0MsU0FBTixDQUFnQixZQUFNO0FBQ3BCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWVIsS0FBWjtBQUNBSCxTQUFLLENBQUNZLE9BQU4sQ0FBYyxVQUFBQyxJQUFJLEVBQUk7QUFDcEIsVUFBTUMsR0FBRyxzQkFBZUQsSUFBZixDQUFUO0FBQ0EsVUFBSSxDQUFBVixLQUFLLFNBQUwsSUFBQUEsS0FBSyxXQUFMLFlBQUFBLEtBQUssQ0FBR1csR0FBSCxDQUFMLE1BQWlCLElBQWpCLElBQXlCUixPQUFPLENBQUNRLEdBQUQsQ0FBUCxLQUFpQixJQUE5QyxFQUFvRFAsU0FBUyxDQUFDTyxHQUFELEVBQU0sSUFBTixFQUFZO0FBQUVDLFlBQUksRUFBRTtBQUFSLE9BQVosQ0FBVDtBQUNwRCxVQUFJLENBQUFaLEtBQUssU0FBTCxJQUFBQSxLQUFLLFdBQUwsWUFBQUEsS0FBSyxDQUFHVyxHQUFILENBQUwsTUFBaUIsS0FBakIsSUFBMEJSLE9BQU8sQ0FBQ1EsR0FBRCxDQUFQLEtBQWlCLEtBQS9DLEVBQXNEUCxTQUFTLENBQUNPLEdBQUQsRUFBTSxLQUFOLEVBQWE7QUFBRUMsWUFBSSxFQUFFO0FBQVIsT0FBYixDQUFUO0FBQ3ZELEtBSkQ7QUFLRCxHQVBELEVBT0csQ0FBQ1osS0FBRCxDQVBIO0FBU0EsU0FBTyxJQUFQO0FBQ0QsQ0FmTTs7R0FBTUYsUTtVQUVnQkMscUQsRUFDRUcsdUQ7OztLQUhsQkosUSIsImZpbGUiOiIuL2NvbXBvbmVudHMvQXBwRmxhZ3MudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJ1xuXG5jb25zdCBmbGFncyA9IFsnbXlUYWdzJ11cblxuZXhwb3J0IGNvbnN0IEFwcEZsYWdzOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgLy9AdHMtaWdub3JlIChpc1JlYWR5IGlzIG5ldyBjYW5hcnkgZmVhdHVyZSwgbm90IGluIHR5cGUgZGVjbGFyYXRpb24pXG4gIGNvbnN0IHsgcXVlcnksIGlzUmVhZHkgfSA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFtjb29raWVzLCBzZXRDb29raWVdID0gdXNlQ29va2llcygpXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhxdWVyeSlcbiAgICBmbGFncy5mb3JFYWNoKGZsYWcgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gYGZlYXR1cmVfXyR7ZmxhZ31gXG4gICAgICBpZiAocXVlcnk/LltrZXldID09PSAnb24nICYmIGNvb2tpZXNba2V5XSAhPT0gJ29uJykgc2V0Q29va2llKGtleSwgJ29uJywgeyBwYXRoOiAnLycgfSlcbiAgICAgIGlmIChxdWVyeT8uW2tleV0gPT09ICdvZmYnICYmIGNvb2tpZXNba2V5XSAhPT0gJ29mZicpIHNldENvb2tpZShrZXksICdvZmYnLCB7IHBhdGg6ICcvJyB9KVxuICAgIH0pXG4gIH0sIFtxdWVyeV0pXG5cbiAgcmV0dXJuIG51bGxcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AppFlags.tsx\n");

/***/ })

})