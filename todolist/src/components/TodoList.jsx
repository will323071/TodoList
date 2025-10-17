import React, { useState } from "react";

export default function TodoList() {
  // 초기 todoList state
  const [todoList, setTodoList] = useState([
    { id: 0, todo: "밥먹기", isComplete: false },
    { id: 1, todo: "공부하기", isComplete: true },
    { id: 2, todo: "청소하기", isComplete: false },
  ]);

  // 체크박스 토글 함수
  const toggleCheckbox = (index) => {
    // 1. todoList 복사
    const newArr = [...todoList];

    // 2. 클릭한 체크박스의 isComplete 값 반전
    newArr[index].isComplete = !newArr[index].isComplete;

    // 3. state 업데이트
    setTodoList(newArr);
  };

  return (
    <div>
      <h2>할 일 목록</h2>
      <ul>
        {todoList.map((item, index) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.isComplete} // ✅ 체크 여부
              onChange={() => toggleCheckbox(index)} // ✅ 클릭 시 toggle
            />
            {item.todo}
          </li>
        ))}
      </ul>
    </div>
  );
}
