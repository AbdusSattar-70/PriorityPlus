import { FilterTodos } from "../../utils/types";

interface FilterByProps {
  filterValue: string;
  setFilterValue: (value: string) => void;
}

const FilterBy: React.FC<FilterByProps> = ({ filterValue, setFilterValue }) => {
  const handleTodoFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterValue(event.target.value);
  };

  return (
    <div className="form-control gap-1">
      <label htmlFor="filterTodo" className="sr-only">
        Filter Todo
      </label>
      <select
        id="filterTodo"
        name="filterTodo"
        value={filterValue}
        onChange={handleTodoFilter}
        className="select select-bordered bg-slate-800"
      >
        <option value="" disabled>
          Filter By
        </option>
        {Object.values(FilterTodos).map((todo) => (
          <option key={todo} value={todo}>
            {todo}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBy;
