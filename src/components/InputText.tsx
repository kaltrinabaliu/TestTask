import React from "react";

const InputText = ({ label, placeholder, value, onChange }: any) => {
  return (
    <div className="flex flex-col">
      <p className="text-[14px] mb-2">{label}:</p>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-100 p-2"
      />
    </div>
  );
};

export default InputText;
