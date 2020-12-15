import { createStyles, Theme } from "@material-ui/core";

export type Styles = "headerBar"|"img"|"title"; // add class create
const styles = (theme: Theme) => createStyles<Styles, {}>({
    headerBar:{
        flexDirection: 'row',
        display: 'flex',
        minHeight: '64px',
        backgroundColor: '#000000',
        color: '#FFFFFF',
        justifyContent: 'space-between',
    },
    img: {
        height: '90px',
        width: '80px',
        left: '0px'
    },
    title: {

        justifyContent: 'space-between',
        right:'0px'
    }
    
});

export default styles;