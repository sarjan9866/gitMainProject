import { Route, Switch } from "react-router";
import AdminDashboardRoute from "./AdminDashboardRoute";
import AuthRoute from "./AuthRoute";
import DefaultRoute from "./DefaultRoute";

const MainRoute = () => {
 
  return (
    <Switch>
      <Route path='/auth'>
        <AuthRoute />
      </Route >
      <Route path="/admin">
        <AdminDashboardRoute/>
      </Route>
      <Route  path='/'>
        <DefaultRoute />
      </Route>
    </Switch>
  );
};
export default MainRoute;
