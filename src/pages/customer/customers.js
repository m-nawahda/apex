import React from "react";
import { Container, Box } from "@material-ui/core";
import CustomizedTable from "../../components/customizedTable/customizedTable";
import { customerHeaders } from "../../constants/tableHeaders";
import CreateBtn from "../../components/customizedBtns/createBtn/createBtn";
import SearchForm from "../../components/forms/searchForm/searchForm";

const Customers = () => {
  return (
    <Container size="sm">
      <Box className="con">
        <CreateBtn textBtn="Create New Customer" path="/new-customer" />
        <SearchForm placeholder="Company" />
        <CustomizedTable
          title="Customers"
          headers={customerHeaders}
          data={[]}
        />
      </Box>
    </Container>
  );
};

export default Customers;
