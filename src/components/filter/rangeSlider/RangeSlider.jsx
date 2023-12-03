import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export function RangeSlider() {
  const [value, setValue] = React.useState([1990, 2010]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 320, marginBottom: "40px" }}>
      <Slider
        defaultValue={value}
        step={1}
        marks
        min={1980}
        max={2023}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
      />
    </Box>
  );
}
