import React from 'react';
import { Button, Card, CardContent, CardHeader, IconButton, TextField, withStyles, WithStyles } from '@material-ui/core';
import styles, { Styles } from './styles';
import Avatar from '@material-ui/core/Avatar';
import { coordonees } from '../../Interfaces/coordonnees';
import Axios from 'axios';
import SearchIcon  from '@material-ui/icons/Search';
import AddIcon  from '@material-ui/icons/Add';
import Select from 'react-select';

interface P { mapLine: (coords: Array<any>, zoom: number) => void }
interface S {
  addresses: coordonees[],
  start: coordonees
  addressChoice: string,
  tabAdressesName: AddressType[]
}
interface AddressType {
  value: coordonees;
  label: string;
}

export class MainMenu extends React.PureComponent<P & WithStyles<Styles>, S>{
  public state: Readonly<S>;
  public static Display = withStyles(styles as any)(MainMenu) as React.ComponentType<P>
  constructor(props: any) {
    super(props);
    this.state = {
      start: {
        lng: 0,
        lat: 0
      },
      addresses: [],
      addressChoice: '',
      tabAdressesName: []
    }
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
          title="Driver itinerary"
          subheader="Select your addresses:"
          className={classes.subHeader}
        />

        <CardContent>
          <TextField
            label="Address..."
            variant="outlined"
            InputProps={{ type: 'search' }}
            onChange={(event) => this.setState({
              addressChoice: event.target.value,
              tabAdressesName: this.state.tabAdressesName,
              addresses: this.state.addresses,
              start: this.state.start
            })}
            className={classes.input}
          />
          <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={this.getCoordFromApi}>
            <SearchIcon />
          </IconButton>
          
          <Select
            menuPortalTarget={document.body}
            menuPosition={'fixed'}
            isSearchable
            options={this.state.tabAdressesName}
            className={classes.input}
            onChange={(event) => {
              if (event) {
                if(this.state.start.lat===0 && this.state.start.lng===0) {
                  this.setState({
                    addressChoice: this.state.addressChoice,
                    tabAdressesName: this.state.tabAdressesName,
                    addresses: this.state.addresses,
                    start: event.value
                  });
                }
                else {
                  var tab = this.state.addresses;
                  tab.push(event.value)
                  this.setState({
                    addressChoice: event.label,
                    tabAdressesName: this.state.tabAdressesName,
                    addresses: tab,
                    start: this.state.start
                  });
                }
              }
            }
            }
          >
          </Select>
          <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={this.initAddressInputSelection}>
            <AddIcon />
          </IconButton>
          <Button onClick={() => this.searchItinary(mapLine)} className={classes.iconButton}> Valider</Button>
        </CardContent>
      </Card>
    );
  }

  getCoordFromApi = () => {
    const address = this.state.addressChoice;
    var addressResponse;
    var tab: AddressType[] = [];
    Axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?country=fr&access_token=pk.eyJ1IjoibWFyY2RldmVsb3BlciIsImEiOiJja2l1M2Y4bHgydzVuMnVxam41NTN1dGRrIn0.5EyahHfPXV8fdllizu949A')
      .then(function (response) {
        if (response.data.features) {
          addressResponse = response.data.features;
          for (var addr of addressResponse) {
            tab.push({
              value: { lat: addr.geometry.coordinates[1], lng: addr.geometry.coordinates[0] },
              label: addr.place_name

            });
          }
        }

      }).catch(function (error) {
        console.error(error);
      });
    this.setState({
      addressChoice: this.state.addressChoice,
      tabAdressesName: tab,
      addresses: this.state.addresses,
      start: this.state.start
    })
  }
  handleChange = (selectedOption: AddressType) => {
    this.setState({
      addressChoice: selectedOption.label,
      tabAdressesName: this.state.tabAdressesName,
      addresses: this.state.addresses,
      start: this.state.start
    });
  };

  searchItinary = (mapLineFunction: any) => {
    if(this.state.addresses.length > 0) {
      Axios.post('http://127.0.0.1:3001/itinary', {
        start: this.state.start,
        coords: this.state.addresses,
        len: this.state.addresses.length
      })
        .then(function (response) {
          let tabCoord: Array<any> = [];
          for( var itinary of response.data.itinary) {
            for(var coord of itinary.routes[0].legs[0].steps) {
              for(var item of coord.geometry.coordinates) {
                tabCoord.push(item)
              }
            }
          }
          mapLineFunction(tabCoord, 10)
        }).catch(function (error) {
          console.error(error);
        });
    }
    else {
      alert("Nombre d'adresse insufisant.");
    }
  }

  initAddressInputSelection= () => {
    this.setState({
      start: this.state.start,
      addresses: this.state.addresses,
      addressChoice: '',
      tabAdressesName: []
    });
  }

}

