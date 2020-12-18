import * as React from 'react';
import { Card, CardActions, CardContent, CardHeader, TextField, withStyles, WithStyles } from '@material-ui/core';
import styles, { Styles } from './styles';
import Avatar from '@material-ui/core/Avatar';
import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { coordonees } from '../../Interfaces/coordonnees';

interface P {}
interface S {
  addresses:coordonees[]
}

export class MainMenu extends React.PureComponent<P & WithStyles<Styles>, S>{
    public state: Readonly<S>;
    public static Display = withStyles(styles as any)(MainMenu) as React.ComponentType<P>

    constructor(props: any) {
      super(props);
      this.state = {
        addresses: [{
          lat: 0,
          lng: 0
        }]
      }
    }
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
                    id="address"
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
                    id="address2"
                    autoComplete="current-password"
                    className= {classes.input}
                    onChange={this.onChangeAddress}
                  />
                    <CardActions disableSpacing>
                    </CardActions>
                </CardContent>
            </Card>
        );
    }
    onChangeAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
      
      event.preventDefault();
      const address = event.target.value;
      var addressResponse: AxiosResponse;
      const option: AxiosRequestConfig = {
        url: 'https://forward-reverse-geocoding.p.rapidapi.com/v1/forward/search',
        method: 'GET',
        params: {
          q: address,
          format: 'geojson',
          'accept-language': 'fr',
          polygon_threshold: '0.0'
        },
        headers: {
          'x-rapidapi-key': '4279e7fff6msh1799725cfed6926p167b57jsn718d63b58f57',
          'x-rapidapi-host': 'forward-reverse-geocoding.p.rapidapi.com'
        }
      };
      setTimeout(() => { 
        Axios.get('https://forward-reverse-geocoding.p.rapidapi.com/v1/forward',option).then(function (response) {
          addressResponse = response.data.features;
          console.log(response.data.features);
        }).catch(function (error) {
          console.error(error);
        });
      
      }, 1000);
      
    }
}