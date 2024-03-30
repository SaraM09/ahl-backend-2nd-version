import db from "../config/db.js";

// desc get all personalInfo
// GET /api/personalInfo

export const getAllPersonalInfo = async (req, res) => {
const personalInfo = await db.query("SELECT * FROM personInfo"); 
res.json(personalInfo); 
  
}

// get single personalInfo
// GET /api/personalInfo/:id

export const getSinglePersonalInfo = async (req, res) => {
const {id} = req.params;
try{
    const personalInfo = await db.one("SELECT * FROM personInfo WHERE id = $1", id);
    res.json(personalInfo);
}
catch(err){
    res.status(400).json({message: "The personalInfo could not be found"});
}
}

// desc create new personalInfo
// POST /api/personalInfo

export const createPersonalInfo = async (req, res) => {
    const { name, age, email, phone } = req.body;

    try {
        const params = [name, age, email, phone];
        const createPersonalInfoResult = await db.one(
            "INSERT INTO personInfo (name, age, email, phone) VALUES ($1, $2, $3, $4) RETURNING *",
            params
        );
        res.json(createPersonalInfoResult);
    }
    catch(err){
        console.error("Error creating personalInfo entry:", err);
        res.status(400).json({ message: "The personalInfo could not be created" });
    }
}

// desc update personalInfo
// PUT /api/personalInfo/:id

export const updatePersonalInfo = async (req, res) => {
    const { id } = req.params;
    const {name, age, email, phone } = req.body;
    try {
        const updatedPersonalInfo = await db.one(
            `UPDATE personInfo SET name=$1, age=$2, email=$3, phone=$4 WHERE id=$5 RETURNING *`,
            [name, age, email, phone, id]
        );
        res.json(updatedPersonalInfo);
    } catch (err) {
        console.error("Error updating personalInfo entry:", err);
        res.status(400).json({ message: "The personalInfo could not be updated" });
    }
}

// desc delete personalInfo
// DELETE /api/personalInfo/:id

export const deletePersonalInfo = async (req, res) => {

    const { id } = req.params;
    try {
        const deletedPersonalInfo = await db.one(
            "DELETE FROM personInfo WHERE id = $1 RETURNING *",
            [id]
        );
        res.json(deletedPersonalInfo);
    } catch (err) {
        console.error("Error deleting personalInfo entry:", err);
        res.status(400).json({ message: "The personalInfo could not be deleted" });
    }

}



