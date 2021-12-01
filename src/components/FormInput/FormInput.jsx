import "./FormInput.styles.scss";

import React from "react";

export default function FormInput(props) {
  const { handleChange, label, ...remainingProps } = props;
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleChange}
        {...remainingProps}
      />
      {label && (
        <label
          className={`${
            remainingProps.value.length && "shrink"
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
}
