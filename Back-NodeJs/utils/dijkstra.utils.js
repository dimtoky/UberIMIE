const axios = require('axios').default;

const dijkstra = async (startPosition, tabCoord, len) => {
    let lat = String(startPosition.lat), lng = String(startPosition.lng)
    let tab = tabCoord;
    let tabLen = len;
    let nbRoutes = len;
    let result = [];
    let minDuration;
    let min;
    let indexMinDuration;
    while ((nbRoutes) > 0) {
        for (let i = 0; i < tabLen; i++) {
            tab.push(await (axios.get("https://api.mapbox.com/directions/v5/mapbox/driving/" + lng + "," + lat + ";" + String(tab[i].lng) + "," + String(tab[i].lat) + "?alternatives=false&geometries=geojson&steps=true&language=fr&access_token=pk.eyJ1IjoibWFyY2RldmVsb3BlciIsImEiOiJja2l1M2Y4bHgydzVuMnVxam41NTN1dGRrIn0.5EyahHfPXV8fdllizu949A"))
                .then(resp => {
                    if (resp.status == 200) {
                        console.log(resp.data.waypoints)
                        if (minDuration == undefined) {
                            minDuration = resp.data;
                            min = minDuration.routes[0].duration; //il faut check si routes == undifened
                            indexMinDuration = i;
                        } else if (resp.data.routes[0].duration <= min) {
                            minDuration = resp.data;
                            min = minDuration.routes[0].duration;
                            indexMinDuration = i;
                        }
                    }
                    else {
                        // a voir
                        console.log(resp);
                    }
                }));
        }
        result.push(minDuration)
        console.log(minDuration.waypoints)
        tabLen--;
        tab.splice(indexMinDuration, 1);
        nbRoutes--;
        lng = minDuration.waypoints[1].location[0];
        lat = minDuration.waypoints[1].location[1];
        minDuration = undefined;
    }
    return result;
}
module.exports = { dijkstra }