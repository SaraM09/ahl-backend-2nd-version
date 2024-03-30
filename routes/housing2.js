import express from "express";
import axios from "axios";

//create a new express router
const housingRouter2 = express.Router();

// Route to fecth all housing data
housingRouter2.get("/", async (req, res) => {
    try {
        const apiUrl = 'https://data.cityofnewyork.us/resource/9ay9-xkek.json'
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

export default housingRouter2;