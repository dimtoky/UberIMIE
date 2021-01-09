import { createStyles, Theme } from "@material-ui/core";

export type Styles = "layout" | "logo" | "map" | "headerBar" | "mainMenu"; // add class create
const styles = (theme: Theme) => createStyles<Styles, {}>({
    layout: {
        height: '100%'
    },
    logo: {
        width: 'auto',
        height: '100px'

    },
    map: {
        top: '0px',
        height: '100%',
        width: '70%',
        left: '30%'
    },
    headerBar: {
        height: '90px'
    },
    mainMenu: {
        top: '90px',
        marginLeft: '0px',
        position: 'absolute',
        minHeight: '200px',
        height: '100%',
        width: '30%'
      }
});

export default styles;