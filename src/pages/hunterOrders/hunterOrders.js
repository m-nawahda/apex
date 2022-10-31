import React from "react";
import { Container } from "@material-ui/core";
import CreateBtn from "../../components/customizedBtns/createBtn/createBtn";
import CustomizedTable from "../../components/customizedTable/customizedTable";
import OrderSearchForm from "../../components/orderSearchForm/orderSearchForm";
import { hunterOrderHeaders } from "../../constants/tableHeaders";

const HunterOrders = () => {
  return (
    <Container size="sm">
      <OrderSearchForm />
      <CreateBtn textBtn="Create Order" path="/new-order" />
      <CustomizedTable headers={hunterOrderHeaders} data={[]} title="Orders" />
    </Container>
  );
};

export default HunterOrders;
