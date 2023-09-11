/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/404";
exports.ids = ["pages/404"];
exports.modules = {

/***/ "./src/components/buttons/Button.tsx":
/*!*******************************************!*\
  !*** ./src/components/buttons/Button.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styled-system/css */ \"@styled-system/css\");\n/* harmony import */ var _styled_system_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styled_system_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ \"styled-system\");\n/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default().button(({\n  color,\n  fullwidth\n}) => _styled_system_css__WEBPACK_IMPORTED_MODULE_0___default()({\n  display: \"flex\",\n  width: fullwidth ? \"100%\" : \"unset\",\n  justifyContent: \"center\",\n  alignItems: \"center\",\n  outline: \"none\",\n  border: \"none\",\n  cursor: \"pointer\",\n  padding: \"11px 1.5rem\",\n  fontSize: \"1rem\",\n  fontWeight: 600,\n  color: color ? `${color}.main` : \"body.text\",\n  background: \"transparent\",\n  transition: \"all 150ms ease-in-out\",\n  lineHeight: 1,\n  \"&:focus\": {\n    boxShadow: 3 //shadows[3]\n\n  },\n  \"&:disabled\": {\n    bg: \"text.disabled\",\n    color: \"text.hint\",\n    borderColor: \"text.disabled\",\n    cursor: \"unset\",\n    \"svg path\": {\n      fill: \"text.hint\"\n    },\n    \"svg polyline, svg polygon\": {\n      color: \"text.hint\"\n    }\n  }\n}), ({\n  theme,\n  color\n}) => {\n  var _theme$colors$color, _theme$colors$color2, _theme$colors$color3, _theme$colors$color4, _theme$colors$color5, _theme$colors$color6, _theme$colors$color7, _theme$colors$color8;\n\n  return (0,styled_system__WEBPACK_IMPORTED_MODULE_2__.variant)({\n    prop: \"variant\",\n    variants: {\n      text: {\n        border: \"none\",\n        color: `${color}.main`,\n        \"&:hover\": {\n          bg: color ? `${color}.light` : \"gray.100\"\n        }\n      },\n      outlined: {\n        padding: \"10px 16px\",\n        color: `${color}.main`,\n        border: \"1px solid\",\n        borderColor: color ? `${color}.main` : \"text.disabled\",\n        \"&:enabled svg path\": {\n          fill: color ? `${(_theme$colors$color = theme.colors[color]) === null || _theme$colors$color === void 0 ? void 0 : _theme$colors$color.main} !important` : \"text.primary\"\n        },\n        \"&:enabled svg polyline, svg polygon\": {\n          color: color ? `${(_theme$colors$color2 = theme.colors[color]) === null || _theme$colors$color2 === void 0 ? void 0 : _theme$colors$color2.main} !important` : \"text.primary\"\n        },\n        \"&:focus\": {\n          boxShadow: `0px 1px 4px 0px ${(_theme$colors$color3 = theme.colors[color]) === null || _theme$colors$color3 === void 0 ? void 0 : _theme$colors$color3.light}`\n        },\n        \"&:hover:enabled\": {\n          bg: color && `${color}.main`,\n          borderColor: color && `${color}.main`,\n          color: color && `${color}.text`,\n          \"svg path\": {\n            fill: color ? `${(_theme$colors$color4 = theme.colors[color]) === null || _theme$colors$color4 === void 0 ? void 0 : _theme$colors$color4.text} !important` : \"text.primary\"\n          },\n          \"svg polyline, svg polygon\": {\n            color: color ? `${(_theme$colors$color5 = theme.colors[color]) === null || _theme$colors$color5 === void 0 ? void 0 : _theme$colors$color5.text} !important` : \"text.primary\"\n          }\n        }\n      },\n      contained: {\n        border: \"none\",\n        color: `${color}.text`,\n        bg: `${color}.main`,\n        \"&:focus\": {\n          boxShadow: `0px 1px 4px 0px ${(_theme$colors$color6 = theme.colors[color]) === null || _theme$colors$color6 === void 0 ? void 0 : _theme$colors$color6.light}`\n        },\n        \"&:enabled svg path\": {\n          fill: color ? `${(_theme$colors$color7 = theme.colors[color]) === null || _theme$colors$color7 === void 0 ? void 0 : _theme$colors$color7.text} !important` : \"text.primary\"\n        },\n        \"&:enabled svg polyline, svg polygon\": {\n          color: color ? `${(_theme$colors$color8 = theme.colors[color]) === null || _theme$colors$color8 === void 0 ? void 0 : _theme$colors$color8.text} !important` : \"text.primary\"\n        }\n      }\n    }\n  });\n}, (0,styled_system__WEBPACK_IMPORTED_MODULE_2__.variant)({\n  prop: \"size\",\n  variants: {\n    large: {\n      height: \"56px\",\n      px: 30\n    },\n    medium: {\n      height: \"48px\",\n      px: 30\n    },\n    small: {\n      height: \"40px\",\n      fontSize: 14\n    }\n  }\n}), (0,styled_system__WEBPACK_IMPORTED_MODULE_2__.compose)(styled_system__WEBPACK_IMPORTED_MODULE_2__.color, styled_system__WEBPACK_IMPORTED_MODULE_2__.layout, styled_system__WEBPACK_IMPORTED_MODULE_2__.space, styled_system__WEBPACK_IMPORTED_MODULE_2__.border, styled_system__WEBPACK_IMPORTED_MODULE_2__.shadow));\nButton.defaultProps = {\n  size: \"small\",\n  borderRadius: 5\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib25pay8uL3NyYy9jb21wb25lbnRzL2J1dHRvbnMvQnV0dG9uLnRzeD9hNmY5Il0sIm5hbWVzIjpbIkJ1dHRvbiIsInN0eWxlZCIsImNvbG9yIiwiZnVsbHdpZHRoIiwic3lzdGVtQ3NzIiwiZGlzcGxheSIsIndpZHRoIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwib3V0bGluZSIsImJvcmRlciIsImN1cnNvciIsInBhZGRpbmciLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJiYWNrZ3JvdW5kIiwidHJhbnNpdGlvbiIsImxpbmVIZWlnaHQiLCJib3hTaGFkb3ciLCJiZyIsImJvcmRlckNvbG9yIiwiZmlsbCIsInRoZW1lIiwidmFyaWFudCIsInByb3AiLCJ2YXJpYW50cyIsInRleHQiLCJvdXRsaW5lZCIsImNvbG9ycyIsIm1haW4iLCJsaWdodCIsImNvbnRhaW5lZCIsImxhcmdlIiwiaGVpZ2h0IiwicHgiLCJtZWRpdW0iLCJzbWFsbCIsImNvbXBvc2UiLCJsYXlvdXQiLCJzcGFjZSIsInNoYWRvdyIsImRlZmF1bHRQcm9wcyIsInNpemUiLCJib3JkZXJSYWRpdXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFzQkEsTUFBTUEsTUFBTSxHQUFHQywrREFBQSxDQVFiLENBQUM7QUFBRUMsT0FBRjtBQUFTQztBQUFULENBQUQsS0FDRUMseURBQVMsQ0FBQztBQUNSQyxTQUFPLEVBQUUsTUFERDtBQUVSQyxPQUFLLEVBQUVILFNBQVMsR0FBRyxNQUFILEdBQVksT0FGcEI7QUFHUkksZ0JBQWMsRUFBRSxRQUhSO0FBSVJDLFlBQVUsRUFBRSxRQUpKO0FBS1JDLFNBQU8sRUFBRSxNQUxEO0FBTVJDLFFBQU0sRUFBRSxNQU5BO0FBT1JDLFFBQU0sRUFBRSxTQVBBO0FBUVJDLFNBQU8sRUFBRSxhQVJEO0FBU1JDLFVBQVEsRUFBRSxNQVRGO0FBVVJDLFlBQVUsRUFBRSxHQVZKO0FBV1JaLE9BQUssRUFBRUEs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QixLQUFLLENBQUNNLE1BQU4sQ0FBYTFCLEtBQWIsQ0FBSCx5REFBRyxxQkFBcUJ3QixJQUFLLGFBRHRCLEdBRVA7QUFIZ0IsU0FQYjtBQVlULCtDQUF1QztBQUNyQ3hCLGVBQUssRUFBRUEsS0FBSyxHQUNQLEdBQUQsd0JBQUdvQixLQUFLLENBQUNNLE1BQU4sQ0FBYTFCLEtBQWIsQ0FBSCx5REFBRyxxQkFBcUJ3QixJQUFLLGFBRHJCLEdBRVI7QUFIaUM7QUFaOUI7QUEzQ0g7QUFGSixHQUFELENBRFQ7QUFBQSxDQXhDYSxFQTBHYkgsc0RBQU8sQ0FBQztBQUNOQyxNQUFJLEVBQUUsTUFEQTtBQUVOQyxVQUFRLEVBQUU7QUFDUk8sU0FBSyxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxNQURIO0FBRUxDLFFBQUUsRUFBRTtBQUZDLEtBREM7QUFLUkMsVUFBTSxFQUFFO0FBQ05GLFlBQU0sRUFBRSxNQURGO0FBRU5DLFFBQUUsRUFBRTtBQUZFLEtBTEE7QUFTUkUsU0FBSyxFQUFFO0FBQ0xILFlBQU0sRUFBRSxNQURIO0FBRUxwQixjQUFRLEVBQUU7QUFGTDtBQVRDO0FBRkosQ0FBRCxDQTFHTSxFQTJIYndCLHNEQUFPLENBQUNuQyxnREFBRCxFQUFRb0MsaURBQVIsRUFBZ0JDLGdEQUFoQixFQUF1QjdCLGlEQUF2QixFQUErQjhCLGlEQUEvQixDQTNITSxDQUFmO0FBOEhBeEMsTUFBTSxDQUFDeUMsWUFBUCxHQUFzQjtBQUNwQkMsTUFBSSxFQUFFLE9BRGM7QUFFcEJDLGNBQVksRUFBRTtBQUZNLENBQXRCO0FBS0EsK0RBQWUzQyxNQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvYnV0dG9ucy9CdXR0b24udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN5c3RlbUNzcyBmcm9tIFwiQHN0eWxlZC1zeXN0ZW0vY3NzXCI7XG5pbXBvcnQgeyBjb2xvck9wdGlvbnMgfSBmcm9tIFwiaW50ZXJmYWNlc1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7XG4gIEJhY2tncm91bmRQcm9wcyxcbiAgYm9yZGVyLFxuICBCb3JkZXJQcm9wcyxcbiAgY29sb3IsXG4gIENvbG9yUHJvcHMsXG4gIGNvbXBvc2UsXG4gIGxheW91dCxcbiAgTGF5b3V0UHJvcHMsXG4gIHNoYWRvdyxcbiAgc3BhY2UsXG4gIFNwYWNlUHJvcHMsXG4gIHZhcmlhbnQsXG59IGZyb20gXCJzdHlsZWQtc3lzdGVtXCI7XG5cbmludGVyZmFjZSBCdXR0b25Qcm9wcyB7XG4gIHNpemU/OiBcInNtYWxsXCIgfCBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiIHwgXCJub25lXCI7XG4gIGNvbG9yPzogY29sb3JPcHRpb25zO1xuICB2YXJpYW50PzogXCJ0ZXh0XCIgfCBcIm91dGxpbmVkXCIgfCBcImNvbnRhaW5lZFwiO1xuICBmdWxsd2lkdGg/OiBib29sZWFuO1xufVxuXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uPFxuICBDb2xvclByb3BzICZcbiAgICBCYWNrZ3JvdW5kUHJvcHMgJlxuICAgIEJvcmRlclByb3BzICZcbiAgICBTcGFjZVByb3BzICZcbiAgICBCdXR0b25Qcm9wcyAmXG4gICAgTGF5b3V0UHJvcHNcbj4oXG4gICh7IGNvbG9yLCBmdWxsd2lkdGggfSkgPT5cbiAgICBzeXN0ZW1Dc3Moe1xuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICB3aWR0aDogZnVsbHdpZHRoID8gXCIxMDAlXCIgOiBcInVuc2V0XCIsXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgcGFkZGluZzogXCIxMXB4IDEuNXJlbVwiLFxuICAgICAgZm9udFNpemU6IFwiMXJlbVwiLFxuICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgY29sb3I6IGNvbG9yID8gYCR7Y29sb3J9Lm1haW5gIDogXCJib2R5LnRleHRcIixcbiAgICAgIGJhY2tncm91bmQ6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgIHRyYW5zaXRpb246IFwiYWxsIDE1MG1zIGVhc2UtaW4tb3V0XCIsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgXCImOmZvY3VzXCI6IHtcbiAgICAgICAgYm94U2hhZG93OiAzLCAvL3NoYWRvd3NbM11cbiAgICAgIH0sXG4gICAgICBcIiY6ZGlzYWJsZWRcIjoge1xuICAgICAgICBiZzogXCJ0ZXh0LmRpc2FibGVkXCIsXG4gICAgICAgIGNvbG9yOiBcInRleHQuaGludFwiLFxuICAgICAgICBib3JkZXJDb2xvcjogXCJ0ZXh0LmRpc2FibGVkXCIsXG4gICAgICAgIGN1cnNvcjogXCJ1bnNldFwiLFxuICAgICAgICBcInN2ZyBwYXRoXCI6IHtcbiAgICAgICAgICBmaWxsOiBcInRleHQuaGludFwiLFxuICAgICAgICB9LFxuICAgICAgICBcInN2ZyBwb2x5bGluZSwgc3ZnIHBvbHlnb25cIjoge1xuICAgICAgICAgIGNvbG9yOiBcInRleHQuaGludFwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgKHsgdGhlbWUsIGNvbG9yIH0pID0+XG4gICAgdmFyaWFudCh7XG4gICAgICBwcm9wOiBcInZhcmlhbnRcIixcbiAgICAgIHZhcmlhbnRzOiB7XG4gICAgICAgIHRleHQ6IHtcbiAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICAgIGNvbG9yOiBgJHtjb2xvcn0ubWFpbmAsXG4gICAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICAgIGJnOiBjb2xvciA/IGAke2NvbG9yfS5saWdodGAgOiBcImdyYXkuMTAwXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgb3V0bGluZWQ6IHtcbiAgICAgICAgICBwYWRkaW5nOiBcIjEwcHggMTZweFwiLFxuICAgICAgICAgIGNvbG9yOiBgJHtjb2xvcn0ubWFpbmAsXG4gICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZFwiLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiBjb2xvciA/IGAke2NvbG9yfS5tYWluYCA6IFwidGV4dC5kaXNhYmxlZFwiLFxuXG4gICAgICAgICAgXCImOmVuYWJsZWQgc3ZnIHBhdGhcIjoge1xuICAgICAgICAgICAgZmlsbDogY29sb3JcbiAgICAgICAgICAgICAgPyBgJHt0aGVtZS5jb2xvcnNbY29sb3JdPy5tYWlufSAhaW1wb3J0YW50YFxuICAgICAgICAgICAgICA6IFwidGV4dC5wcmltYXJ5XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIiY6ZW5hYmxlZCBzdmcgcG9seWxpbmUsIHN2ZyBwb2x5Z29uXCI6IHtcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvclxuICAgICAgICAgICAgICA/IGAke3RoZW1lLmNvbG9yc1tjb2xvcl0/Lm1haW59ICFpbXBvcnRhbnRgXG4gICAgICAgICAgICAgIDogXCJ0ZXh0LnByaW1hcnlcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiJjpmb2N1c1wiOiB7XG4gICAgICAgICAgICBib3hTaGFkb3c6IGAwcHggMXB4IDRweCAwcHggJHt0aGVtZS5jb2xvcnNbY29sb3JdPy5saWdodH1gLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCImOmhvdmVyOmVuYWJsZWRcIjoge1xuICAgICAgICAgICAgYmc6IGNvbG9yICYmIGAke2NvbG9yfS5tYWluYCxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBjb2xvciAmJiBgJHtjb2xvcn0ubWFpbmAsXG4gICAgICAgICAgICBjb2xvcjogY29sb3IgJiYgYCR7Y29sb3J9LnRleHRgLFxuICAgICAgICAgICAgXCJzdmcgcGF0aFwiOiB7XG4gICAgICAgICAgICAgIGZpbGw6IGNvbG9yXG4gICAgICAgICAgICAgICAgPyBgJHt0aGVtZS5jb2xvcnNbY29sb3JdPy50ZXh0fSAhaW1wb3J0YW50YFxuICAgICAgICAgICAgICAgIDogXCJ0ZXh0LnByaW1hcnlcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInN2ZyBwb2x5bGluZSwgc3ZnIHBvbHlnb25cIjoge1xuICAgICAgICAgICAgICBjb2xvcjogY29sb3JcbiAgICAgICAgICAgICAgICA/IGAke3RoZW1lLmNvbG9yc1tjb2xvcl0/LnRleHR9ICFpbXBvcnRhbnRgXG4gICAgICAgICAgICAgICAgOiBcInRleHQucHJpbWFyeVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBjb250YWluZWQ6IHtcbiAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICAgIGNvbG9yOiBgJHtjb2xvcn0udGV4dGAsXG4gICAgICAgICAgYmc6IGAke2NvbG9yfS5tYWluYCxcbiAgICAgICAgICBcIiY6Zm9jdXNcIjoge1xuICAgICAgICAgICAgYm94U2hhZG93OiBgMHB4IDFweCA0cHggMHB4ICR7dGhlbWUuY29sb3JzW2NvbG9yXT8ubGlnaHR9YCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiJjplbmFibGVkIHN2ZyBwYXRoXCI6IHtcbiAgICAgICAgICAgIGZpbGw6IGNvbG9yXG4gICAgICAgICAgICAgID8gYCR7dGhlbWUuY29sb3JzW2NvbG9yXT8udGV4dH0gIWltcG9ydGFudGBcbiAgICAgICAgICAgICAgOiBcInRleHQucHJpbWFyeVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCImOmVuYWJsZWQgc3ZnIHBvbHlsaW5lLCBzdmcgcG9seWdvblwiOiB7XG4gICAgICAgICAgICBjb2xvcjogY29sb3JcbiAgICAgICAgICAgICAgPyBgJHt0aGVtZS5jb2xvcnNbY29sb3JdPy50ZXh0fSAhaW1wb3J0YW50YFxuICAgICAgICAgICAgICA6IFwidGV4dC5wcmltYXJ5XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIHZhcmlhbnQoe1xuICAgIHByb3A6IFwic2l6ZVwiLFxuICAgIHZhcmlhbnRzOiB7XG4gICAgICBsYXJnZToge1xuICAgICAgICBoZWlnaHQ6IFwiNTZweFwiLFxuICAgICAgICBweDogMzAsXG4gICAgICB9LFxuICAgICAgbWVkaXVtOiB7XG4gICAgICAgIGhlaWdodDogXCI0OHB4XCIsXG4gICAgICAgIHB4OiAzMCxcbiAgICAgIH0sXG4gICAgICBzbWFsbDoge1xuICAgICAgICBoZWlnaHQ6IFwiNDBweFwiLFxuICAgICAgICBmb250U2l6ZTogMTQsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pLFxuICBjb21wb3NlKGNvbG9yLCBsYXlvdXQsIHNwYWNlLCBib3JkZXIsIHNoYWRvdylcbik7XG5cbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHNpemU6IFwic21hbGxcIixcbiAgYm9yZGVyUmFkaXVzOiA1LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/buttons/Button.tsx\n");

/***/ }),

/***/ "./src/pages/404.tsx":
/*!***************************!*\
  !*** ./src/pages/404.tsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_buttons_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @component/buttons/Button */ \"./src/components/buttons/Button.tsx\");\n/* harmony import */ var _component_FlexBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @component/FlexBox */ \"./src/components/FlexBox.tsx\");\n/* harmony import */ var _component_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @component/Image */ \"./src/components/Image.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/ntn-dev/Project/GO FARM/projects/Clone/Kyoto-Website/src/pages/404.tsx\";\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\n\n\n\n\n\n\nconst Error404 = () => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n\n  const handleGoBack = async () => {\n    router.back();\n  };\n\n  return __jsx(_component_FlexBox__WEBPACK_IMPORTED_MODULE_2__.default, {\n    flexDirection: \"column\",\n    minHeight: \"100vh\",\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    px: \"1rem\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, __jsx(_component_Image__WEBPACK_IMPORTED_MODULE_3__.default, {\n    src: \"/assets/images/illustrations/404.svg\",\n    maxWidth: \"320px\",\n    width: \"100%\",\n    mb: \"2rem\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }), __jsx(_component_FlexBox__WEBPACK_IMPORTED_MODULE_2__.default, {\n    flexWrap: \"wrap\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, __jsx(_component_buttons_Button__WEBPACK_IMPORTED_MODULE_1__.default, {\n    variant: \"outlined\",\n    color: \"primary\",\n    m: \"0.5rem\",\n    onClick: handleGoBack,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, \"Go Back\"), __jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n    href: \"/\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, __jsx(_component_buttons_Button__WEBPACK_IMPORTED_MODULE_1__.default, {\n    variant: \"contained\",\n    color: \"primary\",\n    m: \"0.5rem\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  }, \"Go to Home\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Error404);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib25pay8uL3NyYy9wYWdlcy80MDQudHN4PzhiYWYiXSwibmFtZXMiOlsiRXJyb3I0MDQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVHb0JhY2siLCJiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLE1BQU07QUFDckIsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFFQSxRQUFNQyxZQUFZLEdBQUcsWUFBWTtBQUMvQkYsVUFBTSxDQUFDRyxJQUFQO0FBQ0QsR0FGRDs7QUFJQSxTQUNFLE1BQUMsdURBQUQ7QUFDRSxpQkFBYSxFQUFDLFFBRGhCO0FBRUUsYUFBUyxFQUFDLE9BRlo7QUFHRSxrQkFBYyxFQUFDLFFBSGpCO0FBSUUsY0FBVSxFQUFDLFFBSmI7QUFLRSxNQUFFLEVBQUMsTUFMTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0UsTUFBQyxxREFBRDtBQUNFLE9BQUcsRUFBQyxzQ0FETjtBQUVFLFlBQVEsRUFBQyxPQUZYO0FBR0UsU0FBSyxFQUFDLE1BSFI7QUFJRSxNQUFFLEVBQUMsTUFKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsRUFhRSxNQUFDLHVEQUFEO0FBQVMsWUFBUSxFQUFDLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQ0UsV0FBTyxFQUFDLFVBRFY7QUFFRSxTQUFLLEVBQUMsU0FGUjtBQUdFLEtBQUMsRUFBQyxRQUhKO0FBSUUsV0FBTyxFQUFFRCxZQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQVNFLE1BQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUFRLFdBQU8sRUFBQyxXQUFoQjtBQUE0QixTQUFLLEVBQUMsU0FBbEM7QUFBNEMsS0FBQyxFQUFDLFFBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsQ0FURixDQWJGLENBREY7QUErQkQsQ0F0Q0Q7O0FBd0NBLCtEQUFlSCxRQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzLzQwNC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gXCJAY29tcG9uZW50L2J1dHRvbnMvQnV0dG9uXCI7XG5pbXBvcnQgRmxleEJveCBmcm9tIFwiQGNvbXBvbmVudC9GbGV4Qm94XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIkBjb21wb25lbnQvSW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBFcnJvcjQwNCA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlR29CYWNrID0gYXN5bmMgKCkgPT4ge1xuICAgIHJvdXRlci5iYWNrKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RmxleEJveFxuICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICBtaW5IZWlnaHQ9XCIxMDB2aFwiXG4gICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgIHB4PVwiMXJlbVwiXG4gICAgPlxuICAgICAgPEltYWdlXG4gICAgICAgIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2lsbHVzdHJhdGlvbnMvNDA0LnN2Z1wiXG4gICAgICAgIG1heFdpZHRoPVwiMzIwcHhcIlxuICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICBtYj1cIjJyZW1cIlxuICAgICAgLz5cbiAgICAgIDxGbGV4Qm94IGZsZXhXcmFwPVwid3JhcFwiPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIG09XCIwLjVyZW1cIlxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUdvQmFja31cbiAgICAgICAgPlxuICAgICAgICAgIEdvIEJhY2tcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgbT1cIjAuNXJlbVwiPlxuICAgICAgICAgICAgR28gdG8gSG9tZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L0ZsZXhCb3g+XG4gICAgPC9GbGV4Qm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXJyb3I0MDQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/404.tsx\n");

/***/ }),

/***/ "@styled-system/css":
/*!*************************************!*\
  !*** external "@styled-system/css" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@styled-system/css");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ }),

/***/ "styled-system":
/*!********************************!*\
  !*** external "styled-system" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-system");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","src_components_FlexBox_tsx-src_components_Image_tsx"], function() { return __webpack_exec__("./src/pages/404.tsx"); });
module.exports = __webpack_exports__;

})();