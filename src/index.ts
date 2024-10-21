import { isValidIFSC, isValidIndianAccountNumber } from "./bankValidation";
import { validateCardNumber } from "./creditCardValidation";
import { validateEmail } from "./emailValidation";

// Updated PaymentMethod type
type PaymentMethod =
  | { type: "creditCard"; cardNumber: string; cvv: string }
  | { type: "paypal"; email: string }
  | { type: "bank"; accountNumber: string; ifsc: string };

// Updated processPayment function
function processPayment(paymentMethod: PaymentMethod): string {
  switch (paymentMethod.type) {
    case "creditCard":
      // logic here
      if (!validateCardNumber(paymentMethod.cardNumber)) {
        if (!(paymentMethod.cvv.length == 3)) {
          return "Invalid credit card cvv";
        }
        return "invalid CreditCard number";
      }
      return `Processing credit card payment ending in ${paymentMethod.cardNumber.slice(-4)}`;

    case "paypal":
      if (!validateEmail(paymentMethod.email)) {
        return "Invalid email address";
      }
      return `Processing paypal payment of email address: ${paymentMethod.email}`;

    case "bank":
      if (!isValidIndianAccountNumber(paymentMethod.accountNumber)) {
        return "Invalid bank account number";
      }
      if (!isValidIFSC(paymentMethod.ifsc)) {
        return "Invalid IFSC code";
      }
      return `Processing bank payment for account ${paymentMethod.accountNumber.slice(-4)} with IFSC ${paymentMethod.ifsc}`;

    default:
      const _exhaustiveCheck: never = paymentMethod;
      return _exhaustiveCheck;
  }
}

