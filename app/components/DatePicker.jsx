import React, { useState, forwardRef } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const DatePicker = forwardRef((props, ref) => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <Datepicker
      useRange={false}
      asSingle={true}
      value={value}
      onChange={handleValueChange}
      displayFormat={"DD/MM/YYYY"}
      inputClassName="text-sm font-normal text-gray-900 input__date" 
    />
  )
});

export default DatePicker;
