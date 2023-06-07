export interface ITaskX {
  id: string;
  title: string;
  startedOn: string;
  description: string;
}

export interface ITaskXContextType {
  tasks: ITaskX[];
  setTasks: React.Dispatch<React.SetStateAction<ITaskX[]>>
  addTask: (taskX: ITaskX) => void;
  updateTask: (id: string) => void;
  deleteTask: (id: string) => void;
}
