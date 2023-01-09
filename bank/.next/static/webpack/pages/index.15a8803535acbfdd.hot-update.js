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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _hooks_useConnection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useConnection */ \"./hooks/useConnection.js\");\n/* harmony import */ var _hooks_useContract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useContract */ \"./hooks/useContract.js\");\n/* harmony import */ var _metadata_bank_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../metadata/bank.json */ \"./metadata/bank.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [amount, setAmount] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);\n    const connection = (0,_hooks_useConnection__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const contract = (0,_hooks_useContract__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_config__WEBPACK_IMPORTED_MODULE_1__.bankAddress, _metadata_bank_json__WEBPACK_IMPORTED_MODULE_4__.abi);\n    const deposit = async ()=>{\n        await contract.deposit({\n            value: amount\n        });\n    };\n    const viewBalance = async ()=>{};\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        connection.connect();\n    }, [\n        connection.address\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                connection.address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: connection.address\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\bank\\\\pages\\\\index.js\",\n                    lineNumber: 34,\n                    columnNumber: 32\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: balance\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\bank\\\\pages\\\\index.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"number\",\n                    onChange: (e)=>setAmount(e.target.value)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\bank\\\\pages\\\\index.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: deposit,\n                    children: \"Deposit\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\bank\\\\pages\\\\index.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\bank\\\\pages\\\\index.js\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"IwpNOs7p+mEuw6eSdIhbUyPfOEA=\", false, function() {\n    return [\n        _hooks_useConnection__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        _hooks_useContract__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBdUM7QUFDWTtBQUNMO0FBQ0Q7QUFDRjtBQUk1QixTQUFTTSxPQUFPOztJQUU3QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0osK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDSyxTQUFTQyxXQUFXLEdBQUdOLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1PLGFBQWFWLGdFQUFhQTtJQUNoQyxNQUFNVyxXQUFXViw4REFBV0EsQ0FBQ0YsZ0RBQVdBLEVBQUVHLG9EQUFZO0lBR3RELE1BQU1XLFVBQVUsVUFBWTtRQUMxQixNQUFNRixTQUFTRSxPQUFPLENBQUM7WUFBRUMsT0FBT1I7UUFBTztJQUN6QztJQUVBLE1BQU1TLGNBQWMsVUFBWSxDQUVoQztJQUVBWCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RNLFdBQVdNLE9BQU87SUFDcEIsR0FBRztRQUFDTixXQUFXTyxPQUFPO0tBQUM7SUFHdkIscUJBQ0U7a0JBQ0UsNEVBQUNDOztnQkFDRVIsV0FBV08sT0FBTyxrQkFBSSw4REFBQ0M7OEJBQ3JCUixXQUFXTyxPQUFPOzs7Ozs7OEJBRXJCLDhEQUFDQzs4QkFDRVY7Ozs7Ozs4QkFHSCw4REFBQ1c7b0JBQU1DLE1BQU07b0JBQVVDLFVBQVUsQ0FBQ0MsSUFBTWYsVUFBVWUsRUFBRUMsTUFBTSxDQUFDVCxLQUFLOzs7Ozs7OEJBQ2hFLDhEQUFDVTtvQkFBT0MsU0FBU1o7OEJBQVU7Ozs7Ozs7Ozs7Ozs7QUFXbkMsQ0FBQztHQTVDdUJSOztRQUtITCw0REFBYUE7UUFDZkMsMERBQVdBOzs7S0FOTkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiYW5rQWRkcmVzcyB9IGZyb20gXCIuLi9jb25maWdcIlxuaW1wb3J0IHVzZUNvbm5lY3Rpb24gZnJvbSBcIi4uL2hvb2tzL3VzZUNvbm5lY3Rpb25cIjtcbmltcG9ydCB1c2VDb250cmFjdCBmcm9tIFwiLi4vaG9va3MvdXNlQ29udHJhY3RcIlxuaW1wb3J0IGJhbmtqc29uIGZyb20gXCIuLi9tZXRhZGF0YS9iYW5rLmpzb25cIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGNvbm5lY3Rpb24gPSB1c2VDb25uZWN0aW9uKCk7XG4gIGNvbnN0IGNvbnRyYWN0ID0gdXNlQ29udHJhY3QoYmFua0FkZHJlc3MsIGJhbmtqc29uLmFiaSlcblxuXG4gIGNvbnN0IGRlcG9zaXQgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgY29udHJhY3QuZGVwb3NpdCh7IHZhbHVlOiBhbW91bnQgfSk7XG4gIH1cblxuICBjb25zdCB2aWV3QmFsYW5jZSA9IGFzeW5jICgpID0+IHtcblxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25uZWN0aW9uLmNvbm5lY3QoKTtcbiAgfSwgW2Nvbm5lY3Rpb24uYWRkcmVzc10pXG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PlxuICAgICAgICB7Y29ubmVjdGlvbi5hZGRyZXNzICYmIDxkaXY+XG4gICAgICAgICAge2Nvbm5lY3Rpb24uYWRkcmVzc31cbiAgICAgICAgPC9kaXY+fVxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtiYWxhbmNlfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8aW5wdXQgdHlwZT17XCJudW1iZXJcIn0gb25DaGFuZ2U9eyhlKSA9PiBzZXRBbW91bnQoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2RlcG9zaXR9ID5EZXBvc2l0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuXG5cblxuXG5cblxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiYmFua0FkZHJlc3MiLCJ1c2VDb25uZWN0aW9uIiwidXNlQ29udHJhY3QiLCJiYW5ranNvbiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSG9tZSIsImFtb3VudCIsInNldEFtb3VudCIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwiY29ubmVjdGlvbiIsImNvbnRyYWN0IiwiYWJpIiwiZGVwb3NpdCIsInZhbHVlIiwidmlld0JhbGFuY2UiLCJjb25uZWN0IiwiYWRkcmVzcyIsImRpdiIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});