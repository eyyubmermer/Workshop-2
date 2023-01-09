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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useConnection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useConnection */ \"./hooks/useConnection.js\");\n/* harmony import */ var _hooks_useContract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useContract */ \"./hooks/useContract.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _metadata_counter_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../metadata/counter.json */ \"./metadata/counter.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [number, setNumber] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);\n    const connection = (0,_hooks_useConnection__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const contract = (0,_hooks_useContract__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_config__WEBPACK_IMPORTED_MODULE_3__.counterAddress, _metadata_counter_json__WEBPACK_IMPORTED_MODULE_4__.abi);\n    const increase = async ()=>{\n        const txn = await contract.increase();\n        await txn.wait();\n        viewNumber();\n    };\n    const decrease = async ()=>{\n        const txn = await contract.decrease();\n        await txn.wait();\n        viewNumber();\n    };\n    const reset = async ()=>{\n        const txn = await contract.reset();\n        await txn.wait();\n        viewNumber();\n    };\n    const viewNumber = async ()=>{\n        const number = await contract.viewValue();\n        setNumber(number.toNumber());\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        connection.connect();\n        //her renderda viewNumber fonksiyonunu çalıştırıyoruz.\n        //\n        if (connection.address) {\n            viewNumber();\n        }\n    }, [\n        connection.address\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                connection.address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"connection.address\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\counter\\\\pages\\\\index.js\",\n                    lineNumber: 55,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: increase,\n                    children: \"Increase\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\counter\\\\pages\\\\index.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: decrease,\n                    children: \"Decrease\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\counter\\\\pages\\\\index.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: reset,\n                    children: \"Reset\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\counter\\\\pages\\\\index.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: number\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\counter\\\\pages\\\\index.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\counter\\\\pages\\\\index.js\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"SxYJh0PmGQ27NO9VvOKlU8TiSsQ=\", false, function() {\n    return [\n        _hooks_useConnection__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        _hooks_useContract__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBbUQ7QUFDSjtBQUNKO0FBQ1E7QUFDUDtBQUk3QixTQUFTTSxPQUFPOztJQUU3QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0gsK0NBQVFBLENBQUM7SUFFckMsTUFBTUksYUFBYVQsZ0VBQWFBO0lBQ2hDLE1BQU1VLFdBQVdULDhEQUFXQSxDQUFDQyxtREFBY0EsRUFBRUMsdURBQWU7SUFFNUQsTUFBTVMsV0FBVyxVQUFZO1FBQzNCLE1BQU1DLE1BQU0sTUFBTUgsU0FBU0UsUUFBUTtRQUNuQyxNQUFNQyxJQUFJQyxJQUFJO1FBQ2RDO0lBQ0Y7SUFFQSxNQUFNQyxXQUFXLFVBQVk7UUFDM0IsTUFBTUgsTUFBTSxNQUFNSCxTQUFTTSxRQUFRO1FBQ25DLE1BQU1ILElBQUlDLElBQUk7UUFDZEM7SUFDRjtJQUVBLE1BQU1FLFFBQVEsVUFBWTtRQUN4QixNQUFNSixNQUFNLE1BQU1ILFNBQVNPLEtBQUs7UUFDaEMsTUFBTUosSUFBSUMsSUFBSTtRQUNkQztJQUNGO0lBQ0EsTUFBTUEsYUFBYSxVQUFZO1FBQzdCLE1BQU1SLFNBQVMsTUFBTUcsU0FBU1EsU0FBUztRQUN2Q1YsVUFBVUQsT0FBT1ksUUFBUTtJQUMzQjtJQUlBZixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RLLFdBQVdXLE9BQU87UUFDbEIsc0RBQXNEO1FBQ3RELEVBQUU7UUFDRixJQUFJWCxXQUFXWSxPQUFPLEVBQUU7WUFDdEJOO1FBQ0YsQ0FBQztJQUNILEdBQUc7UUFBQ04sV0FBV1ksT0FBTztLQUFDO0lBSXZCLHFCQUNFO2tCQUNFLDRFQUFDQzs7Z0JBQ0ViLFdBQVdZLE9BQU8sa0JBQ2pCLDhEQUFDQzs4QkFBSTs7Ozs7OzhCQUlQLDhEQUFDQztvQkFBT0MsU0FBU1o7OEJBQVc7Ozs7Ozs4QkFDNUIsOERBQUNXO29CQUFPQyxTQUFTUjs4QkFBVzs7Ozs7OzhCQUM1Qiw4REFBQ087b0JBQU9DLFNBQVNQOzhCQUFROzs7Ozs7OEJBRXpCLDhEQUFDSzs4QkFDRWY7Ozs7Ozs7Ozs7Ozs7QUFLWCxDQUFDO0dBNUR1QkQ7O1FBSUhOLDREQUFhQTtRQUNmQywwREFBV0E7OztLQUxOSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VDb25uZWN0aW9uIGZyb20gXCIuLi9ob29rcy91c2VDb25uZWN0aW9uXCI7XG5pbXBvcnQgdXNlQ29udHJhY3QgZnJvbSBcIi4uL2hvb2tzL3VzZUNvbnRyYWN0XCI7XG5pbXBvcnQgeyBjb3VudGVyQWRkcmVzcyB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCBjb3VudGVyanNvbiBmcm9tIFwiLi4vbWV0YWRhdGEvY291bnRlci5qc29uXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IFtudW1iZXIsIHNldE51bWJlcl0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBjb25uZWN0aW9uID0gdXNlQ29ubmVjdGlvbigpO1xuICBjb25zdCBjb250cmFjdCA9IHVzZUNvbnRyYWN0KGNvdW50ZXJBZGRyZXNzLCBjb3VudGVyanNvbi5hYmkpO1xuXG4gIGNvbnN0IGluY3JlYXNlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHR4biA9IGF3YWl0IGNvbnRyYWN0LmluY3JlYXNlKCk7XG4gICAgYXdhaXQgdHhuLndhaXQoKTtcbiAgICB2aWV3TnVtYmVyKCk7XG4gIH1cblxuICBjb25zdCBkZWNyZWFzZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB0eG4gPSBhd2FpdCBjb250cmFjdC5kZWNyZWFzZSgpO1xuICAgIGF3YWl0IHR4bi53YWl0KCk7XG4gICAgdmlld051bWJlcigpO1xuICB9XG5cbiAgY29uc3QgcmVzZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdHhuID0gYXdhaXQgY29udHJhY3QucmVzZXQoKTtcbiAgICBhd2FpdCB0eG4ud2FpdCgpO1xuICAgIHZpZXdOdW1iZXIoKTtcbiAgfVxuICBjb25zdCB2aWV3TnVtYmVyID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IG51bWJlciA9IGF3YWl0IGNvbnRyYWN0LnZpZXdWYWx1ZSgpO1xuICAgIHNldE51bWJlcihudW1iZXIudG9OdW1iZXIoKSlcbiAgfVxuXG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbm5lY3Rpb24uY29ubmVjdCgpO1xuICAgIC8vaGVyIHJlbmRlcmRhIHZpZXdOdW1iZXIgZm9ua3NpeW9udW51IMOnYWzEscWfdMSxcsSxeW9ydXouXG4gICAgLy9cbiAgICBpZiAoY29ubmVjdGlvbi5hZGRyZXNzKSB7XG4gICAgICB2aWV3TnVtYmVyKCk7XG4gICAgfVxuICB9LCBbY29ubmVjdGlvbi5hZGRyZXNzXSlcblxuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdj5cbiAgICAgICAge2Nvbm5lY3Rpb24uYWRkcmVzcyAmJlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBjb25uZWN0aW9uLmFkZHJlc3NcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2luY3JlYXNlfSA+SW5jcmVhc2U8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtkZWNyZWFzZX0gPkRlY3JlYXNlPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17cmVzZXR9ID5SZXNldDwvYnV0dG9uPlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge251bWJlcn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZUNvbm5lY3Rpb24iLCJ1c2VDb250cmFjdCIsImNvdW50ZXJBZGRyZXNzIiwiY291bnRlcmpzb24iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJudW1iZXIiLCJzZXROdW1iZXIiLCJjb25uZWN0aW9uIiwiY29udHJhY3QiLCJhYmkiLCJpbmNyZWFzZSIsInR4biIsIndhaXQiLCJ2aWV3TnVtYmVyIiwiZGVjcmVhc2UiLCJyZXNldCIsInZpZXdWYWx1ZSIsInRvTnVtYmVyIiwiY29ubmVjdCIsImFkZHJlc3MiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});