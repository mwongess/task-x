export interface Todo {
  id: string;
  title: string;
  description: string;
  date: string;
}

export interface TodoContextType {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  updateTodo: (id: string) => void;
  deleteTodo: (id: string) => void
}
