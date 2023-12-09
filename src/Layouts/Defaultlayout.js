import { Layout} from "antd";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
const { Content,} = Layout;
const DefaultLayout = ({ children }) => {
  return (
    <Layout>
      <Navbar />
      <Layout className='site-layout-content'>
        <Content>
          {children}
       </Content>
      </Layout>
      <Footer />
    </Layout>
  );
};
export default DefaultLayout;
