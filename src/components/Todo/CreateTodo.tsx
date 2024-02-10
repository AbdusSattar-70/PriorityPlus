import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/todoSlice";
import { RootState } from "../../redux/store";
import { useState } from "react";
import { BiSolidAddToQueue } from "react-icons/bi";
import PrioritySelector from "./PrioritySelector";
import { Priority } from "../../utils/types";

interface CreateTodoProps {
  AddTodoModalRef: React.RefObject<HTMLDialogElement>;
}

const CreateTodo: React.FC<CreateTodoProps> = ({ AddTodoModalRef }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);
  const [newTodoText, setNewTodoText] = useState("");
  const [priority, setPriority] = useState<Priority>(Priority.Low);

  const getNextId = () => {
    return todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
  };

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodoText.trim() !== "") {
      const newTodo = {
        id: getNextId(),
        text: newTodoText,
        completed: false,
        priority,
      };
      dispatch(addTodo(newTodo));
      setNewTodoText("");
      setPriority(Priority.Low);
      AddTodoModalRef.current?.close();
    }
  };

  return (
    <dialog
      ref={AddTodoModalRef}
      className="modal text-slate-200 sm:modal-middle"
    >
      <div className="modal-box bg-slate-600">
        <form
          onSubmit={handleAddTodo}
          className="mx-2 mt-2 grid grid-cols-1 gap-2 bg-slate-600 p-2 sm:grid-cols-3"
        >
          <div className="form-control gap-1">
            <label htmlFor="addTodoInput" className="sr-only">
              Add Todo
            </label>
            <input
              id="addTodoInput"
              className="input input-bordered bg-slate-800"
              type="text"
              placeholder="Add Todo"
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
            />
          </div>
          <PrioritySelector value={priority} onChange={setPriority} />
          <button className="btn btn-primary">
            <BiSolidAddToQueue className="text-3xl" />
          </button>
        </form>
        <div className="modal-action">
          <button
            className="btn btn-sm"
            onClick={() => AddTodoModalRef.current?.close()}
          >
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default CreateTodo;
