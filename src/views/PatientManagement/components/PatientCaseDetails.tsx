import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import SecondaryLayout from "../../../components/Layout/SecondaryLayout";

const PatientCaseDetails = () => {
  const { caseId } = useParams();
  console.log("caseId", caseId);

  return (
    <SecondaryLayout>
      <Box
        sx={{
          margin: "20px 200px",
          "@media (max-width: 576px)": {
            margin: "0 20px",
          },
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsam
        commodi labore ab iure provident voluptate laborum ratione consectetur,
        ut aliquid vitae laboriosam veritatis odio mollitia totam unde
        blanditiis deserunt.
      </Box>
    </SecondaryLayout>
  );
};

export default PatientCaseDetails;
