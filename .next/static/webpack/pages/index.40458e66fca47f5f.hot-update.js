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

/***/ "./components/Experience.tsx":
/*!***********************************!*\
  !*** ./components/Experience.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\nconst ExperiencePreview = (param)=>{\n    let { companyName =\"Company Name\" , role =\"Your Role\" , experiencePoints =[\n        \"Experience point 1\",\n        \"Experience point 2\"\n    ] , bgColor =\"#ffffff\" , dark =false , logoUrl =\"\" // Provide a default logo url if needed\n      } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        className: \"rounded-xl overflow-hidden shadow-lg \".concat(dark ? \"dark\" : \"\"),\n        style: {\n            background: bgColor\n        },\n        initial: \"initial\",\n        whileInView: \"animate\",\n        variants: PreviewAnimation,\n        whileHover: {\n            scale: 1.02\n        },\n        transition: {\n            duration: 0.3,\n            ease: \"easeOut\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-full w-full p-6 grid grid-cols-[auto,120px] items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"font-bold text-xl dark:text-white\",\n                            children: companyName\n                        }, void 0, false, {\n                            fileName: \"/Users/rayaankhan/repos/Personal-Website/components/Experience.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"font-medium text-lg dark:text-white\",\n                            children: role\n                        }, void 0, false, {\n                            fileName: \"/Users/rayaankhan/repos/Personal-Website/components/Experience.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"list-disc list-inside space-y-2 text-sm text-zinc-500 dark:text-zinc-300 mt-4\",\n                            children: experiencePoints.map((point, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: point\n                                }, index, false, {\n                                    fileName: \"/Users/rayaankhan/repos/Personal-Website/components/Experience.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 25\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/rayaankhan/repos/Personal-Website/components/Experience.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rayaankhan/repos/Personal-Website/components/Experience.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                }, undefined),\n                logoUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-end items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: logoUrl,\n                        alt: \"\".concat(companyName, \" Logo\"),\n                        className: \"h-12 w-12\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rayaankhan/repos/Personal-Website/components/Experience.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/rayaankhan/repos/Personal-Website/components/Experience.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rayaankhan/repos/Personal-Website/components/Experience.tsx\",\n            lineNumber: 34,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/rayaankhan/repos/Personal-Website/components/Experience.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ExperiencePreview;\nconst PreviewAnimation = {\n    initial: {\n        y: 30,\n        opacity: 0,\n        scale: 0.98\n    },\n    animate: {\n        y: 0,\n        opacity: 1,\n        scale: 1,\n        transition: {\n            type: \"spring\",\n            mass: 0.5,\n            damping: 10,\n            stiffness: 100,\n            when: \"beforeChildren\"\n        }\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExperiencePreview);\nvar _c;\n$RefreshReg$(_c, \"ExperiencePreview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0V4cGVyaWVuY2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMEI7QUFDYTtBQVd2QyxNQUFNRSxvQkFBcUMsU0FPckM7UUFQc0MsRUFDeENDLGFBQWMsZUFBYyxFQUM1QkMsTUFBTyxZQUFXLEVBQ2xCQyxrQkFBbUI7UUFBQztRQUFzQjtLQUFxQixHQUMvREMsU0FBVSxVQUFTLEVBQ25CQyxNQUFPLEtBQUssR0FDWkMsU0FBVSxHQUFHLHVDQUF1QztLQUF4QyxFQUNmO0lBQ0MscUJBQ0UsOERBQUNQLHFEQUFVO1FBQ1RTLFdBQVcsd0NBQTJELE9BQW5CSCxPQUFPLFNBQVMsRUFBRTtRQUNyRUksT0FBTztZQUFFQyxZQUFZTjtRQUFRO1FBQzdCTyxTQUFRO1FBQ1JDLGFBQVk7UUFDWkMsVUFBVUM7UUFDVkMsWUFBWTtZQUFFQyxPQUFPO1FBQUs7UUFDMUJDLFlBQVk7WUFDUkMsVUFBVTtZQUNWQyxNQUFNO1FBQ1Y7a0JBRUUsNEVBQUNaO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDRDs7c0NBQ0csOERBQUNhOzRCQUFHWixXQUFVO3NDQUFxQ1A7Ozs7OztzQ0FDbkQsOERBQUNvQjs0QkFBR2IsV0FBVTtzQ0FBdUNOOzs7Ozs7c0NBQ3JELDhEQUFDb0I7NEJBQUdkLFdBQVU7c0NBQ1RMLGlCQUFpQm9CLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQyxzQkFDMUIsOERBQUNDOzhDQUFnQkY7bUNBQVJDOzs7Ozs7Ozs7Ozs7Ozs7O2dCQUlwQm5CLHlCQUNHLDhEQUFDQztvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQ21CO3dCQUFJQyxLQUFLdEI7d0JBQVN1QixLQUFLLEdBQWUsT0FBWjVCLGFBQVk7d0JBQVFPLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNN0U7S0F2Q01SO0FBeUNOLE1BQU1jLG1CQUFtQjtJQUNyQkgsU0FBUztRQUNQbUIsR0FBRztRQUNIQyxTQUFTO1FBQ1RmLE9BQU87SUFDVDtJQUNBZ0IsU0FBUztRQUNQRixHQUFHO1FBQ0hDLFNBQVM7UUFDVGYsT0FBTztRQUNQQyxZQUFZO1lBQ1ZnQixNQUFNO1lBQ05DLE1BQU07WUFDTkMsU0FBUztZQUNUQyxXQUFXO1lBQ1hDLE1BQU07UUFDUjtJQUNGO0FBQ0o7QUFFQSwrREFBZXJDLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0V4cGVyaWVuY2UudHN4PzRlOGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIGNvbXBhbnlOYW1lPzogc3RyaW5nO1xuICAgIHJvbGU/OiBzdHJpbmc7XG4gICAgZXhwZXJpZW5jZVBvaW50cz86IHN0cmluZ1tdO1xuICAgIGJnQ29sb3I/OiBzdHJpbmc7XG4gICAgZGFyaz86IGJvb2xlYW47XG4gICAgbG9nb1VybD86IHN0cmluZztcbn1cblxuY29uc3QgRXhwZXJpZW5jZVByZXZpZXc6IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gICAgY29tcGFueU5hbWUgPSBcIkNvbXBhbnkgTmFtZVwiLFxuICAgIHJvbGUgPSBcIllvdXIgUm9sZVwiLFxuICAgIGV4cGVyaWVuY2VQb2ludHMgPSBbXCJFeHBlcmllbmNlIHBvaW50IDFcIiwgXCJFeHBlcmllbmNlIHBvaW50IDJcIl0sXG4gICAgYmdDb2xvciA9IFwiI2ZmZmZmZlwiLFxuICAgIGRhcmsgPSBmYWxzZSxcbiAgICBsb2dvVXJsID0gXCJcIiAvLyBQcm92aWRlIGEgZGVmYXVsdCBsb2dvIHVybCBpZiBuZWVkZWRcbn0pID0+IHtcbiAgcmV0dXJuICggXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGNsYXNzTmFtZT17YHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy1sZyAke2RhcmsgPyBcImRhcmtcIiA6IFwiXCJ9YH1cbiAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IGJnQ29sb3IgfX1cbiAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcbiAgICAgIHdoaWxlSW5WaWV3PVwiYW5pbWF0ZVwiXG4gICAgICB2YXJpYW50cz17UHJldmlld0FuaW1hdGlvbn1cbiAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMDIgfX1cbiAgICAgIHRyYW5zaXRpb249e3sgXG4gICAgICAgICAgZHVyYXRpb246IDAuMywgXG4gICAgICAgICAgZWFzZTogXCJlYXNlT3V0XCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtZnVsbCB3LWZ1bGwgcC02IGdyaWQgZ3JpZC1jb2xzLVthdXRvLDEyMHB4XSBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdmb250LWJvbGQgdGV4dC14bCBkYXJrOnRleHQtd2hpdGUnPntjb21wYW55TmFtZX08L2gyPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J2ZvbnQtbWVkaXVtIHRleHQtbGcgZGFyazp0ZXh0LXdoaXRlJz57cm9sZX08L2gzPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2xpc3QtZGlzYyBsaXN0LWluc2lkZSBzcGFjZS15LTIgdGV4dC1zbSB0ZXh0LXppbmMtNTAwIGRhcms6dGV4dC16aW5jLTMwMCBtdC00Jz5cbiAgICAgICAgICAgICAgICAgICAge2V4cGVyaWVuY2VQb2ludHMubWFwKChwb2ludCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT57cG9pbnR9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2xvZ29VcmwgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvVXJsfSBhbHQ9e2Ake2NvbXBhbnlOYW1lfSBMb2dvYH0gY2xhc3NOYW1lPSdoLTEyIHctMTInIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICA8L21vdGlvbi5kaXY+XG4gIClcbn1cblxuY29uc3QgUHJldmlld0FuaW1hdGlvbiA9IHtcbiAgICBpbml0aWFsOiB7XG4gICAgICB5OiAzMCxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBzY2FsZTogMC45OCxcbiAgICB9LFxuICAgIGFuaW1hdGU6IHtcbiAgICAgIHk6IDAsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgc2NhbGU6IDEsXG4gICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIHR5cGU6IFwic3ByaW5nXCIsXG4gICAgICAgIG1hc3M6IDAuNSxcbiAgICAgICAgZGFtcGluZzogMTAsXG4gICAgICAgIHN0aWZmbmVzczogMTAwLFxuICAgICAgICB3aGVuOiBcImJlZm9yZUNoaWxkcmVuXCIsXG4gICAgICB9LFxuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeHBlcmllbmNlUHJldmlldztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1vdGlvbiIsIkV4cGVyaWVuY2VQcmV2aWV3IiwiY29tcGFueU5hbWUiLCJyb2xlIiwiZXhwZXJpZW5jZVBvaW50cyIsImJnQ29sb3IiLCJkYXJrIiwibG9nb1VybCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZCIsImluaXRpYWwiLCJ3aGlsZUluVmlldyIsInZhcmlhbnRzIiwiUHJldmlld0FuaW1hdGlvbiIsIndoaWxlSG92ZXIiLCJzY2FsZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJoMiIsImgzIiwidWwiLCJtYXAiLCJwb2ludCIsImluZGV4IiwibGkiLCJpbWciLCJzcmMiLCJhbHQiLCJ5Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0eXBlIiwibWFzcyIsImRhbXBpbmciLCJzdGlmZm5lc3MiLCJ3aGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Experience.tsx\n"));

/***/ })

});