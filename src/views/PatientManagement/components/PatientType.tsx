import SecondaryLayout from "../../../components/Layout/SecondaryLayout";
import { UdencycaGreen, StepOneGreen } from "../../../assets/images";
import { Box } from "@mui/material";
import Paragraph from "../../../components/Paragraph";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import Footer from "../../../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import PrimaryButton from "../../../components/PrimaryButton";
import SecondaryButton from "../../../components/SecondaryButton";

const titleStyle = {
  color: "#00739A",
  fontWeight: "bold",
  fontSize: "18px",
  width: "150px",
  "@media (max-width: 576px)": {
    width: "100px",
  },
};

const textStyle = {
  color: "#6D7278",
  fontSize: "18px",
};

const wraperStyle = {
  display: "flex",
  gap: "5px",
  marginBottom: "7px",
  "@media (max-width: 576px)": {
    flexDirection: "column",
    gap: "0px",
  },
};

const PatientType = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const patientType = location.pathname?.split("/")[3];

  return (
    <SecondaryLayout>
      <Box
        sx={{
          margin: "20px 80px",
          display: "flex",
          justifyContent: "space-between",
          "@media (max-width: 576px)": {
            flexDirection: "column",
            gap: "20px",
            alignItems: "center",
            margin: "0 20px 20px",
          },
        }}
      >
        <img src={UdencycaGreen} alt="step" />
        <img src={StepOneGreen} alt="step" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          margin: "100px 150px 100px",
          "@media (max-width: 992px)": {
            margin: "20px",
          },
        }}
      >
        <Box
          sx={{
            border: "1px solid #979797",
            padding: "15px 0 0 0",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 20px",
            }}
          >
            <Paragraph
              sx={{
                fontSize: "28px",
                margin: "0 120px",
                color: "#00739A",
                "@media (max-width: 576px)": {
                  margin: "0 0px",
                },
              }}
            >
              Please confirm this patient is correct and hit continue
            </Paragraph>
            <Box
              sx={{
                cursor: "pointer",
                color: "#00739A",
                fontSize: "30px",
                width: "30px",
                height: "30px",
              }}
              onClick={() =>
                navigate(`/patient-management/enroll-patient/${patientType}`)
              }
            >
              <IoCloseCircleOutline />
            </Box>
          </Box>

          <Box
            sx={{
              margin: "20px 0 0  55px",
              padding: "15px 20px 0 20px",
              "@media (max-width: 576px)": {
                margin: "20px",
                padding: "0px",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                "@media (max-width: 576px)": {
                  flexDirection: "column",
                },
              }}
            >
              <Box
                sx={{
                  color: "#00739A",
                  fontSize: "45px",
                  width: "45px",
                  height: "45px",
                }}
              >
                <FaRegCircleUser />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  "@media (max-width: 576px)": {
                    flexDirection: "column",
                    gap: "20px",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "50%",
                    "@media (max-width: 576px)": {
                      width: "100%",
                    },
                  }}
                >
                  <Box sx={wraperStyle}>
                    <Paragraph sx={titleStyle}>Name:</Paragraph>
                    <Paragraph sx={textStyle}>Jones, Tom</Paragraph>
                  </Box>

                  <Box sx={wraperStyle}>
                    <Paragraph sx={titleStyle}>Title:</Paragraph>
                    <Paragraph sx={textStyle}>xx</Paragraph>
                  </Box>

                  <Box sx={wraperStyle}>
                    <Paragraph sx={titleStyle}>Gender:</Paragraph>
                    <Paragraph sx={textStyle}>Male</Paragraph>
                  </Box>

                  <Box sx={wraperStyle}>
                    <Paragraph sx={titleStyle}>Preferred Phone:</Paragraph>
                    <Paragraph sx={textStyle}>(321) 231-3456</Paragraph>
                  </Box>

                  <Box sx={wraperStyle}>
                    <Paragraph sx={titleStyle}>Alternate Phone:</Paragraph>
                    <Paragraph sx={textStyle}>(321) 231-3456</Paragraph>
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "50%",
                    "@media (max-width: 576px)": {
                      width: "100%",
                    },
                  }}
                >
                  <Box sx={wraperStyle}>
                    <Paragraph sx={titleStyle}>DOB:</Paragraph>
                    <Paragraph sx={textStyle}>07/12/1966</Paragraph>
                  </Box>

                  <Box sx={wraperStyle}>
                    <Paragraph sx={titleStyle}>Suffix:</Paragraph>
                    <Paragraph sx={textStyle}>xx</Paragraph>
                  </Box>

                  <Box sx={wraperStyle}>
                    <Paragraph sx={titleStyle}>Email Address:</Paragraph>
                    <Paragraph sx={textStyle}>0TJones@aol.com</Paragraph>
                  </Box>

                  <Box sx={wraperStyle}>
                    <Paragraph sx={titleStyle}>Home Address:</Paragraph>
                    <Paragraph sx={textStyle}>
                      4500 Pine Street, Austin, TX 78701
                    </Paragraph>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "#F3F3F3",
              borderTop: "1px solid #979797",
              height: "65px",
              marginTop: "40px",
              "@media (max-width: 576px)": {
                height: "50px",
              },
            }}
          ></Box>
        </Box>

        <Box
          sx={{
            marginTop: "50px",
            "@media (max-width: 576px)": {
              marginTop: "30px",
            },
          }}
        >
          <PrimaryButton
          //   onClick={() => navigate("/registration")}
          >
            CONTINUE
          </PrimaryButton>
        </Box>

        <Box sx={{ margin: "15px 0 30px" }}>
          <SecondaryButton
            onClick={() =>
              navigate(`/patient-management/enroll-patient/${patientType}`)
            }
          />
        </Box>
      </Box>
      <Footer />
    </SecondaryLayout>
  );
};

export default PatientType;
