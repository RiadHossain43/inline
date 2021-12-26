import authRoutes from "views/auth/routes";
import dashboardRoutes from "views/dashboard/routes"
var routes = [
  ...dashboardRoutes,
  ...authRoutes,
];
export default routes;
