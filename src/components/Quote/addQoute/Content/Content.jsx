import { ToastContainer, toast } from "react-toastify";
import logoIcon from "../../../../Icons/Logo2.png";
import "react-toastify/dist/ReactToastify.css";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Delete, Edit } from "@mui/icons-material";
import { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
const Content = ({
  HandleClick,
  title,
  setTitle,
  subtotal,
  setSubtotal,
  discount,
  setDiscount,
  type_discount,
  setType_discount,
  tax_name,
  setTax_name,
  tax_describe,
  setTax_describe,
  tax_rate,
  setTax_rate,
  total,
  setTotal,
  note,
  setNote,
}) => {
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
      <div className="my-6">
        <SignatureCanvas
          ref={canvasRef}
          penColor="#7DB00E"
          backgroundColor="white"
          canvasProps={{
            width: 450,
            height: 200,
            className: "sigCanvas mx-auto",
          }}
        />

        <div className="flex justify-between items-center mt-3">
          <button
            onClick={handleClear}
            className="bg-transparent rounded-md border-gray-200 border-1 px-2 py-1 text-dark-green"
          >
            Clear
          </button>
          <button
            onClick={handleSave}
            className="bg-dark-green rounded-md border-gray-200 border-1 px-2 py-1 text-white"
          >
            Save
          </button>
        </div>
      </div>
    );
  }
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);
  const [description, setDescription] = useState("");
  const [data, setData] = useState([
    { description: "Item 1", rate: 10, quantity: 3, total: 100, tax:"14" },
    { description: "Item 2", rate: 20, quantity: 4, total: 200, tax:"14" },
    { description: "Item 3", rate: 30, quantity: 1, total: 300, tax:"14" },
    { description: "Item 4", rate: 40, quantity: 11, total: 201, tax:"14" },
  ]);
  const [rate, setRate] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [tax, setTax] = useState('14');

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
          tax,
          total: rate * quantity,
        };
        return newData;
      });
    } else {
      const newLineItem = {
        description,
        rate,
        quantity,
        tax,
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

  const [uploadedImages, setUploadedImages] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileInputChange = (event) => {
    const files = event.target.files;
    const uploadedFiles = [...uploadedImages];

    for (let i = 0; i < files.length; i++) {
      uploadedFiles.push(files[i]);
    }

    setUploadedImages(uploadedFiles);
  };

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-4">
        <h2 className="font-bold">New Quote</h2>
        <h2 className="font-bold">#Quote ID</h2>
      </div>
      <div className="w-full min-h-[55vh] bg-dark-slate mt-4 border-t-[10px] border-dark-green py-7 px-3 rounded-t-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="left-col">
            <h3 className="text-center">#company name</h3>
            <div className="flex justify-between items-center">
              <div>
                <p>company logo</p>
                <img src={logoIcon} alt="logo" className="block w-28" />
              </div>
              <ul className="mt-3">
                <li className="text-xl">#company phone</li>
                <li className="text-xl">#company email</li>
                <li className="text-xl">#company address</li>
                <li className="text-xl">#company status</li>
                <li className="text-xl">#company zip code</li>
              </ul>
            </div>
            <div className="my-6">
              <div>
                <p className="text-gray-300 font-semibold">Quote title</p>
                <input
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                  className="w-full border border-white rounded-lg py-2 px-3 dark:text-white placeholder-white bg-transparent outline-none focus:border-dark-green"
                  placeholder="Quote title"
                  type="text"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                <div>
                  <label className="dark:text-slate-100 mb-2">
                    Sending Date
                  </label>
                  <input
                    // value={budget}
                    // onChange={(e) => setBudget(e.target.value)}
                    className="w-full border border-white rounded-lg px-3 py-2 dark:text-white placeholder-white bg-transparent outline-none focus:border-dark-green"
                    type="date"
                  />
                </div>
                <div>
                  <label className="dark:text-slate-100 mb-2">
                    Payment due
                  </label>
                  <select
                    // value={budget}
                    // onChange={(e) => setBudget(e.target.value)}
                    className="w-full border border-white rounded-lg px-3 py-2 dark:text-white placeholder-white bg-transparent outline-none focus:border-dark-green"
                    placeholder="Total cost $"
                    type="number"
                    min={1}
                  >
                    <option value="monday">monday</option>
                    <option value="monday">monday</option>
                    <option value="monday">monday</option>
                    <option value="monday">monday</option>
                  </select>
                </div>
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
            <Table className="max-w-full mt-9 !border-y-0">
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
                    Tax
                  </TableCell>
                  <TableCell className="px-4 py-3 text-white !font-bold text-center">
                    Total
                  </TableCell>
                  {/* <TableCell className="px-4 py-3 text-white !font-bold text-center">
                    Edit
                  </TableCell>
                  <TableCell className="px-4 py-3 text-white !font-bold text-center">
                    Delete
                  </TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="px-4 !py-4 text-center !text-slate-100  !border-l-0">
                      {row.description}
                    </TableCell>
                    <TableCell className="px-4 !py-4 text-center !text-slate-100 border">
                      <span className="py-2 px-4 rounded border border-gray-200">
                        {row.rate}
                      </span>
                    </TableCell>
                    <TableCell className="px-4 !py-4 text-center !text-slate-100 border">
                      <span className="py-2 px-4 rounded border border-gray-200">
                        {row.quantity}
                      </span>
                    </TableCell>
                    <TableCell className="px-4 !py-4 text-center !text-slate-100 border">
                      <span className="py-2 px-4 rounded border border-gray-200">
                        {row.tax}%
                      </span>
                    </TableCell>
                    <TableCell className="px-4 !py-4 text-center !text-slate-100 !border-r-0">
                      <span className="py-2 px-4 rounded border border-gray-200">
                        ${row.total}
                      </span>
                    </TableCell>
                    {/* <TableCell className="text-center">
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
                    </TableCell> */}
                  </TableRow>
                ))}
                <TableCell className="px-4 !py-0 text-center !text-slate-100 !border-l-0">
                  Note
                </TableCell>
                <TableCell  colSpan={4} className="text-center !text-slate-100 !py-0 border">
                  <textarea
                    placeholder="note ..."
                    className="w-full p-2 px-3 bg-transparent outline-none text-white"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </TableCell>
              </TableBody>
            </Table>

            <div className="mt-16 mb-10 w-full">
              <p className="text-xl">message to client</p>
              <textarea
                placeholder="messages ..."
                className="w-full p-2 px-3 bg-transparent rounded-md border-1 border-gray-200/75 outline-none text-white"
                value={title}
                cols={7}
                rows={7}
                onChange={(e) => setTitle(e.target.value)}
              />
              <p className="text-xs mt-2 text-gray-400">
                Do not exceed 100 characters when entering the item name
              </p>
            </div>

            <div className="flex mt-4">
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

                <div className="mb-2 text-3xl flex gap-5 justify-between">
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
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 font-bold mb-2"
                            htmlFor="quantity"
                          >
                            Tax
                          </label>
                          <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="quantity"
                            type="number"
                            min={1}
                            value={tax}
                            onChange={(e) => setTax(e.target.value)}
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
          <div className="right-col">
            <button
              className="flex items-center gap-2 py-2 px-4 bg-dark-green hover:bg-dark-green/80 transition-all w-full rounded-sm"
              onClick={handleAddLineItem}
            >
              <AddIcon
                sx={{ fontSize: "1.7rem", color: "white", fontWeight: "bold" }}
              />
              <p className="capitalize font-semibold mb-0">Add Client</p>
            </button>
            <div className="flex justify-end items-center">
              <ul className="mt-3">
                <li className="text-xl">#company phone</li>
                <li className="text-xl">#company email</li>
                <li className="text-xl">#company address</li>
                <li className="text-xl">#company status</li>
                <li className="text-xl">#company zip code</li>
              </ul>
            </div>

            <div className="flex flex-col items-center mt-4">
              <button
                className="flex items-center gap-2 py-2 px-4 bg-dark-green hover:bg-dark-green/80 transition-all w-full rounded-sm"
                onClick={() => fileInputRef.current.click()}
              >
                <AddIcon
                  sx={{
                    fontSize: "1.7rem",
                    color: "white",
                    fontWeight: "bold",
                  }}
                />
                <p className="capitalize font-semibold mb-0">Attachments</p>
              </button>
              <input
                type="file"
                multiple
                accept="image/*"
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={handleFileInputChange}
              />
              <div className="grid grid-cols-3 gap-4 mt-6">
                {uploadedImages.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`attachment-${index}`}
                      className="w-full h-full object-cover rounded"
                    />
                    <button
                      onClick={() => {
                        const updatedImages = [...uploadedImages];
                        updatedImages.splice(index, 1);
                        setUploadedImages(updatedImages);
                      }}
                      className="absolute top-0 right-0 bg-white rounded-full p-1 hover:bg-red-500 hover:text-white focus:outline-none transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="my-14">
              <button
                className="flex items-center gap-2 py-2 px-4 bg-dark-green hover:bg-dark-green/80 transition-all w-full rounded-sm"
                onClick={handleAddLineItem}
              >
                <AddIcon
                  sx={{
                    fontSize: "1.7rem",
                    color: "white",
                    fontWeight: "bold",
                  }}
                />
                <p className="capitalize font-semibold mb-0">Owner signature</p>
              </button>
              {Signature()}
            </div>
            <div className="">
              <button
                className="flex items-center gap-2 py-2 px-4 bg-dark-green hover:bg-dark-green/80 transition-all w-full rounded-sm"
                onClick={handleAddLineItem}
              >
                <AddIcon
                  sx={{
                    fontSize: "1.7rem",
                    color: "white",
                    fontWeight: "bold",
                  }}
                />
                <p className="capitalize font-semibold mb-0">
                  client signature
                </p>
              </button>
              {Signature()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
