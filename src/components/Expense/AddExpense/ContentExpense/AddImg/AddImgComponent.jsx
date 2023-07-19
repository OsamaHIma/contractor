import React, { useEffect, useState } from "react";
import iconDropImg from "../../../../../Icons/IconDropimg.png";

function AddImgComponent() {
  const [file, setFile] = useState(null);
  const [img, setImg] = useState("");

  const handleChange = (file) => {
    if (file) {
      setFile(file);
    }
  };

  useEffect(() => {
    if (file) {
      setImg(URL.createObjectURL(file?.target?.files[0]));
    }
  }, [file]);

  const NoImg = () => {
    return (
      <div className="h-60">
        <label htmlFor="file" className="mt-3">
          <input
            id="file"
            type="file"
            onChange={handleChange}
            className="hidden"
          />
          <div className="w-72 h-full border-2 border-dashed border-dark-green p-6 rounded-lg flex flex-col justify-center items-center cursor-pointer">
            <div className="my-6 cursor-pointer">
              <img src={iconDropImg} alt="" />
            </div>
            <div className="text-center">
              <span className="text-sm font-bold text-gray-400 cursor-pointer">
                Drop your image here or select{" "}
                <span className="text-dark-green">click to browse</span>
              </span>
            </div>
          </div>
        </label>
      </div>
    );
  };

  return (
    <div className="flex items-center">
      {img ? (
        <div
          className="h-48 m-8 border-2 border-white rounded-lg cursor-pointer"
          onClick={() => setImg("")}
        >
          <img src={img} alt="" className="w-full h-full object-contain" />
        </div>
      ) : (
        NoImg()
      )}
    </div>
  );
}

export default AddImgComponent;
