"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
describe('isUrl tests', function () {
    it('should return false for invalid and corner case inputs', function () {
        expect(utils_1.isUrl([])).toBeFalsy();
        expect(utils_1.isUrl({})).toBeFalsy();
        expect(utils_1.isUrl(false)).toBeFalsy();
        expect(utils_1.isUrl(true)).toBeFalsy();
        expect(utils_1.isUrl(NaN)).toBeFalsy();
        expect(utils_1.isUrl(null)).toBeFalsy();
        expect(utils_1.isUrl(undefined)).toBeFalsy();
        expect(utils_1.isUrl('')).toBeFalsy();
    });
    it('should return false for invalid URLs', function () {
        expect(utils_1.isUrl('foo')).toBeFalsy();
        expect(utils_1.isUrl('bar')).toBeFalsy();
        expect(utils_1.isUrl('bar/test')).toBeFalsy();
        expect(utils_1.isUrl('http:/example.com/')).toBeFalsy();
        expect(utils_1.isUrl('ttp://example.com/')).toBeFalsy();
    });
    it('should return true for valid URLs', function () {
        expect(utils_1.isUrl('http://example.com/')).toBeTruthy();
        expect(utils_1.isUrl('https://example.com/')).toBeTruthy();
        expect(utils_1.isUrl('http://example.com/test/123')).toBeTruthy();
        expect(utils_1.isUrl('https://example.com/test/123')).toBeTruthy();
        expect(utils_1.isUrl('http://example.com/test/123?foo=bar')).toBeTruthy();
        expect(utils_1.isUrl('https://example.com/test/123?foo=bar')).toBeTruthy();
        expect(utils_1.isUrl('http://www.example.com/')).toBeTruthy();
        expect(utils_1.isUrl('https://www.example.com/')).toBeTruthy();
        expect(utils_1.isUrl('http://www.example.com/test/123')).toBeTruthy();
        expect(utils_1.isUrl('https://www.example.com/test/123')).toBeTruthy();
        expect(utils_1.isUrl('http://www.example.com/test/123?foo=bar')).toBeTruthy();
        expect(utils_1.isUrl('https://www.example.com/test/123?foo=bar')).toBeTruthy();
    });
});
describe('getRouteAuthority tests', function () {
    it('should return authority for each route', function () {
        var routes = [
            { path: '/user', name: 'user', authority: ['user'], exact: true },
            { path: '/admin', name: 'admin', authority: ['admin'], exact: true },
        ];
        expect(utils_1.getRouteAuthority('/user', routes)).toEqual(['user']);
        expect(utils_1.getRouteAuthority('/admin', routes)).toEqual(['admin']);
    });
    it('should return inherited authority for unconfigured route', function () {
        var routes = [
            { path: '/nested', authority: ['admin', 'user'], exact: true },
            { path: '/nested/user', name: 'user', exact: true },
        ];
        expect(utils_1.getRouteAuthority('/nested/user', routes)).toEqual(['admin', 'user']);
    });
    it('should return authority for configured route', function () {
        var routes = [
            { path: '/nested', authority: ['admin', 'user'], exact: true },
            { path: '/nested/user', name: 'user', authority: ['user'], exact: true },
            { path: '/nested/admin', name: 'admin', authority: ['admin'], exact: true },
        ];
        expect(utils_1.getRouteAuthority('/nested/user', routes)).toEqual(['user']);
        expect(utils_1.getRouteAuthority('/nested/admin', routes)).toEqual(['admin']);
    });
    it('should return authority for substring route', function () {
        var routes = [
            { path: '/nested', authority: ['user', 'users'], exact: true },
            { path: '/nested/users', name: 'users', authority: ['users'], exact: true },
            { path: '/nested/user', name: 'user', authority: ['user'], exact: true },
        ];
        expect(utils_1.getRouteAuthority('/nested/user', routes)).toEqual(['user']);
        expect(utils_1.getRouteAuthority('/nested/users', routes)).toEqual(['users']);
    });
});
//# sourceMappingURL=utils.test.js.map