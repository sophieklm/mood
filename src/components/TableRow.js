import React from "react";
import dateFormat from "dateformat";

class TableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: undefined };
  }

  // TO DO: remove this lifecycle method
  componentWillMount() {
    this.setState({ data: this.props.data });
  }

  renderDate() {
    if (!this.state.data) {
      return null;
    } else {
      const date = this.state.data.createdAt;
      console.log(date);
      return dateFormat(Date.parse(date), "dS mmmm yyyy, h:MM TT");
    }
  }

  render() {
    return (
      <tr>
        <td>
          <div className="single line">{this.state.data.mood}</div>
        </td>
        <td>
          <div className="single line capitalize">
            {this.state.data.feeling}
          </div>
        </td>
        <td className="single line">{this.state.data.comment}</td>
        <td className="right aligned">{this.renderDate()}</td>
      </tr>
    );
  }
}

export default TableRow;
