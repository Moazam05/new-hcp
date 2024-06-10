import { useParams } from "react-router-dom";
import SecondaryLayout from "../../../components/Layout/SecondaryLayout";
import CaseOne from "./CaseOne";
import MedicalInsurance from "../components/CommonSteps/MedicalInsurance";
import DocumentUpload from "../components/CommonSteps/DocumentUpload";
import FinancialAssistant from "../components/CommonSteps/FinancialAssistant";
import AssistanceAttestation from "../components/CommonSteps/AssistanceAttestation";
import Attestation from "../components/CommonSteps/Attestation";
import TreatmentInformation from "./CaseOne/components/TreatmentInformation";
import InsuranceDetails from "../components/CommonSteps/InsuranceDetails";
import PharmacyInsurance from "../components/CommonSteps/PharmacyInsurance";
import CoPayEligibility from "../components/CommonSteps/CoPayEligibility";

const PatientTypes = () => {
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

  const singleMedicareSteps = [
    MedicalInsurance,
    TreatmentInformation,
    DocumentUpload,
    Attestation,
  ];

  // todo: MEDICARE STEPS WITH COMBINATIONS
  const majorCondition =
    (patientDataObj.bv && patientDataObj.copay && type === "medicare") ||
    (patientDataObj.bv &&
      patientDataObj.financialAssistant &&
      type === "medicare") ||
    (patientDataObj.copay &&
      patientDataObj.financialAssistant &&
      type === "medicare") ||
    (patientDataObj.bv &&
      patientDataObj.copay &&
      patientDataObj.financialAssistant &&
      type === "medicare");

  const medicareSteps = [
    MedicalInsurance,
    TreatmentInformation,
    DocumentUpload,
    FinancialAssistant,
    AssistanceAttestation,
    Attestation,
  ];

  // todo: BV AND COMMERCIAL
  const CommercialOne =
    patientDataObj.bv &&
    !patientDataObj.copay &&
    !patientDataObj.financialAssistant &&
    type === "commercial";

  const bvCommercialSteps = [
    InsuranceDetails,
    PharmacyInsurance,
    TreatmentInformation,
    DocumentUpload,
    Attestation,
  ];

  // todo: SINGLE COPAY, BV + COPAY with COMMERCIAL
  const commercialSecondCase =
    (patientDataObj.bv && patientDataObj.copay) || patientDataObj.copay;

  const commercialSecondSteps = [
    InsuranceDetails,
    PharmacyInsurance,
    TreatmentInformation,
    DocumentUpload,
    CoPayEligibility,
    Attestation,
  ];

  return (
    <SecondaryLayout>
      {singleBV || singleCopay || singleFinancialAssistant ? (
        <CaseOne steps={singleMedicareSteps} />
      ) : majorCondition ? (
        <CaseOne steps={medicareSteps} />
      ) : CommercialOne ? (
        <CaseOne steps={bvCommercialSteps} />
      ) : commercialSecondCase ? (
        <CaseOne steps={commercialSecondSteps} />
      ) : (
        ""
      )}
    </SecondaryLayout>
  );
};

export default PatientTypes;
