export enum Priority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}

export type TodoType = {
  id: number;
  text: string;
  completed: boolean;
  priority: Priority;
};

export type TodoStateType = {
  todos: TodoType[];
};

export type ActionType = {
  ADD: string;
  EDIT: string;
  TOGGLE: string;
  REMOVE: string;
  COMPLETED: string;
  INCOMPLETED: string;
};
