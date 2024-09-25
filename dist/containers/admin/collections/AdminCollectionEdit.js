"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var components_1 = require("../../../components");
var material_1 = require("@mui/material");
var AdminCollectionForm_1 = __importDefault(require("./AdminCollectionForm"));
var AdminCollectionEdit = function (props) {
    var loading = props.loading, errors = props.errors, open = props.open, collection = props.collection, handleClose = props.handleClose, handleChange = props.handleChange, handleSubmit = props.handleSubmit, handleTemplateClick = props.handleTemplateClick;
    return (react_1.default.createElement(components_1.Drawer, { loading: loading, open: open, handleClose: handleClose, title: (collection === null || collection === void 0 ? void 0 : collection.id) ? 'Edit Collection' : 'Add Collection', disablePadding: true, buttons: react_1.default.createElement(material_1.Button, { fullWidth: true, color: "primary", variant: "contained", onClick: handleSubmit, startIcon: react_1.default.createElement(components_1.IconLoading, { loading: loading }) }, (collection === null || collection === void 0 ? void 0 : collection.id) ? 'Update' : 'Save') },
        react_1.default.createElement(AdminCollectionForm_1.default, { errors: errors, collection: collection, handleChange: handleChange, handleTemplateClick: handleTemplateClick })));
};
exports.default = AdminCollectionEdit;