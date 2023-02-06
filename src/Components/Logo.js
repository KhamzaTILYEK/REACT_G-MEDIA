import React from "react";

export default function Logo({ name, size }) {
  return (
    <div
      className={`font-[700] text-[#f72] p-2 font${
        size ? size : "-[40px]"
      } cursor-pointer`}
    >
      {name ? name : "G-MEDIA"}
    </div>
  );
}
