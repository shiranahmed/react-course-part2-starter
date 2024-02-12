interface LoginAction {
  type: "LOGIN";
  userName: string;
}

interface LogOutAction {
  type: "LOGOUT";
}

export type AuthAction = LoginAction | LogOutAction;

const authReducer = (state: string, action: AuthAction): string => {
  if (action.type === "LOGIN") return action.userName;
  if (action.type === "LOGOUT") return "";
  return state;
};

export default authReducer;
