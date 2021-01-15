import { createStyles, Theme } from "@material-ui/core";

export type Styles = "layout" | "logo" | "map" | "headerBar"; // add class create
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
        width: '100%',
    },
    headerBar: {
        height: '90px'
    }
});

export default styles;