import { Box, Button } from "@mui/material";
import { ButtonArrow } from "../../assets/images";
import React from "react";

interface PrimaryButtonProps {
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
  label?: string;
  disabled?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  const { onClick, type, label, disabled } = props;

  return (
    <>
      <Button
        type={type || "button"}
        sx={{
          backgroundColor: "#00739A",
          color: "#fff",
          fontSize: "20px",
          fontWeight: 600,
          padding: "7px 40px",
          borderRadius: "31px",
          position: "relative",
          "&:hover": {
            backgroundColor: "#00739A",
          },
          "&:disabled": {
            opacity: 0.5,
            color: "#fff",
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
        {label || "Continue"}
      </Button>
    </>
  );
};

export default PrimaryButton;
