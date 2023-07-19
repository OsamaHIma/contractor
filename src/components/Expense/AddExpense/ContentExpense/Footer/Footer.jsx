import React from 'react';
import useExpense from '../../../../../Hooks/useExpense';

function Footer({ HandleClick }) {
  const { HandleAddCloseExpense } = useExpense();

  return (
    <div className="flex justify-between items-center flex-wrap border-t border-white py-4 px-3">
      <div>
        <button onClick={HandleAddCloseExpense} className="border border-white rounded-lg text-white font-bold py-2 px-4 hover:opacity-70">
          Cancel
        </button>
      </div>
      <div>
        <button onClick={HandleClick} className="bg-transparent border-2 border-dark-green rounded-lg text-dark-green font-bold py-2 px-4 mr-2 hover:opacity-70">
          Save And Create Another
        </button>
        <button onClick={HandleClick} className="bg-dark-green border-2 border-white rounded-lg text-white font-semibold py-2 px-4">
          Save Expense
        </button>
      </div>
    </div>
  );
}

export default Footer;