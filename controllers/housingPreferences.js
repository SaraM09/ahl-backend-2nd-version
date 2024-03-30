import db from "../config/db.js";   

// desc get all housingPreferences
// route GET /api/housingPreferences

export const getAllHousingPreferences = async (req, res) => {
const housingPreferences = await db.query("SELECT * FROM housingpreferences");
res.json(housingPreferences);
}

// get single housingPreferences
// route GET /api/housingPreferences/:id

export const getSingleHousingPreferences = async (req, res) => {
const {id} = req.params;
try{
    const housingPreferences = await db.one("SELECT * FROM housingpreferences WHERE id = $1", id);
    res.json(housingPreferences);
}
catch(err){
    res.status(400).json({message: "The housingPreferences could not be found"});
}
}

// desc create new housingPreferences
// route POST /api/housingPreferences

export const createHousingPreferences = async (req, res) => {
const { preferredLocation, numberOfBedrooms } = req.body;

try {
    
    const result = await db.query(
        "INSERT INTO housingpreferences (preferredLocation, numberOfBedrooms) VALUES ($1, $2) RETURNING *",
        [preferredLocation, numberOfBedrooms] 
    );
    res.json(result.rows);
}
catch(err){
    console.error("Error creating housingPreferences entry:", err);
    res.status(400).json({ message: "The housingPreferences could not be created" });
}
}


// desc update housingPreferences
// route PUT /api/housingPreferences/:id

export const updateHousingPreferences = async (req, res) => {
const { id } = req.params;
const { preferredLocation, numberOfBedrooms } = req.body;
try{
    const updatedHousingPreferences = await db.one(
        "UPDATE housingpreferences SET preferredLocation = $1, numberOfBedrooms = $2 WHERE id = $3 RETURNING *",
        [preferredLocation, numberOfBedrooms, id]
    );
    res.json(updatedHousingPreferences);
}
catch(err){
    res.status(400).json({message: "The housingPreferences could not be updated"});
}
}

// desc delete housingPreferences
// route DELETE /api/housingPreferences/:id
export const deleteHousingPreferences = async (req, res) => {
const { id } = req.params;
try{
    const deletedHousingPreferences = await db.one(
        "DELETE FROM housingpreferences WHERE id = $1 RETURNING *",
        id
    );
    res.json(deletedHousingPreferences);
}
catch(err){
    res.status(400).json({message: "The housingPreferences could not be deleted"});
}
}

