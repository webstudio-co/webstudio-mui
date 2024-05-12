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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var context_1 = require("../../../../context");
var material_1 = require("@mui/material");
var __1 = require("../../..");
var helpers_1 = require("../../../../helpers");
var router_1 = require("next/router");
var index_1 = require("../../../../constants/index");
var components_1 = require("../../../../components");
var CardGrid = function (props) {
    var clientUrl = (0, react_1.useContext)(context_1.AppContext).clientUrl;
    var _a = props || {}, actions = _a.actions, item = _a.item, href = _a.href, handleClick = _a.handleClick, _b = _a.objectFit, objectFit = _b === void 0 ? 'cover' : _b, _c = _a.height, height = _c === void 0 ? index_1.CARD_VERT_HEIGHT : _c, _d = _a.enableBorder, enableBorder = _d === void 0 ? false : _d, _e = _a.enableGradient, enableGradient = _e === void 0 ? false : _e, _f = _a.enableOverlay, enableOverlay = _f === void 0 ? false : _f;
    var _g = item || {}, label = _g.label, title = _g.title, image = _g.image;
    var router = (0, router_1.useRouter)();
    var handleItemClick = function () {
        if (handleClick) {
            handleClick();
        }
        else if (href) {
            router.push("".concat(clientUrl).concat(href));
        }
    };
    return (react_1.default.createElement(material_1.Stack, { spacing: 1, sx: __assign(__assign(__assign({}, sx.root), (enableBorder && sx.rootBorder)), { minWidth: "".concat(index_1.CARD_VERT_WIDTH, "px"), minHeight: height + 80 }) },
        react_1.default.createElement(material_1.Box, { sx: sx.imageContainer },
            react_1.default.createElement(__1.TouchableOpacity, { handleClick: handleItemClick },
                react_1.default.createElement(__1.Image, { src: (image === null || image === void 0 ? void 0 : image.url) || image, height: height, objectFit: objectFit, alt: title, label: label, enableGradient: enableGradient, disableBorderRadius: enableBorder, enableOverlay: enableOverlay }))),
        react_1.default.createElement(material_1.Stack, { spacing: 1, sx: __assign(__assign({}, sx.content), (enableBorder && sx.contentBorder)) },
            react_1.default.createElement(material_1.Stack, { sx: sx.contentArea, direction: "row", spacing: 0 },
                react_1.default.createElement(material_1.Typography, { sx: sx.title, color: "textPrimary", variant: "subtitle2" }, (0, helpers_1.truncate)(title)),
                react_1.default.createElement(components_1.Actions, { numVisible: 0, actions: actions, resource: item })))));
};
exports.default = CardGrid;
var sx = {
    root: {
        width: '100%',
    },
    rootBorder: {
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
        overflow: 'hidden',
    },
    imageContainer: {
        width: '100%',
        position: 'relative',
        flexDirection: 'column',
        overflow: 'hidden',
    },
    gradient: {
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '50%',
            background: 'linear-gradient(to top, rgb(0,0,0,0.5), transparent)',
        },
    },
    content: {
        width: '100%',
        minHeight: '60px',
    },
    contentArea: {
        width: '100%',
    },
    contentBorder: {
        p: 1,
        pt: 0,
    },
    title: {
        width: '100%',
        minHeight: '50px',
    },
    description: {
        maxWidth: '320px',
    },
};