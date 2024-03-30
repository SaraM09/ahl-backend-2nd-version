import db from "../config/db.js";

// desc get all incomeDetails
// route GET /api/incomeDetails
export const getAllIncomeDetails = async (req, res) => {
const incomeDetails = await db.query("SELECT * FROM incomedetails");
res.json(incomeDetails);
}

// get single incomeDetails
// route GET /api/incomeDetails/:id
export const getSingleIncomeDetails = async (req, res) => {
const {id} = req.params;
try{
    const incomeDetails = await db.one("SELECT * FROM incomedetails WHERE id = $1", id);
    res.json(incomeDetails);
}
catch(err){
    res.status(400).json({message: "The incomeDetails could not be found"});
}
}

// desc create new incomeDetails
// route POST /api/incomeDetails
export const createIncomeDetails = async (req, res) => {
const { annualIncome, sourceOfIncome } = req.body;

try {
    
    const result = await db.query(
        "INSERT INTO incomedetails (annualIncome, sourceOfIncome) VALUES ($1, $2) RETURNING *",
        [annualIncome, sourceOfIncome] 
    );
    res.json(result.rows);

}
catch(err){
    console.error("Error creating incomeDetails entry:", err);
    res.status(400).json({ message: "The incomeDetails could not be created" });
}
}

// desc update incomeDetails
// route PUT /api/incomeDetails/:id
export const updateIncomeDetails = async (req, res) => {
const { id } = req.params;
const { annualIncome, sourceOfIncome } = req.body;
try{
    const updatedIncomeDetails = await db.one(
        "UPDATE incomedetails SET annualIncome = $1, sourceOfIncome = $2 WHERE id = $3 RETURNING *",
        [annualIncome, sourceOfIncome, id]
    );
    res.json(updatedIncomeDetails);
}
catch(err){
    res.status(400).json({message: "The incomeDetails could not be updated"});
}
}

// desc delete incomeDetails
// route DELETE /api/incomeDetails/:id

export const deleteIncomeDetails = async (req, res) => {
const {id} = req.params;
try{
    const deletedIncomeDetails = await db.one(
        "DELETE FROM incomedetails WHERE id = $1 RETURNING *",
        [id]
    );
    res.json(deletedIncomeDetails);
}
catch(err){
    res.status(400).json({message: "The incomeDetails could not be deleted"});
}
}









