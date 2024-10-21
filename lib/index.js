"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bankValidation_1 = require("./bankValidation");
const creditCardValidation_1 = require("./creditCardValidation");
const emailValidation_1 = require("./emailValidation");
// Updated processPayment function
function processPayment(paymentMethod) {
    switch (paymentMethod.type) {
        case "creditCard":
            // logic here
            if (!(0, creditCardValidation_1.validateCardNumber)(paymentMethod.cardNumber)) {
                if (!(paymentMethod.cvv.length == 3)) {
                    return "Invalid credit card cvv";
                }
                return "invalid CreditCard number";
            }
            return `Processing credit card payment ending in ${paymentMethod.cardNumber.slice(-4)}`;
        case "paypal":
            if (!(0, emailValidation_1.validateEmail)(paymentMethod.email)) {
                return "Invalid email address";
            }
            return `Processing paypal payment of email address: ${paymentMethod.email}`;
        case "bank":
            if (!(0, bankValidation_1.isValidIndianAccountNumber)(paymentMethod.accountNumber)) {
                return "Invalid bank account number";
            }
            if (!(0, bankValidation_1.isValidIFSC)(paymentMethod.ifsc)) {
                return "Invalid IFSC code";
            }
            return `Processing bank payment for account ${paymentMethod.accountNumber.slice(-4)} with IFSC ${paymentMethod.ifsc}`;
        default:
            const _exhaustiveCheck = paymentMethod;
            return _exhaustiveCheck;
    }
}
