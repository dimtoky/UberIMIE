import { createStyles, Theme } from "@material-ui/core";

export type Styles = "layout"|"logo"|"map"|"headerBar"; // add class create
const styles = (theme: Theme) => createStyles<Styles, {}>({
    layout:{
        maxHeight: '100%',
        height: '100vh'
    },
    logo: {
        width: 'auto',
        height: '100px'
    },
    map: {
        zIndex: 2
    },
    headerBar: {
        minHeight: '90px',
        zIndex: 2
    }
});

export default styles;