import React, { useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { Link } from "react-router-dom";

// https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json
const DropDown = () => {
  const [select, setSelect] = useState();

  const handleChange = (e) => {
    setSelect(e.target.value);
  };
  return (
    <div>
      <Link to="/grid">
        {" "}
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={select}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={"id"}>id</MenuItem>
            <MenuItem value={"name"}>name</MenuItem>
            <MenuItem value={"email"}>email</MenuItem>
            <MenuItem value={"role"}>role</MenuItem>
          </Select>
        </FormControl>
      </Link>
    </div>
  );
};
export default DropDown;
