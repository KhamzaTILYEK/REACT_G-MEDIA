import React, { useState } from "react";

export default function CheckBox() {
  const [checked, setChecked] = useState(false);
  return (
    <div
      onClick={() => {
        setChecked(!checked);
      }}
      className={`border rounded-[4px] w-4 h-4 cursor-pointer ${
        checked ? "bg-[#f73]" : "bg-[#fff]"
      }`}
    ></div>
  );
}
