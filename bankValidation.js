"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidBankDetails = void 0;
var isValidBankDetails = function (accountNumber) {
    return /[0-9]{4}-[0-9]{4}-[0-9]{2}-[0-9]{10}/.test(accountNumber);
};
exports.isValidBankDetails = isValidBankDetails;
