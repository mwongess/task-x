import { useLoaderData } from "react-router-dom";
import { TaskX } from "../../types/types";

export const Tasks: React.FC = () => {
  const tasks = useLoaderData() as TaskX[];
  return (
    <div className="tasks-container">
      {tasks.map((task, index) => (
        <div className="task" key={index}>
            {/* Display all task properties */}
        </div>
      ))}
    </div>
  );
};

export const tasksLoader = () => {
  // Loader function to load all tasks
};
