import { Person,AccessTime } from "@mui/icons-material";

function MessagesComponent() {
  return (
    <ul
      className="overflow-y-auto max-h-64 p-0 m-0"
    >
      <li
        className="flex items-center w-full bg-dark-slate hover:bg-green-500/80 dark:hover:bg-slate-700 p-2 transition-all rounded"  
      >
        <Person className="ltr:mr-2 rtl:ml-2 text-green-300" />
        <div>
          <p className="font-medium text-slate-800 dark:text-slate-100">Your Patient</p> 
          <p className="text-gray-400 text-sm">
            Ali Connors
          </p>  
        </div>    
        <AccessTime className="text-gray-400 text-sm ltr:ml-auto rtl:mr-auto" />
      </li>
      <li
        className="flex items-center hover:bg-gray-300 dark:hover:bg-slate-700 p-2 transition-all rounded"  
      >
        <Person className="ltr:mr-2 rtl:ml-2 text-green-300" />
        <div>
          <p className="font-medium text-slate-800 dark:text-slate-100 ">Your Patient</p> 
          <p className="text-gray-400 text-sm">
            Ali Connors
          </p>  
        </div>    
        <AccessTime className="text-gray-400 text-sm ltr:ml-auto rtl:mr-auto" />
      </li>
      <li
        className="flex items-center hover:bg-gray-300 dark:hover:bg-slate-700 p-2 transition-all rounded"  
      >
        <Person className="ltr:mr-2 rtl:ml-2 text-green-300" />
        <div>
          <p className="font-medium text-slate-800 dark:text-slate-100 ">Your Patient</p> 
          <p className="text-gray-400 text-sm">
            Ali Connors
          </p>  
        </div>    
        <AccessTime className="text-gray-400 text-sm ltr:ml-auto rtl:mr-auto" />
      </li>
      <li
        className="flex items-center hover:bg-gray-300 dark:hover:bg-slate-700 p-2 transition-all rounded"  
      >
        <Person className="ltr:mr-2 rtl:ml-2 text-green-300" />
        <div>
          <p className="font-medium text-slate-800 dark:text-slate-100 ">Your Patient</p> 
          <p className="text-gray-400 text-sm">
            Ali Connors
          </p>  
        </div>    
        <AccessTime className="text-gray-400 text-sm ltr:ml-auto rtl:mr-auto" />
      </li>

      {/* More list items... */}

    </ul>
  )
}

export default MessagesComponent