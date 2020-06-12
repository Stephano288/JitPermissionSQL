"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
var WheelHttpInterceptor = /** @class */ (function () {
    function WheelHttpInterceptor(spinner) {
        this.spinner = spinner;
        this.count = 0;
    }
    WheelHttpInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        this.spinner.show();
        this.count++;
        return next.handle(req)
            .pipe(operators_1.tap(function (event) { return console.log(event); }, function (error) { return console.log(error); }), operators_1.finalize(function () {
            _this.count--;
            if (_this.count == 0)
                _this.spinner.hide();
        }));
    };
    return WheelHttpInterceptor;
}());
exports.WheelHttpInterceptor = WheelHttpInterceptor;
//# sourceMappingURL=wheelinterceptor.component.js.map