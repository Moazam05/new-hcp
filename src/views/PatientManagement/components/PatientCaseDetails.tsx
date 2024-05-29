import { Box, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import SecondaryLayout from "../../../components/Layout/SecondaryLayout";
import { useState } from "react";
import { SearchIcon, UdencycaGreen } from "../../../assets/images";
import Paragraph from "../../../components/Paragraph";
import PrimaryInput from "../../../components/PrimaryInput";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";

const titleStyle = {
  color: "#00739A",
  fontWeight: "bold",
  fontSize: "18px",
  width: "150px",
  "@media (max-width: 576px)": {
    width: "100px",
  },
};

const titleStyleTwo = {
  color: "#00739A",
  fontWeight: "bold",
  fontSize: "18px",

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

const PatientCaseDetails = () => {
  const navigate = useNavigate();
  const { caseId } = useParams();
  console.log("caseId", caseId);

  const [search, setSearch] = useState("");

  return (
    <SecondaryLayout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          margin: "50px 150px",
          "@media (max-width: 576px)": {
            margin: "0 20px",
          },
        }}
      >
        <Box
          sx={{
            width: "35%",
            "@media (max-width: 576px)": {
              width: "100%",
            },
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
          margin: "40px 150px 20px 150px",
          "@media (max-width: 576px)": {
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            margin: "30px 20px",
            gap: "20px",
          },
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
                "@media (max-width: 576px)": {
                  fontSize: "20px",
                },
              }}
            >
              Patient Profile:
            </Paragraph>
            <Paragraph
              sx={{
                color: "#B12029",
                fontSize: "36px",
                "@media (max-width: 576px)": {
                  fontSize: "20px",
                },
              }}
            >
              Jane Doe
            </Paragraph>
          </Box>
        </Box>
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

      <Box
        sx={{
          background: "#F2F8FA",
          padding: "35px 100px",
          margin: "0px 50px 50px",
          "@media (max-width: 576px)": {
            margin: "20px",
            padding: "20px",
          },
        }}
      >
        <Box>
          <Paragraph
            sx={{
              fontSize: "22px",
              marginBottom: "20px",
              "@media (max-width: 576px)": {
                fontSize: "20px",
                margin: "20p 0x",
              },
            }}
          >
            Personal Information
          </Paragraph>
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
                  gap: "0px",
                },
              }}
            >
              <Box
                sx={{
                  width: "30%",
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
                  width: "70%",
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
      </Box>

      <Box
        sx={{
          margin: "40px 150px 20px 150px",
          "@media (max-width: 576px)": {
            margin: "0 20px",
          },
        }}
      >
        <Paragraph
          sx={{
            fontSize: "22px",
            marginBottom: "20px",
            fontWeight: "bold",
            marginLeft: "50px",
            "@media (max-width: 576px)": {
              marginLeft: "0",
              fontSize: "20px",
            },
          }}
        >
          Insurance
        </Paragraph>
        <Box
          sx={{
            background: "#fff",
            padding: "20px 40px",
            borderRadius: "14px",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px;",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "20px",
            "@media (max-width: 576px)": {
              padding: "20px",
            },
          }}
        >
          <Paragraph
            sx={{
              color: "#00739A",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Medical Insurance
          </Paragraph>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <Paragraph>Most Recent Benefit Verification Completed</Paragraph>
            <Paragraph>03.12.24</Paragraph>
          </Box>
          <Box
            sx={{
              color: "#B12029",
              fontSize: "30px",
              width: "30px",
              height: "30px",
            }}
          >
            <IoIosArrowDropupCircle />
          </Box>
        </Box>
        <Box
          sx={{
            background: "#fff",
            padding: "20px 40px",
            borderRadius: "14px",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px;",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            "@media (max-width: 576px)": {
              padding: "20px",
            },
          }}
        >
          <Paragraph
            sx={{
              color: "#00739A",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Pharmacy Insurance
          </Paragraph>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <Paragraph>Most Recent Benefit Verification Completed</Paragraph>
            <Paragraph>03.12.24</Paragraph>
          </Box>
          <Box
            sx={{
              color: "#B12029",
              fontSize: "30px",
              width: "30px",
              height: "30px",
            }}
          >
            <IoIosArrowDropupCircle />
          </Box>
        </Box>
      </Box>
      {/* 5th */}

      <Box
        sx={{
          margin: "50px 200px 0 200px",
          "@media (max-width: 576px)": {
            margin: "0 20px",
          },
        }}
      >
        <Paragraph
          sx={{
            fontSize: "22px",
            marginBottom: "20px",
            fontWeight: "bold",
            "@media (max-width: 576px)": {
              fontSize: "20px",
              margin: "20px 0",
            },
          }}
        >
          Co-Pay Information
        </Paragraph>
      </Box>
      <Box
        sx={{
          background: "#F2F8FA",
          padding: "35px 100px",
          margin: "0px 50px 50px",
          "@media (max-width: 576px)": {
            margin: "0 20px 50px 20px",
            padding: "20px 20px",
          },
        }}
      >
        <Box>
          <Paragraph
            sx={{
              fontSize: "22px",
              marginBottom: "20px",
              color: "#00739A",
              "@media (max-width: 576px)": {
                fontSize: "20px",
                marginBottom: "10px",
              },
            }}
          >
            UDENYCA
          </Paragraph>
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
                display: "flex",
                width: "100%",
                gap: "100px",
                "@media (max-width: 576px)": {
                  flexDirection: "column",
                  gap: "0px",
                },
              }}
            >
              <Box
                sx={{
                  width: "60%",
                  "@media (max-width: 576px)": {
                    width: "100%",
                  },
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
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    Medical/Pharmacy Co-Pay
                  </Paragraph>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <Paragraph sx={{ fontSize: "24px", fontWeight: "bold" }}>
                      Status:
                    </Paragraph>

                    <Paragraph
                      sx={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        color: "#3DA715",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      Active{" "}
                      <FaRegCheckCircle
                        style={{
                          fontSize: "24px",
                          width: "24px",
                          height: "24px",
                        }}
                      />
                    </Paragraph>
                  </Box>
                </Box>

                <Box
                  sx={{
                    background: "#fff",
                    padding: "20px 40px",
                    borderRadius: "14px",
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px;",
                    margin: "20px 0",
                    "@media (max-width: 576px)": {
                      padding: "20px",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: "300px",
                      height: "auto",
                      "@media (max-width: 576px)": {
                        width: "200px",
                        height: "auto",
                      },
                    }}
                  >
                    <img
                      src={UdencycaGreen}
                      alt="ll"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      margin: "20px 0",
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "50px",
                      "@media (max-width: 576px)": {
                        gap: "20px",
                      },
                    }}
                  >
                    <Box>
                      <Box sx={wraperStyle}>
                        <Paragraph sx={titleStyleTwo}>Name:</Paragraph>
                        <Paragraph sx={textStyle}>Jones, Tom</Paragraph>
                      </Box>
                      <Box sx={wraperStyle}>
                        <Paragraph sx={titleStyleTwo}>Title:</Paragraph>
                        <Paragraph sx={textStyle}>xx</Paragraph>
                      </Box>
                    </Box>
                    <Box>
                      <Box sx={wraperStyle}>
                        <Paragraph sx={titleStyleTwo}>Gender:</Paragraph>
                        <Paragraph sx={textStyle}>Male</Paragraph>
                      </Box>
                      <Box sx={wraperStyle}>
                        <Paragraph sx={titleStyleTwo}>
                          Preferred Phone:
                        </Paragraph>
                        <Paragraph sx={textStyle}>(321) 231-3456</Paragraph>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    margin: "50px 0 0px 0",
                    "@media (max-width: 576px)": {
                      margin: "20px 0",
                    },
                  }}
                >
                  <Paragraph
                    sx={{
                      color: "#B12029",
                      fontSize: "24px",
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      "@media (max-width: 576px)": {
                        fontSize: "16px",
                      },
                    }}
                  >
                    Processing Instructions Medical
                    <IoIosAddCircleOutline
                      style={{
                        fontSize: "24px",
                        width: "24px",
                        height: "24px",
                      }}
                    />
                  </Paragraph>
                </Box>
                <Box
                  sx={{
                    margin: "30px 0 0px 0",
                    "@media (max-width: 576px)": {
                      margin: "20px 0",
                    },
                  }}
                >
                  <Paragraph
                    sx={{
                      color: "#B12029",
                      fontSize: "24px",
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      "@media (max-width: 576px)": {
                        fontSize: "16px",
                      },
                    }}
                  >
                    Processing Instructions Medical
                    <IoIosAddCircleOutline
                      style={{
                        fontSize: "24px",
                        width: "24px",
                        height: "24px",
                      }}
                    />
                  </Paragraph>
                </Box>
              </Box>
              <Box
                sx={{
                  width: "40%",
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
      </Box>
    </SecondaryLayout>
  );
};

export default PatientCaseDetails;
