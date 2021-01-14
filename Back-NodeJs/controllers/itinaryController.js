const { dijkstra } = require('../utils/dijkstra.utils');

module.exports = {
    // @route POST itinary/
    // @desc  dijsktra algorithm
    dijkstraTest: async (req, res) => {
        console.log("Compute itinary...");
        if (req.body.start && req.body.coords && req.body.len) {
            const result = await dijkstra(req.body.start, req.body.coords, req.body.len)
            res.status(200).json({
                itinary: result
            })
        }
        else {
            res.status(400).json({
                Error: "Invalid request"
            })
        }

        console.log("Itinary: OK");
    }
}