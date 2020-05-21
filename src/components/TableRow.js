import React from "react";
import dateFormat from "dateformat";

class TableRow extends React.Component {
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

  renderDate() {
    if (!this.state.data) {
      return null;
    } else {
      const date = this.state.data.createdAt;
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
