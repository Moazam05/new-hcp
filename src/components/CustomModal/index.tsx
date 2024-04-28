// React Imports
import React from "react";
// MUI Imports
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 480,
  bgcolor: "background.paper",
  boxShadow: 24,
  outline: "none",
  "@media (max-width: 576px)": {
    width: "90%",
  },
};

interface CustomModalProps {
  children: React.ReactNode;
  open: boolean;
  sx?: object;
}

const CustomModal = ({ children, open, sx }: CustomModalProps) => {
  return (
    <Box>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, ...sx }}>{children}</Box>
      </Modal>
    </Box>
  );
};

export default CustomModal;
