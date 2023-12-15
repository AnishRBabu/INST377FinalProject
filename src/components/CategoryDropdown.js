import React from "react";

function CategoryDropdown({ categories, selectedCategory, onCategoryChange }) {
  return (
    <select
      value={selectedCategory}
      onChange={(e) => onCategoryChange(e.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}

export default CategoryDropdown;
