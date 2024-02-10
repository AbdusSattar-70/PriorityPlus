export enum Priority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}

export enum FilterTodos {
  "All" = "All",
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
  filterValue: FilterTodos;
  searchTerm: string;
};
