import { createStyles, Theme } from "@material-ui/core";

export type Styles = 
"root" | "media" | "expand" | "avatar" | "input" | "subHeader" 
| "iconButton" | "select" | "addIconButton" | "inputSelect"
| "stepsInfo" | "blockSearch" | "validateButton" | "addressesInfo";

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
    marginTop: '10px',
    backgroundColor: 'white',
    color: 'blue'
  },
  validateButton: {
    backgroundColor: 'white',
    color: 'blue'
  },
  select: {
    backgroundColor: 'white',
    borderRadius: '4px',
    color: 'black'
  },
  addIconButton: {
    margin: 10,
    backgroundColor: 'white',
    color: 'blue'
  },
  inputSelect: {
    backgroundColor: 'white',
    borderRadius: '4px',
    color: 'black',
    margin: '10px'
  },
  stepsInfo: {
    overflow:'auto',
    height: '300px',
    padding: 0
  },
  blockSearch: {
    alignItems: 'center'
  },
  addressesInfo: {
    overflow:'auto',
    height: '60px',
    padding: 0
  }
})

export default styles;

