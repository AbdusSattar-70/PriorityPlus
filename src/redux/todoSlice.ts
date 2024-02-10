import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
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
    editTodo: (
      state,
      action: PayloadAction<{ id: number; text: string; priority: Priority }>
    ) => {
      const { id, text, priority } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
        todo.priority = priority;
      }
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    filterCompleted: (state) => {
      state.todos = state.todos.filter((todo) => todo.completed);
    },
    filterIncomplete: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
    filterByPriority: (state, action: PayloadAction<Priority>) => {
      state.todos = state.todos.filter(
        (todo) => todo.priority === action.payload
      );
    },
  },
});

export const {
  addTodo,
  editTodo,
  removeTodo,
  toggleTodo,
  filterCompleted,
  filterIncomplete,
  filterByPriority,
} = todoSlice.actions;

export default todoSlice.reducer;
