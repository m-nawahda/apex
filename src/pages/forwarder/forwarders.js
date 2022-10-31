import React from "react";
import { Container, Box } from "@material-ui/core";
import { forwarderHeaders } from "../../constants/tableHeaders";
import CustomizedTable from "../../components/customizedTable/customizedTable";
import CreateBtn from "../../components/customizedBtns/createBtn/createBtn";
import SearchForm from "../../components/forms/searchForm/searchForm";

export default function Forwarders() {
  return (
    <Container size="sm">
      <Box className="con">
        <CreateBtn textBtn="Create a new Forwarder" path="/new-forwarder" />
        <SearchForm placeholder="Company" />
        <CustomizedTable
          title="Forwarders"
          headers={forwarderHeaders}
          data={[]}
        />
      </Box>
    </Container>
  );
}
