export  const isValidBankDetails = (accountNumber: string) => 
        /[0-9]{4}-[0-9]{4}-[0-9]{2}-[0-9]{10}/.test(accountNumber);
    