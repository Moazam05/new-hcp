import { useNavigate } from "react-router-dom";
import MainLayout from "../../../components/Layout/MainLayout";
import { Box } from "@mui/material";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Site } from "../../../assets/images";
import PrimaryButtonTwo from "../../../components/PrimaryButton/PrimaryButtonTwo";
import Footer from "../../../components/Footer";

const ViewSite = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
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
            }}
          >
            <h2>Site Profile</h2>
          </Box>
        </Box>

        <Box
          sx={{
            margin: "80px 0 0 0",
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
            onClick={() => navigate("/practice-management/new-site/1")}
          >
            <p>edit</p>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "30px",
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
                      <p>Active</p>
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
                      <p>Westlake Clinic</p>
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
                      <p>On Campus-Outpatient </p>
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
                      <p>NPI Number:</p>
                    </Box>
                    <Box sx={{ fontSize: "20px" }}>
                      <p>O123104560</p>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      margin: "30px 0",
                    }}
                  >
                    <PrimaryButtonTwo onClick={() => alert("ok")}>
                      Deactivated Site
                    </PrimaryButtonTwo>
                  </Box>
                </Box>
              </Box>
            </Box>
            {/* ss */}
          </Box>
        </Box>
      </Box>

      <Footer />
    </MainLayout>
  );
};

export default ViewSite;
