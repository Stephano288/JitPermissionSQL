"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConnectionString = /** @class */ (function () {
    function ConnectionString(dataSource, userdID, password, dbName, isIntegrated) {
        if (dataSource === void 0) { dataSource = ''; }
        if (userdID === void 0) { userdID = ''; }
        if (password === void 0) { password = ''; }
        if (dbName === void 0) { dbName = "master"; }
        if (isIntegrated === void 0) { isIntegrated = false; }
        this.dataSource = dataSource;
        this.userdID = userdID;
        this.password = password;
        this.dbName = dbName;
        this.isIntegrated = isIntegrated;
    }
    return ConnectionString;
}());
exports.ConnectionString = ConnectionString;
//# sourceMappingURL=sql-conn.js.map