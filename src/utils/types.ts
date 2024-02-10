export enum Priority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}

export enum FilterTodos {
  "Completed" = "Completed",
  "Incomplete" = "Incomplete",
  "Priority-low" = "Priority-low",
  "Priority-medium" = "Priority-medium",
  "Priority-high" = "Priority-high",
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
