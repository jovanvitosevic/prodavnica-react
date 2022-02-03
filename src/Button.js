import React from "react";

function Button({ label, onClick, className, disabled }) {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}

export default Button;
