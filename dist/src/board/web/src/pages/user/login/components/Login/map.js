"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var icons_1 = require("@ant-design/icons");
var react_1 = __importDefault(require("react"));
var index_less_1 = __importDefault(require("./index.less"));
exports.default = {
    UserName: {
        props: {
            size: 'large',
            id: 'userName',
            prefix: (<icons_1.UserOutlined style={{
                color: '#1890ff',
            }} className={index_less_1.default.prefixIcon}/>),
            placeholder: 'admin',
        },
        rules: [
            {
                required: true,
                message: 'Please enter username!',
            },
        ],
    },
    Password: {
        props: {
            size: 'large',
            prefix: <icons_1.LockTwoTone className={index_less_1.default.prefixIcon}/>,
            type: 'password',
            id: 'password',
            placeholder: '888888',
        },
        rules: [
            {
                required: true,
                message: 'Please enter password!',
            },
        ],
    },
    Mobile: {
        props: {
            size: 'large',
            prefix: <icons_1.MobileTwoTone className={index_less_1.default.prefixIcon}/>,
            placeholder: 'mobile number',
        },
        rules: [
            {
                required: true,
                message: 'Please enter mobile number!',
            },
            {
                pattern: /^1\d{10}$/,
                message: 'Wrong mobile number format!',
            },
        ],
    },
    Captcha: {
        props: {
            size: 'large',
            prefix: <icons_1.MailTwoTone className={index_less_1.default.prefixIcon}/>,
            placeholder: 'captcha',
        },
        rules: [
            {
                required: true,
                message: 'Please enter Captcha!',
            },
        ],
    },
};
//# sourceMappingURL=map.js.map