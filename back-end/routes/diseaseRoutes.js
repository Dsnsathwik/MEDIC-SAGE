// routes/diseaseRoutes.js

import express from "express";
import { fetchDiseaseByName, fetchAll } from "../controllers/diseaseController.js";

const router = express.Router();

// Route to fetch disease by name
router.post("/fetch-by-name", fetchDiseaseByName);
router.get("/fetch-all", fetchAll);

export default router;
