import React, { useState } from "react";
import { Close, Delete, Edit, ExpandMore } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";

import "./assignIt.css";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { toast } from "react-toastify";

const AssignIt = ({ instruction, setInstruction }) => {
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);
  const [description, setDescription] = useState("");
  const [data, setData] = useState([
    { description: "Item 1", rate: 10, quantity: 3, total: 100 },
    { description: "Item 2", rate: 20, quantity: 4, total: 200 },
    { description: "Item 3", rate: 30, quantity: 1, total: 300 },
    { description: "Item 4", rate: 40, quantity: 11, total: 201 },
  ]);
  const [rate, setRate] = useState(1);
  const [quantity, setQuantity] = useState(1);

  const subTotal = data.reduce((acc, cur) => acc + cur.total, 0);
  const servicePrice = 80;
  const totalQuantity = data.reduce((acc, cur) => acc + cur.quantity, 0);

  const handleAddLineItem = () => {
    setShowModal(true);
    setEditing(false);
    setDescription("");
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setDescription("");
    setRate(0);
    setQuantity(0);
  };

  const handleSaveLineItem = () => {
    // Check if input values are valid
    if (description.trim() === "" || rate <= 0 || quantity <= 0) {
      toast.error("Please enter valid values for all fields.");
      return;
    }

    if (editing) {
      setData((prevData) => {
        const newData = [...prevData];
        newData[editIndex] = {
          description,
          rate,
          quantity,
          total: rate * quantity,
        };
        return newData;
      });
    } else {
      const newLineItem = {
        description,
        rate,
        quantity,
        total: rate * quantity,
      };
      setData([...data, newLineItem]);
    }

    handleCloseModal();
  };
  const handleEditLineItem = (index) => {
    const row = data[index];
    setDescription(row.description);
    setRate(row.rate);
    setQuantity(row.quantity);
    setEditing(true);
    setEditIndex(index);
    setShowModal(true);
  };

  const handleDeleteLineItem = (index) => {
    setData((prevData) => prevData.filter((row, i) => i !== index));
  };

  return (
    <div className="bg-dark-slate border-t-2 border-dark-green text-white p-6 mb-6 w-full">
      <div className="text-3xl font-semibold">Assigning it:</div>
      <div className="relative my-4">
        <select
          name=""
          className="w-[43%] bg-dark-green text-slate-200 rounded-md py-2 pl-4 appearance-none outline-none"
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
        <div className="absolute right-[57%] top-2 px-2 pointer-events-none">
          <ExpandMore className="text-slate-200" />
        </div>
      </div>
      <button
        className="flex items-center gap-2 py-2 px-4 bg-dark-green hover:bg-dark-green/80 transition-all w-full rounded-sm"
        onClick={handleAddLineItem}
      >
        <AddIcon
          sx={{ fontSize: "1.7rem", color: "white", fontWeight: "bold" }}
        />
        <p className="capitalize font-semibold mb-0">Add Line Item</p>
      </button>
      <Table className="w-full mt-9 !border-y-0">
        <TableHead className="bg-dark-green/80">
          <TableRow>
            <TableCell className="px-4 py-3 text-white !font-bold text-center">
              Description
            </TableCell>
            <TableCell className="px-4 py-3 text-white !font-bold text-center">
              Rate
            </TableCell>
            <TableCell className="px-4 py-3 text-white !font-bold text-center">
              Quantity
            </TableCell>
            <TableCell className="px-4 py-3 text-white !font-bold text-center">
              Total
            </TableCell>
            <TableCell className="px-4 py-3 text-white !font-bold text-center">
              Edit
            </TableCell>
            <TableCell className="px-4 py-3 text-white !font-bold text-center">
              Delete
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell className="px-4 !py-6 text-center !text-slate-100  !border-l-0">
                {row.description}
              </TableCell>
              <TableCell className="px-4 !py-6 text-center !text-slate-100 border">
                <span className="py-2 px-4 rounded border border-gray-200">
                  {row.rate}
                </span>
              </TableCell>
              <TableCell className="px-4 !py-6 text-center !text-slate-100 border">
                <span className="py-2 px-4 rounded border border-gray-200">
                  {row.quantity}
                </span>
              </TableCell>
              <TableCell className="px-4 !py-6 text-center !text-slate-100 !border-r-0">
                <span className="py-2 px-4 rounded border border-gray-200">
                  ${row.total}
                </span>
              </TableCell>
              <TableCell className="text-center">
                <button
                  className="btn btn-success !flex items-center gap-2"
                  onClick={() => handleEditLineItem(index)}
                >
                  <span>Edit</span>
                  <Edit />
                </button>
              </TableCell>
              <TableCell className="text-center">
                <button
                  className="btn btn-danger flex gap-2"
                  onClick={() => handleDeleteLineItem(index)}
                >
                  <span>Delete</span>
                  <Delete />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-end mt-4">
        <div className="text-right">
          <div className="mb-2 flex gap-5 justify-between text-lg">
            <span>Sub total:</span>{" "}
            <span className="text-dark-green font-semibold">
              ${subTotal.toFixed(2)}
            </span>{" "}
          </div>
          <div className="mb-2 flex gap-5 justify-between text-lg">
            <span>Service price:</span>{" "}
            <span className="text-dark-green font-semibold rounded border py-1 px-3">
              ${servicePrice.toFixed(2)}
            </span>{" "}
          </div>
          <div className="mb-2 text-3xl flex gap-5">
            <span>Total quantity: </span>
            <span>${(subTotal + servicePrice).toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div
              className="fixed inset-0 bg-black opacity-50 -z-5"
              onClick={handleCloseModal}
            />
            <div className="bg-white z-10 rounded-lg overflow-hidden shadow-xl max-w-lg w-full">
              <div className="bg-dark-green text-white px-6 py-4">
                <div className="font-bold text-2xl">
                  {" "}
                  {editing ? "Edit line item" : "Add line item"}
                </div>
              </div>
              <div className="p-6">
                <form>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="description"
                      type="text"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="rate"
                    >
                      Rate
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="rate"
                      type="number"
                      value={rate}
                      min={1}
                      onChange={(e) => setRate(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="quantity"
                    >
                      Quantity
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="quantity"
                      type="number"
                      min={1}
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      className="bg-dark-green hover:bg-dark-green/80 text-white font-bold py-2 px-4 rounded mr-2"
                      type="button"
                      onClick={handleSaveLineItem}
                    >
                      Save
                    </button>
                    <button
                      className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
                      type="button"
                      onClick={handleCloseModal}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignIt;
