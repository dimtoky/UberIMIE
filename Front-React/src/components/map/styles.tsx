import { createStyles, Theme } from "@material-ui/core";
import { Height } from "@material-ui/icons";

export type Styles = "mainMenu" | "container"; // add class create
const styles = (theme: Theme) => createStyles<Styles, {}>({

  mainMenu: {
    top: '0px',
    marginLeft: '0px',
    position: 'absolute',
    minHeight: '200px',
    height: '100%'
  },
  container: {
    maxHeight: '100%'
  }

});

export default styles;