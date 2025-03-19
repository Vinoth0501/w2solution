"use client";
import { useState } from "react";
import { MenuItem, Select } from "@mui/material";
import "./index.css";

const Dropdown = ({ options, showFlags = false }) => {
  const [selectedValue, setSelectedValue] = useState(options[0]?.id || "");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Select
      value={selectedValue}
      onChange={handleChange}
      displayEmpty
      variant="outlined"
      sx={{
        minWidth: 80,
        "& .MuiSelect-icon": { color: "black" },
        bgcolor: "none",
        height: 30,
        border: "none",
      }}
    >
      {options.map((option) => (
        <MenuItem key={option.id} value={option.id}>
          {showFlags ? (
            <>
              {option.img && (
                <img
                  src={option.img}
                  alt={option.alt}
                  width={40}
                  height={25}
                  style={{ marginRight: 8 }}
                />
              )}
              {/* {option.alt} */}
            </>
          ) : (
            option.alt
          )}
        </MenuItem>
      ))}
    </Select>
  );
};

export default Dropdown;
