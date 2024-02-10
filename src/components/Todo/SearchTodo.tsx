import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { searchAction } from "../../redux/todoSlice";

const SearchTodo = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.todos.searchTerm);
  return (
    <div className="form-control">
      <label className="label sr-only">
        <span className="label-text">search</span>
      </label>
      <input
        type="search"
        placeholder="search..."
        value={searchTerm}
        onChange={(e) => dispatch(searchAction(e.target.value))}
        className="input input-bordered bg-slate-800"
        required
      />
    </div>
  );
};

export default SearchTodo;
