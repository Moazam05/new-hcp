import CaseTwo from "./CaseTwo";
import { useParams } from "react-router-dom";
import TreatmentInformation from "./CaseTwo/TreatmentInformation";
import DocumentUpload from "../components/CommonSteps/DocumentUpload";
import Attestation from "../components/CommonSteps/Attestation";
import InsuranceDetails from "../components/CommonSteps/InsuranceDetails";
import PharmacyInsurance from "../components/CommonSteps/PharmacyInsurance";
import CoPayEligibility from "../components/CommonSteps/CoPayEligibility";

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

  // todo: SINGLE BV, WITH COMMERCIAL
  const singleBVCommercial =
    patientDataObj.bv &&
    !patientDataObj.copay &&
    !patientDataObj.financialAssistant &&
    type === "commercial";

  const singleBVCommercialSteps = [
    InsuranceDetails,
    PharmacyInsurance,
    TreatmentInformation,
    DocumentUpload,
    Attestation,
  ];

  // todo: SINGLE COPAY, BV + COPAY WITH COMMERCIAL
  const commercialCase =
    (patientDataObj.bv && patientDataObj.copay) || patientDataObj.copay;

  const commercialCaseSteps = [
    InsuranceDetails,
    PharmacyInsurance,
    TreatmentInformation,
    DocumentUpload,
    CoPayEligibility,
    Attestation,
  ];

  return (
    <>
      {singleFV ? (
        <CaseTwo steps={singleFVSteps} />
      ) : singleBV ? (
        <CaseTwo steps={singleBVSteps} />
      ) : singleBVCommercial ? (
        <CaseTwo steps={singleBVCommercialSteps} />
      ) : commercialCase ? (
        <CaseTwo steps={commercialCaseSteps} />
      ) : (
        ""
      )}
    </>
  );
};

export default Udencyca;
