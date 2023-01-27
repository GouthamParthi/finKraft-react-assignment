import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import "./table.css";
const Table = () => {
  const [columns] = useState([
    { field: "id" },
    { field: "name" },
    { field: "email" },
    { field: "role" }
  ]);
  const [isLoading, setLoading] = useState(false);
  const [rowData, setRowData] = useState([]);
  async function fetchApi() {
    const url =
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";
    setLoading(true);
    try {
      const response = await axios.get(url);
      setRowData(response.data);
      setLoading(false);
    } catch (e) {
      alert("check the backend");
    }
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      <>
        {!isLoading ? (
          <DataGrid
            rows={rowData}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            sx={{ height: "400px", width: "100%" }}
          />
        ) : (
          <div className="table">
            <CircularProgress />
          </div>
        )}{" "}
      </>
      <button className="pill-button">cSortby Descending</button>
    </div>
  );
};

export default Table;
