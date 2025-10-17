import React, { useState, useEffect } from "react";

function TodoInput() {
  // 입력값 관리
  const [inputValue, setInputValue] = useState("");
  // todo 목록 관리
  const [todoList, setTodoList] = useState([]);

  // 입력 변경 시
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // 등록 버튼 클릭 시
  const handleAddTodo = () => {
    if (inputValue.trim() === "") return; // 빈 값 방지

    // 새로운 todo 객체 생성
    const newTodo = {
      id: Date.now(), // 현재 시간으로 고유 id 생성
      todo: inputValue,
      isComplete: false,
    };

    // 기존 목록에 새 항목 추가 (스프레드 연산자)
    setTodoList([...todoList, newTodo]);

    // 입력창 초기화
    setInputValue("");
  };

  // todoList 변경될 때마다 콘솔 출력
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
