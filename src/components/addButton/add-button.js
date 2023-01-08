import React from "react";
import { Link } from "react-router-dom";
import { StyledButton } from "./addButtonStyles";

const AddButton = ({ pathname, background = "white", color = "#fff", hoverBackground, children, ...props }) => (
  <span>
    <Link to={{ pathname }}>
      <StyledButton background={background} color={color} hoverBackground={hoverBackground} {...props}>
        {children}
      </StyledButton>
    </Link>
  </span>
);

export default AddButton;
