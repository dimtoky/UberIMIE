import React from 'react';
import { Card, CardContent, CardHeader, withStyles, WithStyles } from '@material-ui/core';
import styles, { Styles } from './styles';
import Avatar from '@material-ui/core/Avatar';
//import Axios from 'axios';


interface P { mapLine: (coords: Array<any>, zoom: number) => void }
interface S {
  itineraries: Array<any>,
}


export class HistoryMenu extends React.PureComponent<P & WithStyles<Styles>, S>{
  public state: Readonly<S>;
  public static Display = withStyles(styles as any)(HistoryMenu) as React.ComponentType<P>
  constructor(props: any) {
    super(props);
    this.state = {
      itineraries: []
    }
  }

  render() {
     const fruits = ['Apple', 'Mengo', 'Orange', 'Banana', 'Cherry', 'Kiwi'];
    const { classes } = this.props;
    return (
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              U
            </Avatar>
          }
          title="Itinerary history"
          className={classes.subHeader}
        />

        <CardContent>
        
         
        <ul>
        {fruits.map((item) => (
          <li  onClick={() => this.loadItinerary(item)}>
            {item}
          </li>
        ))}
      </ul>
        </CardContent>


      </Card>
    );
  }

  loadItinerary = (fruits: any) => {
    alert(fruits);
  }
}