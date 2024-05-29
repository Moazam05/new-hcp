import SecondaryLayout from "../../../components/Layout/SecondaryLayout";
import { Box } from "@mui/material";
import Paragraph from "../../../components/Paragraph";

const PatientCase = () => {
  return (
    <SecondaryLayout>
      <Box sx={{ margin: "20px 200px" }}>
        <Paragraph
          sx={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#414042",
            "@media (max-width: 576px)": {
              fontSize: "14px",
            },
          }}
        >
          Cases
        </Paragraph>
      </Box>
    </SecondaryLayout>
  );
};

export default PatientCase;
