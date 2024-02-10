import { ActionType } from "./types";

export const ACTION_TYPE: ActionType = {
  ADD: "ADD",
  EDIT: "EDIT",
  TOGGLE: "TOGGLE",
  REMOVE: "REMOVE",
  COMPLETED: "COMPLETED",
  INCOMPLETED: "INCOMPLETED",
};

export const DELETE_CONFIRMATION =
  "Are you sure you want to delete it? When deleted, it cannot be recovered.";
