import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { COLORS } from "../../styles/theme";

export const StyledButton = styled(Button)`
  background: ${({ background }) => background || COLORS.WHITE};
  color: ${({ fontcolor }) => fontcolor || COLORS.WHITE};
  // border: ${({ border }) => border || `0.063rem solid ${COLORS.BLUE}`};
  // border-radius: ${({ borderRadius }) => borderRadius || "0.25rem"};
  // line-height: 1.375rem;
  // text-transform: none;
  // width: ${({ width }) => width || "auto"};
  // height: inherit;
  // padding: ${({ theme }) => theme.spacing(1.5, 2)};
  // min-width: ${({ width }) => width || "4rem"};
  // margin: ${({ margin }) => margin || 0};
  &:hover {
    cursor: pointer;
    background: ${({ hoverbackground }) => hoverbackground || COLORS.WHITE};
    // box-shadow: ${({ boxshadow }) => boxshadow || "0rem 0.375rem 0.375rem rgba(0, 0, 0, 0.32)"};
  }
`;
