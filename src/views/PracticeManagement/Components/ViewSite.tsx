// React Imports
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// MUI
import { Box } from "@mui/material";
// React Icons
import { MdKeyboardArrowLeft } from "react-icons/md";
// Assets
import { Site } from "../../../assets/images";
// Custom
import PrimaryButtonTwo from "../../../components/PrimaryButton/PrimaryButtonTwo";
import Footer from "../../../components/Footer";
import StatusModal from "./StatusModal";
import SecondaryLayout from "../../../components/Layout/SecondaryLayout";
import useLocalStorageTimeout from "../../../hooks/useLocalStorageTimeout";
import { useGetLocationQuery } from "../../../redux/api/locationApiSlice";
import OverlayLoader from "../../../components/Spinner/OverlayLoader";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";
import InputMask from "react-input-mask";
import { useGetSiteOfServiceQuery } from "../../../redux/api/utilsApiSlice";

const ViewSite = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.pathname.split("/").slice(1).pop();

  // states
  const [modalOpen, setModalOpen] = useState(false);
  const [userMessage, setUserMessage] = useState(
    localStorage.getItem("statusMessage")
  );

  useLocalStorageTimeout("statusMessage", 5000, setUserMessage);

  // todo: GET USER API CALL
  const { data, isLoading } = useGetLocationQuery(id);

  // todo: GET SITE OF SERVICE API CALL
  const { data: siteOfServiceData, isLoading: siteOfServiceLoading } =
    useGetSiteOfServiceQuery({});

  const siteOfServiceName = (id: string) => {
    const name = siteOfServiceData?.$values.find((ser: any) => ser.id === id);
    return name;
  };
  return (
    <SecondaryLayout>
      {(isLoading || siteOfServiceLoading) && <OverlayLoader />}

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
          onClick={() => navigate("/practice-management/all-sites")}
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
            <h2>Site Profile</h2>
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
              <h3>Site Information</h3>
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
              onClick={() => navigate(`/practice-management/new-site/${id}`)}
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
                    <img src={Site} alt="site" />
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
                        marginBottom: "15px",
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
                        <p>Site Name:</p>
                      </Box>
                      <Box sx={{ fontSize: "20px" }}>
                        <p>{data?.data?.name}</p>
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
                        <p>Site of Service:</p>
                      </Box>
                      <Box sx={{ fontSize: "20px" }}>
                        <p>
                          {siteOfServiceName(data?.data?.siteOfServiceID)?.name}
                        </p>
                      </Box>
                    </Box>

                    {/* <Box
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
                        <p>O123104560</p>
                      </Box>
                    </Box> */}

                    <Box
                      sx={{
                        margin: "30px 0",
                      }}
                    >
                      <PrimaryButtonTwo onClick={() => setModalOpen(true)}>
                        Deactivated Site
                      </PrimaryButtonTwo>
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
                      marginBottom: "15px",
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
                      <p>Address:</p>
                    </Box>
                    <Box sx={{ fontSize: "20px" }}>
                      <p>{data?.data?.address1}</p>
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
                      <p>Phone Number:</p>
                    </Box>
                    <Box sx={{ fontSize: "20px" }}>
                      <InputMask
                        mask="(999) 999-9999"
                        value={data?.data?.phone}
                        disabled={false}
                        maskChar="_"
                        style={{ border: "none", fontSize: "20px" }}
                      ></InputMask>
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
                      <p>Fax Number:</p>
                    </Box>
                    <Box sx={{ fontSize: "20px" }}>
                      <p>{data?.data?.fax} </p>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/*  Status Modal */}
      <StatusModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        site={true}
        userData={data?.data}
      />
      {/* Footer */}
      <Footer />
    </SecondaryLayout>
  );
};

export default ViewSite;
