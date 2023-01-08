import { makeStyles } from "@material-ui/core/styles";
import { Paper, TableContainer } from "@mui/material";
import { styled } from "@mui/system";

export const useStyles = makeStyles(() => ({
  body: {
    textOverflow: "ellipsis"
  }
}));

export const StyledPaper = styled(Paper)`
  width: 100%;
`;

export const StyledTableContainer = styled(TableContainer)`
  max-height: 500px;
  border-radius: 4px;
`;
