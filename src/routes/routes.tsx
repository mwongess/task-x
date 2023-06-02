import { DashboardLayout } from "../layouts/DashboardLayout";
import { HomeLayout } from "../layouts/HomeLayout";
import { AuthForm } from "../pages/auth/AuthForm";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route path="auth/:mode" element={<AuthForm />} />
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route path="task/new" />
      </Route>
    </Route>
  )
);
