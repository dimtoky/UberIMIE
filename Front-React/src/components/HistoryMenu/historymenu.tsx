import React from 'react';
import { Card, CardContent, CardHeader, withStyles, WithStyles } from '@material-ui/core';
import styles, { Styles } from './styles';
import Avatar from '@material-ui/core/Avatar';
import Axios from 'axios';


interface P { mapLine: (coords: Array<any>, zoom: number) => void }
interface S {
  itineraries: Array<any>,
  email: string|null
}


export class HistoryMenu extends React.PureComponent<P & WithStyles<Styles>, S>{
  public apiUrl: string = 'http://localhost:3001/itinary/load';
  public state: Readonly<S>;
  public static Display = withStyles(styles as any)(HistoryMenu) as React.ComponentType<P>
  constructor(props: any) {
    super(props);
    this.state = {
      itineraries: [],
      email: localStorage.getItem('email')
    }
  }

  render() {
     const fruits = ['Apple', 'Mengo', 'Orange', 'Banana', 'Cherry', 'Kiwi'];
     Axios.post(this.apiUrl, {
      email: this.state.email,
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