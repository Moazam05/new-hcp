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
