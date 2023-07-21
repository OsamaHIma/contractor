import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendDataAsync } from "../../../../Redux/Slices/sendData/sendDataSlice";
import Notify from "../../../Notify";
import Footer from "./Footer/Footer";
import AddIcon from "@mui/icons-material/Add";
import expenseIcon from "/icons/expense.png";
import AddImgComponent from "./AddImg/AddImgComponent";
import { ToastContainer } from "react-toastify";

const ContentExpense = () => {
  const [load, setLoad] = useState(false);
  const [title, setTitle] = useState("");
  const [describe, setDescribe] = useState("");
  const [date, setDate] = useState("");
  const [client_id, setClient_id] = useState("");

  const dispatch = useDispatch();
  const data = useSelector((state) => state.sendData);

  const HandleClick = async () => {
    if (title && describe && date && client_id) {
      await dispatch(
        sendDataAsync([
          "expense",
          {
            title,
            describe,
            data,
            client_id,
          },
        ])
      );
      setLoad(true);
    } else {
      Notify("please fill your data ", "warning");
    }
  };

  useEffect(() => {
    if (load) {
      if (data.loading === false) {
        if (data.status === 200) {
          Notify(data.data.massage, "success");
          setLoad(false);
        } else if (data.status === 400) {
          Notify("Error Please Try Again Later", "error");
        }
      }
    }
  }, [load, data]);

  return (
    <div className="invoice bg-dark-slate text-white mt-10 !border-t-8 border-t-dark-green rounded-t-md border-gray-300 border-1">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="border-b md:border-r border-white pl-3 pr-5 pb-8 py-3">
          <div>
            <div className="flex items-center justify-start">
              <div className="me-2">
                <img src={expenseIcon} alt="" />
              </div>
              <div className="text-2xl font-bold">Title:</div>
            </div>
            <div className="my-3">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="rounded border border-1 border-gray-300 py-2 px-3 w-full bg-dark-slate placeholder-slate-300"
                placeholder="Title Expense"
              />
              <p className="text-white-opacity text-sm">
                Do not exceed 20 characters when entering the title expense
              </p>
            </div>
            <div>
              <div className="flex gap-3 items-center mb-3 justify-start">
                <div>
                  <label>Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="rounded border border-1 border-gray-300 py-2 px-3 w-full bg-dark-slate placeholder-slate-300"
                  />
                </div>

                <div>
                  <label>Time</label>
                  <input
                    type="time"
                    className="rounded border border-1 border-gray-300 py-2 px-3 w-full bg-dark-slate placeholder-slate-300"
                  />
                </div>
              </div>
              <div className="flex gap-3 items-center mb-3 justify-start">
                <div>
                  <label>Total expense</label>
                  <input
                    type="number"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="rounded border border-1 border-gray-300 py-2 px-3 w-full bg-dark-slate placeholder-slate-300"
                  />
                </div>
              </div>

              <div className="flex gap-3 items-center justify-start">
                <div>
                  <label>Reimbuse to</label>
                  <select
                    value={client_id}
                    onChange={(e) => setClient_id(e.target.value)}
                    className="rounded border border-1 border-gray-300 py-2 px-3 w-full bg-dark-slate placeholder-slate-300"
                  >
                    <option value="">None</option>
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </select>
                </div>

                <div>
                  <label>Accounting code</label>
                  <input
                    type="text"
                    value={client_id}
                    onChange={(e) => setClient_id(e.target.value)}
                    className="rounded border border-1 border-gray-300 py-2 px-3 w-full bg-dark-slate placeholder-slate-300"
                  />
                </div>
              </div>
            </div>
            <div className="my-4">
              <div className="text-2xl font-bold">Multi Image:</div>
              <AddImgComponent />
              <p className="mt-2">Choice of many pictures and document</p>
            </div>
          </div>
        </div>

        <div className="pb-8 p-3">
          <div className="mb-16">
            <h3 className="text-color text-2xl font-bold mb-4">
              Assign this expense to
            </h3>

            <div className="flex flex-col gap-3">
              {["project", "task", "work group", "employee"].map(
                (item, index) => (
                  <button
                    className="flex items-center gap-2 py-2 px-4 bg-dark-green hover:bg-dark-green/80 transition-all rounded-sm"
                    key={index}
                  >
                    <AddIcon
                      sx={{
                        fontSize: "1.7rem",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    />
                    <p className="capitalize font-semibold mb-0">{item}</p>
                  </button>
                )
              )}
            </div>
          </div>

          <h4 className="text-color text-2xl font-bold mb-4">Description</h4>

          <div className="mb-4">
            <textarea
              onChange={(e) => setDescribe(e.target.value)}
              value={describe}
              className="rounded border border-1 border-gray-300 py-2 px-3 w-full bg-dark-slate placeholder-slate-300 min-h-[240px] max-h-[240px]"
            ></textarea>

            <p className="text-white-50 text-sm">
              Do not exceed 100 characters when entering the item name
            </p>
          </div>
        </div>
      </div>

      {/* <Footer HandleClick={HandleClick} /> */}
      <div className="flex justify-between items-center flex-wrap border-t border-white py-4 px-3">
        <div>
          <button
            onClick={HandleClick}
            className="border border-white rounded-lg text-white font-bold py-2 px-4 hover:opacity-70"
          >
            Cancel
          </button>
        </div>
        <div>
          <button
            onClick={HandleClick}
            className="bg-transparent border-2 border-dark-green rounded-lg text-dark-green font-bold py-2 px-4 mr-2 hover:opacity-70"
          >
            Save And Create Another
          </button>
          <button
            onClick={HandleClick}
            className="bg-dark-green border-2 border-white rounded-lg text-white font-semibold py-2 px-4"
          >
            Save Expense
          </button>
        </div>
      </div>
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default ContentExpense;
