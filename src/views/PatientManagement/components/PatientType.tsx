import SecondaryLayout from "../../../components/Layout/SecondaryLayout";
import { UdencycaGreen, StepOneGreen } from "../../../assets/images";
import { Box } from "@mui/material";
import Paragraph from "../../../components/Paragraph";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";

const titleStyle = {
  color: "#00739A",
  fontWeight: "bold",
  fontSize: "18px",
  width: "150px",
};

const textStyle = {
  color: "#6D7278",
  fontSize: "18px",
};

const wraperStyle = {
  display: "flex",
  gap: "5px",
  marginBottom: "7px",
};

const PatientType = () => {
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
          margin: "100px 150px 50px",
          "@media (max-width: 992px)": {
            margin: "20px",
          },
        }}
      >
        <Box
          sx={{
            border: "1px solid #979797",
            padding: "15px 20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Paragraph
              sx={{
                fontSize: "28px",
                margin: "0 120px",
                color: "#00739A",
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
            >
              <IoCloseCircleOutline />
            </Box>
          </Box>

          <Box
            sx={{
              margin: "20px 0 0  55px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "20px",
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
                }}
              >
                <Box
                  sx={{
                    width: "50%",
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
            }}
          >
            salman
          </Box>
        </Box>
      </Box>
    </SecondaryLayout>
  );
};

export default PatientType;
