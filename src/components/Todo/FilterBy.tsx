import { useDispatch } from "react-redux";
import { filterTodosAction } from "../../redux/todoSlice";
import { FilterTodos } from "../../utils/types";
import { useState } from "react";

const FilterBy = () => {
  const [filterValue, setFilterValue] = useState(FilterTodos.All);
  const dispatch = useDispatch();

  const handleTodoFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFilter = event.target.value as FilterTodos;
    setFilterValue(selectedFilter);
    dispatch(filterTodosAction(selectedFilter));
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
