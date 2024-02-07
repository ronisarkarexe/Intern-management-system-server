const express = require("express");
const router = express.Router();

const { createDepartment, getAllData } = require("./department.controller");

router.post("/", createDepartment);
router.get("/", getAllData);

const DepartmentRouters = router;
module.exports = DepartmentRouters;
