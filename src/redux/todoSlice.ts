import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Priority, TodoStateType, TodoType } from "../utils/types";

const initialState: TodoStateType = {
  todos: [
    { id: 1, text: "Task 1", completed: false, priority: Priority.Low },
    { id: 2, text: "Task 2", completed: false, priority: Priority.Medium },
    { id: 3, text: "Task 3", completed: true, priority: Priority.High },
  ],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoType>) => {
      state.todos.push(action.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
