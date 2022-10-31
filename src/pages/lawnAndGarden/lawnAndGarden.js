import React from "react";
import CustomizedTable from "../../components/customizedTable/customizedTable";
import { skidOrCartonHeaders } from "../../constants/tableHeaders";
import CreateBtn from "../../components/customizedBtns/createBtn/createBtn";
const LawnAndGarden = () => {
  return (
    <div>
      <CreateBtn textBtn="Create Order" path="/new-order" />
      <CustomizedTable
        title="Empty Skid/Carton Order"
        headers={skidOrCartonHeaders}
        data={[]}
      />
    </div>
  );
};

export default LawnAndGarden;
