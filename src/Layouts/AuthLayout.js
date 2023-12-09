import { Layout} from "antd";
const { Content,} = Layout;
const AuthLayout = ({ children }) => {
  return (
      <Layout >
        <Content>
          {children}
       </Content>
    </Layout>
  );
};
export default AuthLayout;