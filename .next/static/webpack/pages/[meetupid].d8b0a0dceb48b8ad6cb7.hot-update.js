webpackHotUpdate_N_E("pages/[meetupid]",{

/***/ "./pages/[meetupid]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupid]/index.js ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MeetUp; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_meetups_MeetUpDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/meetups/MeetUpDetails */ "./components/meetups/MeetUpDetails.js");


var _jsxFileName = "D:\\documents\\NextJS\\Next-js-proj\\pages\\[meetupid]\\index.js",
    _s = $RefreshSig$();



var __N_SSG = true;
function MeetUp(props) {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var meetupid = router.query.meetupid;
  var meetup = {};
  props.meetups.map(function (item) {
    if (item.id === meetupid) meetup = item;
  }); // console.log(meetup);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetUpDetails__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: meetup.id,
    image: meetup.image,
    title: meetup.title,
    address: meetup.address,
    description: meetup.description
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 12
  }, this);
}

_s(MeetUp, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = MeetUp;

var _c;

$RefreshReg$(_c, "MeetUp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cGlkXS9pbmRleC5qcyJdLCJuYW1lcyI6WyJNZWV0VXAiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsIm1lZXR1cGlkIiwicXVlcnkiLCJtZWV0dXAiLCJtZWV0dXBzIiwibWFwIiwiaXRlbSIsImlkIiwiaW1hZ2UiLCJ0aXRsZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQW1DZSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUFzQjtBQUFBOztBQUVqQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHRixNQUFNLENBQUNHLEtBQVAsQ0FBYUQsUUFBOUI7QUFDQSxNQUFJRSxNQUFNLEdBQUcsRUFBYjtBQUNETCxPQUFLLENBQUNNLE9BQU4sQ0FBY0MsR0FBZCxDQUFrQixVQUFDQyxJQUFELEVBQVE7QUFDckIsUUFBR0EsSUFBSSxDQUFDQyxFQUFMLEtBQVlOLFFBQWYsRUFBeUJFLE1BQU0sR0FBR0csSUFBVDtBQUM1QixHQUZGLEVBTGtDLENBUWpDOztBQUNBLHNCQUFPLHFFQUFDLHlFQUFEO0FBQWUsTUFBRSxFQUFFSCxNQUFNLENBQUNJLEVBQTFCO0FBQThCLFNBQUssRUFBRUosTUFBTSxDQUFDSyxLQUE1QztBQUFtRCxTQUFLLEVBQUVMLE1BQU0sQ0FBQ00sS0FBakU7QUFBd0UsV0FBTyxFQUFFTixNQUFNLENBQUNPLE9BQXhGO0FBQWlHLGVBQVcsRUFBRVAsTUFBTSxDQUFDUTtBQUFySDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDSDs7R0FWdUJkLE07VUFFTEcscUQ7OztLQUZLSCxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1ttZWV0dXBpZF0uZDhiMGEwZGNlYjQ4YjhhZDZjYjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBNZWV0VXBEZXRhaWxzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTWVldFVwRGV0YWlsc1wiO1xyXG5cclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGhzOiBbXSxcclxuICAgICAgICBmYWxsYmFjazogdHJ1ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCgnbW9uZ29kYitzcnY6Ly9jaG06MTIzNDVAY2x1c3RlcjAubGdlbWVpbS5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eScpO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcclxuICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTtcclxuICBjb25zb2xlLmxvZyhtZWV0dXBzKTtcclxuICBjbGllbnQuY2xvc2UoKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbWVldHVwczogbWVldHVwcy5tYXAoKG1lZXR1cCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB0aXRsZTogbWVldHVwLnRpdGxlLFxyXG4gICAgICAgICAgaWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKSxcclxuICAgICAgICAgIGFkZHJlc3M6IG1lZXR1cC5hZGRyZXNzLFxyXG4gICAgICAgICAgaW1hZ2U6IG1lZXR1cC5pbWFnZSxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBtZWV0dXAuZGVzY3JpcHRpb25cclxuICAgICAgICB9O1xyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgICByZXZhbGlkYXRlOiA1XHJcbiAgfTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lZXRVcChwcm9wcyl7XHJcbiAgICBcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgbWVldHVwaWQgPSByb3V0ZXIucXVlcnkubWVldHVwaWQ7XHJcbiAgICBsZXQgbWVldHVwID0ge307XHJcbiAgIHByb3BzLm1lZXR1cHMubWFwKChpdGVtKT0+e1xyXG4gICAgICAgIGlmKGl0ZW0uaWQgPT09IG1lZXR1cGlkKSBtZWV0dXAgPSBpdGVtO1xyXG4gICAgfSlcclxuICAgIC8vIGNvbnNvbGUubG9nKG1lZXR1cCk7XHJcbiAgICByZXR1cm4gPE1lZXRVcERldGFpbHMgaWQ9e21lZXR1cC5pZH0gaW1hZ2U9e21lZXR1cC5pbWFnZX0gdGl0bGU9e21lZXR1cC50aXRsZX0gYWRkcmVzcz17bWVldHVwLmFkZHJlc3N9IGRlc2NyaXB0aW9uPXttZWV0dXAuZGVzY3JpcHRpb259Lz5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=