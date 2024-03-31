// React Imports
import { useRef, useState, useEffect } from "react";
// MUI
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/material";
// Yup
import * as Yup from "yup";
// Style
import "../Registration.css";
// Constants
import constants from "../../../constants";
// Custom
import InActiveModal from "./InActiveModal";

interface AgreementProps {
  formik: any;
}

const Agreement = ({ formik }: AgreementProps) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const { values, handleChange, handleBlur } = formik;
  // states
  const termsBoxRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [topPosition, setTopPosition] = useState(0);
  // Inactivity Modal States
  const [modalOpen, setModalOpen] = useState(false);
  const [showInactivity, setShowInactivity] = useState(false);

  useEffect(() => {
    let interval: any;

    const startTimer = () => {
      const time = Number(import.meta.env.VITE_REACT_INACTIVE_TIME) * 60 * 1000;

      interval = setInterval(() => {
        setShowInactivity(true);
        setModalOpen(true);
      }, time);
    };
    startTimer();

    return () => {
      clearInterval(interval);
    };
  }, [modalOpen]);

  let interval: any;
  const handleResetTimer = () => {
    setShowInactivity(false);
    setModalOpen(false);
    clearInterval(interval);
  };

  useEffect(() => {
    if (termsBoxRef.current) {
      const termsBox = termsBoxRef.current;
      const contentHeight = termsBox.scrollHeight - termsBox.clientHeight;
      setTopPosition((scrollPosition / contentHeight) * 100);
    }
  }, [scrollPosition]);

  const handleScroll = () => {
    if (termsBoxRef.current) {
      const { scrollTop } = termsBoxRef.current;
      setScrollPosition(scrollTop);
    }
  };

  return (
    <>
      <h3 className="our-agree">{constants.USER_AGREEMENT}</h3>
      <Box
        sx={{
          fontSize: "20px",
          margin: "5px 0",
          color: "#414042",
          fontWeight: 600,
          "@media (max-width: 576px)": {
            fontSize: "16px",
            margin: "10px 20px",
          },
        }}
      >
        <p>{constants.AGREEMENT_CLAUSE_ONE}</p>
      </Box>
      <Box
        sx={{
          border: "1px solid #000",
          padding: "8px 10px",
          margin: "10px 0 20px",
          "@media (max-width: 576px)": {
            margin: "20px",
          },
        }}
      >
        <Box
          ref={termsBoxRef}
          onScroll={handleScroll}
          sx={{
            fontSize: "14px",
            color: "#414042",
            fontWeight: 600,
            maxHeight: "150px",
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
              width: "10px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#EBEBEB",
              borderRadius: "8px",
            },
            "&::-webkit-scrollbar-track": {
              borderRadius: "8px",
              backgroundColor: "transparent",
            },
            "@media (max-width: 576px)": {
              fontSize: "12px",
              padding: "5px 8px",
            },
          }}
        >
          <div style={{ paddingRight: "5px" }}>
            <p>{constants.AGREEMENT_CLAUSE_ONE}</p>
            <br />
            <p>{constants.AGREEMENT_PARAGRAPH_ONE}</p>
            <br />
            <p>{constants.AGREEMENT_PARAGRAPH_TWO}</p>
            <p>{constants.AGREEMENT_PARAGRAPH_THREE}</p>
          </div>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          "@media (max-width: 576px)": {
            margin: "0 20px 0 10px",
          },
        }}
      >
        <Box
          sx={{
            height: "fit-content",
          }}
        >
          <Checkbox
            {...label}
            checked={values.agreement}
            onChange={handleChange}
            onBlur={handleBlur}
            name="agreement"
            color="primary"
            disabled={topPosition > 99 ? false : true}
          />
        </Box>
        <Box
          sx={{
            color: topPosition > 99 ? "#414042" : "#afafaf",
            fontSize: "20px",
            marginBottom: "40px",
            fontWeight: 600,
            minHeight: "155px",
            "@media (max-width: 576px)": {
              fontSize: "16px",
              minHeight: "80px",
              margin: "0 0 30px",
            },
          }}
        >
          <p>{constants.AGREEMENT_PARAGRAPH_FOUR}</p>
        </Box>
        {showInactivity && (
          <InActiveModal
            modalOpen={modalOpen}
            handleResetTimer={handleResetTimer}
          />
        )}
      </Box>
    </>
  );
};

Agreement.label = "Agreement";
Agreement.initialValues = {
  agreement: false,
};
Agreement.validationSchema = Yup.object().shape({
  agreement: Yup.boolean().oneOf([true], "You must agree to continue"),
});

export default Agreement;
