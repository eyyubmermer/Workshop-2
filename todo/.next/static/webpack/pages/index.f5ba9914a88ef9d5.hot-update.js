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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _hooks_useConnection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useConnection */ \"./hooks/useConnection.js\");\n/* harmony import */ var _hooks_useContract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useContract */ \"./hooks/useContract.js\");\n/* harmony import */ var _metadata_todo_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../metadata/todo.json */ \"./metadata/todo.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const connection = (0,_hooks_useConnection__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const contract = (0,_hooks_useContract__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_config__WEBPACK_IMPORTED_MODULE_1__.todoAddress, _metadata_todo_json__WEBPACK_IMPORTED_MODULE_4__.abi);\n    const [taskName, setTaskName] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const addTask = async ()=>{\n        const txn = await contract.addTask(taskName);\n        await txn.wait();\n        listTasks();\n    };\n    const updateName = async (i)=>{\n        const txn = await contract.updateTaskContent(i, taskName);\n        await txn.wait();\n        listTasks();\n    };\n    const updateStatus = async (i)=>{\n        const txn = await contract.updateTaskStatus(i);\n        await txn.wait();\n        listTasks();\n    };\n    const removeTask = async (i)=>{\n        const txn = await contract.removeTask(i);\n        await txn.wait();\n        listTasks();\n    };\n    const listTasks = async ()=>{\n        //kontrattan dönen değeri data değişkeninde tutuyoruz.\n        //kontrattan bir array dönüyor.\n        const data = await contract.list();\n        //\n        const items = await Promise.all(data.map(async (i)=>{\n            //döngünün her bir adımında bir nesne oluşturuyoruz.\n            let item = {\n                taskName: i.content,\n                status: i.isCompleted\n            };\n            return item;\n        }));\n        //döngü sonucundan dolan items arrayini tasks state'imize koyuyoruz.\n        setTasks(items);\n        console.log(items);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        connection.connect();\n        if (connection.address) {\n            listTasks();\n        }\n    }, [\n        connection.address\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            connection.address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: connection.address\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\todo\\\\pages\\\\index.js\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                onChange: (e)=>setTaskName(e.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\todo\\\\pages\\\\index.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: addTask,\n                children: \"Add\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\todo\\\\pages\\\\index.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            tasks === null || tasks === void 0 ? void 0 : tasks.map((task, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: [\n                                task.taskName,\n                                task.status.toString()\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\todo\\\\pages\\\\index.js\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>updateName(i),\n                            children: \"UpdateName\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\todo\\\\pages\\\\index.js\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>updateStatus(i),\n                            children: \"UpdateStatus\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\todo\\\\pages\\\\index.js\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>removeTask(i),\n                            children: \"X\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\todo\\\\pages\\\\index.js\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, i, true, {\n                    fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\todo\\\\pages\\\\index.js\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true);\n}\n_s(Home, \"6VWykW7OJg3zmJ4/gNy+ofS97Z8=\", false, function() {\n    return [\n        _hooks_useConnection__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        _hooks_useContract__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBdUM7QUFDWTtBQUNMO0FBQ0Q7QUFDRjtBQUc1QixTQUFTTSxPQUFPOztJQUc3QixNQUFNQyxhQUFhTixnRUFBYUE7SUFDaEMsTUFBTU8sV0FBV04sOERBQVdBLENBQUNGLGdEQUFXQSxFQUFFRyxvREFBWTtJQUV0RCxNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFFekMsTUFBTSxDQUFDUSxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDLEVBQUU7SUFFckMsTUFBTVUsVUFBVSxVQUFZO1FBQzFCLE1BQU1DLE1BQU0sTUFBTVAsU0FBU00sT0FBTyxDQUFDSjtRQUNuQyxNQUFNSyxJQUFJQyxJQUFJO1FBQ2RDO0lBQ0Y7SUFFQSxNQUFNQyxhQUFhLE9BQU9DLElBQU07UUFDOUIsTUFBTUosTUFBTSxNQUFNUCxTQUFTWSxpQkFBaUIsQ0FBQ0QsR0FBR1Q7UUFDaEQsTUFBTUssSUFBSUMsSUFBSTtRQUNkQztJQUNGO0lBRUEsTUFBTUksZUFBZSxPQUFPRixJQUFNO1FBQ2hDLE1BQU1KLE1BQU0sTUFBTVAsU0FBU2MsZ0JBQWdCLENBQUNIO1FBQzVDLE1BQU1KLElBQUlDLElBQUk7UUFDZEM7SUFDRjtJQUVBLE1BQU1NLGFBQWEsT0FBT0osSUFBTTtRQUM5QixNQUFNSixNQUFNLE1BQU1QLFNBQVNlLFVBQVUsQ0FBQ0o7UUFDdEMsTUFBTUosSUFBSUMsSUFBSTtRQUNkQztJQUNGO0lBRUEsTUFBTUEsWUFBWSxVQUFZO1FBRTVCLHNEQUFzRDtRQUN0RCwrQkFBK0I7UUFDL0IsTUFBTU8sT0FBTyxNQUFNaEIsU0FBU2lCLElBQUk7UUFDaEMsRUFBRTtRQUNGLE1BQU1DLFFBQVEsTUFBTUMsUUFBUUMsR0FBRyxDQUFDSixLQUFLSyxHQUFHLENBQUMsT0FBTVYsSUFBSztZQUNsRCxvREFBb0Q7WUFDcEQsSUFBSVcsT0FBTztnQkFDVHBCLFVBQVVTLEVBQUVZLE9BQU87Z0JBQ25CQyxRQUFRYixFQUFFYyxXQUFXO1lBQ3ZCO1lBQ0EsT0FBT0g7UUFDVDtRQUNBLG9FQUFvRTtRQUNwRWpCLFNBQVNhO1FBQ1RRLFFBQVFDLEdBQUcsQ0FBQ1Q7SUFDZDtJQUlBckIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkRSxXQUFXNkIsT0FBTztRQUNsQixJQUFJN0IsV0FBVzhCLE9BQU8sRUFBRTtZQUN0QnBCO1FBQ0YsQ0FBQztJQUNILEdBQUc7UUFBQ1YsV0FBVzhCLE9BQU87S0FBQztJQUV2QixxQkFDRTs7WUFDRzlCLFdBQVc4QixPQUFPLGtCQUNqQiw4REFBQ0M7MEJBQ0UvQixXQUFXOEIsT0FBTzs7Ozs7OzBCQUd2Qiw4REFBQ0U7Z0JBQU1DLFVBQVUsQ0FBQ0MsSUFBTTlCLFlBQVk4QixFQUFFQyxNQUFNLENBQUNDLEtBQUs7Ozs7OzswQkFDbEQsOERBQUNDO2dCQUFPQyxTQUFTL0I7MEJBQVU7Ozs7OztZQUMxQkYsa0JBQUFBLG1CQUFBQSxLQUFBQSxJQUFBQSxNQUFPaUIsR0FBRyxDQUFDLENBQUNpQixNQUFNM0Isa0JBQ2pCLDhEQUFDbUI7O3NDQUNDLDhEQUFDUzs7Z0NBQUlELEtBQUtwQyxRQUFRO2dDQUNmb0MsS0FBS2QsTUFBTSxDQUFDZ0IsUUFBUTs7Ozs7OztzQ0FDdkIsOERBQUNKOzRCQUFPQyxTQUFTLElBQU0zQixXQUFXQztzQ0FBSTs7Ozs7O3NDQUN0Qyw4REFBQ3lCOzRCQUFPQyxTQUFTLElBQU14QixhQUFhRjtzQ0FBSTs7Ozs7O3NDQUN4Qyw4REFBQ3lCOzRCQUFPQyxTQUFTLElBQU10QixXQUFXSjtzQ0FBSTs7Ozs7OzttQkFMOUJBOzs7Ozs7O0FBWWxCLENBQUM7R0FwRnVCYjs7UUFHSEwsNERBQWFBO1FBQ2ZDLDBEQUFXQTs7O0tBSk5JIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdG9kb0FkZHJlc3MgfSBmcm9tIFwiLi4vY29uZmlnXCJcbmltcG9ydCB1c2VDb25uZWN0aW9uIGZyb20gXCIuLi9ob29rcy91c2VDb25uZWN0aW9uXCI7XG5pbXBvcnQgdXNlQ29udHJhY3QgZnJvbSBcIi4uL2hvb2tzL3VzZUNvbnRyYWN0XCJcbmltcG9ydCB0b2RvanNvbiBmcm9tIFwiLi4vbWV0YWRhdGEvdG9kby5qc29uXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG5cbiAgY29uc3QgY29ubmVjdGlvbiA9IHVzZUNvbm5lY3Rpb24oKTtcbiAgY29uc3QgY29udHJhY3QgPSB1c2VDb250cmFjdCh0b2RvQWRkcmVzcywgdG9kb2pzb24uYWJpKTtcblxuICBjb25zdCBbdGFza05hbWUsIHNldFRhc2tOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IFt0YXNrcywgc2V0VGFza3NdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGFkZFRhc2sgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdHhuID0gYXdhaXQgY29udHJhY3QuYWRkVGFzayh0YXNrTmFtZSk7XG4gICAgYXdhaXQgdHhuLndhaXQoKTtcbiAgICBsaXN0VGFza3MoKTtcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZU5hbWUgPSBhc3luYyAoaSkgPT4ge1xuICAgIGNvbnN0IHR4biA9IGF3YWl0IGNvbnRyYWN0LnVwZGF0ZVRhc2tDb250ZW50KGksIHRhc2tOYW1lKTtcbiAgICBhd2FpdCB0eG4ud2FpdCgpO1xuICAgIGxpc3RUYXNrcygpO1xuICB9XG5cbiAgY29uc3QgdXBkYXRlU3RhdHVzID0gYXN5bmMgKGkpID0+IHtcbiAgICBjb25zdCB0eG4gPSBhd2FpdCBjb250cmFjdC51cGRhdGVUYXNrU3RhdHVzKGkpO1xuICAgIGF3YWl0IHR4bi53YWl0KCk7XG4gICAgbGlzdFRhc2tzKCk7XG4gIH1cblxuICBjb25zdCByZW1vdmVUYXNrID0gYXN5bmMgKGkpID0+IHtcbiAgICBjb25zdCB0eG4gPSBhd2FpdCBjb250cmFjdC5yZW1vdmVUYXNrKGkpO1xuICAgIGF3YWl0IHR4bi53YWl0KCk7XG4gICAgbGlzdFRhc2tzKCk7XG4gIH1cblxuICBjb25zdCBsaXN0VGFza3MgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAvL2tvbnRyYXR0YW4gZMO2bmVuIGRlxJ9lcmkgZGF0YSBkZcSfacWfa2VuaW5kZSB0dXR1eW9ydXouXG4gICAgLy9rb250cmF0dGFuIGJpciBhcnJheSBkw7Zuw7x5b3IuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGNvbnRyYWN0Lmxpc3QoKTtcbiAgICAvL1xuICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgUHJvbWlzZS5hbGwoZGF0YS5tYXAoYXN5bmMgaSA9PiB7XG4gICAgICAvL2TDtm5nw7xuw7xuIGhlciBiaXIgYWTEsW3EsW5kYSBiaXIgbmVzbmUgb2x1xZ90dXJ1eW9ydXouXG4gICAgICBsZXQgaXRlbSA9IHtcbiAgICAgICAgdGFza05hbWU6IGkuY29udGVudCxcbiAgICAgICAgc3RhdHVzOiBpLmlzQ29tcGxldGVkXG4gICAgICB9XG4gICAgICByZXR1cm4gaXRlbVxuICAgIH0pKVxuICAgIC8vZMO2bmfDvCBzb251Y3VuZGFuIGRvbGFuIGl0ZW1zIGFycmF5aW5pIHRhc2tzIHN0YXRlJ2ltaXplIGtveXV5b3J1ei5cbiAgICBzZXRUYXNrcyhpdGVtcyk7XG4gICAgY29uc29sZS5sb2coaXRlbXMpO1xuICB9XG5cblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29ubmVjdGlvbi5jb25uZWN0KCk7XG4gICAgaWYgKGNvbm5lY3Rpb24uYWRkcmVzcykge1xuICAgICAgbGlzdFRhc2tzKCk7XG4gICAgfVxuICB9LCBbY29ubmVjdGlvbi5hZGRyZXNzXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7Y29ubmVjdGlvbi5hZGRyZXNzICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7Y29ubmVjdGlvbi5hZGRyZXNzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKSA9PiBzZXRUYXNrTmFtZShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZFRhc2t9ID5BZGQ8L2J1dHRvbj5cbiAgICAgIHt0YXNrcz8ubWFwKCh0YXNrLCBpKSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtpfT5cbiAgICAgICAgICA8aDE+e3Rhc2sudGFza05hbWV9XG4gICAgICAgICAgICB7dGFzay5zdGF0dXMudG9TdHJpbmcoKX08L2gxPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdXBkYXRlTmFtZShpKX0+VXBkYXRlTmFtZTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdXBkYXRlU3RhdHVzKGkpfT5VcGRhdGVTdGF0dXM8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJlbW92ZVRhc2soaSl9Plg8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKVxuICAgICAgfVxuXG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ0b2RvQWRkcmVzcyIsInVzZUNvbm5lY3Rpb24iLCJ1c2VDb250cmFjdCIsInRvZG9qc29uIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIb21lIiwiY29ubmVjdGlvbiIsImNvbnRyYWN0IiwiYWJpIiwidGFza05hbWUiLCJzZXRUYXNrTmFtZSIsInRhc2tzIiwic2V0VGFza3MiLCJhZGRUYXNrIiwidHhuIiwid2FpdCIsImxpc3RUYXNrcyIsInVwZGF0ZU5hbWUiLCJpIiwidXBkYXRlVGFza0NvbnRlbnQiLCJ1cGRhdGVTdGF0dXMiLCJ1cGRhdGVUYXNrU3RhdHVzIiwicmVtb3ZlVGFzayIsImRhdGEiLCJsaXN0IiwiaXRlbXMiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJzdGF0dXMiLCJpc0NvbXBsZXRlZCIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0IiwiYWRkcmVzcyIsImRpdiIsImlucHV0Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJvbkNsaWNrIiwidGFzayIsImgxIiwidG9TdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});