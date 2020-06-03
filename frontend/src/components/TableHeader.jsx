import React from "react";

const TableHeader = (props) => {
  return (
    <thead>
      <tr>
        <th className="single line">Mood</th>
        <th>Feeling</th>
        <th>Comment</th>
        <th>Date</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
