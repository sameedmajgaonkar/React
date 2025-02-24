import HomePage from "./state-management/HomePage";
import Navbar from "./state-management/Navbar";
import { AuthProvider } from "./state-management/auth";
import { Counter } from "./state-management/counter";
import { TasksProvider } from "./state-management/tasks";

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <Navbar />
        <Counter />
        <HomePage />
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
