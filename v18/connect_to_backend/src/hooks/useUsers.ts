import { useState, useEffect } from "react";
import userService, {User} from "../services/userService";
import { CanceledError } from "../services/api-client";

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);

  const [error, setError] = useState("");

  const [isLoading, setLoading] = useState(false);
  //  This associates the signal and controller with the fetch request
  // and allows us to abort it by calling AbortController.abort(), as seen below in the second event listener.
  useEffect(() => {
    setLoading(true);
    const { request, cancel } = userService.getAll<User>();
    request
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });
    return () => cancel();
  }, []);

  return {users, setUsers, error, setError, isLoading, setLoading}
}

export default useUsers