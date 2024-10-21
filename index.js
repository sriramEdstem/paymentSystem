"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var creditCardValidation_1 = require("./creditCardValidation");
var emailValidation_1 = require("./emailValidation");
var bankValidation_1 = require("./bankValidation");
function processPayment(paymentMethod) {
    if (paymentMethod.type === "creditCard") {
        if ((0, creditCardValidation_1.validateCardNumber)(paymentMethod.cardNumber) && paymentMethod.cvv.length == 3) {
            return "Processing credit card payment ending in ".concat(paymentMethod.cardNumber.slice(-4));
        }
        return "invalid CreditCard Details";
    }
    if (paymentMethod.type === "paypal") {
        if ((0, emailValidation_1.validateEmail)(paymentMethod.email)) {
            return "Processing paypal payment of email: ".concat(paymentMethod.email);
        }
        return "invalid email";
    }
    if (paymentMethod.type === "bank") {
        if ((0, bankValidation_1.isValidBankDetails)(paymentMethod.accountNumber)) {
            return "Processing payment of account number ending in  ".concat(paymentMethod.accountNumber.slice(-4), "  ");
        }
        return "Invalid bank details";
    }
    return "Invalid payment methord";
}
var creditCardPayment = {
    type: "creditCard",
    cardNumber: "4111111111111111",
    cvv: "123"
};
console.log(processPayment(creditCardPayment));
var bankDetails = {
    type: "bank",
    accountNumber: "4444-4444-22-01234567890",
    routingNumber: "123455679797866959595"
};
console.log(processPayment(bankDetails));
var payPal = {
    type: "paypal",
    email: "testemail@gmail.com"
};
console.log(processPayment(payPal));
