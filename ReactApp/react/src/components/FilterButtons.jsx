import "./FilterButtons.css";

const FilterButtons = ({ currentFilter, onFilterChange }) => {
  const filters = ['all', 'active', 'completed'];

  return (
    <div className="filter-buttons">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`filter-button ${currentFilter === filter ? 'active' : ''}`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};