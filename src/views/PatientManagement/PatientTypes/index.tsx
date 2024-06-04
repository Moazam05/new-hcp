import { useParams } from "react-router-dom";
import SecondaryLayout from "../../../components/Layout/SecondaryLayout";
import CaseOne from "./CaseOne";

const PatientTypes = () => {
  const { type } = useParams();

  return (
    <SecondaryLayout>{type === "medicare" && <CaseOne />}</SecondaryLayout>
  );
};

export default PatientTypes;
