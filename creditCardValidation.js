"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.luhnCheck = exports.validateCardNumber = void 0;
var validateCardNumber = function (number) {
    var regex = new RegExp("^[0-9]{13,19}$");
    if (!regex.test(number)) {
        return false;
    }
    return (0, exports.luhnCheck)(number);
};
exports.validateCardNumber = validateCardNumber;
var luhnCheck = function (val) {
    var checksum = 0;
    var j = 1;
    for (var i = val.length - 1; i >= 0; i--) {
        var calc = 0;
        calc = Number(val.charAt(i)) * j;
        if (calc > 9) {
            checksum = checksum + 1;
            calc = calc - 10;
        }
        checksum = checksum + calc;
        if (j == 1) {
            j = 2;
        }
        else {
            j = 1;
        }
    }
    return (checksum % 10) == 0;
};
exports.luhnCheck = luhnCheck;
