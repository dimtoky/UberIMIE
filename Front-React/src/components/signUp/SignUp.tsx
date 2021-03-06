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
import styles, { Styles } from "./styles";
import "./styles.tsx"
import Axios from 'axios';
import UserInterface from '../../Interfaces/userInterfaces';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import SignIn from '../SignIn/SignIn';

interface P { }
interface S {
  user: UserInterface,
  passwdStatus: boolean
}

export default class SignUp extends React.PureComponent<P & WithStyles<Styles>> {
  public state: Readonly<S>;
  public apiUrl: string = 'http://localhost:3001/users/register';
  constructor(props: any) {
    super(props);
    this.state = {
      user: {
        id: 1,
        name: '',
        email: '',
        password: ''
      },
      passwdStatus: false
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  public static Display = withStyles(styles as any)(SignUp) as React.ComponentType<P>
  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
            </Typography>
          <form className={classes.form} noValidate autoComplete="off" onSubmit={this.onSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={this.onChangeName}
                />
              </Grid>

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
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="confirm_password"
                  label="Confirm Password"
                  type="password"
                  id="confirm_password"
                  autoComplete="current-password"
                  onChange={this.onChangeConfirmPassword}

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
              Sign Up
              </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link to="/auth/signIn">
                  Already have an account? Sign in
                  </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <BrowserRouter>
          <Switch>
            <Route exact={true} path='/auth/signIn' component={SignIn.Display} />
            <Redirect to="/auth/signUp" />
          </Switch>
        </BrowserRouter>
      </Container>
    );
  }

  onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const name: string = event.target.value;
    this.setState({
      user: {
        name: name,
        email: this.state.user.email,
        password: this.state.user.password
      }
    });
  }


  onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const mail: string = event.target.value;
    this.setState({
      user: {
        name: this.state.user.name,
        email: mail,
        password: this.state.user.password
      }
    });
  }

  onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const passwd: string = event.target.value;
    this.setState({
      user: {
        name: this.state.user.name,
        email: this.state.user.email,
        password: passwd
      }
    });
  }

  onChangeConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const confirmPasswd: string = event.target.value;
    if (confirmPasswd === this.state.user.password) {
      this.setState({
        passwdStatus: true
      });
    }
    else {
      this.setState({
        passwdStatus: false
      });
    }
  }

  onSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> | undefined {
    event.preventDefault();
    if (this.state.passwdStatus) {
      console.log(this.state);
      return (
        Axios.post(this.apiUrl, {
          name: this.state.user.name,
          email: this.state.user.email,
          password: this.state.user.password
        }, {
          headers: {
            'Content-Type': 'application/json; charset=UTF-8'
          }
        }).then(response => {
          console.log(response)
        })
          .catch(error => {
            console.log(error.response)
          })
      );
    }
  }
}