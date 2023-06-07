export interface TaskX {
  id: string;
  title: string;
  description: string;
  date: string;
}

export interface TaskXContextType {
  tasks: TaskX[];
  setTasks: React.Dispatch<React.SetStateAction<TaskX[]>>
  addTask: (taskX: TaskX) => void;
  updateTask: (id: string) => void;
  deleteTask: (id: string) => void;
}
