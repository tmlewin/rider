"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tailwind-styled-components */ \"./node_modules/tailwind-styled-components/dist/index.js\");\n/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\nflex flex-col h-screen w-screen bg-gray-200 p-4\\n\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\nbg-black text-white text-center  py-4 mt-8 self-center w-full cursor-pointer\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nvar Login = function() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Wrapper, {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Tech Guru\\\\Desktop\\\\Javascript\\\\rider\\\\pages\\\\login.js\",\n            lineNumber: 7,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SignInButton, {\n            __source: {\n                fileName: \"C:\\\\Users\\\\Tech Guru\\\\Desktop\\\\Javascript\\\\rider\\\\pages\\\\login.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: \"Sign in with Google\"\n        })\n    }));\n};\n_c = Login;\nvar Wrapper = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().div(_templateObject());\n_c1 = Wrapper;\nvar SignInButton = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().button(_templateObject1());\n_c2 = SignInButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Login\");\n$RefreshReg$(_c1, \"Wrapper\");\n$RefreshReg$(_c2, \"SignInButton\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QjtBQUNRO0FBQ1U7Ozs7Ozs7Ozs7Ozs7O1FBWXBCLENBR3ZCOzs7Ozs7Ozs7UUFDK0IsQ0FDNkM7Ozs7Ozs7QUFmNUUsR0FBSyxDQUFDRSxLQUFLLEdBQUcsUUFBUSxHQUFGLENBQUM7SUFDakIsTUFBTSxzRUFDREMsT0FBTzs7Ozs7Ozt1RkFDSEMsWUFBWTs7Ozs7OztzQkFBQyxDQUFtQjs7O0FBSTdDLENBQUM7S0FQS0YsS0FBSztBQVVYLEdBQUssQ0FBQ0MsT0FBTyxHQUFHRixxRUFBTTtNQUFoQkUsT0FBTztBQUliLEdBQUssQ0FBQ0MsWUFBWSxHQUFHSCx3RUFBUztNQUF4QkcsWUFBWTtBQWFsQiwrREFBZUYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sb2dpbi5qcz84MWIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICd0YWlsd2luZGNzcy90YWlsd2luZC5jc3MnXHJcbmltcG9ydCB0dyBmcm9tIFwidGFpbHdpbmQtc3R5bGVkLWNvbXBvbmVudHNcIlxyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxXcmFwcGVyPlxyXG4gICAgICAgICAgICA8U2lnbkluQnV0dG9uPlNpZ24gaW4gd2l0aCBHb29nbGU8L1NpZ25JbkJ1dHRvbj5cclxuXHJcbiAgICAgICAgPC9XcmFwcGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuY29uc3QgV3JhcHBlciA9IHR3LmRpdmBcclxuZmxleCBmbGV4LWNvbCBoLXNjcmVlbiB3LXNjcmVlbiBiZy1ncmF5LTIwMCBwLTRcclxuXHJcbmBcclxuY29uc3QgU2lnbkluQnV0dG9uID0gdHcuYnV0dG9uYFxyXG5iZy1ibGFjayB0ZXh0LXdoaXRlIHRleHQtY2VudGVyICBweS00IG10LTggc2VsZi1jZW50ZXIgdy1mdWxsIGN1cnNvci1wb2ludGVyYFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInR3IiwiTG9naW4iLCJXcmFwcGVyIiwiU2lnbkluQnV0dG9uIiwiZGl2IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ })

});