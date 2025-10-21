import React, { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";

export default function Todo() {
  const [todoList, setTodoList] = useState([
    { id: 0, todo: "밥먹기", isComplete: false },
    { id: 1, todo: "공부하기", isComplete: true },
    { id: 2, todo: "청소하기", isComplete: false },
  ]);

  const [selectedFilterId, setSelectedFilterId] = useState(0);

  const getFilteredList = () => {
    if (selectedFilterId === 1) {
      return todoList.filter((todo) => !todo.isComplete);
    } else if (selectedFilterId === 2) {
      return todoList.filter((todo) => todo.isComplete);
    }
    return todoList;
  };

  return (
    <div
      style={{
        background: "white",
        width: 360,
        borderRadius: 10,
        padding: 20,
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
      }}
    >
      <TodoInput setTodoList={setTodoList} />
      <Filter
        selectedFilterId={selectedFilterId}
        setSelectedFilterId={setSelectedFilterId}
      />
      <TodoList todoList={getFilteredList()} setTodoList={setTodoList} />
    </div>
  );
}
