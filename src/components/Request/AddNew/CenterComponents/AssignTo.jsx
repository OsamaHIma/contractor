import AddIcon from "@mui/icons-material/Add";
import React from "react";

const AssignTo = ({ instruction, setInstruction }) => {
  return (
    <div className="bg-dark-slate border-t-2 border-dark-green text-white p-6 mb-6">
      <div className="text-3xl font-semibold mb-4">Assigning it to:</div>

      <div className="flex flex-col gap-3">
        {["project", "task", "work group", "employee"].map((item, index) => (
          <button
            className="flex items-center gap-2 py-2 px-4 bg-dark-green hover:bg-dark-green/80 transition-all rounded-sm"
            key={index}
          >
            <AddIcon
              sx={{ fontSize: "1.7rem", color: "white", fontWeight: "bold" }}
            />
            <p className="capitalize font-semibold mb-0">{item}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AssignTo;
