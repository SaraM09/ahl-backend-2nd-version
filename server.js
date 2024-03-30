import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import personalInfoRouter from "./routes/personalInfo.js";
import housingRouter from "./routes/housing.js";
import housingPreferencesRouter from "./routes/housingPreferences.js";
import incomeRouter from "./routes/incomeDetails.js";
import housingRouter2 from "./routes/housing2.js";

// Load environment variables from .env file
dotenv.config({path: "./config/config.env"});



const app = express();
app.use(cors());
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

// Routes 
app.use("/api/personalInfo", personalInfoRouter);
app.use("/api/housing", housingRouter);
app.use("/api/housingPreferences", housingPreferencesRouter);
app.use("/api/incomeDetails", incomeRouter);
app.use("/api/housing2", housingRouter2);




const PORT = process.env.PORT || 1118;


app.listen(PORT, () => {
 console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);});