import React, { useState } from "react";
import Button from "../Components/Button";
import CheckBox from "../Components/CheckBox";
import Input from "../Components/Input";
import Logo from "../Components/Logo";

export default function Components() {
  const [type, setType] = useState(false);
  return (
    <div>
      <Input />
      <div>
        <CheckBox />
      </div>
      <Button
        type={type}
        onclick={() => {
          setType(!type);
        }}
      />
      <Logo />
    </div>
  );
}
