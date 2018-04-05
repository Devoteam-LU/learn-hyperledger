import React from "react";
import { createMuiTheme } from "material-ui/styles";

import {
  primaryColor,
  primaryColorDark,
  primaryColorLight,
  accentColor,
  text,
  primaryText,
  secondaryText,
  accentText,
  backgroundColor
} from "./Colors";

const DevoteamTheme = createMuiTheme({
  palette: {
    primary: {
      light: primaryColorLight,
      main: primaryColor,
      dark: accentColor,
      contrastText: text
    },
    secondary: {
      light: accentText,
      main: accentColor,
      dark: secondaryText,
      contrastText: text
    }
  },

  overrides: {}
});

export default DevoteamTheme;
