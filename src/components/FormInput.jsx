import React from "react";

const FormInput = ({ label, type, name, defaultValue, size }) => {
  return (
    <fieldset className="label">
      <legend className="label-text capitalize">{label}</legend>
      <input
        type={type}
        className={`input ${size}`}
        name={name}
        defaultValue={defaultValue}
      />
    </fieldset>
  );
};

export default FormInput;
