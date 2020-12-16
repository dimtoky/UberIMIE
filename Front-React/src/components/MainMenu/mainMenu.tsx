import * as React from 'react';
import { Card, CardActions, CardContent, CardHeader, TextField, withStyles, WithStyles } from '@material-ui/core';
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
                 <CardHeader
                avatar={ 
                <Avatar className={classes.avatar}>
                    U
                </Avatar>
                }
                title="Driver itinerary"
                subheader="Select your addresses:"
                className= {classes.subHeader}
                />
              
                <CardContent>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="address"
                    label="Address"
                    type="text"
                    id=""
                    autoComplete="current-password"
                    className= {classes.input}
                  />
                </CardContent>
                <CardContent>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="address"
                    label="Address"
                    type="text"
                    id=""
                    autoComplete="current-password"
                    className= {classes.input}
                  />
                    <CardActions disableSpacing>
                    </CardActions>
                </CardContent>
            </Card>
        )
    }

}