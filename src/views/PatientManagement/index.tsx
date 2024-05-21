import SecondaryLayout from "../../components/Layout/SecondaryLayout";
import { Box } from "@mui/material";
import { PracticeIcon, SearchIcon, Enroll, Patient } from "../../assets/images";
import Paragraph from "../../components/Paragraph";
import PrimaryInput from "../../components/PrimaryInput";
import { useState } from "react";
import Footer from "../../components/Footer";

const styleOne = {
  marginTop: "50px",
  background: "#00739A",
  padding: "15px 50px 15px 50px",
  borderTopLeftRadius: "38px",
  borderBottomRightRadius: "38px",
  display: "flex",
  alignItems: "center",
  gap: "45px",
  width: "610px",
  cursor: "pointer",
  "@media (max-width: 576px)": {
    width: "100%",
    gap: "10px",
    marginTop: "40px",
  },
};

const PatientManagement = () => {
  const [search, setSearch] = useState("");

  return (
    <SecondaryLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          margin: "100px 150px 50px",
          "@media (max-width: 992px)": {
            margin: "20px",
          },
        }}
      >
        <Box
          sx={{
            border: "2px solid #00739A",
            display: "flex",
            alignItems: "center",
            gap: "45px",
            padding: "0px 50px 5px 50px",
            borderTopLeftRadius: "38px",
            borderBottomRightRadius: "38px",
            "@media (max-width: 576px)": {
              width: "100%",
              gap: "10px",
            },
          }}
        >
          <Box
            sx={{
              "@media (max-width: 576px)": {
                width: "40px",
                height: "40px",
              },
            }}
          >
            <img
              src={SearchIcon}
              alt="icon"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <Paragraph
              sx={{
                fontSize: "32px",
                color: "#00739A",
                marginTop: "15px",
                "@media (max-width: 576px)": {
                  fontSize: "18px",
                },
              }}
            >
              Search
            </Paragraph>
            <PrimaryInput
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              blueField={true}
              sx={{
                width: "300px",
                "@media (max-width: 576px)": {
                  width: "unset",
                },
              }}
            />
          </Box>
        </Box>
        <Box sx={styleOne}>
          <Box
            sx={{
              "@media (max-width: 576px)": {
                width: "35px",
                height: "35px",
              },
            }}
          >
            <img
              src={Patient}
              alt="icon"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
          <Paragraph
            sx={{
              fontSize: "32px",
              color: "#fff",
              "@media (max-width: 576px)": {
                fontSize: "18px",
              },
            }}
          >
            Patient Management
          </Paragraph>
        </Box>
        <Box sx={styleOne}>
          <Box
            sx={{
              "@media (max-width: 576px)": {
                width: "35px",
                height: "35px",
              },
            }}
          >
            <img
              src={Enroll}
              alt="icon"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
          <Paragraph
            sx={{
              fontSize: "32px",
              color: "#fff",
              "@media (max-width: 576px)": {
                fontSize: "18px",
              },
            }}
          >
            Enroll a Patient
          </Paragraph>
        </Box>

        <Box
          sx={{
            ...styleOne,
            marginBottom: "50px",
            "@media (max-width: 576px)": {
              marginBottom: "20px",
              width: "100%",
              gap: "10px",
              marginTop: "40px",
            },
          }}
        >
          <Box
            sx={{
              "@media (max-width: 576px)": {
                width: "35px",
                height: "35px",
              },
            }}
          >
            <img
              src={PracticeIcon}
              alt="icon"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
          <Paragraph
            sx={{
              fontSize: "32px",
              color: "#fff",
              "@media (max-width: 576px)": {
                fontSize: "18px",
              },
            }}
          >
            Practice Management
          </Paragraph>
        </Box>
      </Box>

      <Footer />
    </SecondaryLayout>
  );
};

export default PatientManagement;
