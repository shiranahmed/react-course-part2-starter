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
import authReducer from "./state-management/reducer/authReducer";
import AuthContext from "./state-management/contexts/AuthContext";
import AuthProvider from "./state-management/AuthProvider";

function App() {
  const [task, dispatch] = useReducer(taskReducer, []);
  const [user, authDispatch] = useReducer(authReducer, "");

  return (
    // <AuthProvider>
    //   <TaskContext.Provider value={{ task, dispatch }}>
    //     <NavBar></NavBar>
    //     <TaskList></TaskList>
    //   </TaskContext.Provider>
    // </AuthProvider>
    <>
      <TodoForm></TodoForm>
      <TodoList></TodoList>
    </>
  );
}

export default App;
