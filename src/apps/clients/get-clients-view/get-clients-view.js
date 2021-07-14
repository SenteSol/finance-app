import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ContentUI from "../../../components/content-ui";
import { getClients } from "../actions/client.actions";
import GetClients from "./get-clients";
import { useStyles } from "../clientStyles";

const ClientsView = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const clients = useSelector(state => state?.clients.clients);
  useEffect(async () => {
    await dispatch(getClients());
  }, []);
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
          <Button variant="contained" className={classes.addButton}>
            <AddIcon className={classes.addIcon} />
            <strong>Add Client</strong>
          </Button>
        </span>
        <GetClients clients={clients} />
      </Grid>
    </ContentUI>
  );
};

export default ClientsView;
