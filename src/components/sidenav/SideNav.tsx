import { FiAlignRight,FiMoreVertical} from 'react-icons/fi';
import { FaPlus } from 'react-icons/fa';
import React from "react";

export const SideNav:React.FC = ()=>{
    return(
        <>
        <div>
            <div className="logo">Task-X <FiAlignRight/></div>
            <div>
                <p>Members</p>
                <p>View All</p>
            </div>
            <div></div>
            <div>
                <button> <FaPlus/>Invite Member</button>
            </div>
            <div className="fav-projects">
                <div className="fav-project">
                    <p>Proj Name <FiMoreVertical/></p>
                </div>

            </div>
        </div>
        </>
    )
} 