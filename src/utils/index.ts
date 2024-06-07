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
