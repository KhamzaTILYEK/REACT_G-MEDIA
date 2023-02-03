import React from "react";
import Button from "../Components/Button";
import CheckBox from "../Components/CheckBox";
import Input from "../Components/Input";
import Logo from "../Components/Logo";

export default function Components() {
  return (
    <div>
      <Input />
      <div>
        <CheckBox />
      </div>
      <Button />
      <Logo />
    </div>
  );
}
