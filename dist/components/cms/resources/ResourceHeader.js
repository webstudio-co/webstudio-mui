'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@nextui-org/react");
var __1 = require("../..");
var react_3 = require("@nextui-org/react");
var react_4 = require("@remixicon/react");
var ResourceHeader = function (props) {
    var _a = props || {}, _b = _a.direction, direction = _b === void 0 ? 'row' : _b, _c = _a.buttonText, buttonText = _c === void 0 ? 'Add' : _c, enableSearch = _a.enableSearch, enableFilters = _a.enableFilters, enableSorting = _a.enableSorting, enableCreate = _a.enableCreate, enableExport = _a.enableExport, handleExport = _a.handleExport, handleSearch = _a.handleSearch, handleKeywordChange = _a.handleKeywordChange, handleFilter = _a.handleFilter, handleSortBy = _a.handleSortBy, handleSortDirection = _a.handleSortDirection, handleAdd = _a.handleAdd, keywords = _a.keywords, activeFilters = _a.activeFilters, filterOptions = _a.filterOptions, sortOptions = _a.sortOptions, secondaryAction = _a.secondaryAction, _d = _a.query, query = _d === void 0 ? {} : _d;
    return (react_1.default.createElement("div", { className: (0, react_3.cn)('flex flex-col space-y-2 w-full align-center justify-between', direction == 'row' && 'sm:flex-row sm:space-x-2 sm:space-y-0') },
        react_1.default.createElement("div", { className: (0, react_3.cn)('w-full flex flex-col space-y-2 items-center justify-start', direction == 'row' && 'sm:flex-row sm:space-x-2 sm:space-y-0') },
            enableSearch && (react_1.default.createElement(__1.SearchInput, { value: keywords, handleChange: handleKeywordChange, handleSearch: handleSearch })),
            enableFilters && (react_1.default.createElement(__1.FilterButton, { filters: activeFilters, handleFilter: handleFilter, filterOptions: filterOptions })),
            enableSorting && (react_1.default.createElement(__1.SortButton, { sortBy: (query === null || query === void 0 ? void 0 : query.sort_by) || 'id', sortDirection: (query === null || query === void 0 ? void 0 : query.sort_direction) || 'desc', sortOptions: sortOptions, handleSortBy: handleSortBy, handleSortDirection: handleSortDirection }))),
        react_1.default.createElement("div", { className: (0, react_3.cn)('flex flex-col space-y-2 w-full align-center justify-end', direction == 'row' && 'sm:flex-row sm:space-x-2 sm:space-y-0') },
            secondaryAction,
            enableExport && (react_1.default.createElement(react_2.Button, { variant: "ghost", className: "w-full sm:w-auto", onPress: handleExport, startContent: react_1.default.createElement(__1.RemixIcon, { name: "ri-download-fill", className: "text-secondary-foreground" }) }, "Export")),
            (enableCreate || secondaryAction) && (react_1.default.createElement(react_2.Button, { color: "primary", variant: "solid", onPress: handleAdd, className: "w-full sm:w-auto", startContent: react_1.default.createElement(react_4.RiAddFill, { className: "text-primary-foreground" }) }, buttonText)))));
};
exports.default = ResourceHeader;
