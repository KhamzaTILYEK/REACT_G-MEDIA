import React, { useState } from "react";
import Button from "./Button";

export default function Header() {
  const [a, setA] = useState(false);
  return (
    <div>
      <div className={a ? "text-[#f32]" : "text-[#f72]"}>Header</div>
      <Button
        type={1}
        name="Test"
        onclick={() => {
          setA(!a);
        }}
      />
    </div>
  );
}
