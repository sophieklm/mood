import React from "react";
import TableRow from "./TableRow";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.data };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.data !== state.prevPropsData) {
      return {
        prevPropsData: props.data,
        data: props.data,
      };
    }
    return null;
  }

  renderTableRow() {
    if (!this.state.data) {
      return null;
    } else {
      return this.state.data.map((element) => (
        <TableRow data={element} key={element.createdAt} />
      ));
    }
  }

  render() {
    return (
      <table className="ui celled padded teal table">
        <thead>
          <tr>
            <th className="single line">Mood</th>
            <th>Feeling</th>
            <th>Comment</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{this.renderTableRow()}</tbody>
      </table>
    );
  }
}

export default Table;
