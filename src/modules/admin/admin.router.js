const express = require("express");
const router = express.Router();
const { createAdmin, getAllData } = require("./admin.controller");

router.post("/", createAdmin);
router.get("/", getAllData);

const AdminRouter = router;
module.exports = AdminRouter;
