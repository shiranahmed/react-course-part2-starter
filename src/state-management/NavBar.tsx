import { useContext } from "react";
import LoginStatus from "./LoginStatus";
import TaskContext from "./contexts/TaskContext";

const NavBar = () => {
  const { task } = useContext(TaskContext);
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{task.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
