import { RouterProvider } from "react-router-dom";
import { TodoProvider } from "./contexts/context";
import { router } from "./routes/routes";
import "./App.css";

export const App:React.FC = () => {
  return (
      <TodoProvider>
        <RouterProvider router={router} />
      </TodoProvider>
  );
};
