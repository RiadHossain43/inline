import Login from "views/auth/Login";
var routes = [
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25",
    component: Login,
    layout: "/auth",
    sideDeactivate:true
  }
];
export default routes;
