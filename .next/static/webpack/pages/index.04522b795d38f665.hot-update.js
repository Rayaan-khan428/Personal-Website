"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/SocialButton.tsx":
/*!*************************************!*\
  !*** ./components/SocialButton.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\nconst SocialButton = (param)=>{\n    let { children , bgColor =\"black\"  } = param;\n    let bgHoverColorclass;\n    switch(bgColor){\n        case \"dribble\":\n            bgHoverColorclass = \"hover:bg-dribble\";\n            break;\n        case \"instagram\":\n            bgHoverColorclass = \"hover:bg-instagram\";\n            break;\n        case \"twitter\":\n            bgHoverColorclass = \"hover:bg-twitter\";\n            break;\n        case \"linkedin\":\n            bgHoverColorclass = \"hover:bg-linkedin\";\n            break;\n        default:\n            bgHoverColorclass = \"hover:bg-black\";\n            break;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.button, {\n        whileTap: {\n            scale: 0.95\n        },\n        onClick: handleClick,\n        className: \"group h-12 w-12 bg-white \".concat(bgHoverColorclass, \" rounded-full transition-colors duration-200 ease-in-out flex justify-center items-center\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"fill-black group-hover:fill-white transition-colors duration-200 ease-in-out\",\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/rayaankhan/repos/Personal-Website/components/SocialButton.tsx\",\n            lineNumber: 38,\n            columnNumber: 17\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/rayaankhan/repos/Personal-Website/components/SocialButton.tsx\",\n        lineNumber: 33,\n        columnNumber: 13\n    }, undefined);\n};\n_c = SocialButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SocialButton);\nvar _c;\n$RefreshReg$(_c, \"SocialButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NvY2lhbEJ1dHRvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QztBQUNGO0FBUXRDLE1BQU1FLGVBQWdDLFNBQW1DO1FBQWxDLEVBQUNDLFNBQVEsRUFBRUMsU0FBVSxRQUFPLEVBQUM7SUFFaEUsSUFBSUM7SUFFSixPQUFRRDtRQUNKLEtBQUs7WUFDREMsb0JBQW9CO1lBQ3BCLEtBQU07UUFDVixLQUFLO1lBQ0RBLG9CQUFvQjtZQUNwQixLQUFNO1FBQ1YsS0FBSztZQUNEQSxvQkFBb0I7WUFDcEIsS0FBTTtRQUNWLEtBQUs7WUFDREEsb0JBQW9CO1lBQ3BCLEtBQU07UUFDVjtZQUNJQSxvQkFBb0I7WUFDcEIsS0FBTTtJQUNWO0lBRUEscUJBQ0ksOERBQUNKLHdEQUFhO1FBQ1ZNLFVBQVU7WUFBRUMsT0FBTztRQUFLO1FBQ3hCQyxTQUFTQztRQUNUQyxXQUFXLDRCQUE4QyxPQUFsQk4sbUJBQWtCO2tCQUV6RCw0RUFBQ087WUFBSUQsV0FBVTtzQkFDVlI7Ozs7Ozs7Ozs7O0FBSWpCO0tBakNFRDtBQW1DRiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NvY2lhbEJ1dHRvbi50c3g/M2ZjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIGNoaWxkcmVuOiBSZWFjdE5vZGVcbiAgICBiZ0NvbG9yPzogc3RyaW5nIHwgdW5kZWZpbmVkXG59XG5cblxuY29uc3QgU29jaWFsQnV0dG9uOiBSZWFjdC5GQzxQcm9wcz4gPSAoe2NoaWxkcmVuLCBiZ0NvbG9yID0gXCJibGFja1wifSkgPT4ge1xuXG4gICAgbGV0IGJnSG92ZXJDb2xvcmNsYXNzO1xuXG4gICAgc3dpdGNoIChiZ0NvbG9yKSB7XG4gICAgICAgIGNhc2UgXCJkcmliYmxlXCI6XG4gICAgICAgICAgICBiZ0hvdmVyQ29sb3JjbGFzcyA9IFwiaG92ZXI6YmctZHJpYmJsZVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJpbnN0YWdyYW1cIjpcbiAgICAgICAgICAgIGJnSG92ZXJDb2xvcmNsYXNzID0gXCJob3ZlcjpiZy1pbnN0YWdyYW1cIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwidHdpdHRlclwiOlxuICAgICAgICAgICAgYmdIb3ZlckNvbG9yY2xhc3MgPSBcImhvdmVyOmJnLXR3aXR0ZXJcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibGlua2VkaW5cIjpcbiAgICAgICAgICAgIGJnSG92ZXJDb2xvcmNsYXNzID0gXCJob3ZlcjpiZy1saW5rZWRpblwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBiZ0hvdmVyQ29sb3JjbGFzcyA9IFwiaG92ZXI6YmctYmxhY2tcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxtb3Rpb24uYnV0dG9uXG4gICAgICAgICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOTUgfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bncm91cCBoLTEyIHctMTIgYmctd2hpdGUgJHtiZ0hvdmVyQ29sb3JjbGFzc30gcm91bmRlZC1mdWxsIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcmB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpbGwtYmxhY2sgZ3JvdXAtaG92ZXI6ZmlsbC13aGl0ZSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXQnPlxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21vdGlvbi5idXR0b24+XG4gICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIGV4cG9ydCBkZWZhdWx0IFNvY2lhbEJ1dHRvbjtcbiAgICAiXSwibmFtZXMiOlsiUmVhY3QiLCJtb3Rpb24iLCJTb2NpYWxCdXR0b24iLCJjaGlsZHJlbiIsImJnQ29sb3IiLCJiZ0hvdmVyQ29sb3JjbGFzcyIsImJ1dHRvbiIsIndoaWxlVGFwIiwic2NhbGUiLCJvbkNsaWNrIiwiaGFuZGxlQ2xpY2siLCJjbGFzc05hbWUiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SocialButton.tsx\n"));

/***/ })

});