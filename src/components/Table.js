import React from "react";
import TableRow from "./TableRow";

class Table extends React.Component {
  render() {
    return (
      <table className="ui celled padded table">
        <thead>
          <tr>
            <th className="single line">Mood</th>
            <th>Feeling</th>
            <th>Comment</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <TableRow data={this.props.data} />
        </tbody>
      </table>
    );
  }
}

export default Table;
