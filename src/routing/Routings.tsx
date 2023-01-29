import { Routes, Route } from "react-router-dom";

import RequireAuth from "@/shared/auth/RequireAuth";
import Page404 from "@/pages/404";

import { routes, privateRoutes } from "./routes";

const Routings = () => {
  return (
    <Routes>
      {routes.map((routeProps) => (
        <Route {...routeProps} key={routeProps.path as string} />
      ))}
      {privateRoutes.map(({ element, ...privateRouteProps }) => (
        <Route
          element={
            <RequireAuth
              redirectTo={`/login?redirectTo=${privateRouteProps.path}`}
            >
              {element}
            </RequireAuth>
          }
          {...privateRouteProps}
          key={`privateRoute-${privateRouteProps.path}`}
        />
      ))}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default Routings;
