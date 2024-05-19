import { Box } from "@mui/material";
import SecondaryLayout from "../../../components/Layout/SecondaryLayout";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import TwoFactorModal from "./TwoFactorModal";
import { useState } from "react";

const MySetting = () => {
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <SecondaryLayout>
      <Box
        sx={{
          margin: "50px 200px 50px",
          "@media (max-width: 576px)": {
            margin: "20px",
          },
        }}
      >
        <Box
          sx={{
            marginBottom: "18px",
            color: "#414042",
            display: "flex",
            flexDirection: "column",
            marginLeft: "120px",
            "@media (max-width: 576px)": {
              fontSize: "18px",
              marginBottom: "0px",
              marginLeft: "0px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => navigate("/practice-management")}
          >
            <Box
              sx={{
                color: "#B12029",
                fontSize: "30px",
                width: "21px",
                height: "28px",
              }}
            >
              <MdKeyboardArrowLeft />
            </Box>

            <Box
              sx={{
                fontSize: "36px",
                fontWeight: 300,
                "@media (max-width: 576px)": {
                  fontSize: "22px",
                },
              }}
            >
              <p>My Settings</p>
            </Box>
          </Box>

          <Box
            sx={{
              margin: "70px 0 20px 0",
              "@media (max-width: 576px)": {
                margin: "20px 0",
              },
            }}
          >
            <h1>Manage your account</h1>
          </Box>

          <Box
            sx={{
              color: "#00ACD7",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            <h4>Change your password</h4>
          </Box>
          <Box
            sx={{
              color: "#00ACD7",
              margin: "20px 0",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            <h4>Manage User Profile</h4>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              cursor: "pointer",
              "@media (max-width: 576px)": {
                gap: "3px",
                marginBottom: "15px",
              },
            }}
            onClick={() => setModalOpen(true)}
          >
            <Box
              sx={{
                color: "#414042",
                fontSize: "24px",
                fontWeight: 700,
                "@media (max-width: 576px)": {
                  fontSize: "17px",
                },
              }}
            >
              <h4>2-Factor Authentication Enabled: </h4>
            </Box>
            <Box
              sx={{
                color: "#00ACD7",
                fontSize: "24px",
                fontWeight: 700,
                "@media (max-width: 576px)": {
                  fontSize: "17px",
                },
              }}
            >
              <h4>[Manage]</h4>
            </Box>
          </Box>
        </Box>
      </Box>

      <TwoFactorModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </SecondaryLayout>
  );
};

export default MySetting;
