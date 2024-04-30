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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var hooks_1 = require("../../../hooks");
var components_1 = require("../../../components");
var ActionButton = function (props) {
    var action = props.action, resource = props.resource, rest = __rest(props, ["action", "resource"]);
    var _a = action || {}, icon = _a.icon, _b = _a.label, label = _b === void 0 ? 'View' : _b;
    var handleClick = (0, hooks_1.useActions)({
        action: action,
        resource: resource,
    }).handleClick;
    var onClick = function (ev) {
        handleClick(ev);
    };
    return (react_1.default.createElement(material_1.Button, __assign({ fullWidth: true, sx: sx.button, startIcon: icon && (react_1.default.createElement(components_1.Icon, { name: icon, size: 20, color: (action === null || action === void 0 ? void 0 : action.color) == 'primary'
                ? 'primary.contrastText'
                : 'secondary.contrastText' })), onClick: onClick, variant: (action === null || action === void 0 ? void 0 : action.variant) || 'contained', color: (action === null || action === void 0 ? void 0 : action.color) || 'secondary' }, rest), label));
};
exports.default = ActionButton;
var sx = {
    button: {
        width: {
            sm: 'auto',
            xs: '100%',
        },
    },
};
