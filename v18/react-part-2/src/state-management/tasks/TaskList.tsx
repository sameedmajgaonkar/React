import useAuthStore from "../auth/store";
import useTasks from "./useTasks";

const TaskList = () => {
  const { tasks, dispatch } = useTasks();
  const { user } = useAuthStore();

  return (
    <div className="d-flex justify-content-center flex-column">
      <h2>USER: {user}</h2>
      <button
        className="btn btn-primary"
        onClick={() =>
          dispatch({
            type: "ADD",
            task: { id: Date.now(), title: "Task" },
          })
        }
      >
        Add Task
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between"
          >
            {`${task.title} ${task.id}`}{" "}
            <button
              onClick={() => dispatch({ type: "DELETE", taskId: task.id })}
              className="btn btn-outline-danger"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
