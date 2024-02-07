const express = require("express");
const router = express.Router();
const {
  createAdmin,
  getAllData,
  getSingleData,
  updateAdmin,
  deleteAdmin,
} = require("./admin.controller");

router.post("/", createAdmin);
router.get("/", getAllData);

router.get("/:id", getSingleData);
router.patch("/:id", updateAdmin);
router.delete("/:id", deleteAdmin);

const AdminRouter = router;
module.exports = AdminRouter;
