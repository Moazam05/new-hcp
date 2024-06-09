import { useParams } from "react-router-dom";
import SecondaryLayout from "../../../components/Layout/SecondaryLayout";
import CaseOne from "./CaseOne";

const PatientTypes = () => {
  const { type } = useParams();

  const patientData = localStorage.getItem("insuranceType") || "";
  const patientDataObj = JSON.parse(patientData);

  // todo: SINGLE BV, COPAY, FINANCIAL ASSISTANT WITH MEDICARE
  const singleBV =
    patientDataObj.bv &&
    !patientDataObj.copay &&
    !patientDataObj.financialAssistant &&
    type === "medicare";

  const singleCopay =
    patientDataObj.copay &&
    !patientDataObj.bv &&
    !patientDataObj.financialAssistant &&
    type === "medicare";

  const singleFinancialAssistant =
    patientDataObj.financialAssistant &&
    !patientDataObj.bv &&
    !patientDataObj.copay &&
    type === "medicare";

  return (
    <SecondaryLayout>
      {/* {type === "medicare" && <CaseOne />} */}
      {singleBV || singleCopay || singleFinancialAssistant ? (
        "salman"
      ) : (
        <CaseOne />
      )}
    </SecondaryLayout>
  );
};

export default PatientTypes;
