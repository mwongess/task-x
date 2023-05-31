import React from "react"
import { FaPlus } from 'react-icons/fa';

export const Form: React.FC = () =>{
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Title" />
                <button> <FaPlus/> Add Task</button>
            </form>
        </div>
    )
}