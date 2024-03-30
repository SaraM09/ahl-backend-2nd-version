import express from "express";  
import { getAllHousingPreferences, getSingleHousingPreferences, createHousingPreferences, updateHousingPreferences, deleteHousingPreferences} from "../controllers/housingPreferences.js";

const router = express.Router();

// desc get all housingPreferences
// route GET /api/housingPreferences

router.get("/", getAllHousingPreferences);

// get single housingPreferences
// route GET /api/housingPreferences/:id

router.get("/:id", getSingleHousingPreferences);

// desc create new housingPreferences
// route POST /api/housingPreferences

router.post("/", createHousingPreferences);

// desc update housingPreferences
// route PUT /api/housingPreferences/:id

router.put("/:id", updateHousingPreferences);

// desc delete housingPreferences
// route DELETE /api/housingPreferences/:id

router.delete("/:id", deleteHousingPreferences);

export default router;
