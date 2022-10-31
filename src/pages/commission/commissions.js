import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  TextField,
  Container,
  Button,
  Typography,
  Box,
  makeStyles,
} from "@material-ui/core";
import SelectField from "../../components/inputs/selectField/selectField";

const useStyles = makeStyles((theme) => ({
  form: {
    border: "1px solid rgba(0, 0, 0, 0.3)",
    marginTop: theme.spacing(4),
    position: "relative",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "70%",
    padding: theme.spacing(3),
  },
  field: {
    marginTop: 20,
    display: "block",
  },
  header: {
    padding: theme.spacing(1),
    backgroundColor: "gray",
    color: "white",
  },
  button: {
    position: "absolute",
    right: "10px",
    bottom: "10px",
  },
}));

export default function NewOrder() {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Container size="xs">
      <Button
        type="Create"
        color="primary"
        variant="contained"
        onClick={() => navigate("/completed-commissions")}
      >
        Exiting Commission orders
      </Button>

      <Box className={classes.form}>
        <Typography
          variant="h6"
          className={classes.header}
          color="textSecondary"
          component="h2"
          gutterBottom
        >
          New Commission report
        </Typography>
        <Box>
          <FormControl className={classes.formControl}>
            <SelectField options={[]} label="Pay Status" />
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
            <SelectField options={[]} label="Mode" />
          </FormControl>
        </Box>
        <Button
          type="Create"
          color="primary"
          variant="contained"
          className={classes.button}
        >
          Calculate
        </Button>
      </Box>
    </Container>
  );
}
