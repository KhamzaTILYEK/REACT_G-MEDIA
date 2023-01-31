import React from "react";

export default function Button({ name, onclick, type }) {
  return (
    <button
      onClick={() => {
        onclick();
      }}
    >
      {name}
    </button>
  );
}
