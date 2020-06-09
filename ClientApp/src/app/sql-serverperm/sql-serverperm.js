"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ServerPermission = /** @class */ (function () {
    function ServerPermission(role, login, startDate, endDate) {
        if (role === void 0) { role = ''; }
        if (login === void 0) { login = ''; }
        if (startDate === void 0) { startDate = new Date(); }
        if (endDate === void 0) { endDate = new Date(); }
    }
    ;
    return ServerPermission;
}());
exports.ServerPermission = ServerPermission;
//# sourceMappingURL=sql-serverperm.js.map