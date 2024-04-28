import React from "react";
import "./SecondaryButton.css";

interface SecondaryButtonProps {
  onClick?: () => void;
  label?: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = (props) => {
  const { onClick, label } = props;

  return (
    <>
      <button className="secondary-button" onClick={onClick}>
        {label || "Cancel"}
      </button>
    </>
  );
};

export default SecondaryButton;
