import { TextField } from "@mui/material";

interface BlueInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  placeholder?: string;
  type?: string;
}

const BlueInput = ({
  value,
  onChange,
  name,
  placeholder,
  type,
}: BlueInputProps) => {
  return (
    <TextField
      label=""
      name={name || "name"}
      placeholder={placeholder || "Placeholder"}
      type={type || "text"}
      value={value}
      onChange={onChange}
      sx={{
        width: "100%",
      }}
      InputProps={{
        sx: {
          borderRadius: "12px",
          border: "2px solid #91C7E8",
          height: "41px",
          "& fieldset": { border: "none" },
          "& .MuiInputBase-input::placeholder": {
            textAlign: "center",
          },
        },
      }}
    />
  );
};

export default BlueInput;
