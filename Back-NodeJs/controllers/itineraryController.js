const { number } = require('@hapi/joi');
const { dijkstra } = require('../utils/dijkstra.utils');

module.exports = {
    // @route POST itinary/
    // @desc  dijsktra algorithm
    dijkstraTest: async (req, res) => {
        if (req.body.start && req.body.coords && req.body.len) {
            if ((req.body.start.lat && req.body.start.lng) && (req.body.coords[0]) && typeof(req.body.len) == 'number' && req.body.len > 0) {
                if (typeof(req.body.start.lat) == 'number' && typeof(req.body.start.lng) == 'number') {
                        console.log("Compute itinerary...");
                        const result = await dijkstra(req.body.start, req.body.coords, req.body.len)
                        if (result.length > 0) {
                            res.status(200).json({
                                error: null,
                                itinerary: result
                            })
                        }
                        else {
                            res.status(400).json({
                                error: "Invalid request"
                            })
                        }
                    }
                    else {
                        res.status(400).json({
                            error: "Invalid request"
                        })
                    }
                }
                else {
                    res.status(400).json({
                        error: "Invalid request"
                    })
                }
            }
            else {
                res.status(400).json({
                    error: "Invalid request"
                })
            }
        console.log("Itinerary: OK");
    }
}