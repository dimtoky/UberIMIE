const axios = require('axios').default;

module.exports = {
    //continuer l'algo de dijkstra
    dijkstra: () => {
        axios.get("https://api.mapbox.com/directions/v5/mapbox/driving/-122.42,37.78;-77.03,38.91?geometries=geojson&access_token=pk.eyJ1IjoibWFyY2RldmVsb3BlciIsImEiOiJja2l1M2Y4bHgydzVuMnVxam41NTN1dGRrIn0.5EyahHfPXV8fdllizu949A")
        .then(resp => {

            console.log(resp.data);
        });
    }
}