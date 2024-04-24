"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../components");
var AuthRequired = function () {
    return (react_1.default.createElement(components_1.Placeholder, { title: "Sign In", description: "Please sign in to view this content.", actions: react_1.default.createElement(components_1.SignInButton, { buttonText: "Login" }) }));
};
exports.default = AuthRequired;
