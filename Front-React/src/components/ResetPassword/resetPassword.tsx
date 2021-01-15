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
import "./styles.tsx";
import Axios from 'axios';
import { BrowserRouter, Redirect, RouteComponentProps, Switch } from "react-router-dom";

type TParams = { token: string };
interface P { }
interface S {
  password: string,
  resetToken: string,
  passwdStatus: boolean
}

export default class ResetPassword extends React.PureComponent<P & WithStyles<Styles>, S> {
  public state: Readonly<S>;
  public apiUrl: string = 'http://localhost:3001/users/resetpswd/';

  constructor(props: any) {
    super(props);
    this.state = { password: '', resetToken: this.token(props), passwdStatus: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.token(props);
    console.log(this.state)
  }

  token({ match }: RouteComponentProps<TParams>) {
    return match.params.token;
  }

  public static Display = withStyles(styles as any)(ResetPassword) as React.ComponentType<P>

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
            Reset your Password
            </Typography>
          <form className={classes.form} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
            <Grid container spacing={2}>
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
              Send
              </Button>
          </form>
        </div>
        <BrowserRouter>
          <Switch>
            <Redirect to="/auth/resetpassword" />
          </Switch>
        </BrowserRouter>
      </Container>
    );
  }


  onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const passwd: string = event.target.value;
    this.setState({
      password: passwd
    });
  }

  onChangeConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const confirmPasswd: string = event.target.value;
    if (confirmPasswd === this.state.password) {
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

  handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    return (
      Axios.post(this.apiUrl, {
        password: this.state.password,
        token: this.state.resetToken,
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