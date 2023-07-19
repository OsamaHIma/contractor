import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function FootAnalysis() {
  const Progress = [
    {
      id: 1,
      progress: "70%",
    },
    {
      id: 2,
      progress: "40%",
    },
    {
      id: 3,
      progress: "60%",
    },
    {
      id: 4,
      progress: "80%",
    },
    {
      id: 5,
      progress: "20%",
    },
  ];

  const data = [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 7800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Aug",
      uv: 3890,
      pv: 5300,
      amt: 2100,
    },
    {
      name: "Sep",
      uv: 1490,
      pv: 2300,
      amt: 2100,
    },
    {
      name: "Oct",
      uv: 7490,
      pv: 2300,
      amt: 2100,
    },
    {
      name: "Nov",
      uv: 4490,
      pv: 8300,
      amt: 2100,
    },
    {
      name: "Des",
      uv: 4490,
      pv: 5300,
      amt: 2100,
    },
  ];

  return (
    <div className="my-3 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="bg-dark-slate rounded-lg py-5 px-3">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-slate-100">Total Revenue</h3>
            <div className="flex items-center">
              <div className="flex items-center mr-4">
                <span
                className="w-3 h-3 bg-indigo-600 rounded-full mx-2"

                ></span>
                <p className="text-sm font-medium text-slate-100">Profit</p>
              </div>

              <div className="flex items-center">
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    background: "#E3E7FC",
                    borderRadius: "50%",
                    margin: "0 5px",
                  }}
                ></span>
                <p className="text-sm font-medium text-slate-100">Loss</p>
              </div>
            </div>
          </div>

          <div className="my-3 flex items-center">
            <span className="font-bold text-xl">$50.4K</span>
            <span className="text-green-400 ml-3">
              + 5% than last month
            </span>
          </div>

          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#475BE8" />
                <Bar dataKey="uv" fill="white" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-dark-slate rounded-lg p-5">
          <h3 className="text-lg font-bold mb-3">Most Sold Project</h3>
          {Progress.map((item) => {
            return (
              <div key={item.id} className="my-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-slate-100">{item.progress}</span>
                </div>
                <div
                  className="h-3 w-full bg-gray-400 rounded-full"
                  role="progressbar"
                >
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: item.progress }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FootAnalysis;