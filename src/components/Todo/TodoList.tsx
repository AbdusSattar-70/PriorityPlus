import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import TodoItem from "./TodoItem";
import { FilterTodos, Priority } from "../../utils/types";

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const filterValue = useSelector(
    (state: RootState) => state.todos.filterValue
  );

  const filteredTodos = () => {
    switch (filterValue) {
      case FilterTodos.All:
        return todos;
      case FilterTodos.Completed:
        return todos.filter((todo) => todo.completed);
      case FilterTodos.Incomplete:
        return todos.filter((todo) => !todo.completed);
      case FilterTodos["Priority-low"]:
        return todos.filter((todo) => todo.priority === Priority.Low);
      case FilterTodos["Priority-medium"]:
        return todos.filter((todo) => todo.priority === Priority.Medium);
      case FilterTodos["Priority-high"]:
        return todos.filter((todo) => todo.priority === Priority.High);
      default:
        return todos;
    }
  };

  return (
    <>
      <div className="mx-auto mt-8 w-full">
        <ul>
          {filteredTodos().length > 0 ? (
            filteredTodos().map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))
          ) : (
            <li className="border p-4 text-center text-slate-100">
              No Data Found
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
