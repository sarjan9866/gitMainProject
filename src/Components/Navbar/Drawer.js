import React from 'react';
import { Drawer, Button, Space } from 'antd';

const DrawerMenu = (props) => {

  // const [size, setSize] = useState();

  // const showDefaultDrawer = () => {
  //   setSize('default');
  //   props.onSetDrawer(true);
  // };

  // const showLargeDrawer = () => {
  //   setSize('large');
  //   props.onSetDrawer(true);
  // };

  const onClose = () => {
    props.onSetDrawer(false);
  };

  return (
      <Drawer
        title={` Drawer`}
        placement="left"
        onClose={onClose}
        visible={props.visiableDrawer}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
  );
};
export default DrawerMenu
