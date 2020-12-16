import * as React from 'react';
import { Card, CardActions, CardContent, withStyles, WithStyles } from '@material-ui/core';
import styles, { Styles } from './styles';
import Avatar from '@material-ui/core/Avatar';

interface P {}
interface S {}

export class MainMenu extends React.PureComponent<P & WithStyles<Styles>, S >{

    public static Display = withStyles(styles as any)(MainMenu) as React.ComponentType<P>

    render(){
        const { classes } = this.props;
        return(
            <Card className={classes.root}>
                <Avatar className={classes.avatar}>
                    U
                </Avatar>
                <CardContent>
                    <CardActions disableSpacing>
                    </CardActions>
                </CardContent>
            </Card>
        )
    }

}