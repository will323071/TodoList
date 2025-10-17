import React from "react";

export default function TodoList({ todoList, setTodoList }) {
  const toggleCheckbox = (e, id) => {
    const newArr = todoList.map((item) =>
      item.id === id ? { ...item, isComplete: e.target.checked } : item
    );
    setTodoList(newArr);
  };

  return (
    <ul style={styles.list}>
      {todoList.map((item) => (
        <li key={item.id} style={styles.item}>
          <input
            type="checkbox"
            checked={item.isComplete}
            onChange={(e) => toggleCheckbox(e, item.id)}
          />
          <span style={styles.text}>{item.todo}</span>
        </li>
      ))}
    </ul>
  );
}

const styles = {
  list: {
    listStyle: "none",
    paddingLeft: "40px",
    margin: 0,
  },
  item: {
    marginBottom: "8px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "18px",
    color: "#333",
  },
  text: {
    fontSize: "17px",
  },
};
