import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import ContentUI from "../../../components/content-ui";
import { getClients } from "../../../redux/actions/clients/actions/client.actions";
import AddButton from "../../../components/addButton";
import TableList from "../../../components/table";
import { columns, section, pathname } from "../../../constants/views/clients";
import SimpleModal from "../../../components/modal/modal";
import { useStyles } from "./clientStyles";

const ClientsView = props => {
  const [allClients, setAllClients] = useState([]);
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

  useEffect(() => {
    setAllClients(cleanTableData(clients));
  }, [clients]);

  const cleanTableData = tableData =>
    tableData.map(data => ({
      id: data.clientId,
      name: data.clientName,
      email: data.clientContactEmail,
      number: data.clientContactNumber,
      address: `${data.address} ,${data.city}`,
      country: data.country,
      buttons: (
        <>
          <Link to={{ pathname: `/clients/edit-client/${data.clientId}/` }} className={classes.link}>
            <CreateIcon className={classes.actionEditIcons} />
          </Link>
          <SimpleModal clientId={data.clientId} clientName={data.clientName} />
        </>
      )
    }));

  return (
    <ContentUI props={props}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        xs={12}
        spacing={3}
        className={classes.clientGrid}
      >
        <AddButton pathname={pathname} section={section} />
        <TableList tableBodies={allClients} tableHeaders={columns} />
      </Grid>
    </ContentUI>
  );
};

export default ClientsView;
