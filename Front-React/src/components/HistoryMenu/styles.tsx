import { createStyles, Theme } from "@material-ui/core";

export type Styles = "root" | "media" | "expand" | "avatar" | "input" | "subHeader" | "iconButton" | "select" | "addIconButton" | "inputSelect" | "switchButton"; // add class create
const styles = (theme: Theme) => createStyles<Styles, {}>({
  root: {
    display: 'block',
    position: 'relative',
    backgroundColor: '#000000',
    height: '100%',
    color: 'white',
    opacity: 0.9,
    borderRadius: 0,
    zIndex: 1,
    overflow: 'hidden'
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
    backgroundColor: 'white',
    color: '#000000'
  },
  input: {
    backgroundColor: 'white',
    borderRadius: '4px',
    color: 'black',
    margin: '10px',
    width: '200px'

  },
  subHeader: {
    ' & span': {
      color: 'white'
    }
  },
  iconButton: {
    padding: 10,
    backgroundColor: 'white',
    color: 'blue'
  },
  select: {
    backgroundColor: 'white',
    borderRadius: '4px',
    color: 'black'
  },
  addIconButton: {
    paddingLeft: 10,
    backgroundColor: 'white',
    color: 'blue'
  },
  inputSelect: {
    backgroundColor: 'white',
    borderRadius: '4px',
    color: 'black',
    margin: '10px',
    width: '200px'

  },
  switchButton: {
    position: 'fixed',
    bottom: '10px',
    left: '7%',
    marginLeft: '-104.5px'
  }
})

export default styles;

