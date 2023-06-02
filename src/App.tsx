import { RouterProvider } from "react-router-dom";
import { TodoProvider } from "./contexts/context";
import { router } from "./routes/routes";
import "./App.css";

function App() {
  <TodoProvider>
    <RouterProvider router={router} />
  </TodoProvider>;
}

export default App;
