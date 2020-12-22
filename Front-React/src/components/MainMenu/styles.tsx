import { createStyles, Theme } from "@material-ui/core";

export type Styles = "root"|"media"|"expand"|"avatar"|"input"|"subHeader"|"search"; // add class create
const styles= (theme: Theme)=> createStyles<Styles, {}>({
    root: {
      display: 'block',
      position: 'relative',
      width: '380px',
      backgroundColor: '#000000',
      height: 'auto',
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
    input: {
      backgroundColor: '#ffffff',
      borderRadius: '4px'
      
    },
    subHeader: {
      ' & span': {
        color: '#ffffff'
      }
    },
    search: {
      zIndex: 2,
      backgroundColor: 'white'
    }
  })

export default styles;

