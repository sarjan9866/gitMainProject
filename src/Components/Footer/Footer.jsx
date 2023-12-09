import { Row ,Col, Space} from "antd";

const Footer = () => {
  return (
    <div className="footer-containt">
      <Row>
        <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
          <Row justify="center">
            Logo Contain
          </Row>
          <Row justify='center'>
          &copy; copyrights to Sargan Hrdware
          </Row>
        </Col>
        <Col xxl={18} xl={18} lg={18} md={18} sm={24} xs={24}>
          <Row justify="center">
            <Space direction="vertical">
              <Col >
                Web
              </Col>
              <Col>
                Contact 9899089098
              </Col>
              <Col>
                Email : ewesarjan3@gmail.com
              </Col>
              <Col>
                Services
              </Col>
              <Col>
                About Us
              </Col>
             </Space>
          </Row>
        </Col>
      </Row>
      <Row justify="center">
        Service Should be 24 hr 
      </Row>
    </div>
  )
};
export default Footer;
