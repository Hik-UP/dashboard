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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_API__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/API */ \"./services/API.js\");\n/* harmony import */ var _services_AccessTokenService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/AccessTokenService */ \"./services/AccessTokenService.js\");\n/* harmony import */ var _services_UserDataService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/UserDataService */ \"./services/UserDataService.js\");\nvar _jsxFileName = \"/Users/draki/Documents/Epitech/EIP/dashboard/admin/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nconst Login = () => {\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const token = _services_AccessTokenService__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get();\n    if (token) next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/control');\n  });\n  const {\n    0: email,\n    1: setEmail\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    0: password,\n    1: setPassword\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    0: loading,\n    1: setLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const {\n    0: error,\n    1: setError\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  const submit = async () => {\n    const data = {\n      email,\n      password\n    };\n    setError(null);\n    setLoading(true);\n    const response = await _services_API__WEBPACK_IMPORTED_MODULE_3__[\"default\"].send('POST', '/api/auth/login', data, false);\n    //const rslt = JSON.parse(response);\n    setLoading(false);\n    if (response.status === 200) {\n      if (response.data.user.roles[0] == \"ADMIN\") {\n        console.log(response.data.user.roles[0]);\n        _services_AccessTokenService__WEBPACK_IMPORTED_MODULE_4__[\"default\"].set(response.data.user.token);\n        _services_UserDataService__WEBPACK_IMPORTED_MODULE_5__[\"default\"].set(response.data.user);\n        await next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/control');\n      } else {\n        setError(\"Non Admin Users\");\n      }\n    } else if (response.status === 401) setError(\"Bad credentials\");else setError(\"An error occurred\");\n  };\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n    style: {\n      height: \"100vh\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n    style: {\n      width: 400,\n      backgroundColor: \"#fff\",\n      margin: \"auto\",\n      textAlign: \"center\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }\n  }, error && __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Alert\"], {\n    style: {\n      marginBottom: 30\n    },\n    message: error,\n    type: \"error\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 21\n    }\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n    placeholder: \"Email\",\n    value: email,\n    onChange: event => setEmail(event.target.value),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 17\n    }\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n    style: {\n      marginTop: 15\n    },\n    placeholder: \"Password\",\n    value: password,\n    type: \"password\",\n    onChange: event => setPassword(event.target.value),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 17\n    }\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    type: \"primary\",\n    onClick: submit,\n    loading: loading,\n    style: {\n      marginTop: 20\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 17\n    }\n  }, \"Submit\")));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkxvZ2luIiwidXNlRWZmZWN0IiwidG9rZW4iLCJBY2Nlc3NUb2tlblNlcnZpY2UiLCJnZXQiLCJSb3V0ZXIiLCJwdXNoIiwiZW1haWwiLCJzZXRFbWFpbCIsInVzZVN0YXRlIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsInN1Ym1pdCIsImRhdGEiLCJyZXNwb25zZSIsIkFQSSIsInNlbmQiLCJzdGF0dXMiLCJ1c2VyIiwicm9sZXMiLCJjb25zb2xlIiwibG9nIiwic2V0IiwiVXNlckRhdGFTZXJ2aWNlIiwiX19qc3giLCJMYXlvdXQiLCJzdHlsZSIsImhlaWdodCIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiQ2FyZCIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luIiwidGV4dEFsaWduIiwiQWxlcnQiLCJtYXJnaW5Cb3R0b20iLCJtZXNzYWdlIiwidHlwZSIsIklucHV0IiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJtYXJnaW5Ub3AiLCJCdXR0b24iLCJvbkNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDaEI7QUFDdUI7QUFDdEI7QUFDOEI7QUFDTjtBQUcxRCxNQUFNQSxLQUFLLEdBQUdBLENBQUEsS0FBTTtFQUNoQkMsdURBQVMsQ0FBQyxNQUFNO0lBQ1osTUFBTUMsS0FBSyxHQUFHQyxvRUFBa0IsQ0FBQ0MsR0FBRyxDQUFDLENBQUM7SUFDdEMsSUFBSUYsS0FBSyxFQUNMRyxrREFBTSxDQUFDQyxJQUFJLENBQUMsVUFBVSxDQUFDO0VBQy9CLENBQUMsQ0FBQztFQUVGLE1BQU07SUFBQSxHQUFDQyxLQUFLO0lBQUEs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UUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUNyRCxDQUFDLEVBQ0ZULEtBQUEsQ0FBQ21CLDBDQUFLO0lBQ0ZqQixLQUFLLEVBQUU7TUFBQ3VCLFNBQVMsRUFBRTtJQUFFLENBQUU7SUFDdkJMLFdBQVcsRUFBRSxVQUFXO0lBQ3hCQyxLQUFLLEVBQUV2QyxRQUFTO0lBQ2hCb0MsSUFBSSxFQUFFLFVBQVc7SUFDakJJLFFBQVEsRUFBR0MsS0FBSyxJQUFLeEMsV0FBVyxDQUFDd0MsS0FBSyxDQUFDQyxNQUFNLENBQUNILEtBQUssQ0FBRTtJQUFBakIsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQ3hELENBQUMsRUFDRlQsS0FBQSxDQUFDMEIsMkNBQU07SUFDSFIsSUFBSSxFQUFFLFNBQVU7SUFDaEJTLE9BQU8sRUFBRXZDLE1BQU87SUFDaEJKLE9BQU8sRUFBRUEsT0FBUTtJQUNqQmtCLEtBQUssRUFBRTtNQUFDdUIsU0FBUyxFQUFFO0lBQUUsQ0FBRTtJQUFBckIsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQzFCLFFBRU8sQ0FDTixDQUNGLENBQUM7QUFFakIsQ0FBQztBQUVjckMsb0VBQUsiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHtDYXJkLCBBbGVydCwgSW5wdXQsIEJ1dHRvbiwgTGF5b3V0fSBmcm9tICdhbnRkJztcbmltcG9ydCBBUEkgZnJvbSAnLi4vc2VydmljZXMvQVBJJztcbmltcG9ydCBBY2Nlc3NUb2tlblNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL0FjY2Vzc1Rva2VuU2VydmljZVwiO1xuaW1wb3J0IFVzZXJEYXRhU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvVXNlckRhdGFTZXJ2aWNlXCI7XG5cblxuY29uc3QgTG9naW4gPSAoKSA9PiB7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBBY2Nlc3NUb2tlblNlcnZpY2UuZ2V0KCk7XG4gICAgICAgIGlmICh0b2tlbilcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvY29udHJvbCcpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgY29uc3Qgc3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgfVxuICAgICAgICBzZXRFcnJvcihudWxsKTtcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBUEkuc2VuZCgnUE9TVCcsICcvYXBpL2F1dGgvbG9naW4nLCBkYXRhLCBmYWxzZSk7XG4gICAgICAgIC8vY29uc3QgcnNsdCA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS51c2VyLnJvbGVzWzBdID09IFwiQURNSU5cIikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEudXNlci5yb2xlc1swXSk7XG4gICAgICAgICAgICAgICAgQWNjZXNzVG9rZW5TZXJ2aWNlLnNldChyZXNwb25zZS5kYXRhLnVzZXIudG9rZW4pO1xuICAgICAgICAgICAgICAgIFVzZXJEYXRhU2VydmljZS5zZXQocmVzcG9uc2UuZGF0YS51c2VyKTtcblxuICAgICAgICAgICAgICAgIGF3YWl0IFJvdXRlci5wdXNoKCcvY29udHJvbCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRFcnJvcihcIk5vbiBBZG1pbiBVc2Vyc1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSlcbiAgICAgICAgICAgIHNldEVycm9yKFwiQmFkIGNyZWRlbnRpYWxzXCIpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBzZXRFcnJvcihcIkFuIGVycm9yIG9jY3VycmVkXCIpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQgc3R5bGU9e3toZWlnaHQ6IFwiMTAwdmhcIn19PlxuICAgICAgICAgICAgPENhcmQgc3R5bGU9e3t3aWR0aDogNDAwLCBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLCBtYXJnaW46IFwiYXV0b1wiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cbiAgICAgICAgICAgICAgICB7ZXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8QWxlcnQgc3R5bGU9e3ttYXJnaW5Cb3R0b206IDMwfX0gbWVzc2FnZT17ZXJyb3J9IHR5cGU9XCJlcnJvclwiIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiRW1haWxcIn1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRFbWFpbChldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luVG9wOiAxNX19XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcIlBhc3N3b3JkXCJ9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT17XCJwYXNzd29yZFwifVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRQYXNzd29yZChldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPXtcInByaW1hcnlcIn1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c3VibWl0fVxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDogMjB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./services/API.js":
/*!*************************!*\
  !*** ./services/API.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AccessTokenService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccessTokenService */ \"./services/AccessTokenService.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass API {\n  getDomain() {\n    return \"https://pro-hikup.westeurope.cloudapp.azure.com\";\n  }\n  getApiDomain() {\n    return this.getDomain();\n  }\n  async CreateMarker(method, route, user_data, data = null, auth = true) {\n    let api = this.getApiDomain();\n    let headers = {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    };\n    if (auth) {\n      let accessToken = _AccessTokenService__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get();\n      accessToken = accessToken ? accessToken : '';\n      if (accessToken) headers['Authorization'] = 'Bearer ' + accessToken;\n    }\n    if (method !== \"GET\" && data) {\n      data = JSON.stringify(data);\n      data = '{ \\\"user\\\": {\\\"id\\\": \\\"' + user_data.id + '\\\", \\\"roles\\\": [\\\"' + user_data.roles + '\\\"] }, \\\"trail\\\" : ' + data + '}';\n      console.log(data);\n    } else data = null;\n    try {\n      let url = api + route;\n      let response = await fetch(url, {\n        method: method,\n        headers: headers,\n        body: data\n      });\n      console.log(data);\n      return {\n        data: await response.json(),\n        status: response.status\n      };\n    } catch (e) {\n      await next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');\n      return {\n        data: null,\n        status: -1\n      };\n    }\n  }\n  async send(method, route, data = null, auth = true) {\n    let api = this.getApiDomain();\n    let headers = {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    };\n    if (auth) {\n      let accessToken = _AccessTokenService__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get();\n      accessToken = accessToken ? accessToken : '';\n      if (accessToken) headers['Authorization'] = 'Bearer ' + accessToken;\n    }\n    if (method !== \"GET\" && data) {\n      data = JSON.stringify(data);\n      data = \"{ \\\"user\\\": \" + data + \"}\";\n      console.log(data);\n    } else data = null;\n    try {\n      let url = api + route;\n      let response = await fetch(url, {\n        method: method,\n        headers: headers,\n        body: data\n      });\n      //if (response.status === 401) {\n      //    AccessTokenService.remove();\n      //    return {\n      //        data: await response.json(),\n      //        status: response.status,\n      //    };\n      //} \n      console.log(data);\n      return {\n        data: await response.json(),\n        status: response.status\n      };\n    } catch (e) {\n      await next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');\n      return {\n        data: null,\n        status: -1\n      };\n    }\n  }\n}\nconst service = new API();\n/* harmony default export */ __webpack_exports__[\"default\"] = (service);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9BUEkuanM/ZjY0YSJdLCJuYW1lcyI6WyJBUEkiLCJnZXREb21haW4iLCJwcm9jZXNzIiwiZ2V0QXBpRG9tYWluIiwiQ3JlYXRlTWFya2VyIiwibWV0aG9kIiwicm91dGUiLCJ1c2VyX2RhdGEiLCJkYXRhIiwiYXV0aCIsImFwaSIsImhlYWRlcnMiLCJhY2Nlc3NUb2tlbiIsIkFjY2Vzc1Rva2VuU2VydmljZSIsImdldCIsIkpTT04iLCJzdHJpbmdpZnkiLCJpZCIsInJvbGVzIiwiY29uc29sZSIsImxvZyIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJib2R5IiwianNvbiIsInN0YXR1cyIsImUiLCJSb3V0ZXIiLCJwdXNoIiwic2VuZCIsInNlcnZpY2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNEO0FBQ3JCO0FBRWpDLE1BQU1BLEdBQUcsQ0FBQztFQUNOQyxTQUFTQSxDQUFBLEVBQUc7SUFDUixPQUFPQyxpREFBK0I7RUFDMUM7RUFFQUMsWUFBWUEsQ0FBQSxFQUFHO0lBQ1gsT0FBTyxJQUFJLENBQUNGLFNBQVMsQ0FBQyxDQUFDO0VBQzNCO0VBRUEsTUFBTUcsWUFBWUEsQ0FBQ0MsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxHQUFHLElBQUksRUFBRUMsSUFBSSxHQUFHLElBQUksRUFBRTtJQUNuRSxJQUFJQyxHQUFHLEdBQUcsSUFBSSxDQUFDUCxZQUFZLENBQUMsQ0FBQztJQUM3QixJQUFJUSxPQUFPLEdBQUc7TUFDVixRQUFRLEVBQUUsa0JBQWtCO01BQzVCLGNBQWMsRUFBRTtJQUNwQixDQUFDO0lBQ0QsSUFBSUYsSUFBSSxFQUFFO01BQ04sSUFBSUcsV0FBVyxHQUFHQywyREFBa0IsQ0FBQ0MsR0FBRyxDQUFDLENBQUM7TUFDMUNGLFdBQVcsR0FBR0EsV0FBVyxHQUFHQSxXQUFXLEdBQUcsRUFBRTtNQUM1QyxJQUFJQSxXQUFXLEVBQ1hELE9BQU8sQ0FB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TUFDdEIsT0FBTztRQUNIckIsSUFBSSxFQUFFLElBQUk7UUFDVmtCLE1BQU0sRUFBRSxDQUFDO01BQ2IsQ0FBQztJQUNMO0VBQ0o7QUFDSjtBQUVBLE1BQU1LLE9BQU8sR0FBRyxJQUFJL0IsR0FBRyxDQUFDLENBQUM7QUFDVitCLHNFQUFPIiwiZmlsZSI6Ii4vc2VydmljZXMvQVBJLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjY2Vzc1Rva2VuU2VydmljZSBmcm9tIFwiLi9BY2Nlc3NUb2tlblNlcnZpY2VcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNsYXNzIEFQSSB7XG4gICAgZ2V0RG9tYWluKCkge1xuICAgICAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTDtcbiAgICB9XG5cbiAgICBnZXRBcGlEb21haW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERvbWFpbigpO1xuICAgIH1cblxuICAgIGFzeW5jIENyZWF0ZU1hcmtlcihtZXRob2QsIHJvdXRlLCB1c2VyX2RhdGEgLGRhdGEgPSBudWxsLCBhdXRoID0gdHJ1ZSkge1xuICAgICAgICBsZXQgYXBpID0gdGhpcy5nZXRBcGlEb21haW4oKTtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB7XG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9O1xuICAgICAgICBpZiAoYXV0aCkge1xuICAgICAgICAgICAgbGV0IGFjY2Vzc1Rva2VuID0gQWNjZXNzVG9rZW5TZXJ2aWNlLmdldCgpO1xuICAgICAgICAgICAgYWNjZXNzVG9rZW4gPSBhY2Nlc3NUb2tlbiA/IGFjY2Vzc1Rva2VuIDogJyc7XG4gICAgICAgICAgICBpZiAoYWNjZXNzVG9rZW4pXG4gICAgICAgICAgICAgICAgaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gJ0JlYXJlciAnICsgYWNjZXNzVG9rZW47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gXCJHRVRcIiAmJiBkYXRhKSB7XG4gICAgICAgICAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICAgICAgICBkYXRhID0gJ3sgXFxcInVzZXJcXFwiOiB7XFxcImlkXFxcIjogXFxcIicrIHVzZXJfZGF0YS5pZCArJ1xcXCIsIFxcXCJyb2xlc1xcXCI6IFtcXFwiJysgdXNlcl9kYXRhLnJvbGVzICsnXFxcIl0gfSwgXFxcInRyYWlsXFxcIiA6ICcrIGRhdGEgKyAnfSc7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBkYXRhID0gbnVsbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IHVybCA9IGFwaSArIHJvdXRlO1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICAgICAgICAgIGJvZHk6IGRhdGEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkYXRhOiBhd2FpdCByZXNwb25zZS5qc29uKCksXG4gICAgICAgICAgICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBhd2FpdCBSb3V0ZXIucHVzaCgnLycpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkYXRhOiBudWxsLFxuICAgICAgICAgICAgICAgIHN0YXR1czogLTEsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgc2VuZChtZXRob2QsIHJvdXRlLCBkYXRhID0gbnVsbCwgYXV0aCA9IHRydWUpIHtcbiAgICAgICAgbGV0IGFwaSA9IHRoaXMuZ2V0QXBpRG9tYWluKCk7XG4gICAgICAgIGxldCBoZWFkZXJzID0ge1xuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGF1dGgpIHtcbiAgICAgICAgICAgIGxldCBhY2Nlc3NUb2tlbiA9IEFjY2Vzc1Rva2VuU2VydmljZS5nZXQoKTtcbiAgICAgICAgICAgIGFjY2Vzc1Rva2VuID0gYWNjZXNzVG9rZW4gPyBhY2Nlc3NUb2tlbiA6ICcnO1xuICAgICAgICAgICAgaWYgKGFjY2Vzc1Rva2VuKVxuICAgICAgICAgICAgICAgIGhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9ICdCZWFyZXIgJyArIGFjY2Vzc1Rva2VuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgIT09IFwiR0VUXCIgJiYgZGF0YSkge1xuICAgICAgICAgICAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgICAgICAgZGF0YSA9IFwieyBcXFwidXNlclxcXCI6IFwiKyBkYXRhICsgXCJ9XCI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBkYXRhID0gbnVsbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IHVybCA9IGFwaSArIHJvdXRlO1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICAgICAgICAgIGJvZHk6IGRhdGEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgICAvLyAgICBBY2Nlc3NUb2tlblNlcnZpY2UucmVtb3ZlKCk7XG4gICAgICAgICAgICAvLyAgICByZXR1cm4ge1xuICAgICAgICAgICAgLy8gICAgICAgIGRhdGE6IGF3YWl0IHJlc3BvbnNlLmpzb24oKSxcbiAgICAgICAgICAgIC8vICAgICAgICBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgICAgIC8vICAgIH07XG4gICAgICAgICAgICAvL30gXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGF0YTogYXdhaXQgcmVzcG9uc2UuanNvbigpLFxuICAgICAgICAgICAgICAgIHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgYXdhaXQgUm91dGVyLnB1c2goJy8nKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgICAgICAgICAgICBzdGF0dXM6IC0xLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3Qgc2VydmljZSA9IG5ldyBBUEkoKTtcbmV4cG9ydCBkZWZhdWx0IHNlcnZpY2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./services/API.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nconst storageName2 = \"user_data\";\nclass UserDataService {\n  constructor() {\n    _defineProperty(this, \"userData\", null);\n  }\n  get() {\n    if (this.userData) return this.userData;\n    if (localStorage === undefined) return null;\n    const userData = localStorage.getItem(storageName2);\n    this.userData = userData;\n    return userData;\n  }\n  set(userData) {\n    this.userData = userData;\n    delete userData.token;\n    localStorage.setItem(storageName2, JSON.stringify(userData));\n  }\n  remove() {\n    this.userData = null;\n    localStorage.removeItem(storageName2);\n  }\n}\nconst service = new UserDataService();\n/* harmony default export */ __webpack_exports__[\"default\"] = (service);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9Vc2VyRGF0YVNlcnZpY2UuanM/NDUwYiJdLCJuYW1lcyI6WyJzdG9yYWdlTmFtZTIiLCJVc2VyRGF0YVNlcnZpY2UiLCJjb25zdHJ1Y3RvciIsIl9kZWZpbmVQcm9wZXJ0eSIsImdldCIsInVzZXJEYXRhIiwibG9jYWxTdG9yYWdlIiwidW5kZWZpbmVkIiwiZ2V0SXRlbSIsInNldCIsInRva2VuIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZW1vdmUiLCJyZW1vdmVJdGVtIiwic2VydmljZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFlBQVksR0FBRyxXQUFXO0FBRWhDLE1BQU1DLGVBQWUsQ0FBQztFQUFBQyxZQUFBO0lBQUFDLGVBQUEsbUJBQ1AsSUFBSTtFQUFBO0VBRWZDLEdBQUdBLENBQUEsRUFBRztJQUNGLElBQUksSUFBSSxDQUFDQyxRQUFRLEVBQ2IsT0FBTyxJQUFJLENBQUNBLFFBQVE7SUFDeEIsSUFBSUMsWUFBWSxLQUFLQyxTQUFTLEVBQzFCLE9BQU8sSUFBSTtJQUNmLE1BQU1GLFFBQVEsR0FBR0MsWUFBWSxDQUFDRSxPQUFPLENBQUNSLFlBQVksQ0FBQztJQUNuRCxJQUFJLENBQUNLLFFBQVEsR0FBR0EsUUFBUTtJQUN4QixPQUFPQSxRQUFRO0VBQ25CO0VBRUFJLEdBQUdBLENBQUNKLFFBQVEsRUFBRTtJQUNWLElBQUksQ0FBQ0EsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLE9BQU9BLFFBQVEsQ0FBQ0ssS0FBSztJQUNyQkosWUFBWSxDQUFDSyxPQUFPLENBQUNYLFlBQVksRUFBRVksSUFBSSxDQUFDQyxTQUFTLENBQUNSLFFBQVEsQ0FBQyxDQUFDO0VBQ2hFO0VBRUFTLE1BQU1BLENBQUEsRUFBRztJQUNMLElBQUksQ0FBQ1QsUUFBUSxHQUFHLElBQUk7SUFDcEJDLFlBQVksQ0FBQ1MsVUFBVSxDQUFDZixZQUFZLENBQUM7RUFDekM7QUFDSjtBQUVBLE1BQU1nQixPQUFPLEdBQUcsSUFBSWYsZUFBZSxDQUFDLENBQUM7QUFDdEJlLHNFQUFPIiwiZmlsZSI6Ii4vc2VydmljZXMvVXNlckRhdGFTZXJ2aWNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3RvcmFnZU5hbWUyID0gXCJ1c2VyX2RhdGFcIjtcblxuY2xhc3MgVXNlckRhdGFTZXJ2aWNlIHtcbiAgICB1c2VyRGF0YSA9IG51bGw7XG5cbiAgICBnZXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZXJEYXRhKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlckRhdGE7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICBjb25zdCB1c2VyRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JhZ2VOYW1lMik7XG4gICAgICAgIHRoaXMudXNlckRhdGEgPSB1c2VyRGF0YVxuICAgICAgICByZXR1cm4gdXNlckRhdGE7XG4gICAgfVxuXG4gICAgc2V0KHVzZXJEYXRhKSB7XG4gICAgICAgIHRoaXMudXNlckRhdGEgPSB1c2VyRGF0YTtcbiAgICAgICAgZGVsZXRlIHVzZXJEYXRhLnRva2VuO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdG9yYWdlTmFtZTIsIEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlKCkge1xuICAgICAgICB0aGlzLnVzZXJEYXRhID0gbnVsbDtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oc3RvcmFnZU5hbWUyKTtcbiAgICB9XG59XG5cbmNvbnN0IHNlcnZpY2UgPSBuZXcgVXNlckRhdGFTZXJ2aWNlKCk7XG5leHBvcnQgZGVmYXVsdCBzZXJ2aWNlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/UserDataService.js\n");

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