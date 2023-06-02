import React, {ReactNode, createContext, useContext, useState } from "react";
import { TaskX, TaskXContextType } from "../types/types";

export const TaskXContext= createContext<TaskXContextType | undefined >(undefined) //Create TaskX Context

export const useTaskXContext = useContext(TaskXContext) //Custom Hook

export const TaskXProvider:React.FC<{ children: ReactNode }> = ({children})=>{
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
