import {validateCardNumber} from "./creditCardValidation";
import { validateEmail } from "./emailValidation";
import { isValidBankDetails } from "./bankValidation";
interface CreditCard {
    type: "creditCard"; cardNumber: string; cvv: string 
}
interface Paypal { 
    type: "paypal"; email: string 
}   
interface NetBanking { 
    type: "bank"; accountNumber: string; routingNumber: string 
}
type PaymentMethod = 
    | CreditCard
    |Paypal
    | NetBanking;


    function processPayment(paymentMethod: PaymentMethod):string {
        if (paymentMethod.type === "creditCard"){
            if(validateCardNumber(paymentMethod.cardNumber) && paymentMethod.cvv.length==3){
                return `Processing credit card payment ending in ${paymentMethod.cardNumber.slice(-4)}`
            }
             return "invalid CreditCard Details"
        }
        if(paymentMethod.type === "paypal"){
            if(validateEmail(paymentMethod.email)){
                return `Processing paypal payment of email: ${paymentMethod.email}`
            }
             return "invalid email"
        }
        if(paymentMethod.type === "bank"){ if(isValidBankDetails(paymentMethod.accountNumber)){
            return `Processing payment of account number ending in  ${paymentMethod.accountNumber.slice(-4)}  `
        }
         return "Invalid bank details"
    }
         return "Invalid payment methord"
    }

    const creditCardPayment: PaymentMethod = {
        type: "creditCard",
        cardNumber: "4111111111111111",
        cvv: "123"
    };
    console.log(processPayment(creditCardPayment));

    const bankDetails: PaymentMethod = {
        type: "bank",
        accountNumber: "4444-4444-22-01234567890",
        routingNumber: "123455679797866959595"
    }
    console.log(processPayment(bankDetails));

    const payPal: PaymentMethod={
        type: "paypal",
        email: "testemail@gmail.com"
    }    
    console.log(processPayment(payPal));