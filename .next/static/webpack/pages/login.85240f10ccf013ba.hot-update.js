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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tailwind-styled-components */ \"./node_modules/tailwind-styled-components/dist/index.js\");\n/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\nflex flex-col h-screen w-screen bg-gray-200 p-4\\n\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\nbg-black text-white text-center  py-4 mt-8 self-center w-full cursor-pointer\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\nh-20 w-auto object-contain self-start\\n\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\ntext-5xl pt-4 text-gray-500\\n\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\nobject-contain w-full\\n\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar Login = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.onAuthStateChanged)(_firebase__WEBPACK_IMPORTED_MODULE_6__.auth, function(user) {\n            if (user) {\n                router.push('/');\n            }\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Tech Guru\\\\Desktop\\\\Javascript\\\\rider\\\\pages\\\\login.js\",\n            lineNumber: 22,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Uberlogo, {\n                src: \"https://i.ibb.co/n6LWQM4/Post.png\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Tech Guru\\\\Desktop\\\\Javascript\\\\rider\\\\pages\\\\login.js\",\n                    lineNumber: 23,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Title, {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Tech Guru\\\\Desktop\\\\Javascript\\\\rider\\\\pages\\\\login.js\",\n                    lineNumber: 24,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: \"Login to access your account\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HeadImage, {\n                src: \"https://i.ibb.co/CsV9RYZ/login-image.png\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Tech Guru\\\\Desktop\\\\Javascript\\\\rider\\\\pages\\\\login.js\",\n                    lineNumber: 25,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SignInButton, {\n                onClick: function() {\n                    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_5__.signInWithPopup)(_firebase__WEBPACK_IMPORTED_MODULE_6__.auth, _firebase__WEBPACK_IMPORTED_MODULE_6__.provider);\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Tech Guru\\\\Desktop\\\\Javascript\\\\rider\\\\pages\\\\login.js\",\n                    lineNumber: 26,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: \"Sign in with Google\"\n            })\n        ]\n    }));\n};\n_s(Login, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Login;\nvar Wrapper = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().div(_templateObject());\n_c1 = Wrapper;\nvar SignInButton = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().button(_templateObject1());\n_c2 = SignInButton;\nvar Uberlogo = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().img(_templateObject2());\n_c3 = Uberlogo;\nvar Title = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().div(_templateObject3());\n_c4 = Title;\nvar HeadImage = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().img(_templateObject4());\n_c5 = HeadImage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Login\");\n$RefreshReg$(_c1, \"Wrapper\");\n$RefreshReg$(_c2, \"SignInButton\");\n$RefreshReg$(_c3, \"Uberlogo\");\n$RefreshReg$(_c4, \"Title\");\n$RefreshReg$(_c5, \"HeadImage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDUTtBQUNVO0FBQ0E7QUFDTjtBQUM2QjtBQUN6Qjs7Ozs7Ozs7Ozs7Ozs7UUEwQmxCLENBR3ZCOzs7Ozs7Ozs7UUFDK0IsQ0FDNkM7Ozs7Ozs7OztRQUNwRCxDQUd4Qjs7Ozs7Ozs7O1FBQ3FCLENBR3JCOzs7Ozs7Ozs7UUFDeUIsQ0FHekI7Ozs7Ozs7O0FBdkNBLEdBQUssQ0FBQ1MsS0FBSyxHQUFHLFFBQVEsR0FBRixDQUFDOztJQUNqQixHQUFLLENBQUNDLE1BQU0sR0FBR04sc0RBQVM7SUFDeEJELGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDYkcsaUVBQWtCLENBQUNDLDJDQUFJLEVBQUNJLFFBQVEsQ0FBUkEsSUFBSSxFQUFJLENBQUM7WUFDN0IsRUFBRSxFQUFDQSxJQUFJLEVBQUMsQ0FBQztnQkFDTEQsTUFBTSxDQUFDRSxJQUFJLENBQUMsQ0FBRztZQUNuQixDQUFDO1FBQ0wsQ0FBQztJQUVMLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDSixNQUFNLHVFQUNEQyxPQUFPOzs7Ozs7OztpRkFDSEMsUUFBUTtnQkFBQ0MsR0FBRyxFQUFDLENBQW1DOzs7Ozs7OztpRkFDaERDLEtBQUs7Ozs7Ozs7MEJBQUMsQ0FBNEI7O2lGQUNsQ0MsU0FBUztnQkFBQ0YsR0FBRyxFQUFDLENBQTBDOzs7Ozs7OztpRkFDeERHLFlBQVk7Z0JBQUNDLE9BQU8sRUFBRSxRQUFRO29CQUFKZCxNQUFNLENBQU5BLDhEQUFlLENBQUNFLDJDQUFJLEVBQUNDLCtDQUFROzs7Ozs7OzswQkFBRyxDQUFtQjs7OztBQUkxRixDQUFDO0dBbkJLQyxLQUFLOztRQUNRTCxrREFBUzs7O0tBRHRCSyxLQUFLO0FBc0JYLEdBQUssQ0FBQ0ksT0FBTyxHQUFHWixxRUFBTTtNQUFoQlksT0FBTztBQUliLEdBQUssQ0FBQ0ssWUFBWSxHQUFHakIsd0VBQVM7TUFBeEJpQixZQUFZO0FBRWxCLEdBQUssQ0FBQ0osUUFBUSxHQUFHYixxRUFBTTtNQUFqQmEsUUFBUTtBQUlkLEdBQUssQ0FBQ0UsS0FBSyxHQUFHZixxRUFBTTtNQUFkZSxLQUFLO0FBSVgsR0FBSyxDQUFDQyxTQUFTLEdBQUdoQixxRUFBTTtNQUFsQmdCLFNBQVM7QUFlZiwrREFBZVIsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sb2dpbi5qcz84MWIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICd0YWlsd2luZGNzcy90YWlsd2luZC5jc3MnXHJcbmltcG9ydCB0dyBmcm9tIFwidGFpbHdpbmQtc3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgc2lnbkluV2l0aFBvcHVwLG9uQXV0aFN0YXRlQ2hhbmdlZCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnXHJcbmltcG9ydCB7YXV0aCxwcm92aWRlcn0gZnJvbSAnLi4vZmlyZWJhc2UnXHJcblxyXG5cclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsdXNlciA9PiB7XHJcbiAgICAgICAgICAgIGlmKHVzZXIpe1xyXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9LFtdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8V3JhcHBlcj5cclxuICAgICAgICAgICAgPFViZXJsb2dvIHNyYz1cImh0dHBzOi8vaS5pYmIuY28vbjZMV1FNNC9Qb3N0LnBuZ1wiLz5cclxuICAgICAgICAgICAgPFRpdGxlPkxvZ2luIHRvIGFjY2VzcyB5b3VyIGFjY291bnQ8L1RpdGxlPlxyXG4gICAgICAgICAgICA8SGVhZEltYWdlIHNyYz1cImh0dHBzOi8vaS5pYmIuY28vQ3NWOVJZWi9sb2dpbi1pbWFnZS5wbmdcIi8+XHJcbiAgICAgICAgICAgIDxTaWduSW5CdXR0b24gb25DbGljaz17KCk9PnNpZ25JbldpdGhQb3B1cChhdXRoLHByb3ZpZGVyKX0+U2lnbiBpbiB3aXRoIEdvb2dsZTwvU2lnbkluQnV0dG9uPlxyXG5cclxuICAgICAgICA8L1dyYXBwZXI+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5jb25zdCBXcmFwcGVyID0gdHcuZGl2YFxyXG5mbGV4IGZsZXgtY29sIGgtc2NyZWVuIHctc2NyZWVuIGJnLWdyYXktMjAwIHAtNFxyXG5cclxuYFxyXG5jb25zdCBTaWduSW5CdXR0b24gPSB0dy5idXR0b25gXHJcbmJnLWJsYWNrIHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgIHB5LTQgbXQtOCBzZWxmLWNlbnRlciB3LWZ1bGwgY3Vyc29yLXBvaW50ZXJgXHJcbmNvbnN0IFViZXJsb2dvID0gdHcuaW1nYFxyXG5oLTIwIHctYXV0byBvYmplY3QtY29udGFpbiBzZWxmLXN0YXJ0XHJcblxyXG5gXHJcbmNvbnN0IFRpdGxlID0gdHcuZGl2YFxyXG50ZXh0LTV4bCBwdC00IHRleHQtZ3JheS01MDBcclxuXHJcbmBcclxuY29uc3QgSGVhZEltYWdlID0gdHcuaW1nYFxyXG5vYmplY3QtY29udGFpbiB3LWZ1bGxcclxuXHJcbmBcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ0dyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwic2lnbkluV2l0aFBvcHVwIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiYXV0aCIsInByb3ZpZGVyIiwiTG9naW4iLCJyb3V0ZXIiLCJ1c2VyIiwicHVzaCIsIldyYXBwZXIiLCJVYmVybG9nbyIsInNyYyIsIlRpdGxlIiwiSGVhZEltYWdlIiwiU2lnbkluQnV0dG9uIiwib25DbGljayIsImRpdiIsImJ1dHRvbiIsImltZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ })

});