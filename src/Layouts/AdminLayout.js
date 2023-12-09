import {Divider,Layout, Menu,Row,Typography } from "antd";
import {
  CaretRightOutlined,
  TeamOutlined,
  CalendarOutlined,
  CopyOutlined,
  SettingOutlined,
  DashboardOutlined
} from "@ant-design/icons";
import { useHistory } from "react-router";
import {Link} from 'react-router-dom';
import AdminNave from "Components/AdminNavbar/AdminNavbar";
import {useSize} from '../Commonitem/WindowSize';

const { Content,Sider } = Layout;
const AdminLayout = ({ children }) => {
    const {innerWidth}=useSize()
    // const [visible, setVisible] = useState(false);
    const history = useHistory();
    // const showDrawer = () => {
    //   setVisible(true);
    // };
    // const onClose = () => {
    //   setVisible(false);
    // };
  
  return (
    <Layout >
        <AdminNave/>
        <Layout>
          <Sider
            theme='light'
            breakpoint='lg'
            collapsedWidth={100}
            style={{
            minHeight: "100vh",
            left: 0,
            paddingTop: "5px",
            }}
            width={250}
        >
            <Row className="admin-dashboard_title">
                <Typography.Title level={2} >
                    <Link to="/"> 
                        {innerWidth < 1000 ? <DashboardOutlined /> :"Dashboard"}
                    </Link>
                </Typography.Title>
            </Row>
            <Divider />
            <Menu
                style={{ maxWidth: 250 }}
                mode='inline'
                defaultSelectedKeys={[history.location.pathname]}
                onClick={(e) => history.push(e.key)}
            >
            <Menu.Item
                key='/'
                icon={<CaretRightOutlined className="sider__icon" />}
            >
                Product
            </Menu.Item>
            <Menu.Item
                key='/people'
                icon={<TeamOutlined className="sider__icon"/>}
            >
                Services
            </Menu.Item>
            <Menu.Item
                key='/leave'
                icon={<CalendarOutlined className="sider__icon"/>}
            >
                Machines
            </Menu.Item>
            <Menu.Divider style={{ marginTop: 15 }} />
            <Menu.Item
                style={{ marginTop: 15 }}
                key='/reports'
                icon={<CopyOutlined className="sider__icon"/>}
            >
            Supplires
            </Menu.Item>
            <Menu.Item
                key='/settings'
                icon={<SettingOutlined className="sider__icon"/>}
            >
                Settings
            </Menu.Item>
            </Menu>
            <Divider />
        </Sider>
        <Content >
          {children}
       </Content>
       </Layout>
    </Layout>
  );
};
export default AdminLayout;