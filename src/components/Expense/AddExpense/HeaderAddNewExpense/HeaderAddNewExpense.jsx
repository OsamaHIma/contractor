import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Interrogative from "../../../../Icons/interrogative.png";

const HeaderAddNewExpense = () => {
  return (
    <section className="text-white">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Company Name</h1>
        </div>

        <div className="flex items-center">
          <div className="cursor-pointer">
            <NotificationsNoneIcon className="text-white text-3xl" />
          </div>

          <div className="ml-6 cursor-pointer">
            <img src={Interrogative} alt="" />
          </div>
        </div>
      </div>

      <h2 className="text-4xl font-bold mt-8">New Expense</h2>
    </section>
  );
};

export default HeaderAddNewExpense;
