import React, {ReactNode, createContext, useContext, useState } from "react";
import { TaskX, TaskXContextType } from "../types/types";

export const TaskXContext= createContext<TaskXContextType | undefined >(undefined)
export const useTodoContext = useContext(TaskXContext)

export const TodoProvider:React.FC<{ children: ReactNode }> = ({children})=>{
    const [tasks, setTasks] = useState<TaskX[]>([])

    const addTaskX = (taskX: TaskX)=>{}
    const updateTaskX = (id: string)=>{}
    const deleteTaskX = (id: string) => {}
    return(
        <TaskXContext.Provider value={{tasks,addTaskX ,updateTaskX ,deleteTaskX}}>
            {children}
        </TaskXContext.Provider>
    )
}
