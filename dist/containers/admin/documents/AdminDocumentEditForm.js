'use client';
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
var components_1 = require("../../../components");
var components_2 = require("../../../components");
var AdminDocumentEditForm = function (props) {
    var _a = (props || {}).fields, fields = _a === void 0 ? [] : _a;
    var inputOptions = {
        image: components_2.MediaInput,
        video: components_2.MediaInput,
        youtube_video: components_1.TextInput,
        vimeo_video: components_1.TextInput,
        soundcloud_audio: components_1.TextInput,
        calendly_url: components_1.TextInput,
    };
    return react_1.default.createElement(components_1.ResourceForm, __assign({}, props, { fields: fields, inputOptions: inputOptions }));
};
exports.default = AdminDocumentEditForm;