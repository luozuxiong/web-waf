"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getFakeCaptcha(req, res) {
    return res.json('captcha-xxx');
}
exports.default = {
    'POST  /api/login/account': function (req, res) {
        var _a = req.body, password = _a.password, userName = _a.userName, type = _a.type;
        if (password === 'ant.design' && userName === 'admin') {
            res.send({
                status: 'ok',
                type: type,
                currentAuthority: 'admin',
            });
            return;
        }
        if (password === 'ant.design' && userName === 'user') {
            res.send({
                status: 'ok',
                type: type,
                currentAuthority: 'user',
            });
            return;
        }
        if (type === 'mobile') {
            res.send({
                status: 'ok',
                type: type,
                currentAuthority: 'admin',
            });
            return;
        }
        res.send({
            status: 'error',
            type: type,
            currentAuthority: 'guest',
        });
    },
    'GET  /api/login/captcha': getFakeCaptcha,
};
//# sourceMappingURL=_mock.js.map