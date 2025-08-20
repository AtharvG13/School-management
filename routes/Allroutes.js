import express from "express";
import addSchool from "../controllers/schoolcontroller.js";
import listschool from "../controllers/Listcontroller.js";
const router = express.Router();

router.post("/addschool", addSchool);
router.get("/listschool", listschool);

export default router;
