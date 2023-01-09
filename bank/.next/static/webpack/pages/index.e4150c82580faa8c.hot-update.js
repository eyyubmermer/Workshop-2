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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _hooks_useConnection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useConnection */ \"./hooks/useConnection.js\");\n/* harmony import */ var _hooks_useContract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useContract */ \"./hooks/useContract.js\");\n/* harmony import */ var _metadata_bank_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../metadata/bank.json */ \"./metadata/bank.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [amount, setAmount] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);\n    const connection = (0,_hooks_useConnection__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const contract = (0,_hooks_useContract__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_config__WEBPACK_IMPORTED_MODULE_1__.bankAddress, _metadata_bank_json__WEBPACK_IMPORTED_MODULE_4__.abi);\n    const deposit = async ()=>{\n        const txn = await contract.deposit({\n            value: amount\n        });\n        await txn.wait();\n        viewBalance();\n    };\n    const viewUserBalance = async ()=>{\n        const data = await contract.viewBalance();\n        setBalance(data.toNumber());\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        connection.connect();\n        if (connection.address) {\n            viewBalance();\n        }\n    }, [\n        connection.address\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                connection.address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: connection.address\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\bank\\\\pages\\\\index.js\",\n                    lineNumber: 40,\n                    columnNumber: 32\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        \"Balance: \",\n                        balance\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\bank\\\\pages\\\\index.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"number\",\n                    onChange: (e)=>setAmount(e.target.value)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\bank\\\\pages\\\\index.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: deposit,\n                    children: \"Deposit\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\bank\\\\pages\\\\index.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\bank\\\\pages\\\\index.js\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"IwpNOs7p+mEuw6eSdIhbUyPfOEA=\", false, function() {\n    return [\n        _hooks_useConnection__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        _hooks_useContract__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBdUM7QUFDWTtBQUNMO0FBQ0Q7QUFDRjtBQUk1QixTQUFTTSxPQUFPOztJQUU3QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0osK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDSyxTQUFTQyxXQUFXLEdBQUdOLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1PLGFBQWFWLGdFQUFhQTtJQUNoQyxNQUFNVyxXQUFXViw4REFBV0EsQ0FBQ0YsZ0RBQVdBLEVBQUVHLG9EQUFZO0lBR3RELE1BQU1XLFVBQVUsVUFBWTtRQUMxQixNQUFNQyxNQUFNLE1BQU1ILFNBQVNFLE9BQU8sQ0FBQztZQUFFRSxPQUFPVDtRQUFPO1FBQ25ELE1BQU1RLElBQUlFLElBQUk7UUFDZEM7SUFDRjtJQUVBLE1BQU1DLGtCQUFrQixVQUFZO1FBQ2xDLE1BQU1DLE9BQU8sTUFBTVIsU0FBU00sV0FBVztRQUN2Q1IsV0FBV1UsS0FBS0MsUUFBUTtJQUMxQjtJQUVBaEIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkTSxXQUFXVyxPQUFPO1FBQ2xCLElBQUlYLFdBQVdZLE9BQU8sRUFBRTtZQUN0Qkw7UUFDRixDQUFDO0lBQ0gsR0FBRztRQUFDUCxXQUFXWSxPQUFPO0tBQUM7SUFHdkIscUJBQ0U7a0JBQ0UsNEVBQUNDOztnQkFDRWIsV0FBV1ksT0FBTyxrQkFBSSw4REFBQ0M7OEJBQ3JCYixXQUFXWSxPQUFPOzs7Ozs7OEJBRXJCLDhEQUFDQzs7d0JBQUk7d0JBQ09mOzs7Ozs7OzhCQUdaLDhEQUFDZ0I7b0JBQU1DLE1BQU07b0JBQVVDLFVBQVUsQ0FBQ0MsSUFBTXBCLFVBQVVvQixFQUFFQyxNQUFNLENBQUNiLEtBQUs7Ozs7Ozs4QkFDaEUsOERBQUNjO29CQUFPQyxTQUFTakI7OEJBQVU7Ozs7Ozs7Ozs7Ozs7QUFXbkMsQ0FBQztHQWxEdUJSOztRQUtITCw0REFBYUE7UUFDZkMsMERBQVdBOzs7S0FOTkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiYW5rQWRkcmVzcyB9IGZyb20gXCIuLi9jb25maWdcIlxuaW1wb3J0IHVzZUNvbm5lY3Rpb24gZnJvbSBcIi4uL2hvb2tzL3VzZUNvbm5lY3Rpb25cIjtcbmltcG9ydCB1c2VDb250cmFjdCBmcm9tIFwiLi4vaG9va3MvdXNlQ29udHJhY3RcIlxuaW1wb3J0IGJhbmtqc29uIGZyb20gXCIuLi9tZXRhZGF0YS9iYW5rLmpzb25cIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGNvbm5lY3Rpb24gPSB1c2VDb25uZWN0aW9uKCk7XG4gIGNvbnN0IGNvbnRyYWN0ID0gdXNlQ29udHJhY3QoYmFua0FkZHJlc3MsIGJhbmtqc29uLmFiaSlcblxuXG4gIGNvbnN0IGRlcG9zaXQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdHhuID0gYXdhaXQgY29udHJhY3QuZGVwb3NpdCh7IHZhbHVlOiBhbW91bnQgfSk7XG4gICAgYXdhaXQgdHhuLndhaXQoKTtcbiAgICB2aWV3QmFsYW5jZSgpO1xuICB9XG5cbiAgY29uc3Qgdmlld1VzZXJCYWxhbmNlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjb250cmFjdC52aWV3QmFsYW5jZSgpO1xuICAgIHNldEJhbGFuY2UoZGF0YS50b051bWJlcigpKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29ubmVjdGlvbi5jb25uZWN0KCk7XG4gICAgaWYgKGNvbm5lY3Rpb24uYWRkcmVzcykge1xuICAgICAgdmlld0JhbGFuY2UoKTtcbiAgICB9XG4gIH0sIFtjb25uZWN0aW9uLmFkZHJlc3NdKVxuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdj5cbiAgICAgICAge2Nvbm5lY3Rpb24uYWRkcmVzcyAmJiA8ZGl2PlxuICAgICAgICAgIHtjb25uZWN0aW9uLmFkZHJlc3N9XG4gICAgICAgIDwvZGl2Pn1cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBCYWxhbmNlOiB7YmFsYW5jZX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGlucHV0IHR5cGU9e1wibnVtYmVyXCJ9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0QW1vdW50KGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtkZXBvc2l0fSA+RGVwb3NpdDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cblxuXG5cblxuXG5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbImJhbmtBZGRyZXNzIiwidXNlQ29ubmVjdGlvbiIsInVzZUNvbnRyYWN0IiwiYmFua2pzb24iLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhvbWUiLCJhbW91bnQiLCJzZXRBbW91bnQiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsImNvbm5lY3Rpb24iLCJjb250cmFjdCIsImFiaSIsImRlcG9zaXQiLCJ0eG4iLCJ2YWx1ZSIsIndhaXQiLCJ2aWV3QmFsYW5jZSIsInZpZXdVc2VyQmFsYW5jZSIsImRhdGEiLCJ0b051bWJlciIsImNvbm5lY3QiLCJhZGRyZXNzIiwiZGl2IiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});