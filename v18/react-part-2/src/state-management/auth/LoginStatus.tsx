import useAuthStore from "./store";

const LoginStatus = () => {
  const { user, login, logout } = useAuthStore();
  return (
    <>
      <h3>{user}</h3>
      {!!user && (
        <a href="#" onClick={() => logout()}>
          Logout
        </a>
      )}
      {!user && (
        <a href="#" onClick={() => login("sameed05")}>
          Login
        </a>
      )}
    </>
  );
};

export default LoginStatus;
