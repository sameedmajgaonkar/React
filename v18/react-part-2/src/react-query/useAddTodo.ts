import { useMutation, useQueryClient } from "@tanstack/react-query";
import todoService, { Todo } from "./services/todoService";
import { CACHE_KEY_TODOS } from "./constants";

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (todo: Todo) => todoService.post(todo),

    onMutate: (newTodo) => {
      const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS);

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
        newTodo,
        ...todos,
      ]);

      return { previousTodos };
    },

    onSuccess: (savedTodo, newTodo) => {
      // Approach 1: Invalidation Cache
      //   queryClient.invalidateQueries({ queryKey: CACHE_KEY_TODOS });

      // Approach 2: Updating the data in the cache directly
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
      onAdd();
    },

    onError: (error, newTodo, context) => {
      if (!context) return;

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
    },
  });
};

export default useAddTodo;
