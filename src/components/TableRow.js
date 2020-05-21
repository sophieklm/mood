import React from "react";

class TableRow extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <div
            className="ui star rating"
            data-rating={this.props.data.mood}
            data-max-rating="7"
          ></div>
        </td>
        <td>
          <h2 className="ui center aligned header">
            {this.props.data.feeling}
          </h2>
        </td>
        <td className="single line">{this.props.data.comment}</td>
        <td className="right aligned">{this.props.data.date}</td>
      </tr>
    );
  }
}

export default TableRow;
