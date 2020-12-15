import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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
import UserInterface from '../../Interfaces/userInterfaces';

interface P {}
interface S { 
  user: UserInterface,
  passwdStatus: boolean
}

export default class SignUp extends React.PureComponent<P & WithStyles<Styles>> {
  public state: Readonly<S>;
  public apiUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  constructor(props: any) {
    super(props);
    this.state = {
      user: {
      id: 1, 
      lastName: '',
      firstName: '',
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
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={this.onChangeFirstName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                    onChange={this.onChangeLastName}
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
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
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
                  <Link href="/" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>

          <Box mt={5}>
            <Copyright />
          </Box>
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
  
  onChangeFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const firstName = event.target.value;
    this.setState({
      user: {
        firstName: firstName
      }
  });
  }
  onChangeLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const lastName = event.target.value;
    this.setState({
      user: {
        lastName: lastName
      }
  });
  }

  onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const mail = event.target.value;
    this.setState({
      user: {
        email: mail
      }
  });
  }

  onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const passwd = event.target.value;
      this.setState({
        user: {
          password: passwd
        }
    });
  }

  onChangeConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const confirmPasswd = event.target.value;
    if(confirmPasswd === this.state.user.password) {  
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

  onSubmit(event: any): any {
    event.preventDefault();
    if(this.state.passwdStatus) {
      console.log(this.state.passwdStatus);
      return (
        Axios.post(this.apiUrl, this.state.user)
        .then(response => {
          console.log(response);
        }
        )
        );
    }
    else {
      console.log(this.state.passwdStatus);
    }
  }
}