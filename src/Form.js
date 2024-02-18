// Form.js
import { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          value={this.state.text}
          placeholder="Whats on your mind?"
          required
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}
