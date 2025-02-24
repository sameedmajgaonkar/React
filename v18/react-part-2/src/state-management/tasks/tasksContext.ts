import { createContext, ActionDispatch } from "react";
import { Task, TaskAction } from "./TasksProvider";

interface TasksContextInterface {
  tasks: Task[];
  dispatch: ActionDispatch<[TaskAction]>;
}
const TasksContext = createContext<TasksContextInterface>(
  {} as TasksContextInterface
);
TasksContext.displayName = "TasksContext";

export default TasksContext;
