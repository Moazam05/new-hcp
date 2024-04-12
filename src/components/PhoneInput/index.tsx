// React Phone Input Component
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// MUI
import { Box } from "@mui/material";

interface PrimaryPhoneInputProps {
  value: string;
  onChange: (e: string) => void;
  sx?: object;
}

const PrimaryPhoneInput = ({ value, onChange, sx }: PrimaryPhoneInputProps) => {
  return (
    <Box>
      <PhoneInput
        country={"us"}
        value={value}
        onChange={onChange}
        inputStyle={{
          width: "100%",
          height: "41px",
          outline: "none",
          fontSize: "16px",
          border: "2px solid #91C7E8",
          ...sx,
        }}
        buttonStyle={{
          border: "2px solid #91C7E8",
        }}
        inputClass="phone-input"
      />
    </Box>
  );
};

export default PrimaryPhoneInput;
