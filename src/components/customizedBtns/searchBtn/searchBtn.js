import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    marginLeft: theme.spacing(2),
    height: "100%",
    width: "15%",
  },
}));

const SearchBtn = () => {
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      type="search"
      color="primary"
      variant="outlined"
    >
      Search
    </Button>
  );
};

export default SearchBtn;
