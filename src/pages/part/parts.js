import React from "react";
import { Container, Box } from "@material-ui/core";
import CustomizedTable from "../../components/customizedTable/customizedTable.js";
import CreateBtn from "../../components/customizedBtns/createBtn/createBtn";
import SearchForm from "../../components/forms/searchForm/searchForm.js";
import {
  productListHeaders,
  partsManagementHeaders,
  deActivatedPartsHeaders,
} from "../../constants/tableHeaders";

export default function Parts() {
  return (
    <Container size="sm">
      <Box className="con">
        <CreateBtn textBtn="create a new part" path="/new-part" />
        <SearchForm placeholder="Product Number/Customer Part Number:" />
        <CustomizedTable
          title="Product List"
          headers={productListHeaders}
          data={[]}
        />
        <CustomizedTable
          title="Parts Management"
          headers={partsManagementHeaders}
          data={[]}
        />
        <CustomizedTable
          title="De-Activated Parts"
          headers={deActivatedPartsHeaders}
          data={[]}
        />
      </Box>
    </Container>
  );
}
