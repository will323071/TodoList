import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function generateId() {
  return `${Date.now()}_${Math.floor(Math.random() * 10000)}`;
}

export default function Todo() {
  const [todoList, setTodoList] = useState([
    { id: generateId(), todo: "밥먹기", isComplete: false },
    { id: generateId(), todo: "공부하기", isComplete: true },
    { id: generateId(), todo: "청소하기", isComplete: false },
  ]);

  return (
    <div style={styles.container}>
      <TodoInput todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

const styles = {
  container: {
    width: "300px",
    margin: "80px auto",
    padding: "20px",
    textAlign: "left",
    backgroundColor: "white",
    borderRadius: "8px",
  },
};
