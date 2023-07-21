import React, { useEffect } from "react";
import iconDropImg from "../../../../Icons/IconDropimg.png";
import "./bottom.css";
import { Add } from "@mui/icons-material";
import Schedule from "../Footer/Schedule";

const CenterAddNew = ({
  setImg,
  img,
  setFile,
  file,
  setName,
  name,
  budget,
  setBudget,
  start_time , setStart_time , end_time , setEnd_time , setSubtotal , subtotal
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
              <p className="text-dark-green">click to browse</p>
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
                className="w-full border border-white rounded-lg py-2 px-3 dark:text-white placeholder-white bg-transparent outline-none focus:border-dark-green"
                placeholder="Name"
                type="text"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="dark:text-slate-100 mb-3">
                  total price of project
                </label>
                <input
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full border border-white rounded-lg p-3 dark:text-white placeholder-white bg-transparent outline-none focus:border-dark-green"
                  placeholder="Total budget $"
                  type="number"
                  min={1}
                />
              </div>
              <div>
                <label className="dark:text-slate-100 mb-3">Total cost</label>
                <input
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full border border-white rounded-lg p-3 dark:text-white placeholder-white bg-transparent outline-none focus:border-dark-green"
                  placeholder="Total cost $"
                  type="number"
                  min={1}
                />
              </div>
            </div>
            <div className="flex justify-end relative mt-5">
              <p className="bg-dark-green pl-8 pr-2 py-3 absolute -left-10 top-0">
                expected profit for project
              </p>

              <input
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="border flex-[0.5] border-white rounded-lg p-3 dark:text-white placeholder-dark-green bg-transparent outline-none focus:border-dark-green"
                placeholder="profit $"
                type="number"
                min={1}
              />
            </div>
          </div>
          <div className="mt-8 mx-10">
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
      <section className="flex flex-col gap-6">
        <div className="w-full min-h-[55vh] bg-dark-slate mt-6 border-t-[5px] border-dark-green py-7 rounded-t-md">
          <div className="space-y-6">
            <button className="flex items-center w-full mt-10 gap-2 py-2 px-4 bg-dark-green hover:bg-dark-green/80 transition-all rounded-sm">
              <Add
                sx={{ fontSize: "1.7rem", color: "white", fontWeight: "bold" }}
              />
              <p className="capitalize font-semibold mb-0">Add CLIENT</p>
            </button>
          </div>
        </div>

        <Schedule start_time={start_time} setStart_time={setStart_time} end_time={end_time} setEnd_time={setEnd_time} title={'Schedule:'} inputText={true} active={"Schedule later"} />
      </section>
    </div>
  );
};

export default CenterAddNew;
