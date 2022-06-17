import React from "react";

export default function Button({ children, isActive, onClick }) {
  const btnClasses = {
    active: "bg-indigo-700",
    inactive: "bg-indigo-300 hover:bg-indigo-400",
  };

  return (
    <button
      className={isActive ? btnClasses.active : btnClasses.inactive}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
