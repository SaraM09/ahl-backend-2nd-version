import express from "express";
import {
getAllPersonalInfo,
getSinglePersonalInfo,
createPersonalInfo,
updatePersonalInfo,
deletePersonalInfo
} from "../controllers/personalInfo.js";

const router = express.Router();

// desc get all personalInfo
// route GET /api/personalInfo
router.get("/", getAllPersonalInfo);

// get single personalInfo
// route GET /api/personalInfo/:id
router.get("/:id", getSinglePersonalInfo);

// desc create new personalInfo
// route POST /api/personalInfo
router.post("/", createPersonalInfo);

// desc update personalInfo
// route PUT /api/personalInfo/:id
router.put("/:id", updatePersonalInfo);

// desc delete personalInfo
// route DELETE /api/personalInfo/:id
router.delete("/:id", deletePersonalInfo);





export default router;
