// React Imports
import React from "react";
// Styles
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
