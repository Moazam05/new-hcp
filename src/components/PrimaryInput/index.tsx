// React Imports
import React from "react";
// MUI
import { Box, InputAdornment, TextField } from "@mui/material";

interface PrimaryInputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  fullWidth?: boolean;
  startAdornment?: any;
  endAdornment?: any;
  name?: string;
  onClick?: any;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  helperText?: string;
  sx?: any;
  minRows?: number;
  maxRows?: number;
  readOnly?: boolean;
  multiline?: boolean;
  required?: boolean;
  error?: boolean;
  disabled?: boolean;
  variant?: "standard" | "filled" | "outlined";
  onKeyPress?: any;
  autoFocus?: boolean;
  loading?: boolean;
  borderRadius?: string;
  ref?: React.RefObject<HTMLInputElement>;
  blueField?: boolean;
}

const PrimaryInput: React.FC<PrimaryInputProps> = ({
  label,
  placeholder,
  type,
  fullWidth = true,
  startAdornment,
  endAdornment,
  name,
  onClick,
  onChange,
  value,
  onBlur,
  helperText,
  sx,
  minRows,
  maxRows,
  readOnly = false,
  multiline = false,
  required = false,
  error = false,
  disabled = false,
  variant,
  autoFocus,
  loading = false,
  borderRadius,
  ref,
  blueField,
}) => {
  return (
    <TextField
      id={name}
      error={error}
      label={label}
      required={required}
      autoFocus={autoFocus}
      ref={ref}
      sx={[
        {
          "& input[type=number]": {
            MozAppearance: "textfield",
          },
          "& input[type=number]::-webkit-outer-spin-button": {
            WebkitAppearance: "none",
            margin: 0,
          },
          "& input[type=number]::-webkit-inner-spin-button": {
            WebkitAppearance: "none",
            margin: 0,
          },
          "& .MuiFormHelperText-root": {
            marginLeft: "2px !important",
            fontSize: "12px !important",
            color: "#FF0000 !important",
            fontWeight: "400 !important",
            lineHeight: "17px !important",
          },
          "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
            padding: "8px 14px",
            borderRadius: "0",
          },

          // target the placeholder
          "& .MuiInputBase-input::placeholder": {
            fontSize: "14px",
          },
        },
        sx,
      ]}
      onChange={onChange}
      name={name}
      type={type}
      value={value || ""}
      variant={variant ? variant : "outlined"}
      fullWidth={fullWidth}
      multiline={multiline}
      placeholder={placeholder}
      onBlur={onBlur}
      disabled={disabled}
      helperText={helperText ? helperText : ""}
      minRows={minRows ? minRows : 6}
      maxRows={maxRows ? maxRows : 6}
      InputProps={{
        sx: {
          borderRadius: borderRadius ? borderRadius : "0",
          background: "#fff",
          height: multiline ? "auto" : "41px",
          boxShadow: blueField
            ? ""
            : error
            ? "none"
            : "inset 0px 0px 5px rgba(0,0,0,0.35)",
          border: blueField ? "" : error ? "1px solid #FF0000" : "none",
          borderBottom: blueField ? "1px solid #00739A" : "",
          "& fieldset": { border: "none" },
        },
        readOnly: readOnly,
        startAdornment: startAdornment ? (
          <InputAdornment position="start">
            <Box>{startAdornment}</Box>
          </InputAdornment>
        ) : (
          ""
        ),
        endAdornment: endAdornment ? (
          <InputAdornment position="end">
            <Box
              onClick={onClick ? onClick : null}
              sx={{
                cursor: "pointer",
              }}
            >
              {endAdornment}
            </Box>
          </InputAdornment>
        ) : loading ? (
          "Loading..."
        ) : (
          ""
        ),
        inputProps: {
          min: 0,
          // restrict user to type -
          onKeyDown: (event: any) => {
            if (event.key === "-" && type === "number") {
              event.preventDefault();
            }
          },
        },
      }}
    />
  );
};

export default PrimaryInput;
