import * as Yup from "yup";
import { FormikProps } from "formik";
import { Box } from "@mui/material";
import Paragraph from "../../../../components/Paragraph";
import { UploadImage, UploadImageTwo } from "../../../../assets/images";
import { GoDotFill } from "react-icons/go";

interface DocumentUploadProps {
  formik: FormikProps<any>;
}

const DocumentUpload = ({ formik }: DocumentUploadProps) => {
  const { values, setFieldValue } = formik;

  const handleImageChange = (e: any) => {
    const selectedFiles = Array.from(e.target.files);
    setFieldValue("documents", [...values.documents, ...selectedFiles]);
    e.target.value = null;
  };

  const handleRemoveImage = (index: any) => {
    const updatedDocuments = values.documents.filter((_, i) => i !== index);
    setFieldValue("documents", updatedDocuments);
  };

  const handleDrop = (event: any) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    setFieldValue("documents", [...values.documents, ...droppedFiles]);
  };

  const handleDragOver = (event: any) => {
    event.preventDefault();
  };

  console.log("values", values?.documents);

  function bytesToKilobytes(bytes: any) {
    const kilobytes = bytes / 1024;
    return kilobytes;
  }

  const truncateFileName = (name, maxLength) => {
    if (name.length > maxLength) {
      return name.substring(0, maxLength) + "...";
    }
    return name;
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          "@media (max-width: 576px)": {
            padding: "0",
            gap: "0px",
          },
        }}
      >
        <h1>Document Upload</h1>

        <Box
          sx={{
            display: "flex",
            gap: "20px",
            width: "100%",
            justifyContent: "center",
            alignContent: "center",
            "@media (max-width: 576px)": {
              flexDirection: "column",
              margin: "8px 0",
            },
          }}
        >
          <Paragraph
            sx={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#414042",
              margin: "20px 0",
              "@media (max-width: 576px)": {
                fontSize: "18px",
                marginLeft: "0",
              },
            }}
          >
            Please upload any necessary documentation that you would like to
            accompany the enrollment record
          </Paragraph>
        </Box>

        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          style={{
            textAlign: "center",
            // border: "2px dashed #ccc",
            borderRadius: "20px",
            padding: "20px",
          }}
        >
          <input
            type="file"
            name="documents"
            multiple
            onChange={handleImageChange}
            style={{ display: "none" }}
            id="file-input"
          />
          <label
            htmlFor="file-input"
            style={{
              cursor: "pointer",
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            }}
          >
            <img
              src={values?.documents?.length > 0 ? UploadImageTwo : UploadImage}
              alt="upload"
            />
          </label>
        </div>
        <div>
          {values?.documents?.map((image: any, index: any) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                margin: "5px 0",
                padding: "5px",
                "&:hover": {
                  backgroundColor: "#EEEDED",
                  cursor: "pointer",
                },
              }}
            >
              <Box
                sx={{
                  color: "#1ECC69",
                  fontSize: "20px",
                  width: "20px",
                  height: "20px",
                }}
              >
                <GoDotFill />
              </Box>
              <Box
                sx={{
                  width: "200px",
                }}
              >
                {truncateFileName(image?.name, 30)}
              </Box>
              <Box>{bytesToKilobytes(image?.size).toFixed(2)} KB</Box>
              {/* <button type="button" onClick={() => handleRemoveImage(index)}>
                Remove
              </button> */}
            </Box>
          ))}
        </div>
      </Box>
    </>
  );
};

DocumentUpload.label = "Document Upload";
DocumentUpload.initialValues = {
  documents: [],
};

DocumentUpload.validationSchema = Yup.object().shape({
  documents: Yup.array(),
});

export default DocumentUpload;
