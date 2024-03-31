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
}

const CustomModal = ({ children, open }: CustomModalProps) => {
  return (
    <Box>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </Box>
  );
};

export default CustomModal;
