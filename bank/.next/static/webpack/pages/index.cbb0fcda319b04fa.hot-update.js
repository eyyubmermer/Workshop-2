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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _hooks_useConnection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useConnection */ \"./hooks/useConnection.js\");\n/* harmony import */ var _hooks_useContract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useContract */ \"./hooks/useContract.js\");\n/* harmony import */ var _metadata_bank_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../metadata/bank.json */ \"./metadata/bank.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [amount, setAmount] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);\n    const [receiver, setReceiver] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const connection = (0,_hooks_useConnection__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const contract = (0,_hooks_useContract__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_config__WEBPACK_IMPORTED_MODULE_1__.bankAddress, _metadata_bank_json__WEBPACK_IMPORTED_MODULE_4__.abi);\n    const deposit = async ()=>{\n        const txn = await contract.deposit({\n            value: amount\n        });\n        await txn.wait();\n        viewUserBalance();\n    };\n    const withdraw = async ()=>{\n        const txn = await contract.withdraw(amount);\n        await txn.wait();\n        viewUserBalance();\n    };\n    const transfer = async ()=>{\n        const txn = await contract.transfer(amount);\n        await txn.wait();\n        viewUserBalance();\n    };\n    const viewUserBalance = async ()=>{\n        const data = await contract.viewBalance(connection.address);\n        setBalance(data.toNumber());\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        connection.connect();\n        if (connection.address) {\n            viewUserBalance();\n        }\n    }, [\n        connection.address\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                connection.address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: connection.address\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\bank\\\\pages\\\\index.js\",\n                    lineNumber: 53,\n                    columnNumber: 32\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        \"Balance: \",\n                        balance\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\bank\\\\pages\\\\index.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"number\",\n                    onChange: (e)=>setAmount(e.target.value)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\bank\\\\pages\\\\index.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: deposit,\n                    children: \"Deposit\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\bank\\\\pages\\\\index.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: withdraw,\n                    children: \"Withdraw\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\bank\\\\pages\\\\index.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    onChange: (e)=>set\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\bank\\\\pages\\\\index.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\bank\\\\pages\\\\index.js\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"d/4zmx4OrFs5MLSOWWdM9R+6Elo=\", false, function() {\n    return [\n        _hooks_useConnection__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        _hooks_useContract__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBdUM7QUFDWTtBQUNMO0FBQ0Q7QUFDRjtBQUk1QixTQUFTTSxPQUFPOztJQUU3QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0osK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDSyxTQUFTQyxXQUFXLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ08sVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNUyxhQUFhWixnRUFBYUE7SUFDaEMsTUFBTWEsV0FBV1osOERBQVdBLENBQUNGLGdEQUFXQSxFQUFFRyxvREFBWTtJQUd0RCxNQUFNYSxVQUFVLFVBQVk7UUFDMUIsTUFBTUMsTUFBTSxNQUFNSCxTQUFTRSxPQUFPLENBQUM7WUFBRUUsT0FBT1g7UUFBTztRQUNuRCxNQUFNVSxJQUFJRSxJQUFJO1FBQ2RDO0lBQ0Y7SUFFQSxNQUFNQyxXQUFXLFVBQVk7UUFDM0IsTUFBTUosTUFBTSxNQUFNSCxTQUFTTyxRQUFRLENBQUNkO1FBQ3BDLE1BQU1VLElBQUlFLElBQUk7UUFDZEM7SUFDRjtJQUVBLE1BQU1FLFdBQVcsVUFBWTtRQUMzQixNQUFNTCxNQUFNLE1BQU1ILFNBQVNRLFFBQVEsQ0FBQ2Y7UUFDcEMsTUFBTVUsSUFBSUUsSUFBSTtRQUNkQztJQUNGO0lBRUEsTUFBTUEsa0JBQWtCLFVBQVk7UUFDbEMsTUFBTUcsT0FBTyxNQUFNVCxTQUFTVSxXQUFXLENBQUNYLFdBQVdZLE9BQU87UUFDMURmLFdBQVdhLEtBQUtHLFFBQVE7SUFDMUI7SUFFQXJCLGdEQUFTQSxDQUFDLElBQU07UUFDZFEsV0FBV2MsT0FBTztRQUNsQixJQUFJZCxXQUFXWSxPQUFPLEVBQUU7WUFDdEJMO1FBQ0YsQ0FBQztJQUNILEdBQUc7UUFBQ1AsV0FBV1ksT0FBTztLQUFDO0lBR3ZCLHFCQUNFO2tCQUNFLDRFQUFDRzs7Z0JBQ0VmLFdBQVdZLE9BQU8sa0JBQUksOERBQUNHOzhCQUNyQmYsV0FBV1ksT0FBTzs7Ozs7OzhCQUVyQiw4REFBQ0c7O3dCQUFJO3dCQUNPbkI7Ozs7Ozs7OEJBR1osOERBQUNvQjtvQkFBTUMsTUFBTTtvQkFBVUMsVUFBVSxDQUFDQyxJQUFNeEIsVUFBVXdCLEVBQUVDLE1BQU0sQ0FBQ2YsS0FBSzs7Ozs7OzhCQUNoRSw4REFBQ2dCO29CQUFPQyxTQUFTbkI7OEJBQVU7Ozs7Ozs4QkFDM0IsOERBQUNrQjtvQkFBT0MsU0FBU2Q7OEJBQVc7Ozs7Ozs4QkFDNUIsOERBQUNRO29CQUFNRSxVQUFVLENBQUNDLElBQU1JOzs7Ozs7Ozs7Ozs7O0FBV2hDLENBQUM7R0FqRXVCOUI7O1FBTUhMLDREQUFhQTtRQUNmQywwREFBV0E7OztLQVBOSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJhbmtBZGRyZXNzIH0gZnJvbSBcIi4uL2NvbmZpZ1wiXG5pbXBvcnQgdXNlQ29ubmVjdGlvbiBmcm9tIFwiLi4vaG9va3MvdXNlQ29ubmVjdGlvblwiO1xuaW1wb3J0IHVzZUNvbnRyYWN0IGZyb20gXCIuLi9ob29rcy91c2VDb250cmFjdFwiXG5pbXBvcnQgYmFua2pzb24gZnJvbSBcIi4uL21ldGFkYXRhL2JhbmsuanNvblwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtyZWNlaXZlciwgc2V0UmVjZWl2ZXJdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgY29ubmVjdGlvbiA9IHVzZUNvbm5lY3Rpb24oKTtcbiAgY29uc3QgY29udHJhY3QgPSB1c2VDb250cmFjdChiYW5rQWRkcmVzcywgYmFua2pzb24uYWJpKVxuXG5cbiAgY29uc3QgZGVwb3NpdCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB0eG4gPSBhd2FpdCBjb250cmFjdC5kZXBvc2l0KHsgdmFsdWU6IGFtb3VudCB9KTtcbiAgICBhd2FpdCB0eG4ud2FpdCgpO1xuICAgIHZpZXdVc2VyQmFsYW5jZSgpO1xuICB9XG5cbiAgY29uc3Qgd2l0aGRyYXcgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdHhuID0gYXdhaXQgY29udHJhY3Qud2l0aGRyYXcoYW1vdW50KTtcbiAgICBhd2FpdCB0eG4ud2FpdCgpO1xuICAgIHZpZXdVc2VyQmFsYW5jZSgpO1xuICB9XG5cbiAgY29uc3QgdHJhbnNmZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdHhuID0gYXdhaXQgY29udHJhY3QudHJhbnNmZXIoYW1vdW50KTtcbiAgICBhd2FpdCB0eG4ud2FpdCgpO1xuICAgIHZpZXdVc2VyQmFsYW5jZSgpO1xuICB9XG5cbiAgY29uc3Qgdmlld1VzZXJCYWxhbmNlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjb250cmFjdC52aWV3QmFsYW5jZShjb25uZWN0aW9uLmFkZHJlc3MpO1xuICAgIHNldEJhbGFuY2UoZGF0YS50b051bWJlcigpKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29ubmVjdGlvbi5jb25uZWN0KCk7XG4gICAgaWYgKGNvbm5lY3Rpb24uYWRkcmVzcykge1xuICAgICAgdmlld1VzZXJCYWxhbmNlKCk7XG4gICAgfVxuICB9LCBbY29ubmVjdGlvbi5hZGRyZXNzXSlcblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtjb25uZWN0aW9uLmFkZHJlc3MgJiYgPGRpdj5cbiAgICAgICAgICB7Y29ubmVjdGlvbi5hZGRyZXNzfVxuICAgICAgICA8L2Rpdj59XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgQmFsYW5jZToge2JhbGFuY2V9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxpbnB1dCB0eXBlPXtcIm51bWJlclwifSBvbkNoYW5nZT17KGUpID0+IHNldEFtb3VudChlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17ZGVwb3NpdH0gPkRlcG9zaXQ8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt3aXRoZHJhd30gPldpdGhkcmF3PC9idXR0b24+XG4gICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGUpID0+IHNldH0gLz5cbiAgICAgIDwvZGl2PlxuXG5cblxuXG5cblxuXG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJiYW5rQWRkcmVzcyIsInVzZUNvbm5lY3Rpb24iLCJ1c2VDb250cmFjdCIsImJhbmtqc29uIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIb21lIiwiYW1vdW50Iiwic2V0QW1vdW50IiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJyZWNlaXZlciIsInNldFJlY2VpdmVyIiwiY29ubmVjdGlvbiIsImNvbnRyYWN0IiwiYWJpIiwiZGVwb3NpdCIsInR4biIsInZhbHVlIiwid2FpdCIsInZpZXdVc2VyQmFsYW5jZSIsIndpdGhkcmF3IiwidHJhbnNmZXIiLCJkYXRhIiwidmlld0JhbGFuY2UiLCJhZGRyZXNzIiwidG9OdW1iZXIiLCJjb25uZWN0IiwiZGl2IiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsInNldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});