import React, { useEffect } from "react";
import iconDropImg from "../../../../Icons/IconDropimg.png";
import "./bottom.css";
const CenterAddNew = ({
  setImg,
  img,
  setFile,
  file,
  setName,
  name,
  budget,
  setBudget,
}) => {
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
      <div
        htmlFor="file"
        className="h-44 mt-5 flex flex-col justify-center items-center border-2 border-dashed border-dark-green rounded-lg cursor-pointer"
      >
        <label htmlFor="file">
          <input
            id="file"
            type="file"
            onChange={handleChange}
            className="hidden"
          />
          <div className="w-64">
            <img src={iconDropImg} alt="" className="mb-4 mx-auto" />
            <div className="text-center">
              <p className="mb-2 font-bold dark:text-slate-100">
                Drop your image here or select
              </p>
              <p className="text-green-500">click to browse</p>
            </div>
          </div>
        </label>
      </div>
    );
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
      <div className="w-full min-h-[55vh] bg-dark-slate mt-6 border-t-[10px] border-dark-green py-7 px-10 rounded-t-md">
        <section>
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-3 text-slate-200">
                Project details:
              </h2>
              <p className="text-gray-300 font-semibold">project name</p>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-white rounded-lg py-2 px-3 dark:text-white placeholder-white bg-transparent outline-none focus:border-green-500"
                placeholder="Name"
                type="text"
              />
            </div>
            <div>
              <input
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full border border-white rounded-lg p-3 dark:text-white placeholder-white bg-transparent outline-none focus:border-green-500"
                placeholder="Total budget"
                type="number"
              />
            </div>
          </div>
          <div className="mt-8 space-y-6">
            <h2 className="text-2xl font-bold mb-3">Project image:</h2>
            {img ? (
              <div
                className="max-w-xs h-52 border-2 border-white rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setImg("")}
              >
                <img className="w-full h-full object-cover" src={img} alt="" />
              </div>
            ) : (
              NoImg()
            )}
          </div>
        </section>
      </div>
      <div className="w-full min-h-[55vh] bg-dark-slate mt-6 border-t-[10px] border-dark-green py-7 px-10 rounded-t-md">
        <section>
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-3 dark:text-slate-200">
                Project details:
              </h2>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-white rounded-lg p-3 dark:text-white placeholder-white bg-transparent outline-none focus:border-green-500"
                placeholder="Name"
                type="text"
              />
            </div>
            <div>
              <input
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full border border-white rounded-lg p-3 dark:text-white placeholder-white bg-transparent outline-none focus:border-green-500"
                placeholder="Total budget"
                type="number"
              />
            </div>
          </div>
          <div className="mt-8 space-y-6">
            <h2 className="text-2xl font-bold mb-3">Project image:</h2>
            {img ? (
              <div
                className="max-w-xs h-52 border-2 border-white rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setImg("")}
              >
                <img className="w-full h-full object-cover" src={img} alt="" />
              </div>
            ) : (
              NoImg()
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CenterAddNew;
