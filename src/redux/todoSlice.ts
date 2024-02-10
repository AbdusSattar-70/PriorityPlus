import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { Priority, TodoStateType, TodoType } from "../utils/types";
import { FilterTodos } from "../utils/types";

const initialState: TodoStateType = {
  todos: [
    { id: 1, text: "Task 1", completed: false, priority: Priority.Low },
    { id: 2, text: "Task 2", completed: false, priority: Priority.Medium },
    { id: 3, text: "Task 3", completed: true, priority: Priority.High },
  ],
  filterValue: FilterTodos.All,
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
    filterTodosAction: (state, action: PayloadAction<FilterTodos>) => {
      state.filterValue = action.payload;
    },
  },
});

export const { addTodo, editTodo, removeTodo, toggleTodo, filterTodosAction } =
  todoSlice.actions;

export default todoSlice.reducer;
