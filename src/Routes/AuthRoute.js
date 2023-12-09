import { Route, Switch } from "react-router";
import Loadable from 'react-loadable';
import Loading from 'Commonitem/Loader';
import AuthLayout from '../Layouts/AuthLayout';

const AuthRoute = () => {
  let AsyncLoginForm = Loadable({
    loader: () => import('Views/Auth/AuthLogin'),
    loading: Loading,
  });
  let AsyncRegisterForm = Loadable({
    loader: () => import('Views/Auth/Signup'),
    loading: Loading,
  });
  return (
    <AuthLayout>
      <Switch>
        <Route exact path='/auth/login' component={AsyncLoginForm}></Route>
        <Route exact path='/auth/signup' component={AsyncRegisterForm}></Route>
      </Switch>
    </AuthLayout>
  );
};
export default AuthRoute;
