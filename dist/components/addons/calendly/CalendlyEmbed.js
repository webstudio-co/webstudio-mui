'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_calendly_1 = require("react-calendly");
var frontend_js_1 = require("frontend-js");
var CalendlyEmbed = function (props) {
    var calendlyUrl = props.calendlyUrl;
    var currentUser = (0, frontend_js_1.useAuth)().currentUser;
    var _a = (0, react_1.useState)({}), prefill = _a[0], setPrefill = _a[1];
    (0, react_1.useEffect)(function () {
        if (currentUser === null || currentUser === void 0 ? void 0 : currentUser.email) {
            setPrefill({
                email: currentUser.email,
                firstName: currentUser.first_name,
                lastName: currentUser.last_name,
                name: currentUser.name,
            });
        }
    }, [currentUser === null || currentUser === void 0 ? void 0 : currentUser.email]);
    if (!calendlyUrl)
        return null;
    return (react_1.default.createElement("div", { className: "flex flex-col items-center justify-center" },
        react_1.default.createElement("div", { className: "w-full sm:w-[640px] md:w-[768px]" },
            react_1.default.createElement(react_calendly_1.InlineWidget, { styles: {
                    width: '100%',
                    overflow: 'none',
                    height: '1000px',
                }, url: calendlyUrl, prefill: prefill, "data-resize": "true" }))));
};
exports.default = CalendlyEmbed;