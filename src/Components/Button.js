import React from "react";

export default function Button({ name, onclick, type }) {
  return (
    <button
      className={
        type === 1
          ? "border rounded-full py-2 px-4 text-[#fff] font-[600] bg-[#f72]"
          : "border rounded-full py-2 px-4 font-[600] border-[#f72] text-[#f72]"
      }
      onClick={() => {
        onclick();
      }}
    >
      {name ? name : "Button"}
    </button>
  );
}
