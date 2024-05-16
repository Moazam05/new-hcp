// React Imports
import { useNavigate } from "react-router-dom";
// MUI
import { Box } from "@mui/material";
// Assets
import { Site, NewUser, Doctor, World, Upload } from "../../assets/images";
// React Icons
import { FaPlus } from "react-icons/fa6";
// Custom
import Footer from "../../components/Footer";
import PrimaryButtonTwo from "../../components/PrimaryButton/PrimaryButtonTwo";
import SecondaryButtonTwo from "../../components/SecondaryButton/SecondaryButtonTwo";
import SecondaryLayout from "../../components/Layout/SecondaryLayout";

const PracticeManagement = () => {
  const navigate = useNavigate();

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
            fontSize: "36px",
            color: "#00739A",
            display: "flex",
            justifyContent: "center",
            "@media (max-width: 992px)": {
              fontSize: "18px",
              textAlign: "center",
            },
          }}
        >
          <h2>Click below to manage and add to your practice.</h2>
        </Box>

        <Box
          sx={{
            marginTop: "45px",
            "@media (max-width: 992px)": {
              marginTop: "40px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              "@media (max-width: 992px)": {
                justifyContent: "center",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "100%",
                "@media (max-width: 992px)": {
                  flexDirection: "column",
                  width: "unset",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  "@media (max-width: 992px)": {
                    flexDirection: "column",
                  },
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
                      "@media (max-width: 992px)": {
                        width: "50px",
                      },
                    }}
                  >
                    <img
                      src={NewUser}
                      alt="new-user"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      marginLeft: "20px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: "150px",
                      "@media (max-width: 992px)": {
                        width: "unset",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: "23px",
                        fontWeight: 700,
                        color: "#40AE49",
                        "@media (max-width: 992px)": {
                          fontSize: "18px",
                        },
                      }}
                    >
                      <p>Active</p>
                    </Box>
                    <Box
                      sx={{
                        fontSize: "50px",
                        fontWeight: 700,
                        "@media (max-width: 992px)": {
                          fontSize: "22px",
                        },
                      }}
                    >
                      <p>23</p>
                    </Box>
                    <Box
                      sx={{
                        fontSize: "36px",
                        "@media (max-width: 992px)": {
                          fontSize: "18px",
                        },
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
                      width: "150px",
                      "@media (max-width: 992px)": {
                        width: "unset",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: "23px",
                        fontWeight: 700,
                        color: "#FF0000",
                        "@media (max-width: 992px)": {
                          fontSize: "18px",
                        },
                      }}
                    >
                      <p>Deactivated</p>
                    </Box>
                    <Box
                      sx={{
                        fontSize: "50px",
                        fontWeight: 700,
                        "@media (max-width: 992px)": {
                          fontSize: "22px",
                        },
                      }}
                    >
                      <p>5</p>
                    </Box>
                    <Box
                      sx={{
                        fontSize: "36px",
                        "@media (max-width: 992px)": {
                          fontSize: "18px",
                        },
                      }}
                    >
                      <p>Users</p>
                    </Box>
                  </Box>
                </Box>
                {/* 1st A */}
                <Box
                  sx={{
                    marginLeft: "90px",
                    "@media (max-width: 992px)": {
                      marginLeft: "0px",
                      marginTop: "20px",
                    },
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
                        "@media (max-width: 992px)": {
                          width: "50px",
                        },
                      }}
                    >
                      <img
                        src={NewUser}
                        alt="new-user"
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                        }}
                      />
                    </Box>

                    <Box
                      sx={{
                        marginLeft: "20px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "150px",
                        "@media (max-width: 992px)": {
                          width: "unset",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          fontSize: "23px",
                          fontWeight: 700,
                          color: "#40AE49",
                          "@media (max-width: 992px)": {
                            fontSize: "18px",
                          },
                        }}
                      >
                        <p>Active</p>
                      </Box>
                      <Box
                        sx={{
                          fontSize: "50px",
                          fontWeight: 700,
                          "@media (max-width: 992px)": {
                            fontSize: "22px",
                          },
                        }}
                      >
                        <p>1</p>
                      </Box>
                      <Box
                        sx={{
                          fontSize: "36px",
                          "@media (max-width: 992px)": {
                            fontSize: "18px",
                          },
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
                        width: "150px",
                        "@media (max-width: 992px)": {
                          width: "unset",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          fontSize: "23px",
                          fontWeight: 700,
                          color: "#FF0000",
                          "@media (max-width: 992px)": {
                            fontSize: "18px",
                          },
                        }}
                      >
                        <p>Deactivated</p>
                      </Box>
                      <Box
                        sx={{
                          fontSize: "50px",
                          fontWeight: 700,
                          "@media (max-width: 992px)": {
                            fontSize: "22px",
                          },
                        }}
                      >
                        <p>1</p>
                      </Box>
                      <Box
                        sx={{
                          fontSize: "36px",
                          "@media (max-width: 992px)": {
                            fontSize: "18px",
                          },
                        }}
                      >
                        <p>Admin</p>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              {/* 1st b */}
              <Box
                sx={{
                  marginTop: "25px",
                  width: "1.5px",
                  height: "111px",
                  backgroundColor: "#D8D8D8",
                  "@media (max-width: 992px)": {
                    display: "none",
                  },
                }}
              ></Box>
              {/* 1st c */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "45px",
                  marginTop: "22px",
                  marginRight: "30px",
                  "@media (max-width: 992px)": {
                    marginLeft: "0px",
                    marginRight: "0px",
                  },
                }}
              >
                <Box>
                  <PrimaryButtonTwo
                    onClick={() => navigate("/practice-management/new-user")}
                  >
                    <FaPlus />
                    <Box
                      sx={{
                        marginLeft: "5px",
                      }}
                    >
                      New User
                    </Box>
                  </PrimaryButtonTwo>
                </Box>
                <Box
                  sx={{
                    marginTop: "10px",
                  }}
                >
                  <SecondaryButtonTwo
                    onClick={() => navigate("/practice-management/all-users")}
                  >
                    Manage Users
                  </SecondaryButtonTwo>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* 2nd */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              "@media (max-width: 992px)": {
                flexDirection: "column",
                justifyContent: "center",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                marginTop: "50px",
                "@media (max-width: 992px)": {
                  marginTop: "40px",
                },
              }}
            >
              <Box
                sx={{
                  width: "105px",
                  display: "flex",
                  alignItems: "end",
                  "@media (max-width: 992px)": {
                    width: "50px",
                  },
                }}
              >
                <img
                  src={Doctor}
                  alt="doctor"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </Box>
              <Box
                sx={{
                  marginLeft: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "150px",
                  "@media (max-width: 992px)": {
                    width: "unset",
                  },
                }}
              >
                <Box
                  sx={{
                    fontSize: "23px",
                    fontWeight: 700,
                    color: "#40AE49",
                    "@media (max-width: 992px)": {
                      fontSize: "18px",
                    },
                  }}
                >
                  <p>Active</p>
                </Box>
                <Box
                  sx={{
                    fontSize: "50px",
                    fontWeight: 700,
                    "@media (max-width: 992px)": {
                      fontSize: "22px",
                    },
                  }}
                >
                  <p>7</p>
                </Box>
                <Box
                  sx={{
                    fontSize: "36px",
                    "@media (max-width: 992px)": {
                      fontSize: "18px",
                    },
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
                  width: "150px",
                  "@media (max-width: 992px)": {
                    width: "unset",
                  },
                }}
              >
                <Box
                  sx={{
                    fontSize: "23px",
                    fontWeight: 700,
                    color: "#FF0000",
                    "@media (max-width: 992px)": {
                      fontSize: "18px",
                    },
                  }}
                >
                  <p>Deactivated</p>
                </Box>
                <Box
                  sx={{
                    fontSize: "50px",
                    fontWeight: 700,
                    "@media (max-width: 992px)": {
                      fontSize: "22px",
                    },
                  }}
                >
                  <p>7</p>
                </Box>
                <Box
                  sx={{
                    fontSize: "36px",
                    "@media (max-width: 992px)": {
                      fontSize: "18px",
                    },
                  }}
                >
                  <p>Providers</p>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "32px",
                "@media (max-width: 992px)": {
                  marginRight: "0px",
                },
              }}
            >
              {/* 2nd b */}
              <Box
                sx={{
                  marginTop: "25px",
                  width: "1.5px",
                  height: "111px",
                  backgroundColor: "#D8D8D8",
                  "@media (max-width: 992px)": {
                    display: "none",
                  },
                }}
              ></Box>
              {/* 2nd c */}
              <Box
                sx={{
                  marginLeft: "45px",
                  marginTop: "22px",
                  "@media (max-width: 992px)": {
                    marginLeft: "0px",
                  },
                }}
              >
                <Box>
                  <PrimaryButtonTwo
                    onClick={() =>
                      navigate("/practice-management/new-provider")
                    }
                  >
                    <FaPlus />
                    <Box
                      sx={{
                        marginLeft: "5px",
                      }}
                    >
                      New Provider
                    </Box>
                  </PrimaryButtonTwo>
                </Box>
                <Box
                  sx={{
                    marginTop: "10px",
                  }}
                >
                  <SecondaryButtonTwo
                    onClick={() =>
                      navigate("/practice-management/all-providers")
                    }
                  >
                    Manage Providers
                  </SecondaryButtonTwo>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* 3rd */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              "@media (max-width: 992px)": {
                flexDirection: "column",
                justifyContent: "center",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                marginTop: "50px",
                "@media (max-width: 992px)": {
                  marginTop: "40px",
                },
              }}
            >
              <Box
                sx={{
                  width: "105px",
                  display: "flex",
                  alignItems: "end",
                  "@media (max-width: 992px)": {
                    width: "50px",
                  },
                }}
              >
                <img
                  src={Site}
                  alt="site"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </Box>
              <Box
                sx={{
                  marginLeft: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "150px",
                  "@media (max-width: 992px)": {
                    width: "unset",
                  },
                }}
              >
                <Box
                  sx={{
                    fontSize: "23px",
                    fontWeight: 700,
                    color: "#40AE49",
                    "@media (max-width: 992px)": {
                      fontSize: "18px",
                    },
                  }}
                >
                  <p>Active</p>
                </Box>
                <Box
                  sx={{
                    fontSize: "50px",
                    fontWeight: 700,
                    "@media (max-width: 992px)": {
                      fontSize: "22px",
                    },
                  }}
                >
                  <p>4</p>
                </Box>
                <Box
                  sx={{
                    fontSize: "36px",
                    "@media (max-width: 992px)": {
                      fontSize: "18px",
                    },
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
                  width: "150px",
                  "@media (max-width: 992px)": {
                    width: "unset",
                  },
                }}
              >
                <Box
                  sx={{
                    fontSize: "23px",
                    fontWeight: 700,
                    color: "#FF0000",
                    "@media (max-width: 992px)": {
                      fontSize: "18px",
                    },
                  }}
                >
                  <p>Deactivated</p>
                </Box>
                <Box
                  sx={{
                    fontSize: "50px",
                    fontWeight: 700,
                    "@media (max-width: 992px)": {
                      fontSize: "22px",
                    },
                  }}
                >
                  <p>5</p>
                </Box>
                <Box
                  sx={{
                    fontSize: "36px",
                    "@media (max-width: 992px)": {
                      fontSize: "18px",
                    },
                  }}
                >
                  <p>Sites</p>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "32px",
                "@media (max-width: 992px)": {
                  marginRight: "0px",
                },
              }}
            >
              {/* 2nd c */}
              <Box
                sx={{
                  marginTop: "25px",
                  width: "1.5px",
                  height: "111px",
                  backgroundColor: "#D8D8D8",
                  "@media (max-width: 992px)": {
                    display: "none",
                  },
                }}
              ></Box>
              {/* 3rd c */}
              <Box
                sx={{
                  marginLeft: "45px",
                  marginTop: "22px",
                  "@media (max-width: 992px)": {
                    marginLeft: "0px",
                  },
                }}
              >
                <Box>
                  <PrimaryButtonTwo
                    onClick={() => navigate("/practice-management/new-site")}
                  >
                    <FaPlus />
                    <Box sx={{ marginLeft: "5px" }}>New Site</Box>
                  </PrimaryButtonTwo>
                </Box>
                <Box sx={{ marginTop: "10px" }}>
                  <SecondaryButtonTwo
                    onClick={() => navigate("/practice-management/all-sites")}
                  >
                    Manage Sites
                  </SecondaryButtonTwo>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Batch Upload */}
          <Box
            sx={{
              margin: "40px 70px",
              borderTop: "1px solid #D8D8D8",
              "@media (max-width: 992px)": {
                margin: "40px 0px",
              },
            }}
          >
            <Box
              sx={{
                margin: "30px 50px",
                display: "flex",
                alignItems: "center",
                gap: "28px",
                flexWrap: "wrap",
                justifyContent: "space-between",
                "@media (max-width: 992px)": {
                  justifyContent: "center",
                },
              }}
            >
              <img src={World} alt="world" />
              <Box
                sx={{
                  fontSize: "36px",
                  color: "#414042",
                  width: "110px",
                  "@media (max-width: 992px)": {
                    width: "unset",
                    fontSize: "28px",
                  },
                }}
              >
                <p>Batch Upload</p>
              </Box>
              <Box
                sx={{
                  "@media (max-width: 992px)": {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  },
                }}
              >
                <Box
                  sx={{
                    fontSize: "14px",
                    color: "#414042",
                    textDecoration: "underline",
                    cursor: "pointer",
                    marginBottom: "5px",
                  }}
                >
                  <p>Download Template</p>
                </Box>
                <Box
                  sx={{
                    fontSize: "20px",
                    color: "#00739A",
                    fontWeight: 700,
                  }}
                >
                  <p>Upload Providers</p>
                </Box>
              </Box>

              <Box
                sx={{
                  borderRight: "1px solid #D8D8D8",
                  margin: "0 28px",
                  height: "85px",
                  "@media (max-width: 992px)": {
                    display: "none",
                  },
                }}
              ></Box>

              <Box>
                <Box
                  sx={{
                    fontSize: "14px",
                    color: "#414042",
                    textDecoration: "underline",
                    cursor: "pointer",
                    marginBottom: "5px",
                  }}
                >
                  <p>Download Template</p>
                </Box>
                <Box
                  sx={{
                    fontSize: "20px",
                    color: "#00739A",
                    fontWeight: 700,
                  }}
                >
                  <p>Upload Sites</p>
                </Box>
              </Box>

              <Box
                sx={{
                  borderRight: "1px solid #D8D8D8",
                  margin: "0 28px",
                  height: "85px",
                  "@media (max-width: 992px)": {
                    display: "none",
                  },
                }}
              ></Box>

              <Box>
                <Box
                  sx={{
                    fontSize: "14px",
                    color: "#414042",
                    textDecoration: "underline",
                    cursor: "pointer",
                    marginBottom: "5px",
                  }}
                >
                  <p>Download Template</p>
                </Box>
                <Box
                  sx={{
                    fontSize: "20px",
                    color: "#00739A",
                    fontWeight: 700,
                  }}
                >
                  <p>Upload Users</p>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Practice Settings */}
          <Box
            sx={{
              margin: "0 70px",
              "@media (max-width: 992px)": {
                margin: "40px 0px",
              },
            }}
          >
            <Box
              sx={{
                margin: "30px 50px",
                display: "flex",
                alignItems: "center",
                gap: "28px",
                flexWrap: "wrap",
                "@media (max-width: 992px)": {
                  justifyContent: "center",
                },
              }}
            >
              <img src={Upload} alt="upload" />
              <Box
                sx={{
                  fontSize: "36px",
                  color: "#414042",
                  "@media (max-width: 992px)": {
                    fontSize: "28px",
                  },
                }}
              >
                <p>Practice Settings</p>
              </Box>
              <Box>
                <SecondaryButtonTwo>Manage Practice</SecondaryButtonTwo>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </SecondaryLayout>
  );
};

export default PracticeManagement;
