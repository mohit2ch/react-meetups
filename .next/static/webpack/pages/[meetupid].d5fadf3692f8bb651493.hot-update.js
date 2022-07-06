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
    console.log(item);
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
    lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cGlkXS9pbmRleC5qcyJdLCJuYW1lcyI6WyJNZWV0VXAiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsIm1lZXR1cGlkIiwicXVlcnkiLCJtZWV0dXAiLCJtZWV0dXBzIiwibWFwIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJpZCIsImltYWdlIiwidGl0bGUiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFtQ2UsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBc0I7QUFBQTs7QUFFakMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0YsTUFBTSxDQUFDRyxLQUFQLENBQWFELFFBQTlCO0FBQ0EsTUFBSUUsTUFBTSxHQUFHLEVBQWI7QUFDREwsT0FBSyxDQUFDTSxPQUFOLENBQWNDLEdBQWQsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFRO0FBQ3pCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNJLFFBQUdBLElBQUksQ0FBQ0csRUFBTCxLQUFZUixRQUFmLEVBQXlCRSxNQUFNLEdBQUdHLElBQVQ7QUFDNUIsR0FIRixFQUxrQyxDQVNqQzs7QUFDQSxzQkFBTyxxRUFBQyx5RUFBRDtBQUFlLE1BQUUsRUFBRUgsTUFBTSxDQUFDTSxFQUExQjtBQUE4QixTQUFLLEVBQUVOLE1BQU0sQ0FBQ08sS0FBNUM7QUFBbUQsU0FBSyxFQUFFUCxNQUFNLENBQUNRLEtBQWpFO0FBQXdFLFdBQU8sRUFBRVIsTUFBTSxDQUFDUyxPQUF4RjtBQUFpRyxlQUFXLEVBQUVULE1BQU0sQ0FBQ1U7QUFBckg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0g7O0dBWHVCaEIsTTtVQUVMRyxxRDs7O0tBRktILE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW21lZXR1cGlkXS5kNWZhZGYzNjkyZjhiYjY1MTQ5My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IE1lZXRVcERldGFpbHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0VXBEZXRhaWxzXCI7XHJcblxyXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKXtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aHM6IFtdLFxyXG4gICAgICAgIGZhbGxiYWNrOiB0cnVlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiK3NydjovL2NobToxMjM0NUBjbHVzdGVyMC5sZ2VtZWltLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5Jyk7XHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xyXG4gIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xyXG4gIGNvbnNvbGUubG9nKG1lZXR1cHMpO1xyXG4gIGNsaWVudC5jbG9zZSgpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtZWV0dXBzOiBtZWV0dXBzLm1hcCgobWVldHVwKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHRpdGxlOiBtZWV0dXAudGl0bGUsXHJcbiAgICAgICAgICBpZDogbWVldHVwLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgICAgYWRkcmVzczogbWVldHVwLmFkZHJlc3MsXHJcbiAgICAgICAgICBpbWFnZTogbWVldHVwLmltYWdlLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IG1lZXR1cC5kZXNjcmlwdGlvblxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICAgIHJldmFsaWRhdGU6IDVcclxuICB9O1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVldFVwKHByb3BzKXtcclxuICAgIFxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBtZWV0dXBpZCA9IHJvdXRlci5xdWVyeS5tZWV0dXBpZDtcclxuICAgIGxldCBtZWV0dXAgPSB7fTtcclxuICAgcHJvcHMubWVldHVwcy5tYXAoKGl0ZW0pPT57XHJcbiAgICBjb25zb2xlLmxvZyhpdGVtKVxyXG4gICAgICAgIGlmKGl0ZW0uaWQgPT09IG1lZXR1cGlkKSBtZWV0dXAgPSBpdGVtO1xyXG4gICAgfSlcclxuICAgIC8vIGNvbnNvbGUubG9nKG1lZXR1cCk7XHJcbiAgICByZXR1cm4gPE1lZXRVcERldGFpbHMgaWQ9e21lZXR1cC5pZH0gaW1hZ2U9e21lZXR1cC5pbWFnZX0gdGl0bGU9e21lZXR1cC50aXRsZX0gYWRkcmVzcz17bWVldHVwLmFkZHJlc3N9IGRlc2NyaXB0aW9uPXttZWV0dXAuZGVzY3JpcHRpb259Lz5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=