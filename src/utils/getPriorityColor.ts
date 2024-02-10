import { Priority } from "./types";

export const getPriorityColorClass = (priority: Priority) => {
  switch (priority) {
    case Priority.Low:
      return "text-yellow-500";
    case Priority.Medium:
      return "text-green-500";
    case Priority.High:
      return "text-blue-500";
    default:
      return "";
  }
};
