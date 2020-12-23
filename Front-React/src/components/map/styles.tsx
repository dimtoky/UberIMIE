import { createStyles, Theme } from "@material-ui/core";

export type Styles = "mainMenu" | "container"; // add class create
const styles = (theme: Theme) => createStyles<Styles, {}>({

  mainMenu: {
    top: '200px',
    marginLeft: '60px',
    zIndex: 2,
    position: 'absolute',
    minHeight: '200px'
  },
  container: {
    maxHeight: '100vh'
  }

});

export default styles;