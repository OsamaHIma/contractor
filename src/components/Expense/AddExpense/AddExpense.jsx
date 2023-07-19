import HeaderAddNewExpense from "./HeaderAddNewExpense/HeaderAddNewExpense";
import ContentExpense from "./ContentExpense/ContentExpense";
import "./AddExpense.css";

const AddExpense = () => {
  return (
    <div className="ADD-Expense absolute top-0 right-0 bottom-0 w-0 bg-dark-slate z-2 transition-all duration-800 h-full">
      <HeaderAddNewExpense />
      <ContentExpense />
    </div>
  );
}

export default AddExpense;
