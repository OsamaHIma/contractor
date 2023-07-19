import React, { useEffect, useState } from "react";
import iconDropImg from "../../../../../Icons/IconDropimg.png";

function Notes() {
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
      <div className="h-60 mt-5 mb-20">
        <label htmlFor="file" >
          <input id="file" type="file" onChange={handleChange} className="hidden" />
          <div
            className="w-72 h-full mt-6 border-2 border-dashed border-dark-green p-6 rounded-lg flex flex-col justify-center items-center cursor-pointer"
          >
            <div className="my-6 cursor-pointer">
              <img src={iconDropImg} alt="" />
            </div>
            <div className="text-center">
              <span className="text-sm font-bold text-gray-400 cursor-pointer">
                Drop your image here or select <span className="text-green-500">click to browse</span>
              </span>
            </div>
          </div>
        </label>
      </div>
    );
  };

  return (
    <div className=" md:px-4 w-full">
      <div className="bg-dark-slate border-t-2 border-dark-green text-white p-6 mb-6">
        <h3 className="text-lg font-bold mb-2">Notes & Attachments:</h3>

        <div className="mt-2">
          <input
            className="w-full bg-gray-800 border border-gray-600 rounded-lg p-2 text-white"
            placeholder="Type here"
          />
        </div>

        <div className="flex items-center justify-center">
          {img ? (
            <div className="w-72 h-48 m-8 border-2 border-white rounded-lg cursor-pointer" onClick={() => setImg("")}>
              <img src={img} alt="" className="w-full h-full object-contain" />
            </div>
          ) : (
            NoImg()
          )}
        </div>
      </div>
    </div>
  );
}

export default Notes;