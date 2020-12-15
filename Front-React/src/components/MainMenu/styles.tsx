import { createStyles, Theme } from "@material-ui/core";

export type Styles = "root"|"media"|"expand"|"avatar"; // add class create
const styles= (theme: Theme)=> createStyles<Styles, {}>({
    root: {
      display: 'block',
      position: 'relative',
      width: '350px',
      backgroundColor: '#000000',
      height: '200px',
      color: '#ffffff',
      opacity: 0.8
    },
    media: {
      height: '0px',
      paddingTop: '56.25%' // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    avatar: {
      margin: '10px',
      backgroundColor: '#ffffff',
      color: '#000000'
    },
  })

export default styles;

