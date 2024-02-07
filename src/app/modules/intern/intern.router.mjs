import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Intern Route Working Fine",
  });
});

export const InternRouters = router;
