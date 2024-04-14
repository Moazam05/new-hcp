// MUI Import
import { Box } from "@mui/material";
// Constant
import constants from "../../../constants";
// Custom
import CustomModal from "../../../components/CustomModal";

const AccountInvalidateModal = () => {
  return (
    <Box>
      <CustomModal
        open={true}
        sx={{
          width: 675,
          padding: "75px 148px",
          border: "2px solid #979797",
          "@media (max-width: 576px)": {
            padding: "19px",
            width: "90%",
          },
        }}
      >
        <Box
          sx={{
            fontSize: "18px",
            fontWeight: 600,
            color: "#414042",
            marginBottom: "12px",
            textAlign: "center",
            "@media (max-width: 576px)": {
              marginBottom: "0",
            },
          }}
        >
          <h3>{constants.ACCOUNT_INVALIDATE_MODAL_TITLE}</h3>
        </Box>
        <Box
          sx={{
            fontSize: "16px",
            color: "#414042",
            textAlign: "center",
            marginTop: "20px",
            "@media (max-width: 576px)": {
              fontSize: "14px",
            },
          }}
        >
          <p>
            {constants.ACCOUNT_INVALIDATE_MODAL_PARAGRAPH_ONE}

            <span className="invalidate-para">
              {constants.ACCOUNT_INVALIDATE_MODAL_PARAGRAPH_TWO}
            </span>
            <span>
              <a
                href="tel:{constants.CONTACT_US_TEL}"
                className="in-modal-contact"
              >
                {constants.CONTACT_US_TEL}
              </a>
            </span>
            <span className="invalidate-para">
              {constants.ACCOUNT_INVALIDATE_MODAL_PARAGRAPH_THREE}
            </span>
          </p>
          <Box
            sx={{
              marginTop: "25px",
              "@media (max-width: 576px)": {
                marginTop: "10px",
              },
            }}
          >
            {constants.ACCOUNT_INVALIDATE_MODAL_PARAGRAPH_FOUR}
          </Box>
        </Box>
      </CustomModal>
    </Box>
  );
};

export default AccountInvalidateModal;
