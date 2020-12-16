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
import "./styles.tsx";
import Axios from 'axios';
import { RouteComponentProps } from "react-router-dom";

interface P {}
interface S {
  password: string,
  resetToken: string,
  passwdStatus: boolean
}


export default class ResetPassword extends React.PureComponent<P & WithStyles<Styles>, S, RouteComponentProps> {
  public state: Readonly<S>;
  public apiUrl: string = 'http://localhost:3001/users/forgotpswd/';
   
  constructor(props: any, rprops: RouteComponentProps) {
    super(props);
    super(rprops)
    this.state = {  password: '',  resetToken: '' ,passwdStatus: false};
    this.handleSubmit = this.handleSubmit.bind(this);
    
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

    
  onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const passwd = event.target.value;
      this.setState({
          password: passwd
    });
  }

  onChangeConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const confirmPasswd = event.target.value;
    if(confirmPasswd === this.state.password) {  
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

    handleSubmit(event: any) {
      event.preventDefault();
      return (
        Axios.post(this.apiUrl, {
          password: this.state.password,
          token: this.state.resetToken,
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
      );
    }
}