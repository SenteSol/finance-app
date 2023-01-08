import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useStyles } from "./addButtonStyles";

const AddButton = ({ pathname, section }) => {
  const classes = useStyles();
  return (
    <span className={classes.addButtonComponent}>
      <Link to={{ pathname }} className={classes.link}>
        <Button variant="contained" className={classes.addButton}>
          <AddIcon className={classes.addIcon} />
          <strong>Add {section}</strong>
        </Button>
      </Link>
    </span>
  );
};

export default AddButton;
