import { useReducer } from "react";
import "./App.css";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";
import Counter from "./state-management/Counter";
import LoginStatus from "./state-management/LoginStatus";
import TaskList from "./state-management/TaskList";
import taskReducer from "./state-management/reducer/TaskReducer";

import HomePage from "./routing/HomePage";
import TaskContext from "./state-management/contexts/TaskContext";
import NavBar from "./state-management/NavBar";

function App() {
  const [task, dispatch] = useReducer(taskReducer, []);

  return (
    <TaskContext.Provider value={{ task, dispatch }}>
      <NavBar></NavBar>
      <TaskList></TaskList>
    </TaskContext.Provider>
  );
}

export default App;
