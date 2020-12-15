import { createStyles, Theme } from "@material-ui/core";

export type Styles = "map"|"mainMenu"; // add class create
const styles = (theme: Theme) => createStyles<Styles, {}>({
    map:{
       height: '100vh',
       zIndex: 1
    },
    mainMenu: {
      top: '200px',
      marginLeft: '60px',
      zIndex: 2,
      position: 'absolute',
      minHeight: '200px'
    }

});

export default styles;