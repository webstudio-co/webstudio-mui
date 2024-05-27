"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CheckboxRatingsFilterItem_1 = __importDefault(require("./CheckboxRatingsFilterItem"));
var __1 = require("../..");
var CheckboxFilter = function (props) {
    var label = props.label, name = props.name, values = props.values, handleClick = props.handleClick, _a = props.disablePadding, disablePadding = _a === void 0 ? false : _a, _b = props.defaultClosed, defaultClosed = _b === void 0 ? false : _b;
    var RATING_OPTIONS = [
        { label: '5 Star', value: 5 },
        { label: '4 Stars', value: 4 },
        { label: '3 Stars', value: 3 },
        { label: '2 Stars', value: 2 },
        { label: '1 Stars', value: 1 },
    ];
    return (react_1.default.createElement(__1.MenuList, { label: label, disablePadding: disablePadding, defaultClosed: defaultClosed }, RATING_OPTIONS === null || RATING_OPTIONS === void 0 ? void 0 : RATING_OPTIONS.map(function (option, index) { return (react_1.default.createElement(CheckboxRatingsFilterItem_1.default, { key: index, values: values, option: option, handleClick: function () {
            return handleClick({
                where: 'OR',
                operator: 'eq',
                field: name,
                value: option.value,
            });
        } })); })));
};
exports.default = CheckboxFilter;
