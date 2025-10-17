import React, { useState, useEffect } from "react";

function TodoInput() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() === "") return; 

    const newTodo = {
      id: Date.now(), 
      todo: inputValue,
      isComplete: false,
    };

    setTodoList([...todoList, newTodo]);

    setInputValue("");
  };

  useEffect(() => {
    console.log("📋 현재 todoList:", todoList);
  }, [todoList]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#fff",
      }}
    >
      <div>
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          value={inputValue}
          onChange={handleChange}
          style={{
            width: "250px",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            marginRight: "10px",
          }}
        />
        <button
          onClick={handleAddTodo}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "8px",
            backgroundColor: "#1e73be",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          등록
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
