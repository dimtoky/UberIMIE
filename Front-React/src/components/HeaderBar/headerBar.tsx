import * as React from 'react';
import { Grid, withStyles, WithStyles, IconButton } from '@material-ui/core';
import styles, { Styles } from './styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Redirect } from 'react-router-dom';

interface P { logo: ()=> React.ReactNode, name: React.ReactNode}
interface S {
    redirect: boolean
}

export class HeaderBar extends React.PureComponent<P & WithStyles<Styles>, S>{

    public static Display = withStyles(styles as any)(HeaderBar) as React.ComponentType<P>

    constructor(props: any) {
        super(props);
        this.state = {redirect: false};
      }

    render(){
        const { classes, logo, name } = this.props;
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/auth/signIn'/>;
          }
        return(
            <Grid container className={classes.headerBar}>
                <Grid item className={classes.img}>
                    {logo()}
                </Grid>
                <Grid item>
                    <Grid item className={classes.title}>
                        {name}
                    </Grid>
                    <IconButton  color="primary" onClick={() => this.disconnect()}  component="span">
          <ExitToAppIcon color="error"  fontSize="large"/>
        </IconButton>
                </Grid>
            </Grid>
        )
    }

    disconnect = () => {
        this.setState({ redirect: true });
        localStorage.setItem('token', '');
        localStorage.setItem('email', '');
    }
}