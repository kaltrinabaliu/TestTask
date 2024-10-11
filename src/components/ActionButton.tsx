import React from "react";

const ActionButton = ({ label, click, bgColor, hoverBgColor }: any) => {
  return (
    <div>
      <button
        onClick={click}
        className={`${bgColor} text-white px-4 py-2 rounded hover:${hoverBgColor}`}
      >
        {label}
      </button>
    </div>
  );
};

export default ActionButton;
