const express = require("express");
const { getJobs, getJobDetail } = require("../controllers/jobController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, getJobs);
router.get("/:id", authMiddleware, getJobDetail);

module.exports = router;
