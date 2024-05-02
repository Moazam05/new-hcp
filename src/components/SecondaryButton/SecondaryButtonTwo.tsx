// React Imports
import React from "react";
// MUI
import { Button } from "@mui/material";

interface SecondaryButtonTwoProps {
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
  children?: React.ReactNode;
  sx?: any;
}

const SecondaryButtonTwo: React.FC<SecondaryButtonTwoProps> = (props) => {
  const { onClick, type, disabled, children, sx } = props;

  return (
    <Button
      type={type || "button"}
      sx={{
        backgroundColor: "#fff",
        color: "#00739A",
        border: "1px solid #00739A",
        fontSize: "14px",
        fontWeight: 400,
        width: "170px",
        borderRadius: "31px",
        textTransform: "none",
        position: "relative",
        ...sx,
        "&:hover": {
          backgroundColor: "#fff",
        },
        "&:disabled": {
          opacity: 0.5,
          color: "#fff",
        },
        "@media (max-width: 576px)": {
          fontSize: "12px",
        },
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default SecondaryButtonTwo;
