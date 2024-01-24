import { Label, TextInput } from "flowbite-react";
import React from "react";

const Input = ({ label, type, id, placeholder, value, onChange }) => {
  return (
    <div className="bg-gray-400">
      <div className="mb-2 block">
        <Label htmlFor={id} value={label} />
      </div>
      <TextInput
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        required
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
