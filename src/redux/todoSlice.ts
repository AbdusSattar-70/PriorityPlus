import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { Priority, TodoStateType, TodoType } from "../utils/types";
import { FilterTodos } from "../utils/types";

const initialState: TodoStateType = localStorage.getItem("myTodo")
  ? JSON.parse(localStorage.getItem("myTodo")!)
  : {
      todos: [],
      filterValue: FilterTodos.All,
      searchTerm: "",
    };

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoType>) => {
      state.todos.push(action.payload);
      localStorage.setItem("myTodo", JSON.stringify(state));
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
      localStorage.setItem("myTodo", JSON.stringify(state));
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("myTodo", JSON.stringify(state));
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
      localStorage.setItem("myTodo", JSON.stringify(state));
    },
    filterTodosAction: (state, action: PayloadAction<FilterTodos>) => {
      state.filterValue = action.payload;
      localStorage.setItem("myTodo", JSON.stringify(state));
    },
    searchAction: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
      localStorage.setItem("myTodo", JSON.stringify(state));
    },
  },
});

export const {
  addTodo,
  editTodo,
  removeTodo,
  toggleTodo,
  filterTodosAction,
  searchAction,
} = todoSlice.actions;

export default todoSlice.reducer;
