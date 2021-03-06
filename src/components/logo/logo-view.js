import React from "react";
import "./logo.styles.css";
import { useStyles } from "./logoStyles";

const Logo = props => {
  const { size } = props;
  const classes = useStyles();
  return (
    <>
      {size ? (
        <span className={classes.largeLogo}>
          $ente <span className={classes.logoBorder}>sol</span>
        </span>
      ) : (
        <span className={classes.logo}>
          <strong>
            $ente <span className={classes.logoBorder}>sol</span>
          </strong>
        </span>
      )}
    </>
  );
};

export default Logo;
