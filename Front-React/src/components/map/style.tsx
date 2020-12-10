import { createStyles, Theme } from "@material-ui/core";

export type Styles = "map" ; // add class create
const styles = (theme: Theme) => createStyles<Styles, {}>({
    map:{
       height: '100vh'
    }

});

export default styles;