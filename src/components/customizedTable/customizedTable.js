import React from "react";
import {
  makeStyles,
  Table,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Typography,
} from "@material-ui/core";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  orders: {
    margin: 10,
  },
  head: {
    backgroundColor: "orange",
  },
  TableContainer: {
    marginTop: theme.spacing(3),
  },
}));

const CustomizedTable = ({ headers, data, title }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <TableContainer className={classes.TableContainer} component={Paper}>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
        className={classes.orders}
      >
        {title}
      </Typography>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow
            classes={{
              root: location.pathname === "/lastec" ? classes.head : "",
            }}
          >
            {headers.map((header) => {
              return <TableCell align="center">{header}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              {Object.values(row).map((val) => {
                return <TableCell align="center">{val}</TableCell>;
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomizedTable;
