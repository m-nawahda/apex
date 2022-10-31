import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    width: 300,
    margin: theme.spacing(3, 3, 3, 0),
  },
  formControll: {
    margin: theme.spacing(1),
    minWidth: "50%",
  },
}));

const CreateBtn = ({ textBtn, path }) => {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      type="Create"
      color="primary"
      variant="contained"
      onClick={() => {
        navigate(path);
      }}
      endIcon={<KeyboardArrowRightIcon />}
    >
      {textBtn}
    </Button>
  );
};

export default CreateBtn;
