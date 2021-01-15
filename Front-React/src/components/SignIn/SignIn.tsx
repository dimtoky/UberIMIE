import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import styles, { Styles } from './styles';
import "./styles.tsx"
import Axios from 'axios';
import { BrowserRouter, Link, Redirect, Route, Switch, NavLink } from 'react-router-dom';
import SignUp from '../signUp/SignUp';
import ResetPassword from '../ResetPassword/resetPassword';

interface P { }
interface S {
  id: number
  email: string,
  password: string,
  redirect: boolean
}

export default class SignIn extends React.PureComponent<P & WithStyles<Styles>> {
  public state: Readonly<S>;
  public apiUrl: string = 'http://localhost:3001/users/login/';

  constructor(props: any) {
    super(props);
    this.state = {id: 1, email: '',password: '', redirect: false};
    this.onSubmit = this.onSubmit.bind(this);
  }

  public static Display = withStyles(styles as any)(SignIn) as React.ComponentType<P>
  render() {
    const { classes } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/drive'/>;
    }
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
            </Typography>
          <form className={classes.form} noValidate autoComplete="off" onSubmit={this.onSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={this.onChangeEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={this.onChangePassword}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
              </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/auth/signUp">
                  Don't have an account? Sign up
                  </Link>
              </Grid>
            </Grid>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/auth/forgotPassword">
                  Forgot password ?
                  </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/auth/signUp">
              <SignUp.Display />
            </Route>
            <Route exact path="/auth/forgotPassword">
              <ResetPassword.Display />
            </Route>
            <Redirect to="/auth/signIn" />
          </Switch>
        </BrowserRouter>


      </Container>
    );
  }
  onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const mail: string = event.target.value;
    this.setState({
      email: mail
    });
  }
  onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const passwd: string = event.target.value;
    this.setState({
      password: passwd
    });
  }

  onSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    return (
      Axios.post(this.apiUrl, {
        email: this.state.email,
        password: this.state.password
      }, {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        }
}).then(response => { 
  console.log("success" + response.data.data.token)
  localStorage.setItem('token', response.data.data.token);
  localStorage.setItem('email', this.state.email);
  this.setState({ redirect: true })
})
.catch(error => {
    console.log(error.response)
})
      
    )
  }

}