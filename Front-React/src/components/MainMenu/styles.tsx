import { createStyles, Theme } from "@material-ui/core";

export type Styles = "root" | "media" | "expand" | "avatar" | "input" | "subHeader" | "iconButton" | "select"; // add class create
const styles = (theme: Theme) => createStyles<Styles, {}>({
  root: {
    display: 'block',
    position: 'relative',
    backgroundColor: '#000000',
    height: '100%',
    color: 'white',
    opacity: 0.9,
    borderRadius: 0
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
    color: 'black'

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
  }
})

export default styles;

