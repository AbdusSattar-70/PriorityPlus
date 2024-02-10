import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PrioritySelector from "./PrioritySelector";
import { Priority } from "../../utils/types";
import { editTodo } from "../../redux/todoSlice";
import { RootState } from "../../redux/store";

interface EditTodoProps {
  todoId: number;
  editModalRef: React.RefObject<HTMLDialogElement>;
}

const EditTodo: React.FC<EditTodoProps> = ({ todoId, editModalRef }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);
  const selectedTodo = todos.find((todo) => todo.id === todoId);
  const [updatedText, setUpdatedText] = useState(selectedTodo?.text || "");
  const [priority, setPriority] = useState<Priority>(
    selectedTodo?.priority || Priority.Low
  );

  const saveEditing = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (updatedText.trim() !== "") {
      const updatedTodo = {
        id: todoId,
        text: updatedText,
        priority,
      };
      dispatch(editTodo(updatedTodo));
      editModalRef.current?.close();
    }
  };

  return (
    <dialog ref={editModalRef} className="modal text-slate-200 sm:modal-middle">
      <div className="modal-box bg-slate-600">
        <form
          onSubmit={saveEditing}
          className="mx-2 mt-2 grid grid-cols-1 gap-2 p-2"
        >
          <div className="form-control gap-1">
            <label htmlFor="addTodoInput" className="sr-only">
              Update Todo
            </label>
            <input
              id="addTodoInput"
              className="input input-bordered bg-slate-800"
              type="text"
              value={updatedText}
              onChange={(e) => setUpdatedText(e.target.value)}
            />
          </div>
          <PrioritySelector value={priority} onChange={setPriority} />
          <button className="btn btn-success">Update</button>
        </form>
        <div className="modal-action">
          <button
            className="btn btn-sm"
            onClick={() => editModalRef.current?.close()}
          >
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default EditTodo;
