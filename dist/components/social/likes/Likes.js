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
var __1 = require("../..");
var Likes = function (props) {
    var fields = props.fields, enableSearch = props.enableSearch, enableCreate = props.enableCreate, filterOptions = props.filterOptions, sortOptions = props.sortOptions, url = props.url, _a = props.query, query = _a === void 0 ? {} : _a, filterUser = props.filterUser, filterTeam = props.filterTeam, perPage = props.perPage, rest = __rest(props, ["fields", "enableSearch", "enableCreate", "filterOptions", "sortOptions", "url", "query", "filterUser", "filterTeam", "perPage"]);
    var likesUrl = "".concat(url, "/likes");
    return (react_1.default.createElement(__1.CollectionContainer, { url: likesUrl, query: query, filterUser: filterUser, filterTeam: filterTeam, perPage: perPage, enableSearch: enableSearch, filterOptions: filterOptions, sortOptions: sortOptions },
        react_1.default.createElement(__1.CollectionList, __assign({}, rest, { url: url }))));
};
exports.default = Likes;