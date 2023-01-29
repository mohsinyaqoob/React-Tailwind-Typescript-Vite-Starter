import type { PathRouteProps } from "react-router-dom";

import Home from "@/pages/home";

export const routes: Array<PathRouteProps> = [
  {
    path: "/login",
    element: <h1>Login Page</h1>,
  },
];

export const privateRoutes: Array<PathRouteProps> = [
  {
    path: "/",
    element: <Home />,
  },
];
