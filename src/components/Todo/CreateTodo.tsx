import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/todoSlice";
import { RootState } from "../../redux/store";
import { useState } from "react";
import { BiSolidAddToQueue } from "react-icons/bi";
import PrioritySelector from "./PrioritySelector";
import { Priority } from "../../utils/types";

const CreateTodo = () => {
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
    }
  };

  return (
    <form
      onSubmit={handleAddTodo}
      className="grid grid-cols-1 gap-4 border border-blue-600 p-4 sm:grid-cols-3"
    >
      <div className="form-control gap-1">
        <label htmlFor="addTodoInput">Add Todo</label>
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

      <button className="btn btn-primary mt-6 place-self-stretch">
        <BiSolidAddToQueue className="text-3xl" />
      </button>
    </form>
  );
};

export default CreateTodo;
