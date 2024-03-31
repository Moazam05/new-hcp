import { Box } from "@mui/material";
import "../Registration.css";

interface ReviewFormProps {
  formik: any;
}

const ReviewForm = ({ formik }: ReviewFormProps) => {
  const { values } = formik;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        "@media (max-width: 576px)": {
          padding: "0 20px",
          gap: "0px",
        },
      }}
    >
      <h2 className="registration-title">
        Review your registration information
      </h2>
      <Box
        sx={{
          fontSize: "20px",
          margin: "5px 0 40px",
          color: "#414042",
          fontWeight: 600,
          "@media (max-width: 576px)": {
            fontSize: "16px",
            margin: "8px 0",
          },
        }}
      >
        <Box
          sx={{
            maxWidth: "550px",
          }}
        >
          <p>
            Click the edit link if you see anything you would like to change.
          </p>

          {/* User Information */}
          <Box sx={{ padding: "12px 40px 0" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "5px",
              }}
            >
              <Box
                sx={{ fontSize: "20px", color: "#414042", minWidth: "255px" }}
              >
                <p>Admin Name:</p>
              </Box>
              <Box sx={{ fontSize: "20px", color: "#414042" }}>
                <p>{values.lastName}</p>
              </Box>

              <Box
                sx={{
                  fontSize: "13px",
                  color: "#00739a",
                  marginLeft: "auto",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                <p>edit</p>
              </Box>
            </Box>
          </Box>
          <Box sx={{ padding: "0 40px" }}>
            {[
              { label: "Job Title:", value: `${values.jobTitle}` },
              { label: "Phone Number:", value: `${values.phoneNumber}` },
              { label: "Email Address:", value: `${values.email}` },
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  paddingBottom: "5px",
                }}
              >
                <Box
                  sx={{
                    fontSize: "20px",
                    color: "#414042",
                    minWidth: "255px",
                  }}
                >
                  <p>{item.label}</p>
                </Box>
                <Box sx={{ fontSize: "20px", color: "#414042" }}>
                  <p>{item.value}</p>
                </Box>
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              borderTop: "1px solid #414042",
              margin: "20px 0 5px 0",
            }}
          ></Box>
          {/* Practice Information */}
          <Box sx={{ padding: "12px 40px 0" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "5px",
              }}
            >
              <Box
                sx={{ fontSize: "20px", color: "#414042", minWidth: "255px" }}
              >
                <p>Practice Name:</p>
              </Box>
              <Box sx={{ fontSize: "20px", color: "#414042" }}>
                <p>{values.practiceName}</p>
              </Box>

              <Box
                sx={{
                  fontSize: "13px",
                  color: "#00739a",
                  marginLeft: "auto",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                <p>edit</p>
              </Box>
            </Box>
          </Box>
          <Box sx={{ padding: "0 40px" }}>
            {[
              { label: "Practice Address:", value: `${values.addressLineOne}` },
              {
                label: "Practice Phone Number:",
                value: `${values.practicePhoneNumber}`,
              },
              { label: "Practice Fax Number:", value: "" },
              { label: "NPI Number:", value: "" },
              { label: "Practice Tax ID Number:", value: "" },
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  paddingBottom: "5px",
                }}
              >
                <Box
                  sx={{
                    fontSize: "20px",
                    color: "#414042",
                    minWidth: "255px",
                  }}
                >
                  <p>{item.label}</p>
                </Box>
                <Box sx={{ fontSize: "20px", color: "#414042" }}>
                  <p>{item.value}</p>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

ReviewForm.label = "ReviewForm";
ReviewForm.initialValues = {};
ReviewForm.validationSchema = {};

export default ReviewForm;
