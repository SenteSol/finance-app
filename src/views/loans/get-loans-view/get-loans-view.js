import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import GetLoans from "./get-loans";
import ContentUI from "../../../components/content-ui";
import { getLoans } from "../actions/loan.actions";
import { useStyles } from "./loansStyles";

const GetLoansView = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const loans = useSelector(state => state?.loans.loans);

  useEffect(() => {
    dispatch(getLoans());
  }, []);

  return (
    <ContentUI props={props}>
      {" "}
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        xs={12}
        spacing={3}
        className={classes.clientGrid}
      >
        <span className={classes.addButtonComponent}>
          <Link to={{ pathname: "/loans/add-loan/" }} className={classes.link}>
            <Button variant="contained" className={classes.addButton}>
              <AddIcon className={classes.addIcon} />
              <strong>Add Loan</strong>
            </Button>
          </Link>
        </span>
        <GetLoans loans={loans} />
      </Grid>
    </ContentUI>
  );
};

export default GetLoansView;
