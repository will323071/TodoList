import React from "react";

const Filter = ({ selectedFilterId, setSelectedFilterId }) => {
  const filterOptions = [
    { id: 0, label: "전체보기" },
    { id: 1, label: "완료된 항목 숨기기" },
    { id: 2, label: "완료된 항목만 보기" },
  ];

  const handleFilterChange = (e) => {
    setSelectedFilterId(Number(e.target.value)); 
  };

  return (
    <select value={selectedFilterId} onChange={handleFilterChange} style={{ marginBottom: "15px" }}>
      {filterOptions.map((f) => (
        <option key={f.id} value={f.id}>
          {f.label}
        </option>
      ))}
    </select>
  );
};

export default Filter;
