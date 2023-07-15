module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_API__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/API */ \"./services/API.js\");\n/* harmony import */ var _services_AccessTokenService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/AccessTokenService */ \"./services/AccessTokenService.js\");\n/* harmony import */ var _services_UserDataService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/UserDataService */ \"./services/UserDataService.js\");\nvar _jsxFileName = \"/Users/draki/Documents/Epitech/EIP/admin/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nconst Login = () => {\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const token = _services_AccessTokenService__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get();\n    if (token) next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/control');\n  });\n  const {\n    0: email,\n    1: setEmail\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    0: password,\n    1: setPassword\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    0: loading,\n    1: setLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const {\n    0: error,\n    1: setError\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  const submit = async () => {\n    const data = {\n      email,\n      password\n    };\n    setError(null);\n    setLoading(true);\n    const response = await _services_API__WEBPACK_IMPORTED_MODULE_3__[\"default\"].send('POST', '/api/auth/login', data, false);\n    //const rslt = JSON.parse(response);\n    setLoading(false);\n    if (response.status === 200) {\n      if (response.data.user.roles[0] == \"ADMIN\") {\n        console.log(response.data.user.roles[0]);\n        _services_AccessTokenService__WEBPACK_IMPORTED_MODULE_4__[\"default\"].set(response.data.user.token);\n        _services_UserDataService__WEBPACK_IMPORTED_MODULE_5__[\"default\"].set(response.data.user);\n        await next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/control');\n      } else {\n        setError(\"Non Admin Users\");\n      }\n    } else if (response.status === 401) setError(\"Bad credentials\");else setError(\"An error occurred\");\n  };\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n    style: {\n      height: \"100vh\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n    style: {\n      width: 400,\n      backgroundColor: \"#fff\",\n      margin: \"auto\",\n      textAlign: \"center\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }\n  }, error && __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Alert\"], {\n    style: {\n      marginBottom: 30\n    },\n    message: error,\n    type: \"error\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 21\n    }\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n    placeholder: \"Email\",\n    value: email,\n    onChange: event => setEmail(event.target.value),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 17\n    }\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n    style: {\n      marginTop: 15\n    },\n    placeholder: \"Password\",\n    value: password,\n    type: \"password\",\n    onChange: event => setPassword(event.target.value),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 17\n    }\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    type: \"primary\",\n    onClick: submit,\n    loading: loading,\n    style: {\n      marginTop: 20\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 17\n    }\n  }, \"Submit\")));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkxvZ2luIiwidXNlRWZmZWN0IiwidG9rZW4iLCJBY2Nlc3NUb2tlblNlcnZpY2UiLCJnZXQiLCJSb3V0ZXIiLCJwdXNoIiwiZW1haWwiLCJzZXRFbWFpbCIsInVzZVN0YXRlIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsInN1Ym1pdCIsImRhdGEiLCJyZXNwb25zZSIsIkFQSSIsInNlbmQiLCJzdGF0dXMiLCJ1c2VyIiwicm9sZXMiLCJjb25zb2xlIiwibG9nIiwic2V0IiwiVXNlckRhdGFTZXJ2aWNlIiwiX19qc3giLCJMYXlvdXQiLCJzdHlsZSIsImhlaWdodCIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiQ2FyZCIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luIiwidGV4dEFsaWduIiwiQWxlcnQiLCJtYXJnaW5Cb3R0b20iLCJtZXNzYWdlIiwidHlwZSIsIklucHV0IiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJtYXJnaW5Ub3AiLCJCdXR0b24iLCJvbkNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDaEI7QUFDdUI7QUFDdEI7QUFDOEI7QUFDTjtBQUcxRCxNQUFNQSxLQUFLLEdBQUdBLENBQUEsS0FBTTtFQUNoQkMsdURBQVMsQ0FBQyxNQUFNO0lBQ1osTUFBTUMsS0FBSyxHQUFHQyxvRUFBa0IsQ0FBQ0MsR0FBRyxDQUFDLENBQUM7SUFDdEMsSUFBSUYsS0FBSyxFQUNMRyxrREFBTSxDQUFDQyxJQUFJLENBQUMsVUFBVSxDQUFDO0VBQy9CLENBQUMsQ0FBQztFQUVGLE1BQU07SUFBQSxHQUFDQyxLQUFLO0lBQUEs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UUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUNyRCxDQUFDLEVBQ0ZULEtBQUEsQ0FBQ21CLDBDQUFLO0lBQ0ZqQixLQUFLLEVBQUU7TUFBQ3VCLFNBQVMsRUFBRTtJQUFFLENBQUU7SUFDdkJMLFdBQVcsRUFBRSxVQUFXO0lBQ3hCQyxLQUFLLEVBQUV2QyxRQUFTO0lBQ2hCb0MsSUFBSSxFQUFFLFVBQVc7SUFDakJJLFFBQVEsRUFBR0MsS0FBSyxJQUFLeEMsV0FBVyxDQUFDd0MsS0FBSyxDQUFDQyxNQUFNLENBQUNILEtBQUssQ0FBRTtJQUFBakIsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQ3hELENBQUMsRUFDRlQsS0FBQSxDQUFDMEIsMkNBQU07SUFDSFIsSUFBSSxFQUFFLFNBQVU7SUFDaEJTLE9BQU8sRUFBRXZDLE1BQU87SUFDaEJKLE9BQU8sRUFBRUEsT0FBUTtJQUNqQmtCLEtBQUssRUFBRTtNQUFDdUIsU0FBUyxFQUFFO0lBQUUsQ0FBRTtJQUFBckIsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQzFCLFFBRU8sQ0FDTixDQUNGLENBQUM7QUFFakIsQ0FBQztBQUVjckMsb0VBQUsiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHtDYXJkLCBBbGVydCwgSW5wdXQsIEJ1dHRvbiwgTGF5b3V0fSBmcm9tICdhbnRkJztcbmltcG9ydCBBUEkgZnJvbSAnLi4vc2VydmljZXMvQVBJJztcbmltcG9ydCBBY2Nlc3NUb2tlblNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL0FjY2Vzc1Rva2VuU2VydmljZVwiO1xuaW1wb3J0IFVzZXJEYXRhU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvVXNlckRhdGFTZXJ2aWNlXCI7XG5cblxuY29uc3QgTG9naW4gPSAoKSA9PiB7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBBY2Nlc3NUb2tlblNlcnZpY2UuZ2V0KCk7XG4gICAgICAgIGlmICh0b2tlbilcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvY29udHJvbCcpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgY29uc3Qgc3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgfVxuICAgICAgICBzZXRFcnJvcihudWxsKTtcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBUEkuc2VuZCgnUE9TVCcsICcvYXBpL2F1dGgvbG9naW4nLCBkYXRhLCBmYWxzZSk7XG4gICAgICAgIC8vY29uc3QgcnNsdCA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS51c2VyLnJvbGVzWzBdID09IFwiQURNSU5cIikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEudXNlci5yb2xlc1swXSlcbiAgICAgICAgICAgICAgICBBY2Nlc3NUb2tlblNlcnZpY2Uuc2V0KHJlc3BvbnNlLmRhdGEudXNlci50b2tlbik7XG4gICAgICAgICAgICAgICAgVXNlckRhdGFTZXJ2aWNlLnNldChyZXNwb25zZS5kYXRhLnVzZXIpO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgUm91dGVyLnB1c2goJy9jb250cm9sJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldEVycm9yKFwiTm9uIEFkbWluIFVzZXJzXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKVxuICAgICAgICAgICAgc2V0RXJyb3IoXCJCYWQgY3JlZGVudGlhbHNcIik7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHNldEVycm9yKFwiQW4gZXJyb3Igb2NjdXJyZWRcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dCBzdHlsZT17e2hlaWdodDogXCIxMDB2aFwifX0+XG4gICAgICAgICAgICA8Q2FyZCBzdHlsZT17e3dpZHRoOiA0MDAsIGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsIG1hcmdpbjogXCJhdXRvXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIn19PlxuICAgICAgICAgICAgICAgIHtlcnJvciAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxBbGVydCBzdHlsZT17e21hcmdpbkJvdHRvbTogMzB9fSBtZXNzYWdlPXtlcnJvcn0gdHlwZT1cImVycm9yXCIgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCJFbWFpbFwifVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEVtYWlsKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6IDE1fX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiUGFzc3dvcmRcIn1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPXtcInBhc3N3b3JkXCJ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFBhc3N3b3JkKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e1wicHJpbWFyeVwifVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luVG9wOiAyMH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./services/API.js":
/*!*************************!*\
  !*** ./services/API.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AccessTokenService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccessTokenService */ \"./services/AccessTokenService.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass API {\n  getDomain() {\n    return \"https://pro-hikup.westeurope.cloudapp.azure.com\";\n  }\n  getApiDomain() {\n    return this.getDomain();\n  }\n  async send(method, route, data = null, auth = true) {\n    let api = this.getApiDomain();\n    let headers = {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    };\n    if (auth) {\n      let accessToken = _AccessTokenService__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get();\n      accessToken = accessToken ? accessToken : '';\n      if (accessToken) headers['Authorization'] = 'Bearer ' + accessToken;\n    }\n    if (method !== \"GET\" && data) {\n      data = JSON.stringify(data);\n      data = \"{ \\\"user\\\": \" + data + \"}\";\n    } else data = null;\n    try {\n      let url = api + route;\n      let response = await fetch(url, {\n        method: method,\n        headers: headers,\n        body: data\n      });\n      if (response.status === 401) {\n        _AccessTokenService__WEBPACK_IMPORTED_MODULE_0__[\"default\"].remove();\n        return {\n          data: await response.json(),\n          status: response.status\n        };\n      }\n      console.log(data);\n      return {\n        data: await response.json(),\n        status: response.status\n      };\n    } catch (e) {\n      await next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');\n      return {\n        data: null,\n        status: -1\n      };\n    }\n  }\n}\nconst service = new API();\n/* harmony default export */ __webpack_exports__[\"default\"] = (service);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9BUEkuanM/ZjY0YSJdLCJuYW1lcyI6WyJBUEkiLCJnZXREb21haW4iLCJwcm9jZXNzIiwiZ2V0QXBpRG9tYWluIiwic2VuZCIsIm1ldGhvZCIsInJvdXRlIiwiZGF0YSIsImF1dGgiLCJhcGkiLCJoZWFkZXJzIiwiYWNjZXNzVG9rZW4iLCJBY2Nlc3NUb2tlblNlcnZpY2UiLCJnZXQiLCJKU09OIiwic3RyaW5naWZ5IiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsImJvZHkiLCJzdGF0dXMiLCJyZW1vdmUiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImUiLCJSb3V0ZXIiLCJwdXNoIiwic2VydmljZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0Q7QUFDckI7QUFFakMsTUFBTUEsR0FBRyxDQUFDO0VBQ05DLFNBQVNBLENBQUEsRUFBRztJQUNSLE9BQU9DLGlEQUErQjtFQUMxQztFQUVBQyxZQUFZQSxDQUFBLEVBQUc7SUFDWCxPQUFPLElBQUksQ0FBQ0YsU0FBUyxDQUFDLENBQUM7RUFDM0I7RUFFQSxNQUFNRyxJQUFJQSxDQUFDQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxHQUFHLElBQUksRUFBRUMsSUFBSSxHQUFHLElBQUksRUFBRTtJQUNoRCxJQUFJQyxHQUFHLEdBQUcsSUFBSSxDQUFDTixZQUFZLENBQUMsQ0FBQztJQUM3QixJQUFJTyxPQUFPLEdBQUc7TUFDVixRQUFRLEVBQUUsa0JBQWtCO01BQzVCLGNBQWMsRUFBRTtJQUNwQixDQUFDO0lBQ0QsSUFBSUYsSUFBSSxFQUFFO01BQ04sSUFBSUcsV0FBVyxHQUFHQywyREFBa0IsQ0FBQ0MsR0FBRyxDQUFDLENBQUM7TUFDMUNGLFdBQVcsR0FBR0EsV0FBVyxHQUFHQSxXQUFXLEdBQUcsRUFBRTtNQUM1QyxJQUFJQSxXQUFXLEVBQ1hELE9BQU8sQ0FBQyxlQUFlLENBQUMsR0FBRyxTQUFTLEdBQUdDLFdBQVc7SUFDMUQ7SUFDQSxJQUFJTixNQUFNLEtBQUssS0FBSyxJQUFJRSxJQUFJLEVBQUU7TUFDMUJBLElBQUksR0FBR08sSUFBSSxDQUFDQyxTQUFTLENBQUNSLElBQUksQ0FBQztNQUMzQkEsSUFBSSxHQUFHLGNBQWMsR0FBRUEsSUFBSSxHQUFHLEdBQUc7SUFDckMsQ0FBQyxNQUVHQSxJQUFJLEdBQUcsSUFBSTtJQUNmLElBQUk7TUFDSixJQUFJUyxHQUFHLEdBQUdQLEdBQUcsR0FBR0gsS0FBSztNQUNyQixJQUFJVyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDRixHQUFHLEVBQUU7UUFDeEJYLE1BQU0sRUFBRUEsTUFBTTtRQUNkSyxPQUFPLEVBQUVBLE9BQU87UUFDaEJTLElBQUksRUFBRVo7TUFDVixDQUFDLENBQUM7TUFDRixJQUFJVSxRQUFRLENBQUNHLE1BQU0sS0FBSyxHQUFHLEVBQUU7UUFDekJSLDJEQUFrQixDQUFDUyxNQUFNLENBQUMsQ0FBQztRQUMzQixPQUFPO1VBQ0hkLElBQUksRUFBRSxNQUFNVSxRQUFRLENBQUNLLElBQUksQ0FBQyxDQUFDO1VBQzNCRixNQUFNLEVBQUVILFFBQVEsQ0FBQ0c7UUFDckIsQ0FBQztNQUNMO01BQ0FHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDakIsSUFBSSxDQUFDO01BQ2pCLE9BQU87UUFDSEEsSUFBSSxFQUFFLE1BQU1VLFFBQVEsQ0FBQ0ssSUFBSSxDQUFDLENBQUM7UUFDM0JGLE1BQU0sRUFBRUgsUUFBUSxDQUFDRztNQUNyQixDQUFDO0lBQ0wsQ0FBQyxDQUFDLE9BQU9LLENBQUMsRUFBRTtNQUNSLE1BQU1DLGtEQUFNLENBQUNDLElBQUksQ0FBQyxHQUFHLENBQUM7TUFDdEIsT0FBTztRQUNIcEIsSUFBSSxFQUFFLElBQUk7UUFDVmEsTUFBTSxFQUFFLENBQUM7TUFDYixDQUFDO0lBQ0w7RUFDSjtBQUNKO0FBRUEsTUFBTVEsT0FBTyxHQUFHLElBQUk1QixHQUFHLENBQUMsQ0FBQztBQUNWNEIsc0VBQU8iLCJmaWxlIjoiLi9zZXJ2aWNlcy9BUEkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWNjZXNzVG9rZW5TZXJ2aWNlIGZyb20gXCIuL0FjY2Vzc1Rva2VuU2VydmljZVwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY2xhc3MgQVBJIHtcbiAgICBnZXREb21haW4oKSB7XG4gICAgICAgIHJldHVybiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMO1xuICAgIH1cblxuICAgIGdldEFwaURvbWFpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RG9tYWluKCk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2VuZChtZXRob2QsIHJvdXRlLCBkYXRhID0gbnVsbCwgYXV0aCA9IHRydWUpIHtcbiAgICAgICAgbGV0IGFwaSA9IHRoaXMuZ2V0QXBpRG9tYWluKCk7XG4gICAgICAgIGxldCBoZWFkZXJzID0ge1xuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGF1dGgpIHtcbiAgICAgICAgICAgIGxldCBhY2Nlc3NUb2tlbiA9IEFjY2Vzc1Rva2VuU2VydmljZS5nZXQoKTtcbiAgICAgICAgICAgIGFjY2Vzc1Rva2VuID0gYWNjZXNzVG9rZW4gPyBhY2Nlc3NUb2tlbiA6ICcnO1xuICAgICAgICAgICAgaWYgKGFjY2Vzc1Rva2VuKVxuICAgICAgICAgICAgICAgIGhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9ICdCZWFyZXIgJyArIGFjY2Vzc1Rva2VuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgIT09IFwiR0VUXCIgJiYgZGF0YSkge1xuICAgICAgICAgICAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgICAgICAgZGF0YSA9IFwieyBcXFwidXNlclxcXCI6IFwiKyBkYXRhICsgXCJ9XCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGF0YSA9IG51bGw7XG4gICAgICAgIHRyeSB7XG4gICAgICAgIGxldCB1cmwgPSBhcGkgKyByb3V0ZTtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgICAgICAgICBib2R5OiBkYXRhLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICAgICAgICBBY2Nlc3NUb2tlblNlcnZpY2UucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogYXdhaXQgcmVzcG9uc2UuanNvbigpLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkYXRhOiBhd2FpdCByZXNwb25zZS5qc29uKCksXG4gICAgICAgICAgICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBhd2FpdCBSb3V0ZXIucHVzaCgnLycpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAgICAgICAgIHN0YXR1czogLTEsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBzZXJ2aWNlID0gbmV3IEFQSSgpO1xuZXhwb3J0IGRlZmF1bHQgc2VydmljZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./services/API.js\n");

/***/ }),

/***/ "./services/AccessTokenService.js":
/*!****************************************!*\
  !*** ./services/AccessTokenService.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nconst storageName = \"access_token\";\nclass AccessTokenService {\n  constructor() {\n    _defineProperty(this, \"accessToken\", null);\n  }\n  get() {\n    if (this.accessToken) return this.accessToken;\n    if (localStorage === undefined) return null;\n    const accessToken = localStorage.getItem(storageName);\n    this.accessToken = accessToken;\n    return accessToken;\n  }\n  set(accessToken) {\n    this.accessToken = accessToken;\n    localStorage.setItem(storageName, accessToken);\n  }\n  remove() {\n    this.accessToken = null;\n    localStorage.removeItem(storageName);\n  }\n}\nconst service = new AccessTokenService();\n/* harmony default export */ __webpack_exports__[\"default\"] = (service);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9BY2Nlc3NUb2tlblNlcnZpY2UuanM/ZGZmZSJdLCJuYW1lcyI6WyJzdG9yYWdlTmFtZSIsIkFjY2Vzc1Rva2VuU2VydmljZSIsImNvbnN0cnVjdG9yIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0IiwiYWNjZXNzVG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJ1bmRlZmluZWQiLCJnZXRJdGVtIiwic2V0Iiwic2V0SXRlbSIsInJlbW92ZSIsInJlbW92ZUl0ZW0iLCJzZXJ2aWNlIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsV0FBVyxHQUFHLGNBQWM7QUFFbEMsTUFBTUMsa0JBQWtCLENBQUM7RUFBQUMsWUFBQTtJQUFBQyxlQUFBLHNCQUNQLElBQUk7RUFBQTtFQUVsQkMsR0FBR0EsQ0FBQSxFQUFHO0lBQ0YsSUFBSSxJQUFJLENBQUNDLFdBQVcsRUFDaEIsT0FBTyxJQUFJLENBQUNBLFdBQVc7SUFFM0IsSUFBSUMsWUFBWSxLQUFLQyxTQUFTLEVBQzFCLE9BQU8sSUFBSTtJQUNmLE1BQU1GLFdBQVcsR0FBR0MsWUFBWSxDQUFDRSxPQUFPLENBQUNSLFdBQVcsQ0FBQztJQUNyRCxJQUFJLENBQUNLLFdBQVcsR0FBR0EsV0FBVztJQUM5QixPQUFPQSxXQUFXO0VBQ3RCO0VBRUFJLEdBQUdBLENBQUNKLFdBQVcsRUFBRTtJQUNiLElBQUksQ0FBQ0EsV0FBVyxHQUFHQSxXQUFXO0lBQzlCQyxZQUFZLENBQUNJLE9BQU8sQ0FBQ1YsV0FBVyxFQUFFSyxXQUFXLENBQUM7RUFDbEQ7RUFFQU0sTUFBTUEsQ0FBQSxFQUFHO0lBQ0wsSUFBSSxDQUFDTixXQUFXLEdBQUcsSUFBSTtJQUN2QkMsWUFBWSxDQUFDTSxVQUFVLENBQUNaLFdBQVcsQ0FBQztFQUN4QztBQUNKO0FBRUEsTUFBTWEsT0FBTyxHQUFHLElBQUlaLGtCQUFrQixDQUFDLENBQUM7QUFDekJZLHNFQUFPIiwiZmlsZSI6Ii4vc2VydmljZXMvQWNjZXNzVG9rZW5TZXJ2aWNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3RvcmFnZU5hbWUgPSBcImFjY2Vzc190b2tlblwiO1xuXG5jbGFzcyBBY2Nlc3NUb2tlblNlcnZpY2Uge1xuICAgIGFjY2Vzc1Rva2VuID0gbnVsbDtcblxuICAgIGdldCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYWNjZXNzVG9rZW4pXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hY2Nlc3NUb2tlbjtcblxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yYWdlTmFtZSk7XG4gICAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBhY2Nlc3NUb2tlblxuICAgICAgICByZXR1cm4gYWNjZXNzVG9rZW47XG4gICAgfVxuXG4gICAgc2V0KGFjY2Vzc1Rva2VuKSB7XG4gICAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBhY2Nlc3NUb2tlbjtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmFnZU5hbWUsIGFjY2Vzc1Rva2VuKTtcbiAgICB9XG5cbiAgICByZW1vdmUoKSB7XG4gICAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBudWxsO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShzdG9yYWdlTmFtZSk7XG4gICAgfVxufVxuXG5jb25zdCBzZXJ2aWNlID0gbmV3IEFjY2Vzc1Rva2VuU2VydmljZSgpO1xuZXhwb3J0IGRlZmF1bHQgc2VydmljZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./services/AccessTokenService.js\n");

/***/ }),

/***/ "./services/UserDataService.js":
/*!*************************************!*\
  !*** ./services/UserDataService.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nconst storageName2 = \"user_data\";\nclass UserDataService {\n  constructor() {\n    _defineProperty(this, \"userData\", null);\n  }\n  get() {\n    if (this.userData) return this.userData;\n    if (localStorage === undefined) return null;\n    const userData = localStorage.getItem(storageName2);\n    this.userData = userData;\n    return userData;\n  }\n  set(userData) {\n    this.userData = userData;\n    delete userData.token;\n    localStorage.setItem(storageName2, JSON.stringify(userData));\n  }\n  remove() {\n    this.userData = null;\n    localStorage.removeItem(storageName2);\n  }\n}\nconst service = new UserDataService();\n/* harmony default export */ __webpack_exports__[\"default\"] = (service);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9Vc2VyRGF0YVNlcnZpY2UuanM/NDUwYiJdLCJuYW1lcyI6WyJzdG9yYWdlTmFtZTIiLCJVc2VyRGF0YVNlcnZpY2UiLCJjb25zdHJ1Y3RvciIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldCIsInVzZXJEYXRhIiwibG9jYWxTdG9yYWdlIiwidW5kZWZpbmVkIiwiZ2V0SXRlbSIsInNldCIsInRva2VuIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZW1vdmUiLCJyZW1vdmVJdGVtIiwic2VydmljZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFlBQVksR0FBRyxXQUFXO0FBRWhDLE1BQU1DLGVBQWUsQ0FBQztFQUFBQyxZQUFBO0lBQUFDLGVBQUEsbUJBQ1AsSUFBSTtFQUFBO0VBRWZDLEdBQUdBLENBQUEsRUFBRztJQUNGLElBQUksSUFBSSxDQUFDQyxRQUFRLEVBQ2IsT0FBTyxJQUFJLENBQUNBLFFBQVE7SUFFeEIsSUFBSUMsWUFBWSxLQUFLQyxTQUFTLEVBQzFCLE9BQU8sSUFBSTtJQUNmLE1BQU1GLFFBQVEsR0FBR0MsWUFBWSxDQUFDRSxPQUFPLENBQUNSLFlBQVksQ0FBQztJQUNuRCxJQUFJLENBQUNLLFFBQVEsR0FBR0EsUUFBUTtJQUN4QixPQUFPQSxRQUFRO0VBQ25CO0VBRUFJLEdBQUdBLENBQUNKLFFBQVEsRUFBRTtJQUNWLElBQUksQ0FBQ0EsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLE9BQU9BLFFBQVEsQ0FBQ0ssS0FBSztJQUNyQkosWUFBWSxDQUFDSyxPQUFPLENBQUNYLFlBQVksRUFBRVksSUFBSSxDQUFDQyxTQUFTLENBQUNSLFFBQVEsQ0FBQyxDQUFDO0VBQ2hFO0VBRUFTLE1BQU1BLENBQUEsRUFBRztJQUNMLElBQUksQ0FBQ1QsUUFBUSxHQUFHLElBQUk7SUFDcEJDLFlBQVksQ0FBQ1MsVUFBVSxDQUFDZixZQUFZLENBQUM7RUFDekM7QUFDSjtBQUVBLE1BQU1nQixPQUFPLEdBQUcsSUFBSWYsZUFBZSxDQUFDLENBQUM7QUFDdEJlLHNFQUFPIiwiZmlsZSI6Ii4vc2VydmljZXMvVXNlckRhdGFTZXJ2aWNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3RvcmFnZU5hbWUyID0gXCJ1c2VyX2RhdGFcIjtcblxuY2xhc3MgVXNlckRhdGFTZXJ2aWNlIHtcbiAgICB1c2VyRGF0YSA9IG51bGw7XG5cbiAgICBnZXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZXJEYXRhKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlckRhdGE7XG5cbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmFnZU5hbWUyKTtcbiAgICAgICAgdGhpcy51c2VyRGF0YSA9IHVzZXJEYXRhXG4gICAgICAgIHJldHVybiB1c2VyRGF0YTtcbiAgICB9XG5cbiAgICBzZXQodXNlckRhdGEpIHtcbiAgICAgICAgdGhpcy51c2VyRGF0YSA9IHVzZXJEYXRhO1xuICAgICAgICBkZWxldGUgdXNlckRhdGEudG9rZW47XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0b3JhZ2VOYW1lMiwgSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpKTtcbiAgICB9XG5cbiAgICByZW1vdmUoKSB7XG4gICAgICAgIHRoaXMudXNlckRhdGEgPSBudWxsO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShzdG9yYWdlTmFtZTIpO1xuICAgIH1cbn1cblxuY29uc3Qgc2VydmljZSA9IG5ldyBVc2VyRGF0YVNlcnZpY2UoKTtcbmV4cG9ydCBkZWZhdWx0IHNlcnZpY2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./services/UserDataService.js\n");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCI/MDhhYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhbnRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///antd\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });