import blue from "@material-ui/core/colors/blue";
import pink from "@material-ui/core/colors/pink";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import { darken } from "@material-ui/core/styles/colorManipulator";

export default {
  direction: "ltr",
  paletteType: "dark",
  paletteColors: {
    primary: purple,
    secondary: {
      // Darken so we reach the AA contrast ratio level.
      main: darken(green.A400, 0.08)
    }
  }
};
