import React, { useState } from "react";

function generateId() {
  return `${Date.now()}_${Math.floor(Math.random() * 10000)}`;
}

export default function TodoInput({ todoList, setTodoList }) {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim() === "") return;
    const newTodo = {
      id: generateId(),
      todo: inputValue,
      isComplete: false,
    };
    setTodoList([...todoList, newTodo]);
    setInputValue("");
  };

  return (
    <div style={styles.inputWrap}>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleAdd} style={styles.button}>
        등록
      </button>
    </div>
  );
}

const styles = {
  inputWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "15px",
  },
  input: {
    width: "230px",
    height: "35px",
    border: "2px solid #99c2ff",
    borderRadius: "8px",
    paddingLeft: "10px",
    fontSize: "16px",
    outlineColor: "#66a3ff",
  },
  button: {
    marginLeft: "8px",
    backgroundColor: "#3399ff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "8px 16px",
    fontSize: "15px",
    cursor: "pointer",
    boxShadow: "inset 0 0 2px #004080, 0 0 0 2px #99ccff",
  },
};
