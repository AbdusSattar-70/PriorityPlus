import { FaCircleCheck } from "react-icons/fa6";
import { BiSolidAddToQueue } from "react-icons/bi";
import { ImRadioUnchecked } from "react-icons/im";
import { MdSelectAll } from "react-icons/md";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useRef } from "react";
import FilterBy from "./FilterBy";
import CreateTodo from "./CreateTodo";
import SearchTodo from "./SearchTodo";

const TodoManagement = () => {
  const AddTodoModalRef = useRef<HTMLDialogElement | null>(null);
  const todos = useSelector((state: RootState) => state.todos.todos);
  const completedTodos = todos.filter((todo) => todo.completed);
  const incompletedTodos = todos.filter((todo) => !todo.completed);

  return (
    <div className="mx-auto w-full pt-2">
      <section className="grid grid-cols-1 gap-2 px-2 md:grid-cols-2">
        <div className="flex flex-wrap items-center justify-start gap-4 bg-slate-600 p-3 text-sm text-slate-100">
          <button
            className="btn btn-xs"
            onClick={() => AddTodoModalRef.current?.showModal()}
          >
            <BiSolidAddToQueue /> Add Todo
          </button>
          <p className="flex items-center gap-1">
            <MdSelectAll />
            Total: <span>{todos?.length}</span>
          </p>
          <p className="flex items-center gap-1">
            <FaCircleCheck className="text-green-700" />
            Completed: <span>{completedTodos?.length}</span>
          </p>
          <p className="flex items-center gap-1">
            <ImRadioUnchecked className="text-red-700" />
            Incompleted: <span>{incompletedTodos?.length}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2 bg-slate-600 p-3 sm:grid-cols-2">
          <SearchTodo />
          <FilterBy />
        </div>
      </section>
      <CreateTodo AddTodoModalRef={AddTodoModalRef} />
    </div>
  );
};

export default TodoManagement;
