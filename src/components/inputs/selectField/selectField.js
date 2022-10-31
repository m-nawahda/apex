import React from "react";
import { Box, InputLabel, Select, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  selectLabel: {
    position: "relative",
    width: "100%",
  },
}));

const SelectField = ({ label, options }) => {
  const classes = useStyles();

  return (
    <Box>
      <InputLabel
        className={classes.selectLabel}
        htmlFor="payment-native-simple"
      >
        {label}
      </InputLabel>
      <Select
        native
        fullWidth
        color="secondary"
        inputProps={{
          name: label,
          id: label,
        }}
      >
        <option aria-label="None" value="" />
        {options.map((option) => (
          <option value={option.value}>{option.value} </option>
        ))}
      </Select>
    </Box>
  );
};

export default SelectField;
