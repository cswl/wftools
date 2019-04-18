import { createMuiTheme } from "@material-ui/core/styles";

function getTheme(uiTheme) {
  const theme = createMuiTheme({
    direction: uiTheme.direction,
    nprogress: { color: uiTheme.paletteType === "light" ? "#000" : "#fff" },
    palette: { ...uiTheme.paletteColors, type: uiTheme.paletteType }
  });

  return theme;
}

export default getTheme;
