export interface TaskX {
  id: string;
  title: string;
  description: string;
  date: string;
}

export interface TaskXContextType {
  todos: TaskX[];
  addTask: (todo: TaskX) => void;
  updateTask: (id: string) => void;
  deleteTask: (id: string) => void
}
