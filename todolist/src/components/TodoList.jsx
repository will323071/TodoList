import React, { useState } from "react";

export default function TodoList({ todoList, setTodoList }) {
  const [editingId, setEditingId] = useState(null);
  const [editInput, setEditInput] = useState("");

  const handleDelete = (id) =>
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));

  const handleToggleComplete = (id) =>
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );

  const handleEditButtonClick = (id, currentTodo) => {
    if (editingId === id) {
      setTodoList((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, todo: editInput } : todo
        )
      );
      setEditingId(null);
      setEditInput("");
    } else {
      setEditingId(id);
      setEditInput(currentTodo);
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditInput("");
  };

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todoList.map((todo) => (
        <li key={todo.id} style={{ marginBottom: "8px" }}>
          <input
            type="checkbox"
            checked={todo.isComplete}
            onChange={() => handleToggleComplete(todo.id)}
            style={{ marginRight: "8px" }}
          />

          {editingId === todo.id ? (
            <>
              <input
                value={editInput}
                onChange={(e) => setEditInput(e.target.value)}
                style={{ marginRight: "6px" }}
              />
              <button
                onClick={() => handleEditButtonClick(todo.id, todo.todo)}
                style={{
                  backgroundColor: "lightgreen",
                  border: "none",
                  cursor: "pointer",
                  marginRight: "4px",
                }}
              >
                ✅
              </button>
              <button
                onClick={handleCancelEdit}
                style={{
                  backgroundColor: "lightgreen",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                ❎
              </button>
            </>
          ) : (
            <>
              <span style={{ marginRight: "8px" }}>{todo.todo}</span>
              <button
                onClick={() => handleEditButtonClick(todo.id, todo.todo)}
                style={{
                  backgroundColor: "lightsteelblue",
                  border: "none",
                  cursor: "pointer",
                  marginRight: "4px",
                }}
              >
                🔄
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
                style={{
                  backgroundColor: "lightgreen",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                ❎
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
