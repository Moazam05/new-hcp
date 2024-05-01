import { Button } from "@mui/material";

interface PrimaryButtonTwoProps {
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
  children?: React.ReactNode;
}

const PrimaryButtonTwo: React.FC<PrimaryButtonTwoProps> = (props) => {
  const { onClick, type, disabled, children } = props;

  return (
    <>
      <Button
        type={type || "button"}
        sx={{
          backgroundColor: "#00739A",
          color: "#fff",
          fontSize: "14px",
          fontWeight: 400,
          width: "170px",
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
            fontSize: "12px",
          },
        }}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </Button>
    </>
  );
};

export default PrimaryButtonTwo;
