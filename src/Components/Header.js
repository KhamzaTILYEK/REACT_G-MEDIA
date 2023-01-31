import React, { useState } from "react";
import Button from "./Button";
import Logo from "./Logo";

export default function Header() {
  const [a, setA] = useState(false);
  return (
    <div>
      <Logo />
      <div className={a ? "text-[#f32]" : "text-[#f72]"}>Header</div>
      <Button
        type={a ? 1 : 0}
        name="Color changer"
        onclick={() => {
          setA(!a);
        }}
      />
    </div>
  );
}
