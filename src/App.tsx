import { createBrowserRouter, RouterProvider } from "react-router"
import LoginComponent from "./app/components/LoginComponent/LoginComponent"
import DashboardComponent from "./app/components/DashboardComponent/DashboardComponent"

const router = createBrowserRouter([
  { path: "/", element: <LoginComponent /> },
  { path: "/dashboard", element: <DashboardComponent /> },
])

export const App = () => <RouterProvider router={router} />
