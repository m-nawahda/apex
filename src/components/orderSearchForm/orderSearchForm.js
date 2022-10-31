import React from "react";
import { InputLabel, Select, makeStyles, FormControl } from "@material-ui/core";
import SearchField from "../inputs/searchField/searchField";
import "./orderSearchForm.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: "70%",
    padding: theme.spacing(2),
    boxShadow: "2px 2px 3px rgb(0 0 0 / 20%), -2px -2px 3px rgb(0 0 0 / 20%)",
  },
  selectLabel: {
    position: "relative",
  },
}));

const OrderSearchForm = () => {
  const classes = useStyles();
  const textFieldStyle = { marginBottom: "20px", width: " 100%" };
  return (
    <FormControl className={classes.formControl}>
      <SearchField style={textFieldStyle} placeholder="PO Number" />
      <SearchField style={textFieldStyle} placeholder="Company" />
      <SearchField style={textFieldStyle} placeholder="Customer PO Num" />
      <InputLabel
        className={classes.selectLabel}
        htmlFor="payment-native-simple"
      >
        Pay Status
      </InputLabel>
      <Select
        native
        color="secondary"
        inputProps={{
          name: "payment",
          id: "payment-native-simple",
        }}
      >
        <option aria-label="None" value="" />
        <option value={10}>Ahmed </option>
        <option value={20}>Ali</option>
        <option value={30}>sami</option>
      </Select>
    </FormControl>
  );
};

export default OrderSearchForm;
