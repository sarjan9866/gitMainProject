import React ,{useState} from 'react'
import {Layout,Col,Row,Input, Dropdown,Menu, Button} from 'antd';
import { MenuOutlined,ShoppingCartOutlined} from '@ant-design/icons';
import {servicesmenu,painterMenu,suppliresmenu,plumber,carpenter, manPower, Repair} from './NavDroupDownList';
import DrawerMenu from './Drawer';
import history from "Utils/history"

const { Header } = Layout; 
const { Search } = Input;

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const handelClick=()=>{ 
    setVisible(true)
  }
  const handelLogin=()=>{
    history.push(`/auth/login`)

  }
  const handelSignUp=()=>{
    history.push(`auth/signup`)
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
              SOG-sewa
            </Col>
          </Row>
          </Col>
          <Col className="headerSearchLarge">
            <Search placeholder="input search text"  enterButton  className="searchNavbar"/>
          </Col>
          <Col >
          <Row gutter={[8,8]} className="navSignUpLogin" >
            <Col span={8}>
              <ShoppingCartOutlined style={{fontSize:"30px"}}/>
            </Col>
            <Col span={8} className="link__btn">
              <Button type="link" onClick={handelLogin}>
                Login
              </Button>
            </Col>
            <Col span={8}  className="link__btn">
              <Button type="link" onClick={handelSignUp}>
                SignUp
              </Button>
            </Col>
          </Row>
          </Col>
        </Row>
       
      </Header>
      <div className="headerSearchInput">
        <Search placeholder="input search text"  enterButton  style={{width:'100%'}}/>
      </div>
      <div className="headerComponent">
        <Header>
        <Menu mode="horizontal" >
        
         
<Menu.Item key="1">
            <Dropdown overlay={servicesmenu} placement="bottomLeft">

            <p>Electrical</p>
            </Dropdown>
          </Menu.Item>
          
          <Menu.Item key="1">
          <Dropdown overlay={painterMenu} placement="bottomLeft">
            <p>Painter</p>
          </Dropdown>
          </Menu.Item>
         
          <Menu.Item key="2">
            <Dropdown overlay={plumber} placement="bottomLeft">
              <p >
                Plumber
              </p>
            </Dropdown>
          </Menu.Item>

          <Menu.Item key="3">
            <Dropdown overlay={carpenter} placement="bottomLeft">
              <p >
                Carpenter
              </p>
            </Dropdown>
          </Menu.Item>

          <Menu.Item key="4">
            <Dropdown overlay={manPower} placement="bottomLeft">
              <p >
                ManPower
              </p>
            </Dropdown>
          </Menu.Item>

          <Menu.Item key="5" >
          <Dropdown overlay={suppliresmenu} placement="bottomLeft">
            <p>Supplier</p>
            </Dropdown>
          </Menu.Item>

          <Menu.Item key="6" >
          <Dropdown overlay={Repair} placement="bottomLeft">
            <p>Repair</p>
            </Dropdown>
          </Menu.Item>


          <Menu.Item key="7">
            About
          </Menu.Item> 
        </Menu>
        </Header>
      </div>
    </>
  );
};
export default Navbar;