import MessagesComponent from "./MessagesComponent";
import { Search, Settings } from "@mui/icons-material";

function LeftComponent() {
  return (
    <>
      <div className="textColor flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div>inbox</div>
          <div className=" bg-green-500 px-2 py-1 rounded-full">2 new</div>
        </div>
        <div className="cursor-pointer">
          <Settings />
        </div>
      </div>

      <div className="my-5">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="text-slate-900" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="block w-full pl-10 pr-3 py-2 rounded-full bg-gray-100 text-gray-900 focus:outline-none focus:bg-white focus:ring-0"
          />
        </div>
      </div>

      <MessagesComponent />
    </>
  );
}

export default LeftComponent;
