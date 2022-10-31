import React from "react";
import { FormControl, Box, makeStyles } from "@material-ui/core";
import SearchField from "../../inputs/searchField/searchField";
import SearchBtn from "../../customizedBtns/searchBtn/searchBtn";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1, 0),
    minWidth: "70%",
  },
}));

const SearchForm = ({ placeholder }) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <Box>
        <SearchField placeholder={placeholder} />
        <SearchBtn />
      </Box>
    </FormControl>
  );
};

export default SearchForm;
