"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidIFSC = exports.isValidBankDetails = exports.isValidIndianAccountNumber = void 0;
const isValidIndianAccountNumber = (accountNumber) => /^\d{9,18}$/.test(accountNumber);
exports.isValidIndianAccountNumber = isValidIndianAccountNumber;
const isValidBankDetails = (accountNumber) => /^\d{4}-\d{4}-\d{2}-\d{10}$/.test(accountNumber);
exports.isValidBankDetails = isValidBankDetails;
const isValidIFSC = (ifsc) => /^[A-Z]{4}0[A-Z0-9]{6}$/.test(ifsc);
exports.isValidIFSC = isValidIFSC;
