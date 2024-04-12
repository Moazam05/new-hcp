// React Imports
import React from "react";
// MUI
import { Box, Button } from "@mui/material";
// Assets
import { ButtonArrow } from "../../assets/images";

interface PrimaryButtonProps {
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
  label?: string;
  disabled?: boolean;
  padding?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  const { onClick, type, label, disabled, padding } = props;

  return (
    <>
      <Button
        type={type || "button"}
        sx={{
          backgroundColor: "#00739A",
          color: "#fff",
          fontSize: "20px",
          fontWeight: 400,
          padding: padding || "7px 40px",
          borderRadius: "31px",
          textTransform: "none",
          position: "relative",
          "&:hover": {
            backgroundColor: "#00739A",
          },
          "&:disabled": {
            opacity: 0.5,
            color: "#fff",
          },
          "@media (max-width: 576px)": {
            fontSize: "16px",
          },
        }}
        onClick={onClick}
        disabled={disabled}
      >
        <Box
          sx={{
            position: "absolute",
            left: "0px",
          }}
        >
          <img src={ButtonArrow} alt="button-arrow" />
        </Box>
        {label || "CONTINUE"}
      </Button>
    </>
  );
};

export default PrimaryButton;
