import { useRef, useState } from "react";
import { GrUpdate } from "react-icons/gr";
import { FaRegTrashCan } from "react-icons/fa6";
import { getPriorityColorClass } from "../../utils/getPriorityColor";
import EditTodo from "./EditTodo";
import { TodoType } from "../../utils/types";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../../redux/todoSlice";
import { DELETE_CONFIRMATION } from "../../utils/constant";

interface TodoItemProps {
  todo: TodoType;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();
  const { id, text, priority, completed } = todo;
  const [isHovered, setIsHovered] = useState(false);
  const editModalRef = useRef<HTMLDialogElement | null>(null);

  const handleDeleteTodo = () => {
    const confirmation = window.confirm(DELETE_CONFIRMATION);
    confirmation && dispatch(removeTodo(id));
  };

  const handleToggleTodo = () => {
    dispatch(toggleTodo(id));
  };

  return (
    <li
      className={`flex flex-col items-start justify-start gap-2 border bg-slate-800 p-2 text-sm hover:bg-slate-600 sm:flex-row sm:items-center ${getPriorityColorClass(
        priority
      )}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-start gap-2">
        <label className="label cursor-pointer">
          <input
            type="checkbox"
            checked={completed}
            onChange={handleToggleTodo}
            className={`checkbox ${
              completed ? "checkbox-success opacity-50" : "checkbox-warning"
            }`}
          />
        </label>
        <kbd className={`kbd bg-slate-600 ${completed ? "opacity-50" : ""}`}>
          {priority}
        </kbd>
      </div>
      <span className={completed ? "line-through opacity-50" : ""}>{text}</span>
      {/* Actions */}
      <div
        className={`${
          isHovered ? "flex items-center justify-center gap-2" : "hidden"
        }`}
      >
        <button
          className="btn btn-xs"
          onClick={() => editModalRef.current?.showModal()}
        >
          <GrUpdate />
        </button>
        <button className="btn btn-xs" onClick={handleDeleteTodo}>
          <FaRegTrashCan />
        </button>
      </div>
      <EditTodo editModalRef={editModalRef} todoId={id} />
    </li>
  );
};

export default TodoItem;
