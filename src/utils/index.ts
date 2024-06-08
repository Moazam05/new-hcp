import {
  parsePhoneNumberFromString,
  parsePhoneNumber,
} from "libphonenumber-js";

// prevent auto form submission
export function onKeyDown(keyEvent: any) {
  if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
    keyEvent.preventDefault();
  }
}
// validate Mobile Number with country code
export const phoneNumberValidator = (value: any, countryCode: any) => {
  try {
    const phoneNumber: any = parsePhoneNumberFromString(value, countryCode);
    return phoneNumber.isValid();
  } catch (error) {
    return false;
  }
};

// Masking Mobile Number
export const maskingPhoneNumber = (value: any) => {
  if (value) {
    const phoneNumber = parsePhoneNumber(`+${value}`);
    return phoneNumber.formatNational();
  }
};

export const getCurrentDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

// 06/06/2024 => 2024-06-06
export function convertDateFormat(dateString: any) {
  // Split the input date string by '/'
  const [day, month, year] = dateString.split("/");

  // Return the formatted date string
  return `${year}-${month}-${day}`;
}

// bv: true, copay: true, => [7, 6]
export function getValues(args: any) {
  // Define the value mapping for each key
  const valueMapping: any = {
    bv: 7,
    copay: 6,
    financialAssistant: 5,
  };

  // Initialize an empty array to store the result
  const result = [];

  // Iterate over the keys in the arguments object
  for (const key in args) {
    if (args[key] === true) {
      // If the argument is true, push the corresponding value to the result array
      result.push(valueMapping[key]);
    }
  }

  return result;
}
