import React from "react";
import dateFormat from "dateformat";

class TableRow extends React.Component {
  renderDate(item) {
    const date = item.createdAt;
    return dateFormat(Date.parse(date), "dS mmmm yyyy, h:MM TT");
  }

  renderFeelings(item) {
    const feelings = item.feeling;
    return feelings.join(", ");
  }

  render() {
    const { data } = this.props;
    return (
      <tr>
        <td>
          <div className="single line">{data.mood}</div>
        </td>
        <td>
          <div className="single line capitalize">
            {this.renderFeelings(data)}
          </div>
        </td>
        <td className="single line">{data.comment}</td>
        <td className="right aligned">{this.renderDate(data)}</td>
      </tr>
    );
  }
}

export default TableRow;
