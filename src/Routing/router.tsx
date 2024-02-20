import { Outlet, createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { AppRoutes } from "./AppRoutes";
import Todos from "../components/Todos/Todos";
import Albums from "../components/Albums/Albums";
import Comments from "../components/Comments/Comments";
import { FC } from "react";

const AppLayout: FC = () => (
    <>
        <Navbar />
        <Outlet />
    </>
)

export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <h1>Ooooops, wrong route</h1>,
        children: [
            {
                path: AppRoutes.MAIN,
                element: <h1>It's main page</h1>
            },
            {
                path: AppRoutes.TODOS,
                element: <Todos />
            },
            {
                path: AppRoutes.ALBUMS,
                element: <Albums />
            },
            {
                path: AppRoutes.COMMENT,
                element: <Comments />
            },
        ]
    }
  ]);