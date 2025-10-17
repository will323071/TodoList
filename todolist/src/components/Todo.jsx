import React from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput"; // todoInput 컴포넌트가 있다고 가정

export default function Todo() {
  return (
    <div className="todo-container">
      <TodoInput />
      <TodoList />
    </div>
  );
}
