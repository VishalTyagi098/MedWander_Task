// src/App.js
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css"; // Import external CSS file for styling

function App() {
  const navigate = useNavigate();

  const navigateToForm = (formType) => {
    navigate(`/form/${formType}`);
  };

  const refreshData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/forms/export",
        {
          responseType: "blob",
        }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "form_data.xlsx");
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Form Management</h1>
      <div className="button-group">
        <button onClick={() => navigateToForm("A")} className="app-button">
          Form A
        </button>
        <button onClick={() => navigateToForm("B")} className="app-button">
          Form B
        </button>
        <button onClick={refreshData} className="app-button app-button-refresh">
          Refresh
        </button>
      </div>
    </div>
  );
}

export default App;
