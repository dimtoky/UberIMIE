import { createStyles, Theme } from "@material-ui/core";

export type Styles = "Layout"|"logo"|"map"; // add class create
const styles = (theme: Theme) => createStyles<Styles, {}>({
    Layout:{
        flex: 1,
        overflow: 'hidden'
    },
    logo: {
        width: 'auto',
        height: '100px'
        
    },
    map: {
        zIndex: 1
    }
});

export default styles;