'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var frontend_shadcn_1 = require("frontend-shadcn");
var Label = function (props) {
    var label = props.label, className = props.className;
    if (!label)
        return null;
    return (react_1.default.createElement("div", { className: (0, frontend_shadcn_1.cn)('text-xs font-medium text-uppercase tracking-wide', className) }, label));
};
exports.default = Label;
