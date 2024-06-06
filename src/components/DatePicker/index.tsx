import { Box } from "@mui/material";
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

interface DatePickerProps {
  formik?: any;
  errorMessage?: string;
  maxDate?: any;
  value: any;
  onChange: (date: any) => void;
  name: string;
}

const DatePicker = ({
  formik,
  value,
  maxDate,
  onChange,
  name,
  errorMessage,
}: DatePickerProps) => {
  const isFormik = Boolean(formik);

  const handleChange = (date: any) => {
    if (isFormik) {
      const formattedDate = date ? dayjs(date).format("MM/DD/YYYY") : "";
      formik.setFieldValue(name, formattedDate);
    } else {
      onChange(date);
    }
  };

  const dateValue = isFormik
    ? formik.values[name]
      ? dayjs(formik.values[name], "MM/DD/YYYY")
      : null
    : value;

  const error = isFormik ? formik.errors[name] : null;

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          label=""
          maxDate={maxDate}
          sx={{
            height: "41px",
            width: "100%",
            "& .MuiInputBase-root": {
              height: "41px",
              fontSize: "14px",
            },
            "& fieldset": { border: "none" },
            border: error ? "1px solid #FF0000" : "none",
            boxShadow: error ? "none" : "inset 0px 0px 5px rgba(0,0,0,0.35)",
            "& .MuiInputBase-input::placeholder": {
              fontSize: "14px",
            },
          }}
          format="MM/DD/YYYY"
          value={dateValue}
          onChange={handleChange}
          name={name}
        />
      </LocalizationProvider>
      {isFormik && formik.touched[name] && error && (
        <Box
          sx={{
            fontSize: "12px",
            color: "#FF0000",
            fontWeight: 400,
            lineHeight: "17px",
          }}
        >
          <p>{errorMessage}</p>
        </Box>
      )}
    </>
  );
};

export default DatePicker;
