export const isValidIndianAccountNumber = (accountNumber: string): boolean =>
  /^\d{9,18}$/.test(accountNumber);

export const isValidBankDetails = (accountNumber: string): boolean =>
  /^\d{4}-\d{4}-\d{2}-\d{10}$/.test(accountNumber);

export const isValidIFSC = (ifsc: string): boolean =>
  /^[A-Z]{4}0[A-Z0-9]{6}$/.test(ifsc);
