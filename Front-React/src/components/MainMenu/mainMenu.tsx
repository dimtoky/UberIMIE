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
  steps: Array<string>,
  canSave: boolean
  addressTMP: AddressType,
  tabAddressTMP: Array<string>
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
      steps: [],
      canSave: false,
      addressTMP: {
        value: {
          lng: 0,
          lat: 0
        },
        label: ''
      },
      tabAddressTMP: []
    }
  }

  render() {
    const { classes, mapLine } = this.props;
    const listItems = this.state.steps.map((indication, index) => {
      return(<li key={index}>{indication}</li>)
    }
    );
    const listItemsAddresses = this.state.tabAddressTMP.map((addresses) => {
      return(<li key={addresses}>{addresses}</li>)
    }
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
                start: this.state.start,
                addressTMP: this.state.addressTMP,
                tabAddressTMP: this.state.tabAddressTMP
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
                    steps: this.state.steps,
                    addressTMP: event,
                    tabAddressTMP: this.state.tabAddressTMP
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
                    steps: this.state.steps,
                    addressTMP: event,
                    tabAddressTMP: this.state.tabAddressTMP
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
          <Button disabled={!this.state.canSave} onClick={() => this.saveItinary()} className={classes.iconButton}> Sauvegarder</Button>
          <ul className={classes.addressesInfo}>{listItemsAddresses}</ul>
          <ul className={classes.stepsInfo}>{listItems}</ul>
        </CardContent>

        <Button className={classes.switchButton} href="/history" variant="contained">Historique</Button>

      </Card>
     
    );
  }

  getCoordFromApi = () => {
    const address = this.state.addressChoice;
    var addressResponse: Array<any>;
    var tab: AddressType[] = [];
    if (!(address === '' || address === ' ')) {
      Axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?country=fr&access_token=pk.eyJ1IjoibWFyY2RldmVsb3BlciIsImEiOiJja2l1M2Y4bHgydzVuMnVxam41NTN1dGRrIn0.5EyahHfPXV8fdllizu949A')
        .then(function (response) {
          if (response.data.features) {
            addressResponse = response.data.features;
            if (addressResponse.length > 0) {
              alert("Adresse trouvée. La liste à été mise à jour.")
              for (var addr of addressResponse) {

                tab.push({
                  value: { lat: addr.geometry.coordinates[1], lng: addr.geometry.coordinates[0] },
                  label: addr.place_name
                });
              }
            }
            else {
              alert("Aucune adresse trouvé pour ce terme.")
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
    else {
      alert("veuillez entrer une adresse.")
    }
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
      this.setState({
        canSave: true 
      });
      alert("Calcul de l'initéraire, veuillez patienter...");
      Axios.post('http://127.0.0.1:3001/itinerary', {
        start: this.state.start,
        coords: this.state.addresses,
        len: this.state.addresses.length
      })
        .then(function (response) {
          let tabCoord: Array<any> = [];
          if (response.data.itinerary === []) {
            alert("Aucun Itineraire trouvé.");
          }
          else {
            alert("Itineraire prêt.")
            var num: number = 0,
              hours: number = 0,
              rhours: number = 0,
              minutes: number = 0,
              rminutes: number = 0,
              distance: number = 0;
            for (var item of response.data.itinerary) {
              num += item.routes[0].duration / 60;
              hours = (num / 60);
              rhours = Math.floor(hours);
              minutes = (hours - rhours) * 60;
              rminutes = Math.round(minutes);
              distance += (item.routes[0].distance / 1000);
            }
            tabSteps.push("Durée: " + rhours + " hour(s) and " + rminutes + " minute(s).");
            tabSteps.push("Distance: " + Math.round((distance * 100) / 100) + "km.");
            for (var itinerary of response.data.itinerary) {
              for (var coord of itinerary.routes[0].legs[0].steps) {
                if (coord.maneuver.type === 'depart' || coord.maneuver.type === 'arrive') {
                  tabSteps.push(coord.maneuver.instruction + ".");
                }
                else {
                  tabSteps.push(coord.maneuver.instruction + ". Dans " + coord.maneuver.bearing_before + "m. ");
                }
                for (var coordinates of coord.geometry.coordinates) {
                  tabCoord.push(coordinates);
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

  saveItinary = () => {

      alert("Itinéraire sauvegardée")
      Axios.post('http://127.0.0.1:30001/itinerary/save', {
        email: 'test',
        data: {
        start: this.state.start,
        coords: this.state.addresses,
        len: this.state.addresses.length}
      })
        .then(function (response) {
          console.log(response)
        }).catch(function (error) {
          console.error(error);
        });
  }

  initAddressInputSelection = (): number => {
    var tab: Array<coordonees> = this.state.addresses;
    var tabAddrTmp: Array<string> = this.state.tabAddressTMP;

    if (!tabAddrTmp.includes(this.state.addressTMP.label)) {
      tabAddrTmp.push(this.state.addressTMP.label);
      tab.push(this.state.addressTMP.value)
    }
    else {
      alert("Vous avez déjà choisie cette adresse.");
      return 0;
    }
    this.setState({
      start: this.state.start,
      addresses: tab,
      addressChoice: '',
      tabAdressesName: [],
      steps: [],
      addressTMP: this.state.addressTMP,
      tabAddressTMP: tabAddrTmp
    });
    alert("Adresse enregistré.")
    return 1;
  }

  public fetchSteps = (tabSteps: Array<string>) => {
    this.setState({
      addressChoice: this.state.addressChoice,
      addresses: this.state.addresses,
      start: this.state.start,
      tabAdressesName: this.state.tabAdressesName,
      steps: tabSteps,
      addressTMP: this.state.addressTMP
    })
  }
}

