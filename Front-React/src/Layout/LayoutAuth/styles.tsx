import { createStyles, Theme } from "@material-ui/core";

export type Styles = "layout"; // add class create
const styles = (theme: Theme) => createStyles<Styles, {}>({
    layout:{
        maxHeight: '100%',
        height: '100vh'
    }
});

export default styles;