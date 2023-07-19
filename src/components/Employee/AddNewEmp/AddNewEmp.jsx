import React, { useEffect, useState } from "react";
import "./AddNewEmp.css";
import useEmp from "../useEmp";
import BackToItems from "../../../Icons/BackToItems.png";
import iconDropImg from "../../../Icons/IconDropimg.png";
import { ExpandMore } from "@mui/icons-material";
import { Checkbox, FormControlLabel } from "@mui/material";

function AddNewEmp() {
  const { HandleAddCloseEmp } = useEmp();
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
      <div className="h-60 mb-20">
        <p>Employee image:</p>
        <label htmlFor="file">
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
                <span className="text-green-500">click to browse</span>
              </span>
            </div>
          </div>
        </label>
      </div>
    );
  };

  return (
    <section className="ADD-Emp absolute h-full w-0 top-0 right-0 bottom-0 z-2 bg-[#10394A] transition-all duration-[800] overflow-hidden">
      <div className="text-white">
        <div className="flex justify-between items-center">
          <div onClick={HandleAddCloseEmp} className="cursor-pointer">
            <img src={BackToItems} alt="" />
          </div>
        </div>
        <div className="flex justify-between"></div>
      </div>
      <form className="grid grid-cols-1 gap-4 lg:grid-cols-2 mt-6">
        <div className="right-col">
          <h4 className="text-4xl font-bold text-slate-200 mb-4">
            New Employee
          </h4>
          <div className="p-4 w-full bg-dark-slate text-white border-t-2 border-dark-green">
            <h3 className="text-lg font-bold">Employee Information</h3>
            <div className="flex items-center justify-center">
              {img ? (
                <div
                  className="w-72 h-48 m-8 border-2 border-white rounded-lg cursor-pointer"
                  onClick={() => setImg("")}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                NoImg()
              )}
            </div>

            <form action="" className="flex flex-col gap-3">
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-md mb-2 font-bold capitalize "
                >
                  Employee Name
                </label>
                <input
                  type="text"
                  placeholder="Employee Name"
                  id="name"
                  className={`w-full rounded-md px-4 py-2 border-2 border-gray-400 outline-gray-200 bg-dark-slate placeholder:text-slate-200 `}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-md mb-2 font-bold capitalize "
                >
                  phone number
                </label>
                <input
                  type="tel"
                  placeholder="phone number"
                  id="phone_number"
                  className={`w-full rounded-md px-4 py-2 border-2 border-gray-400 outline-gray-200 bg-dark-slate placeholder:text-slate-200 `}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-md mb-2 font-bold capitalize "
                >
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="E-mail"
                  id="email"
                  className={`w-full rounded-md px-4 py-2 border-2 border-gray-400 outline-gray-200 bg-dark-slate placeholder:text-slate-200 `}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-md mb-2 font-bold capitalize "
                >
                  password
                </label>
                <input
                  type="password"
                  placeholder="password"
                  id="password"
                  className={`w-full rounded-md px-4 py-2 border-2 border-gray-400 outline-gray-200 bg-dark-slate placeholder:text-slate-200 `}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-md mb-2 font-bold capitalize "
                >
                  date of birth
                </label>
                <input
                  type="date"
                  placeholder="date of birth"
                  id="name"
                  className={`w-full rounded-md px-4 py-2 border-2 border-gray-400 outline-gray-200 bg-dark-slate placeholder:text-slate-200 `}
                />
              </div>
            </form>
          </div>
        </div>

        <div className="left-col flex flex-col gap-4">
          <h4 className="text-4xl font-bold text-slate-200">#ID employee</h4>

          <div className="p-4 w-full bg-dark-slate text-white border-t-2 border-dark-green">
            <h3 className="text-lg font-bold">Employee status</h3>
            <div className="relative my-3 w-full">
              <select
                name=""
                className=" bg-dark-green text-slate-200 rounded-md py-2 pl-4 appearance-none outline-none w-full"
              >
                <option value="project" className="capitalize">
                  project
                </option>
                <option value="task" className="capitalize">
                  task
                </option>
                <option value="work_group" className="capitalize">
                  work group
                </option>
                <option value="employee" className="capitalize">
                  employee
                </option>
              </select>
              <div className="absolute right-0 top-1 px-2 pointer-events-none">
                <ExpandMore className="text-slate-200" />
              </div>
            </div>

            <FormControlLabel
              control={
                <Checkbox
                  // checked={rememberMe}
                  // onChange={(e) => setRememberMe(e.target.checked)}
                  name="rememberMe"
                  color="primary"
                />
              }
              sx={{ color: "#fff" }}
              label="Remember Me"
            />

            <h3 className="text-lg font-bold mt-8">Profession name</h3>
            <div className="relative my-3 w-full">
              <select
                name=""
                className=" bg-dark-green text-slate-200 rounded-md py-2 pl-4 appearance-none outline-none w-full"
              >
                <option value="project" className="capitalize">
                  project
                </option>
                <option value="task" className="capitalize">
                  task
                </option>
                <option value="work_group" className="capitalize">
                  work group
                </option>
                <option value="employee" className="capitalize">
                  employee
                </option>
              </select>
              <div className="absolute right-0 top-1 px-2 pointer-events-none">
                <ExpandMore className="text-slate-200" />
              </div>
            </div>
          </div>

          <div className="p-4 w-full bg-dark-slate text-white border-t-2 border-dark-green">
            <h3 className="text-lg font-bold">Financial information</h3>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-md mb-2 font-bold capitalize "
                >
                  Hourly salary
                </label>
                <input
                  type="number"
                  placeholder="Hourly salary"
                  id="hourly_salary"
                  name="hourly_salary"
                  className={`w-full rounded-md px-4 py-2 border-2 border-gray-400 outline-gray-200 bg-dark-slate placeholder:text-slate-200 `}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-md mb-2 font-bold capitalize "
                >
                  total salary
                </label>
                <input
                  type="number"
                  placeholder="total_salary"
                  id="total salary"
                  className={`w-full rounded-md px-4 py-2 border-2 border-gray-400 outline-gray-200 bg-dark-slate placeholder:text-slate-200 `}
                />
              </div>
              <h3>Working Hours</h3>

              <div className="relative w-full">
                <select
                  name=""
                  className=" bg-dark-green text-slate-200 rounded-md py-2 pl-4 appearance-none outline-none w-full"
                >
                  <option value="project" className="capitalize">
                    project
                  </option>
                  <option value="task" className="capitalize">
                    task
                  </option>
                  <option value="work_group" className="capitalize">
                    work group
                  </option>
                  <option value="employee" className="capitalize">
                    employee
                  </option>
                </select>
                <div className="absolute right-0 top-1 px-2 pointer-events-none">
                  <ExpandMore className="text-slate-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="p-4 w-full bg-dark-slate text-white border-t-2 border-dark-green mt-5">
        <h3 className="text-lg font-bold">Table of staff</h3>
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-3 items-center gap-8">
            <p className="mb-0">Saturday</p>
            <input
              type="number"
              placeholder="Start Time"
              id="start_time"
              className={`w-full rounded-md px-4 py-2 border-2 border-gray-400 outline-gray-200 bg-dark-slate placeholder:text-slate-200 `}
            />
            <input
              type="number"
              placeholder="End Time"
              id="end_time"
              className={`w-full rounded-md px-4 py-2 border-2 border-gray-400 outline-gray-200 bg-dark-slate placeholder:text-slate-200 `}
            />
          </div>
          <div className="grid grid-cols-3 items-center gap-8">
            <p className="mb-0">Sunday</p>
            <input
              type="number"
              placeholder="Start Time"
              id="start_time"
              className={`w-full rounded-md px-4 py-2 border-2 border-gray-400 outline-gray-200 bg-dark-slate placeholder:text-slate-200 `}
            />
            <input
              type="number"
              placeholder="End Time"
              id="end_time"
              className={`w-full rounded-md px-4 py-2 border-2 border-gray-400 outline-gray-200 bg-dark-slate placeholder:text-slate-200 `}
            />
          </div>
          <div className="grid grid-cols-3 items-center gap-8">
            <p className="mb-0">Monday</p>
            <input
              type="number"
              placeholder="Start Time"
              id="start_time"
              className={`w-full rounded-md px-4 py-2 border-2 border-gray-400 outline-gray-200 bg-dark-slate placeholder:text-slate-200 `}
            />
            <input
              type="number"
              placeholder="End Time"
              id="end_time"
              className={`w-full rounded-md px-4 py-2 border-2 border-gray-400 outline-gray-200 bg-dark-slate placeholder:text-slate-200 `}
            />
          </div>
          <div className="grid grid-cols-3 items-center gap-8">
            <p className="mb-0">Tuesday</p>
            <input
              type="number"
              placeholder="Start Time"
              id="start_time"
              className={`w-full rounded-md px-4 py-2 border-2 border-gray-400 outline-gray-200 bg-dark-slate placeholder:text-slate-200 `}
            />
            <input
              type="number"
              placeholder="End Time"
              id="end_time"
              className={`w-full rounded-md px-4 py-2 border-2 border-gray-400 outline-gray-200 bg-dark-slate placeholder:text-slate-200 `}
            />
          </div>
          <div className="grid grid-cols-3 items-center gap-8">
            <p className="mb-0">Wednesday</p>
            <input
              type="number"
              placeholder="Start Time"
              id="start_time"
              className={`w-full rounded-md px-4 py-2 border-2 border-gray-400 outline-gray-200 bg-dark-slate placeholder:text-slate-200 `}
            />
            <input
              type="number"
              placeholder="End Time"
              id="end_time"
              className={`w-full rounded-md px-4 py-2 border-2 border-gray-400 outline-gray-200 bg-dark-slate placeholder:text-slate-200 `}
            />
          </div>
          <div className="grid grid-cols-3 items-center gap-8">
            <p className="mb-0">Thursday</p>
            <input
              type="number"
              placeholder="Start Time"
              id="start_time"
              className={`w-full rounded-md px-4 py-2 border-2 border-gray-400 outline-gray-200 bg-dark-slate placeholder:text-slate-200 `}
            />
            <input
              type="number"
              placeholder="End Time"
              id="end_time"
              className={`w-full rounded-md px-4 py-2 border-2 border-gray-400 outline-gray-200 bg-dark-slate placeholder:text-slate-200 `}
            />
          </div>
          <div className="grid grid-cols-3 items-center gap-8">
            <p className="mb-0">Friday</p>
            <input
              type="number"
              placeholder="Start Time"
              id="start_time"
              className={`w-full rounded-md px-4 py-2 border-2 border-gray-400 outline-gray-200 bg-dark-slate placeholder:text-slate-200 `}
            />
            <input
              type="number"
              placeholder="End Time"
              id="end_time"
              className={`w-full rounded-md px-4 py-2 border-2 border-gray-400 outline-gray-200 bg-dark-slate placeholder:text-slate-200 `}
            />
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default AddNewEmp;
