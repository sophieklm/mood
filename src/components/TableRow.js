import React from "react";

class TableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: undefined };
  }

  componentWillMount() {
    this.setState({ data: this.props.data });
  }

  render() {
    return (
      <tr>
        <td>
          <div className="single line">{this.state.data.mood}</div>
        </td>
        <td>
          <h2 className="single line">{this.state.data.feeling}</h2>
        </td>
        <td className="single line">{this.state.data.comment}</td>
        <td className="right aligned">{this.state.data.createdAt}</td>
      </tr>
    );
  }
}

export default TableRow;
