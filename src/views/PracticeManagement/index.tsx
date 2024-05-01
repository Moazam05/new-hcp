import { useState } from "react";
import SecondaryLayout from "../../components/Layout/SecondaryLayout";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Box } from "@mui/material";
import { Site, NewUser, Doctor } from "../../assets/images";

const PracticeManagement = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  return (
    <Box
      sx={{
        backgroundColor: open ? "rgb(0, 0, 0,.3)" : "transparent",
        height: "100vh",
      }}
    >
      <SecondaryLayout
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        open={open}
      >
        <Navbar />
        <Box
          sx={{
            margin: "100px 150px 50px",
            "@media (max-width: 576px)": {
              margin: "20px",
            },
          }}
        >
          <Box
            sx={{
              fontSize: "36px",
              color: "#00739A",
              display: "flex",
              justifyContent: "center",
              "@media (max-width: 576px)": {
                fontSize: "18px",
              },
            }}
          >
            <h2>Click below to manage and add to your practice.</h2>
          </Box>

          <Box
            sx={{
              //   display: "flex",
              //   justifyContent: "space-between",
              marginTop: "45px",
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Box
                  sx={{
                    width: "105px",
                    display: "flex",
                    alignItems: "end",
                  }}
                >
                  <img src={NewUser} alt="new-user" />
                </Box>

                <Box
                  sx={{
                    marginLeft: "20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "150px",
                  }}
                >
                  <Box
                    sx={{
                      fontSize: "23px",
                      fontWeight: 700,
                      color: "#40AE49",
                    }}
                  >
                    <p>Active</p>
                  </Box>
                  <Box
                    sx={{
                      fontSize: "50px",
                      fontWeight: 700,
                    }}
                  >
                    <p>23</p>
                  </Box>
                  <Box
                    sx={{
                      fontSize: "36px",
                    }}
                  >
                    <p>Users</p>
                  </Box>
                </Box>

                <Box
                  sx={{
                    marginLeft: "15px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      fontSize: "23px",
                      fontWeight: 700,
                      color: "#FF0000",
                    }}
                  >
                    <p>Deactivated</p>
                  </Box>
                  <Box
                    sx={{
                      fontSize: "50px",
                      fontWeight: 700,
                    }}
                  >
                    <p>5</p>
                  </Box>
                  <Box
                    sx={{
                      fontSize: "36px",
                    }}
                  >
                    <p>Users</p>
                  </Box>
                </Box>
                {/* 1st A */}
              </Box>
              {/* 1st A */}
              <Box
                sx={{
                  marginLeft: "90px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Box
                    sx={{
                      width: "105px",
                      display: "flex",
                      alignItems: "end",
                    }}
                  >
                    <img src={NewUser} alt="new-user" />
                  </Box>

                  <Box
                    sx={{
                      marginLeft: "20px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: "150px",
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: "23px",
                        fontWeight: 700,
                        color: "#40AE49",
                      }}
                    >
                      <p>Active</p>
                    </Box>
                    <Box
                      sx={{
                        fontSize: "50px",
                        fontWeight: 700,
                      }}
                    >
                      <p>1</p>
                    </Box>
                    <Box
                      sx={{
                        fontSize: "36px",
                      }}
                    >
                      <p>Admin</p>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      marginLeft: "15px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: "23px",
                        fontWeight: 700,
                        color: "#FF0000",
                      }}
                    >
                      <p>Deactivated</p>
                    </Box>
                    <Box
                      sx={{
                        fontSize: "50px",
                        fontWeight: 700,
                      }}
                    >
                      <p>1</p>
                    </Box>
                    <Box
                      sx={{
                        fontSize: "36px",
                      }}
                    >
                      <p>Admin</p>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            {/* 2nd */}
            <Box
              sx={{
                display: "flex",
                marginTop: "50px",
              }}
            >
              <Box
                sx={{
                  width: "105px",
                  display: "flex",
                  alignItems: "end",
                }}
              >
                <img src={Doctor} alt="doctor" />
              </Box>
              <Box
                sx={{
                  marginLeft: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "150px",
                }}
              >
                <Box
                  sx={{
                    fontSize: "23px",
                    fontWeight: 700,
                    color: "#40AE49",
                  }}
                >
                  <p>Active</p>
                </Box>
                <Box
                  sx={{
                    fontSize: "50px",
                    fontWeight: 700,
                  }}
                >
                  <p>7</p>
                </Box>
                <Box
                  sx={{
                    fontSize: "36px",
                  }}
                >
                  <p>Providers</p>
                </Box>
              </Box>
              <Box
                sx={{
                  marginLeft: "15px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    fontSize: "23px",
                    fontWeight: 700,
                    color: "#FF0000",
                  }}
                >
                  <p>Deactivated</p>
                </Box>
                <Box
                  sx={{
                    fontSize: "50px",
                    fontWeight: 700,
                  }}
                >
                  <p>7</p>
                </Box>
                <Box
                  sx={{
                    fontSize: "36px",
                  }}
                >
                  <p>Providers</p>
                </Box>
              </Box>
            </Box>
            {/* 3rd */}
            <Box
              sx={{
                display: "flex",
                marginTop: "50px",
              }}
            >
              <Box
                sx={{
                  width: "105px",
                  display: "flex",
                  alignItems: "end",
                }}
              >
                <img src={Site} alt="site" />
              </Box>
              <Box
                sx={{
                  marginLeft: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "150px",
                }}
              >
                <Box
                  sx={{
                    fontSize: "23px",
                    fontWeight: 700,
                    color: "#40AE49",
                  }}
                >
                  <p>Active</p>
                </Box>
                <Box
                  sx={{
                    fontSize: "50px",
                    fontWeight: 700,
                  }}
                >
                  <p>4</p>
                </Box>
                <Box
                  sx={{
                    fontSize: "36px",
                  }}
                >
                  <p>Sites</p>
                </Box>
              </Box>
              <Box
                sx={{
                  marginLeft: "15px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    fontSize: "23px",
                    fontWeight: 700,
                    color: "#FF0000",
                  }}
                >
                  <p>Deactivated</p>
                </Box>
                <Box
                  sx={{
                    fontSize: "50px",
                    fontWeight: 700,
                  }}
                >
                  <p>5</p>
                </Box>
                <Box
                  sx={{
                    fontSize: "36px",
                  }}
                >
                  <p>Sites</p>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Footer />
      </SecondaryLayout>
    </Box>
  );
};

export default PracticeManagement;
