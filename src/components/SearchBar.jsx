import { useState } from 'react'

export const SearchBar = ({ onSearch, onFilterChange, categories = [] }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearch(value)
  }

  const handleCategoryChange = (e) => {
    const value = e.target.value
    setSelectedCategory(value)
    onFilterChange(value)
  }

  return (
    <div className="search-bar-container">
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <span className="search-icon">🔍</span>
      </div>

      {categories.length > 0 && (
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="category-filter"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      )}
    </div>
  )
}
