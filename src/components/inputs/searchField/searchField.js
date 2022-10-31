import React, { useState } from "react";
import { makeStyles, TextField, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import "./searchField.css";
const useStyles = makeStyles((theme) => ({
  textField: {
    width: "70%",
  },
}));

const SearchField = ({ placeholder, style }) => {
  const [showClearIcon, setShowClearIcon] = useState("none");
  const [value, setValue] = useState("");
  const classes = useStyles();

  const handleChange = ({ target }) => {
    setValue(target.value);
    setShowClearIcon(target.value === "" ? "none" : "flex");
  };

  const handleClick = () => {
    setValue("");
    setShowClearIcon("none");
  };

  return (
    <TextField
      style={style}
      className={classes.textField}
      value={value}
      label={placeholder}
      variant="outlined"
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon className="textFieldIcons" />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment
            position="end"
            style={{ display: showClearIcon }}
            onClick={handleClick}
          >
            <ClearIcon className="textFieldIcons" />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchField;
