import React from 'react';
import { Button, Card, CardContent, CardHeader, IconButton, TextField, withStyles, WithStyles } from '@material-ui/core';
import styles, { Styles } from './styles';
import Avatar from '@material-ui/core/Avatar';
import { coordonees } from '../../Interfaces/coordonnees';
import Axios from 'axios';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import Select from 'react-select';

interface P { mapLine: (coords: Array<any>, zoom: number) => void }
interface S {
  addresses: Array<coordonees>,
  start: coordonees
  addressChoice: string,
  tabAdressesName: Array<AddressType>,
  steps: Array<string>
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
      tabAdressesName: [],
      steps: []
    }
  }

  render() {
    const { classes, mapLine } = this.props;
    const listItems = this.state.steps.map((indication) =>
      <li>{indication}</li>
    );
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
        <div className={classes.blockSearch}>
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
        </div>

          <Select
            className={classes.inputSelect}
            menuPortalTarget={document.body}
            menuPosition={'fixed'}
            isSearchable
            options={this.state.tabAdressesName}
            onChange={(event) => {
              if (event) {
                if (this.state.start.lat === 0 && this.state.start.lng === 0) {
                  this.setState({
                    addressChoice: this.state.addressChoice,
                    tabAdressesName: this.state.tabAdressesName,
                    addresses: this.state.addresses,
                    start: event.value,
                    steps: this.state.steps
                  });
                }
                else {
                  var tab: Array<coordonees> = this.state.addresses;
                  tab.push(event.value)
                  this.setState({
                    addressChoice: event.label,
                    tabAdressesName: this.state.tabAdressesName,
                    addresses: tab,
                    start: this.state.start,
                    steps: this.state.steps
                  });
                }
              }
            }
            }
          >
          </Select>
          <IconButton type="submit" className={classes.addIconButton} aria-label="add" onClick={this.initAddressInputSelection}>
            <AddIcon />
          </IconButton>
          <Button onClick={() => this.searchItinary(mapLine)} className={classes.validateButton}> Valider</Button>

          <ul className={classes.stepsInfo}>{listItems}</ul>
        </CardContent>


      </Card>
    );
  }

  getCoordFromApi = () => {
    const address = this.state.addressChoice;
    var addressResponse: Array<any>;
    var tab: AddressType[] = [];
    Axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?country=fr&access_token=pk.eyJ1IjoibWFyY2RldmVsb3BlciIsImEiOiJja2l1M2Y4bHgydzVuMnVxam41NTN1dGRrIn0.5EyahHfPXV8fdllizu949A')
      .then(function (response) {
        if (response.data.features) {
          alert("Adresse trouvée. La liste à été mise à jour.")
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
      start: this.state.start,
      steps: this.state.steps
    });
  };

  searchItinary = (mapLineFunction: (coords: Array<any>, zoom: number) => void) => {
    var tabSteps: Array<string> = [];
    var tmp: this = this;
    if (this.state.addresses.length > 0) {
      alert("Calcul de l'initéraire, veuillez patienter...")
      Axios.post('http://127.0.0.1:3001/itinary', {
        start: this.state.start,
        coords: this.state.addresses,
        len: this.state.addresses.length
      })
        .then(function (response) {
          let tabCoord: Array<any> = [];
          if (response.data.itinary === []) {
            alert("Aucun Itineraire trouvé.");
          }
          else {
            console.log(response.data.itinary)
            alert("Itineraire prêt.")
            for (var itinary of response.data.itinary) {
              for (var coord of itinary.routes[0].legs[0].steps) {
                console.log(coord.maneuver)
                if(coord.maneuver.type === 'depart' || coord.maneuver.type === 'arrive') {
                  tabSteps.push( coord.maneuver.instruction + ".");

                }
                else {
                  tabSteps.push( coord.maneuver.instruction + ". Dans " + coord.maneuver.bearing_before + "m. ");
                } 
                for (var item of coord.geometry.coordinates) {
                  tabCoord.push(item);
                }
              }
            }
            mapLineFunction(tabCoord, 10);
            tmp.fetchSteps(tabSteps);
          }
        }).catch(function (error) {
          console.error(error);
        });
    }
    else {
      alert("Nombre d'adresse insufisant.");
    }
  }

  initAddressInputSelection = () => {
    this.setState({
      start: this.state.start,
      addresses: this.state.addresses,
      addressChoice: '',
      tabAdressesName: []
    });
    alert("Adresse enregistré.")
  }

  public fetchSteps = (tabSteps: Array<string>) => {
    console.log("ok", tabSteps)
    this.setState({
      addressChoice: this.state.addressChoice,
      addresses: this.state.addresses,
      start: this.state.start,
      tabAdressesName: this.state.tabAdressesName,
      steps: tabSteps
    })
  }
}

