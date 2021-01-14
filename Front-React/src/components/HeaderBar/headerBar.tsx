import * as React from 'react';
import { Grid, withStyles, WithStyles } from '@material-ui/core';
import styles, { Styles } from './styles';

interface P { logo: () => React.ReactNode, name: React.ReactNode }
interface S { }

export class HeaderBar extends React.PureComponent<P & WithStyles<Styles>, S>{

    public static Display = withStyles(styles as any)(HeaderBar) as React.ComponentType<P>

    render() {
        const { classes, logo, name } = this.props;
        return (
            <Grid container className={classes.headerBar}>
                <Grid item className={classes.img}>
                    {logo()}
                </Grid>
                <Grid item>
                    <Grid item className={classes.title}>
                        {name}
                    </Grid>
                </Grid>
            </Grid>
        )
    }

}