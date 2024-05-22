import { Box } from "@mui/material";
import SecondaryLayout from "../../../components/Layout/SecondaryLayout";
import {
  UdencycaGreen,
  StepOneGreen,
  SearchIcon,
} from "../../../assets/images";
import PrimaryInput from "../../../components/PrimaryInput";
import { useState } from "react";
import Paragraph from "../../../components/Paragraph";
import { useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer";

const patientList = [
  {
    name: "Jones, Tom",
    dob: "01/01/1990",
    patientID: "123456",
  },
  {
    name: "Smith, John",
    dob: "02/02/1991",
    patientID: "123457",
  },
  {
    name: "Doe, Jane",
    dob: "03/03/1992",
    patientID: "123458",
  },
  {
    name: "Johnson, Mary",
    dob: "04/04/1993",
    patientID: "123459",
  },
];

const Patient = () => {
  const navigate = useNavigate();

  const [patient, setPatient] = useState("");

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
        <h1>Choose a patient for services</h1>

        <Box
          sx={{
            margin: "35px 200px 35px 0",
            display: "flex",
            gap: "10px",
            "@media (max-width: 576px)": {
              gap: "10px",
              margin: "20px 0",
            },
          }}
        >
          <Box
            sx={{
              height: "fit-content",
            }}
          >
            <img src={SearchIcon} alt="step" />
          </Box>
          <Box
            sx={{
              width: "420px",
              "@media (max-width: 576px)": {
                width: "unset",
              },
            }}
          >
            <Box>
              <PrimaryInput
                placeholder="Last Name, Date of Birth"
                value={patient}
                onChange={(e) => setPatient(e.target.value)}
              />
              {patient === "Jones" && (
                <Box
                  sx={{
                    border: "1px solid #E5E5E5",
                    width: "420px",
                    boxShadow: "inset 0px 0px 5px rgba(0,0,0,0.35)",
                    "@media (max-width: 576px)": {
                      width: "unset",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                      }}
                    >
                      <Paragraph
                        sx={{
                          flex: 1,
                          padding: "10px 10px 0",
                          color: "#00739A",
                          fontSize: "16px",
                          borderRight: "1px solid #707070",
                        }}
                      >
                        Last Name, First Name
                      </Paragraph>
                      <Paragraph
                        sx={{
                          flex: 1,
                          padding: "10px 10px 0",
                          color: "#00739A",
                          fontSize: "16px",
                          borderRight: "1px solid #707070",
                        }}
                      >
                        Date of Birth
                      </Paragraph>
                      <Paragraph
                        sx={{
                          flex: 1,
                          padding: "10px 10px 0",
                          color: "#00739A",
                          fontSize: "16px",
                        }}
                      >
                        Patient ID
                      </Paragraph>
                    </Box>
                    {patientList.map((patient, index) => {
                      const isOdd = index % 2 === 0;

                      return (
                        <Box
                          key={index}
                          sx={{
                            display: "flex",
                            cursor: "pointer",
                            backgroundColor: isOdd ? "#E8E8E8" : "transparent",
                            "&:hover": {
                              backgroundColor: "#FFFFAB",
                            },
                          }}
                          onClick={() => {
                            navigate(
                              `/patient-management/enroll-patient/patient/${patient.patientID}`
                            );
                          }}
                        >
                          <Paragraph
                            sx={{
                              flex: 1,
                              padding: "10px",
                              color: "#000000",
                              fontSize: "15px",
                              borderRight: "1px solid #707070",
                            }}
                          >
                            {patient.name}
                          </Paragraph>
                          <Paragraph
                            sx={{
                              flex: 1,
                              padding: "10px",
                              color: "#000000",
                              fontSize: "15px",
                              borderRight: "1px solid #707070",
                            }}
                          >
                            {patient.dob}
                          </Paragraph>
                          <Paragraph
                            sx={{
                              flex: 1,
                              padding: "10px",
                              color: "#000000",
                            }}
                          >
                            {patient.patientID}
                          </Paragraph>
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          marginTop: patient === "Jones" ? "0" : "200px",
        }}
      >
        <Footer />
      </Box>
    </SecondaryLayout>
  );
};

export default Patient;
