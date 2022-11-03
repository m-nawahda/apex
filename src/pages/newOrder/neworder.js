import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Button,
  Box,
  TextField,
  Typography,
  FormControl,
  makeStyles,
} from "@material-ui/core";
import SelectField from "../../components/inputs/selectField/selectField";

const useStyles = makeStyles((theme) => ({
  container: {
    border: "1px solid rgba(0, 0, 0, 0.3)",
    padding: 0,
  },
  addButton: {
    position: "absolute",
    right: "10px",
    bottom: "10px",
  },
  button: {
    margin: theme.spacing(1),
  },
  field: {
    marginTop: 20,
    display: "block",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "70%",
  },
  header: {
    position: "relative",
    padding: theme.spacing(1),
    backgroundColor: "rgba(0,0,0,.3)",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
  },
}));

const NewOrder = () => {
  const classes = useStyles();
  let navigate = useNavigate();

  return (
    <Container size="sm" className={classes.container}>
      <Box className={classes.header}>
        <Typography variant="h6" component="h2" gutterBottom>
          Create a New Order
        </Typography>
        <Box>
          <Button
            className={classes.button}
            color="primary"
            variant="outlined"
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>
          <Button
            className={classes.button}
            color="primary"
            variant="contained"
          >
            Create
          </Button>
        </Box>
      </Box>

      <FormControl className={classes.formControl}>
        <SelectField label="Customer" options={[]} />
        <TextField
          className={classes.field}
          label="Invoice Num"
          variant="outlined"
          color="secondary"
          fullWidth
        />
        <TextField
          className={classes.field}
          label="Custm PO Num"
          variant="outlined"
          color="secondary"
          fullWidth
        />
        <SelectField label="payment terms" options={[]} />
        <TextField
          id="date"
          label="Order Date"
          type="date"
          fullWidth
          defaultValue="2017-05-24"
          className={classes.field}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </FormControl>

      <Button
        type="Create"
        color="primary"
        variant="contained"
        className={classes.addButton}
        onClick={() => {
          navigate("/new-customer");
        }}
      >
        Add Customer
      </Button>
    </Container>
  );
};

export default NewOrder;
