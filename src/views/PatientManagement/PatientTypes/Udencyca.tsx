import CaseTwo from "./CaseTwo";
import { useParams } from "react-router-dom";
import TreatmentInformation from "./CaseTwo/TreatmentInformation";
import DocumentUpload from "../components/CommonSteps/DocumentUpload";
import Attestation from "../components/CommonSteps/Attestation";

const Udencyca = () => {
  const { type } = useParams();
  let patientDataObj: any = {};

  const patientData = localStorage.getItem("insuranceType");
  if (patientData) {
    try {
      patientDataObj = JSON.parse(patientData);
    } catch (error) {
      console.error("Failed to parse patient data:", error);
    }
  }

  // todo: SINGLE FV, WITH MEDICARE
  const singleFV =
    patientDataObj.financialAssistant &&
    !patientDataObj.bv &&
    !patientDataObj.copay &&
    type === "medicare";
  const singleFVSteps = [TreatmentInformation, DocumentUpload, Attestation];

  // todo: SINGLE BV, WITH MEDICARE
  const singleBV =
    patientDataObj.bv &&
    !patientDataObj.copay &&
    !patientDataObj.financialAssistant &&
    type === "medicare";
  const singleBVSteps = [TreatmentInformation, DocumentUpload, Attestation];

  return (
    <>
      {singleFV ? (
        <CaseTwo steps={singleFVSteps} />
      ) : singleBV ? (
        <CaseTwo steps={singleBVSteps} />
      ) : (
        ""
      )}
    </>
  );
};

export default Udencyca;
