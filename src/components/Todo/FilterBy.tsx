import { useDispatch, useSelector } from "react-redux";
import { filterTodosAction } from "../../redux/todoSlice";
import { FilterTodos } from "../../utils/types";
import { RootState } from "../../redux/store";

const FilterBy = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(
    (state: RootState) => state.todos.filterValue
  );

  return (
    <div className="form-control gap-1">
      <label htmlFor="filterTodo" className="sr-only">
        Filter Todo
      </label>
      <select
        id="filterTodo"
        name="filterTodo"
        value={filterValue}
        onChange={(e) =>
          dispatch(filterTodosAction(e.target.value as FilterTodos))
        }
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
