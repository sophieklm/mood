import React from "react";

const Segment = (props) => {
  return (
    <div className="ui teal segment">
      <h3 className="ui teal centered header">{props.title}</h3>
      {props.children}
    </div>
  );
};

export default Segment;
