import React, {ReactNode, createContext, useContext, useState } from "react";
import { Todo, TodoContextType } from "../types/types";

export const TodoContext= createContext<TodoContextType | undefined >(undefined)
export const useTodoContext = useContext(TodoContext)

export const TodoProvider:React.FC<{ children: ReactNode }> = ({children})=>{
    const [todos, setTodos] = useState<Todo[]>([])

    const addTodo = (todo: Todo)=>{}
    const updateTodo = (id: string)=>{}
    const deleteTodo = (id: string) => {}
    return(
        <TodoContext.Provider value={{todos,addTodo, updateTodo, deleteTodo}}>
            {children}
        </TodoContext.Provider>
    )
}
