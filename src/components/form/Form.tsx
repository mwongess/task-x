import { Form } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

export const NewTask: React.FC = () =>{
    return(
        <div>
            <Form method='post' action=''>
                <input type="text" name="" placeholder="Title" />
                <button> <FaPlus/> Add Task</button>
            </Form>
        </div>
    )
}