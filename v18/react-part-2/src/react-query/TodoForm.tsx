import { useRef } from "react";
import useAddTodo from "./useAddTodo";

const TodoForm = () => {
  const ref = useRef<HTMLInputElement>(null);

  const addTodo = useAddTodo(() => {
    if (ref.current) ref.current.value = "";
  });

  return (
    <>
      {addTodo.error && (
        <p className="alert alert-danger">{addTodo.error.message}</p>
      )}
      <form
        className="form-inline"
        onSubmit={(e) => {
          e.preventDefault();
          if (ref.current && ref.current.value)
            addTodo.mutate({
              userId: 1,
              id: 0,
              completed: true,
              title: ref.current?.value,
            });
        }}
      >
        <div className="form-group">
          <input type="text" ref={ref} />
          <button className="btn btn-primary ms-2">Add</button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
