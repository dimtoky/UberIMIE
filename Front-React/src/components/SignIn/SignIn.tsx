import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import styles, { Styles } from './styles';
import "./styles.tsx"
import Axios from 'axios';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';

interface P {}
interface S { 
  id: number
  email: string,
  password: string
}

export default class SignIn extends React.PureComponent<P & WithStyles<Styles>> {
  public state: Readonly<S>;
  public apiUrl: string = 'http://localhost:3001/users/login/';

  constructor(props: any) {
    super(props);
    this.state = {id: 1, email: '',password: ''};
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  public static Display = withStyles(styles as any)(SignIn) as React.ComponentType<P>
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
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/auth/signUp" variant="body2">
                    Don't have an account? Sign up
                  </Link>
                </Grid>
              </Grid>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/auth/forgotPassword" variant="body2">
                    Forgot password ?
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5}>
            <Copyright />
          </Box>
          <BrowserRouter>
            <Switch>
              <Redirect to="/auth/signIn"/>
            </Switch>
          </BrowserRouter>
        </Container>
      );
    
      function Copyright() {
        return (
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
              Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
    }
  }
  onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const mail = event.target.value;
    this.setState({
      email: mail
  });
  }
  onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const passwd = event.target.value;
    this.setState({
      password: passwd
  });
  }

  onSubmit(event: any) {
    event.preventDefault();
    console.log(this.state.email);
    return (
      
      Axios.post(this.apiUrl, {
        email: this.state.email,
        password: this.state.password
    },{
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
}).then(response => { 
	console.log(response)
})
.catch(error => {
    console.log(error.response)
})
      
    )
  }
  
}