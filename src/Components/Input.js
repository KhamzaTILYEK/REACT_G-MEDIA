import React from "react";

export default function Input({ placeholder, disabled }) {
  return (
    <input
      disabled={disabled}
      className="border border-[#aaa] rounded-full px-3 py-1  focus:outline-none focus:border-[#f72] text-[#000]"
      placeholder={placeholder ? placeholder : "Input"}
    />
  );
}
