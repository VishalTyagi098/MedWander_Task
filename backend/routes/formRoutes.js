// routes/formRoutes.js
const express = require("express");
const router = express.Router();
const { exportToExcel } = require("../controllers/formController");

const {
  submitFormData,
  getFormData,
} = require("../controllers/formController");

// POST /api/forms/submit
router.post("/submit", submitFormData);

// GET /api/forms/data
router.get("/data", getFormData);

// GET /api/forms/export
router.get("/export", exportToExcel);

module.exports = router;
