import express from "express";
import axios from "axios";

//create a new express router
const housingRouter = express.Router();

// Route to fecth all housing data
housingRouter.get("/", async (req, res) => {
    try {
        const apiUrl = 'https://data.cityofnewyork.us/resource/hg8x-zxpr.json'
        const params = req.query;

        const response = await axios.get(apiUrl, {
            params
        })

        res.json(response.data)

} catch (error) {
    console.log('Error fetching housing data:', error);
    res.status(500).json({ message: 'Failed to fetch housing data' })
}
});

export default housingRouter;
