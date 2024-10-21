export const validateCardNumber = (number: string): boolean => {
  const regex = new RegExp("^[0-9]{13,19}$");
  return regex.test(number) && luhnCheck(number);
};

export const luhnCheck = (val: string) => {
  let checksum = 0;
  let j = 1;

  for (let i = val.length - 1; i >= 0; i--) {
    let calc = 0;
    calc = Number(val.charAt(i)) * j;

    if (calc > 9) {
      checksum = checksum + 1;
      calc = calc - 10;
    }

    checksum = checksum + calc;

    if (j == 1) {
      j = 2;
    } else {
      j = 1;
    }
  }

  return checksum % 10 == 0;
};
