"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SQLServerPermission = /** @class */ (function () {
    function SQLServerPermission(role, login, startDate, endDate) {
        if (role === void 0) { role = ''; }
        if (login === void 0) { login = ''; }
        if (startDate === void 0) { startDate = new Date(""); }
        if (endDate === void 0) { endDate = new Date(""); }
        this.role = role;
        this.login = login;
        this.startDate = startDate;
        this.endDate = endDate;
    }
    return SQLServerPermission;
}());
exports.SQLServerPermission = SQLServerPermission;
//# sourceMappingURL=sql-serverperm.js.map