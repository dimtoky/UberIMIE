const axios = require('axios').default;


//continuer l'algo de dijkstra /-122.42,37.78;-77.03,38.91
const dijkstra = async (startPosition, tabCoord, len) => {
   // console.log(2);
    let lat = String(startPosition.lat), lng = String(startPosition.lng)
    let tab = tabCoord;
    let tabLen = len;
    let nbRoutes = len -1;
    let result = [];
    let minDuration;
    let min;
    let indexMinDuration;
    let minKm = 0;
    // if (len == 0) {
        
    // }
   // console.log("len: "+ nbRoutes)
    while ((nbRoutes) > 0) {
        for (let i = 0; i < tabLen; i++) {
            tab.push(await (axios.get("https://api.mapbox.com/directions/v5/mapbox/driving/" + lng + "," + lat + ";" + String(tab[i].lng) + "," + String(tab[i].lat) + ",38.91?geometries=geojson&access_token=pk.eyJ1IjoibWFyY2RldmVsb3BlciIsImEiOiJja2l1M2Y4bHgydzVuMnVxam41NTN1dGRrIn0.5EyahHfPXV8fdllizu949A"))
                .then(resp => {
                    //console.log(3);
                    //console.log(i,resp.data.waypoints);
                    if (minDuration == undefined) {
                        minDuration = resp.data;
                        min = minDuration.routes[0].duration; //il faut check si routes == undifened
                    } else if (resp.data.routes[0].duration < min) {
                        minDuration = resp.data;
                        min = minDuration.routes[0].duration;
                        indexMinDuration = i
                        
                    }
                   // tab.push(resp.data);
            }));
        }
        result.push(minDuration)
        console.log("tab before: " + tab,tabLen);
        tabLen--
        tab.slice(indexMinDuration,1);
        nbRoutes--
        console.log("tab after: " +tab,tabLen)
        lng = minDuration.waypoints[0].location[0]
        lat = minDuration.waypoints[0].location[1]
    }
        for (let j = 0; j<result.length;j++) {

            console.log(result[j].routes[0]);
        }
}
module.exports = { dijkstra }