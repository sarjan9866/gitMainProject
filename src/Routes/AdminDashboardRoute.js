import { Route, Switch } from "react-router";
import Loadable from 'react-loadable';
import Loading from 'Commonitem/Loader';
import AdminLayout from 'Layouts/AdminLayout';

const AdminDashboardRoute = () => {

  let AsyncAdminDashboard= Loadable({
    loader: () => import('AdminView/AdminDashboard/admindashBoard'),
    loading: Loading,
  });
  return (
    <AdminLayout>
      <Switch>
        <Route exact path='/admin/dashboard' component={AsyncAdminDashboard}></Route>
      </Switch>
    </AdminLayout>
  );
};
export default AdminDashboardRoute;