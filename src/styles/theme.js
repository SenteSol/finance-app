import { createTheme, adaptV4Theme } from "@mui/material/styles";

export const theme = createTheme(
  adaptV4Theme({
    typography: {
      fontFamily: ["Poppins", "Roboto"].join(",")
    }
  })
);
