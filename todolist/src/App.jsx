import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";

export default function App() {
  const [todoList, setTodoList] = useState([
    { id: 0, todo: "밥먹기", isComplete: false },
    { id: 1, todo: "공부하기", isComplete: false },
    { id: 2, todo: "청소하기", isComplete: false },
  ]);

  const [selectedFilterId, setSelectedFilterId] = useState(0);

  const filteredTodos = todoList.filter(todo => {
    if (selectedFilterId === 1) return !todo.isComplete;
    if (selectedFilterId === 2) return todo.isComplete;
    return true;
  });

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f9fafb",
    }}>
      <div style={{
        backgroundColor: "white",
        borderRadius: 12,
        padding: 30,
        boxShadow: "0 0 15px rgba(0,0,0,0.1)",
        width: 350,
      }}>
        <TodoInput setTodoList={setTodoList} />
        <Filter selectedFilterId={selectedFilterId} setSelectedFilterId={setSelectedFilterId} />
        <TodoList todoList={filteredTodos} setTodoList={setTodoList} />
      </div>
    </div>
  );
}
