const { dijkstra } = require('../utils/dijkstra.utils');

module.exports = {
    // @route GET itinary/
    // @desc  dijsktra algorithm
    // @access Public
    dijkstraTest: async (req, res) => {
        console.log("Compute itinary...");
        console.log(req)
        const result = await dijkstra(req.body.start, req.body.coords, req.body.len)
        res.status(200).json({
            itinary: result
        })
        console.log("Itinary: OK");
    }
}