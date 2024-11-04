'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var AdminUserShow = function (props) {
    var _a;
    var _b = props || {}, resource = _b.resource, loading = _b.loading, open = _b.open, handleClose = _b.handleClose, enableEdit = _b.enableEdit, enableDelete = _b.enableDelete, handleDelete = _b.handleDelete, handleEdit = _b.handleEdit;
    var fields = [
        { label: 'First name', name: 'first_name', variant: 'string' },
        { label: 'Last name', name: 'last_name', variant: 'string' },
        { label: 'Email', name: 'email', variant: 'string' },
    ];
    return (react_1.default.createElement(components_1.ResourceModal, { loading: loading, open: open, handleClose: handleClose, enableEdit: enableEdit, enableDelete: enableDelete, handleEdit: handleEdit, handleDelete: handleDelete },
        react_1.default.createElement(components_1.ResourceDetails, { image: (_a = resource === null || resource === void 0 ? void 0 : resource.avatar) === null || _a === void 0 ? void 0 : _a.url, primary: resource === null || resource === void 0 ? void 0 : resource.name, secondary: "@".concat(resource === null || resource === void 0 ? void 0 : resource.username), label: resource === null || resource === void 0 ? void 0 : resource.role, resource: resource, fields: fields })));
};
exports.default = AdminUserShow;
