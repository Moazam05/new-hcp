import { Box, Button } from "@mui/material";
import { ButtonArrow } from "../../assets/images";

interface PrimaryButtonProps {
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
  label?: string;
}

const PrimaryButton = ({ onClick, type, label }: PrimaryButtonProps) => {
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
        }}
        onClick={onClick}
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
