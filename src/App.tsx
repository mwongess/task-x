import { RouterProvider } from "react-router-dom";
import { TodoProvider } from "./contexts/context";
import { router } from "./routes/routes";
import "./App.css";

// The whole app is wrapped in a context and providing it to the components using the TaskX provider
export const App:React.FC = () => {
  return (
      <TodoProvider>
        <RouterProvider router={router} />
      </TodoProvider>
  );
};
