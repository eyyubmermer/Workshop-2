"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"counterAddress\": () => (/* binding */ counterAddress)\n/* harmony export */ });\nconst counterAddress = \"0x5221cc93BF86eD3aEc56b6e5FA51cfc828076C06\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLGlCQUFpQiw2Q0FBNkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3VudGVyLy4vY29uZmlnLmpzP2MyYjMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNvdW50ZXJBZGRyZXNzID0gXCIweDUyMjFjYzkzQkY4NmVEM2FFYzU2YjZlNUZBNTFjZmM4MjgwNzZDMDZcIjsiXSwibmFtZXMiOlsiY291bnRlckFkZHJlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./config.js\n");

/***/ }),

/***/ "./hooks/useConnection.js":
/*!********************************!*\
  !*** ./hooks/useConnection.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst useConnection = ()=>{\n    const [signer, setSigner] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    const [provider, setProvider] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [auth, setAuth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isConnecting, setIsConnecting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const connect = async ()=>{\n        if (!window.alert) {\n            alert(\"metamask is not installed!\");\n            return;\n        }\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.providers.Web3Provider(window.ethereum);\n        try {\n            setIsConnecting(true);\n            await provider.send(\"eth_requestAccounts\", []);\n            const signer = await provider.getSigner();\n            const address = await signer.getAddress();\n            setSigner(signer);\n            setProvider(provider);\n            setAddress(address);\n            setAuth(true);\n            setIsConnecting(false);\n        } catch (error) {\n            console.log(error);\n            setIsConnecting(false);\n        }\n    };\n    return {\n        connect,\n        signer,\n        provider,\n        address,\n        auth,\n        isConnecting\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useConnection); // function connect() {\n //     if (!window.alert) {\n //         alert(\"metamask is not installed!\");\n //         return;\n //     }\n //     const provider = new ethers.providers.Web3Provider(window.ethereum);\n //     provider\n //         .send(\"eth_requestAccounts\", [])\n //         .then((accounts) => setAccount(accounts[0]))\n //         .catch((err) => console.log(err))\n // }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VDb25uZWN0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdDO0FBQ1k7QUFFNUMsTUFBTUcsZ0JBQWdCLElBQU07SUFFeEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdILCtDQUFRQSxDQUFDSTtJQUNyQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDTyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1MsTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3RDLE1BQU0sQ0FBQ1csY0FBY0MsZ0JBQWdCLEdBQUdaLCtDQUFRQSxDQUFDLEtBQUs7SUFFdEQsTUFBTWEsVUFBVSxVQUFZO1FBQ3hCLElBQUksQ0FBQ0MsT0FBT0MsS0FBSyxFQUFFO1lBQ2ZBLE1BQU07WUFDTjtRQUNKLENBQUM7UUFFRCxNQUFNVixXQUFXLElBQUlQLGlFQUE2QixDQUFDZ0IsT0FBT0ksUUFBUTtRQUVsRSxJQUFJO1lBQ0FOLGdCQUFnQixJQUFJO1lBQ3BCLE1BQU1QLFNBQVNjLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtZQUM3QyxNQUFNakIsU0FBUyxNQUFNRyxTQUFTZSxTQUFTO1lBQ3ZDLE1BQU1iLFVBQVUsTUFBTUwsT0FBT21CLFVBQVU7WUFDdkNsQixVQUFVRDtZQUNWSSxZQUFZRDtZQUNaRyxXQUFXRDtZQUNYRyxRQUFRLElBQUk7WUFDWkUsZ0JBQWdCLEtBQUs7UUFDekIsRUFBRSxPQUFPVSxPQUFPO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDWlYsZ0JBQWdCLEtBQUs7UUFDekI7SUFDSjtJQUVBLE9BQU87UUFDSEM7UUFDQVg7UUFDQUc7UUFDQUU7UUFDQUU7UUFDQUU7SUFDSjtBQUNKO0FBRUEsaUVBQWVWLGFBQWFBLEVBQUMsQ0FPN0IsdUJBQXVCO0NBQ3ZCLDJCQUEyQjtDQUMzQiwrQ0FBK0M7Q0FDL0Msa0JBQWtCO0NBQ2xCLFFBQVE7Q0FFUiwyRUFBMkU7Q0FDM0UsZUFBZTtDQUNmLDJDQUEyQztDQUMzQyx1REFBdUQ7Q0FDdkQsNENBQTRDO0NBQzVDLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3VudGVyLy4vaG9va3MvdXNlQ29ubmVjdGlvbi5qcz81MzNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgdXNlQ29ubmVjdGlvbiA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbc2lnbmVyLCBzZXRTaWduZXJdID0gdXNlU3RhdGUodW5kZWZpbmVkKVxyXG4gICAgY29uc3QgW3Byb3ZpZGVyLCBzZXRQcm92aWRlcl0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2lzQ29ubmVjdGluZywgc2V0SXNDb25uZWN0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGNvbm5lY3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF3aW5kb3cuYWxlcnQpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJtZXRhbWFzayBpcyBub3QgaW5zdGFsbGVkIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgc2V0SXNDb25uZWN0aW5nKHRydWUpO1xyXG4gICAgICAgICAgICBhd2FpdCBwcm92aWRlci5zZW5kKFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLCBbXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpZ25lciA9IGF3YWl0IHByb3ZpZGVyLmdldFNpZ25lcigpO1xyXG4gICAgICAgICAgICBjb25zdCBhZGRyZXNzID0gYXdhaXQgc2lnbmVyLmdldEFkZHJlc3MoKTtcclxuICAgICAgICAgICAgc2V0U2lnbmVyKHNpZ25lcik7XHJcbiAgICAgICAgICAgIHNldFByb3ZpZGVyKHByb3ZpZGVyKTtcclxuICAgICAgICAgICAgc2V0QWRkcmVzcyhhZGRyZXNzKTtcclxuICAgICAgICAgICAgc2V0QXV0aCh0cnVlKTtcclxuICAgICAgICAgICAgc2V0SXNDb25uZWN0aW5nKGZhbHNlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIHNldElzQ29ubmVjdGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY29ubmVjdCxcclxuICAgICAgICBzaWduZXIsXHJcbiAgICAgICAgcHJvdmlkZXIsXHJcbiAgICAgICAgYWRkcmVzcyxcclxuICAgICAgICBhdXRoLFxyXG4gICAgICAgIGlzQ29ubmVjdGluZ1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlQ29ubmVjdGlvbjtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gZnVuY3Rpb24gY29ubmVjdCgpIHtcclxuLy8gICAgIGlmICghd2luZG93LmFsZXJ0KSB7XHJcbi8vICAgICAgICAgYWxlcnQoXCJtZXRhbWFzayBpcyBub3QgaW5zdGFsbGVkIVwiKTtcclxuLy8gICAgICAgICByZXR1cm47XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcclxuLy8gICAgIHByb3ZpZGVyXHJcbi8vICAgICAgICAgLnNlbmQoXCJldGhfcmVxdWVzdEFjY291bnRzXCIsIFtdKVxyXG4vLyAgICAgICAgIC50aGVuKChhY2NvdW50cykgPT4gc2V0QWNjb3VudChhY2NvdW50c1swXSkpXHJcbi8vICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpXHJcbi8vIH0iXSwibmFtZXMiOlsiZXRoZXJzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VDb25uZWN0aW9uIiwic2lnbmVyIiwic2V0U2lnbmVyIiwidW5kZWZpbmVkIiwicHJvdmlkZXIiLCJzZXRQcm92aWRlciIsImFkZHJlc3MiLCJzZXRBZGRyZXNzIiwiYXV0aCIsInNldEF1dGgiLCJpc0Nvbm5lY3RpbmciLCJzZXRJc0Nvbm5lY3RpbmciLCJjb25uZWN0Iiwid2luZG93IiwiYWxlcnQiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJldGhlcmV1bSIsInNlbmQiLCJnZXRTaWduZXIiLCJnZXRBZGRyZXNzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useConnection.js\n");

/***/ }),

/***/ "./hooks/useContract.js":
/*!******************************!*\
  !*** ./hooks/useContract.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst useContract = (_contractAddress, _contractAbi)=>{\n    const [contract, setContract] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.providers.Web3Provider(window.ethereum);\n        const singer = provider.getSigner();\n        const _contract = new ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.Contract(_contractAddress, _contractAbi, singer);\n        setContract(_contract);\n    }, []);\n    return contract;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useContract);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2VDb250cmFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyQztBQUNYO0FBR2hDLE1BQU1HLGNBQWMsQ0FBQ0Msa0JBQWtCQyxlQUFpQjtJQUVwRCxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUMsSUFBSTtJQUU3Q0MsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLE1BQU1PLFdBQVcsSUFBSU4saUVBQTZCLENBQUNTLE9BQU9DLFFBQVE7UUFDbEUsTUFBTUMsU0FBU0wsU0FBU00sU0FBUztRQUNqQyxNQUFNQyxZQUFZLElBQUliLG1EQUFlLENBQUNFLGtCQUFrQkMsY0FBY1E7UUFDdEVOLFlBQVlRO0lBQ2hCLEdBQUcsRUFBRTtJQUVMLE9BQU9UO0FBQ1g7QUFFQSxpRUFBZUgsV0FBV0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvdW50ZXIvLi9ob29rcy91c2VDb250cmFjdC5qcz82NmQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5cclxuXHJcbmNvbnN0IHVzZUNvbnRyYWN0ID0gKF9jb250cmFjdEFkZHJlc3MsIF9jb250cmFjdEFiaSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtjb250cmFjdCwgc2V0Q29udHJhY3RdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pXHJcbiAgICAgICAgY29uc3Qgc2luZ2VyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcbiAgICAgICAgY29uc3QgX2NvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChfY29udHJhY3RBZGRyZXNzLCBfY29udHJhY3RBYmksIHNpbmdlcilcclxuICAgICAgICBzZXRDb250cmFjdChfY29udHJhY3QpO1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIGNvbnRyYWN0XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZUNvbnRyYWN0Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZXRoZXJzIiwidXNlQ29udHJhY3QiLCJfY29udHJhY3RBZGRyZXNzIiwiX2NvbnRyYWN0QWJpIiwiY29udHJhY3QiLCJzZXRDb250cmFjdCIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwid2luZG93IiwiZXRoZXJldW0iLCJzaW5nZXIiLCJnZXRTaWduZXIiLCJfY29udHJhY3QiLCJDb250cmFjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useContract.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useConnection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useConnection */ \"./hooks/useConnection.js\");\n/* harmony import */ var _hooks_useContract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useContract */ \"./hooks/useContract.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _metadata_counter_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../metadata/counter.json */ \"./metadata/counter.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction Home() {\n    const [number, setNumber] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0); //sayı değerimizi tuttuğumuz state\n    const connection = (0,_hooks_useConnection__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); //connection hookumuzu bir değişkende yakaldık\n    const contract = (0,_hooks_useContract__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_config__WEBPACK_IMPORTED_MODULE_3__.counterAddress, _metadata_counter_json__WEBPACK_IMPORTED_MODULE_4__.abi); //kontrat nesnemizi oluşturmak için kontrat adresi ve kontrat abi parametrelerini verdik.\n    const increase = async ()=>{\n        //kontrat nesnesi içerisindeki increase fonksiyonunu çağırıyoruz.\n        const txn = await contract.increase();\n        await txn.wait(); //işlemin bitişini bekliyoruz\n        viewNumber(); //işlem bittikten sonra tekrardan viewNumber fonksiyonunu çalıştıyoruz bu sayede ekrandaki sayı değeri otomatik güncelleniyor.\n    };\n    const decrease = async ()=>{\n        //sayı değerini bir azaltmak için kontrat içindeki decrease metodunu çağırıyoruz \n        const txn = await contract.decrease();\n        await txn.wait();\n        viewNumber();\n    };\n    const reset = async ()=>{\n        //sayı değerini resetlemek için kontrat içindeki reset metodunu çağırıyoruz \n        const txn = await contract.reset();\n        await txn.wait();\n        viewNumber();\n    };\n    const viewNumber = async ()=>{\n        //contrattan çağırdığımız viewValue fonksiyonundan dönen değeri number değişkeninde tutuyoruz.\n        const number = await contract.viewValue();\n        //kontrattan dönen değer hexadecimal formatta dönüyor. toNumber metodu ile integera çeviriyoruz. \n        setNumber(number.toNumber());\n    //kontrattan dönen değeri number state'imizde saklıyoruz.\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        connection.connect();\n        //her renderda viewNumber fonksiyonunu çalıştırıyoruz.\n        //cüzdan bağlı değilken fonksiyonun çalıştırılması halinde hata alınacağından öncesinde cüzdanın bağlı olup olmadığının kontrolünü yapmalıyız.\n        //eğer düzdan bağlı ise viewNumber fonksiyonu çalıştırılır. \n        if (connection.address) {\n            viewNumber();\n        }\n    }, [\n        connection.address\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                connection.address && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: connection.address\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\counter\\\\pages\\\\index.js\",\n                    lineNumber: 65,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: increase,\n                    children: \"Increase\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\counter\\\\pages\\\\index.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: decrease,\n                    children: \"Decrease\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\counter\\\\pages\\\\index.js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: reset,\n                    children: \"Reset\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\counter\\\\pages\\\\index.js\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: number\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\counter\\\\pages\\\\index.js\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\MONSTER\\\\Desktop\\\\patikaworkshop2\\\\counter\\\\pages\\\\index.js\",\n            lineNumber: 62,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUFtRDtBQUNKO0FBQ0o7QUFDUTtBQUNQO0FBSTdCLFNBQVNNLE9BQU87SUFFN0IsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdILCtDQUFRQSxDQUFDLElBQUksa0NBQWtDO0lBRzNFLE1BQU1JLGFBQWFULGdFQUFhQSxJQUFJLDhDQUE4QztJQUNsRixNQUFNVSxXQUFXVCw4REFBV0EsQ0FBQ0MsbURBQWNBLEVBQUVDLHVEQUFlLEdBQUkseUZBQXlGO0lBRXpKLE1BQU1TLFdBQVcsVUFBWTtRQUMzQixpRUFBaUU7UUFDakUsTUFBTUMsTUFBTSxNQUFNSCxTQUFTRSxRQUFRO1FBQ25DLE1BQU1DLElBQUlDLElBQUksSUFBSSw2QkFBNkI7UUFDL0NDLGNBQWMsOEhBQThIO0lBQzlJO0lBRUEsTUFBTUMsV0FBVyxVQUFZO1FBQzNCLGlGQUFpRjtRQUNqRixNQUFNSCxNQUFNLE1BQU1ILFNBQVNNLFFBQVE7UUFDbkMsTUFBTUgsSUFBSUMsSUFBSTtRQUNkQztJQUNGO0lBRUEsTUFBTUUsUUFBUSxVQUFZO1FBQ3hCLDRFQUE0RTtRQUM1RSxNQUFNSixNQUFNLE1BQU1ILFNBQVNPLEtBQUs7UUFDaEMsTUFBTUosSUFBSUMsSUFBSTtRQUNkQztJQUNGO0lBRUEsTUFBTUEsYUFBYSxVQUFZO1FBQzdCLDhGQUE4RjtRQUM5RixNQUFNUixTQUFTLE1BQU1HLFNBQVNRLFNBQVM7UUFDdkMsaUdBQWlHO1FBQ2pHVixVQUFVRCxPQUFPWSxRQUFRO0lBQ3pCLHlEQUF5RDtJQUMzRDtJQUlBZixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RLLFdBQVdXLE9BQU87UUFDbEIsc0RBQXNEO1FBQ3RELDhJQUE4STtRQUM5SSw0REFBNEQ7UUFDNUQsSUFBSVgsV0FBV1ksT0FBTyxFQUFFO1lBQ3RCTjtRQUNGLENBQUM7SUFDSCxHQUFHO1FBQUNOLFdBQVdZLE9BQU87S0FBQztJQUl2QixxQkFDRTtrQkFDRSw0RUFBQ0M7O2dCQUVFYixXQUFXWSxPQUFPLGtCQUNqQiw4REFBQ0M7OEJBQ0ViLFdBQVdZLE9BQU87Ozs7Ozs4QkFJdkIsOERBQUNFO29CQUFPQyxTQUFTWjs4QkFBVzs7Ozs7OzhCQUM1Qiw4REFBQ1c7b0JBQU9DLFNBQVNSOzhCQUFXOzs7Ozs7OEJBQzVCLDhEQUFDTztvQkFBT0MsU0FBU1A7OEJBQVE7Ozs7Ozs4QkFFekIsOERBQUNLOzhCQUNFZjs7Ozs7Ozs7Ozs7OztBQUtYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3VudGVyLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlQ29ubmVjdGlvbiBmcm9tIFwiLi4vaG9va3MvdXNlQ29ubmVjdGlvblwiO1xuaW1wb3J0IHVzZUNvbnRyYWN0IGZyb20gXCIuLi9ob29rcy91c2VDb250cmFjdFwiO1xuaW1wb3J0IHsgY291bnRlckFkZHJlc3MgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQgY291bnRlcmpzb24gZnJvbSBcIi4uL21ldGFkYXRhL2NvdW50ZXIuanNvblwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBbbnVtYmVyLCBzZXROdW1iZXJdID0gdXNlU3RhdGUoMCk7IC8vc2F5xLEgZGXEn2VyaW1pemkgdHV0dHXEn3VtdXogc3RhdGVcblxuXG4gIGNvbnN0IGNvbm5lY3Rpb24gPSB1c2VDb25uZWN0aW9uKCk7IC8vY29ubmVjdGlvbiBob29rdW11enUgYmlyIGRlxJ9pxZ9rZW5kZSB5YWthbGTEsWtcbiAgY29uc3QgY29udHJhY3QgPSB1c2VDb250cmFjdChjb3VudGVyQWRkcmVzcywgY291bnRlcmpzb24uYWJpKTsgIC8va29udHJhdCBuZXNuZW1pemkgb2x1xZ90dXJtYWsgacOnaW4ga29udHJhdCBhZHJlc2kgdmUga29udHJhdCBhYmkgcGFyYW1ldHJlbGVyaW5pIHZlcmRpay5cblxuICBjb25zdCBpbmNyZWFzZSA9IGFzeW5jICgpID0+IHtcbiAgICAvL2tvbnRyYXQgbmVzbmVzaSBpw6dlcmlzaW5kZWtpIGluY3JlYXNlIGZvbmtzaXlvbnVudSDDp2HEn8SxcsSxeW9ydXouXG4gICAgY29uc3QgdHhuID0gYXdhaXQgY29udHJhY3QuaW5jcmVhc2UoKTtcbiAgICBhd2FpdCB0eG4ud2FpdCgpOyAvL2nFn2xlbWluIGJpdGnFn2luaSBiZWtsaXlvcnV6XG4gICAgdmlld051bWJlcigpOyAvL2nFn2xlbSBiaXR0aWt0ZW4gc29ucmEgdGVrcmFyZGFuIHZpZXdOdW1iZXIgZm9ua3NpeW9udW51IMOnYWzEscWfdMSxeW9ydXogYnUgc2F5ZWRlIGVrcmFuZGFraSBzYXnEsSBkZcSfZXJpIG90b21hdGlrIGfDvG5jZWxsZW5peW9yLlxuICB9XG5cbiAgY29uc3QgZGVjcmVhc2UgPSBhc3luYyAoKSA9PiB7XG4gICAgLy9zYXnEsSBkZcSfZXJpbmkgYmlyIGF6YWx0bWFrIGnDp2luIGtvbnRyYXQgacOnaW5kZWtpIGRlY3JlYXNlIG1ldG9kdW51IMOnYcSfxLFyxLF5b3J1eiBcbiAgICBjb25zdCB0eG4gPSBhd2FpdCBjb250cmFjdC5kZWNyZWFzZSgpO1xuICAgIGF3YWl0IHR4bi53YWl0KCk7XG4gICAgdmlld051bWJlcigpO1xuICB9XG5cbiAgY29uc3QgcmVzZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgLy9zYXnEsSBkZcSfZXJpbmkgcmVzZXRsZW1layBpw6dpbiBrb250cmF0IGnDp2luZGVraSByZXNldCBtZXRvZHVudSDDp2HEn8SxcsSxeW9ydXogXG4gICAgY29uc3QgdHhuID0gYXdhaXQgY29udHJhY3QucmVzZXQoKTtcbiAgICBhd2FpdCB0eG4ud2FpdCgpO1xuICAgIHZpZXdOdW1iZXIoKTtcbiAgfVxuXG4gIGNvbnN0IHZpZXdOdW1iZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgLy9jb250cmF0dGFuIMOnYcSfxLFyZMSxxJ/EsW3EsXogdmlld1ZhbHVlIGZvbmtzaXlvbnVuZGFuIGTDtm5lbiBkZcSfZXJpIG51bWJlciBkZcSfacWfa2VuaW5kZSB0dXR1eW9ydXouXG4gICAgY29uc3QgbnVtYmVyID0gYXdhaXQgY29udHJhY3Qudmlld1ZhbHVlKCk7XG4gICAgLy9rb250cmF0dGFuIGTDtm5lbiBkZcSfZXIgaGV4YWRlY2ltYWwgZm9ybWF0dGEgZMO2bsO8eW9yLiB0b051bWJlciBtZXRvZHUgaWxlIGludGVnZXJhIMOnZXZpcml5b3J1ei4gXG4gICAgc2V0TnVtYmVyKG51bWJlci50b051bWJlcigpKVxuICAgIC8va29udHJhdHRhbiBkw7ZuZW4gZGXEn2VyaSBudW1iZXIgc3RhdGUnaW1pemRlIHNha2zEsXlvcnV6LlxuICB9XG5cblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29ubmVjdGlvbi5jb25uZWN0KCk7XG4gICAgLy9oZXIgcmVuZGVyZGEgdmlld051bWJlciBmb25rc2l5b251bnUgw6dhbMSxxZ90xLFyxLF5b3J1ei5cbiAgICAvL2PDvHpkYW4gYmHEn2zEsSBkZcSfaWxrZW4gZm9ua3NpeW9udW4gw6dhbMSxxZ90xLFyxLFsbWFzxLEgaGFsaW5kZSBoYXRhIGFsxLFuYWNhxJ/EsW5kYW4gw7ZuY2VzaW5kZSBjw7x6ZGFuxLFuIGJhxJ9sxLEgb2x1cCBvbG1hZMSxxJ/EsW7EsW4ga29udHJvbMO8bsO8IHlhcG1hbMSxecSxei5cbiAgICAvL2XEn2VyIGTDvHpkYW4gYmHEn2zEsSBpc2Ugdmlld051bWJlciBmb25rc2l5b251IMOnYWzEscWfdMSxcsSxbMSxci4gXG4gICAgaWYgKGNvbm5lY3Rpb24uYWRkcmVzcykge1xuICAgICAgdmlld051bWJlcigpO1xuICAgIH1cbiAgfSwgW2Nvbm5lY3Rpb24uYWRkcmVzc10pXG5cblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXY+XG4gICAgICAgIHsvKiBlxJ9lciBjw7x6ZGFuIGJhxJ9sxLEgaXNlIGPDvHpkYW4gYWRyZXNpbmkgZWtyYW5kYSBnw7ZzdGVyLiAqL31cbiAgICAgICAge2Nvbm5lY3Rpb24uYWRkcmVzcyAmJlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7Y29ubmVjdGlvbi5hZGRyZXNzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHsvKiBoZXIgYmlyIGZvbmtzaXlvbiBpw6dpbiBiaXIgYnV0dG9uIG9sdcWfdHVyZHVrLiBIZXIgYmlyaXNpIG9uQ2xpY2sgb2xkdWtsYXLEsW5kYSBiaXIgZm9ua3NpeW9uIHRldGlrbGl5b3JsYXIgICovfVxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2luY3JlYXNlfSA+SW5jcmVhc2U8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtkZWNyZWFzZX0gPkRlY3JlYXNlPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17cmVzZXR9ID5SZXNldDwvYnV0dG9uPlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge251bWJlcn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZUNvbm5lY3Rpb24iLCJ1c2VDb250cmFjdCIsImNvdW50ZXJBZGRyZXNzIiwiY291bnRlcmpzb24iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJudW1iZXIiLCJzZXROdW1iZXIiLCJjb25uZWN0aW9uIiwiY29udHJhY3QiLCJhYmkiLCJpbmNyZWFzZSIsInR4biIsIndhaXQiLCJ2aWV3TnVtYmVyIiwiZGVjcmVhc2UiLCJyZXNldCIsInZpZXdWYWx1ZSIsInRvTnVtYmVyIiwiY29ubmVjdCIsImFkZHJlc3MiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./metadata/counter.json":
/*!*******************************!*\
  !*** ./metadata/counter.json ***!
  \*******************************/
/***/ ((module) => {

module.exports = JSON.parse('{"abi":[{"inputs":[],"name":"decrease","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"increase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reset","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"viewValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();