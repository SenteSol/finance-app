import React from "react";
import { useDispatch } from "react-redux";
import { Modal, Grid } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { useStyles } from "./modalStyles";
import { deleteClient } from "../../views/clients/actions/client.actions";

const rand = () => Math.round(Math.random() * 20) - 10;

const getModalStyle = () => {
  const top = 40 + rand();
  const left = 53 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
};

const SimpleModal = ({ clientId, clientName }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleDelete = id => {
    dispatch(deleteClient(id));
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title" className={classes.modalTitle}>
        WARNING
      </h2>
      <p id="simple-modal-description">
        Are you sure you want to delete client:{" "}
        <strong>
          <q>{clientName}</q>
        </strong>
        ?{" "}
      </p>
      <p id="simple-modal-description">
        For record integrity, this will not delete loan data associated with the client
      </p>
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <button type="button" onClick={() => handleDelete(clientId)} className={classes.delete}>
          <strong>Delete</strong>
        </button>
        <button type="button" onClick={() => handleClose()} className={classes.close}>
          <strong>Close</strong>
        </button>
      </Grid>
    </div>
  );

  return (
    <>
      <DeleteOutlineIcon className={classes.actionDeleteIcons} onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </>
  );
};

export default SimpleModal;
