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
  container: {
    border: "1px solid rgba(0, 0, 0, 0.3)",
    padding: 0,
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
    position: "relative",
    padding: theme.spacing(1),
    backgroundColor: "rgba(0,0,0,.3)",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const NewItem = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <Container size="xs" className={classes.container}>
      <Box className={classes.header}>
        <Typography variant="h6" component="h2" gutterBottom>
          Add Item To Order
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

      <Box>
        <FormControl className={classes.formControl}>
          <SelectField options={[]} label="Part Number" />
          <SelectField options={[]} label="Supplier" />
          <TextField
            label="Customer Part Number"
            type="number"
            fullWidth
            className={classes.field}
          />
          <TextField
            label="Quantity	"
            type="number"
            fullWidth
            className={classes.field}
            required
          />
          <TextField
            label="Unit Buy ($)"
            type="number"
            fullWidth
            className={classes.field}
            required
          />
          <TextField
            label="Unit Sell ($)"
            type="number"
            fullWidth
            className={classes.field}
            required
          />
        </FormControl>
      </Box>
    </Container>
  );
};

export default NewItem;
