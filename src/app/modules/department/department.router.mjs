import express from "express";
import { DepartmentController } from "./department.controller.mjs";
const router = express.Router();

router.post("/", DepartmentController.createDepartment);
router.get("/", DepartmentController.getAllData);

export const DepartmentRouters = router;
