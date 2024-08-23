"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var SortableResourceListItems_1 = __importDefault(require("./SortableResourceListItems"));
var __1 = require("../..");
var SortableResourceList = function (props) {
    var _a = (props || {}).list, List = _a === void 0 ? SortableResourceListItems_1.default : _a;
    return (react_1.default.createElement(__1.ResourceList, __assign({}, props, { list: List })));
};
exports.default = SortableResourceList;
