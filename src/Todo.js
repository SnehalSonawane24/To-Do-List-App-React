// Todo.js
import { Component } from "react";

export class Todo extends Component {
  render() {
    const { todo, handleRemove } = this.props;
    return (
      <div className="todo">
        <p>{todo.text}</p>
        <button onClick={handleRemove}>x</button>
      </div>
    );
  }
}
