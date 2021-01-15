import { createStyles, Theme } from "@material-ui/core";

export type Styles = "paper" | "avatar" | "form" | "submit"; // add class create
const styles = (theme: Theme) => createStyles<Styles, {}>({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

export default styles;