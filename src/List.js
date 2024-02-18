// List.js
import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {
  render() {
    const { todos, handleRemove } = this.props;
    return (
      <div className="list">
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} handleRemove={() => handleRemove(index)} />
        ))}
      </div>
    );
  }
}
