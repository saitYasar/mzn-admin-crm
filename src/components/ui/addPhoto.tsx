import React, { useState } from "react";

const AddPhoto = ({ record }: { record: any }) => {
  const uploadUrl = "https://api.mznekip.com/upload/image"; // Replace with your API URL
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Convert image to Base64 format
  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // Base64 veriyi dönüştürdükten sonra ön eki temizliyoruz
        const base64String = (reader.result as string).replace(
          /^data:image\/\w+;base64,/,
          ""
        );
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file)); // Show a preview of the image
    }
  };

  const handleUpload = async () => {
    if (!image) {
      setError("Please select an image to upload.");
      return;
    }

    try {
      const base64Image = await convertToBase64(image);
      const response = await fetch(uploadUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ base64Image: base64Image }),
      });
      if (response.ok) {
        const data = await response.json();
        await fetch(`https://api.mznekip.com/users/update?id=${record.id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...record,
            image: data.imageUrl,
          }),
        })
          .then(() => {
            alert("Başarılı bir şekilde güncellendi.");
          })
          .catch((error) => {
            setError("An error occurred while updating the user.");
          });
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Failed to upload the image.");
      }
    } catch (error) {
      setError("An error occurred while uploading the image.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Upload a Photo</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "block", marginBottom: "10px" }}
      />
      {preview && (
        <div>
          <h3>Preview:</h3>
          <img src={preview} alt="Preview" style={{ maxWidth: "100%" }} />
        </div>
      )}
      <button
        onClick={handleUpload}
        style={{ padding: "10px 20px", marginTop: "10px" }}
      >
        Upload
      </button>
      {uploadedUrl && (
        <div>
          <h3>Uploaded URL:</h3>
          <a href={uploadedUrl} target="_blank" rel="noopener noreferrer">
            {uploadedUrl}
          </a>
        </div>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default AddPhoto;
