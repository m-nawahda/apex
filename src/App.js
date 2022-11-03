import "./App.css";
import ApplicationBar from "./pages/appBar/appBar";
import LawnAndGarden from "./pages/lawnAndGarden/lawnAndGarden";
import Order from "./pages/hunterOrders/hunterOrders";
import Customers from "./pages/customer/customers";
import Suppliers from "./pages/suppliers/suppliers";
import React from "react";
import Forwarders from "./pages/forwarder/forwarders";
import Parts from "./pages/part/parts";
import Documents from "./pages/document/documents";
import Commissions from "./pages/commission/commissions";
import CompletedCommissions from "./pages/commission/completedCommissions";
import NewOrder from "./pages/newOrder/neworder";
import NewCustomer from "./pages/newCustomer/newCustomer";
import NewBreakPoint from "./pages/breakPoint/newBreakPoint";
import BreackPoint from "./pages/breakPoint/breakPoints";
import NewForwarder from "./pages/forwarder/newForwarder";
import NewPart from "./pages/part/newPart";
import NewSupplier from "./pages/suppliers/newSupplier";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "inline-flex",
    position: "absolute",
    marginLeft: -200,
    marginTop: "7rem",
  },
  sad: {
    width: 800,
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <BrowserRouter>
        <ApplicationBar />
        <div className={classes.sad}>
          <Routes>
            <Route path="/" element={<LawnAndGarden />} />
            <Route path="/lawn-garden" element={<LawnAndGarden />} />
            <Route path="/order" element={<Order />} />
            <Route path="/lastec" element={<Order />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/suppliers" element={<Suppliers />} />
            <Route path="/forwarders" element={<Forwarders />} />
            <Route path="/parts" element={<Parts />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/commissions" element={<Commissions />} />
            <Route path="/completed-commissions" element={<CompletedCommissions />} />
            <Route path="/new-customer" element={<NewCustomer />} />
            <Route path="/new-order" element={<NewOrder />} />
            <Route path="/new-break-point" element={<NewBreakPoint />} />
            <Route path="/break-point" element={<BreackPoint />} />
            <Route path="/new-forwarder" element={<NewForwarder />} />
            <Route path="/new-part" element={<NewPart />} />
            <Route path="/new-supplier" element={<NewSupplier />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
