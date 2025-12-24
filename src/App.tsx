import { createBrowserRouter, RouterProvider } from "react-router"

const router = createBrowserRouter([{ path: "/", element: <div>test</div> }])

export const App = () => <RouterProvider router={router} />
