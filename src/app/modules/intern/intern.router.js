const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Intern Route Working Fine",
  });
});

const InternRouter = router;
module.exports = InternRouter;
