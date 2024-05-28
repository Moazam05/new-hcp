import { useState } from "react";

const DocumentUpload = () => {
  const [imageList, setImageList] = useState<any[]>([]);

  //   dont just overwrite the imageList, append to it
  const handleImageChange = (e: any) => {
    // setImageList(e.target.files);
    setImageList([...imageList, ...e.target.files]);
    // file should be null
    e.target.value = null;
  };

  const handleRemoveImage = (index: any) => {
    const newList = Array.from(imageList);
    newList.splice(index, 1);
    setImageList(newList);
  };

  const handleDrop = (event: any) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    setImageList((imageList) => [...imageList, ...droppedFiles]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{
        textAlign: "center",
      }}
    >
      <input
        type="file"
        name="file"
        placeholder=""
        multiple
        onChange={handleImageChange}
      />

      <div>
        {imageList &&
          Array.from(imageList).map((image: any, index: any) => (
            // <img key={index} src={URL.createObjectURL(image)} alt="" />
            <div key={index}>
              {image?.name}
              <button onClick={() => handleRemoveImage(index)}>Remove</button>
            </div>
          ))}
      </div>
    </div>
  );

  //   return <div>DocumentUpload</div>;
};

export default DocumentUpload;
