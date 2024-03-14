import { lazy, Suspense } from "react";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import "../index.css";

import Loader from "../components/Loader";
import PrivateRoute from "../routes/PrivateRoute";
import { PublicRoute } from "../routes/PublicRoute";
import { Routes } from "./routes.enum";

import LoginPage from "../pages/LoginPage/LoginPage";
const DashboardPage = lazy(
  () => import("../pages/DashboardPage/DashboardPage")
);
const ProjectionsPage = lazy(
  () => import("../pages/ProjectionsPage/ProjectionsPage")
);
const InvoicesPage = lazy(() => import("../pages/InvoicesPage/InvoicesPage"));

const router = createBrowserRouter([
  {
    path: Routes.Login,
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: Routes.Dashboard,
    element: (
      <PrivateRoute>
        <Suspense fallback={<Loader />}>
          <DashboardPage />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: Routes.Projections,
    element: (
      <PrivateRoute>
        <Suspense fallback={<Loader />}>
          <ProjectionsPage />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: Routes.Invoices,
    element: (
      <PrivateRoute>
        <Suspense fallback={<Loader />}>
          <InvoicesPage />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    element: <Navigate to={Routes.Login} />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
