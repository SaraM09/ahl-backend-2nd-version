import express from "express";
import { getAllIncomeDetails, getSingleIncomeDetails, createIncomeDetails, updateIncomeDetails, deleteIncomeDetails  } from "../controllers/incomeDetails.js";

const router = express.Router();

// desc get all incomeDetails
// Get /api/incomeDetails

router.get("/", getAllIncomeDetails);

// get single incomeDetails
// Get /api/incomeDetails/:id

router.get("/:id", getSingleIncomeDetails);

// desc create new incomeDetails
// Post /api/incomeDetails

router.post("/", createIncomeDetails);

// desc update incomeDetails
// Put /api/incomeDetails/:id

router.put("/:id", updateIncomeDetails);

// desc delete incomeDetails
// Delete /api/incomeDetails/:id

router.delete("/:id", deleteIncomeDetails);





export default router;