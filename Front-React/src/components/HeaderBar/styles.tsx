import { createStyles, Theme } from "@material-ui/core";

export type Styles = "headerBar" | "img" | "title"; // add class create
const styles = (theme: Theme) => createStyles<Styles, {}>({
    headerBar: {
        flexDirection: 'row',
        display: 'flex',
        minHeight: '64px',
        backgroundColor: 'black',
        color: 'white',
        justifyContent: 'space-between',
        overflow: 'hidden'
    },
    img: {
        height: '90px',
        left: '0px',
        overflow: 'hidden'
    },
    title: {

        justifyContent: 'space-between',
        right: '0px'
    }

});

export default styles;