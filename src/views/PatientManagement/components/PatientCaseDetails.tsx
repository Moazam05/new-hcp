import { Box, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import SecondaryLayout from "../../../components/Layout/SecondaryLayout";
import { useState } from "react";
import { SearchIcon } from "../../../assets/images";
import Paragraph from "../../../components/Paragraph";
import PrimaryInput from "../../../components/PrimaryInput";
import { MdKeyboardArrowLeft } from "react-icons/md";

const PatientCaseDetails = () => {
  const navigate = useNavigate();
  const { caseId } = useParams();
  console.log("caseId", caseId);

  const [search, setSearch] = useState("");

  return (
    <SecondaryLayout>
      <Box
        sx={{
          margin: "50px 150px",
          "@media (max-width: 576px)": {
            margin: "0 20px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Box
            sx={{
              width: "35%",
            }}
          >
            <Box
              sx={{
                border: "2px solid #00739A",
                display: "flex",
                alignItems: "center",
                gap: "30px",
                padding: "5px 30px 5px 30px",
                borderTopLeftRadius: "38px",
                borderBottomRightRadius: "38px",
                position: "relative",
                "@media (max-width: 576px)": {
                  width: "100%",
                  gap: "10px",
                  padding: "5px 50px 20px 50px",
                },
              }}
            >
              <Box
                sx={{
                  "@media (max-width: 576px)": {
                    width: "35px",
                    height: "35px",
                    position: "absolute",
                    top: "20px",
                    left: "25px",
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
                  position: "relative",
                }}
              >
                <Paragraph
                  sx={{
                    fontSize: "32px",
                    color: "#00739A",
                    marginTop: "15px",
                    "@media (max-width: 576px)": {
                      fontSize: "17px",
                      position: "absolute",
                      top: "8px",
                      left: "25px",
                      zIndex: 1,
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
                    // width: "300px",
                    "@media (max-width: 576px)": {
                      width: "unset",
                      marginLeft: "85px",
                    },
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "40px 0",
          }}
        >
          <Box
            sx={{
              color: "#414042",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              "@media (max-width: 576px)": {
                fontSize: "18px",
              },
            }}
            onClick={() => navigate("/patient-management/cases")}
          >
            <Box
              sx={{
                color: "#B12029",
                fontSize: "30px",
                width: "30px",
                height: "30px",
              }}
            >
              <MdKeyboardArrowLeft />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <Paragraph
                sx={{
                  fontSize: "36px",
                }}
              >
                Patient Profile:
              </Paragraph>
              <Paragraph
                sx={{
                  color: "#B12029",
                  fontSize: "36px",
                }}
              >
                Jane Doe
              </Paragraph>
            </Box>
          </Box>
          {/* #B12029 */}
          <Button
            sx={{
              backgroundColor: "#B12029",
              color: "#fff",
              fontSize: "16px",
              padding: "10px 20px",
              borderRadius: "50px",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#B12029",
                color: "#fff",
              },
            }}
          >
            Start a Service
          </Button>
        </Box>

        <Box sx={{ background: "#F2F8FA" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi odit
          id autem illum ducimus, illo repellendus optio, aliquam tempora neque
          impedit labore harum alias doloremque ipsam placeat deserunt dolores
          voluptatum!
        </Box>
      </Box>
    </SecondaryLayout>
  );
};

export default PatientCaseDetails;
