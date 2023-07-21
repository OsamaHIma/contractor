import { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

function Signature() {
  const canvasRef = useRef(null);

  const handleClear = () => {
    canvasRef.current.clear();
  };
  const handleSave = () => {
    const canvas = canvasRef.current;
    const signatureImage = canvas.toDataURL(); // Convert canvas drawing to image data
    const formData = new FormData();
    formData.append("signature", signatureImage);
    // Send the signature image file to the server
    fetch("/api/uploadSignature", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        // Handle response from server
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <SignatureCanvas
        ref={canvasRef}
        penColor="#7DB00E"
        backgroundColor="white"
        canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
      />
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}

export default Signature;
