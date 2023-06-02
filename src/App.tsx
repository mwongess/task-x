import { RouterProvider } from "react-router-dom";
import { TaskXProvider } from "./contexts/taskXContext";
import { router } from "./routes/routes";
import "./App.css";

export const App:React.FC = () => {
  return (
      <TaskXProvider>
        <RouterProvider router={router} />
      </TaskXProvider>
  );
};
