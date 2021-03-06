import React from 'react';
import { Card, CardContent, CardHeader, withStyles, WithStyles, List, ListItem, ListItemText, Button  } from '@material-ui/core';
import styles, { Styles } from './styles';
import Avatar from '@material-ui/core/Avatar';
import Axios from 'axios';


interface P { mapLine: (coords: Array<any>, zoom: number) => void }
interface S {
  itineraries: Array<any>,
  email: string|null
}


export class HistoryMenu extends React.PureComponent<P & WithStyles<Styles>, S>{
  public apiUrl: string = 'http://localhost:3001/itinerary/load';
  public state: Readonly<S>;
  public static Display = withStyles(styles as any)(HistoryMenu) as React.ComponentType<P>
  constructor(props: any) {
    super(props);
    this.state = {
      itineraries: [],
     email: localStorage.getItem('email')
     //email: "test"
    }
  }
  componentDidMount () {
    Axios.post(this.apiUrl, {
      email: this.state.email,
    }, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'auth-token': localStorage.getItem('token')
      }
    }).then(response => {
      console.log(response.data.histories)
      this.setState({itineraries : response.data.histories})
    })
      .catch(error => {
        console.log(error.response)
        if (error.response.status === (401 | 400)) {
          alert("Connexion refusée")

        }
      })
  }
  render() {
    
    const { classes, mapLine } = this.props;
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
        
      
        <List component="nav" aria-label="main mailbox folders">

        {this.state.itineraries.map((item, index) => (
           <ListItem button selected={true}  onClick={() => this.loadItinerary(mapLine, item.itineraryData)}>
              <ListItemText primary={"Itinéraire N°=" + (index+1)} />
            {item.date}
            </ListItem>
        ))}
      </List>
        </CardContent>

        <Button className={classes.switchButton} href="/drive" variant="contained">Génerateur</Button>

      </Card>
    );
  }

  loadItinerary = (mapLineFunction: (coords: Array<any>, zoom: number) => void, itinerary: any) => {
    console.log(itinerary);
    //alert(itinerary);
    Axios.post('http://127.0.0.1:3001/itinerary', {
      start: itinerary.start,
      coords: itinerary.coords,
      len: itinerary.len
    }, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'auth-token': localStorage.getItem('token')
      }})
      .then(function (response) {
        let tabCoord: Array<any> = [];
        if (response.data.itinerary === []) {
          alert("Aucun Itineraire trouvé.");
        }
        else {
          for (var itinerary of response.data.itinerary) {
            for (var coord of itinerary.routes[0].legs[0].steps) {
              for (var item of coord.geometry.coordinates) {
                tabCoord.push(item);
              }
            }
          }
          mapLineFunction(tabCoord, 10);
        }
      }).catch(function (error) {
        console.error(error);
        if (error.response.status === (401 || 400)) {
          alert("Connexion refusée")

        }
      });
  }

  
}