import React from "react";
import useApp from "../../Hooks/useApp";
import HeaderComp from "../ForAllComponents/Header";
import CenterInvoice from "./Center/CenterInvoice";
import TableInvoice from "./Table/TableInvoice";
import AddNewInvoice from "./AddInvoice/AddNewInvoice";

function Invoice() {
  const { checked, setChecked } = useApp();

  return (
    <section className="p-3">
      <HeaderComp setChecked={setChecked} checked={checked} />
      <CenterInvoice />
      <TableInvoice />
      <AddNewInvoice />
    </section>
  );
}

export default Invoice;
