import * as Yup from "yup";
import { FormikProps } from "formik";

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

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{
        textAlign: "center",
        border: "2px dashed #ccc",
        borderRadius: "4px",
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
      <label htmlFor="file-input" style={{ cursor: "pointer" }}>
        Drag and drop files here or click to upload
      </label>

      <div>
        {values?.documents?.map((image: any, index: any) => (
          <div key={index}>
            {image.name}
            <button type="button" onClick={() => handleRemoveImage(index)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
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
