import React from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, TextField, withStyles, WithStyles } from '@material-ui/core';
import styles, { Styles } from './styles';
import Avatar from '@material-ui/core/Avatar';
import { coordonees } from '../../Interfaces/coordonnees';
import Axios from 'axios';
import SearchIcon from '@material-ui/icons/Search';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

interface P { }
interface S {
  addresses: coordonees[],
  addressChoice: string,
  tabAdressesName: AddressType[]
}
interface AddressType {
  inputValue?: string;
  address: string;
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
      addressChoice: '',
      tabAdressesName: []
    }
  }

  render() {
    const filter = createFilterOptions<AddressType>();
    const { classes } = this.props;
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
          <Autocomplete
            className={classes.input}
            freeSolo
            getOptionLabel={(option) => {
              if (typeof option === 'string') {
                return option;
              }
              if (option.inputValue) {
                return option.inputValue;
              }
              return option.address;
            }}
            options={this.state.tabAdressesName}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Address..."
                variant="outlined"
                InputProps={{ ...params.InputProps, type: 'search' }}
                onChange={(event) => this.setState({
                  addressChoice: event.target.value,
                  tabAdressesName: this.state.tabAdressesName,
                  addresses: this.state.addresses
                })}
              />
            )}
            filterOptions={(options, params) => {
              const filtered = filter(options, params);

              if (params.inputValue !== '') {
                filtered.push({
                  inputValue: params.inputValue,
                  address: `Add "${params.inputValue}"`
                });
              }
              return filtered;
            }}
            disableClearable
          />

          <Button onClick={this.getCoordFromApi}>
            <SearchIcon className={classes.search} />
          </Button>

          <CardActions disableSpacing>
          </CardActions>
        </CardContent>
      </Card>
    );
  }

  getCoordFromApi = () => {
    const address = this.state.addressChoice;
    console.log(address)
    var addressResponse;
    var tab: any = [];
    Axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?country=fr&access_token=pk.eyJ1IjoibWFyY2RldmVsb3BlciIsImEiOiJja2l1M2Y4bHgydzVuMnVxam41NTN1dGRrIn0.5EyahHfPXV8fdllizu949A')
      .then(function (response) {
        if (response.data.features) {
          addressResponse = response.data.features;
          console.log(addressResponse);
          for (var addr of addressResponse) {
              tab.push(addr.place_name);
          }
          for (var i of tab) {
            console.log(i)
          }
        }

      }).catch(function (error) {
        console.error(error);
      });
    this.setState({
      addressChoice: this.state.addressChoice,
      tabAdressesName: tab,
      addresses: this.state.addresses
    })
  }
}