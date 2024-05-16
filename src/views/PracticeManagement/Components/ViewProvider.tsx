// React Imports
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// MUI
import { Box } from "@mui/material";
// React Icons
import { MdKeyboardArrowLeft } from "react-icons/md";
// Assets
import { Doctor } from "../../../assets/images";
// Custom
import PrimaryButtonTwo from "../../../components/PrimaryButton/PrimaryButtonTwo";
import Footer from "../../../components/Footer";
import StatusModal from "./StatusModal";
import SecondaryButtonTwo from "../../../components/SecondaryButton/SecondaryButtonTwo";
import SecondaryLayout from "../../../components/Layout/SecondaryLayout";
import useLocalStorageTimeout from "../../../hooks/useLocalStorageTimeout";
import { useGetPersonQuery } from "../../../redux/api/personApiSlice";
import OverlayLoader from "../../../components/Spinner/OverlayLoader";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";

const ViewProvider = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.pathname.split("/").slice(1).pop();

  // states
  const [modalOpen, setModalOpen] = useState(false);
  const [userMessage, setUserMessage] = useState(
    localStorage.getItem("statusMessage")
  );

  useLocalStorageTimeout("statusMessage", 3000, setUserMessage);

  // todo: GET USER API CALL
  const { data, isLoading } = useGetPersonQuery(id);

  return (
    <SecondaryLayout>
      {isLoading && <OverlayLoader />}

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
            alignItems: "center",
            cursor: "pointer",
            "@media (max-width: 576px)": {
              fontSize: "18px",
              marginBottom: "10px",
            },
          }}
          onClick={() => navigate("/practice-management/all-providers")}
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
              fontSize: "24px",
              "@media (max-width: 576px)": {
                fontSize: "18px",
              },
            }}
          >
            <h2>Provider Profile</h2>
          </Box>
        </Box>

        <Box
          sx={{
            margin: "80px 0 0 0",
            "@media (max-width: 576px)": {
              margin: "40px 0 0 0",
            },
          }}
        >
          {userMessage && (
            <Box
              sx={{
                background: userMessage?.includes("deactivated")
                  ? "#B12029"
                  : "#00b237",
                color: "#fff",
                padding: "10px 15px",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              {userMessage?.includes("deactivated") ? (
                <FaRegTimesCircle
                  fontSize={20}
                  fontFamily="bold"
                  color="#fff"
                />
              ) : (
                <FaRegCheckCircle
                  fontSize={20}
                  fontFamily="bold"
                  color="#fff"
                />
              )}
              {userMessage}
            </Box>
          )}
          <Box
            sx={{
              border: "1px solid #979797",
              padding: "32px",
            }}
          >
            <Box
              sx={{
                fontSize: "20px",
                fontWeight: 700,
              }}
            >
              <h3>Provider Information</h3>
            </Box>
            <Box
              sx={{
                fontSize: "20px",
                color: "#00739a",
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                justifyContent: "flex-end",
              }}
              onClick={() =>
                navigate(`/practice-management/new-provider/${id}`)
              }
            >
              <p>edit</p>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "30px",
                "@media (max-width: 576px)": {
                  flexDirection: "column",
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
                <Box
                  sx={{
                    display: "flex",
                    gap: "24px",
                    "@media (max-width: 576px)": {
                      flexDirection: "column",
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: "fit-content",
                    }}
                  >
                    <img src={Doctor} alt="doctor" />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        height: "fit-content",
                        "@media (max-width: 576px)": {
                          flexDirection: "column",
                          alignItems: "flex-start",
                          marginBottom: "10px",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          fontSize: "20px",
                          fontWeight: 700,
                          color: "#414042",
                        }}
                      >
                        <p>User Type:</p>
                      </Box>
                      <Box sx={{ fontSize: "20px" }}>
                        <p>{`${data?.data?.roles?.$values[0]} ${
                          data?.data?.roles?.$values[1] || ""
                        }`}</p>{" "}
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        height: "fit-content",
                        "@media (max-width: 576px)": {
                          flexDirection: "column",
                          alignItems: "flex-start",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          fontSize: "20px",
                          fontWeight: 700,
                          color: "#414042",
                        }}
                      >
                        <p>Status:</p>
                      </Box>
                      <Box sx={{ fontSize: "20px" }}>
                        {data?.data?.isActive ? "Active" : "Inactive"}
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        height: "fit-content",
                        "@media (max-width: 576px)": {
                          flexDirection: "column",
                          alignItems: "flex-start",
                          marginBottom: "10px",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          fontSize: "20px",
                          fontWeight: 700,
                          color: "#414042",
                        }}
                      >
                        <p>Name:</p>
                      </Box>
                      <Box sx={{ fontSize: "20px" }}>
                        <p>{`${data?.data?.lastName}, ${data?.data?.firstName}`}</p>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        height: "fit-content",
                        "@media (max-width: 576px)": {
                          flexDirection: "column",
                          alignItems: "flex-start",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          fontSize: "20px",
                          fontWeight: 700,
                          color: "#414042",
                        }}
                      >
                        <p>Email Address:</p>
                      </Box>
                      <Box sx={{ fontSize: "20px" }}>
                        <p>{data?.data?.email}</p>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        margin: "30px 0",
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                        "@media (max-width: 576px)": {
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "10px",
                        },
                      }}
                    >
                      <PrimaryButtonTwo
                        sx={{
                          width: "fit-content",
                          padding: "8px 22px",
                        }}
                      >
                        Send Password Reset Email
                      </PrimaryButtonTwo>
                      <SecondaryButtonTwo onClick={() => setModalOpen(true)}>
                        {data?.data?.isActive
                          ? "Deactivate Provider"
                          : "Activate Provider"}
                      </SecondaryButtonTwo>
                    </Box>
                  </Box>
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
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      height: "fit-content",
                      "@media (max-width: 576px)": {
                        flexDirection: "column",
                        alignItems: "flex-start",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: "20px",
                        fontWeight: 700,
                        color: "#414042",
                      }}
                    >
                      <p>NPI Number:</p>
                    </Box>
                    <Box sx={{ fontSize: "20px" }}>
                      <p>{data?.data?.providerNPI}</p>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Status Modal */}
      <StatusModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        provider={true}
        userData={data?.data}
      />
      {/* Footer */}
      <Footer />
    </SecondaryLayout>
  );
};

export default ViewProvider;
