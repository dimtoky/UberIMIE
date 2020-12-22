import * as React from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, TextField, withStyles, WithStyles } from '@material-ui/core';
import styles, { Styles } from './styles';
import Avatar from '@material-ui/core/Avatar';
import { coordonees } from '../../Interfaces/coordonnees';
import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import SearchIcon from '@material-ui/icons/Search';

interface P {}
interface S {
  addresses:coordonees[],
  addressChoice: string,
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
      }],
      addressChoice: ''
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
            onChange={this.onChangeAddress}
          />
          <Button onClick={this.getCoordFromApi}>
            <SearchIcon className = {classes.search}/>
          </Button>
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
          <Button onClick={this.getCoordFromApi}>
            <SearchIcon className = {classes.search}/>
          </Button>
          <CardActions disableSpacing>
          </CardActions>
        </CardContent>
      </Card>
    );
  }
  onChangeAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
      
    event.preventDefault();
    const address = event.target.value;
    this.setState({
      addresses: this.state.addresses,
      addressChoice: address
    })

  }

  getCoordFromApi = () =>  {
      const address = this.state.addressChoice;
      console.log(address)
      var addressResponse: AxiosResponse;
      var lat: String = '', long: String ='';
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
      
      Axios.get('https://forward-reverse-geocoding.p.rapidapi.com/v1/forward',option).then(function (response) {
        console.log(response.data.features)
        if(response.data.features.length >0) {
          lat =response.data.features[0].geometry.coordinates[1];
          long = response.data.features[0].geometry.coordinates[0];

          //get the address
          const option: AxiosRequestConfig = {
            method: 'GET',  
            url: 'https://api.opencagedata.com/geocode/v1/json',
            params: {
              q: lat+','+long,
              min_confidence: 10,
              key:'92403eb637a7403590ac975c13691593'
            }
          };
          
          Axios.get('https://api.opencagedata.com/geocode/v1/json',option).then(function (response) {
            addressResponse = response;
            console.log(addressResponse );
          }).catch(function (error) {
            console.error(error);
          });
        }
      }).catch(function (error) {
        console.error(error);
      });
    // **************************************
    
    //  var addressResponse: AxiosResponse;
    //   const option: AxiosRequestConfig = {
    //     url: 'https: //forward-reverse-geocoding.p.rapidapi.com/v1/forward/search',
    //     method: 'GET',
    //     params: {
    //       q: address.concat(",France"),
    //       format: 'geojson',
    //       'accept-language': 'fr',
    //       polygon_threshold: '0.0'
    //     },
    //     headers: {
    //       'x-rapidapi-key': '4279e7fff6msh1799725cfed6926p167b57jsn718d63b58f57',
    //       'x-rapidapi-host': 'forward-reverse-geocoding.p.rapidapi.com'
    //     }
    //   };
      
    //   Axios.get('https://forward-reverse-geocoding.p.rapidapi.com/v1/forward',option).then(function (response) {
    //     addressResponse = response.data.features;
    //     console.log(addressResponse );
    //   }).catch(function (error) {
    //     console.error(error);
    //   });
    
  }

  public getAddressFromApi = (lat: number,long: number) =>  {
    var addressResponse: AxiosResponse;

    const option: AxiosRequestConfig = {
      method: 'GET',  
      url: 'https://forward-reverse-geocoding.p.rapidapi.com/v1/forward',
      params: {
          lat: lat,
          lon: long,
          format: 'geojson',
          'accept-language': 'fr',
          polygon_threshold: '0.0'
      },
      headers: {
        'x-rapidapi-key': '4279e7fff6msh1799725cfed6926p167b57jsn718d63b58f57',
        'x-rapidapi-host': 'forward-reverse-geocoding.p.rapidapi.com'
      }
    };
    
    Axios.get('https://forward-reverse-geocoding.p.rapidapi.com/v1/forward',option).then(function (response) {
      addressResponse = response;
      console.log(addressResponse );
    }).catch(function (error) {
      console.error(error);
    });
  }
}