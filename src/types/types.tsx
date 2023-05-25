export interface Todo {
  title: string;
  description: string;
  date: string;
}

export interface TodoContextType {
  todos: Todo[];
}
