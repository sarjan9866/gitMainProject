import { Route, Switch } from "react-router";
import HomePage from "../Views/HomePage/HomePage";

const ProtectedRoute = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage}></Route>
    </Switch>
  );
};
export default ProtectedRoute;
