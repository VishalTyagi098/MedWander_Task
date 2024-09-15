// controllers/formController.js
const FormData = require("../models/formData");

// Submit form data
exports.submitFormData = async (req, res) => {
  const { name, countryCode, phoneNumber, formType } = req.body;
  try {
    const formData = await FormData.create({
      name,
      countryCode,
      phoneNumber,
      formType,
    });
    res.status(201).json(formData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get form data
exports.getFormData = async (req, res) => {
  try {
    const data = await FormData.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// controllers/formController.js

const XLSX = require("xlsx");

// Export data to Excel
exports.exportToExcel = async (req, res) => {
  try {
    const data = await FormData.findAll();
    const jsonData = data.map((item) => item.dataValues);

    const worksheet = XLSX.utils.json_to_sheet(jsonData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "FormData");

    const excelBuffer = XLSX.write(workbook, {
      type: "buffer",
      bookType: "xlsx",
    });

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=" + "form_data.xlsx"
    );
    res.send(excelBuffer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
