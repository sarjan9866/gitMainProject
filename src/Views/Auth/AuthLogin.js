import React from "react";
import { Form, Button, Row, Col, Input, Typography, Divider } from "antd";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
// import { Input, Password } from "../Common/AntdComponents"
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Image } from "antd";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import loginBackground from "assets/images/classes.jpg";
import gmail from "assets/images/users/gmail.png";

const LoginForm = (props) => {
  
  return (
    <React.Fragment>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 164, 73, .7),rgba(10, 81, 163, .7)), url(${loginBackground})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "white",
          height: "100vh",
          overflow: "auto",
          paddingBottom: "1rem",
          padding: "0rem .5rem",
        }}
      >
        <Row justify="center" >
          <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24} className="login__form">
            {/* <Row className="login__form"> */}
              <Row justify="start">
                <Typography.Title level={4}>
                  Sign In to Your Account
                </Typography.Title>
              </Row>
              <Form  layout="vertical" name="Add User">
                <Form.Item
                  name={"email"}
                  type={"email"}
                  rules={[
                    {
                      required: true,
                      message: "Please input your Email!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    required
                  />
                </Form.Item>
                <Form.Item
                  name={"password"}
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                  />
                </Form.Item>
                <Button
                //   onClick={handleSubmit}
                //   form={form}
                  block
                //   loading={btnLoading}
                  className="btn-green"
                  textButton="middle"
                  style={{ borderRadius: "5px", height: "40px" }}
                >
                  Sign In
                </Button>
                <Link
                  to="/auth/forgetPassword"
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    color: "#00A449",
                    marginTop: "1rem",
                  }}
                >
                  Forgot password?
                </Link>
                <Divider plain>OR</Divider>
                <Row gutter={[8,8]}>
                  <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
                    <FacebookLogin
                      appId="184040017025668"
                      fields="name,email,picture"
                      // callback={(params) => {
                      //   handleFacebookLogin(params)
                      // }}
                      icon={
                        <FontAwesomeIcon
                          icon={faFacebookF}
                          style={{ marginTop: "5px", marginRight: "5px" }}
                        />
                      }
                      cssClass={"facebook-btn"}
                      textButton={
                        <span style={{ marginTop: "5px" }}>
                          &nbsp;&nbsp;Continue with Facebook
                        </span>
                      }
                    />
                  </Col>
                  <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
                    <GoogleLogin
                      clientId="398789378948-nb37eegdhfh705rs5hburce46l1mhgvp.apps.googleusercontent.com"
                      className="google-btn"
                      icon={false}
                      // onClick={handleGoogleLogin}
                      // onSuccess={handleGoogleLogin}
                      // onFailure={handleGoogleLogin}
                    >
                      <Image
                        style={{ height: "15px", width: "20px" }}
                        src={gmail}
                      />

                      <span>&nbsp;&nbsp;Continue with Gmail</span>
                    </GoogleLogin>
                  </Col>
                </Row>
                <Row justify="center">
                  <p>
                    Don’t have account?
                    <Link
                      to={"/auth/signup"}
                      style={{ color: "#00A449", paddingLeft: "5px" }}
                    >
                      Sign up now
                    </Link>
                  </p>
                </Row>
              </Form>
            {/* </Row> */}
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}

export default LoginForm
