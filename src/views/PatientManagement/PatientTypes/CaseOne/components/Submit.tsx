import { Box } from "@mui/material";
import { IoCloseCircleOutline } from "react-icons/io5";
import Paragraph from "../../../../../components/Paragraph";
import PrimaryButton from "../../../../../components/PrimaryButton";
import { useAddPatientMutation } from "../../../../../redux/api/patientApiSlice";
import { useNavigate } from "react-router-dom";
import ToastAlert from "../../../../../components/ToastAlert";
import Spinner from "../../../../../components/Spinner";

interface SubmitProps {
  formData: any;
}

const Submit = ({ formData }: SubmitProps) => {
  const navigate = useNavigate();

  // todo: NEW PROVIDER Api Bind
  const [addPatient, { isLoading }] = useAddPatientMutation();

  const AddPatientHandler = async () => {
    try {
      const user: any = await addPatient(formData);

      if (user?.data) {
        ToastAlert("Patient added successfully", "success");
        navigate("/patient-management");
        localStorage.removeItem("therapy");
        localStorage.removeItem("patientData");
        localStorage.removeItem("insuranceType");
      }

      if (user?.error) {
        ToastAlert("Something went wrong", "error");
      }
    } catch (error) {
      console.error("New Provider Added Error:", error);
      ToastAlert("Something went wrong", "error");
    }
  };
  return (
    <>
      <Box
        sx={{
          border: "1px solid #979797",
          padding: "15px 0 0 0",
          margin: "20px 180px",
          "@media (max-width: 576px)": {
            margin: "20px",
            width: "unset",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            padding: "0 20px",
          }}
        >
          <Box
            sx={{
              cursor: "pointer",
              color: "#00739A",
              fontSize: "30px",
              width: "30px",
              height: "30px",
            }}
            // onClick={() =>
            //   navigate(`/patient-management/enroll-patient/${patientType}`)
            // }
          >
            <IoCloseCircleOutline />
          </Box>
        </Box>

        <Paragraph
          sx={{
            fontSize: "28px",
            margin: "0 120px",
            color: "#00739A",
            "@media (max-width: 576px)": {
              margin: "20px",
              width: "unset",
              fontSize: "14px",
            },
          }}
        >
          Thank you for submitting your patient information. Please allow 1
          business day for the service to be visible in the portal. If you don't
          see the update in 1 business day, pleasecall Coherus Solutions at
          1-844-483-3692.
        </Paragraph>

        <Box
          sx={{
            backgroundColor: "#F3F3F3",
            borderTop: "1px solid #979797",
            height: "85px",
            marginTop: "40px",
            "@media (max-width: 576px)": {
              height: "65px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "17px",
              "@media (max-width: 576px)": {
                marginTop: "12px",
              },
            }}
          >
            <PrimaryButton onClick={AddPatientHandler}>
              {isLoading ? (
                <Box
                  sx={{
                    padding: "4px 20px",
                  }}
                >
                  <Spinner size={18} specificColor="#fff" />
                </Box>
              ) : (
                "PROCEED"
              )}
            </PrimaryButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};

Submit.label = "Submit";

Submit.initialValues = {};

Submit.validationSchema = {};

export default Submit;
