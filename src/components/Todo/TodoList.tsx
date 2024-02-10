// TodoList.tsx
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);

  return (
    <>
      <div className="mx-auto mt-8 w-full">
        <ul>
          {todos.length > 0 ? (
            todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
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
