import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  makeStyles,
  Typography,
  Box,
} from "@material-ui/core";
import CustomizedTable from "../../components/customizedTable/customizedTable";

const useStyles = makeStyles((theme) => ({
  button: {
    width: 250,
    margin: theme.spacing(3),
  },
}));

export default function Parts() {
  const classes = useStyles();
  let navigate = useNavigate();

  return (
    <Container size="sm">
      <Box className="con">
        <Typography
          variant="h8"
          color="textSecondary"
          component="h7"
          gutterBottom
        >
          Break Point{" "}
        </Typography>
        <Button
          className={classes.button}
          type="Create"
          color="primary"
          variant="contained"
          onClick={() => navigate("/new-break-point")}
        >
          create a new break point
        </Button>

        <CustomizedTable title="Break Points" headers={[]} data={[]} />
      </Box>
    </Container>
  );
}
