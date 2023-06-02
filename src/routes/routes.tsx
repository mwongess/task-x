import { AuthForm } from "../pages/auth/AuthForm";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/auth" element={<AuthForm />}></Route>)
);
