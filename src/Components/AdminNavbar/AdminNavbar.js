import React ,{useState} from 'react'
import {Layout,Col,Row, Avatar,Dropdown} from 'antd';
import { MenuOutlined,UserOutlined} from '@ant-design/icons';
import DrawerMenu from '../Navbar/Drawer';
import {admindashboard} from '../Navbar/NavDroupDownList'

const { Header } = Layout; 


const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const handelClick=()=>{ 
    setVisible(true)
  }
  return (
    <>
      <Header>
        <Row justify="space-between"  className="headerNav">
          <Col>
            <Row>
              <Col span={12}>
                <MenuOutlined style={{color:'white',fontSize:'30px'}} onClick={handelClick}/>
                  <DrawerMenu visiableDrawer={visible} onSetDrawer={(e)=>setVisible(e)}/>
              </Col>
              <Col span={12}>
              SarjanHardware
            </Col>
          </Row>
          </Col>
          <Col >
          <Row gutter={[8,8]} className="navSignUpLogin" >
            <Col >
            <Dropdown overlay={admindashboard} placement="bottomLeft">
                <Avatar size="small" icon={<UserOutlined />} />
            </Dropdown>
            </Col>
          </Row>
          </Col>
        </Row>
       
      </Header>
    </>
  );
};
export default Navbar;