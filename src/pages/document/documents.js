import React from "react";
import {
  makeStyles,
  TextField,
  FormControl,
  Container,
  Button,
  Typography,
  Box,
} from "@material-ui/core";
import CustomizedTable from "../../components/customizedTable/customizedTable";
import {
  completedOrdersHeaders,
  nonCompletedOrdersHeaders,
  testHeaders,
} from "../../constants/tableHeaders";

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(4),
    border: "1px solid rgba(0, 0, 0, 0.3)",
    boxShadow: "2px 2px 3px rgba(0,0,0,0.3)",
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

const Documents = () => {
  const classes = useStyles();

  return (
    <Container size="sm">
      <Box className={classes.form}>
        <Typography
          variant="h6"
          className={classes.header}
          color="textSecondary"
          component="h2"
          gutterBottom
        >
          Search
        </Typography>
        <FormControl className={classes.formControl}>
          <TextField
            className={classes.field}
            label="PO Number"
            variant="outlined"
            color="secondary"
            fullWidth
            multiline
            rows={1}
          />
          <TextField
            className={classes.field}
            label="Company"
            variant="outlined"
            color="secondary"
            fullWidth
            multiline
            rows={1}
          />
        </FormControl>
        <Button
          className={classes.button}
          type="Create"
          color="primary"
          variant="contained"
        >
          Search
        </Button>
      </Box>
      <CustomizedTable
        title="Orders"
        headers={completedOrdersHeaders}
        data={[]}
      />
      <CustomizedTable
        title="Non-Completed Orders"
        headers={nonCompletedOrdersHeaders}
        data={[]}
      />
      <CustomizedTable title="test" headers={testHeaders} data={[]} />
    </Container>
  );
};

export default Documents;
