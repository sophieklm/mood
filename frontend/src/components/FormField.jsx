import React from "react";

const FormField = (props) => {
  return (
    <div className="field">
      <label>{props.label}</label>
      {props.children}
    </div>
  );
};

export default FormField;
