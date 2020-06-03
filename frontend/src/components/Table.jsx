import React from "react";
import TableRow from "./TableRow";

const Table = (props) => {
  return props.data.map((item) => {
    return <TableRow data={item} key={item.createdAt} />;
  });
};

export default Table;
