import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

// export const useStyles = makeStyles(() => ({
//   addButton: {
//     background: "#fff",
//     color: "#97a2a2",
//     paddingLeft: "40px",
//     "&:hover": {
//       backgroundColor: "#ffffff",
//       color: "black"
//     }
//   },
//   addIcon: {
//     color: "#fff",
//     background: "#97a2a2",
//     position: "absolute",
//     left: "0",
//     height: "100%",
//     width: "30px",
//     borderRadius: "4px 0 0 4px"
//   },
//   addButtonComponent: {
//     display: "inline-block",
//     margin: "30px 0px"
//   },
//   link: {
//     textDecoration: "none"
//   }
// }));

export const StyledButton = styled(Button)`
  background: ${({ background }) => background};
  color: ${({ fontcolor }) => fontcolor};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius || "0.25rem"};
  line-height: 1.375rem;
  text-transform: none;
  width: ${({ width }) => width};
  height: inherit;
  padding: ${({ theme }) => theme.spacing(1.5, 2)};
  min-width: ${({ width }) => width || "4rem"};
  margin: ${({ margin }) => margin || 0};
  &:hover {
    background: ${({ hoverbackground }) => hoverbackground};
    box-shadow: ${({ boxshadow }) => boxshadow || "0rem 0.375rem 0.375rem rgba(0, 0, 0, 0.32)"};
  }
`;
