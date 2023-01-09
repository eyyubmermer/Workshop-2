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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _hooks_useConnection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useConnection */ \"./hooks/useConnection.js\");\n/* harmony import */ var _hooks_useContract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useContract */ \"./hooks/useContract.js\");\n/* harmony import */ var _metadata_todo_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../metadata/todo.json */ \"./metadata/todo.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const connection = (0,_hooks_useConnection__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const contract = (0,_hooks_useContract__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_config__WEBPACK_IMPORTED_MODULE_1__.todoAddress, _metadata_todo_json__WEBPACK_IMPORTED_MODULE_4__.abi);\n    const [taskName, setTaskName] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const addTask = async ()=>{\n        const txn = await contract.addTask(taskName);\n        await txn.wait();\n        listTasks();\n    };\n    const updateName = async (i)=>{\n        const txn = await contract.updateTaskContent(i, taskName);\n        await txn.wait();\n        listTasks();\n    };\n    const updateStatus = async (i)=>{\n        const txn = await contract.updateTaskStatus(i);\n        await txn.wait();\n        listTasks();\n    };\n    const removeTask = async (i)=>{\n        const txn = await contract.removeTask(i);\n        await txn.wait();\n        listTasks();\n    };\n    const listTasks = async ()=>{\n        const data = await contract.list();\n        const items = await Promise.all(data.map(async (i)=>{\n            let item = {\n                taskName: i.content,\n                status: i.isCompleted\n            };\n            return item;\n        }));\n        setTasks(items);\n        console.log(items);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        connection.connect();\n        if (connection.address) {\n            listTasks();\n        }\n    }, [\n        connection.address\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            connection.address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: connection.address\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\todo\\\\pages\\\\index.js\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                onChange: (e)=>setTaskName(e.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\todo\\\\pages\\\\index.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: addTask,\n                children: \"Add\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\todo\\\\pages\\\\index.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            tasks === null || tasks === void 0 ? void 0 : tasks.map((task, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: [\n                                task.taskName,\n                                task.status.toString()\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\todo\\\\pages\\\\index.js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>updateName(i),\n                            children: \"UpdateName\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\todo\\\\pages\\\\index.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>updateStatus(i),\n                            children: \"UpdateStatus\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\todo\\\\pages\\\\index.js\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>removeTask(i),\n                            children: \"X\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\todo\\\\pages\\\\index.js\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, i, true, {\n                    fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\todo\\\\pages\\\\index.js\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true);\n}\n_s(Home, \"6VWykW7OJg3zmJ4/gNy+ofS97Z8=\", false, function() {\n    return [\n        _hooks_useConnection__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        _hooks_useContract__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBdUM7QUFDWTtBQUNMO0FBQ0Q7QUFDRjtBQUc1QixTQUFTTSxPQUFPOztJQUc3QixNQUFNQyxhQUFhTixnRUFBYUE7SUFDaEMsTUFBTU8sV0FBV04sOERBQVdBLENBQUNGLGdEQUFXQSxFQUFFRyxvREFBWTtJQUV0RCxNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFFekMsTUFBTSxDQUFDUSxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDLEVBQUU7SUFFckMsTUFBTVUsVUFBVSxVQUFZO1FBQzFCLE1BQU1DLE1BQU0sTUFBTVAsU0FBU00sT0FBTyxDQUFDSjtRQUNuQyxNQUFNSyxJQUFJQyxJQUFJO1FBQ2RDO0lBQ0Y7SUFFQSxNQUFNQyxhQUFhLE9BQU9DLElBQU07UUFDOUIsTUFBTUosTUFBTSxNQUFNUCxTQUFTWSxpQkFBaUIsQ0FBQ0QsR0FBR1Q7UUFDaEQsTUFBTUssSUFBSUMsSUFBSTtRQUNkQztJQUNGO0lBRUEsTUFBTUksZUFBZSxPQUFPRixJQUFNO1FBQ2hDLE1BQU1KLE1BQU0sTUFBTVAsU0FBU2MsZ0JBQWdCLENBQUNIO1FBQzVDLE1BQU1KLElBQUlDLElBQUk7UUFDZEM7SUFDRjtJQUVBLE1BQU1NLGFBQWEsT0FBT0osSUFBTTtRQUM5QixNQUFNSixNQUFNLE1BQU1QLFNBQVNlLFVBQVUsQ0FBQ0o7UUFDdEMsTUFBTUosSUFBSUMsSUFBSTtRQUNkQztJQUNGO0lBRUEsTUFBTUEsWUFBWSxVQUFZO1FBQzVCLE1BQU1PLE9BQU8sTUFBTWhCLFNBQVNpQixJQUFJO1FBQ2hDLE1BQU1DLFFBQVEsTUFBTUMsUUFBUUMsR0FBRyxDQUFDSixLQUFLSyxHQUFHLENBQUMsT0FBTVYsSUFBSztZQUNsRCxJQUFJVyxPQUFPO2dCQUNUcEIsVUFBVVMsRUFBRVksT0FBTztnQkFDbkJDLFFBQVFiLEVBQUVjLFdBQVc7WUFDdkI7WUFDQSxPQUFPSDtRQUNUO1FBQ0FqQixTQUFTYTtRQUNUUSxRQUFRQyxHQUFHLENBQUNUO0lBQ2Q7SUFJQXJCLGdEQUFTQSxDQUFDLElBQU07UUFDZEUsV0FBVzZCLE9BQU87UUFDbEIsSUFBSTdCLFdBQVc4QixPQUFPLEVBQUU7WUFDdEJwQjtRQUNGLENBQUM7SUFDSCxHQUFHO1FBQUNWLFdBQVc4QixPQUFPO0tBQUM7SUFLdkIscUJBQ0U7O1lBQ0c5QixXQUFXOEIsT0FBTyxrQkFDakIsOERBQUNDOzBCQUNFL0IsV0FBVzhCLE9BQU87Ozs7OzswQkFHdkIsOERBQUNFO2dCQUFNQyxVQUFVLENBQUNDLElBQU05QixZQUFZOEIsRUFBRUMsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7MEJBQ2xELDhEQUFDQztnQkFBT0MsU0FBUy9COzBCQUFVOzs7Ozs7WUFDMUJGLGtCQUFBQSxtQkFBQUEsS0FBQUEsSUFBQUEsTUFBT2lCLEdBQUcsQ0FBQyxDQUFDaUIsTUFBTTNCLGtCQUNqQiw4REFBQ21COztzQ0FDQyw4REFBQ1M7O2dDQUFJRCxLQUFLcEMsUUFBUTtnQ0FDZm9DLEtBQUtkLE1BQU0sQ0FBQ2dCLFFBQVE7Ozs7Ozs7c0NBQ3ZCLDhEQUFDSjs0QkFBT0MsU0FBUyxJQUFNM0IsV0FBV0M7c0NBQUk7Ozs7OztzQ0FDdEMsOERBQUN5Qjs0QkFBT0MsU0FBUyxJQUFNeEIsYUFBYUY7c0NBQUk7Ozs7OztzQ0FDeEMsOERBQUN5Qjs0QkFBT0MsU0FBUyxJQUFNdEIsV0FBV0o7c0NBQUk7Ozs7Ozs7bUJBTDlCQTs7Ozs7OztBQVlsQixDQUFDO0dBakZ1QmI7O1FBR0hMLDREQUFhQTtRQUNmQywwREFBV0E7OztLQUpOSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRvZG9BZGRyZXNzIH0gZnJvbSBcIi4uL2NvbmZpZ1wiXG5pbXBvcnQgdXNlQ29ubmVjdGlvbiBmcm9tIFwiLi4vaG9va3MvdXNlQ29ubmVjdGlvblwiO1xuaW1wb3J0IHVzZUNvbnRyYWN0IGZyb20gXCIuLi9ob29rcy91c2VDb250cmFjdFwiXG5pbXBvcnQgdG9kb2pzb24gZnJvbSBcIi4uL21ldGFkYXRhL3RvZG8uanNvblwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuXG4gIGNvbnN0IGNvbm5lY3Rpb24gPSB1c2VDb25uZWN0aW9uKCk7XG4gIGNvbnN0IGNvbnRyYWN0ID0gdXNlQ29udHJhY3QodG9kb0FkZHJlc3MsIHRvZG9qc29uLmFiaSk7XG5cbiAgY29uc3QgW3Rhc2tOYW1lLCBzZXRUYXNrTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBhZGRUYXNrID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHR4biA9IGF3YWl0IGNvbnRyYWN0LmFkZFRhc2sodGFza05hbWUpO1xuICAgIGF3YWl0IHR4bi53YWl0KCk7XG4gICAgbGlzdFRhc2tzKCk7XG4gIH1cblxuICBjb25zdCB1cGRhdGVOYW1lID0gYXN5bmMgKGkpID0+IHtcbiAgICBjb25zdCB0eG4gPSBhd2FpdCBjb250cmFjdC51cGRhdGVUYXNrQ29udGVudChpLCB0YXNrTmFtZSk7XG4gICAgYXdhaXQgdHhuLndhaXQoKTtcbiAgICBsaXN0VGFza3MoKTtcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZVN0YXR1cyA9IGFzeW5jIChpKSA9PiB7XG4gICAgY29uc3QgdHhuID0gYXdhaXQgY29udHJhY3QudXBkYXRlVGFza1N0YXR1cyhpKTtcbiAgICBhd2FpdCB0eG4ud2FpdCgpO1xuICAgIGxpc3RUYXNrcygpO1xuICB9XG5cbiAgY29uc3QgcmVtb3ZlVGFzayA9IGFzeW5jIChpKSA9PiB7XG4gICAgY29uc3QgdHhuID0gYXdhaXQgY29udHJhY3QucmVtb3ZlVGFzayhpKTtcbiAgICBhd2FpdCB0eG4ud2FpdCgpO1xuICAgIGxpc3RUYXNrcygpO1xuICB9XG5cbiAgY29uc3QgbGlzdFRhc2tzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjb250cmFjdC5saXN0KCk7XG4gICAgY29uc3QgaXRlbXMgPSBhd2FpdCBQcm9taXNlLmFsbChkYXRhLm1hcChhc3luYyBpID0+IHtcbiAgICAgIGxldCBpdGVtID0ge1xuICAgICAgICB0YXNrTmFtZTogaS5jb250ZW50LFxuICAgICAgICBzdGF0dXM6IGkuaXNDb21wbGV0ZWRcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVtXG4gICAgfSkpXG4gICAgc2V0VGFza3MoaXRlbXMpO1xuICAgIGNvbnNvbGUubG9nKGl0ZW1zKTtcbiAgfVxuXG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbm5lY3Rpb24uY29ubmVjdCgpO1xuICAgIGlmIChjb25uZWN0aW9uLmFkZHJlc3MpIHtcbiAgICAgIGxpc3RUYXNrcygpO1xuICAgIH1cbiAgfSwgW2Nvbm5lY3Rpb24uYWRkcmVzc10pXG5cblxuXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2Nvbm5lY3Rpb24uYWRkcmVzcyAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge2Nvbm5lY3Rpb24uYWRkcmVzc31cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGFza05hbWUoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRUYXNrfSA+QWRkPC9idXR0b24+XG4gICAgICB7dGFza3M/Lm1hcCgodGFzaywgaSkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgPGgxPnt0YXNrLnRhc2tOYW1lfVxuICAgICAgICAgICAge3Rhc2suc3RhdHVzLnRvU3RyaW5nKCl9PC9oMT5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHVwZGF0ZU5hbWUoaSl9PlVwZGF0ZU5hbWU8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHVwZGF0ZVN0YXR1cyhpKX0+VXBkYXRlU3RhdHVzPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByZW1vdmVUYXNrKGkpfT5YPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSlcbiAgICAgIH1cblxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsidG9kb0FkZHJlc3MiLCJ1c2VDb25uZWN0aW9uIiwidXNlQ29udHJhY3QiLCJ0b2RvanNvbiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSG9tZSIsImNvbm5lY3Rpb24iLCJjb250cmFjdCIsImFiaSIsInRhc2tOYW1lIiwic2V0VGFza05hbWUiLCJ0YXNrcyIsInNldFRhc2tzIiwiYWRkVGFzayIsInR4biIsIndhaXQiLCJsaXN0VGFza3MiLCJ1cGRhdGVOYW1lIiwiaSIsInVwZGF0ZVRhc2tDb250ZW50IiwidXBkYXRlU3RhdHVzIiwidXBkYXRlVGFza1N0YXR1cyIsInJlbW92ZVRhc2siLCJkYXRhIiwibGlzdCIsIml0ZW1zIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsIml0ZW0iLCJjb250ZW50Iiwic3RhdHVzIiwiaXNDb21wbGV0ZWQiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsImFkZHJlc3MiLCJkaXYiLCJpbnB1dCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwib25DbGljayIsInRhc2siLCJoMSIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});