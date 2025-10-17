import React, { useState } from "react";
import "./Todo.css";

const TodoInput = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleAdd = () => {
    const trimmed = value.trim();
    if (trimmed === "") return;
    addTodo(trimmed);
    setValue("");
  };

  // 엔터로도 추가
  const onKeyDown = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div className="input-row">
      <input
        className="todo-input"
        type="text"
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={onKeyDown}
      />
      <button className="add-btn" onClick={handleAdd}>
        등록
      </button>
    </div>
  );
};

export default TodoInput;
