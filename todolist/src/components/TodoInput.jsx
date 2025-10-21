import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";

function generateId() {
  return `${Date.now()}_${Math.floor(Math.random() * 10000)}`;
}

export default function TodoInput({ todoList, setTodoList }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleAdd = () => {
    if (inputValue.trim() === "") return;
    const newArr = [
      ...todoList,
      { id: todoList.length, todo: inputValue, isComplete: false },
    ];
    setTodoList(newArr);
    setInputValue("");
  };

  useEffect(() => {
    console.log("inputValue", inputValue);
  }, [inputValue]);

  useEffect(() => {
    console.log("todoList", todoList);
  }, [todoList]);

  return (
    <div style={{ display: "flex", marginBottom: 15 }}>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ flex: 1, padding: 8, borderRadius: 6, border: "1px solid #ccc", fontSize: 15 }}
      />
      <button
        onClick={handleAdd}
        style={{
          marginLeft: 8,
          padding: "8px 12px",
          backgroundColor: "#4a90e2",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        등록
      </button>
    </div>
  );
}
