interface Task {
  id: number;
  title: string;
}

interface AddTask {
  type: "ADD";
  task: Task;
}

interface DeleteTask {
  type: "DELETE";
  taskID: number;
}

type TaskAction = AddTask | DeleteTask;

const taskReducer = (task: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD":
      return [action.task, ...task];
    case "DELETE":
      return task.filter((t) => t.id !== action.taskID);
  }
};

export default taskReducer;
