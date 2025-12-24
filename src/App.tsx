import { createBrowserRouter, RouterProvider } from "react-router"
import LoginComponent from "./app/components/LoginComponent/LoginComponent"

const router = createBrowserRouter([{ path: "/", element: <LoginComponent /> }])

export const App = () => <RouterProvider router={router} />
