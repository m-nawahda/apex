import React from "react";
import { Container, Box } from "@material-ui/core";
import CustomizedTable from "../../components/customizedTable/customizedTable";
import CreateBtn from "../../components/customizedBtns/createBtn/createBtn";
import { supplierHeaders } from "../../constants/tableHeaders";
import SearchForm from "../../components/forms/searchForm/searchForm";

const Suppliers = () => {
  return (
    <Container size="sm">
      <Box className="con">
        <CreateBtn textBtn="Create Supplier" path="/new-supplier" />
        <SearchForm placeholder="company" />
        <CustomizedTable
          headers={supplierHeaders}
          data={[]}
          title="Suppliers"
        />
      </Box>
    </Container>
  );
};

export default Suppliers;
