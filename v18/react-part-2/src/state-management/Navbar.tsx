import LoginStatus from "./auth/LoginStatus";
import useCounterStore from "./counter/store";
import { useTasks } from "./tasks";

const Navbar = () => {
  const { tasks } = useTasks();
  const counter = useCounterStore((s) => s.counter);
  console.log("Rendered NavBar");
  return (
    <nav className="navbar bg-body-tertiary p-2">
      <a href="#" className="navbar-brand">
        Navbar
        <span className="badge text-bg-primary">{tasks.length}</span>
        <span className="badge text-bg-secondary">Counter {counter}</span>
      </a>
      <LoginStatus />
    </nav>
  );
};

export default Navbar;
