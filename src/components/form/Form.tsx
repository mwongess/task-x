import React from "react"

export const Form: React.FC = () =>{
    return(
        <div>
            <form action="">
                <input type="text" placeholder="Title" />
                <textarea name="" id="" cols={30} rows={10}></textarea>
                <input type="date" />
                <button>Add New Todo</button>
            </form>
        </div>
    )
}