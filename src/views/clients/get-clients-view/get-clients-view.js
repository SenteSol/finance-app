import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ContentUI from "../../../components/content-ui";
import { getClients } from "../actions/client.actions";
import GetClients from "./get-clients";
import { useStyles } from "./clientStyles";

const ClientsView = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const clients = useSelector(state => state?.clients.clients);
  const deleteClient = useSelector(state => state?.clients.delete);
  useEffect(() => {
    if (deleteClient === true) {
      dispatch(getClients());
    }
    dispatch(getClients());
  }, [deleteClient]);

  return (
    <ContentUI props={props}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        xs={12}
        spacing={3}
        className={classes.clientGrid}
      >
        <span className={classes.addButtonComponent}>
          <Link to={{ pathname: "/clients/add-client/" }} className={classes.link}>
            <Button variant="contained" className={classes.addButton}>
              <AddIcon className={classes.addIcon} />
              <strong>Add Client</strong>
            </Button>
          </Link>
        </span>
        <GetClients clients={clients} />
      </Grid>
    </ContentUI>
  );
};

export default ClientsView;
