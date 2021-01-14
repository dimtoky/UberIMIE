import { createStyles, Theme } from "@material-ui/core";

export type Styles = "layout";
const styles = (theme: Theme) => createStyles<Styles, {}>({
    layout: {
        maxHeight: '100%',
        height: '100%'
    }
});

export default styles;