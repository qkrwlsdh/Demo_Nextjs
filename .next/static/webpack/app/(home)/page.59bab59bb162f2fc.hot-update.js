"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(home)/page",{

/***/ "(app-pages-browser)/./app/(home)/page.tsx":
/*!*****************************!*\
  !*** ./app/(home)/page.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst cheerio = __webpack_require__(/*! cheerio */ \"(app-pages-browser)/./node_modules/cheerio/lib/index.js\");\n// export const metadata = {\n//     title: 'Home',\n// }\nfunction Page() {\n    _s();\n    /* const getHtml = async () => {\r\n        try {\r\n            return await axios.get('https://search.naver.com/search.naver?ssc=tab.blog.all&sm=tab_jum&query=%EC%84%9C%EC%9A%B8%EC%8A%A4%EB%A7%88%EC%9D%BC%EB%9D%BC%EC%8B%9D');\r\n        } catch (error) {\r\n            console.error(error);\r\n        }\r\n    }\r\n\r\n    getHtml().then((html) => {\r\n        const $ = cheerio.load(html.data);\r\n        const data = $('#main_pack > section > div.api_subject_bx > ul > li:nth-child(1)');\r\n        const dataText = data.text();\r\n\r\n        // #main_pack > section > div.api_subject_bx > ul > li:nth-child(1) > div > div.detail_box\r\n        // #main_pack > section > div.api_subject_bx > ul > li:nth-child(2) > div > div.detail_box\r\n        // #main_pack > section > div.api_subject_bx > ul > li:nth-child(4) > div > div.detail_box\r\n\r\n        const ulList = $('#main_pack > section > div.api_subject_bx > ul > li');\r\n        ulList.map((i, element) => {\r\n            console.log('i ::: ' + i);\r\n            console.log('element ::: ' + element);\r\n            console.log('=====================');\r\n        })\r\n\r\n        return data;\r\n    }); */ const URL = \"https://nomad-movies.nomadcoders.workers.dev/movies\";\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [movies, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getMovies = async ()=>{\n        const response = await fetch(\"https://nomad-movies.nomadcoders.workers.dev/movies\");\n        const json = await response.json();\n        setMovies(json);\n        setIsLoading(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getMovies();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: isLoading ? \"Loading...\" : JSON.stringify(movies)\n    }, void 0, false, {\n        fileName: \"C:\\\\workspace\\\\LEARN-NEXTJS\\\\app\\\\(home)\\\\page.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"BLz+Dza675Lqh5QFvDsUJLyjzvs=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oaG9tZSkvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBSTRDO0FBQzVDLE1BQU1FLFVBQVVDLG1CQUFPQSxDQUFDO0FBRXhCLDRCQUE0QjtBQUM1QixxQkFBcUI7QUFDckIsSUFBSTtBQUVXLFNBQVNDOztJQUVwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQXlCSSxHQUVKLE1BQU1DLE1BQU07SUFFWixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQUM7SUFFM0MsTUFBTSxDQUFDTyxRQUFRQyxVQUFVLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFDdkMsTUFBTVMsWUFBWTtRQUNkLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtRQUM3QixNQUFNQyxPQUFPLE1BQU1GLFNBQVNFLElBQUk7UUFDaENKLFVBQVVJO1FBQ1ZOLGFBQWE7SUFDakI7SUFDQVAsZ0RBQVNBLENBQUM7UUFDTlU7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDQSw4REFBQ0k7a0JBQ0lSLFlBQVksZUFBZVMsS0FBS0MsU0FBUyxDQUFDUjs7Ozs7O0FBR25EO0dBakR3Qko7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLyhob21lKS9wYWdlLnRzeD8yNTM1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSBcImNoZWVyaW8vbGliL2FwaS9hdHRyaWJ1dGVzXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgY2hlZXJpbyA9IHJlcXVpcmUoJ2NoZWVyaW8nKTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBtZXRhZGF0YSA9IHtcclxuLy8gICAgIHRpdGxlOiAnSG9tZScsXHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XHJcblxyXG4gICAgLyogY29uc3QgZ2V0SHRtbCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL3NlYXJjaC5uYXZlci5jb20vc2VhcmNoLm5hdmVyP3NzYz10YWIuYmxvZy5hbGwmc209dGFiX2p1bSZxdWVyeT0lRUMlODQlOUMlRUMlOUElQjglRUMlOEElQTQlRUIlQTclODglRUMlOUQlQkMlRUIlOUQlQkMlRUMlOEIlOUQnKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SHRtbCgpLnRoZW4oKGh0bWwpID0+IHtcclxuICAgICAgICBjb25zdCAkID0gY2hlZXJpby5sb2FkKGh0bWwuZGF0YSk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9ICQoJyNtYWluX3BhY2sgPiBzZWN0aW9uID4gZGl2LmFwaV9zdWJqZWN0X2J4ID4gdWwgPiBsaTpudGgtY2hpbGQoMSknKTtcclxuICAgICAgICBjb25zdCBkYXRhVGV4dCA9IGRhdGEudGV4dCgpO1xyXG5cclxuICAgICAgICAvLyAjbWFpbl9wYWNrID4gc2VjdGlvbiA+IGRpdi5hcGlfc3ViamVjdF9ieCA+IHVsID4gbGk6bnRoLWNoaWxkKDEpID4gZGl2ID4gZGl2LmRldGFpbF9ib3hcclxuICAgICAgICAvLyAjbWFpbl9wYWNrID4gc2VjdGlvbiA+IGRpdi5hcGlfc3ViamVjdF9ieCA+IHVsID4gbGk6bnRoLWNoaWxkKDIpID4gZGl2ID4gZGl2LmRldGFpbF9ib3hcclxuICAgICAgICAvLyAjbWFpbl9wYWNrID4gc2VjdGlvbiA+IGRpdi5hcGlfc3ViamVjdF9ieCA+IHVsID4gbGk6bnRoLWNoaWxkKDQpID4gZGl2ID4gZGl2LmRldGFpbF9ib3hcclxuXHJcbiAgICAgICAgY29uc3QgdWxMaXN0ID0gJCgnI21haW5fcGFjayA+IHNlY3Rpb24gPiBkaXYuYXBpX3N1YmplY3RfYnggPiB1bCA+IGxpJyk7XHJcbiAgICAgICAgdWxMaXN0Lm1hcCgoaSwgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaSA6OjogJyArIGkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZWxlbWVudCA6OjogJyArIGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnPT09PT09PT09PT09PT09PT09PT09Jyk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9KTsgKi9cclxuXHJcbiAgICBjb25zdCBVUkwgPSBcImh0dHBzOi8vbm9tYWQtbW92aWVzLm5vbWFkY29kZXJzLndvcmtlcnMuZGV2L21vdmllc1wiO1xyXG5cclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBbbW92aWVzLCBzZXRNb3ZpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgZ2V0TW92aWVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL25vbWFkLW1vdmllcy5ub21hZGNvZGVycy53b3JrZXJzLmRldi9tb3ZpZXNcIik7XHJcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBzZXRNb3ZpZXMoanNvbik7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0TW92aWVzKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgICAge2lzTG9hZGluZyA/IFwiTG9hZGluZy4uLlwiIDogSlNPTi5zdHJpbmdpZnkobW92aWVzKX1cclxuICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY2hlZXJpbyIsInJlcXVpcmUiLCJQYWdlIiwiVVJMIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwibW92aWVzIiwic2V0TW92aWVzIiwiZ2V0TW92aWVzIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJkaXYiLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(home)/page.tsx\n"));

/***/ })

});